---
title: "Cómo integrar Giscus en el tema Chirpy de Jekyll"
date: 2025-06-01 10:00:00 +0000
categories: [jekyll, chirpy]
tags: [giscus, comentarios, chirpy, jekyll]
---

En este post aprenderás a integrar [Giscus](https://giscus.app/) como sistema de comentarios en tu blog usando el tema Chirpy para Jekyll.

## 1. ¿Qué es Giscus?

Giscus es una herramienta gratuita que utiliza las discusiones de GitHub para gestionar los comentarios de tu sitio web. Es fácil de integrar y no requiere servidores adicionales.

## 2. Configura tu repositorio en GitHub

1. Ve a [https://giscus.app/](https://giscus.app/).
2. Selecciona el repositorio donde quieres almacenar los comentarios.
3. Otorga los permisos necesarios a la app de Giscus.
4. Configura las opciones según tus preferencias (categoría, modo de mapeo, idioma, etc.).
5. Copia el código `<script ...></script>` que te genera Giscus.

## 3. Agrega Giscus al tema Chirpy

Del código del script, debemos copiar los requeridos. Por ejemplo:

```html
<!-- ...existing code... -->
<div id="giscus_container">
  <script src="https://giscus.app/client.js"
    data-repo="USUARIO/REPO"
    data-repo-id="REPO_ID"
    data-category="General"
    data-category-id="CATEGORY_ID"
    data-mapping="pathname"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="light"
    data-lang="es"
    crossorigin="anonymous"
    async>
  </script>
</div>
```
{: .nolineno }

Ahora, en tu archivo `_config.yml`:

```yaml
comments:
  # ...
  provider: giscus # [disqus | utterances | giscus]
  # The provider options are as follows:
  # ...
  # Giscus options › https://giscus.app
  giscus:
    repo: mc-herrera-90/mc-herrera-90.github.io # <gh-username>/<repo>
    repo_id: R_kgDOPX2aaw # <gh-repo-id>
    category: Ideas
    category_id: DIC_kwDOPX2aa84CtwM1
    mapping: title # optional, default to 'pathname'
    strict: # optional, default to '0'
    input_position: # optional, default to 'bottom'
    lang: es # optional, default to the value of `site.lang`
    reactions_enabled: # optional, default to the value of `1`
```
{: .nolineno file="_config.yml" }
