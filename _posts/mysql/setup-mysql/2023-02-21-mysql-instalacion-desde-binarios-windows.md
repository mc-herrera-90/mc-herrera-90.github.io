---
title: "MySQL - Windows (binarios)"
emoji: "🐬"
description: "Cómo instalar y configurar MySQL en Windows desde los binarios"
categories: [MySQL, "MySQL-Setup"]
tags: [mysql]
image:
    path: poster/mysql-instalacion-windows-zip.webp
    lqip: data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJbABTAAejVz1+BSCCwAD+6orJ8TNtGqWlCMWHJIyIWC/PVwbuT8qoz/2Hf7zJHK8eFejr6144UmKddNMtKhxEwnBsWf6PkorZGgAA
pin: true
---

Existen varias formas de instalar MySQL en Windows, descargando el instalador oficial, mediante paquetes como [XAMP](https://www.apachefriends.org/es/index.html) o [WAMPSERVER](https://www.wampserver.com/){:target='_blank'} o incluso usando contenedores de Docker. Sin embargo instalar MySQL desde los binarios en Windows es una excelente opción para usuarios que desean un mayor control sobre la configuración, evitar software adicional innecesario y comprender mejor su funcionamiento interno. En este post, cubriremos los pasos detallados para lograrlo de manera fácil y efectiva.

## Requisitos Previos

- [x] Windows 10 o superior.
- [x] Una cuenta con permisos de administrador.
- [x] Instalación de [Microsoft Visual C++ Redistributable](https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist?view=msvc-170){:target='_blank'} actualizada.


## 1. Descargar y extraer binarios de MySQL

- Abrimos el navegador y vamos a la página oficial de descargas de MySQL: <a href="https://dev.mysql.com/downloads/" target="_blank">https://dev.mysql.com/downloads/</a>
- En la sección de **MySQL Community Server**, selecciona la versión de MySQL a instalar.
- Luego selecciona la versión según la arquitectura de tu equipo:
  - **Windows (x86, 64bit), ZIP archive**: Este archivo contiene los binarios sin necesidad de un instalador gráfico.
  - **Windows (x86, 32-bit), ZIP archive**: Si estás usando una versión de 32 bits de Windows.
- Clic en **Download** y luego clic en **No thank, just start my download** para evitar registrarse y comenzar la descarga directamente.

> Si prefieres, puedes ir directo a la descarga de [Mysql 8.0.28 para 64 bit](https://dev.mysql.com/downloads/file/?id=509736){:target='_blank'}
{: .prompt-tip }

![descarga de los binarios](mysql/download-binary-mysql-light.webp){: .light }
![descarga de los binarios](mysql/download-binary-mysql-dark.webp){: .dark }

- Una vez descargado el archivo, extraemos su contenido en una carpeta de preferencia. Por ejemplo:
  ```
  C:\mysql
  ```
  {: .noheader .fit-content }

## 2. Configurar MySQL

### Crear la carpeta de datos

- Dentro de la carpeta que descomprimiste los binarios de MySQL, crea una carpeta llamada `data/`.
  - **¿Para qué sirve la carpeta `data/`?** Esta carpeta es donde MySQL almacena todas las bases de datos y sus respectivos archivos de configuración. Aquí se guardan las tablas, índices y cualquier dato que ingreses en MySQL, por lo que es fundamental para el funcionamiento del sistema.
- La ruta completa sería algo así como `C:\mysql\data`.

### Crear el archivo de configuración

- En la misma carpeta dónde has extraído los binarios, crea un archivo `my.ini`.
  - **¿Para qué sirve el archivo `my.ini`?** Este archivo de configuración afecta directamente el comportamiento del servidor MySQL. Permite definir ubicaciones de archivos, puertos de conexión y otros parámetros importantes que optimizan el rendimiento.
- La ruta completa sería algo así como la siguiente:
  ```
  C:\mysql\my.ini
  ```
  {: .noheader .fit-content}

### Opciones para el servidor \[mysqld\]

La directiva `[mysqld]` dentro del archivo de configuración, afectan directamente el comportamiento del __servidor MySQL__. Aquí puedes establecer rutas, puertos, motor de almacenamiento, límites de conexión, entre otros parámetros.

Un ejemplo básico de opciones que puedes definir:

```ini
[mysqld]
basedir=C:/mysql # Ruta de instalación de MySQL
datadir=C:/mysql/data # Ruta donde se almacenan los datos
port=3306  # Puerto por defecto para conexiones

# Otras opciones recomendadas
default_storage_engine=INNODB # Motor de almacenamiento por defecto
max_connections=200 # Número máximo de conexiones simultáneas
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES # Reflas de validación SQL
```
{: .nolineno file="my.ini" }

### Opciones para los clientes \[client\]

La directiva `[client]` dentro del archivo de configuración, afectan a __todas las herramientas cliente de MySQL__, como `mysql`, `mysqldump`, `mysqladmin`, etc. Aquí puedes configurar valores predeterminados para conexión, como el usuario, puerto o incluso la contraseña (no recomendado):

```ini
[client]
port=3306 # Puerto por defecto que se conectarán los clientes
user=root # Usuario predeterminado para conectarse
password=miclave123 # No se recomienda guardar contraseñas aquí
```
{: .nolineno file="my.ini" }

> Para ver más información y las configuraciones que se pueden definir en estos archivos, revisa este [**artículo**](https://dev.mysql.com/doc/refman/8.4/en/option-files.html){:target='_blank'}
{: .prompt-tip }

## Inicializar la base de datos del sistema

Antes de poder iniciar el servidor MySQL por primera vez, es necesario inicializar el directorio de datos. Este proceso configura los archivos básicos necesarios para que MySQL funcione correctamente.

- Abrimos un **Símbolo del sistema** (cmd) como administrador.
- Navega hasta la carpeta dónde has extraído los binarios con el comando `cd`. Ejemplo:
  ```
  cd C:\mysql\bin
  ```
  {: .noheader .fit-content }

- Ahora, ejecuta el siguiente comando para inicializar el directorio de datos de MySQL. Ejemplo:
  ```bash
  mysqld --initialize --console
  ```
  {: .noheader .nolineno .fit-content }

- **Explicación de lo que realiza el comando anterior**:
  - Inicializa el directorio de datos de MySQL y crea las tablas del sistema.
  - Instala el [esquema sys](https://dev.mysql.com/doc/refman/8.0/en/sys-schema.html){: target='_blank' }.
  - Crea una cuenta administrativa.
- **Implementación segura por defecto**:
  - Se crea una sola cuenta administrativa `root@localhost` con una contraseña generada aleatoriamente, que se marca como caducada.
  - No se crean cuentas de usuarios anónimos.
  - No se crea ninguna base de datos como `test` accesible para todos los usuarios.

Observamos la consola, donde se muestra el password generado aleatoriamente:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">&gt; bin\mysqld --initialize --console</span>
2024-11-08T16:35:45.951151Z 0 [System] [MY-015017] [Server] MySQL Server Initialization - start.
2024-11-08T16:35:45.966750Z 0 [Warning] [MY-010915] [Server] 'NO_ZERO_DATE', 'NO_ZERO_IN_DATE' and 'ERROR_FOR_DIVISION_BY_ZERO' sql modes should be used with strict mode. They will be merged with strict mode in a future release.
2024-11-08T16:35:46.013551Z 0 [System] [MY-013169] [Server] C:\mysql\bin\mysqld.exe (mysqld 8.4.3) initializing of server in progress as process 4644
2024-11-08T16:35:46.153954Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2024-11-08T16:35:53.068762Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
<span class="hl">2024-11-08T16:36:11.759321Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: /-H_NXhO1h.#</span>
</pre></code>
</div>
</div>

### Agregar al path

- Para ejecutar después el programa cliente de mysql desde cualquier ubicación, debemos incluir el directorio `C:\mysql\bin` a la variable `PATH`.
- Abrimos la CMD normal (para que sea disponible a nivel de usuario) o como administrador (para que sea disponible a nivel de sistema):

```
setx PATH "%path%;"C:\mysql\bin\
```

## __3. Configurar MySQL como Servicio__

Un **servicio** es un programa o proceso que se ejecuta en segundo plano en Windows, incluso cuando no estás interactuando directamente con él. Configurar MySQL como servicio permite que se inicie automáticamente con el sistema y funcione de manera continua sin necesidad de intervención manual.

Primero, accedemos al directorio de instalación, luego entramos en la carpeta **`bin`** y ejecutamos los siguientes comandos:

- El siguiente comando es para asegurarnos de no tener ninguna instancia del servidor corriendo actualmente:

```console
mysqladmin -u root shutdown
```

- El siguiente comando registra MySQL como servicio (ejecutar con privilegios de administrador):

```console
mysqld --install "mysql"
```

Ahora podemos **iniciar** o **detener** el servicio desde la línea de comandos. Para ello podemos abrir una nueva **CMD** como administrador y realizar alguna de las siguientes operaciones:

1. Iniciar el servicio con el comando:

```console
net start mysql
```

{: start="2" }
2. Detener el servicio

```console
net stop mysql
```

> La herramienta [`net`](https://ss64.com/nt/net-service.html) se utiliza para administrar redes y servicios.
{: .prompt-info }


{: start="3" }
3. Consultar el estado del servicio

```console
sc qc mysql
```

Lo anterior nos mostraría un mensaje similar al siguiente:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">&gt; sc qc mysql</span>
[SC] QueryServiceConfig CORRECTO

NOMBRE_SERVICIO: mysql
        TIPO               : 10  WIN32_OWN_PROCESS
        TIPO_INICIO        : 2   AUTO_START
        CONTROL_ERROR      : 1   NORMAL
        <span class="hl">NOMBRE_RUTA_BINARIO: C:\mysql\bin\mysqld mysql</span>
        GRUPO_ORDEN_CARGA  :
        ETIQUETA           : 0
        NOMBRE_MOSTRAR     : mysql
        DEPENDENCIAS       :
        NOMBRE_INICIO_SERVICIO: LocalSystem
</pre></code>
</div>
</div>

{: start="4" }
4. Eliminar el servicio

```console
sc delete mysql
```

> La herramienta [`sc`](https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/sc-query) es más avanzada y proporciona un control detallado sobre los servicios de Windows. Se debe utilizar con cuidado, ya que una configuración incorrecta puede afectar el funcionamiento del sistema.
{: .prompt-warning }

### __Establecer una nueva contraseña__

Una vez ya podemos acceder a nuestro servidor, lo primero que debemos hacer es cambiar la contraseña generada al momento de inicializar las bases de datos del servidor. Para eso tenemos el comando `ALTER USER` que fue introducido en versiones de MySQL 5.7 en adelante.

- Ejecutamos el siguiente comando para cambiar la contraseña del usuario conectado (root):

```sql
ALTER USER user() IDENTIFIED BY '<new-password>';
```
{: .nolineno }

{% include circle-line.html %}

Este sería un ejemplo, que explica de forma ordenada cómo implementar una instalación limpia de MySQL desde los binarios en Windows y configurar las opciones de inicio del servidor. ¡Espero que te sirva! __Sigue explorando y aprendiendo más sobre MySQL__ y otras tecnologías.
