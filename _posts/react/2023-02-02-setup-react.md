---
title: "Set up React"
categories: [React, React-Setup]
tags: [desarrollo web, react]
icon: techs/react.svg
image:
    path: poster/react-setup.webp
    lqip: data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSA8AAAABD9D/iAgMQkT/gwAAAAAAVlA4IFoAAACQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZwC90AqTAlDqOVAAAP65+XcSQMUd3v2PQu4V5Qko7vhmMyao5vOlxLRfOp27Cwu06unt8eeLYry5OKh5TE7RAAA=
---

<div style="text-align: center;" markdown="1">
  ❤️<br/>{% include {{ page.icon }} %}{:style="width:190px; margin:20px auto;" .drop-shadow }
</div>

Al comenzar con **React**, lo primero es configurar tu **entorno de desarrollo**. Una vez listo, podrás iniciar tu primer proyecto. Con solo unos pasos, estarás listo para dar vida a tus ideas con React.

## Requisitos Previos

Antes de comenzar, debemos tener instaladas las siguientes herramientas en nuestra máquina:

- [Node.js](https://nodejs.org/en/){:target='_blank'}: Necesitarás **Node.js 14.18.0** o superior para este y otros turoriales que publicaré. [Vite](https://vite.dev/){: target='_blank' } requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}): Son administradores de paquetes que te permiten gestionar las dependencias de un proyecto. **npm** viene preinstalado con **Node.js**, pero puedes optar por otra alternativa.

## Formas de crear un proyecto de react

Existen varias maneras de crear y configurar un proyecto de React, sin embargo la forma más tradicional y en su momento era la forma más sencilla es usar el paquete oficial `create-react-app`, que configura todo automáticamente.

### Con create-react-app (No recomendado)


1\. Abrir una terminal
: En una nueva terminal o símbolo de sistema (en Windows) y ejecuta el siguiente comando:

```terminal
npx create-react-app <nombre-proyecto>
```

- Este comando creará una carpeta con el nombre del proyecto `<nombre-proyecto>` y descargará todas las dependencias necesarias para empezar.

> Como puedes observar, durante la instalación aparecen una serie de __warning__ indicando que __el paquete está obsoleto (deprecated)__:
> ![warning cra](react/install-cra-light.webp){:.light}
> ![warning cra](react/install-cra-dark.webp){:.dark}
{: .prompt-warning }

2\. Entrar al proyecto
: Completada la instalación, navegamos a la carpeta del proyecto generado:

```terminal
cd nombre-proyecto
```

3\. Lanzar el servidor de desarrollo
: Para ver el proyecto en acción, ejecutamos el siguiente comando:

```terminal
npm start
```

- Este comando iniciará el servidor de desarrollo y abrirá automáticamente el navegador en <http://localhost:3000>. Ahora podrás ver los cambios en tiempo real al modificar archivos del proyecto.

![Aplicación con create-react-app](react/create-react-app-start.webp){:.rounded}

> El comando `create-react-app` fue un proyecto increíblemente útil en su momento, ya que configuraba automáticamente un entorno de desarrollo completo, pero **ha quedado en desuso** de facto para algunas versiones recientes de Node.js, y a menudo tiene problemas de compatibilidad con sus dependencias.
{: .prompt-warning }

### Usando Vite ( Recomendado )

[**Vite**](https://vite.dev/){: target='_blank' } es una herramienta de desarrollo moderna y rápida que se utiliza para crear proyectos de front-end, y es ideal para trabajar con React debido a su rápida configuración y **hot-reloading** eficiente. Una vez teniendo los [**requisitos previos**](#requisitos-previos), iremos al directorio donde queramos ubicar nuestro proyecto y realizamos los siguientes pasos:

1\. Abrir una terminal
: En una nueva terminal, ejecutamos el siguiente comando:

```terminal
npm create vite@latest <nombre-proyecto> -- --template react
```

- Aquí:
    - `<nombre-proyecto>`: El nombre de tu proyecto.
    - `--template react`: Especifica que quieres usar el template de React.

- El comando `npm create vite@latest` descargará y ejecutará la última versión de Vite, y configurará un proyecto con la plantilla de React. Esto significa que habrá creado la estructura de carpetas y configuración necesaria para iniciar nuestro proyecto.

2\. Entrar al proyecto
: A partir de aquí, tendremos que entrar al directorio raíz del proyecto e instalar las dependencias con npm (la instrucción anterior ya nos habrá sugerido estos comandos):

```terminal
cd <nombre-proyecto>
npm install
```

3\. Lanzar el servidor de desarrollo
: Para ver el proyecto en acción, ejecutamos el siguiente comando:

```terminal
npm run dev
```

- El template básico de React en Vite, proporciona una estructura mínima con la que puedes empezar a trabajar de inmediato. Incluye un archivo `App.jsx` que se renderiza como la página de inicio:

![React Vite StartApp](react/vite-react-startapp-light.webp){: .light }
![React Vite StartApp](react/vite-react-startapp-dark.webp){: .dark }

{% include circle-line.html %}

En resumen, después de crear tu proyecto con CRA (__Create React App__) o __Vite__, lo siguiente es empezar a jugar con tu `App` principal, crear componentes en `src/` y dar forma a tu interfaz. Con Vite, arrancas más rápido y con un entorno más ligero.
