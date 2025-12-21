---
title: Desplegar React (Vite) en Gh Pages
categories: [React, "React-Deploy"]
tags: [react]
---

Si has creado una aplicación de React usando Vite y quieres desplegar en un servicio gratuito como GitHub Pages, este tutorial te guiará paso a paso para hacerlo de forma sencilla y segura.

## Herramientas necesarias

Doy por hecho que ya cuentas con las siguientes herramientas instaladas en tu sistema:

- [Node.js](https://nodejs.org/en/){:target='_blank'}: Necesitarás **Node.js 14.18.0** o superior para este tutorial. Vite requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}, si prefieres usarlo como gestor de paquetes): Herramienta para instalar y gestionar dependencias.
- [Git](https://git-scm.com/){: target='_blank' }: Para manejar el control de versiones de tu proyecto y poder subirlo a GitHub.
- [Cuenta en GitHub](https://github.com/){: target='_blank'}: Para crear un repositorio y desplegar tu aplicación en GitHub Pages.

## 1. Generar un proyecto de React

> Si ya cuentas con un proyecto, no es necesario seguir estos pasos, puedes saltar a la [configuración del repositorio](#2-configurar-el-repositorio).
{: .prompt-info }

Generar un nuevo proyecto
: Para crear una aplicación de React utilizando [Vite](https://vite.dev/){: target='_blank'}, puedes usar el siguiente comando:

```terminal
npm create vite@latest react-vite-gh-pages -- --template react
```

Navegar e instalar dependencias
: Una vez creado el proyecto, navegamos a la carpeta generada y ejecutamos el comando para instalar las dependencias:

```terminal
cd react-vite-gh-pages
npm install
```

Lanzar el servidor de desarrollo
: Luego de forma opcional, inicia el servidor de desarrollo para ver la aplicación que nos crea vite:

```terminal
npm run dev
```

El template básico de React en Vite te proporciona una estructura mínima con la que puedes empezar a trabajar de inmediato. Incluye un archivo `App.jsx` que se renderiza como la página de inicio:

![React Vite StartApp](react/vite-react-startapp-light.webp){: .light }
![React Vite StartApp](react/vite-react-startapp-dark.webp){: .dark }

Para efectos prácticos, no vamos a modificar ningún componente, ya que el tutorial se trata de desplegar la aplicación.

## 2. Configurar el Repositorio

Inicializamos un nuevo repositorio, en la raíz del proyecto ejecutamos el siguiente comando:

```terminal
git init
```

Ahora, crea un nuevo repositorio usando [gh-cli](https://cli.github.com/){: target='_blank' } (necesitas instalar gh-cli) basado en nuestro proyecto:

{% tabs gh-repo-create %}
{% tab gh-repo-create terminal %}
```terminal
gh repo create --public -s=. -r=origin
```
> Si no haz utilizado antes [gh-cli](https://cli.github.com/){: target='_blank' }, hechale un ojo a mi siguiente [post de gh-cli](/posts/github-cli/)
{: .prompt-tip }
{% endtab %}
{% tab gh-repo-create output %}
```terminal
$ gh repo clone --public -s=. -r=origin
✓ Created repository <tu-usuario>/react-vite-gh-pages on GitHub
✓ Added remote git@github.com:<tu-usuario>/react-vite-gh-pages.git
```
> El comando anterior no recibe el nombre para el repositorio, por ende crea un repositorio remoto con el nombre del proyecto.
{: .prompt-info }
{% endtab %}
{% endtabs %}

Preparamos los archivos y subimos al repositorio remoto creado:

```terminal
git add .
git commit -m "f commit"
git push -u origin main
```

## 3. Instalar el paquete de gh-pages

En el caso de Vite, necesitamos instalar [gh-pages](https://www.npmjs.com/package/gh-pages){: target='_blank' } para desplegar los archivos generados en la carpeta `dist` a Github Pages.

En el proyecto abrimos la terminal y lo instalamos:

```terminal
npm install gh-pages --save-dev
```

En la sección de `scripts` del `package.json` añadimos el comando `deploy`:

```js
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
},
```
{: .nolineno file="package.json" }

- `build`: El comando que genera los archivos de producción en la carpeta `dist`.
- `deploy`: Usa el paquete `gh-pages` para subir el contenido de la carpeta `dist` a la rama `gh-pages` en el repositorio de Github.

## 4. Construir la aplicación

Ahora podríamos construir la aplicación usando Vite. abrimos la terminal y corremos el siguiente comando:

```terminal
npm run build
```

Esto generará los archivos estáticos de producción en la carpeta `dist`.

## 5. Desplegar a Github Pages

Para subir los archivos generados y servirlo a Github Pages, utilizamos el comando que definimos `deploy`:

```terminal
npm run deploy
```

¿Y qué pasa ahora? Nos encontramos una gran sorpresa. Al visitar nuestra página en la URL `https://<usuario>.github.io/<repo>`, descubrimos que la página no se visualiza correctamente.

Es fácil detectar el problema que sucede, basta con abrir la consola con <kbd>F12</kbd> y ver los mensajes en la consola:

![Mensajes de la consola](react/not-found-resource-light.webp){: .light }
![Mensajes de la consola](react/not-found-resource-dark.webp){: .dark }

Como podemos observar el mensaje "**Failed to load resource**" que aparece en la consola, indica que el navegador no pudo cargar un archivo o recurso en a página para funcionar correctamente. Este error puede ocurrir por diversas razones, podemos tener problemas con la red, errores en la ruta de los archivos (lo que es más común), permisos incorrectos, o recursos que ya no existen en el servidor. Para solucionarlo debemos configurar Vite.

## 6. Configurar vite para Gh Pages

En este paso, configuraremos `Vite` para que funcione bien en GiHub Pages, ya que GitHub Pages sirve la aplicación desde un subdirectorio. Esto significa que tenemos que ajustar las rutas base en la configuración de Vite. Abrimos el archivo `vite.config.js` en la raíz de nuestro proyecto, y configura el `base` de la siguiente manera:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-vite-gh-pages/',  // Asegúrate de reemplazar <react-vite-gh-pages> por el nombre de tu repositorio de GitHub
});
```
{: .nolineno file="vite.config.js" }

Una vez realizado el cambio, realiza nuevamente los pasos para el deploy:

```terminal
npm run build
npm run deploy
```

Abre la URL en tu navegador para asegurarte de que todo está funcionando correctamente. En la siguiente URL podemos ver el resultado de este ejemplo: [https://enidev911.github.io/react-vite-gh-pages/](https://enidev911.github.io/react-vite-gh-pages/){: target='_blank'}.

## __Deploy automático con GitHub Actions__

Aunque `gh-pages` funciona bien con el comando `npm run dev`, podemos __automatizar más este proceso__ cada vez que hagas un `push` a la rama `main` o `gh-pages` utilizando __Github Actions__. Esto evita tener que hacer el deploy manualmente.

### __1. Crea el archivo del workflow__

En la raíz del proyecto, crea un archivo en la siguiente ruta:

```
.github/workflows/deploy.yml
```

Abre el archivo y agrega lo suguiente:

{% raw %}
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Cambia si tu rama principal tiene otro nombre

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del repositorio
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Instalar dependencias
        run: npm install

      - name: Build del proyecto
        run: npm run build

      - name: Deploy a GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
{: file='deploy.yml' }
{% endraw %}

Ahora, si ejecutamos un `git push` a la rama `main` y revisamos la ejecución del workflow en GitHub Actions, veremos un error de permisos.


> ![Problemas de permisis](react/gh-actions-permmisions.webp)
{:.prompt-danger}

## Solucionar problemas de permisos

En el error que aparece en GitHub Action, sucede cuando estamos intentando hacer un **push al repositorio desde GitHub Actions**, pero la acción falla con este mensaje:

```
remote: Permission to mc-herrera-90/rick-and-morty-api.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/mc-herrera-90/rick-and-morty-api.git/': The requested URL returned error: 403
```

__¿Qué significa?__

El bot `github-actions[bot]` **no tiene permiso de escritura** en el repositorio, por eso **no puede hacer el push** al branch `gh-pages`.

__Solución__

Debes configurar un **token de acceso con permiso de escritura**. Aquí hay dos opciones recomendadas:

### Opción 1: Habilitar los permisos en el Workflow

Modifica tu workflow y asegúrate de que uses el `GITHUB_TOKEN` integrado, **pero habilita los permisos necesarios**. Asegúrate de definir los permisos en el workflow:

```yaml
permissions:
  contents: write
```
{: .nolineno }

__Ejemplo completo__:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write  # 👈 necesario para hacer push

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout del repositorio
        uses: actions/checkout@v3

      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Instalar dependencias
        run: npm install

      - name: Build del proyecto
        run: npm run build

      - name: Deploy a GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```
{:file="deploy.yml"}


### Opción 2: Crear un Personal Access Token (PAT)

1. Ve a [https://github.com/settings/tokens](https://github.com/settings/tokens){:target='_blank'}
2. Crea un **token clásico** con:

   * `repo`
   * `workflow`
3. Ve a tu repositorio → **Settings > Secrets and variables > Actions**
4. Crea un secret llamado `GH_TOKEN` (o similar) con ese valor.

Y luego cambia en tu workflow:

{% raw %}
```yaml
with:
  personal_token: ${{ secrets.GH_TOKEN }}
  publish_dir: ./build
```
{: .nolineno }
{% endraw %}

> **No uses directamente `https://` con usuario y contraseña o token embebido**, eso puede ser inseguro.
{:.prompt-warning}

Como resultado, cada vez que haces `git push` a `main`, GitHub Actions construye tu aplicación con Vite y la __despliega automáticamente a GitHub Pages__. Puedes seguir el estado del despliegue desde la pestaña Actions de tu repositorio.

{% include circle-line.html %}

¡Y eso es todo! Ahora tienes una __aplicación de React__ desplegada en __GitHub Pages__ utilizando Vite. Este proceso es rápido, fácil y eficiente. Además, **GitHub Pages** ofrece una excelente forma (gratuita) de alojar proyectos frontend.
