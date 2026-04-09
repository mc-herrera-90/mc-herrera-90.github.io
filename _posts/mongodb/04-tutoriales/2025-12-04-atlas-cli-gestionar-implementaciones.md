---
title: "MongoDB: Gestionar MongoDB Atlas en local con Atlas CLI"
categories: [MongoDB, "MongoDB_04-Guías"]
badge: mongodb
---

Cuando trabajamos con MongoDB en desarrollo, es común instalar una instancia local usando [mongod](https://www.mongodb.com/es/docs/manual/reference/program/mongod/){:target='_blank'}. Sin embargo, MongoDB ofrece una alternativa más avanzada que permite simular un entorno similar a producción utilizando Docker.

Algunas de las diferencias con un instalación de MongoDB directa:

| Característica  | Mongo local    | Atlas local            |
| --------------- | -------------- | ---------------------- |
| Arquitectura    | Standalone     | Replica set            |
| Infraestructura | Proceso nativo | Docker / gestionado    |
| Configuración   | Manual         | Automática             |
| Uso             | Aprendizaje    | Desarrollo profesional |
| Transacciones   | Limitadas      | Completas              |

La diferencia más importante es la arquitectura:

- __Atlas local__: estás trabajando como si estuvieras en la nube
- __Mongo local__: estás trabajando como en un servidor tradicional

> Con Atlas local:
> - Los datos viven dentro del contenedor
> - Si borras el deployment __pierdes todo__
>
> Con Mongo local:
> - Los datos quedan en tu disco
> - Tienes más control
{:.prompt-info}

---

## Instalar Atlas CLI y dependencias

- __Atlas CLI__: Interfaz de línea de comandos que permite gestionar las implementaciones desde la terminal
- __MongoDB Shell__: Herramienta interactiva que se conecta a una implementación (la herramienta Mongo Compass ya la incluye)
- __Docker__: plataforma que permite ejecutar software en contenedores, incluidas las implementaciones locales de MongoDB.


Selecciona la pestaña correspondiente al sistema operativo para ver los comandos que instalan estas herramientas de desarrollo necesarias.

{% tabs instalacion-tools %}
{% tab instalacion-tools macOS %}
Ejecutar los siguientes comandos para instalar las dependencias con el administrador de paquetes [Homebrew](https://brew.sh/){:target='_blank'}

```terminal
brew install mongodb-atlas
brew install --cask docker
```
{% endtab %}
{% tab instalacion-tools Windows %}
Ejecutar los siguientes comandos para instalar dependencias usando el administrador de paquetes Chocolatey. Si Chocolatey no está instalado, se puede instalar siguiendo las instrucciones en el [sitio web de Chocolatey](https://chocolatey.org/install){:target='_blank'}.

```cmd
choco install mongodb-atlas
choco install docker-desktio
```
{% endtab %}
{% tab instalacion-tools Linux %}


Ahora se debe crear el archivo de lista `/etc/apt/source.list.d/mongodb-org-7.0.list` para la versión de Ubuntu. Se debe sustituir `7.0`por la edición de MongoDB.

```terminal
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

Luego, actualizamos el índice de paquetes:

```terminal
sudo apt update
```

Si no deseas instalar `mongosh`, ejecuta el siguiente comando:

```terminal
sudo apt install -y mongodb-atlas-cli
```
{% endtab %}
{% endtabs %}

> Los comandos anteriores instalan la aplicación [Docker Desktop](https://docs.docker.com/desktop){:target='_blank'}. Una vez completa la instalación, se debe crear una cuenta de Docker e iniciar la aplicación.
{:.prompt-info}

## Autenticación con Atlas

Antes de usar la herramienta, el primer paso es loguearte y para ello simplemente ejecuta el siguiente comando:

```terminal
atlas auth login
```
{:.typing}

![Autenticarse](mongodb/atlas-cli/atlas-auth-login.webp)

| Opción         | Uso principal                                 | Autenticación                        |
| -------------- | --------------------------------------------- | ------------------------------------ |
| UserAccount    | Para uso no programático                      | Login con navegador (OAuth)          |
| ServiceAccount | Mejor para uso programático                   | Credenciales de servicio |
| APIKeys        | Ideal para uso programático con una clave API | Public Key + Private Key             |

Selecciona la primera opción y presiona <kbd>Enter</kbd>. Guarda o copia el código de activación que se genera en la Terminal para usarlo pronto:

![código generado](mongodb/atlas-cli/copiar-codigo-generado.webp)

Luego, ingresa tu correo que registraste la cuenta en Atlas o selecciona el proveedor (recomendado usar Google o GitHub):

![Seleccionar proveedor](mongodb/atlas-cli/selecciona-el-proveedor.webp)

Pega el código de activación en el navegador:

![Pegar el código](mongodb/atlas-cli/atlas-cli-pegar-el-codigo.webp)

Y confirma haciendo clic en __Confirm Authorization__:

![Confirmar la autorización](mongodb/atlas-cli/atlas-cli-confirmar-autorizacion.webp)

Una vez autenticado, se debe seleccionar la organización:

![Seleccionar organizacion](mongodb/atlas-cli/atlas-cli-auth-successfully-y-seleccionar-organizacion.webp)

Eso es todo, para confirmar ejecuta el siguiente comando:

```terminal
atlas auth whoami
```
{:.typing}

La salida:

```
Logged in as <tu.correo@mail.com> account
```
{:.noheader}

## Configurar MongoDB local con Atlas CLI

Ya tienes instalado __Atlas CLI__ y logueado con tu cuenta de MongoDB Atlas.

Ahora vamos a levantar una implementación local de MongoDB y es un procedimiento bastante simple. Primero revisa la versión de Atlas CLI:

```terminal
atlas --version
```
{:.typing}

![Version Atlas CLI](mongodb/atlas-cli/atlas-cli-version.webp)

Desde la versión `1.25.0` de Atlas CLI, la forma de configurar entornos locales cambió. Por eso, al usar comandos antiguos (aunque todavía funcionan), pueden aparecer advertencias de deprecación.

Por ejemplo, si utilizamos el siguiente comando funcionará pero lanzando advertencias:

```terminal
atlas local setup myDeploymentMongoDB --mdbVersion 8.0 --port 27018
```
{:.typing}

![Advertencia comando deprecado](mongodb/atlas-cli/atlas-cli-advertencia-comando-deprecado.webp)

Lo correcto sería usar el comando de la siguiente manera:

```terminal
atlas setup local --mdbVersion 8.0 --port 27018
```
{:.typing}

![Atlas local setup with default settings](mongodb/atlas-cli/atlas-cli-local-setup-with-default-settings.webp)

Al presionar <kbd>Enter</kbd>, el comando hace lo siguiente:

1. Crea una implementación llamada "myDeploymentMongoDB"
2. Levanta un contenedor de Docker
3. Instala MongoDB versiónn 8.0
4. Expone el puerto `27018` (en caso que tengas una instalación previa que use ya el puerto predeterminado `27017`)
5. Lo deja listo como si fuera un entorno "tipo cloud"

## Conexión a la implementación local

Al finalizar el proceso anterior, nos da la opción de conectarnos a la implementación, selecciona la opción que tengas disponible, podemos verificar con MongoDB Compass:

![Finish setup local](mongodb/atlas-cli/atlas-cli-finish-setup-local-connect-with-compass.webp)

De igual manera, puedes conectarte directo desde la Terminal usando `mongosh`:

![Conectar con MongoDB usando mongosh](mongodb/atlas-cli/atlas-cli-conexion-con-mongosh.webp)

> Como se puede observar, ya existía una instancia de `mongod` utilizando el puerto predeterminado (`27017`), por lo que se especificó el puerto `27018`. En caso de no indicar esta opción, el sistema intentará usar el puerto por defecto. De igual forma, si no se proporciona un nombre para el deployment, el CLI asignará uno automáticamente.
{:.prompt-info}

---

## Cargar datos de muestra

Con el siguiente comando se puede instalar las herramientas de MongoDB Database Tools:

```terminal
brew tap mongodb/brew
brew install mongodb-database-tools
```
{:.typing}

Ahora, descargamos el dataset oficial de MongoDB que incluye bases de datos listas con arta data:

```terminal
curl https://atlas-education.s3.amazonaws.com/sampledata.archive -o data.archive
```
{:.typing .typing-fast}

> Esto puede tardar dependiendo de tu conexión a internet y es un archivo que comprimido ya pesa aprox ~300MB.
{:.prompt-info}

Y ahora con `mongorestore`, cargamos el dataset en MongoDB, lo que crea varias bases de datos con sus datos de ejemplo:

```terminal
mongorestore --archive=data.archive --port <PORT>
```
{:.typing .typing-fast}

> Sustituir el marcador `<PORT>`con el número de puerto de la implementación. Puedes encontrar el número de puerto en Docker Desktop o usando el comando `docker ps`.
> ![Salida puerto contenedor](mongodb/atlas-cli/output-deployments-docker-ps-show-ports.webp)
{:.prompt-info}

![Cargar dataset con mongorestore](mongodb/atlas-cli/atlas-cli-load-dataset-con-mongorestore.webp)

---

## Pasar de MongoDB local a Atlas Cloud

Migrar de local a cloud no es más que trasladar tus datos manteniendo su estructura e integridad.

Este proceso sigue una lógica muy clara:

1. Exportar la base de datos (mongodump)
2. Crear cluster en Atlas Cloud
3. Importar los datos (mongorestore)

Esto cuando ya quieres tener acceso a remoto

### 1. Exportar los datos desde el entorno local

Si es que llegamos a un punto donde decides llevar tus datos a una implementación en la nube, lo primero es exportar la o las bases de datos.

Exportar una base de datos del dataset de ejemplo:

```terminal
mongodump --db sample_mflix --port 27018 --out ./backup
```
{:.typing .typing-fast}

El resultado es un respaldo completo de la base de datos:

![Exportar datos de ejemplo](mongodb/atlas-cli/mongodump-db-sample-mflix.webp)

### 2. Implementar el cluster en Atlas Cloud

Estando autenticado con Atlas CLI, el comando para hacerlo de forma interactiva es simplemente:

```terminal
atlas setup
```
{:.typing}

---


## Eliminar una implementación local

Borrar una implementación local también elimina los datos de volúmenes locales.

El siguiente comando elimina una implementación local por su nombre:

```terminal
atlas local delete <nombre-implementación>
```
{:.typing}