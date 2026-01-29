---
title: "GH CLI utilidad oficial de línea de comandos"
categories: [GitHub, "Github_03-Productividad"]
tags: [github]
image:
   path: poster/github-cli.webp
   lqip: data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwBACdASoUAAsAPpE6l0eloyIhMAgAsBIJZwCdAYvW5EnMf/nBoeqn21bYAAD+8q+zPwjZD+YF7syVxeHo7uvRwFP6qRSWeS35SJ11ZIkusyF+UHKFTN+ytadrNjG6ziM1WpRJ//UMrl5Lg84XDVenN+jfs9sWno0ozHCKBuAAAA==
---

Si eres un desarrollador o trabajas en proyectos colaborativos en GitHub, seguramente ya conoces lo poderosa que puede ser esta plataforma. GitHub no solo te permite almacenar y gestionar tu código, sino que también te ofrece una serie de herramientas para optimizar tu flujo de trabajo. Una de las más útiles es GitHub CLI, la herramienta de línea de comandos oficial de GitHub.

En este post, vamos a explorar qué es GitHub CLI, cómo instalarla y algunas de sus funcionalidades más útiles para mejorar tu productividad en GitHub.

## ¿Qué es GitHub CLI?

GitHub CLI es una interfaz de línea de comandos diseñada para facilitar la interacción con GitHub sin necesidad de abrir un navegador. Al utilizar la terminal, puedes realizar diversas acciones que normalmente requerirían acceder a la interfaz web, lo que ahorra tiempo y te permite realizar tareas de manera más rápida y eficiente.

Con GitHub CLI, puedes gestionar repositorios, crear pull requests, revisar issues, visualizar el historial de commits, interactuar con GitHub Actions, y mucho más, todo directamente desde tu terminal.


### 1. Instalar GitHub CLI

Instalar GitHub CLI es bastante sencillo y está disponible para diferentes sistemas operativos, incluyendo macOS, Windows y Linux.

{% tabs install-gh %}
{% tab install-gh Windows %}

En Windows, gh está disponible a través de [WinGet](https://learn.microsoft.com/es-es/windows/package-manager/winget/){:target='_blank'}, [Chocolatey](https://chocolatey.org/){:target='_blank'}, y como instalador MSI:

```terminal
# WinGet
winget install --id GitHub.cli

# Chocolatey
choco install gh
```
{% endtab %}
{% tab install-gh macOS %}
Si usas Homebrew, puedes instalar `gh` con el siguiente comando:

```terminal
brew install gh
```
{% endtab %}
{% tab install-gh Linux %}
Si usas Linux, puedes instalar `gh` directamente desde los repositorios de tu distribución:

```bash
sudo apt install gh  # Para distribuciones basadas en Debian/Ubuntu
sudo yum install gh  # Para distribuciones basadas en Red Hat
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Una vez instalada, puedes verificar que todo esté funcionando con el siguiente comando:

```terminal
gh --version
```

Esto nos debería mostrar la versión que instalamos de GitHub CLI:

```
gh version 2.45.0 (2025-07-18 Ubuntu 2.45.0-1ubuntu0.3)
https://github.com/cli/cli/releases/tag/v2.45.0
```
{: .noheader .fit-content }

### 2. Autenticación

Después de instalar GitHub CLI, necesitamos conectarlo con nuestra GitHub.

Para hacer esto, previamente debes tener tu cuenta de GitHub con la sesión abierta para facilitar las acciones que nos indicará el comando para autenticarnos.

En la terminal o símbolo de sistema escribe el siguiente comando:

```terminal
gh auth login
```

Esto iniciará un asistente que nos irá preguntando qué deseamos hacer. A continuación, puedes revisar una simulación:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">gh auth login</span>

? What account do you want to log into?  [Use arrows to move, type to filter]
> <span class="hl">GitHub.com</span>
  GitHub Enterprise Server

? What is your preferred protocol for Git operations on this host?  [Use arrows to move, type to filter]
 HTTPS
> <span class="hl">SSH</span>

? Upload your SSH public key to your GitHub account?  [Use arrows to move, type to filter]
  /home/mcherrera/.ssh/id_ed25519.pub
> <span class="hl">/home/mcherrera/.ssh/id_rsa.pub</span>
  Skip

? Title for your SSH key: (GitHub CLI) <span style="color: gray">No escribas nada. Si la llave seleccionada se encuentra registrada en GitHub, gh la detectará y no intentará subirla de nuevo.</span>

? How would you like to authenticate GitHub CLI?  [Use arrows to move, type to filter]
> <span class="hl">Login with a web browser</span>
  Paste an authentication token

! First copy your one-time code: 11F7-CC2A
Press Enter to open github.com in your browser... 
</pre></code>
</div>
</div>

__Demostración__:

{% include embed/video.html src="shell/gh-cli-auth.mp4" %}

## Principales funciones de GitHub CLI

### 1. Clonar Repositorios

Aunque Git ya permite clonar repositorios desde la línea de comandos, con **`gh-cli`** puedes hacer esto aún más rápido.

```bash
gh repo clone <usuario>/<repositorio>
```
{: .nolineno }

### 2. Gestionar Pull Requests

Puedes crear, listar, revisar y hacer merge de pull requests sin necesidad de entrar al navegador. Algunos comandos útiles son:
- **Crear un Pull Request:**

```bash
gh pr create --base main --head <tu-rama> --title "Título del PR" --body "Descripción detallada"
```
{: .nolineno }

- **Ver los Pull Requests abiertos:**

```bash
gh pr list
```
{: .nolineno }

- **Revisar un Pull Request:**

```bash
gh pr view <ID-del-PR>
```
{: .nolineno }

### 3. Gestionar Issues

Si trabajas en proyectos con varios colaboradores, gestionar issues desde la terminal puede ser muy eficiente.
- **Crear un Issue:**

```bash
gh issue create --title "Nuevo Bug" --body "Descripción del problema"
```
{: .nolineno }

- **Ver Issues Abiertos:**

```bash
gh issue list
```
{: .nolineno }

- **Cerrar un Issue:**
  
```bash
gh issue close <ID-del-Issue>
```
{: .nolineno }

### 4. Visualizar GitHub Actions

Si tu proyecto usa GitHub Actions para CI/CD, puedes visualizar el estado de tus workflows directamente desde la terminal.

```bash
gh run list
```
{: .nolineno }

## Productividad con GitHub CLI

La **GitHub CLI (`gh`)** es una herramienta que mejora la productividad de cualquier desarrollador al permitir trabajar con GitHub directamente desde la terminal.

En pocas palabras, **GitHub CLI integra GitHub en tu entorno de desarrollo**, permitiéndote trabajar de forma más fluida, enfocada y eficiente.

### Ventajas de Usar gh-cli

1. **Ahorro de Tiempo:** Evita la necesidad de navegar por la interfaz web de GitHub para realizar tareas simples. Todo se hace directamente desde tu terminal.
2. **Automatización:** Puedes integrar `gh-cli` en scripts y flujos de trabajo personalizados, lo que facilita tareas repetitivas o procesos automatizados.
3. **Productividad:** No tienes que cambiar de ventana o de aplicación para revisar tu repositorio, crear issues o gestionar pull requests.
4. **Compatibilidad:** Funciona bien con otras herramientas y comandos de Git, lo que facilita el trabajo en proyectos grandes y complejos.


{% include circle-line.html %}

**`gh`** es una herramienta esencial para desarrolladores que buscan mejorar su flujo de trabajo y aumentar su productividad en GitHub. Con esta herramienta, puedes gestionar repositorios, pull requests, issues y mucho más directamente desde la terminal, sin tener que abrir el navegador constantemente. Si aún no la has probado, ¡es hora de instalarla y comenzar a aprovechar sus ventajas!

Si te interesa saber más sobre herramientas que pueden mejorar tu productividad como desarrollador, no olvides seguir mi blog y explorar más artículos sobre el tema.


### Recursos Adicionales

- [Documentación oficial de GitHub CLI](https://cli.github.com/)
- [Repositorio de GitHub CLI en GitHub](https://github.com/cli/cli)