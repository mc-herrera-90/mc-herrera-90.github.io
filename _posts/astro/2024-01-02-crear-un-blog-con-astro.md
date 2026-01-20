---
title: "Astro: Crear un blog usando un template"
categories: [Astro, Astro-Tutoriales]
badge: astro
tags: [astro, tutoriales]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

_Astro_ es uno de los frameworks más modernos y eficientes para la construcción de sitios estáticos. En esta entrada utilizaremos la __plantilla oficial de blog__ junto con React para crear un sitio web, configurarlo, personalizarlo y prepararlo para un entorno de producción.

## 1. Crear el proyecto

Desde una terminal, ejecuta el siguiente comando:

```terminal
npm create astro@latest -- --add react
```
{:.typing}

> Añadimos la configuració con la opción `--add react`.
{: .prompt-info }

Esto lanza un asistente interactivo donde debes elegir:

- [x] El nombre del proyecto: `mi-blog`
- [x] Comenzar con una plantilla base: `Use blog template`
- [x] Instalar las dependencias: `Yes`
- [ ] Inicializar git: Opcional

![Nuevo proyecto](astro/npm-create-astro-blog-con-flag-react-light.webp){:.light}
![Nuevo proyecto](astro/npm-create-astro-blog-con-flag-react-dark.webp){:.dark}

Una vez termine la instalación, navega a tu proyecto y levanta el servidor local:

```terminal
cd mi-blog
npm run dev
```
{:.typing}

Con esto, el proyecto queda listo para ser visualizado en el navegador.

![Preview sitio](astro/preview-template-blog.webp)

## 2. Estructura del proyecto

Como podemos observar a continuación, la estructura del proyecto se organiza en el siguiente **árbol de directorios**, el cual nos permite visualizar de forma jerárquica la distribución de carpetas y archivos.

{% include file-viewer.html files=site.data.codes.astro.blog-src name='src_tree' %}

> Al abrir el proyecto en __Visual Studio Code__, el editor recomendará automáticamente la instalación de las extensiones necesarias para trabajar con Astro, mejorando la experiencia de desarrollo y el soporte del framework.
> ![Instalar extensiones](astro/instalar-extensiones-light.webp){:.light}
> ![Instalar extensiones](astro/instalar-extensiones-dark.webp){:.dark}
{: .prompt-tip }

## 3. Crear un nuevo post

Como en la mayoría de generadores de sitios web estáticos (tipo Jekyll, Hugo) los artículos se pueden escribir en __Markdown__ y en el caso de astro se crean en la siguiente ruta:

```
src/content/blog/
```
{: .noheader .fit-content }

![contenido del blog](astro/content-blog-files.webp)

Como podemos observar, los artículos que vallas creando aquí, se van a mostrar automáticamente. Astro usa su sistema de __Content Collections__, lo que permite leer y organizar automáticamente todos los archivos dentro de esta ruta.

## 4. Agregar un componente React

Como tenemos configurado `--add react`, ya puedes agregar componentes de React dentro de tus páginas. Para ello, haz lo siguiente:

1. Crea un componente en `src/components/Contador.jsx`. Por ejemplo:

```jsx
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Has hecho clic {count} veces
    </button>
  );
}
```
{: file="Contador.jsx" .typing }

{:start="2"}
2. Utilizar el componente en una página Astro. Por ejemplo en `src/pages/index.astro`:

{% raw %}
```md
---
import Contador from '../components/Contador.jsx';
---

<h2>Componente React</h2>
<Contador client:only="react" />
```
{:file="index.astro" .typing}
{% endraw %}

- `client:only="react"` renderiza el componente solo en el cliente y no en el servidor.

{% include embed/video.html src="astro/agregar-y-usar-componente-de-react.webm" %}