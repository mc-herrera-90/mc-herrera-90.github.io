---
title: "Flask: Configuración de Flask con MongoDB de forma segura"
categories: [Flask, "Flask_01-Configuración"]
image: poster/flask-configuracion-con-mongodb.avif
tags: [flask, python, mongodb]
---

La primera vez que alguien conecta **Flask con MongoDB** suele hacerlo en menos de diez minutos. Instalas dos librerías, copias una cadena de conexión y listo: ya puedes guardar documentos.

El problema es que esa rapidez viene con una trampa silenciosa. Muchos ejemplos que circulan por internet funcionan para una demo, pero dejan varias puertas abiertas: credenciales en el código, conexiones mal manejadas, validaciones inexistentes y una base de datos que podría terminar expuesta si el proyecto llega a producción.

La idea de este post no es hacer algo complicado. Al contrario: construir una base **simple, ordenada y razonablemente segura** para empezar un backend con Flask y MongoDB sin arrastrar malas prácticas desde el inicio.

---

## 1. Preparar el entorno de trabajo

Antes de escribir código conviene aislar el proyecto. Python tiene una herramienta simple para eso: los entornos virtuales.

Crear uno evita conflictos entre dependencias de distintos proyectos.

```terminal
python -m venv venv
```
{:.typing }

Activarlo en Linux o macOS:

```terminal
source venv/bin/activate
```
{:.typing }

Una vez activo, instalamos las librerías necesarias.

```terminal
pip install flask pymongo python-dotenv
```
{:.typing }

Guardar las dependencias es una buena costumbre desde el primer momento.

```terminal
pip freeze > requirements.txt
```
{:.typing}

Esto permite reconstruir el entorno completo en otro equipo o servidor.

> Si quieres saber más sobre entornos virtuales, revisa [Entornos virtuales en Python](/posts/python-entornos-virtuales).
{:.prompt-info}

---

## 2. Pensar la estructura antes de codificar

Muchos tutoriales empiezan directamente con un archivo `app.py`. Funciona, pero a medida que el proyecto crece ese archivo termina acumulando rutas, lógica de base de datos y configuración.

Una estructura pequeña pero organizada podría verse así:

```
project/
│
├─ app/
│  ├─ __init__.py
│  ├─ config.py
│  ├─ db.py
│  └─ routes.py
│
├─ .env
├─ requirements.txt
└─ run.py
```
{:.noheader}

La idea es separar responsabilidades:

* configuración
* conexión a base de datos
* rutas de la API
* punto de arranque

Esto mantiene el proyecto legible incluso cuando empieza a crecer.

---

## 3. Evitar credenciales en el código

Un error extremadamente común en desarrollo es escribir directamente la cadena de conexión en el código fuente.

Algo así:

```python
client = MongoClient("mongodb://localhost:27017/mydatabase")
```
{:.typing .nolineno}
Funciona, pero es mala práctica.
Las credenciales deberían vivir en variables de entorno.

Creamos un archivo `.env`.

```ini
FLASK_ENV=development
SECRET_KEY=change-this-secret

MONGO_URI=mongodb://localhost:27017/mydatabase
```
{:file=".env" .typing .typing-fast}

Luego creamos `config.py` para leer estas variables.

```python
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
```
{:file="config.py" .typing .typing-fast}


Esto permite cambiar configuraciones sin modificar el código.

---

## 4. Crear una conexión centralizada a MongoDB

Abrir conexiones nuevas constantemente puede afectar el rendimiento.
Lo más limpio es inicializar un cliente una vez y reutilizarlo.

Archivo `db.py`.

```python
from pymongo import MongoClient

client = None
db = None

def init_db(app):
    global client, db

    client = MongoClient(app.config["MONGO_URI"])
    db = client.get_default_database()
```
{:file="db.py" .typing .typing-fast}

La aplicación usará siempre esa misma conexión.

---

# 5. Inicializar Flask usando el patrón Application Factory

Flask permite crear aplicaciones de forma flexible. Un patrón muy usado es **Application Factory**, que crea la app mediante una función.

Archivo `app/__init__.py`.

```python
from flask import Flask
from .config import Config
from .db import init_db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    init_db(app)

    from .routes import main
    app.register_blueprint(main)

    return app
```
{:file="__init__.py" .typing .typing-fast}


Este enfoque evita dependencias circulares y facilita pruebas o configuraciones diferentes.

---

## 6. Crear una ruta simple para comprobar la conexión

Antes de construir endpoints complejos conviene verificar que todo funciona.

Archivo `routes.py`.

```python
from flask import Blueprint, jsonify
from .db import db

main = Blueprint("main", __name__)

@main.route("/health")
def health():
    collections = db.list_collection_names()

    return jsonify({
        "status": "ok",
        "collections": collections
    })
```
{:file="routes.py" .typing .typing-fast}


Este endpoint sirve como comprobación rápida de que la aplicación puede comunicarse con la base de datos.

---

## 7. Ejecutar la aplicación

Archivo `run.py`.

```python
from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
```
{:file="run.py" .typing .typing-fast}

Luego ejecutas:

```terminal
python run.py
```
{:.typing}

Si todo está correcto, la API estará disponible en `http://localhost:5000`.

---

## 8. Crear usuarios en MongoDB

Aunque MongoDB esté instalado localmente, es recomendable habilitar autenticación.

En la consola de MongoDB:

```javascript
use admin

db.createUser({
  user: "api_user",
  pwd: "strong_password",
  roles: [{ role: "readWrite", db: "mydatabase" }]
})
```
{: .nolineno .language-terminal}

> Al ejecutar `db.createUser()` en MongoDB, el servidor responde con un documento JSON indicando el éxito `({ "ok": 1 })` o un mensaje de error si el usuario ya existe o falta información.
{:.prompt-info}

Luego la URI de conexión se vería así:

```
mongodb://api_user:password@localhost:27017/mydatabase
```
{:.noheader}

Esto evita que cualquier proceso local pueda manipular la base de datos.

---

## 9. Validar los datos antes de guardarlos

MongoDB permite guardar prácticamente cualquier estructura.
Eso es flexible, pero también peligroso.

Evita insertar directamente lo que llega en una request.

Mala práctica:

```python
db.users.insert_one(request.json)
```
{:.nolineno .typing}

Mejor controlar los campos.

```python
data = request.json

user = {
    "username": data.get("username"),
    "email": data.get("email")
}

db.users.insert_one(user)
```
{:.nolineno .typing .typing-fast}


Esto reduce errores y previene datos inconsistentes.

---

## 10. Crear índices temprano

Los índices mejoran el rendimiento y pueden imponer reglas de unicidad.

Por ejemplo, para evitar correos duplicados:

```python
db.users.create_index("email", unique=True)
```
{:.nolineno}

Si intentas insertar dos documentos con el mismo email, MongoDB lanzará un error.

---

## 11. Manejar correctamente los ObjectId

MongoDB utiliza `ObjectId` como identificador interno.
Ese tipo no es serializable directamente a JSON.

Una solución simple es convertirlo a string.

```python
def serialize(doc):
    doc["_id"] = str(doc["_id"])
    return doc
```
{:.nolineno}

Esto permite devolver documentos en respuestas de la API sin errores.

---

# 12. Mantener MongoDB fuera de internet

Una arquitectura básica segura se ve así:

```
Cliente → API Flask → MongoDB
```

La base de datos debería estar accesible solo desde la aplicación.
Nunca directamente desde internet.

---


Flask y MongoDB son herramientas extremadamente ligeras. Esa ligereza es parte de su encanto: puedes construir APIs funcionales con muy poco código.

Pero esa misma libertad significa que muchas decisiones importantes quedan en manos del desarrollador. __Organización del proyecto__, __manejo de credenciales__, __validación de datos y control de acceso a la base de datos__.

No son detalles glamorosos, pero son los que separan un backend improvisado de uno que puede crecer sin romperse en el proceso.
