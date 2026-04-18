require('dotenv').config();
const express         = require('express');
const cors            = require('cors');
const authRoutes      = require('./routes/auth');
const gastosRoutes    = require('./routes/gastos');
const billterasRoutes = require('./routes/billeteras');
const recurrentesRoutes = require('./routes/recurrentes');
const { router: actividadRoutes } = require('./routes/actividad');
const presupuestosRoutes = require('./routes/presupuestos');
const recovery = require('./routes/recovery');
console.log('✅ recovery importado:', typeof recovery);
const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'https://kanekong909.github.io',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors());
app.use(express.json({ limit: '2mb' }));

// ── Rutas ──────────────────────────────────────────────────
app.use('/api/auth',         authRoutes);
app.use('/api/auth',         recovery);
app.use('/api/gastos',       gastosRoutes);
app.use('/api/billeteras',   billterasRoutes);
app.use('/api/recurrentes',  recurrentesRoutes);
app.use('/api/actividad',    actividadRoutes);
app.use('/api/presupuestos', presupuestosRoutes);

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok', node: process.version }));

app.listen(PORT, () => {
  console.log(`✅  Servidor corriendo en puerto ${PORT}`);
});