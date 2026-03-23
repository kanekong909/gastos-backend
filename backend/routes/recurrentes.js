const router = require('express').Router();
const pool   = require('../db');
const auth   = require('../middleware/auth');
const { logActividad } = require('./actividad');

router.use(auth);

// GET /api/recurrentes
router.get('/', async (req, res) => {
  const uid = req.usuario.id;
  try {
    const [rows] = await pool.query(
      `SELECT r.*, b.nombre AS billtera_nombre, b.emoji AS billtera_emoji
       FROM recurrentes r
       LEFT JOIN billeteras b ON r.billtera_id = b.id
       WHERE r.usuario_id = ? AND r.activo = 1
       ORDER BY r.dia_mes ASC`,
      [uid]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener recurrentes' });
  }
});

// GET /api/recurrentes/pendientes — los que no tienen gasto este mes y su día ya llegó
router.get('/pendientes', async (req, res) => {
  const uid = req.usuario.id;
  const now = new Date();
  const anio = now.getFullYear();
  const mes  = now.getMonth() + 1;
  const dia  = now.getDate();

  try {
    const [rows] = await pool.query(
      `SELECT r.*, b.nombre AS billtera_nombre, b.emoji AS billtera_emoji
       FROM recurrentes r
       LEFT JOIN billeteras b ON r.billtera_id = b.id
       WHERE r.usuario_id = ?
         AND r.activo = 1
         AND r.dia_mes <= ?
         AND NOT EXISTS (
           SELECT 1 FROM gastos g
           WHERE g.usuario_id = r.usuario_id
             AND g.descripcion = r.descripcion
             AND g.monto = r.monto
             AND g.categoria = r.categoria
             AND YEAR(g.fecha) = ?
             AND MONTH(g.fecha) = ?
         )
       ORDER BY r.dia_mes ASC`,
      [uid, dia, anio, mes]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener pendientes' });
  }
});

// POST /api/recurrentes
router.post('/', async (req, res) => {
  const { nombre, monto, categoria, descripcion, billtera_id, dia_mes } = req.body;
  const uid = req.usuario.id;

  if (!nombre || !monto || !categoria || !dia_mes)
    return res.status(400).json({ error: 'Nombre, monto, categoría y día son requeridos' });
  if (dia_mes < 1 || dia_mes > 31)
    return res.status(400).json({ error: 'El día debe estar entre 1 y 31' });

  try {
    const [result] = await pool.query(
      `INSERT INTO recurrentes (usuario_id, nombre, monto, categoria, descripcion, billtera_id, dia_mes)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [uid, nombre.trim(), Number(monto), categoria, descripcion || null, billtera_id || null, dia_mes]
    );
    const [rows] = await pool.query('SELECT * FROM recurrentes WHERE id = ?', [result.insertId]);
    await logActividad(uid, 'CREAR', 'recurrente',
      `Nombre: ${nombre.trim()} | Monto: $${Number(monto).toLocaleString()} | Dia: ${dia_mes}`,
      req.ip);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear recurrente' });
  }
});

// PUT /api/recurrentes/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const uid = req.usuario.id;
  const { nombre, monto, categoria, descripcion, billtera_id, dia_mes, activo } = req.body;

  try {
    const [existing] = await pool.query(
      'SELECT id FROM recurrentes WHERE id = ? AND usuario_id = ?', [id, uid]
    );
    if (!existing.length)
      return res.status(404).json({ error: 'Recurrente no encontrado' });

    await pool.query(
      `UPDATE recurrentes SET nombre=?, monto=?, categoria=?, descripcion=?,
       billtera_id=?, dia_mes=?, activo=? WHERE id=?`,
      [nombre, Number(monto), categoria, descripcion || null,
       billtera_id || null, dia_mes, activo ?? 1, id]
    );
    const [rows] = await pool.query('SELECT * FROM recurrentes WHERE id = ?', [id]);
    await logActividad(uid, 'EDITAR', 'recurrente',
      `ID: ${id} | Nombre: ${nombre} | Monto: $${Number(monto).toLocaleString()}`,
      req.ip);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar recurrente' });
  }
});

// DELETE /api/recurrentes/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const uid = req.usuario.id;

  try {
    const [existing] = await pool.query(
      'SELECT id FROM recurrentes WHERE id = ? AND usuario_id = ?', [id, uid]
    );
    if (!existing.length)
      return res.status(404).json({ error: 'Recurrente no encontrado' });

    await pool.query('DELETE FROM recurrentes WHERE id = ?', [id]);
    await logActividad(uid, 'ELIMINAR', 'recurrente',
    `ID: ${id}`,
    req.ip);
    res.json({ message: 'Recurrente eliminado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar recurrente' });
  }
});

module.exports = router;