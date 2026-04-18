// ═══════════════════════════════════════════════════
//  KASH — recovery.js  (backend/routes)
//  Recuperación de contraseña con Resend
//  npm install resend
// ═══════════════════════════════════════════════════

console.log('✅ recovery.js cargado correctamente');

const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const crypto  = require('crypto');
const pool    = require('../db');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Helpers ───────────────────────────────────────
const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hora

function generarToken() {
  return crypto.randomBytes(32).toString('hex');
}

// ── POST /api/auth/forgot-password ────────────────
// Recibe: { email }
// Genera token, lo guarda en BD y envía el email
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  // Siempre responder OK para no revelar si el email existe
  if (!email) return res.json({ ok: true });

  try {
    const [rows] = await pool.query(
      'SELECT id, nombre FROM usuarios WHERE email = ?',
      [email.toLowerCase().trim()]
    );

    if (!rows.length) {
      // No revelar que el email no existe
      return res.json({ ok: true });
    }

    const usuario = rows[0];
    const token   = generarToken();
    const expiry  = new Date(Date.now() + TOKEN_EXPIRY_MS);

    // Guardar token en la BD (tabla password_resets)
    // Primero eliminar tokens anteriores del mismo usuario
    await pool.query(
      'DELETE FROM password_resets WHERE usuario_id = ?',
      [usuario.id]
    );

    await pool.query(
      'INSERT INTO password_resets (usuario_id, token, expires_at) VALUES (?, ?, ?)',
      [usuario.id, token, expiry]
    );

    // URL del frontend — ajusta según tu dominio
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password.html?token=${token}`;

    // Enviar email con Resend
    await resend.emails.send({
      from: 'KASH <onboarding@resend.dev>',   // ← cambia por tu dominio verificado en Resend
      to:   email,
      subject: 'Restablecer contraseña — KASH',
      html: emailTemplate(usuario.nombre, resetUrl),
    });

    res.json({ ok: true });

  } catch (err) {
    console.error('forgot-password error:', err);
    // Aún así responder OK para no revelar info
    res.json({ ok: true });
  }
});

// ── POST /api/auth/reset-password ─────────────────
// Recibe: { token, password }
// Verifica token y actualiza contraseña
router.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password)
    return res.status(400).json({ error: 'Token y contraseña son requeridos' });

  if (password.length < 6)
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });

  try {
    // Buscar token válido y no expirado
    const [rows] = await pool.query(
      `SELECT pr.usuario_id, pr.expires_at, u.email
       FROM password_resets pr
       JOIN usuarios u ON u.id = pr.usuario_id
       WHERE pr.token = ? AND pr.expires_at > NOW()`,
      [token]
    );

    if (!rows.length) {
      return res.status(400).json({ error: 'El link es inválido o ya expiró. Solicita uno nuevo.' });
    }

    const { usuario_id } = rows[0];

    // Actualizar contraseña
    const hash = await bcrypt.hash(password, 12);
    await pool.query(
      'UPDATE usuarios SET password = ?, updated_at = NOW() WHERE id = ?',
      [hash, usuario_id]
    );

    // Eliminar token usado
    await pool.query(
      'DELETE FROM password_resets WHERE usuario_id = ?',
      [usuario_id]
    );

    res.json({ ok: true });

  } catch (err) {
    console.error('reset-password error:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// ── GET /api/auth/verify-reset-token ──────────────
// Verifica si un token es válido antes de mostrar el formulario
router.get('/verify-reset-token', async (req, res) => {
  const { token } = req.query;
  if (!token) return res.json({ valid: false });

  try {
    const [rows] = await pool.query(
      'SELECT id FROM password_resets WHERE token = ? AND expires_at > NOW()',
      [token]
    );
    res.json({ valid: rows.length > 0 });
  } catch {
    res.json({ valid: false });
  }
});

// ── Template del email ────────────────────────────
function emailTemplate(nombre, resetUrl) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#0d0d0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0"
          style="background:#141417;border:1px solid #2e2e35;border-radius:16px;overflow:hidden;max-width:480px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#141417;padding:32px 40px 24px;border-bottom:1px solid #f5a623;">
              <span style="font-size:22px;font-weight:800;color:#f5a623;letter-spacing:.1em;">◈ KASH</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <h2 style="margin:0 0 12px;color:#e8e8ec;font-size:22px;font-weight:700;">
                Restablecer contraseña
              </h2>
              <p style="margin:0 0 8px;color:#9898a8;font-size:15px;line-height:1.6;">
                Hola, <strong style="color:#e8e8ec;">${nombre}</strong>.
              </p>
              <p style="margin:0 0 28px;color:#9898a8;font-size:15px;line-height:1.6;">
                Recibimos una solicitud para restablecer la contraseña de tu cuenta.
                Haz clic en el botón de abajo para continuar. El link es válido por <strong style="color:#e8e8ec;">1 hora</strong>.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="border-radius:8px;background:#f5a623;">
                    <a href="${resetUrl}"
                      style="display:inline-block;padding:14px 32px;color:#000;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;">
                      Restablecer contraseña →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;color:#5e5e6e;font-size:13px;line-height:1.5;">
                Si no solicitaste esto, puedes ignorar este email. Tu contraseña no cambiará.
              </p>

              <!-- Link fallback -->
              <div style="margin-top:24px;padding:16px;background:#1c1c21;border-radius:8px;border:1px solid #2e2e35;">
                <p style="margin:0 0 6px;color:#5e5e6e;font-size:12px;">
                  Si el botón no funciona, copia este link:
                </p>
                <p style="margin:0;word-break:break-all;font-size:12px;">
                  <a href="${resetUrl}" style="color:#f5a623;text-decoration:none;">${resetUrl}</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #2e2e35;">
              <p style="margin:0;color:#5e5e6e;font-size:12px;text-align:center;">
                © ${new Date().getFullYear()} KASH · Este email fue enviado automáticamente
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = router;
