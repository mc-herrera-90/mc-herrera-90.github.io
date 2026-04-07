---
title: "MongoDB: Instalación y configuración de MongoDB en Windows"
categories: [MongoDB, "MongoDB_01-Setup"]
badge: mongodb
---

__MongoDB__ es una base de datos NoSQL orientada a documentos. Se usa mucho en aplicaciones modernas porque permite trabajar con datos en formato JSON y no exige un esquema rígido desde el inicio.

![MongoDB](mongodb/mongodb-proto.avif)

En este artículo veremos las **opciones de instalación en Windows**, para dejar el entorno listo antes de empezar a trabajar con MongoDB.

## Instalar con WinGet

[__WinGet__](https://learn.microsoft.com/es-es/windows/package-manager/winget/){:target="_blank"} es la forma más sencilla de instalar software en versiones modernas de Windows 10 y en Windows 11.

### 1. Instalar el servidor de MongoDB

Este es el comando que utilizamos para instalar el __servidor de MongoDB__ con `winget`.

```powershell
winget install -e --id MongoDB.Server
```
{:.typing .nolineno}

![Instalar Mongo usando winget](mongodb/mongo-install-winget.webp)

Para comprobar su instalación, ejecuta el comando `mongod --version` en caso de que __no reconozca el comando__, debes añadir el destino de instalación a la __variable PATH_:

![Agregar al PATH](mongodb/agregar-al-path-en-windows.webp)

### 2. Iniciar MongoDB como servicio
{:id='iniciar-como-servicio'}

Concluida la instalación, _MongoDB_ se configura automáticamente como un servicio, por lo que solo necesitas iniciarlo. Lo primero que debemos hacer es buscar en la lista de servicios presionando <kbd>Win</kbd> + <kbd>R</kbd> y escribir `services.msc`; luego, identifica el servicio de _MongoDB_ y haz clic en **Iniciar**.

![Iniciar servicio](mongodb/iniciar-servicio-mongodb.webp)

Si por algún motivo, al iniciar, aparece una notificación con el error **1607**, como se muestra a continuación:

![Error 1067](mongodb/error-1067.webp)

La causa puede ser que las carpetas de destino para almacenar los LOGs y las bases de datos no tengan los permisos necesarios. En ese caso, necesitas ubicar la carpeta contenedora y agregar esos permisos siguiendo estos pasos:

__Abre las propiedades de la carpeta__:

`C:\Program Files\MongoDB\Server\<version>\`{:.filepath}

- Ve a la pestaña Seguridad.
- Haz clic en Editar
- Agrega esta cuenta:

![Agregar permisos](mongodb/permisos-a-carpetas.webp)

> Recomiendo vaciar el contenido de la carpeta `data` para evitar conflictos con archivos generados anteriormente y vuelve a [iniciar MongoDB como servicio](#iniciar-como-servicio).
{:.prompt-info }

### 3. Instalar el cliente de MongoDB

Este es el comando que utilizamos para instalar el cliente (para conectarse al servidor) de _MongoDB_ con `winget`:

```powershell
winget install -e --id MongoDB.Shell
```
{:.nolineno .typing}

Al concluir la instalación, ya puedes conectarte a MongoDB usando el comando `mongosh` y comenzar a crear bases de datos, colecciones y documentos:

![Test Mongosh CMD](mongodb/mongosh-cmd-test.webp)

En resumen, hemos instalado dos programas:

| Paquete            | Qué es                     | Incluye                       |
| ------------------ | -------------------------- | ----------------------------- |
| **MongoDB.Server** | El servidor de MongoDB     | `mongod`, servicio de Windows |
| **MongoDB.Shell**  | El cliente para conectarte | `mongosh`                     |

---

## Instalación tradicional 

A diferencia del método anterior, puedes descargar el instalador oficial para Windows (MSI Installer) que incluye lo siguiente:

- MongoDB Server
- MongoDB Shell (mongosh)
- Opcionalmente MongoDB Compass (gui)
- Herramientas de línea de comando (Database Tools)

Ingresa a [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community){:target='_blank'} y descarga la versión correspondiente a la arquitectura de tu máquina. Generalmente, el sitio detecta esta información automáticamente al ingresar.

![Download Comunnity](mongodb/website-download-comunnity.webp)

Una vez descargado, sigue las instrucciones del asistente y espera a finalizar el proceso.

{% include embed/iframe.html src="/slides/instalacion-mongodb-en-windows.html" target="true" %}
