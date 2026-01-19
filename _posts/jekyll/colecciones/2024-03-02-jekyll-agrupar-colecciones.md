---
title: "Jekyll: Agrupar colecciones en un directorio superior"
categories: [Jekyll, Jekyll-Colecciones]
image: poster/jekyll-collections.avif
---

En Jekyll, una **colección** es un conjunto de documentos (como posts, páginas o archivos Markdown) que puedes organizar por tipo, tema o propósito. Por defecto, Jekyll usa carpetas como `_posts` o `_projects`, pero **¿qué pasa si quieres agrupar varias colecciones dentro de un directorio superior**, por ejemplo:

- <i class="fa-regular fa-folder"></i> `colecciones/`
  - <i class="fa-regular fa-folder"></i> `_posts/` (opcional)
  - <i class="fa-regular fa-folder"></i> `_tutoriales/`
  - <i class="fa-regular fa-folder"></i> `_casos/`
{:.list-unstyled}

Esto es súper útil cuando quieres mantener tu proyecto más limpio y ordenado, especialmente si tienes muchas colecciones.

Esto se puede hacer, pero hay que **configurarlo manualmente en `_config.yml`** y usar rutas personalizadas.

## Estructura recomendada

Para trabajar con la siguiente estructura:

- <i class="fa-regular fa-folder"></i> `colecciones/`
  - <i class="fa-regular fa-folder"></i> `_tutoriales/`
  - <i class="fa-regular fa-folder"></i> `_casos/`
{:.list-unstyled}

> El nombre de la carpeta de cada colección debe empezar con `_` para que Jekyll lo trate como colección.
{:.prompt-info}

Añadimos la configuración correspondiente en el `_config.yml`:

```yaml
collections_dir: colecciones

collections:
  tutoriales:
    output: true
    permalink: /tutoriales/:title/
  casos:
    output: true
    permalink: /casos/:title/
```
{:file="_config.yml" .typing }

**Qué hace esto:**

* `collections_dir: colecciones` le dice a Jekyll que busque las colecciones dentro de esa carpeta.
* Luego defines cada colección con su permalink.

## Cómo referenciar una colección en Liquid

Por ejemplo, para listar los `tutorials`:

{% raw %}
```liquid
{% for tutorial in site.tutoriales %}
  <a href="{{ tutorial.url }}">{{ tutorial.title }}</a>
{% endfor %}
```
{: .typing .nolineno }
{% endraw %}

{% include circle-line.html %}

Agrupar colecciones en un directorio superior en Jekyll es una forma excelente de mantener tu proyecto limpio y escalable. Solo necesitas:

- [x] Configurar `collections_dir`
- [x] Definir cada colección en `_config.yml`
- [x] Mantener la estructura dentro de `_collections`

Las ventajas de agrupar colecciones son muchas:

- Tu repo queda más limpio y fácil de navegar.
- Cuando crezcas, no se te desordena todo en `_posts`.
- Puedes tener distintos permalinks y configuraciones por colección.
