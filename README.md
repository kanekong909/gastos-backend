# 💰 Gastos Diarios

App web para registrar y visualizar gastos personales con autenticación por usuario.

## 📁 Estructura del proyecto

```
gastos-app/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── .env.example
│   ├── routes/
│   │   ├── auth.js
│   │   └── gastos.js
│   └── middleware/
│       └── auth.js
└── database.sql
```

---

## 🚀 Setup paso a paso

### 1. MySQL en Railway

1. Ve a [railway.app](https://railway.app) → New Project → MySQL
2. Abre el panel de tu base de datos → **Query** (o usa un cliente externo)
3. Copia y pega el contenido de `database.sql` y ejecútalo
4. Ve a **Variables** y copia: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`

---

### 2. Backend en Railway

1. En Railway → New Service → **GitHub Repo** (sube solo la carpeta `backend/` o el repo completo)
2. Railway auto-detecta Node.js
3. Agrega estas **Variables de entorno** en Railway:

```
DB_HOST       = (MYSQL_HOST de tu base de datos)
DB_PORT       = (MYSQL_PORT)
DB_USER       = (MYSQL_USER)
DB_PASSWORD   = (MYSQL_PASSWORD)
DB_NAME       = (MYSQL_DATABASE)
JWT_SECRET    = un_secreto_muy_largo_y_seguro_aqui_1234567890
PORT          = 3000
FRONTEND_URL  = *
```

4. Deploy → copia la URL pública (ej: `https://gastos-api.up.railway.app`)

---

### 3. Frontend

1. Abre `frontend/app.js`
2. En la línea 8, cambia:
```js
const API_URL = 'https://TU-BACKEND.up.railway.app/api';
```
Por tu URL de Railway:
```js
const API_URL = 'https://gastos-api.up.railway.app/api';
```

3. Sube los 3 archivos de `frontend/` a GitHub Pages, Netlify o Vercel

---

## 🌐 Endpoints API

| Método | Ruta                  | Descripción                        |
|--------|-----------------------|------------------------------------|
| POST   | /api/auth/register    | Registrar usuario                  |
| POST   | /api/auth/login       | Iniciar sesión                     |
| GET    | /api/gastos           | Listar gastos (filtros opcionales) |
| POST   | /api/gastos           | Crear gasto                        |
| PUT    | /api/gastos/:id       | Editar gasto                       |
| DELETE | /api/gastos/:id       | Eliminar gasto                     |
| GET    | /api/gastos/meses     | Resumen por mes                    |
| GET    | /api/gastos/resumen   | Resumen por categoría              |

---

## 🛠 Desarrollo local

```bash
cd backend
cp .env.example .env
# Edita .env con tus credenciales locales de MySQL
npm install
npm run dev
```

Abre `frontend/index.html` directamente en el navegador o usa Live Server.
