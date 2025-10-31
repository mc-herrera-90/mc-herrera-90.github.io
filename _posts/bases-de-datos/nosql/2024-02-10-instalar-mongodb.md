---
title: "Set up MongoDB"
icon: icon/mongodb.svg
categories: ["Bases de datos NOSQL", "MongoDB"]
permalink: mongodb/instalacion
---

MongoDB es una base de datos NoSQL orientada a documentos, muy popular para proyectos modernos gracias a su flexibilidad y escalabilidad.

## Instalación en macOS

Si no tienes [**Homebrew**](https://brew.sh/){: target='_blank' } instalado en tu sistema, debes instalarlo primero. Homebrew es un gestor de paquetes para macOS que facilita la instalación de software.

1. Abrimos una terminal.
2. Ejecutamos el siguiente comando:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

{: start="3"}
3. Sigue las instrucciones que aparecen en pantalla para completar la instalación.

![Brew instalado](brew/brew-installed-dark.webp){:.dark .bg-secondary .rounded .border .border-secondary-subtle }
![Brew instalado](brew/brew-installed-light.webp){:.light .bg-secondary-subtle .rounded .border .border-secondary-subtle }

Una vez instalado Homebrew, asegúrate de que esté actualizado:

```terminal
brew update
```

Luego, instalamos mongodb con el siguiente comando:

```terminal
brew tap mongodb/brew
brew install mongodb-community@7.0
```

> En Homebrew, un tap es básicamente un repositorio GitHub que contiene recetas (fórmulas) de instalación.
{: .prompt-info }

Luego, inicia MongoDB:

```terminal
brew services start mongodb-community@7.0
```
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

![Servicio MongoDB](brew/brew-services-mongodb-dark.webp){:.dark .bg-secondary .rounded .border .border-secondary-subtle }
![Servicio MongoDB](brew/brew-services-mongodb-light.webp){:.light .bg-secondary-subtle .rounded .border .border-secondary-subtle }

## Conectarse desde la Terminal con mongosh

Una vez que el servicio está **en ejecución**, puedes conectarte directamente con:

```terminal
mongosh
```

Esto abrirá la **consola interactiva** de MongoDB (Mongo Shell la consola oficial moderna) y verás algo como:

```terminal
~ mongosh
Current Mongosh Log ID: 671fabc123...
Connecting to: mongodb://127.0.0.1:27017/
Using MongoDB: 7.0.x
Using Mongosh: 2.5.x
```

El prompt de mongosh quedará esperando instrucciones:

```terminal
test> 
```

## Operaciones Básicas

### 1. Cambiar o crear base de datos

Por ejemplo, para usar tu base de datos del e-commerce:

```js
use ecommerce
```
{: .nolineno }

Si no existe, MongoDB la **creará automáticamente** cuando insertes el primer dato.

### 2. Insertar y consultar datos

Ejemplo rápido:

```js
db.productos.insertOne({nombre:"Camiseta ecológica",precio:15990,categoria:"Ropa",stock:20})
db.productos.find().pretty()
```
{: .nolineno }

### 3. Salir del shell

Cuando termines, puedes salir con:

```js
exit
```
{: .nolineno }


###  Manejo del servicio

Detener MongoDB:

```terminal
brew services stop mongodb-community@7.0
```

Reiniciar MongoDB:

```terminal
brew services restart mongodb-community@7.0
```
