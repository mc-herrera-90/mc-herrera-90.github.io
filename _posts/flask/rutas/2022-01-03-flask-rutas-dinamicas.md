---
title: "Flask: Rutas con parámetros dinámicos"
categories: [Flask, Flask-Rutas]
badge: flask
---

Flask permite crear rutas con valores dinámicos dentro de la URL.

Ejemplo:

```python
@app.route("/user/<username>")
def user_profile(username):
    return f"Perfil de {username}"
````
{:.typing}

También puedes especificar el tipo de dato:

```python
@app.route("/post/<int:id>")
def show_post(id):
    return f"Post número {id}"
```
{:.typing}
