---
title: "Git Hooks con Husky"
categories: [DevOps, Git Hooks]
description: Configurar Husky para automatizar tareas como validación de commits y ejecución de linters.
tags: [git, husky, hooks, automatización, desarrollo]
image:
  path: poster/configurar-husky.webp
  lqip: data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZQDImCHpDuy16IWW30sAAP7LPqnAsstWcpS9zdLRXQrEzAio4Sh1dmfbcQkIH5yuGBB+ZYu9c3gA
---

¿Cansado de esos commits que rompen todo porque alguien __“se olvidó”__ de correr los linters o las pruebas?  

<div style="text-align: center;" markdown="1">
  {% include icon/rage.svg %}{:style="width:17%; margin-bottom: 18px"}
</div>

Husky llega justamente para evitar ese tipo de caos: una herramienta que mantiene tu proyecto limpio y saludable incluso cuando hay __personas con malas prácticas__ en el equipo.

Antes de continuar, repasemos rápidamente qué son los hooks de Git y por qué son tan útiles en un flujo de trabajo moderno.

## ¿Qué es un en Git Hook?

Un "Git Hook" es un script peronalizado que puedes ejecutar en respuesta a eventos específicos en el ciclo de vida de Git. Estos eventos pueden ser acciones como:

- Realizar un `commit`
- Empujar cambios a un repositorio remoto con `push`
- Fusionar ramas con `merge`

Existen más pero normalmente esos eventos son los más frecuentes.

Git proporciona una serie de hooks predefinidos, y puedes personalizarlos para satisfacer las necesidades de tu flujo de trabajo. Algunos de los hooks más comunes son:

- `pre-commit`: Se ejecuta antes de confirmar los cambios (`commit`). Puedes usarlo para realizar tareas como ejecutar pruebas automáticas o comprobar la calidad del código.
- `pre-push`: Se ejecuta antes de empujar los cambios al repositorio remoto. Puedes realizar verificaciones adicionales antes de enviar los cambios al servidor.
- `post-commit`: Se ejecuta después de que se ha confirmado un cambio. Puedes usarlo para realizar tareas adicionales después de que se ha realizado un commit.
- `post-receive`: Se ejecuta en el repositorio remoto después de recibir nuevos cambios. Puede ser útil para realizar acciones en el servidor después de que se hayan empujado cambios en el repositorio remoto.

Para aprovechar los hooks en un repositorio Git, debes escribir scripts personalizados y colocarlos en la carpeta `.git/hooks/` del repositorio.

<div style="text-align: center;" markdown="1">
  {% include icon/git-hook.svg %}{:style="width:17%; margin-bottom: 18px"}
</div>

Git utiliza estos scripts automáticamente en función de los eventos correspondientes. Observa la siguiente demostración:

![Ejemplo de pre-commit](devops/git-hooks-demo.gif)
_Demostración básica de hooks nativos de Git_

### Ventajas/Desventajas de usar los hooks nativos de Git

Git incluye de forma nativa el __sistema de hooks__. Estos hooks son altamente personalizables y potentes, lo que los hace ideales para automatizar tareas como validación de código, formateo o verificación de mensajes de commit.

Sin embargo, aunque los "hooks nativos" son prácticos, también presentan ciertas limitaciones, especialmente cuando se trabaja en equipos o proyectos que requieren consistencia y facilidad de configuración.  A continuación, se detallan las principales ventajas y desventajas:

#### Ventajas

| Ventaja                           | Explicación                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Sin dependencias externas**     | No necesitas instalar nada adicional. Git ya incluye soporte para hooks en `.git/hooks/`.        |
| **Rendimiento ligeramente mejor** | Al no depender de Node.js o `npx`, puede ser un poco más rápido.                                 |
| **Más control**                   | Puedes escribir los scripts en cualquier lenguaje soportado por tu sistema (bash, Python, etc.). |
| **Menos archivos en el proyecto** | No necesitas carpetas como `.husky/` o paquetes npm relacionados.                                |

#### Desventajas

| Desventaja                      | Explicación                                                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No se comparten por defecto** | Los hooks de Git están en `.git/hooks/`, que está fuera del control de Git. Por lo tanto, **no se versionan** ni se comparten entre colaboradores. |
| **Mantenimiento manual**        | Si quieres cambiar los hooks, cada miembro del equipo tiene que copiar los nuevos manualmente.                                                     |
| **Difícil de automatizar**      | Requiere scripts adicionales para propagar hooks (por ejemplo, usando plantillas de repositorio o scripts post-clone).                             |
| **Menor integración con npm**   | No es tan fácil ejecutar scripts definidos en `package.json`.                                                                                      |

> Lo hooks nativos de Git, al trabajar en equipo presentan más desventajas que ventajas, especialmente cuando se comparan con herramientas como [Husky](https://typicode.github.io/husky/get-started.html){:target='_blank'}, que facilitan la gestión compartida y reproducible de hooks.
{: .prompt-info }

## ¿Qué es Husky?


__Husky__ es una librería de JavaScript que hace más fácil ejecutar automáticamente comandos o scripts en momentos específicos durante el desarrollo de proyectos.

<div style="text-align: center;" markdown="1">
  {% include icon/husky.svg %}{:style="width:17%; margin-bottom: 18px"}
</div>

Algunas características clave de Husky:

1. __Fácil configuración__: Husky simplifica la configuración de hooks de Git mediante la definición en la sección de scripts en un archivo `package.json`. Esto facilita la comprensión y mantenimiento de los hooks en un proyecto.
2. __Integración con comandos npm__: Husky se integra normalmente con los comandos de npm, lo que significa que puedes usar todos los scripts definidos en el archivo `package.json` directamente como acciones para los hooks de Git.
3. __Soporte de varios hooks__: Husky es compatible con una variedad de _hooks_ de Git, como `pre-commit`, `pre-push`, `post-merge`, entre otros. Esto permite ejecutar acciones personalizadas en diferentes etapas del ciclo de vida de Git.
4. __Instalación automática de hooks__: Husky puede configurar automáticamente los _hooks_ de Git durante la instalación, eliminando la necesidad de configuración manual y mejorando la consistencia y coherencia en los equipos de desarrollos.

## Preparar el terreno

Antes de comenzar con la instalación y configuración de Husky, asegúrate de que tienes [`git`](https://git-scm.com/){:target='_blank'} y [`Node.js`](https://nodejs.org/en/download){:target='_blank'} instalados:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git --version</span>
<span class="hl">2.43.0</span>
mcherrera@dev:~$ <span class="hl">node --version</span>
<span class="hl">v22.17.1</span>
</pre></code>
</div>
</div>

Ahora que hemos confirmado que contamos con todo lo necesario, continuemos con la configuración siguiendo estos pasos:

### 1. Inicializar un proyecto

En caso de que no tengas un archivo `package.json`, puedes crearlo con:

```terminal
npm init -y
```

### 2. Instalar e inicializar Husky

A continuación, instala Husky como dependencia de desarrollo con:

```terminal
npm install --save-dev husky
```

Para inicializar la configuración de Husky en el proyecto, debemos ejecutar el siguiente comando:

```terminal
npx husky init
```

> El comando `init` simplifica la configuración de husky en un proyecto. Crea un script `pre-commit` en el directorio `.husky/` y actualiza el __script prepare__ en `package.json`.
{:.prompt-info}

Ahora revisa el archivo `package.json`. Notarás que en la sección de `"scripts"` se agregó un nuevo script llamado `"prepare"`:

```json
"scripts": {
    "prepare": "husky install"
 }
```
{:file="package.json" .nolineno }

> Este script se ejecutará automáticamente después de un `npm install`.
{: .prompt-info .fit-content }

### 3. Validar mensajes de commit

Hasta ahora, ya tenemos una configuración básica de Husky para ejecutar _hooks_ de Git en nuestro proyecto. Pero tener _hooks_ por sí solos no basta, necesitamos herramientas que realicen tareas concretas durante esos _hooks_.

Una de esas tareas clave es __validar los mensajes de commit__. Aquí es donde entra en juego [`Commitlint`](https://commitlint.js.org/){:target='_blank'}.

__Commitlint__ es una herramienta que verifica que tus mensajes de `commit` sigan un formato establecido.

Ahora, necesitamos instalar las siguientes dependencias:

{% tabs install-commitlint %}
{% tab install-commitlint <i class="fa-solid fa-terminal"></i> Bash, git-bash %}
```terminal
npm install --save-dev @commitlint/{cli,config-conventional}
```
{% endtab %}
{% tab install-commitlint <i class="fa-solid fa-terminal"></i> CMD %}
```terminal
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```
{% endtab %}
{% endtabs %}

- `@commitlint/config-conventional`: Esta dependencia proporciona una configuración predefenida para Commitlint basada en las convenciones de [_Conventional commit_](https://www.conventionalcommits.org/en/v1.0.0/){:target='_blank'} para los `commit`.

- `@commitlint/cli`: Esta dependencia es la interfaz de línea de comandos para CommitLint. Proporciona herramientas para ejecutar la validación de mensajes de `commit` de acuerdo con las reglas establecidas en la configuración de Commitlint. Puedes usar este __CLI__ (_Command Line Interface_) para verificar si tus mensajes de `commit` cumplen con las convenciones configuradas.

Hasta este punto, en el archivo `package.json`, la sección `"devDependencies"` debería reflejar las herramientas instaladas como Husky y Commitlint y lucir más o menos así:

```json
"devDependencies": {
  "@commitlint/cli": "^19.8.1",
  "@commitlint/config-conventional": "^19.8.1",
  "husky": "^9.1.7"
}
```
{:file="package.json" .nolineno }

Algunas de las principales reglas del estándar son las siguientes:

1. `chore`: Cambios en tareas, configuración, y otros aspectos relacionados con el mantenimiento del proyecto.
2. `docs`: Cambios en la documentación.
3. `feat`: Nuevas características.
4. `fix`: Correciones de errores.
5. `style`: Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma que faltan, etc.).
6. `test`: Añadir o modificar pruebas.

En la raíz de tu proyecto, crea un nuevo archivo llamado `.commitlintrc.json`:

{% tabs create-config-file %}
{% tab create-config-file <i class="fa-solid fa-terminal"></i> Bash, git-bash %}
```terminal
touch .commitlintrc.json
```
{% endtab %}
{% tab create-config-file <i class="fa-solid fa-terminal"></i> CMD %}
```terminal
type nul > .commitlintrc.json
```
{% endtab %}
{% endtabs %}

Abre ese archivo, y agrega la configuración básica para decirle a Commitlint que use las reglas estándar del Conventional Commits para validar los mensajes:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```
{: file=".commitlintrc.json" }

> - `"extends": ["@c.../conf..."]`: Esto indica que estás extendiendo de la configuración basada en el estándar de `commits` [___Conventional Commits___](https://www.conventionalcommits.org/en/v1.0.0/){:target="_blank"}
{: .prompt-info }

Una vea creado y configurado el archivo `.commitlintrc.json`, el siguiente paso definir el hook de Git en husky, específicamente en el hook `commit-msg`: 

```terminal
touch .husky/commit-msg
chmod +x .husky/commit-msg

```

> Este comando, crea el archivo para el hook y le asigna permisos de ejecución (importante ese segundo paso).
{: .prompt-info }

Y pega el siguiente comando, y así Commitlint pueda validar automáticamente el mensaje del commit:

```bash
npx --no-install commitlint --edit "$1"
```
{:file="commit-msg"}

Cuando Git ejecuta el _hook_ `commit-msg`, le pasa como argumento (`$1`) el archivo que contiene el mensaje del commit. Ese archivo es temporal y lo usa Git antes de finalizar el commit.

> Entonces, este comando le dice a Commitlint:  
> "Lee el mensaje de este commit desde el archivo `$1`, y valida si cumple con las reglas definidas en `.commitlintrc.json`."
{: .prompt-info }

Observa la siguiente simulación, donde trataremos de realizar un `commit` que no cumple con las convenciones:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git status -s </span>
<span style="color: green">A  .gitignore</span>
<span style="color: red">?? .commitlintrc.json</span>
<span style="color: red">?? .husky/</span>
mcherrera@dev:~$ <span class="hl">git commit -m "add gitignore"</span>

⧗   input: add gitignore
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   <span class="hl">found 2 problems</span>, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
</pre></code>
</div>
</div>

Como puedes ver, Husky junto con Commitlint nos han detenido y nos invitan amablemente a revisar la [página oficial de Commitlint en GitHub](https://github.com/conventional-changelog/commitlint/#what-is-commitlint){:target='_blank'} para conocer los formatos de mensajes de commit válidos.

![convención de commits](devops/convencion-de-commit.webp)
_Readme de Commitlint en GitHub_

Entonces, esto significa que la primera palabra del mensaje de commit debe coincidir con uno de los tipos definidos en el estándar __Conventional Commits__. Además, puedes indicar opcionalmente el (scope), que va entre paréntesis, indicando el módulo o componente en el que estás trabajando.

Para el caso anterior, para pasar la validación, debemos respetar la convención:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git commit -m "chore(gitignore): nueva entrada - venv"</span>
[main c537a0e] chore: add gitignore
 1 file changed, 1 insertion(+)
 <span class="hl">create mode 100644 .gitignore</span>
</pre></code>
</div>
</div>

### ¿Cómo sobrescribir o extender las reglas?

En algunos casos, necesitamos añadir o modificar algunas de las reglas existentes, y para llevar a cabo este proceso, se puede añadir una sección `"rules"` justo después de `"extends"` para personalizar o desactivar reglas según tus necesidades. Cada regla se define mediante un arreglo que contiene:

__Nivel__:

- `0`: desactiva la regla.
- `1`: advertencia (warning).
-  `2`: error (fail si no se cumple).

__Condición__:

- `"always"`: siempre debe cumplirse.
- `"never"`: no debe cumplirse.

__Valor__:

Puede ser un número, un formato de texto, un array con valores válidos, etc., dependiendo de la regla.

### Cómo funciona esto

Commitlint combina primero las reglas del paquete extendido (`@commitlint/config-conventional`) y luego aplica las reglas personalizadas definidas en `"rules"`, sobrescribiendo cualquier valor previo. Esto te permite mantener la configuración base y ajustarla a tus necesidades de forma controlada.

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "header-max-length": [1, "always", 30],
    "scope-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."]
  }
}
```
{: file=".commitlintrc.json"}

__Detalle de la regla__:


```json
"header-max-length": [1, "always", 30]
```
{:  .nolineno file=".commitlintrc.json" }

> Esta regla establece que el encabezado del commit y que no debe exceder los 30 caracteres. El nivel 1 significa advertencia (warning): si se supera, Commitlint lo señalará, pero no bloqueará el `commit`.
{: .prompt-info }

```json
"scope-case": [2, "always", "lower-case"]
```
{:  .nolineno file=".commitlintrc.json" }

> Esta regla exige que el scope esté siempre en minúsculas (lower-case).  
> El __nivel 2 indica que se considera un error__; el commit será rechazado si no se cumple.
{: .prompt-info }

```json
"subject-full-stop": [2, "never", "."]
```
{:  .nolineno file=".commitlintrc.json" }

> - Esta regla se encarga del `subject` del mensaje (la parte después de type(scope):).
> - Esta regla prohíbe que el subject termine con un punto (.).
> - Si el mensaje finaliza con un punto, Commitlint lo marcará como error y no permitirá el commit.
{: .prompt-info }

{% include circle-line.html %}

En esta guía práctica configuramos Husky y Commitlint para aplicar convenciones estrictas en los mensajes de commit, garantizando consistencia y claridad en el historial de Git.

Finalmente, configuramos el hook `commit-msg` de Git en Husky para que ejecute commitlint cada vez que se realiza un `commit`, asegurando que todos los mensajes cumplan las reglas establecidas.
