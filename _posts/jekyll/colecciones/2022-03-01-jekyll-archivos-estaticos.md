---
title: "Jekyll: Archivos estáticos"
badge: jekyll
categories: [Jekyll, Jekyll-Colecciones]
---

Un archivo estático es un archivo que no contiene __front matter__. Estos incluye imágenes, archivos PDF y otros contenidos no renderizados.

Son accesible a través de Liquid usando `site.static_files` y contiene los siguientes metadatos:

|Variable|Descripción|
|:-------|:----------|
|`file.path`|La ruta relativa al archivo. Por ejemplo: `/assets/img/image.jpg`|
|`file.name`|El nombre del archivo. Por ejemplo: `image.jpg`|
|`file.extname`|El nombre de la extensión del archivo. Por ejemplo: `.jpg`|

No necesariamente debe ser `file` como muestra la tabla, ya que se trata de una variable de conjunto y puede ser iterada con un bucle `for`.

Por ejemplo, el siguiente caso recorre todos los archivos estáticos del sitio e imprime su nombre y ruta:

```liquid
<ul>
  {% raw %}{% for archivo in site.static_files %}
    <li>
      {{ archivo.name }} - {{ archivo.path }}
    </li>
  {% endfor %}{% endraw %}
</ul>
```
{: .typing .typing-fast .nolineno }


## Filtrar archivos por carpetas

En la práctica, es poco común recorrer todos los archivos estáticos del sitio. Lo habitual es limitar la búsqueda a una carpeta específica, como un directorio de de imágenes en concreto.

por ejemplo:

```liquid
{% raw %}{% for imagen in site.static_files %}
  {% if imagen.path contains '/assets/img/' %}
    <img src="{{ imagen.path }}" alt="{{ imagen.name }}">
  {% endif %}
{% endfor %}{% endraw %}
```
{: .typing .typing-fast .nolineno }
