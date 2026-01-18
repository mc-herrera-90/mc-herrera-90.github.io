---
title: "Flask: Instalación y primer proyecto"
categories: [Flask, Flask-Setup]
tags: [flask, python, backend, setup]
badge: flask
---

Flask es un microframework de Python para crear aplicaciones web de forma rápida y simple.  
En este artículo vamos a instalar Flask y crear un proyecto básico con un “Hola Mundo”.


## 1. Requisitos
Antes de comenzar, necesitas:

- Python instalado (recomendado Python 3.10+)
- pip (administrador de paquetes de Python)

Comprobar si Python está instalado:

```terminal
python --version
python3 --version
```
{:.typing}

Comprobar si pip está instalado

```terminal
pip --version
pip3 --version
```
{:.typing}

## 2. Crear un entorno virtual (recomendado)

Es buena práctica usar un entorno virtual para no mezclar dependencias entre proyectos.

__Crear el entorno__:

{% tabs crear_venv %}
{% tab crear_venv Windows %}
```powershell
python -m venv venv
```
{:.typing .nolineno}
{% endtab %}
{% tab crear_venv Linux / macOS %}
```terminal
python3 -m venv venv
```
{:.typing}
{% endtab %}
{% endtabs %}

__Activar el entorno__:

{% tabs activate_venv %}
{% tab activate_venv Windows %}
```powershell
venv\Scripts\activate
```
{:.typing .nolineno}
{% endtab %}
{% tab activate_venv Linux / macOS %}
```terminal
source venv/bin/activate
```
{:.typing}
{% endtab %}
{% endtabs %}

## 3. Instalar Flask

{% tabs instalar_flask %}
{% tab instalar_flask Windows %}
```powershell
pip install flask
```
{:.typing .nolineno}
{% endtab %}
{% tab instalar_flask Linux / macOS %}
```terminal
pip3 install flask
```
{:.typing}
{% endtab %}
{% endtabs %}

## 4. Crear el primer archivo (app.py)

Crea un archivo llamado `app.py` y pega este código:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hola Mundo desde Flask"

if __name__ == "__main__":
    app.run(debug=True)
```
{:file="app.py" .typing}


## 5. Ejecutar el proyecto

En la terminal:

```terminal
python app.py
python3 app.py
```
{: .typing }

Ahora abre el navegador en:

`http://localhost:5000`{:.filepath}

Y verás:

![Hula Mundo Desde Flask](flask/hola-mundo.webp)

{% include circle-line.html %}

Con esto ya tienes tu primer proyecto en Flask funcionando.
El siguiente paso será aprender rutas, templates y base de datos.

