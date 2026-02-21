---
layout: main
title: "Developer"
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js"
  - assets/js/monaco-init.js
  - https://cdn.jsdelivr.net/npm/marked/marked.min.js
toc: false
---

<div class="content text-center" markdown="1">

# Marco Contreras

<div style="display:flex; justify-content:center;" class="my-3">
  <div
    style="
      width:clamp(90px, 12vw, 140px);
      aspect-ratio:1/1;
      border-radius:50%;
      background-image:url('/assets/media/me.webp');
      background-color: #191919;
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
      image-rendering:-webkit-optimize-contrast;
      image-rendering:high-quality;
      transform:translateZ(0);
      border:3px solid #ddd;
    "
  ></div>
</div>

<p class="mb-3 small mb-md-4 text-center fs-5">
  <i class="fa-solid fa-code"></i> Full-Stack | 
  <i class="fa-solid fa-cloud"></i> Cloud | 
  <i class="fa-solid fa-gamepad"></i> RetroGeek
</p>
</div>

{% include circle-line.html %}

```js
const profile = {
  role: "Full-Stack Developer & Cloud Architect",
  headline: "Construyo soluciones web escalables y bien diseñadas",
  focus: [
    "Arquitectura Cloud en AWS",
    "Desarrollo Full-Stack moderno",
    "Escalabilidad, rendimiento y seguridad",
    "Buenas prácticas y diseño limpio"
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Vue"],
    backend: ["Java", "Spring Boot", "Node.js", "APIs REST"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    cloud: ["AWS", "CloudFront", "Lightsail", "Arquitectura Cloud"],
    devops: ["Git", "Linux", "Docker"],
  }
};
```
{:file="profile.js" .typing .typing-fast }

<div class="content text-center" markdown="1">

## Consulta mis skills

<div class="icon-wrapper">
    {% include icon/dbplay.svg  %}
</div>
<p class="mb-3 small mb-md-4 fs-5">Explora mi perfil ejecutando o editando las queries en el editor interactivo.</p>
</div>

<div class="mt-3">
  {% include sql-editor.html %}
</div>

<h2 class="text-center mb-4">Tech Stack</h2>
<p class="mb-3 small mb-md-4 text-center fs-5">Conjunto de tecnologías y herramientas que forman la base de mis proyectos.</p>
{% include techs.html %}

<div class="content text-center" markdown="1">

## Proyectos

  <p class="mb-3 small mb-md-4 fs-5">
    Selección de proyectos donde aplico diseño, arquitectura y desarrollo.
  </p>
</div>

{% include file-viewer.html files=site.data.codes.personal.files name="personal" %}

