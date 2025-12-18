---
title: "MySQL - Ubuntu"
description: "Cómo instalar y configurar MySQL en Ubuntu 20.04 en adelante"
categories: [MySQL, "MySQL-Setup"]
emoji: 🐬
icon: icon/mysql.svg
tags: [ubuntu, mysql]
image:
  path: poster/mysql-instalacion-ubuntu.webp
  lqip: data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJQBhQBD37+nEsZBT2bIAA/uqLY7we9otIo6VE4hK5kLetUTtViPXpgpvzYttrY9gvIaDi5xEVH7zwYWp7jdhO+itEYAAA
pin: true
---

<div style="text-align: center;" markdown="1">
  ❤️{% include {{ page.icon }} %}{:style="width:190px;"}
</div>

## Alcance de esta guía

En este artículo veremos cómo instalar MySQL en Ubuntu, configurarlo de manera segura y confirmar que todo funciona correctamente. Los objetivos son:

- [x] Instalar MySQL Server usando los repositorios oficiales
- [x] Aplicar la configuración de seguridad inicial
- [x] Crear un usuario y verificar la conexión a la base de datos

> De forma predeterminada, MySQL solo acepta conexiones locales, es decir, conexiones que se originan en la misma máquina donde está instalado. Si necesitas acceder a tu base de datos desde una ubicación remota, es importante habilitarlo de manera segura. En esta guía configuraremos MySQL para aceptar conexiones remotas utilizando cifrado SSL/TLS.
{: .prompt-info }

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Una instalación de Ubuntu (Ubuntu 20.04 o versiones más recientes)

![Release 22.04](ubuntu/ubuntu-lsb-release-22-04.webp){:w="690"}

- Acceso a una cuenta con privilegios `sudo`, ejemplo:

```terminal
mcherrera@ubuntu:~$ sudo -l
[sudo] contraseña para mcherrera: 
...

El usuario mcherrera puede ejecutar los siguientes comandos en ubuntu:
    (ALL : ALL) ALL
```
{:.fit-content}

## Comenzar Instalación

Ahora que hemos confirmado que contamos con todo lo necesario, continuemos con la instalación siguiendo estos pasos:

### 1. Actualizar el Sistema

Es fundamental que el sistema esté actualizado antes de instalar cualquier software para contar con los últimos paquetes y actualizaciones de seguridad.

- Abre una nueva terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y actualiza el índice de paquetes apt con:
  
```terminal
sudo apt update
```

- Actualiza todos los paquetes instalados con:

```terminal
sudo apt upgrade -y
```

### 2. Instalar MySQL

Ubuntu ofrece una versión estable y reciente de MySQL directamente desde sus repositorios predeterminados. Para instalar el paquete de **MySQL Server** ejecuta:
  
```terminal
sudo apt install mysql-server
```

![Paso 1](ubuntu/apt-install-mysql-server.webp)

Concluida la instalación, el [demonio](https://es.wikipedia.org/wiki/Daemon_(inform%C3%A1tica)){: target='_blank' } de MySQL se iniciará automáticamente. Para verificar si está ejecutándose el servidor, usamos el siguiente comando:

```terminal
sudo systemctl status mysql
```

![Verificar servicio mysql](ubuntu/sudo-systemctl-status-mysql.webp)

> De forma predeterminada, el demonio de MySQL (mysqld) escucha en el puerto 3306. Con el siguiente comando podemos verificarlo:
> ```terminal
> cat /etc/services | grep mysql
> ```
{:.prompt-info }


### 3. Configurar MySQL

En Debian y derivados, el paquete mysql-server incluye el script Perl **`mysql_secure_installation`**, el cual permite mejorar la seguridad de la instalación por defecto. Es recomendable correr este script en todas las instalaciones de servidores MySQL para sistemas en producción. En resumen nos permite:

* Cambiar la contraseña del usuario `root`.
* Deshabilitar el acceso remoto para el usuario `root`.
* Eliminar cuentas de usuario anónimas que pueden ingresar sin necesidad de una contraseña.
* Eliminar la base de datos `test` (si existe), y todo privilegio que permita a cualquier usuario el acceso a bases de datos cuyos nombres comienzan con `test_`.

Utilizar el script para una configuración segura:

```terminal
sudo mysql_secure_installation
```

La primera pregunta nos solicitará si queremos validar la contraseña usada para conectarse al servidor, si lo deseamos al momento de crear un nuevo usuario en el sistema, MySQL nos validará si la contraseña cumple con las condiciones mínimas de seguridad.

![script de seguridad](ubuntu/mysql-secure-installation.webp)
_Validar las contraseñas_

![script de seguridad](ubuntu/mysql-select-validation-password.webp)
_Seleccionar el nivel de validación_

Después, según la opción que ingresemos, nos solicitará la contraseña para el usuario `root` (esto no tendrá efecto hasta que cambiemos el método de autenticación al usuario `root` de `auth_socket` a otro complemento). Una vez definida la contraseña, nos preguntará si deseamos **eliminar a los usuarios anónimos** que se crean por defecto durante la instalación de MySQL.

> Lo recomendable es eliminar a los usuarios anónimos, ya que representan un riesgo de seguridad al permitir acceso sin necesidad de contraseña.
{: .prompt-tip }

![script de seguridad](ubuntu/mysql-remove-anonymous-users.webp)

Normalmente, a root solo se le debe permitir conectarse desde 'localhost'. Para así asegurar que no puedan adivinar la password de root desde la red. Así que deshabilitamos el logín remoto.

![script de seguridad](mysql/disallow-root-login-remotely.webp)

Luego nos preguntá si queremos eliminar la base de datos de prueba, esto es __Opcional__.

![script de seguridad](mysql/remove-test-database.webp)

Luego nos pregunta si queremos recargar la tabla de privilegios. Pondremos si (Y).

![script de seguridad](mysql/reload-privilege-tables.webp)

### 4. Configurar métodos de autenticación

En los sistemas Ubuntu con MySQL 5.7 (y versiones posteriores), el usuario `root` de MySQL se configura para la autenticación usando el complemento `auth_socket` de manera predeterminada en lugar de una contraseña. Esto en muchos casos proporciona mayor seguridad y utilidad, pero también puede generar complicaciones cuando deba permitir que un programa externo (como phpMyAdmin) acceda al usuario.

Para usar una contraseña para conectar a MySQL como `root`, es necesario cambiar el método de autenticación de `auth_socket` a `caching_sha2_password` o `mysql_native_password`. Para hacerlo, abra MySQL desde la terminal:

```terminal
sudo mysql
```

Para ver el método de autenticación utilizado por las cuentas de usuarios de MySQL ejecutamos la siguiente sentencia dentro de la consola de MySQL:

```sql
SELECT user, authentication_string, plugin, host FROM mysql.user;
```
{: .nolineno }

![query auth user](mysql/authentication-user.webp)

Para cambiar el método de autenticación de `root` a una contraseña, utilizamos el comando `ALTER USER` para modificar el complemento de autenticación. Esto se puede hacer en una sola línea, de la siguiente manera:


```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';
```
{: .nolineno }

O realizar el cambio en dos pasos:

**Primero** cambiamos solo el complemento:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password;
```
{: .nolineno }

**Segundo** cambiamos el password (La función **`user()`** devuelve al usuario en sessión):

```sql
ALTER USER user() IDENTIFIED BY '-Strong_Password*';
```
{: .nolineno }

Y por último recargamos la tabla de permisos:
  
```sql
FLUSH PRIVILEGES;
```
{: .nolineno }

### 5. Privilegios de usuarios

Otra opción recomendada es crear un nuevo usuario administrativo con todos los privilegios y acceso a todas las bases de datos:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'admin_user'@'localhost'
IDENTIFIED BY 'very_strong_password';
```
{: .nolineno }

## Desinstalar MySQL

Para desinstalar MySQL en Ubuntu, puedes seguir estos pasos:

**Primero**, debemos detener el servicio de MySQL si está en ejecución:

```terminal
sudo systemctl stop mysql
```

**Segundo**, eliminamos los paquetes de MySQL con el siguiente comando:

```terminal
sudo apt-get remove --purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
```

**Tercero**, eliminamos dependencias y archivos residuales:

```terminal
sudo apt-get autoremove
sudo apt-get autoclean
```

{% include circle-line.html %}

Este sería un ejemplo, que explica de forma ordenada cómo implementar una instalación limpia de MySQL en Ubuntu y configurar las opciones de inicio del servidor. ¡Espero que te sirva! __Sigue explorando y aprendiendo más sobre MySQL__ y otras tecnologías.
