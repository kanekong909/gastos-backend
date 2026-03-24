const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// Helper para obtener IP
const getIp = req => req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

// GET presupuestos del mes
router.get('/', auth, async (req, res) => {
  const { mes, anio } = req.query;
  try {
    const [rows] = await db.query(
      `SELECT p.*, 
        COALESCE(SUM(g.monto), 0) AS gastado
       FROM presupuestos p
       LEFT JOIN gastos g 
         ON g.usuario_id = p.usuario_id 
         AND g.categoria COLLATE utf8mb4_unicode_ci = p.categoria COLLATE utf8mb4_unicode_ci
         AND MONTH(g.fecha) = p.mes 
         AND YEAR(g.fecha) = p.anio
       WHERE p.usuario_id = ? AND p.mes = ? AND p.anio = ?
       GROUP BY p.id`,
      [req.usuario.id, mes, anio]
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST crear/actualizar presupuesto
router.post('/', auth, async (req, res) => {
  const { categoria, monto, mes, anio } = req.body;
  if (!categoria || !monto || !mes || !anio)
    return res.status(400).json({ error: 'Faltan campos' });
  try {
    await db.query(
      `INSERT INTO presupuestos (usuario_id, categoria, monto, mes, anio)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE monto = VALUES(monto)`,
      [req.usuario.id, categoria, monto, mes, anio]
    );

    await db.query(
      `INSERT INTO actividad_log (usuario_id, accion, entidad, detalle, ip)
       VALUES (?, 'CREAR', 'presupuesto', ?, ?)`,
      [
        req.usuario.id,
        `Presupuesto ${categoria}: $${Number(monto).toLocaleString('es-CO')} — ${mes}/${anio}`,
        getIp(req)
      ]
    );

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE eliminar presupuesto
router.delete('/:id', auth, async (req, res) => {
  try {
    const [[pres]] = await db.query(
      'SELECT * FROM presupuestos WHERE id = ? AND usuario_id = ?',
      [req.params.id, req.usuario.id]
    );

    if (!pres) return res.status(404).json({ error: 'No encontrado' });

    await db.query(
      'DELETE FROM presupuestos WHERE id = ? AND usuario_id = ?',
      [req.params.id, req.usuario.id]
    );

    await db.query(
      `INSERT INTO actividad_log (usuario_id, accion, entidad, detalle, ip)
       VALUES (?, 'ELIMINAR', 'presupuesto', ?, ?)`,
      [
        req.usuario.id,
        `Presupuesto ${pres.categoria} eliminado (${pres.mes}/${pres.anio})`,
        getIp(req)
      ]
    );

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;