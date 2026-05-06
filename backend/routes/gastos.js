const router = require('express').Router();
const pool   = require('../db');
const auth   = require('../middleware/auth');
const { logActividad } = require('./actividad');

// Todas las rutas requieren autenticación
router.use(auth);

// ── GET /api/gastos?anio=&mes=&todo=true ─────────────────────────────
router.get('/', async (req, res) => {
  const { anio, mes, categoria, buscar, todo } = req.query;
  const uid = req.usuario.id;

  let sql    = 'SELECT * FROM gastos WHERE usuario_id = ?';
  const params = [uid];

  if (todo === 'true') {
    // Reporte completo: todos los gastos (sin filtro de fecha)
    sql += ' ORDER BY fecha DESC, hora DESC';
  } 
  else if (anio && mes) {
    sql += ' AND YEAR(fecha) = ? AND MONTH(fecha) = ?';
    params.push(anio, mes);
  } 
  else if (anio) {
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

  if (!todo) {
    sql += ' ORDER BY fecha DESC, hora DESC';
  }

  try {
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener gastos' });
  }
});

// Resto de rutas sin cambios...
// ── GET /api/gastos/meses ─────────────────────────────
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

// ── GET /api/gastos/resumen ─────────────────────────────
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

// GET /api/gastos/periodos
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

// GET categorías únicas
router.get('/categorias', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT DISTINCT categoria FROM gastos 
       WHERE usuario_id = ? 
       ORDER BY categoria ASC`,
      [req.usuario.id]
    );
    res.json(rows.map(r => r.categoria));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST, PUT, DELETE (sin cambios)
router.post('/', async (req, res) => { /* ... tu código actual ... */ });
router.put('/:id', async (req, res) => { /* ... tu código actual ... */ });
router.delete('/:id', async (req, res) => { /* ... tu código actual ... */ });

module.exports = router;