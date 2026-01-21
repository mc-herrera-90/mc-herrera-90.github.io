---
title: "Netlify: Despliegue manual de sitios web estáticos"
categories: [Netlify, "Netlify-Deploy"]
badge: netlify
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

_Netlify_ es una plataforma de **hosting y automatización** orientada a sitios estáticos y aplicaciones frontend modernas. Permite desplegar proyectos de forma simple, ya sea conectando un repositorio o subiendo los archivos manualmente, sin necesidad de configurar servidores.

En este artículo aprenderás a publicar un proyecto en netlify subiendo los archivos de forma manual.

### Iniciar sesión en Netlify

Netlify permite iniciar sesión de forma rápida mediante proveedores externos como **GitHub, GitLab, Bitbucket o Google**.

![Página de inicio de sesión](netlify/pagina-de-inicio-de-sesion-light.webp){:.light}
![Página de inicio de sesión](netlify/pagina-de-inicio-de-sesion-dark.webp){:.dark}

Este método facilita la integración directa con repositorios, integración que abordaremos en otro artículo.

Cuando inicias sesión por primera vez, la plataforma te permite configurar algunas preferencias. Al finalizar, solo debes desplazarte hasta el botón _Continue to deploy_.

![Preferencias al iniciar sesión](netlify/pagina-de-preferencias-al-iniciar-sesion-light.webp){:.light}
![Preferencias al iniciar sesión](netlify/pagina-de-preferencias-al-iniciar-sesion-dark.webp){:.dark}

El siguiente paso es omitir la pantalla que muestra las opciones para desplegar el primer proyecto.

![Saltar paso de desplegar primer proyecto](netlify/saltar-paso-de-desplegar-primer-proyecto-light.webp){:.light}
![Saltar paso de desplegar primer proyecto](netlify/saltar-paso-de-desplegar-primer-proyecto-dark.webp){:.dark}

Una vez autenticado, tendrás acceso al panel de control para crear y administrar tus sitios.

## Desplegar un sitio de forma manual en Netlify

Netlify también permite desplegar un sitio de forma **manual**, sin necesidad de conectar un repositorio.

El despliegue manual es ideal para proyectos simples o sitios estáticos ya compilados (HTML, CSS y JavaScript).

![Proyecto web](netlify/proyecto-web.avif)

Ejemplo de los archivos que vamos a subir para el despliegue:

{% include file-viewer.html files=site.data.netlify.proyecto-certificados name="certificados-demo" %}

Desde el panel principal, solo debes **arrastrar la carpeta del proyecto** (con los archivos ya mencionados) al área indicada como **“Drag and drop your site project here”**.

![Arrastrar sitio](netlify/arrastrar-sitio-dark.webp){:.dark}
![Arrastrar sitio](netlify/arrastrar-sitio-light.webp){:.light}

Netlify se encargará automáticamente de subir los archivos y generar una URL pública para tu sitio.

![Sitio desplegado](netlify/sitio-manual-desplegado-light.webp){:.light}
![Sitio desplegado](netlify/sitio-manual-desplegado-dark.webp){:.dark}

Y eso es todo. Nuestro sitio web ya está en internet, con **HTTPS habilitado**, y lo único que debes hacer ahora es **compartir tu URL**.

En este caso, la dirección que me proporciona netlify es la siguiente: [https://storied-cajeta-59d0b0.netlify.app/](https://storied-cajeta-59d0b0.netlify.app/){:target='_blank'}

{% include circle-line.html %}

## ¿Cuándo usar despliegue manual?

* Sitios estáticos simples
* Proyectos sin repositorio
* Pruebas rápidas o demos
* Builds generados localmente
