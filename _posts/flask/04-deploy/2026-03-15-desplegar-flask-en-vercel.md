---
title: "Flask: Desplegar Flask en Vercel de forma sencilla"
categories: [Flask, "Flask_04-Deploy"]
badge: flask
---

Desplegar una aplicación Flask en Vercel es __rápido y gratuito__, convirtiendo tu app en funciones _serverless_ que escalan automáticamente.

## 1. Registrarse en Vercel

Vercel es una plataforma en la nube para sitios estáticos y funciones sin servidor que se adapta a diferentes flujos de trabajos. Permite a los desarrolladores alojar sitios web y servicios web Jamstack que se implementan al instante, se escalan automáticamente.

Crea una cuenta en [Vercel](https://vercel.com){:target='_blank'}

## 2. Despliegue normal

Vercel pide al menos un archivo en la raíz con el nombre de `app.py`, `index.py` o `main.py`.

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Home Page Sample"

if __name__ == "__main__":
    app.run(debug=True)
```
{:file="app.py"}

Luego sube ese archivo a GitHub para poder conectar el repositorio con nuestro proyecto en Vercel.

> Siempre que puedas, recuerda usar herramienas de Terminal como [gh cli](https://cli.github.com/){:target='_blank'} para ahorrar tiempo en estos procesos.
> ![Subir a GitHub](extras/subir-a-github-con-la-cli-de-gh.webp)
{:.prompt-info}

No olvides agregar el archivo `requirements.txt`:

![Agregar requirements.txt](flask/flask-add-requirements-en-repo.webp)

## 3. Crear un nuevo proyecto

En Vercel, tenemos en el Dashboard principal donde podemos crear un nuevo proyecto:

![Nuevo proyecto en vercel](vercel/nuevo-proyecto-light.webp)

## 4. Importar desde GitHub

Una vez subido a GitHub los archivos, selecciona el proveedor para importar al proyecto en Vercel:

![Nuevo proyecto en vercel](vercel/proveedor-github-para-importar.webp)

## 5. Selecciona el repositorio

Una vez conectado con nuestra cuenta de GitHub, podrás seleccionar el repositorio desplegando la lista:

![Seleccionar repositorio en vercel](extras/seleccionar-repositorio-en-vercel.webp)


## Usar el template de Vercel

Vercel cuenta con un repositorio listo para implementar y desplegar, se trata de un template que viene con la configuración mínima para comenzar a trabajar, lo puedes encontrar aquí:

[https://vercel.com/templates/python/flask-hello-world](https://vercel.com/templates/python/flask-hello-world){:target='_blank'}