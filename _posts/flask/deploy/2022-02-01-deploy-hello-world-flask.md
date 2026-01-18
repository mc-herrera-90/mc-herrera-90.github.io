---
title: "Flask: Desplegar una aplicación básica"
categories: [Flask, Flask-Deploy]
badge: flask
---

Flask es uno de los frameworks más usados para construir APIs y aplicaciones web ligeras en Python.
Pero el verdadero desafío no es solo crear la app, sino **desplegarla correctamente** en producción.

En este post vamos a ver **cómo desplegar una app Flask** de forma profesional usando **Gunicorn + Nginx** en un servidor Linux (Ubuntu), y además cómo hacerlo **con Docker**.

## 1. Preparar la app Flask

Este es un ejemplo simple:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hola desde Flask!"

if __name__ == "__main__":
    app.run()
```
{: .typing }


## 2. Configuración para producción (Gunicorn)

El comando `flask run` es solo para desarrollo.
En producción se usa **Gunicorn**:

```terminal
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```
{:.typing}

- **-w 4** = 4 workers
- **app:app** = archivo `app.py` y variable `app`


## 3. Servir con Nginx (recomendado)

### Instalar Nginx

```terminal
sudo apt update
sudo apt install nginx
```
{:.typing}

### Configurar Nginx

Crea un archivo:

```terminal
sudo nano /etc/nginx/sites-available/myflask
```
{:.typing}

Y pega:

```js
server {
  listen 80;
  server_name tu-dominio.com;

  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
{:file="myflask"}

Luego activa el sitio:

```terminal
sudo ln -s /etc/nginx/sites-available/myflask /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
```
{:.typing}

## 4. Ejecutar Flask como servicio (systemd)

Crea un servicio para que la app se inicie automáticamente:

```terminal
sudo nano /etc/systemd/system/flask.service
```
{:.typing}

Pega:

```ini
[Unit]
Description=Gunicorn instance to serve Flask app
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/home/usuario/myflask
Environment="PATH=/home/usuario/myflask/venv/bin"
ExecStart=/home/usuario/myflask/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 app:app

[Install]
WantedBy=multi-user.target
```
{:file="flask.service"}

Inicia el servicio:

```terminal
sudo systemctl start flask
sudo systemctl enable flask
```
{:.typing}

# Deploy con Docker 🐳 (opción moderna)

### Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "app:app"]
```
{:file="Dockerfile"}

### Build & Run

```terminal
docker build -t myflask .
docker run -d -p 8000:8000 myflask
```
{:.typing}


## Bonus: SSL con Let's Encrypt

Una vez con Nginx funcionando:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
```

Y listo, tu app queda con HTTPS.

{% include circle-line.html %}

Desplegar Flask no es difícil, pero hacerlo bien requiere separar:

* **desarrollo** (flask run)
* **producción** (Gunicorn + Nginx)

En otros artículos, veremos:

- un **deploy más avanzado** (con Docker Compose + CI/CD)
- un **deploy con Railway / Render** (más simple)
