require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const authRoutes  = require('./routes/auth');
const gastosRoutes = require('./routes/gastos');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middlewares ────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// ── Rutas ──────────────────────────────────────────────────
app.use('/api/auth',   authRoutes);
app.use('/api/gastos', gastosRoutes);

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// ── Inicio ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Servidor corriendo en puerto ${PORT}`);
});
