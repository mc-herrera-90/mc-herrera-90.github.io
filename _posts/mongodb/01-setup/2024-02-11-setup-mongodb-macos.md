---
title: "MongoDB: Instalación y configuración en macOS"
categories: [MongoDB, "MongoDB_01-Setup"]
badge: mongodb
---

Si no tienes [*Homebrew*](https://brew.sh/){: target='_blank' } instalado en tu sistema, debes instalarlo primero. _Homebrew_ es un gestor de paquetes para macOS que facilita la instalación de software.

## Instalar Homebrew

Abrimos una terminal y ejecutamos el siguiente comando:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
{:.typing}

Sigue las instrucciones que aparecen en pantalla para completar la instalación.

![Brew instalado](brew/brew-installed-dark.webp){:.dark .bg-secondary .rounded .border .border-secondary-subtle }
![Brew instalado](brew/brew-installed-light.webp){:.light .bg-secondary-subtle .rounded .border .border-secondary-subtle }

Una vez instalado _Homebrew_, asegúrate de que esté actualizado:

```terminal
brew update
```
{:.typing}

## Instalar MongoDB con brew

Procedemos a la instalación de _MongoDB_ con el siguiente comando:

```terminal
brew tap mongodb/brew
brew install mongodb-community@7.0
```
{:.typing}

> En _Homebrew_, un tap es básicamente un repositorio GitHub que contiene recetas (fórmulas) de instalación.
{: .prompt-info }

Iniciar el servicio de _MongoDB_:

```terminal
brew services start mongodb-community@7.0
```
{:.typing}

__El comando anterior hace esto, en resumen__:

- `brew services` gestiona servicios con Homebrew (arranque, parada, reinicio).
- `start` indica que lo ejecute.
- `mongodb-community@7.0` es el paquete específico de MongoDB versión 7.0.

Como resultado MongoDB comienza a ejecutarse en segundo plano y se iniciará automáticamente cada vez que enciendas tu Mac. 

> MongoDB queda escuchando por defecto en: `mongodb://localhost:27017`
{: .prompt-info .fit-content }

Verificar que está corriendo:

```terminal
brew services list --json
```
{:.typing}

![Servicio MongoDB](brew/brew-services-mongodb-dark.webp){:.dark .bg-secondary .rounded .border .border-secondary-subtle }
![Servicio MongoDB](brew/brew-services-mongodb-light.webp){:.light .bg-secondary-subtle .rounded .border .border-secondary-subtle }

## Conectarse a MongoDB

Una vez que el servicio está **en ejecución**, puedes conectarte directamente con el comando `mongosh`:

```terminal
mongosh
```
{:.typing}

Esto abrirá la **consola interactiva** de MongoDB (Mongo Shell la consola oficial moderna) y verás algo como:

```terminal
~ mongosh
Current Mongosh Log ID: 671fabc123...
Connecting to: mongodb://127.0.0.1:27017/
Using MongoDB: 7.0.x
Using Mongosh: 2.5.x
```

El prompt de mongosh quedará esperando instrucciones:

![Mongosh](mongodb/prompt-mongosh.webp){:.light}
![Mongosh](mongodb/prompt-mongosh-dark.webp){:.dark}

## Operaciones Básicas

### 1. Cambiar o crear base de datos

Por ejemplo, usar una base de datos _e-commerce_:

```js
use ecommerce
```
{: .nolineno .language-terminal .typing }

Si no existe, _MongoDB_ la **creará automáticamente** cuando insertes el primer dato.

### 2. Insertar y consultar datos

Ejemplo rápido:

```js
db.productos.insertOne({nombre:"Camiseta ecológica",precio:15990,categoria:"Ropa",stock:20})
db.productos.find().pretty()
```
{: .nolineno .language-terminal .typing }

### 3. Salir del shell

Cuando termines, puedes salir con:

```terminal
exit
```
{:.typing}

## Administrar servicio

Detener MongoDB:

```terminal
brew services stop mongodb-community@7.0
```
{:.typing}

Reiniciar MongoDB:

```terminal
brew services restart mongodb-community@7.0
```
{:.typing}
