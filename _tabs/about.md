---
# the default layout is 'page'
icon: fas fa-info-circle text-info
order: 4
files:
  - name: ".vscode/settings.json"
    language: "json"
    content: |
      {
        "markdown-pdf.styles": [
          "style.css"
        ]
      }

  - name: "style.css"
    language: "css"
    content: |
      .container { max-width:1200px; margin:0 auto; }
      .cards-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; padding:10px; }
      .card { background:white; border-radius:12px; overflow:hidden; box-shadow:0 10px 20px rgba(0,0,0,0.1); margin:20px 0; border:1px solid #ccc8; }
      .card-header { padding:12px; font-size:1.1rem; font-weight:600; color:white; }
      .card-body { padding:10px; font-family:monospace; font-size:0.9rem; }
      .frontend { background:#3498db; }
      .backend { background:#2ecc71; }
      .database { background:#9b59b6; }
      .cloud { background:#f39c12; }
      .command { margin:6px 0; }

  - name: "frontend/App.jsx"
    language: "javascript"
    content: |
      import React from 'react';

      export default function App() {
        return (
          <div className="container">
            <h1>Mi Portfolio FullStack</h1>
            <p>Frontend con React</p>
          </div>
        );
      }

  - name: "backend/server.js"
    language: "javascript"
    content: |
      const express = require('express');
      const app = express();
      const port = 3000;

      app.get('/api/skills', (req, res) => {
        res.json({
          frontend: ['React', 'Vue', 'Tailwind'],
          backend: ['Node.js', 'Express', 'Java'],
          database: ['PostgreSQL', 'MongoDB'],
          cloud: ['AWS', 'Firebase']
        });
      });

      app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

  - name: "database/schema.sql"
    language: "sql"
    content: |
      CREATE TABLE skills (
        id SERIAL PRIMARY KEY,
        category VARCHAR(50),
        name VARCHAR(50)
      );

      INSERT INTO skills (category, name) VALUES
      ('frontend','React'),
      ('frontend','Vue'),
      ('backend','Node.js'),
      ('backend','Express'),
      ('backend','Java'),
      ('database','PostgreSQL'),
      ('database','MongoDB'),
      ('cloud','AWS'),
      ('cloud','Firebase');

  - name: "cloud/deployment.md"
    language: "md"
    content: |
      # Despliegue en la nube
      - Backend en AWS EC2
      - Base de datos en AWS RDS PostgreSQL
      - Frontend en Vercel
      - CI/CD con GitHub Actions

---

{% include about-me.html 
    image="/assets/media/iam.webp" 
    author="@mcherrera" 
    subtitle="Tu aliado tecnológico" 
    tag="web" 
    text="¡Hola 👋! Soy Marco Contreras, un desarrollador __full stack__ <i class='fa fa-code'></i>. Me gusta crear soluciones que realmente ayuden, entender bien el problema antes de escribir una línea de código y mantener el enfoque en la simplicidad y con una mirada innovadora. Valoro el aprendizaje constante como una forma de adaptarse y mejorar con el tiempo. Me gusta dar forma a recursos y proyectos que me desafían y me impulsan a seguir aprendiendo. Para mí, cada reto es una oportunidad de crecer y proyectarme hacia el futuro con nuevas ideas. Tengo que destacar sobre mí, que gracias a esta mentalidad de crecimiento donde quiero compartir lo que sé y acompañar a la comunidad que está comenzando en este camino, me trae muchos beneficios, es hora de aprender juntos y hacer que el proceso sea más enriquecedor." 
    sign="@mcherrera.dev" 
%}

{% include file-viewer.html files=page.files name='aboutme' %}
{% include file-viewer.html files=page.files name='chunk' %}
