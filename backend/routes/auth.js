const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const pool    = require('../db');

// ── POST /api/auth/register ────────────────────────────────
router.post('/register', async (req, res) => {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password)
    return res.status(400).json({ error: 'Todos los campos son requeridos' });

  try {
    const [existing] = await pool.query(
      'SELECT id FROM usuarios WHERE email = ?', [email]
    );
    if (existing.length > 0)
      return res.status(409).json({ error: 'El email ya está registrado' });

    const hash = await bcrypt.hash(password, 12);
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
      [nombre.trim(), email.toLowerCase().trim(), hash]
    );

    const token = jwt.sign(
      { id: result.insertId, email, nombre: nombre.trim() },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({ token, usuario: { id: result.insertId, nombre: nombre.trim(), email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// ── POST /api/auth/login ───────────────────────────────────
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email y contraseña requeridos' });

  try {
    const [rows] = await pool.query(
      'SELECT * FROM usuarios WHERE email = ?', [email.toLowerCase().trim()]
    );
    if (rows.length === 0)
      return res.status(401).json({ error: 'Credenciales incorrectas' });

    const usuario = rows[0];
    const valid   = await bcrypt.compare(password, usuario.password);
    if (!valid)
      return res.status(401).json({ error: 'Credenciales incorrectas' });

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, nombre: usuario.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// GET /api/gastos/periodos — años y meses con registros
router.get('/periodos', async (req, res) => {
  const uid = req.usuario.id;
  try {
    const [rows] = await pool.query(
      `SELECT DISTINCT YEAR(fecha) AS anio, MONTH(fecha) AS mes
       FROM gastos WHERE usuario_id = ?
       ORDER BY anio DESC, mes DESC`,
      [uid]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener períodos' });
  }
});

module.exports = router;
