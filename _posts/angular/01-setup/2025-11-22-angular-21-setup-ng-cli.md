---
title: "Angular: Configuración del entorno de desarollo en local con Angular 21"
categories: [Angular, Angular_01-Setup]
image: poster/setup-angular-21-en-local.avif
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Angular sigue evolucionando con un enfoque fuerte en __rendimiento__, __simplicidad__ y desarrollo moderno.

Al comenzar con esta nueva versión de Angular el proceso para preparar el entorno de desarrollo no varía demasiado en los pasos, aunque sí cambian algunas preguntas durante la configuración. En este artículo vamos a instalar Angular 21 desde cero y analizar sus mejoras más importantes.

## Requisitos previos

Angular depende fuertemente del ecosistema de Node, por lo que es importante partir con versiones actuales.

- [Node.js (versión ≥ 20)](https://nodejs.org/en/){:target='_blank'}.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}).

Verificación rápida:

{% capture tools_version %}
<span class='hl'>$ node --version</span>
v24.8.0
<span class='hl'>$ npm --version</span>
11.6.0
{% endcapture %}

{% include terminal-wrapper.html content=tools_version typing=true %}

## Instalar Angular CLI

El CLI forma parte de **Angular** y es la herramienta estándar para crear y gestionar proyectos. Destaca porque automatiza muchas tareas de desarrollo, especialmente las repetitivas, haciendo el flujo de trabajo mucho más ágil.

Para instalarlo de forma global (recomendado):

```terminal
npm install -g @angular/cli
```
{:.typing}

Verificación rápida:

```terminal
ng version
```
{:.typing}

El resultado, debería ser parecido a lo siguiente:

{% capture angular_version %}
<span class='hl'>$ ng version</span>

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

<span class='hl'>Angular CLI       : 21.0.3
Node.js           : 24.8.0
Package Manager   : npm 11.6.0</span>
Operating System  : darwin arm64
{% endcapture %}
{% include terminal-wrapper.html content=angular_version %}

## Creación del proyecto

En una terminal, se debe usar el comando de siempre (`ng new`) junto al nombre del proyecto deseado. Por ejemplo, usaremos el nombre de proyecto `first-angular-app`:

```terminal
ng new first-angular-app
```
{:.typing}

Durante el proceso, Angular CLI hace preguntas clave. Recomendación:

{% capture autocomplete_cli %}
<span class='hl'>$ ng new first-angular-app</span>
 <strong>Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show 
possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.)</strong>
<span class='hl'>Yes</span>
Appended `source <(ng completion script)` to `/Users/mcherrera/.zshrc`. Restart your terminal or run the following to autocomplete `ng` commands:

    source <(ng completion script)

<span style='color: var(--text-muted-color)'>☝️ Ese mensaje solo te está preguntando si quieres activar el autocompletado para la Angular CLI en tu terminal (recomendado).</span>

<strong>Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.</strong>
<span class='hl'>No</span>

<span style='color: var(--text-muted-color)'>☝️ Ese mensaje pregunta si deseas compartir datos de uso anónimos (comandos usados, errores, versión del CLI, etc.) con el equipo de Angular para mejorar la herramienta (opcional).</span>

Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
? <strong>Which stylesheet system would you like to use?</strong>
<span class='hl'>❯ CSS</span>             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Tailwind CSS    [ https://tailwindcss.com                                        ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

✔ <strong>Which stylesheet system would you like to use?</strong> CSS  [ https://developer.mozilla.org/docs/Web/CSS ]

<span style='color: var(--text-muted-color)'>☝️ Aquí Angular te está preguntando qué sistema de estilos quieres usar en el proyecto (preferencia CSS).</span>

? <strong>Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N)</strong>
<span class='hl'>No</span>

<span style='color: var(--text-muted-color)'>☝️ Aquí Angular te está preguntando si quieres habilitar SSR (Server-Side Rendering) y SSG (Static Site Generation) en tu proyecto.
¿Qué elegir?
Proyecto normal / aprendizaje / dashboard / SPA
👉 N (No) ← recomendado

Sitio público con SEO importante (landing, blog, marketing)
👉 Y (Sí)
</span>
✔ <strong>Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?</strong> No

? <strong>Which AI tools do you want to configure with Angular best practices? 
https://angular.dev/ai/develop-with-ai</strong>
❯ ◉ None
  ◯ Agents.md      [ https://agents.md/                                               ]
  ◯ Claude         [ https://docs.anthropic.com/en/docs/claude-code/memory            ]
  ◯ Cursor         [ https://docs.cursor.com/en/context/rules                         ]
  ◯ Gemini         [ https://ai.google.dev/gemini-api/docs                            ]
  ◯ GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
  ◯ JetBrains AI   [ https://www.jetbrains.com/help/junie/customize-guidelines.html   ]

<strong>Which AI tools do you want to configure with Angular best practices? 
https://angular.dev/ai/develop-with-ai</strong> <span class='hl'>None</span>

<span style='color: var(--text-muted-color)'>☝️ Ese paso solo sirve para generar archivos de configuración con buenas prácticas de Angular para herramientas de IA específicas (reglas, contexto del proyecto, convenciones, etc.)</span>

<span class='text-success'>CREATE</span> first-angular-app/README.md (1468 bytes)
<span class='text-success'>CREATE</span> first-angular-app/.editorconfig (314 bytes)
<span class='text-success'>CREATE</span> first-angular-app/.gitignore (604 bytes)
<span class='text-success'>CREATE</span> first-angular-app/angular.json (1936 bytes)
<span class='text-success'>CREATE</span> first-angular-app/package.json (964 bytes)
<span class='text-success'>CREATE</span> first-angular-app/tsconfig.json (957 bytes)
<span class='text-success'>CREATE</span> first-angular-app/tsconfig.app.json (429 bytes)
<span class='text-success'>CREATE</span> first-angular-app/tsconfig.spec.json (441 bytes)
<span class='text-success'>CREATE</span> first-angular-app/.vscode/extensions.json (130 bytes)
<span class='text-success'>CREATE</span> first-angular-app/.vscode/launch.json (470 bytes)
<span class='text-success'>CREATE</span> first-angular-app/.vscode/tasks.json (938 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/main.ts (222 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/index.html (301 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/styles.css (80 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.css (0 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.spec.ts (684 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.ts (299 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.html (20104 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.config.ts (313 bytes)
<span class='text-success'>CREATE</span> first-angular-app/src/app/app.routes.ts (77 bytes)
<span class='text-success'>CREATE</span> first-angular-app/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
{% endcapture %}
{% include terminal-wrapper.html content=autocomplete_cli %}

> ![Proyecto creado](angular/first-project-angular-cli-dark.webp){:.dark}
> ![Proyecto creado](angular/first-project-angular-cli-light.webp){:.light}
> Si observamos bien, se puede notar que el archivo tradicional `app.component.ts` ya no aparece con ese nombre. En su lugar, el CLI genera archivos como `app.ts`, `app.html` y `app.css`, reflejando la nueva convención de nomenclatura para el componente raíz, la cual resulta más simple y directa.
{:.prompt-info}

## Estructura base del proyecto

Angular genera más archivos que otros frameworks o librerías como React, pero cada uno cumple una función clara. Veamos que tenemos en nuestra aplicación:

{% include file-viewer.html files=site.data.generated.repo-first-angular-app.files name="first_app" %}

Claves importantes:

* `app.config.ts`
:  Configura la aplicación a nivel global: registra el router con sus rutas y activa el manejo global de errores; sirve para declarar providers compartidos por toda la app, no para lógica de negocio ni vistas.

* `app.routes.ts` 
: Define las rutas de navegación de la aplicación; en este archivo se declara qué componentes se cargan para cada URL y cómo se estructura la navegación. Ahora está vacío, por lo que la app no tiene rutas configuradas aún.

* `app.spec.ts`
: Contiene las pruebas unitarias del componente principal; verifica que la aplicación se cree correctamente y que el HTML renderice el contenido esperado (como el título), usando las herramientas de testing de Angular (`TestBed`).

## Levantar el servidor de desarrollo

Para iniciar el servidor, se utiliza el siguiente comando desde la raíz del proyecto:

```terminal
cd first-angular-app
ng serve
```
{:.typing}

> Si se desea abrir el navegador de forma automática al iniciar el servidor, se puede usar:
> ```terminal
> ng serve --open
> ```
> {:.typing}
{: .prompt-info }

Por defecto, se configura en `http://localhost:4200/`:

{% capture ng_serve %}
<span class='hl'>$ ng serve</span>
Initial chunk files | Names         | Raw size
main.js             | main          | 47.65 kB | 
styles.css          | styles        | 95 bytes | 

                    | Initial total | 47.74 kB

Application bundle generation complete. [0.648 seconds] - 2025-12-19T12:06:54.080Z

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   <span class='hl'>http://localhost:4200/</span>
  ➜  press h + enter to show help
{% endcapture %}
{% include terminal-wrapper.html content=ng_serve %}

Al abrir el proyecto en el navegador, verás el contenido generado automáticamente por la CLI de Angular.

![Lanzar angular](angular/first-project-server-run.webp){: .bg-secondary-subtle .rounded }

> Angular recompila la aplicación en caliente y mantiene el estado, por lo que los cambios se reflejan casi al instante durante el desarrollo.
{:.prompt-info}

## Generación de componentes

En __Angular__ no se crean componentes uno por uno manualmente. El CLI los genera automáticamente con todo lo necesario.

Ejemplo:

```terminal
ng g c pages/home
```
{:.typing}

Angular crea:

* componente
* template
* estilos
* archivo de pruebas

Y además **registra automáticamente** lo necesario.

## Routing básico

Para añadir el componente generado, abrimos `app.routes.ts`:

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home }
];
```
{:file="src/app/app.routes.ts"}

Angular maneja el routing de forma declarativa y predecible.

## Build de producción

Cuando la aplicación ya está lista para publicarse, el siguiente paso es generar una versión optimizada para producción. Para ello, se utiliza el comando `build` en la terminal: 

```terminal
ng build --configuration production
```
{:.typing}

Este proceso crea archivos más livianos y eliminar código innecesario (_tree-shaking_), pensados para mejorar el rendimiento y la carga en el navegador.

> En versiones modernas de Angular, `ng build` ya está usando el modo `production` por defecto.
{:.prompt-info}

Salida:

<i class="fa-regular fa-folder"></i> `dist/first-angular-app/`

Optimizado, minificado y listo para desplegar. A continuación, puedes revisar el despliegue hecho en la plataforma netlify:

> [https://first-angular-application.netlify.app/](https://first-angular-application.netlify.app/){:target='_blank'}

{% include circle-line.html %}

__Angular__ no es “más difícil”, es **más estructurado**.
Si el proyecto es grande, con equipos, reglas y crecimiento a largo plazo, __Angular__ reduce fricción donde otros stacks la aumentan.
