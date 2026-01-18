---
title: "Flask: Introducción a las rutas"
categories: [Flask, Flask-Rutas]
badge: flask
tags: [flask, rutas, backend]
---

## 1. ¿Qué es una ruta?

En Flask, una **ruta** es una URL que el usuario visita, y una **view** es la función que se ejecuta cuando se accede a esa ruta.

Por ejemplo:

- <i class="fa-solid fa-pager"></i> `/`  página de inicio  
- <i class="fa-solid fa-pager"></i> `/about` página de “Acerca de”  
- <i class="fa-solid fa-pager"></i> `/contact` página de contacto  

## 2. Crear rutas en Flask

Para crear rutas en Flask usamos el decorador `@app.route()`:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Inicio"

@app.route("/about")
def about():
    return "Acerca de"
```
{: file="app.py" .typing}

En este ejemplo:

* La ruta `/` ejecuta la función `home()`
* La ruta `/about` ejecuta la función `about()`

![Ruta inicio y about](flask/rutas-inicio-y-about.webp)

## 3. ¿Qué es una View?

Una **view** es la función que devuelve una respuesta al usuario.

La respuesta puede ser:

* Texto simple
* HTML
* JSON (para APIs)
* Renderizar un template

Ejemplo:

```python
@app.route("/")
def home():
    return "<h1>Bienvenido</h1>"
```
{:.typing}


## 4. Agregar rutas con nombres

En Flask, cada ruta tiene un **nombre** que es el nombre de la función.

```python
@app.route("/contact")
def contact():
    return "Contacto"
```
{:.typing}

El nombre de la ruta es `contact`.

Esto es importante porque se usa para redirecciones y para generar URLs de forma segura.
