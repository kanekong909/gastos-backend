-- ============================================================
-- GASTOS DIARIOS - Esquema MySQL para Railway
-- Ejecuta este script en tu base de datos de Railway
-- ============================================================

CREATE DATABASE IF NOT EXISTS gastos_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE gastos_db;

-- -----------------------------------------------------------
-- Tabla de usuarios
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100)        NOT NULL,
  email       VARCHAR(150)        NOT NULL UNIQUE,
  password    VARCHAR(255)        NOT NULL,          -- bcrypt hash
  created_at  DATETIME            DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME            DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------------
-- Tabla de categorías (seeding incluido)
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS categorias (
  id     INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO categorias (nombre) VALUES
  ('Comida'),
  ('Transporte'),
  ('Entretenimiento'),
  ('Ropa'),
  ('Otros');

-- -----------------------------------------------------------
-- Tabla de gastos
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS gastos (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id   INT              NOT NULL,
  fecha        DATE             NOT NULL,
  hora         TIME             NOT NULL,
  monto        DECIMAL(12, 2)   NOT NULL,
  categoria    VARCHAR(80)      NOT NULL,
  descripcion  VARCHAR(255)     DEFAULT NULL,
  created_at   DATETIME         DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_gasto_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

  INDEX idx_usuario_fecha (usuario_id, fecha),
  INDEX idx_fecha          (fecha)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -----------------------------------------------------------
-- Vista útil: resumen mensual por usuario
-- -----------------------------------------------------------
CREATE OR REPLACE VIEW resumen_mensual AS
SELECT
  g.usuario_id,
  YEAR(g.fecha)      AS anio,
  MONTH(g.fecha)     AS mes,
  g.categoria,
  COUNT(*)           AS total_registros,
  SUM(g.monto)       AS total_monto
FROM gastos g
GROUP BY g.usuario_id, YEAR(g.fecha), MONTH(g.fecha), g.categoria;
