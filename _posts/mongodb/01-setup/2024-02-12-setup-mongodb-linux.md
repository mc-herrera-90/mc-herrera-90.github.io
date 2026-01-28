---
title: "MongoDB: Instalación y configuración en distribuciones basadas en Debian"
categories: [MongoDB, "MongoDB_01-Setup"]
badge: mongodb
---

MongoDB es una base de datos **NoSQL orientada a documentos**, ampliamente utilizada en entornos backend modernos por su flexibilidad, rendimiento y facilidad de integración.

En este post realizaremos la **instalación y configuración** de _MongoDB_ en _Linux_ concretamente en distribuciones basadas en Debian como Ubuntu.

## Requisitos previos

Antes de comenzar, asegúrate de contar con:

* Una distribución basada en **Debian / Ubuntu**
* Una versión moderna de la distribución (Ej: Ubuntu 24.04)
* Permisos de superusuario (`sudo`)


## 1. Preparar el sistema

Primero, asegúrate de tener las herramientas necesarias para manejar paquetes vía _HTTPS_ y verificar firmas digitales:

```terminal
sudo apt update && sudo apt install gnupg curl -y
```
{:.typing}

## 2. Importar la llave GPG pública

Esto le dice a tu sistema que confíe en los paquetes que vienen de MongoDB.

```terminal
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor
```
{:.typing}


## 3. Crear el archivo de repositorio

Ahora debes crear un archivo de lista para que `apt` sepa dónde buscar.

> - Si usas __Debian 12__, usa `bookworm`. Si usas __Debian 11__, usa `bullseye`
> - Si usas __Ubuntu 24.04__, usa `noble`. Si usas __Ubuntu 22.04__, usa `jammy`.
{:.prompt-info}

```terminal
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
https://repo.mongodb.org/apt/debian \
bookworm/mongodb-org/8.0 main" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```

## 4. Instalar MongoDB

Actualiza tu base de datos local e instala el metapaquete que incluye la base de datos, las herramientas y el shell (con el que puedes conectarte a MongoDB):

```terminal
sudo apt update
sudo apt install -y mongodb-org
```
{:.typing}


## Gestión del servicio

Una vez instalado, el servicio de _MongoDB_ no siempre se inicia automáticamente. Aquí los comandos clave:

{% include accordion.html items=site.data.mongodb.servicios %}

## Verificar y uso

Para entrar a la consola de comandos de MongoDB y empezar a crear colecciones, simplemente escribe:

```terminal
mongosh
```
{:.typing}

__Comandos básicos iniciales__:

- `show dbs` (ver bases de datos)
- `use mi_app` (crear o cambiar a una base de datos)
- `db.createCollection("usuarios")` (crear tu primera colección)

{% include circle-line.html %}

Con esta configuración, _MongoDB_ queda correctamente instalado y funcionando en Linux como un servicio estable.
