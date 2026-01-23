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

En este caso, la dirección que nos proporciona Netlify es la siguiente:
> https://storied-cajeta-59d0b0.netlify.app

Como puedes observar, se trata de una **URL generada automáticamente**, bastante larga y poco representativa de nuestro proyecto. Esto es totalmente normal en Netlify y no afecta en absoluto al funcionamiento del sitio.

## Cambiar el nombre del sitio en Netlify

A continuación, veremos cómo personalizar el nombre del sitio para obtener una URL más limpia. En la pantalla anterior, presiona el botón de **"Quick setup"**.

![Configuración rápida](netlify/configuracion-rapida-dark.webp){:.dark}
![Configuración rápida](netlify/configuracion-rapida-light.webp){:.light}

Una vez dentro de la configuración rápida, puedes elegir un nuevo nombre para actualizar la URL del sitio. Al presionar **Update site name**, Netlify verificará automáticamente la disponibilidad del nombre.

Si el nombre elegido ya está en uso, la plataforma te lo notificará de inmediato:

![Nombre en uso](netlify/nombre-de-proyecto-utilizado-light.webp){:.light}
![Nombre en uso](netlify/nombre-de-proyecto-utilizado-dark.webp){:.dark}

Una vez tengas un __nombre válido__, presiona el botón de **"update project name"**:

![Actualizar nombre del proyecto](netlify/actualizar-nombre-del-proyecto-light.webp){:.light}
![Actualizar nombre del proyecto](netlify/actualizar-nombre-del-proyecto-dark.webp){:.dark}

Ahora contamos con una URL más amigable, disponible de forma inmediata para su acceso.

![Cambio de nombre realizado](netlify/cambio-de-nombre-realizado-light.webp){:.light}
![Cambio de nombre realizado](netlify/cambio-de-nombre-realizado-dark.webp){:.dark}

> [https://mis-certificados.netlify.app/](https://mis-certificados.netlify.app/){:target='_blank'}

{% include circle-line.html %}

Con esto, hemos completado el __despliegue manual en Netlify de forma exitosa__. El sitio ya se encuentra disponible en línea y listo para ser accedido, lo que nos permite validar el resultado final antes de avanzar a configuraciones más avanzadas como dominios personalizados, variables de entorno o despliegues automatizados.
