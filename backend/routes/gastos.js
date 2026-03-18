const router = require('express').Router();
const pool   = require('../db');
const auth   = require('../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

// ── GET /api/gastos?anio=&mes= ─────────────────────────────
router.get('/', async (req, res) => {
  const { anio, mes, categoria, buscar } = req.query;
  const uid = req.usuario.id;

  let sql    = 'SELECT * FROM gastos WHERE usuario_id = ?';
  const params = [uid];

  if (anio && mes) {
    sql += ' AND YEAR(fecha) = ? AND MONTH(fecha) = ?';
    params.push(anio, mes);
  } else if (anio) {
    sql += ' AND YEAR(fecha) = ?';
    params.push(anio);
  }

  if (categoria) {
    sql += ' AND categoria = ?';
    params.push(categoria);
  }

  if (buscar) {
    sql += ' AND descripcion LIKE ?';
    params.push(`%${buscar}%`);
  }

  sql += ' ORDER BY fecha DESC, hora DESC';

  try {
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener gastos' });
  }
});

// ── GET /api/gastos/meses — lista de meses con gastos ──────
router.get('/meses', async (req, res) => {
  const uid = req.usuario.id;
  try {
    const [rows] = await pool.query(
      `SELECT YEAR(fecha) AS anio, MONTH(fecha) AS mes,
              SUM(monto) AS total, COUNT(*) AS registros
       FROM gastos
       WHERE usuario_id = ?
       GROUP BY YEAR(fecha), MONTH(fecha)
       ORDER BY anio DESC, mes DESC`,
      [uid]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener meses' });
  }
});

// ── GET /api/gastos/resumen — por categoría (mes/año) ──────
router.get('/resumen', async (req, res) => {
  const { anio, mes } = req.query;
  const uid = req.usuario.id;

  let sql = `SELECT categoria, SUM(monto) AS total, COUNT(*) AS registros
             FROM gastos WHERE usuario_id = ?`;
  const params = [uid];

  if (anio && mes) {
    sql += ' AND YEAR(fecha) = ? AND MONTH(fecha) = ?';
    params.push(anio, mes);
  }

  sql += ' GROUP BY categoria ORDER BY total DESC';

  try {
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener resumen' });
  }
});

// ── POST /api/gastos ───────────────────────────────────────
router.post('/', async (req, res) => {
  const { fecha, hora, monto, categoria, descripcion } = req.body;
  const uid = req.usuario.id;

  if (!fecha || !hora || !monto || !categoria)
    return res.status(400).json({ error: 'Fecha, hora, monto y categoría son requeridos' });

  if (isNaN(monto) || Number(monto) <= 0)
    return res.status(400).json({ error: 'El monto debe ser un número positivo' });

  try {
    const [result] = await pool.query(
      'INSERT INTO gastos (usuario_id, fecha, hora, monto, categoria, descripcion) VALUES (?, ?, ?, ?, ?, ?)',
      [uid, fecha, hora, Number(monto), categoria, descripcion || null]
    );
    const [rows] = await pool.query('SELECT * FROM gastos WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear gasto' });
  }
});

// ── PUT /api/gastos/:id ────────────────────────────────────
router.put('/:id', async (req, res) => {
  const { id }  = req.params;
  const uid     = req.usuario.id;
  const { fecha, hora, monto, categoria, descripcion } = req.body;

  try {
    const [existing] = await pool.query(
      'SELECT id FROM gastos WHERE id = ? AND usuario_id = ?', [id, uid]
    );
    if (existing.length === 0)
      return res.status(404).json({ error: 'Gasto no encontrado' });

    await pool.query(
      'UPDATE gastos SET fecha=?, hora=?, monto=?, categoria=?, descripcion=? WHERE id=?',
      [fecha, hora, Number(monto), categoria, descripcion || null, id]
    );
    const [rows] = await pool.query('SELECT * FROM gastos WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar gasto' });
  }
});

// ── DELETE /api/gastos/:id ─────────────────────────────────
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const uid    = req.usuario.id;

  try {
    const [existing] = await pool.query(
      'SELECT id FROM gastos WHERE id = ? AND usuario_id = ?', [id, uid]
    );
    if (existing.length === 0)
      return res.status(404).json({ error: 'Gasto no encontrado' });

    await pool.query('DELETE FROM gastos WHERE id = ?', [id]);
    res.json({ message: 'Gasto eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar gasto' });
  }
});

module.exports = router;
