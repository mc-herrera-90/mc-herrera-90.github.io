---
title: "Angular: Configuración del entorno local"
categories: [Angular, Angular-Setup]
icon: techs/angular.svg
badge: angular
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---


Al comenzar con Angular, lo primero es configurar un __entorno de desarrollo__ adecuado. Una vez listo, podrás iniciar tu primer proyecto. Con solo unos pasos, estarás listo para dar vida a tus primeras aplicaciones con Angular.

## Requisitos previos

Angular depende fuertemente del ecosistema Node, por lo que es importante partir con versiones actuales.
- [Node.js](https://nodejs.org/en/){:target='_blank'}: Necesitarás **Node.js ≥ 18**.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}): Son administradores de paquetes que te permiten gestionar las dependencias de un proyecto. **npm** viene preinstalado con **Node.js**, pero puedes optar por otra alternativa.

__Verificación rápida__:


{% capture tools_version %}
<span class='hl'>$ node --version</span>
v24.8.0
<span class='hl'>$ npm --version</span>
11.6.0
{% endcapture %}

{% include terminal-wrapper.html content=tools_version typing=true %}

## Instalar Angular CLI

Angular **no se inicia a mano**.
El CLI es parte del framework, no una herramienta opcional.

Instalación global:

```terminal
npm install -g @angular/cli
```
{:.typing}

Verificación:

```terminal
ng version
```

El resultado, debería ser como el siguiente:

{% capture angular_version %}
<span class='hl'>$ ng version</span>

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI       : 21.0.3
Node.js           : 24.8.0
Package Manager   : npm 11.6.0
Operating System  : darwin arm64
{% endcapture %}
{% include terminal-wrapper.html content=angular_version %}

Si eso está correcto, el entorno está listo.

## Creación del proyecto

En tu terminal, ejecuta el comando `ng new` con el nombre del proyecto deseado. Por ejemplo, usaremos el nombre de proyecto `first-angular-app`:

```terminal
ng new first-angular-app
```

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

![Proyecto creado](angular/first-project-angular-cli-dark.webp){:.dark}
![Proyecto creado](angular/first-project-angular-cli-light.webp){:.light}
_Generando el proyecto_

## Estructura base del proyecto

Angular genera más archivos que React, pero **cada uno cumple una función clara**. Veamos que tenemos en el directorio `src/app`:

{% include file-viewer.html files=site.data.codes.angular.src-app name="src-app" %}

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

> Si se desea abrir el navegador de forma automática al iniciar el servidor, se puede usar:
> ```terminal
> ng serve --open
> ````
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

Angular recompila en caliente y mantiene el estado cuando es posible.

![Lanzar angular](angular/first-project-server-run.webp){: .bg-secondary-subtle .rounded }

## Organización inicial recomendada

Antes de escribir código, conviene **ordenar el proyecto**.

Dentro de `app/`:

```
app/
├── core/
│   ├── services/
│   ├── guards/
│   └── interceptors/
├── shared/
│   ├── components/
│   ├── pipes/
│   └── directives/
├── pages/
│   ├── home/
│   └── login/
└── app.module.ts
```

* **core/** → lógica transversal (una sola vez)
* **shared/** → reutilizable
* **pages/** → vistas de routing

Esto evita el clásico “todo en components”.

## Generación de componentes (forma correcta)

Angular **no espera que escribas archivos a mano**.

Ejemplo:

```terminal
ng g c pages/home
```

Angular crea:

* componente
* template
* estilos
* archivo de pruebas

Y además **registra automáticamente** lo necesario.


## Routing básico

En `app.routes.ts`:

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
```
{:file="src/app/app.routes.ts"}


Angular maneja el routing de forma declarativa y predecible.

## Servicios y consumo de APIs

Angular separa claramente **vista** y **lógica**.

Generar servicio:

```terminal
ng g s core/services/api
```

Uso básico:

```ts
constructor(private http: HttpClient) {}

getUsers() {
  return this.http.get('/api/users');
}
```

Aquí aparece uno de los pilares de Angular: **inyección de dependencias** real, no simulada.


## Formularios: por qué usar Reactive Forms

Angular ofrece dos caminos, pero para proyectos reales:

* Template Forms → simples
* **Reactive Forms → recomendados**

Ejemplo base:

```ts
this.form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
});
```

Esto da:

* validaciones explícitas
* control total del estado
* testeo real


## UI y diseño

Angular no impone librerías visuales, pero **Angular Material** es la opción más coherente.

```terminal
ng add @angular/material
```

Ventajas:

* accesibilidad integrada
* componentes consistentes
* temas configurables


## Build de producción

```terminal
ng build
```

Salida:

```
dist/first-angular-app/
```

Optimizado, minificado y listo para desplegar.

{% include circle-line.html %}

## Cierre

Angular no es “más difícil”, es **más estructurado**.
Si el proyecto es grande, con equipos, reglas y crecimiento a largo plazo, Angular **reduce fricción** donde otros stacks la aumentan.

Este setup deja una base:

* mantenible
* escalable
* alineada con prácticas reales

Sin ruido innecesario.

