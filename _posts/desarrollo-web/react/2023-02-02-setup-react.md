---
title: "Set up React"
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
image:
    path: poster/react-setup.webp
    lqip: data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSA8AAAABD9D/iAgMQkT/gwAAAAAAVlA4IFoAAACQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZwC90AqTAlDqOVAAAP65+XcSQMUd3v2PQu4V5Qko7vhmMyao5vOlxLRfOp27Cwu06unt8eeLYry5OKh5TE7RAAA=
---

Cuando inicias en React, tienes que configurar previamente un entorno de desarrollo y con ello poner en marcha tu primer proyecto. Siguiendo unos sencillos paso podemos comenzar a crear aplicaciones modernas y dinámicas en poco tiempo.

## Requisitos Previos

Antes de comenzar, debemos tener instaladas las siguientes herramientas en nuestra máquina:

- [Node.js](https://nodejs.org/en/){:target='_blank'}: Necesitarás **Node.js 14.18.0** o superior para este y otros turoriales que publicaré. [Vite](https://vite.dev/){: target='_blank' } requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}): Son administradores de paquetes que te permiten gestionar las dependencias de un proyecto. **npm** viene preinstalado con **Node.js**, pero puedes optar por otra alternativa.

## Formas de crear un proyecto de react

Existen varias maneras de crear y configurar un proyecto de React, sin embargo la forma más tradicional y en su momento era la forma más sencilla es usando el paquete oficial `create-react-app`, que configura todo automáticamente.

### Usando create-react-app ( No recomendado )

1. Abrimos una nueva terminal o símbolo de sistema y ejecuta el siguiente comando:

```terminal
npx create-react-app <nombre-proyecto>
```

- Este comando creará una carpeta con el nombre del proyecto `<nombre-proyecto>` y descargará todas las dependencias necesarias para empezar.

{: start="2" }
2. Una vez de haya completado la instalación, navegamos a la carpeta del proyecto generado:

```terminal
cd nombre-proyecto
```

{: start="3" }
3. Para ver el proyecto en acción, ejecutamos el siguiente comando:

```terminal
npm start
```

Esto iniciará el servidor de desarrollo y abrirá automáticamente el navegador en <http://localhost:3000>. Ahora podrás ver los cambios en tiempo real al modificar archivos del proyecto.

![Aplicación con create-react-app](react/create-react-app-start.webp)

> El comando `create-react-app` fue un proyecto increíblemente útil en su momento, ya que configuraba automáticamente un entorno de desarrollo completo, pero **ha quedado en desuso** de facto para algunas versiones recientes de Node.js, y a menudo tiene problemas de compatibilidad con sus dependencias.
{: .prompt-warning }

### Usando Vite ( Recomendado )

[**Vite**](https://vite.dev/){: target='_blank' } es una herramienta de desarrollo moderna y rápida que se utiliza para crear proyectos de front-end, y es ideal para trabajar con React debido a su rápida configuración y **hot-reloading** eficiente. Una vez teniendo los [**requsitos previos**](#-requisitos-previos) en nuestro equipo, iremos al directorio donde queramos ubicar nuestro proyecto y realizamos los siguientes pasos:

1. Para ello abrimos una terminal y ejecutamos el siguiente comando:

```terminal
npm create vite@latest <nombre-proyecto> -- --template react
```

- Aquí:
    - `<nombre-proyecto>`: El nombre de tu proyecto.
    - `--template react`: Especifica que quieres usar el template de React.

- El comando `npm create vite@latest` descargará y ejecutará la última versión de Vite, y configurará un proyecto con la plantilla de React. Esto significa que habrá creado la estructura de carpetas y configuración necesaria para iniciar nuestro proyecto.

{: start="2" }
2. A partir de aquí, tendremos que entrar al directorio raíz del proyecto e instalar las dependencias con npm (la instrucción anterior ya nos habrá sugerido estos comandos):

```terminal
cd <nombre-proyecto>
npm install
```

{: start="3" }
3. Para ver el proyecto en acción, ejecutamos el siguiente comando:

```terminal
npm run dev
```

- El template básico de React en Vite, proporciona una estructura mínima con la que puedes empezar a trabajar de inmediato. Incluye un archivo `App.jsx` que se renderiza como la página de inicio:

![React Vite StartApp](react/vite-react-startapp-light.webp){: .light }
![React Vite StartApp](react/vite-react-startapp-dark.webp){: .dark }

{% include circle-line.html %}

En resumen, después de crear tu proyecto con CRA (__Create React App__) o __Vite__, lo siguiente es empezar a jugar con tu `App` principal, crear componentes en `src/` y dar forma a tu interfaz. Con Vite, arrancas más rápido y con un entorno más ligero.