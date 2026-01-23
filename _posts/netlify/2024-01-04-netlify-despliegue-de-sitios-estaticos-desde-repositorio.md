---
title: "Netlify: Despliegue automático desde un repositorio"
categories: [Netlify, "Netlify-Deploy"]
badge: netlify
mermaid: true
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

En el [post anterior]({{ 'posts/netlify-despliegue-de-sitios-estaticos-manualmente/' | relative_url }}) vimos cómo hacer un **deploy manual en Netlify**, subiendo los archivos directamente.
Ese método es útil para pruebas rápidas, pero **no es muy escalable**.

En este artículo veremos el **método recomendado en producción**, **deploy automático** desde un **repositorio Git**. A diferencia del deploy manual, este enfoque:

- [x] Automatiza el despliegue
- [x] Mantiene historial de versiones
- [x] Permite trabajar con ramas y PRs
- [x] Se integra con flujos CI/CD

## Requisitos previos (asumidos)

Para llevar el proceso con éxito, se **asume que ya sabes**:

* Usar Git básico (`clone`, `commit`, `push`)
* Tener el proyecto funcionando localmente

## Paso 1: Añadir un nuevo sitio

En el dashboard de Netlify, seleccionamos _import from git_.

![Importar desde git](netlify/seleccionar-importar-desde-git-light.webp){:.light}
![Importar desde git](netlify/seleccionar-importar-desde-git-dark.webp){:.dark}


## Paso 2: Seleccionar el proveedor

Selecciona el proveedor, en este caso el proveedor será GitHub.

![Seleccionar proveedor](netlify/seleccionar-proveedor-de-git-light.webp){:.light}
![Seleccionar proveedor](netlify/seleccionar-proveedor-de-git-dark.webp){:.dark}

## Paso 3: Autorización y selección del repo

Netlify pedirá acceso al proveedor Git.

![Autorización](netlify/autorizar-a-netlify-light.webp){:.light}
![Autorización](netlify/autorizar-a-netlify-dark.webp){:.dark}

En la siguiente pantalla vamos a autorizar la instalación de Netlify en nuestra cuenta de GitHub.

![Conceder la autorización para leer repositorios](netlify/autorizar-a-netlify-a-leer-los-repositorios-light.webp){:.light}
![Conceder la autorización para leer repositorios](netlify/autorizar-a-netlify-a-leer-los-repositorios-dark.webp){:.dark}

Esto sirve para que Netlify tenga acceso a todos tus repositorios, con permisos para __leer el código__ y __gestionar despliegues__. Al hacer clic en _Install_, se concede el acceso y se completa la configuración.

## Paso 4: Subir un proyecto a un repositorio en GitHub

Después de volver a la pantalla de Netlify, se mostrarán los repositorios. 

![No tenemos repositorio](netlify/sin-repositorios-para-seleccionar-light.webp){:.light}
![No tenemos repositorio](netlify/sin-repositorios-para-seleccionar-dark.webp){:.dark}

Si no tenemos ninguno (como en este caso), vamos a subir el proyecto que teníamos anteriormente de una forma muy sencilla.

- Ingresa a [https://github.com/new](https://github.com/new){:.target='_blank'}

![Crear repositorio](netlify/github-crear-repositorio-light.webp){:.light}
![Crear repositorio](netlify/github-crear-repositorio-dark.webp){:.dark}

Una vez creado el repositorio, en la pantalla de configuración, realizaremos la subida mediante la carga de archivos.

![Subir archivos a GitHub](netlify/github-cargar-archivos-light.webp){:.light}
![Subir archivos a GitHub](netlify/github-cargar-archivos-dark.webp){:.dark}

Ahora, subimos los archivos arrastrándolos al cuadro de carga para completar el proceso.

![Arrastrar archivos](netlify/github-arrastrar-archivos-al-repositorio-light.webp){:.light}
![Arrastrar archivos](netlify/github-arrastrar-archivos-al-repositorio-dark.webp){:.dark}

Una vez que los archivos se cargan, se presenta un resumen del proceso. Finalmente, confirmamos la operación para que queden disponibles en el repositorio.

![Confirmar la carga de archivos](netlify/github-confirmar-los-archivos-a-subir-light.webp){:.light}
![Confirmar la carga de archivos](netlify/github-confirmar-los-archivos-a-subir-dark.webp){:.dark}

Listo, ya se encuentran los archivos en el repositorio.

![Archivos cargados correctamente](netlify/github-archivos-subidos-correctamente-light.webp){:.light}
![Archivos cargados correctamente](netlify/github-archivos-subidos-correctamente-dark.webp){:.dark}


## Paso 5: Seleccionar el repositorio en Netlify

Ahora sí, volvemos a Netlify. Al recargar la página, vemos el repositorio que acabamos de crear y configurar, así que lo seleccionamos para continuar.

![Seleccionar repositorio](netlify/seleccionar-el-repositorio-light.webp){:.light}
![Seleccionar repositorio](netlify/seleccionar-el-repositorio-dark.webp){:.dark}

Ahora estamos en la pantalla de configuración. El primer paso es asignar un nombre que esté disponible.

![Asignar nombre al proyecto](netlify/seleccionar-el-nombre-para-el-proyecto-light.webp){:.light}
![Asignar nombre al proyecto](netlify/seleccionar-el-nombre-para-el-proyecto-dark.webp){:.dark}

Si bajamos un poco, veremos la opción para elegir la rama que __Netlify va a observar__. Cada vez que haya __cambios__ en ella, __se lanzará un nuevo proceso de build__. En nuestro caso, Netlify ya detecta la rama main, así que no es necesario modificar nada.

![Seleccionar la rama](netlify/seleccionar-rama-del-repositorio-light.webp){:.light}
![Seleccionar la rama](netlify/seleccionar-rama-del-repositorio-dark.webp){:.dark}

En el resto de las opciones no es necesario realizar ningún cambio. Solo debemos desplazarnos hacia el final y presionar el botón _Deploy_.

![Presionar el botón de Deploy](netlify/presionar-el-boton-de-deploy-light.webp){:.light}
![Presionar el botón de Deploy](netlify/presionar-el-boton-de-deploy-dark.webp){:.dark}

Y en cosa de segundos, el sitio ya estará desplegado.

![Sitio desplegado desde github](netlify/sitio-desplegado-desde-github-light.webp){:.light}
![Sitio desplegado desde github](netlify/sitio-desplegado-desde-github-dark.webp){:.dark}

Ya tenemos una URL pública:  

[https://miscertificados.netlify.app/](https://miscertificados.netlify.app/){:target="_blank"}


Este deploy queda registrado como **Production deploy**.

En **Deploys** puedes:

* Ver todos los deploys
* Revisar logs
* Restaurar una versión anterior

