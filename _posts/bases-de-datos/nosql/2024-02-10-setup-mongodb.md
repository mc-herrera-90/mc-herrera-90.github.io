---
title: "Set up MongoDB"
icon: icon/mongodb.svg
categories: ["Bases de datos NOSQL", "MongoDB"]
---

MongoDB es una base de datos NoSQL orientada a documentos, muy popular para proyectos modernos gracias a su flexibilidad y escalabilidad.

![mongodb](mongodb/mongosh-instalar-mongo.webp){:.light}
![mongodb](mongodb/mongosh-instalar-mongo-dark.webp){:.dark}

## Instalación en Windows

### 1. Con WinGet

[__WinGet__](https://learn.microsoft.com/es-es/windows/package-manager/winget/){:target="_blank"} es la forma más sencilla de instalar software en versiones modernas de Windows 10 y en Windows 11.

Instalar el servidor de MongoDB
: Este es el comando que utilizamos para instalar el servidor de MongoDB con `winget`.
```terminal
winget install -e --id MongoDB.Server
```

![Instalar Mongo usando winget](mongodb/mongo-install-winget.webp)

: Para comprobar su instalación, ejecuta el comando `mongod --version` en caso de que no se reconozca el comando, debes añadir el destino de instalación a la variable __PATH__:

![Agregar al PATH](mongodb/agregar-al-path-en-windows.webp)

Iniciar MongoDB como servicio
: Por lo general, concluida la instalación se configura automáticamente MongoDB como servicio y solo necesitas iniciarlo, lo primero que debes hacer es buscar en la lista de servicios con <kbd>Win</kbd> + <kbd>R</kbd> y luego escribe `services.msc` al identificar el servicio haz clic en iniciar:

![Iniciar servicio](mongodb/iniciar-servicio-mongodb.webp)

: Si por ABC motivo al iniciar te aparece una notificación con un error 1607:

![Error 1067](mongodb/error-1067.webp)

: La causa puede ser que las carpetas de destinos para almacenar los LOGs y las bases de datos no tengan los permisos necesarios, entonces necesitas buscar su carpeta contenedora y agregar esos permisos siguiento estos pasos:

- __Abre Propiedades de la carpeta__:

```
C:\Program Files\MongoDB\Server\<version>\
```
{:.noheader .fit-content}

- Ve a la pestaña Seguridad.
- Haz clic en Editar
- Agrega esta cuenta:

![Agregar permisos](mongodb/permisos-a-carpetas.webp)


Instalar el cliente de MongoDB
: Este es el comando que utilizamos para instalar el cliente (para conectarse al servidor) de MongoDB con `winget`.
```terminal
winget install -e --id MongoDB.Shell
```

: Al concluir la instalación, ya puedes conectarte a MongoDB usando el comando `mongosh` y comenzar a crear bases de datos, colecciones y documentos:

![Test Mongosh CMD](mongodb/mongosh-cmd-test.webp)

En resumen, hemos instalado dos programas:

| Paquete            | Qué es                     | Incluye                       |
| ------------------ | -------------------------- | ----------------------------- |
| **MongoDB.Server** | El servidor de MongoDB     | `mongod`, servicio de Windows |
| **MongoDB.Shell**  | El cliente para conectarte | `mongosh`                     |


### 2. Con un instador

A diferencia del método anterior, puedes descargar el instalador oficial para Windows (MSI Installer) que incluye lo siguiente:

- MongoDB Server
- MongoDB Shell (mongosh)
- MongoDB Compass (GUI)
- Herramientas de línea de comando (Database Tools)

Ingresa a [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community){:target='_blank'} y descarga la versión correspondiente a la arquitectura de tu máquina. Generalmente, el sitio detecta esta información automáticamente al ingresar.

![Download Comunnity](mongodb/website-download-comunnity.webp)

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
![Brew instalado](brew/brew-installed-light.webp){:.light subtle .rounded .border .border-secondary-subtle }

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

![Mongosh](mongodb/prompt-mongosh.webp){:.light}
![Mongosh](mongodb/prompt-mongosh-dark.webp){:.dark}

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
