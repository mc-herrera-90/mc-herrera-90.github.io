---
title: "Jekyll: Funcionamiento y evolución"
categories: [Jekyll, "Jekyll-Bases"]
image: poster/jekyll-ssg.avif
liquid_flujo:
  - title: 1. Ingesta de Contenido
    content: |
      Jekyll escanea el directorio raíz del proyecto en busca de archivos que contengan [Front Matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/){:target='_blank'} (el bloque YAML ubicado al inicio de los archivos que define metadatos como layouts, variables y configuraciones específicas de cada página).

  - title: 2. Procesamiento de Liquid
    content: |
      Durante la fase de renderizado, Jekyll evalúa el motor de plantillas Liquid para resolver variables, aplicar filtros y ejecutar etiquetas personalizadas, permitiendo la composición de contenido dinámico sobre una base completamente estática.

  - title: 3. Conversión de Markdown
    content: |
      El contenido escrito en Markdown se convierte a HTML semántico utilizando motores configurables como [Kramdown](https://jekyllrb.com/docs/configuration/markdown/#kramdown){:target='_blank'}, asegurando compatibilidad con extensiones avanzadas como tablas, footnotes y bloques de código enriquecidos.

  - title: 4. Compilación de Assets (Sass y CoffeeScript)
    content: |
      Jekyll incluye un pipeline nativo para compilar archivos Sass y CoffeeScript, transformándolos automáticamente en CSS y JavaScript optimizados sin necesidad de herramientas externas como Webpack o Gulp.

  - title: 5. Generación de Salida Estática
    content: |
      El resultado final del proceso se genera en la carpeta <code class="language-plaintext highlighter-rouge"><i class='fa fa-folder'></i> _site/</code>, la cual contiene exclusivamente archivos estáticos listos para ser servidos de forma instantánea por cualquier servidor web como Nginx o Apache.

etapas:
  - title: La Era de GitHub Pages (2009 - 2014)
    content: |
      Jekyll se convirtió en el motor oficial de GitHub Pages. Esto eliminó la necesidad de configurar servidores y bases de datos para proyectos de código abierto, popularizando el concepto de "Infraestructura como Código" para el contenido.
  - title: La Estandarización de Gem-based Themes
    content: |
      Originalmente, los temas de Jekyll requerían copiar todos los archivos en tu repositorio. La evolución hacia temas basados en gemas de Ruby permitió una mantenibilidad profesional, permitiendo actualizaciones de diseño con un simple comando `bundle update`.
  - title: Optimización de Rendimiento
    content: |
      En sus versiones más recientes (4.x), Jekyll introdujo mejoras significativas en el tiempo de construcción (build times) mediante un sistema de caché de documentos y una gestión de dependencias más eficiente, manteniendo su relevancia frente a competidores escritos en lenguajes más rápidos como Go (Hugo) o Rust.
---

## 1. Qué es Jekyll

### Generador de Sitio Estático (SSG)

Para entender a Jekyll, primero debemos entender qué es un **Static Site Generator (SSG)**. 

A diferencia de un CMS tradicional (como WordPress), que construye cada página "al vuelo" consultando una base de datos cada vez que un usuario entra, un SSG hace el trabajo sucio **antes** de que el usuario llegue. 

1. **Tú escribes**: Creas contenido en archivos de texto plano (Markdown).
2. **Jekyll procesa**: El motor toma tus textos, los pasa por una plantilla y genera archivos HTML, CSS y JS.
3. **El servidor entrega**: Cuando alguien visita tu web, el servidor simplemente entrega un archivo ya listo. No hay esperas, no hay procesos de fondo, no hay errores de conexión a la base de datos.

### Qué tipo de herramienta es Jekyll

Jekyll en su rol de **generador de sitios estáticos** significa que:

- el sitio se construye **antes** de publicarse
- el resultado final son **archivos estáticos** (HTML, CSS, JS)
- el servidor solo se encarga de servir archivos

## 2. Funcionamiento

### El Proceso de Transformación

Jekyll opera bajo un principio de **compilación previa**. A diferencia de los CMS dinámicos (PHP/MySQL), Jekyll procesa el sitio una sola vez y genera archivos listos para ser servidos.

### El Motor Liquid y el Pipeline de Activos

El núcleo de Jekyll utiliza el motor de plantillas [**Liquid**](https://shopify.github.io/liquid/){:target='_blank'}, creado por Shopify. El flujo de datos sigue este orden:

{% include accordion.html
  id="liquid-flujo"
  items=page.liquid_flujo
%}

## 3. Evolución

### Del "Blog para Hackers" a la Web Profesional

Jekyll fue lanzado en 2008 por [Tom Prestom-Werner](https://es.wikipedia.org/wiki/Tom_Preston-Werner){:target='_blank'}. En aquel entonces, la idea de no tener un panel de administración para publicar era radical. Fue diseñado bajo la filosofía de *"Bloguear como un hacker"*.

Su evolución técnica ha sido marcada por tres etapas clave:

{% include accordion.html
  id="jekyll-etapas"
  items=page.etapas
%}

Su integración nativa con **GitHub Pages** lo convirtió en la puerta de entrada para millones de desarrolladores. Jekyll demostró que la seguridad (al no tener base de datos, no hay nada que hackear) y la velocidad eran más valiosas que las interfaces visuales complejas.

### ¿Por qué sigue siendo relevante hoy?

Aunque hoy existen generadores más modernos, Jekyll sigue siendo el **estándar de estabilidad**. Su evolución ha sido la de un "clásico":
* **Fiabilidad**: Lo que construyes hoy en Jekyll seguirá funcionando en diez años.
* **Liquid**: Su motor de plantillas es potente y fácil de aprender.
* **Control Total**: Tú eres dueño de cada línea de código que se genera.

{% include circle-line.html %}

Elegir Jekyll no es quedarse en el pasado. Es entender que, al final del día, la web son documentos hipervinculados. Jekyll simplemente nos da la mejor pluma para escribirlos.
