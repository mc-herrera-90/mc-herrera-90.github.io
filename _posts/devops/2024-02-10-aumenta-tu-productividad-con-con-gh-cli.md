---
title: "Github Cli"
categories: [DevOps, Devops-Productividad]
tags: [devops]
image:
   path: poster/github-cli.webp
   lqip: data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwBACdASoUAAsAPpE6l0eloyIhMAgAsBIJZwCdAYvW5EnMf/nBoeqn21bYAAD+8q+zPwjZD+YF7syVxeHo7uvRwFP6qRSWeS35SJ11ZIkusyF+UHKFTN+ytadrNjG6ziM1WpRJ//UMrl5Lg84XDVenN+jfs9sWno0ozHCKBuAAAA==
---

Si trabajas en entornos de **DevOps** o gestionas proyectos colaborativos en GitHub, sabrás que la eficiencia y la automatización son clave para mantener flujos de trabajo ágiles. GitHub no solo permite almacenar y gestionar código, sino que también ofrece herramientas para **automatizar tareas, gestionar repositorios y optimizar procesos de integración y despliegue continuo**.

Por eso, vamos a conocer a GitHub CLI, la herramienta oficial de línea de comandos de GitHub.

![GitHub Cli](devops/gh-cli.webp)

## Alcance de esta guía

En este artículo, vamos a explorar qué es GitHub CLI. Los objetivos son:

- [x] Comprender qué es GitHub CLI y por qué es útil en flujos DevOps.
- [x] Instalar GitHub CLI en diferentes sistemas operativos.
- [x] Automatizar tareas comunes en repositorios de GitHub desde la línea de comandos.
- [x] Integrar GitHub CLI en pipelines de CI/CD para optimizar tu flujo de trabajo.

## ¿Qué es Github CLI?

GitHub CLI es una interfaz de línea de comandos diseñada para facilitar la interacción con GitHub sin necesidad de abrir un navegador. Al utilizar la terminal, puedes realizar diversas acciones que normalmente requerirían acceder a la interfaz web, lo que ahorra tiempo y te permite realizar tareas de manera más rápida.

Con GitHub CLI, puedes gestionar repositorios, crear pull requests, revisar issues, visualizar el historial de commits, interactuar con GitHub Actions, y mucho más, todo directamente desde tu terminal.

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">gh help</span>

Work seamlessly with GitHub from the command line.

<span class="hl">USAGE</span>
  gh &lt;command&gt; &lt;subcommand&gt; [flags]

<span class="hl">CORE COMMANDS</span>
  auth:          Authenticate gh and git with GitHub
  gist:          Manage gists
  repo:          Manage repositories
  ...

<span class="hl">GITHUB ACTIONS COMMANDS</span>
  cache:         Manage GitHub Actions caches
  run:           View details about workflow runs
  workflow:      View details about GitHub Actions workflows
  ...

<span class="hl">EXAMPLES</span>
  $ gh issue create
  ...

<span class="hl">LEARN MORE</span>
  Use `gh &lt;command&gt; &lt;subcommand&gt; --help` for more information about a command.
  Read the manual at <a href='https://cli.github.com/manual' target='_blank'>https://cli.github.com/manual</a>
  Learn about exit codes using `gh help exit-codes`
  Learn about accessibility experiences using `gh help accessibility`
</pre></code>
</div>
</div>

## Instalación

Instalar GitHub CLI es bastante sencillo y está disponible para diferentes sistemas operativos, incluyendo macOS, Windows y Linux.

{% tabs install-gh-cli %}
{% tab install-gh-cli <i class="fa-brands fa-windows"></i> Windows %}

En Windows, gh está disponible a través de [WinGet](https://learn.microsoft.com/es-es/windows/package-manager/winget/){:target='_blank'}, [Chocolatey](https://chocolatey.org/){:target='_blank'}, y en forma de instalador MSI en la [página de releases](https://github.com/cli/cli/releases/latest){:target='_blank'}:

- WinGet:

```terminal
winget install --id GitHub.cli
```

- Chocolatey:

```terminal
choco install gh
```

- Los binarios precompilados se pueden descargar aquí:

<div id="releases-list">
  <p>Cargando la versión más reciente de Windows...</p>
</div>

<script>
function formatBytesToMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getIconByExtension(filename) {
  return filename.toLowerCase().endsWith('.zip') ? 'fa-file-zipper' : 'fa-cube';
}

async function fetchLatestWindowsRelease() {
  const container = document.getElementById('releases-list');
  try {
    const response = await fetch('https://api.github.com/repos/cli/cli/releases/latest');
    const release = await response.json();

    const ul = document.createElement('ul');
    ul.className = 'list-group';

    release.assets
      .filter(asset => asset.name.toLowerCase().includes('windows'))
      .sort((a, b) => {
        const extA = a.name.split('.').pop().toLowerCase();
        const extB = b.name.split('.').pop().toLowerCase();

        if (extA === extB) return 0;
        if (extA === 'msi') return -1;
        if (extB === 'msi') return 1;
        if (extA === 'zip') return -1;
        if (extB === 'zip') return 1;
        return 0;
      })
      .forEach(asset => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center';

        const leftDiv = document.createElement('div');
        leftDiv.className = 'd-flex align-items-center gap-2 flex-grow-1';
        const iconClass = getIconByExtension(asset.name);
        leftDiv.innerHTML = `<i class="fa ${iconClass}"></i> 
          <a href="${asset.browser_download_url}" target="_blank" class="text-wrap d-inline-block">${release.name} — ${asset.name}</a>`;

        const rightDiv = document.createElement('div');
        rightDiv.className = 'mt-1 mt-sm-0 ms-sm-2 text-end text-nowrap';
        rightDiv.textContent = formatBytesToMB(asset.size);

        li.appendChild(leftDiv);
        li.appendChild(rightDiv);
        ul.appendChild(li);
      });

    container.innerHTML = '';
    container.appendChild(ul);
  } catch (err) {
    container.innerHTML = 'Error cargando la versión de Windows';
    console.error(err);
  }
}

fetchLatestWindowsRelease();
</script>


{% endtab %}
{% tab install-gh-cli <i class="fa-brands fa-apple"></i> macOS %}
Si usas Homebrew, puedes instalar `gh` con el siguiente comando:

```terminal
brew install gh
```
{% endtab %}
{% tab install-gh-cli <i class="fa-brands fa-linux"></i> Linux %}
Si usas Linux, puedes instalar `gh` directamente desde los repositorios de tu distribución:

- Para distribuciones basadas en Debian/Ubuntu:
```terminal
sudo apt install gh
```

- Para distribuciones basadas en Red Hat
```
sudo yum install gh
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Concluida la instalación, puedes verificar su funcionamiento con el comando `gh --version`:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">gh --version</span>
<span class="hl">gh version 2.78.0</span> (2025-01-21)
<a href='https://github.com/cli/cli/releases/tag/v2.78.0' target='_blank'>https://github.com/cli/cli/releases/tag/v2.78.0</a>
</pre></code>
</div>
</div>

## Autenticación

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

! First copy your one-time code: <span class="hl">11F7-CC2A</span>
Press Enter to open github.com in your browser...
</pre></code>
</div>
</div>

__Demostración__:

{% include embed/video.html src="devops/gh-cli-auth.mp4" %}

## Principales funciones de GitHub CLI

### 1. Clonar Repositorios

Aunque Git ya permite clonar repositorios desde la línea de comandos, con **`gh`** puedes hacer esto aún más rápido.

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

## Automatización

En los pipelines modernos de CI/CD, automatizar tareas repetitivas es clave para mantener la consistencia, mejorar la eficiencia y reducir errores humanos. Con GitHub CLI, es posible interactuar con repositorios y ejecutar acciones directamente desde scripts y pipelines, evitando depender de la interfaz web.

### Integrando GitHub CLI en pipelines de CI/CD

GitHub CLI se integra fácilmente en pipelines para automatizar tareas como la creación de releases, pull requests o issues. Esto permite que las operaciones de tu flujo de trabajo sean más consistentes y reproducibles, además de auditarse de manera sencilla.

Antes de ver los ejemplos prácticos, los principales objetivos de esta integración son:

- [x] Ejecutar acciones de GitHub sin depender de la interfaz web.
- [x] Automatizar la creación y gestión de issues, pull requests y releases.  
- [x] Mantener un flujo de trabajo reproducible y auditado.

### 1. Crear un release automáticamente

Cuando tu pipeline genera un nuevo build, puedes crear un release y subir los assets de manera automática usando un script dedicado (`ci-create-release.sh`).  

**Ubicación del script:**

```
📂 repo
└── 📂 ci-scripts
    └── ci-create-release.sh
````
{: .noheader .fit-content }

**Contenido del script:**

```bash
VERSION="v2.83.1"
REPO="tu-usuario/tu-repo"

# Crear release y subir assets del build
gh release create $VERSION ./build/*.zip \
  --repo $REPO \
  --title "Release $VERSION" \
  --notes "Actualización automática desde CI/CD"

# Publicar release draft
gh release edit $VERSION --draft=false --repo $REPO
````
{:file="ci-create-release.sh"}

Este script puede ejecutarse **localmente** para pruebas o directamente desde un pipeline.

**Integración con GitHub Actions:**

Para automatizar el release al hacer push a la rama `main` o al crear un tag, creamos un workflow en `.github/workflows/release.yml`{: .filepath}:

{% raw %}
```yaml
name: CI/CD Release

on:
  push:
    branches:
      - main
    tags:
      - 'v*.*.*'

jobs:
  create-release:
    runs-on: ubuntu-latest

    steps:
      # Clonar el repositorio
      - name: Checkout repository
        uses: actions/checkout@v3

      # Configurar GitHub CLI
      - name: Set up GitHub CLI
        uses: cli/gh-actions@v2
        with:
          version: latest

      # Autenticación con token seguro
      - name: Authenticate GH CLI
        run: gh auth login --with-token < ${{ secrets.GITHUB_TOKEN }}

      # Ejecutar el script de release
      - name: Ejecutar script de release
        run: ./ci-scripts/ci-create-release.sh
```
{:file="release.yml"}
{% endraw %}

**Cómo funciona:**

1. **Checkout:** Se clona el repositorio para que el script tenga acceso a los builds y archivos.
2. **Instalación de GitHub CLI:** Se asegura que `gh` esté disponible en el runner.
3. **Autenticación segura:** `GITHUB_TOKEN` permite a `gh` interactuar con tu repositorio sin exponer credenciales.
4. **Ejecución del script:** Se llama a `ci-create-release.sh`, que crea el release y sube los assets filtrando solo los builds de Windows, `.msi` y `.zip`.

De esta manera, tu pipeline **automatiza por completo la creación de releases**, manteniendo un flujo reproducible y seguro.

Cuando tu pipeline genera un nuevo build, puedes crear un release y subir los assets de manera automática:

```bash
VERSION="v2.83.1"
REPO="tuusuario/tu-repo"

# Crear release y subir assets del build
gh release create $VERSION ./build/*.zip \
  --repo $REPO \
  --title "Release $VERSION" \
  --notes "Actualización automática desde CI/CD"

# Publicar release draft
gh release edit $VERSION --draft=false --repo $REPO
````
{:file="ci-create-release.sh"}

> Recuerda darle permisos de ejecución: 
> ```terminal
> chmod +x ci-create-release.sh
> ```
{: .prompt-info  }


#### Ejemplo 2: Abrir un pull request automáticamente

```bash
git checkout -b update-dependencies
git add .
git commit -m "Actualización automática de dependencias"
git push origin update-dependencies

gh pr create --title "Update dependencies" \
             --body "Actualización automática desde CI/CD" \
             --base main \
             --head update-dependencies
```

#### Ejemplo 3: Crear issues desde la pipeline

```bash
gh issue create --title "Tests fallando en CI" \
                --body "Se detectaron fallos en los tests automatizados." \
                --label bug
```






{% include circle-line.html %}

Si te interesa saber más sobre esta herramienta, no olvides revisar su documentación:

- [Documentación oficial de GitHub CLI](https://cli.github.com/manual){:target='_blank'}
- [Repositorio de GitHub CLI en GitHub](https://github.com/cli/cli){:target='_blank'}

También te comparto una hoja de referencia rápida para que tengas siempre contigo. 👇

{% include embed/pdf.html file="pdf/gh-cli-cheatsheet.pdf" %}
