# Repository Guidelines

## Project Structure & Module Organization
This is a full-stack application consisting of a vanilla JavaScript frontend and a Node.js/Express backend.

- **Frontend**: Located in the root directory. Core logic is in [./app.js](./app.js) and [./i18n.js](./i18n.js). It uses [./style.css](./style.css) for styling and various HTML files ([./index.html](./index.html), [./admin.html](./admin.html), [./landing.html](./landing.html)) for the UI.
- **Backend**: Contained within the [./backend/](./backend/) directory.
  - [./backend/server.js](./backend/server.js): Main entry point.
  - [./backend/db.js](./backend/db.js): MySQL database connection logic.
  - [./backend/routes/](./backend/routes/): API endpoint definitions (e.g., [./backend/routes/auth.js](./backend/routes/auth.js), [./backend/routes/gastos.js](./backend/routes/gastos.js)).
  - [./backend/middleware/](./backend/middleware/): Custom Express middleware.
- **Database**: Schema definitions are provided in [./database.sql](./database.sql).

## Build, Test, and Development Commands
Commands should be executed within the [./backend/](./backend/) directory for backend tasks.

- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev` (uses `nodemon`)
- **Start production server**: `npm start`
- **Frontend**: Open [./index.html](./index.html) directly in a browser or use a tool like Live Server.

## Coding Style & Naming Conventions
- **Frontend**: Vanilla JavaScript without a framework. Uses `fetch` for API calls.
- **Backend**: Node.js with Express and `mysql2`.
- **Naming**: Variable and function names are primarily in Spanish or English (mixed), but recent commits favor Spanish for feature descriptions.

## Commit & Pull Request Guidelines
Commit messages should be descriptive and typically in Spanish, following the pattern observed in history:
- `se agrego [funcionalidad]`
- `se añadio [funcionalidad]`
- `arreglo en [archivo]`
- `validacion [campo]`

## Environment Setup
Ensure a `.env` file exists in the [./backend/](./backend/) directory with the following variables (refer to [./backend/.env.example](./backend/.env.example)):
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `JWT_SECRET`
- `PORT` (default 3000)
- `FRONTEND_URL`
