---
title: "Python: Entornos virtuales de Python"
emoji: 🐍
categories: [Python, Python_02-Fundamentos]
image: poster/virtual-envs.webp
tags: [python, "entornos virtuales"]
mermaid: true
---

> Los desarrolladores experimentados suelen configurar y ejecutar sus aplicaciones en __entornos virtuales__ de Python, lo que les permite trabajar de forma independiente y evitar conflictos entre proyectos.
{: .prompt-tip }

## ¿Qué es un entorno virtual?

Un entorno virtual en Python es una instancia aislada de un entorno de Python ya instalado. Su principal ventaja es que permite trabajar de forma ordenada en un proyecto específico, utilizando únicamente los módulos y librerías necesarios para ese caso, sin afectar a otros proyectos ni a la instalación global del sistema.

A continuación, se muestra un ejemplo de cómo luce un entorno virtual, lo que nos ayudará a comprender mejor su finalidad.

```mermaid
graph LR
    B(<img src="{{ page.media_subpath }}/python/base.webp" style="height: 90px" />Python 3.9)
    B---T[Entornos Virtuales]
    T---C(<img src="{{ page.media_subpath }}/python/venv1.webp" style="height: 80px" />Python 3.9)
    T---D(<img src="{{ page.media_subpath }}/python/venv2.webp" style="height: 80px" />Python 3.9)
    T---E(<img src="{{ page.media_subpath }}/python/venv3.webp" style="height: 80px" />Python 3.9)
    subgraph Copias limpias y aisladas
    C---CD[Django==2.0]
    D---DD[Django==2.2]
    E---ED[Django==3.2]
    end
```

Cuando instalamos [Python3](https://www.python.org/){:target='blank'} obtenemos un único entorno global que es compartido por todos los proyectos y todo el código de Python. Si bien podríamos instalar **Django** para trabajar y otros paquetes en el entorno global. Sin embargo sólo podríamos tener instalada esa única versión en particular de cada paquete.

> Las aplicaciones Python instaladas en el entorno global pueden entrar en conflicto potencialmente unas con otras (si dependen de diferentes versiones del mismo paquete por ejemplo).
{: .prompt-warning }


## ¿Cómo se puede trabajar con un entorno virtual?

Cada vez que trabajes en un proyecto de Python que __use dependencias externas__, es mejor crear primero un entorno virtual y para eso hay diferentes métodos de lograrlo. A continuación, vamos a partir con un módulo que viene integrado en la biblioteca estándar de Python y luego con otras herramientas.

### 1. Usar el módulo VENV

El módulo `venv` ya forma parte de la biblioteca estándar de Python desde la versión 3.5.

#### Crear el entorno virtual

Para crear un entorno virtual, ubicate en la carpeta donde quieres crearlo y ejecuta el siguiente comando especificando la ruta a la carpeta:

{% tabs setup-venv %}
{% tab setup-venv Windows %}
```terminal
python -m venv mi-entorno
```
{% endtab %}
{% tab setup-venv Linux/macOS %}
```terminal
python3 -m venv mi-entorno
```
{% endtab %}
{% endtabs %}

![Crear un entorno con el módulo venv](python/crear-entorno-con-venv.webp){:.drop-shadow w="900"}
_Creación de un entorno virtual con el módulo `venv`_

> Un nombre común para el entorno virtual es `.venv`. Ese nombre mantiene la carpeta escondida en la consola cuando ejecutas comandos como `ls` y también en exploradores de archivos como __finder__, el nombre evita conflicto con los archivos `.env` que se suelen utilizar para definir variables de entornos.
{: .prompt-info }

#### Activar el entorno virtual

Una vez creado el entorno virtual, el siguiente paso es ejecutar el script que permite activar el entorno.

La ubicación de los scripts depende de la plataforma en la que creaste el entorno virtual. Por lo general es:
- `<nombre-entorno>/bin/` en Linux y macOS.
- `<nombre-entorno>/Scripts/` en el caso de Windows.

![Ubicación de los scripts para activar el entorno virtual](python/scripts-activate-win-linux.webp){:.drop-shadow w="900"}

Para activarlo en Windows, ejecuta:

```terminal
.\mi-entorno\Scripts\activate
```

En Unix o MacOS, ejecuta:

```terminal
source mi-entorno/bin/activate
```

Cuando activas el entorno, el prompt de la terminal o símbolo de sistema se modifica y se antepone el nombre del entorno virtual `(mi-entorno)` en ese caso.

```cmd
C:\Users\mcherrera\demo-venv>.\mi-entorno\Scripts\activate
(mi-entorno) C:\Users\mcherrera\demo-venv>
```
{: .border .rounded .border-secondary-subtle }

#### Eliminar un entorno virtual

Para borrar un entorno virtual, simplemente elimina la carpeta donde fue creado.
Por ejemplo, si el entorno se llama `mi-entorno`, puedes usar:

* **Windows (CMD o PowerShell):**

  ```powershell
  rmdir /s /q mi-entorno
  ```
  {:.nolineno}
* **macOS / Linux:**

  ```terminal
  rm -rf mi-entorno
  ```

> Existen otras excelentes herramientas de terceros para crear entornos virtuales, como __Virtualenvwrapper__ y __Pipenv__. Estas opciones ofrecen funciones adicionales que pueden facilitar la creación, administración y organización de entornos virtuales en proyectos Python. En las siguientes secciones explicaré cómo funcionan y en qué casos conviene utilizarlas.
{: .prompt-info }

{% include circle-line.html %}

### 2. Con Virtualenvwrapper

El paquete [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/){:target='_blank'} es una capa adicional sobre `virtualenv` que facilita la creación, activación y administración de entornos virtuales mediante comandos más simples.

#### Requisitos

**Página en pipy y versiones requeridas** 
- [![PyPi](https://badgen.net/badge/icon/pypi?icon=pypi&label){:style="height: 27px"}](https://pypi.org/project/virtualenvwrapper/){:target='_blank'}
- [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/virtualenvwrapper){:style="height: 27px"}](https://www.python.org/){:target='_blank'}
{:style='list-style: none' .d-flex .gap-2 .flex-wrap}

#### Instalación y configuración inicial

Usa `pip` para instalar el paquete:

```terminal
sudo pip3 install virtualenvwrapper
```

A continuación, se debe añadir las siguientes líneas en el archivo de inicio del shell (`.bashrc` o `.zshrc` si usas __zsh__):

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```
{: .nolineno file=".zshrc" }

- La variable `WORKON_HOME` determina en qué directorio se deben crear los entornos virtuales de Python.
- `VIRTUALENVWRAPPER_PYTHON` sirve para decirle a virtualenvwrapper qué intérprete de Python debe usar para crear y manejar los entornos virtuales.
- Por último, se debe agregar esta línea al archivo `~/.bashrc` o `~/.zshrc` para especificar en dónde está ubicado el ejecutable de virtualenvwrapper.

#### Crear el entorno virtual

Ubicate en la carpeta donde quieres crearlo y ejecuta el comando `mkvirtualenv` más el nombre para el nuevo entorno virtual:

```terminal
mkvirtualenv mi_entorno
```

> A diferencia del método anterior (módulo `venv`), podemos observar quer con un solo comando crea y activa el entorno virtual
> ![mkvirtualenv](python/mkvirtualenv-mi-entorno.webp){:.light}
> ![mkvirtualenv](python/mkvirtualenv-mi-entorno-dark.webp){:.dark}
{:.prompt-info }

#### Activar un entorno virtual

En caso de que tengas que volver a activar el entorno, usa el comando `workon` y el nombre del entorno:

```terminal
workon <nombre-entorno>
```

#### Desactivar el entorno

Si quieres salir del entorno virtual, ejecuta `deactivate`:

```terminal
deactivate
```

#### Listar todos los entornos

Para ver todos los entornos creados, usa el comando `workon` o `lsvirtualenv`:

```terminal
workon
lsvirtualenv
```

![Listar entornos virtuales](python/listar-entornos-virtualenvwrapper.webp){:.light .rounded .bg-secondary-subtle}
![Listar entornos virtuales](python/listar-entornos-virtualenvwrapper-dark.webp){:.dark .rounded .bg-secondary}
_Listar entornos creados con virtualenvwrapper_

#### Eliminar un entorno

Asi como usas `mkvirtualenv` para crear un entorno, también puedes usar `rmvirtualenv` para eliminar el entorno indicando su nombre:

```terminal
rmvirtualenv <nombre-entorno>
```

{% include circle-line.html %}

### 3. Con Pipenv

[__Pipenv__](https://pipenv-es.readthedocs.io/es/latest/){: target='_blank'} es una gran herramienta para gestionar entornos virtuales y dependencias, destacando frente a otras alternativas gracias a sus características más integradas, flexibles y fáciles de usar.

> __Pipenv__ automáticamente crea y maneja un entorno virtual para tus proyectos, también como *agregar/remover* paquetes desde un archivo `Pipfile.lock`, que es usado para producir un determinado build.
{: .prompt-tip}

#### Requisitos

**Página en pipy y versiones requeridas** 
- [![PyPi](https://badgen.net/badge/icon/pypi?icon=pypi&label){:style="height: 27px"}](https://pypi.org/project/pipenv/){:target='_blank'}
- [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/pipenv){:style="height: 27px"}](https://www.python.org/){:target='_blank'}
{:style='list-style: none' .d-flex .gap-2 .flex-wrap}

#### Instalación

Para la mayoría de los casos, se recomienda instalar Pipenv usando `pip` pero igual se puede instalar de otras manera según el Sistema Operativo:


{% tabs install_pipenv %}
{% tab install_pipenv Windows <i class="fa-brands fa-windows"></i> %}
```terminal
pip install --user pipenv
```

Comprueba si Pipenv está disponible, ejecutando el comando `pipenv`:
```cmd
C:\Users\mcherrera>pipenv
Usage: pipenv [OPTIONS] COMMAND [ARGS]...

Options:
  --where                         Output project home information.
  --venv                          Output virtualenv information.
  --py                            Output Python interpreter information.
  --envs                          Output Environment Variable options.
  --rm                            Remove the virtualenv.
  --bare                          Minimal output.
  --man                           Display manpage.
  --support                       Output diagnostic information for use in
                                  GitHub issues.
  --site-packages / --no-site-packages
                                  Enable site-packages for the virtualenv.

  --python TEXT                   Specify which version of Python virtualenv
                                  should use.
  --clear                         Clears caches (pipenv, pip).
  -q, --quiet                     Quiet mode.
  -v, --verbose                   Verbose mode.
  --pypi-mirror TEXT              Specify a PyPI mirror.
  --version                       Show the version and exit.
  -h, --help                      Show this message and exit.


Usage Examples:
   Create a new project using Python 3.7, specifically:
   $ pipenv --python 3.7

   Remove project virtualenv (inferred from current directory):
   $ pipenv --rm

   Install all dependencies for a project (including dev):
   $ pipenv install --dev

   Create a lockfile containing pre-releases:
   $ pipenv lock --pre

   Show a graph of your installed dependencies:
   $ pipenv graph

   Check your installed dependencies for security vulnerabilities:
   $ pipenv check

   Install a local setup.py into your virtual environment/Pipfile:
   $ pipenv install -e .

   Use a lower-level pip command:
   $ pipenv run pip freeze

Commands:
  check         Checks for PyUp Safety security vulnerabilities and against
                PEP 508 markers provided in Pipfile.
  clean         Uninstalls all packages not specified in Pipfile.lock.
  graph         Displays currently-installed dependency graph information.
  install       Installs provided packages and adds them to Pipfile, or (if no
                packages are given), installs all packages from Pipfile.
  lock          Generates Pipfile.lock.
  open          View a given module in your editor.
  requirements  Generate a requirements.txt from Pipfile.lock.
  run           Spawns a command installed into the virtualenv.
  scripts       Lists scripts in current environment config.
  shell         Spawns a shell within the virtualenv.
  sync          Installs all packages specified in Pipfile.lock.
  uninstall     Uninstalls a provided package and removes it from Pipfile.
  update        Runs lock, then sync.
  upgrade       Resolves provided packages and adds them to Pipfile, or (if no
                packages are given), merges results to Pipfile.lock
  verify        Verify the hash in Pipfile.lock is up-to-date.
```

> Si el comando `pipenv` **NO** es reconocido, significa que debes añadir su ubicación al `PATH`.
> A continuación, la ilustración muestra cómo buscar la ubicación de `pipenv` y cómo agregar esa ruta al `PATH`.
> Cuando pegues la ruta, asegúrate de **cambiar la última parte** (por ejemplo, `site-packages`) por **`Scripts`**, que es donde se encuentra el ejecutable.
> ![Añadir pipenv al PATH](python/agregar-al-path-pipenv.webp)
{:.prompt-warning}

{% endtab %}
{% tab install_pipenv Linux <i class="fa-brands fa-linux"></i> %}
```terminal
sudo pip3 install --user pipenv
```
{% endtab %}
{% tab install_pipenv macOS <i class="fa-brands fa-apple"></i> %}

En el caso de los usuarios de macOS, si tienes [Homebrew](https://brew.sh/){: target='_blank' }  instalado, ejecuta el siguiente comando en el terminal:

```terminal
brew install pipenv
```

Para actualizarlo en cualquier momento, puedes ejecutar el siguiente comando:

```terminal
brew upgrade pipenv
```

De lo contrario, usa `pip`:

```terminal
sudo pip3 install --user pipenv
```
{% endtab %}
{% endtabs %}

#### Crear un entorno virtual

Crea un entorno virtual con la versión 3 de Python:

```terminal
pipenv install --three
```

> Por defecto, **Pipenv** guarda todos sus entornos virtuales en un solo lugar. Si te gustaría cambiar el destino de los entornos virtuales para comodidad de desarrollo, o si esta causando *issues* en servidores de construcción puedes setear la variable de entorno **`PIPENV_VENV_IN_PROJECT`** para crear un entorno virtual dentro de la raíz de tu proyecto.
{: .prompt-info }

Crea un entorno virtual con la versión 2 de Python (debe tener instalado en su sistema python 2.x)

```terminal
pipenv install --two
```

#### Activar/Desactivar el entorno virtual

Activar un entorno virtual (si no existe, lo crea en el directorio actual):

```terminal
pipenv shell
```

Salir del entorno virtual previamente activado:

```terminal
exit
```

#### Instalar/Desinstalar paquetes:

Instalar un paquete, este se registrará en el `Pipfile` y `Pipfile.lock`:

```terminal
pipenv install requests
```

Instalar las dependencias de un archivo **Pipfile**:

```bash
pipenv install
```

Eliminar un paquete o eliminar todos los paquetes:

```terminal
pipenv uninstall django
pipenv uninstall --all
```

#### Ejemplo de Pipfile & Pipfile.lock

Ejemplo de `Pipfile`:

```c
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[dev-packages]

[packages]
django = "*"

[requires]
python_version = "3.7"
```
{: file="Pipfile" }

- `[source]`: nos muestra el enlace de donde se descargan los paquetes.
- `[dev-packages]`: aquí se registran las librerías solo para desarrollo.
- `[packages]`: aquí se registran todos los paquetes requeridos para el proyecto, cuando instalemos los paquetes con el comando *pipenv install* .


Ejemplo de `Pipfile.lock`:

```json
{
    "_meta": {
        "hash": {
            "sha256": "7e7ef69da7248742e869378f8421880cf8f0017f96d94d086813baa518a65489"
        },
        "pipfile-spec": 6,
        "requires": {
            "python_version": "3.7"
        },
        "sources": [
            {
                "name": "pypi",
                "url": "https://pypi.org/simple",
                "verify_ssl": true
            }
        ]
    },
    "default": {},
    "develop": {}
}
```
{: file="Pipfile.lock" }

#### Recomendaciones generales & control de versiones

- Generalmente, añade el **Pipfile** y **Pipfile.lock** en tu control de versión.
- No mantengas **Pipfile.lock** en tu control de versiones si estas usando multiples versiones de Python.
- Especifica tu versión de Python en la sección `[requires]` de tu **Pipfile**. En resumen, deberias tener solo una versión de Python, como herramienta de desarrollo.
- Siempre utiliza *pipenv install* para que se agregue a la lista de `[packages]` en el **Pipfile**.
