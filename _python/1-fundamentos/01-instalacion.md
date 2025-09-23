---
layout: post
title: "Instalación de Python"
description: "Instala Python con facilidad: en **Windows**, usa el instalador oficial; en **macOS**, Homebrew o la web oficial; en **Linux**, el gestor de paquetes."
categories: [Python, "Básico"]
---

En esta guía, cubriremos la instalación de Python en **Windows**, **macOS** y **Linux**, usando distintas herramienta. También revisaremos los requisitos del sistema y algunos consejos para una instalación sin problemas.

## Instalación en Windows

### Requisitos

- **Sistema operativo**: Windows 7 o superior (se recomienda Windows 10/11).
- **Arquitectura**: 32 bits o 64 bits (preferible 64 bits). 
- **Espacio en el disco**: Al menos **1GB** de espacio libre.
- **RAM**: Mínimo **512 MB** (se recomienda **1GB** o más).
- **Permisos de administrador** para la instalación.

### Usando el instalador

1. Descargar el archivo ejecutable de instalación de la versión más reciente de Python que sea compatible con tu sistema operativo desde la [página de descargas](https://www.python.org/downloads/ "Página oficial de descargas"){:target='_blank' class='link'}
2. Ejecuta el archivo de instalación de Python que se descargó anterioremente. Selecciona las siguientes opciones en la ventana del instalador de Python para configurar los pasos de instalación.
    - Elija agregar el archivo ejecutable de Python a la ruta.
    - Seleccione **install Now**.
3. En una nueva ventana del símbolo de sistema (CMD) comprobamos que tanto **Python** como **pip** estén instalados correctamente con los siguientes comandos:

```bat
python --version
pip --version
```
{: .nolineno }

<div class="position-relative">
<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/bc729009adbc4ca78c81dfade6b9133b" title="instalación Python" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777" id="ifr">	
</iframe>
</div>


### Instalación silenciosa

Todas las opciones disponibles desde la interfaz de usuario del instalador (como en el caso anterior) también pueden especificarse desde la línea de comandos.

Las siguientes opciones ( encontradas al ejecutar el instalador con `/?`) pueden ser pasadas al instalador:

|Nombre|Descripción|
|:-----|:-----------|
|`/pasive`|para mostrar el progreso sin requerir interacción del usuario|
|`/quiet`|para instalar/desinstalar sin mostrar ninguna interfaz|
|`simple`|para prevenir la personalización del usuario|
|`/uninstall`|para eliminar Python (sin confirmación)|


**Ejemplo**: instalar python con las opciones predeterminadas y mostrar el progreso:

```bat
python-3.12.1.exe /passive InstallAllUsers=1
```
{: .nolineno }

## Instalación en Linux

Para instalar Python 3 en Linux específicamente en distribuciones basadas en Debian, abre una nueva Terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y sigue estos pasos:

**1. Actualizar los paquetes del sistema:**

```terminal
sudo apt update
```

**2. Instalar Python 3:**

```terminal
sudo apt install python3
```

**3. Instalar `pip` (gestor de paquetes para Python):**
Para instalar `pip` (si no lo tienes instalado):
```terminal
sudo apt install python3-pip
```

**4. Verificar la instalación:**
Comprueba que Python 3 está instalado correctamente:
```terminal
python3 --version
```

Y también para verificar `pip`:
```terminal
pip3 --version
```


## __Instalación en MacOS__

En macOS, Python 3 generalmente ya está preinstalado, pero si necesitas instalarlo o actualizarlo, sigue estos pasos:

**1. Verificar si Python 3 está instalado:**

Abre la Terminal y escribe:
```terminal
python3 --version
```
Si ya está instalado, te mostrará la versión de Python 3. Si no está instalado o necesitas actualizarlo, continúa con los siguientes pasos.

**2. Instalar Homebrew (si no lo tienes):**
Homebrew es un gestor de paquetes para macOS que facilita la instalación de software. Si aún no lo tienes, instálalo ejecutando el siguiente comando en la Terminal:
```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**3. Instalar Python 3 usando Homebrew:**
Con Homebrew instalado, puedes instalar la última versión de Python 3:
```terminal
brew install python
```

**4. Verificar la instalación:**
Una vez instalado, verifica que Python 3 esté correctamente instalado con:
```terminal
python3 --version
```

**5. Instalar pip (si no está instalado):**
`pip` debería instalarse automáticamente con Python 3, pero si no lo tienes, puedes instalarlo con:
```terminal
python3 -m ensurepip --upgrade
```

## Primer “Hello World” en Python

Para comprobar que Python está correctamente instalado, podemos crear el clásico programa que muestra un sencillo pero fabuloso “Hello World”:

Crea un archivo `hello.py` y agrega:

```python
print("¡Hello World!")
```
{: file="hello.py"}

Luego, abrimos la terminal o consola y ejecutamos:

```terminal
python hello.py
```

> En algunos sistemas con Linux puede ser `python3 hello.py` si `python` apunta a Python 2.
{: .prompt-info }

Si todo funciona, verás en la consola:

<pre><code class="language-cmd">C:\Users\mcherrera&gt; <span style='background: #ff04'>python hello.py</span>
¡Hello World!
</code></pre>

Con esto confirmamos que tu instalación de Python está lista para empezar a programar.

Hasta aquí hemos cubierto la **instalación de Python** en los diferentes sistemas operativos. Con estos pasos, ya tienes Python instalado en tu sistema operativo. Ahora puedes comenzar a programar y explorar las múltiples posibilidades que ofrece este lenguaje.

¡Sigue avanzando y aprendiendo! ✌️

