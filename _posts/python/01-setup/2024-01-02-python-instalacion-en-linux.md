---
title: "Python: Instalación y configuración de Python en Linux"
categories: [Python, Python_01-Setup]
tags: [python, linux]
badge: python
---

Python es uno de los lenguajes más utilizados en Linux, tanto para scripting como para desarrollo de aplicaciones, automatización, ciencia de datos y más.  
En la mayoría de las distribuciones Linux, Python **ya viene instalado**, pero no siempre está correctamente configurado para desarrollo.

En este post veremos:

- Cómo verificar si Python está instalado
- Cómo instalar Python en distintas distribuciones Linux
- Cómo configurar `pip`
- Cómo crear un entorno virtual (virtualenv)
- Buenas prácticas iniciales

## Verificar si Python está instalado

Antes de instalar, revisa si ya tienes Python, abre una terminal con <kbd>Ctrl</kbd>+<kbd>T</kbd>:

```terminal
python3 --version
```
{:.typing}

Si ves la versión quiere decir que ya tienes _Python_.

> En Linux **no se recomienda usar `python` a secas**, siempre `python3`.
{: .prompt-info }

## Instalación de Python según la distribución

### Ubuntu / Debian

```terminal
sudo apt update
sudo apt install python3 python3-pip python3-venv -y
```
{:.typing}

Esto instala:

* Python 3
* `pip` (gestor de paquetes)
* `venv` (entornos virtuales)

---

### Arch Linux / Manjaro

```terminal
sudo pacman -S python python-pip
```
{:.typing}


---

### Fedora

```terminal
sudo dnf install python3 python3-pip
```
{:.typing}


---

## Verificar pip

`pip` es el gestor de paquetes de Python.

```terminal
pip3 --version
```
{:.typing}

Si no está disponible:

```terminal
sudo apt install python3-pip
```
{:.typing}

---

## Crear un entorno virtual (recomendado)

Los **entornos virtuales** permiten aislar dependencias por proyecto y evitar conflictos.

### Crear el entorno

```terminal
python3 -m venv venv
```
{:.typing}

Esto crea una carpeta `venv/`.

---

### Activar el entorno

```terminal
source venv/bin/activate
```
{:.typing}

Cuando está activo, verás algo así:

```terminal
(venv) usuario@linux:~/proyecto$
```
{:.noheader}

---

### Desactivar el entorno

```terminal
deactivate
```
{:.typing}


---

## Instalar paquetes con pip

Con el entorno activo:

```terminal
pip install requests
```
{:.typing}

Ver paquetes instalados:

```terminal
pip list
```
{:.typing}

Guardar dependencias:

```terminal
pip freeze > requirements.txt
```
{:.typing}

Instalar desde archivo:

```terminal
pip install -r requirements.txt
```
{:.typing}

---

## Configurar alias (opcional pero útil)

Para evitar escribir siempre `python3` y `pip3`:

```terminal
nano ~/.bashrc
```
{:.typing}

Agrega al final:

```terminal
alias python=python3
alias pip=pip3
```
{:.typing}

Aplica los cambios:

```terminal
source ~/.bashrc
```
{:.typing}

---

## Estructura básica de un proyecto Python

```
mi_proyecto/
├── venv/
├── main.py
├── requirements.txt
└── README.md
```
{:.noheader}

Ejecutar el script:

```termimal
python main.py
```
{:.typing}

---

## Consideraciones y buenas prácticas iniciales

* ✅ Usa siempre entornos virtuales
* ❌ No instales paquetes con `sudo pip`
* 📄 Versiona `requirements.txt`
* 🧪 Prueba tu código en entornos limpios

{% include circle-line.html %}

Con Python correctamente instalado y configurado en Linux, ahora toca escribir código.
