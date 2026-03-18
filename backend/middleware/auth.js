const jwt = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'Token requerido' });

  const token = header.startsWith('Bearer ') ? header.slice(7) : header;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;          // { id, email, nombre }
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
