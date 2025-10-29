---
title: "Cómo instalar Tkinter"
categories: [Python, Tkinter]
---

Tkinter es una librería estándar de Python que se utiliza para aplicaciones GUI de escritorio.

> Esta guía es para __Ubuntu__ y __macOS__. En __Windows__, Tkinter ya se instala de forma predeterminada con Python.
{: .prompt-tip}

## Instalar en Ubuntu

En Ubuntu, observarás que la librería no viene instalada en la distribución predeterminada.


Para instalar Tkinter, abre una nueva línea de comandos con <kbd>Ctrl</kbd> + <kbd>T</kbd> y ejecuta los siguientes comandos:

```terminal
sudo apt update
sudo apt install python3-tk
```

Una vez finalizada la instalación, puede iniciar una sesión interactiva de Python e importar el paquete `tkinter` como se muestra a continuación:

```python
>>> import tkinter as tk
>>> tk.Tk()
```
{: .nolineno }


![Demo clase Tk en ubuntu](python/ubuntu-clase-tk.webp)

## Instalar Tkinter en macOS

Para instalar Tkinter en macOS, se recomienda usar [Homebrew](https://brew.sh/){:target="_blank"}:

```terminal
brew install python-tk
```