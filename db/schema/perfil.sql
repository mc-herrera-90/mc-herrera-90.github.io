-- Tabla de habilidades
CREATE TABLE skills (
    id INTEGER PRIMARY KEY,
    category TEXT NOT NULL,  -- Frontend, Backend, Bases de Datos, etc.
    skill TEXT NOT NULL      -- Cada habilidad individual
);

-- Inserciones basadas en tu listado
INSERT INTO skills (category, skill) VALUES
('Frontend','HTML'),
('Frontend','CSS'),
('Frontend','JavaScript'),
('Frontend','JavaScript (ES6+)'),
('Frontend','React'),
('Frontend','Angular'),
('Frontend','Vue.js'),
('Frontend','SASS'),
('Frontend','LESS'),
('Frontend','Bootstrap'),
('Frontend','Material-UI'),
('Frontend','Responsive Web Design'),
('Frontend','AJAX'),
('Frontend','Fetch API'),
('Frontend','WebSockets'),
('Frontend','Socket.IO'),

('Backend','Node.js'),
('Backend','Express.js'),
('Backend','Django'),
('Backend','FastAPI'),
('Backend','Spring Boot'),
('Backend','Spring Security'),
('Backend','APIs RESTful'),
('Backend','GraphQL'),
('Backend','Docker'),

('Bases de Datos','SQL (MySQL, PostgreSQL, MSSQL Server)'),
('Bases de Datos','NoSQL (MongoDB, Redis, Cassandra)'),
('Bases de Datos','Optimización de Consultas'),
('Bases de Datos','Administración de Bases de Datos'),
('Bases de Datos','Indexación y Normalización'),
('Bases de Datos','Procedimientos Almacenados y Funciones'),

('DevOps / Tools','Git'),
('DevOps / Tools','GitHub Actions'),
('DevOps / Tools','Docker'),
('DevOps / Tools','CI/CD'),
('DevOps / Tools','Automatización'),

('Cloud','AWS'),
('Cloud','Azure'),
('Cloud','GCP'),

('Soft Skills','Capacidad de trabajo bajo presión'),
('Soft Skills','Flexibilidad al cambio'),
('Soft Skills','Orientación a resultados'),
('Soft Skills','Proactividad'),
('Soft Skills','Resolución de problemas prácticos'),
('Soft Skills','Pensamiento analítico'),
('Soft Skills','Aprendizaje rápido');
