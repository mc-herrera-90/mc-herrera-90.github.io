---
title: "Flask: Métodos HTTP (GET, POST, PUT, DELETE)"
categories: [Flask, Flask-Rutas]
tags: [flask, python]
badge: flask
---

Cuando trabajas con aplicaciones web o APIs, **las rutas no solo responden a URLs**, sino también a **métodos HTTP**.

Por defecto, las rutas aceptan **GET**, pero puedes aceptar otros métodos como POST.

| Método | Uso típico       | En Flask             |
| ------ | ---------------- | -------------------- |
| GET    | Leer datos       | `methods=["GET"]`    |
| POST   | Crear datos      | `methods=["POST"]`   |
| PUT    | Actualizar datos | `methods=["PUT"]`    |
| DELETE | Eliminar datos   | `methods=["DELETE"]` |

> Los métodos HTTP son acciones que el cliente (navegador o app) envía al servidor para indicar qué quiere hacer.
{: .prompt-info }


## 1. ¿Qué son los métodos HTTP?

Los métodos más usados son:

| Método | Para qué sirve | Ejemplo |
|--------|----------------|---------|
| GET | Obtener datos | Leer una página |
| POST | Enviar datos | Enviar un formulario |
| PUT | Actualizar datos | Editar un registro |
| DELETE | Eliminar datos | Borrar un registro |

## 2. Rutas por defecto (GET)

Por defecto, Flask usa el método **GET**.

```python
@app.route("/")
def home():
    return "Inicio"
```
{:.typing}

## 3. Usar POST en Flask

Para aceptar POST, debes indicarlo explícitamente:

```python
from flask import request

@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        return "Formulario enviado"
    return "Mostrar formulario"
```
{: file="app.py" .typing}

__¿Qué hace esto?__:

* Si visitas `/submit` en el navegador responde “Mostrar formulario”
* Si envías un formulario con `POST` responde “Formulario enviado”


## 4. Ejemplo real con formulario


`templates/form.html`

```html
<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Usuario">
  <button type="submit">Enviar</button>
</form>
```
{:file="form.html"}

`app.py`

```python
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        username = request.form.get("username")
        return f"Hola {username}, formulario recibido"
    return render_template("form.html")
```
{:file="app.py"}


## 5. PUT y DELETE en Flask (para APIs)

Estos métodos se usan principalmente en APIs, no tanto en páginas web normales.

### Ejemplo con datos en memoria

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

items = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
]

@app.route("/items", methods=["GET"])
def get_items():
    return jsonify(items)

@app.route("/items", methods=["POST"])
def add_item():
    new_item = request.json
    items.append(new_item)
    return jsonify(new_item), 201

@app.route("/items/<int:item_id>", methods=["PUT"])
def update_item(item_id):
    data = request.json
    for item in items:
        if item["id"] == item_id:
            item["name"] = data.get("name", item["name"])
            return jsonify(item)
    return jsonify({"error": "Item no encontrado"}), 404

@app.route("/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    for item in items:
        if item["id"] == item_id:
            items.remove(item)
            return jsonify({"message": "Item eliminado"})
    return jsonify({"error": "Item no encontrado"}), 404

if __name__ == "__main__":
    app.run(debug=True)
```
{:file="app.py"}


