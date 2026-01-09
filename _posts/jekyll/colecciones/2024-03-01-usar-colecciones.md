---
title: "Usar Colecciones"
categories: [Jekyll, Jekyll-Colecciones]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Si ya te sientes cómodo y entusiasmado utilizando Jekyll y el sistema de `_posts/`, ha llegado el momento de dar el siguiente paso: conocer __las colecciones__.

## ¿Qué es una colección en Jekyll?

Si bien el sistema de `_posts/` en Jekyll es perfecto para manejar entradas de blog, llega un punto en que necesitarás algo más flexible para organizar otro tipo de contenido. Aquí es donde entran las **colecciones**.

Una colección te permite agrupar contenido por tipo, por ejemplo proyectos, tutoriales, cursos y gestionarlo de forma separada al blog. Cada colección puede tener su propia estructura, diseño, URLs y lógica de presentación, lo que te da mucho más control sobre cómo se organiza y muestra la información en tu sitio.

### ¿Cuándo usar colecciones?

En Jekyll, tanto los posts como las colecciones te permiten gestionar contenido dinámico, pero están pensados para distintos propósitos. Entonces, ¿Cuál es la diferencia?. Piensa en:

- Utilizar __publicaciones__ cuando quieras escribir artículos independiente, con fecha de publicación. Los posts viven en la carpeta `_posts/` y deben llevar fecha en el nombre del archivo (`2022-01-02-mi-post.md`).
- Utilizar __colecciones__ cuando quieras agrupar contenido relacionado, que pueda tener su propia página, pero la fecha no es importante. Las colecciones se definen en `_config.yml` y cada una vive en su propia carpeta (como `_proyectos/`, `_tutoriales/`, etc.).

A continuación, podemos ver otras características a tener en cuenta entre los posts y las colecciones:

| Característica                         | **Posts** (`_posts/`)                   | **Colecciones** (`_nombre/`)                      |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------- |
| 📅 Organización por fecha              | Sí (orden cronológico)                  | Opcional (no depende de la fecha)                 |
| 🔁 Uso típico                          | Entradas de blog, noticias              | Proyectos, tutoriales, cursos, documentación      |
| 🗂️ Carpeta                            | `_posts/`                               | `_coleccion/` (ej: `_proyectos/`)                 |
| 📄 Formato del nombre del archivo      | Requiere fecha (`AAAA-MM-DD-titulo.md`) | Sin fecha necesaria (`titulo.md`)                 |
| 🔍 Soporte para categorías y etiquetas | Sí                                      | Sí, pero debes configurarlo manualmente           |
| 🧭 Paginación automática               | Sí                                      | No (requiere configuración manual si se necesita) |
| 🛠️ Configuración en `_config.yml`     | No es necesaria                         | Sí (debes declarar cada colección)                |
| 🖼️ Plantillas personalizadas          | Generalmente usa la misma para todos    | Puedes usar distintas por colección               |
| 🌐 URLs personalizadas                 | Limitado                                | Totalmente personalizables                        |

## Crear un nuevo proyecto

Si aún no tienes un sitio Jekyll andando, pone en marcha un nuevo proyecto con los siguientes comandos:

```terminal
jekyll new nombre-sitio --blank
cd nombre-sitio
bundle init
bundle add jekyll
jekyll s
```

## Cómo crear y usar colecciones en Jekyll

Ya que hemos creado un proyecto de Jekyll y sabemos que una colección es un grupo de documentos relacionados, pero para que podamos usar colecciones, debemos indicarle a Jekyll ciertas configuraciones para que pueda reconocerla y procesarla correctamente.

### 1. Configura una colección

Primero, abre el archivo `_config.yml` que se encuentra en la raíz del proyecto, ya que en este archivo podemos configurar una o más colecciones:

```yml
collections:
  proyectos:
    output: true
    permalink: /:collection/:name/
```
{: .nolineno file="_config.yml"}

> - `output: true`: Le indica a Jekyll que debe generar páginas individuales por cada documento.
> - `permalink`: Configura la URL en función del nombre de la colección y del documento.
> - Para más detalles sobre estas opciones, revisa en la documentación oficial de [Jekyll sobre colecciones](https://jekyllrb.com/docs/collections/){:target='_blank'}.
{: .prompt-info }

### 2. Crea carpetas por cada colección

Ahora, crea una carpeta en la raíz del proyecto con el nombre de la colección, __precedido por un guion bajo__.

```bash
.
├── 📄 _config.yml
├── 📁 _data
├── 📁 _drafts
├── 📁 _includes
├── 📁 _layouts
├── 📁 _posts
├── 📁 _proyectos # 👈 Aquí crea la carpeta
├── 📁 _sass
├── 📁 _site
├── 📁 assets
├── 📄 Gemfile
├── 📄 Gemfile.lock
└── 📄 index.md
```
{:.fit-content .noheader}

> No olvides que toda colección debe comenzar con guión bajo: `_proyectos/`, `_recursos/`, etc.
{: .prompt-info }

Dentro de la carpeta, crea archivos con extensión `.md` por ejemplo `_proyectos/nombre-proyecto.md` y define algunos datos en el [front-matter](https://jekyllrb.com/docs/front-matter/){:target='_blank'}. Por ejemplo:

{% include file-viewer.html files=site.data.codes.jekyll.colecciones.files name="ex1" %}

```markdown
{% include markdown/innova.md %}
```
{:file="_proyectos/innova.md"}
```markdown
{% include markdown/agroconnect.md %}
```
{:file="_proyectos/agroconnect.md"}

### 3. Crear un layout personalizado

Es una buena idea tener un layout personalizado para las colecciones. Por ejemplo, tener algo así:

{% raw %}
```html
---
layout: default
---

<article>
  <h1>{{ page.title }}</h1>
  <p><strong>Cliente:</strong> {{ page.cliente }}</p>
  <p><strong>Fecha:</strong> {{ page.fecha | date: "%B %Y" }}</p>
  <div>{{ content }}</div>
</article>
```
{:file="_layouts/proyecto.html"}
{% endraw %}

Por último, crea una página para mostrar los artículos:

{% raw %}
```html
<h2>Poryectos realizados</h2>
<ul>
    {% for proyecto in site.proyectos %}
     <li>
        <a href="{{ proyecto.url }}">{{ proyecto.title }}</a>
        - {{ proyecto.fecha | date: "%d/%m/%Y" }}
     </li>
    {% endfor %}
</ul>
```
{:file="proyectos.html"}
{% endraw %}
