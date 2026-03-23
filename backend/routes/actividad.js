const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, isAdmin } = require('./auth');

// Helper para registrar actividad (exportable)
async function logActividad(usuario_id, accion, entidad, detalle = null, ip = null) {
  try {
    await db.query(
      'INSERT INTO actividad_log (usuario_id, accion, entidad, detalle, ip) VALUES (?, ?, ?, ?, ?)',
      [usuario_id, accion, entidad, detalle, ip]
    );
  } catch(e) {
    console.error('Log error:', e.message);
  }
}

// GET /api/actividad/mia — log del usuario autenticado (últimos 30 días)
router.get('/mia', authenticateToken, async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT id, accion, entidad, detalle, ip, created_at
       FROM actividad_log
       WHERE usuario_id = ?
         AND created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
       ORDER BY created_at DESC
       LIMIT 200`,
      [req.usuario.id]
    );
    res.json(rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/actividad/admin — log global (solo admin)
router.get('/admin', authenticateToken, async (req, res) => {
  // Verifica que sea admin por email o por campo en BD
  if (req.usuario.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Sin acceso' });
  }
  try {
    const [rows] = await db.query(
      `SELECT a.id, a.accion, a.entidad, a.detalle, a.ip, a.created_at,
              u.nombre as usuario_nombre, u.email as usuario_email
       FROM actividad_log a
       JOIN usuarios u ON u.id = a.usuario_id
       WHERE a.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
       ORDER BY a.created_at DESC
       LIMIT 500`,
    );
    res.json(rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = { router, logActividad };