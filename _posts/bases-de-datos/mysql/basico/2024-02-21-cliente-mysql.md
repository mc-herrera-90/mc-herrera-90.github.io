---
title: "MySQL - Cliente de línea de comandos"
emoji: 🐬
pin: true
description: "conecta a servidores locales o remotos, gestiona bases de datos y automatiza tareas"
categories: [MySQL, "MySQL-Básico"]
tags: [Bases de Datos]
icon: icon/mysql.svg
image:
    path: poster/mysql-cliente-terminal.webp
    lqip: data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJQAXf+A765PmdR4q07gAA/uqLJcRZMeZLMqSqqNHxfbqvYo6tqfPV1md4ZJcvyyr2o1Cmv1GQxsB76tOaGDaVRvrfisE2NnJfBGEmCMTHmRwAAAA=
---

<div style="text-align: center;" markdown="1">
  ❤️{% include {{ page.icon }} %}{:style="width:190px;"}
</div>

## Alcance de esta guía

En este artículo veremos cómo utilizar el **cliente de línea de comandos de MySQL** para conectarse a un servidor, ejecutar consultas y trabajar con resultados de manera interactiva y no interactiva. Los objetivos son:

* [x] Conectarse a un servidor MySQL usando el cliente `mysql`
* [x] Ejecutar sentencias SQL básicas y ver sus resultados
* [x] Usar el cliente en **modo interactivo** y **modo no interactivo**
* [x] Redirigir la salida de consultas a archivos o canalizaciones de comandos

> Antes de comenzar a usar el cliente de línea de comandos de MySQL, asegúrate de contar con acceso a una instalación de MySQL. Si aún no tienes MySQL instalado, puedes revisar estos [posts sobre instalaciones de MySQL](/categories/mysql-setup/)
{: .prompt-info }

{% include circle-line.html %}

Al instalar MySQL, el paquete de instalación incluye una herramienta para conectarse a un servidor mediante línea de comandos (a menudo denominada «cliente de línea de comandos»). El programa se llama `mysql` y permite conectarse al servidor y abrir una sesión como cliente para ejecutar sentencias **SQL** con capacidades de edición. Esta herramienta admite tanto un uso interactivo como no interactivo.

- En __modo interactivo__, los resultados de las consultas se muestran en una tabla con formato ASCII, lo que facilita su lectura.
- En __modo no interactivo__ (por ejemplo, cuando se utiliza en scripts o como parte de una canalización), los resultados se presentan en formato separado por tabulaciones.

Por ejemplo, al emplear una __canalización de comandos__:

{% capture code %}
<span class="hl">$ echo "SELECT NOW();" | mysql -u root -p</span>
Enter password:
NOW()
2024-12-18 02:53:25
<span class="hl">$ echo "SELECT user FROM mysql.user" | mysql -u root -p --table</span>
Enter password: 
+------------------+
| user             |
+------------------+
| administrador    |
| ecotech_admin    |
| dart_vader       |
| mysql.infoschema |
| mysql.session    |
| mysql.sys        |
| root             |
+------------------+
{% endcapture %}
{% include terminal-wrapper.html content=code %}

> El formato de salida puede personalizarse utilizando distintas opciones en la línea de comandos, como `--table`, `--batch` o `--raw`, entre otras.
{:.prompt-info}

Otro ejemplo, redirigir la salida a __un archivo__:

{% capture code2 %}
<span class="hl">$ mysql -u root -p -e "SHOW DATABASES;" &gt; mis_bases_de_datos.txt</span>
Enter password:
<span class="hl">$ cat mis_bases_de_datos.txt</span>
Database
ecommerce_rincon_verde
ecotech_solutions_company
information_schema
mysql
performance_schema
sys
{% endcapture %}
{% include terminal-wrapper.html content=code2 %}

## Localizar MySQL

A pesar de que, al instalarlo, el cliente de MySQL queda disponible simplemente invocando `mysql` desde la terminal o símbolo de sistema, puede ocurrir que no esté **configurado en la variable de entorno `PATH`**. En esos casos, será necesario localizar el ejecutable para poder invocarlo directamente.

### En Windows

La ubicación en Windows puede variar según el método de instalación utilizado. A continuación, se detallan las rutas más comunes dependiendo del paquete instalado.

{% tabs ubicar_mysql_windows %}
{% tab ubicar_mysql_windows Xampp %}
Si usas XAMPP, el cliente generalmente se encuentra en la siguiente ruta:

```
C:\xampp\mysql\bin\mysql.exe
```
{: .noheader .fit-content }

![XAMPP MYSQL PATH](mysql/mysql-cli-xampp-path.webp){:.rounded .bg-secondary-subtle .p-2}
{% endtab %}
{% tab ubicar_mysql_windows Wamp %}
Su usas WAMP, el cliente generalmente se encuentra (según versión instalada y arquitectura) en la siguiente ruta:

```
C:\wamp64\bin\mysql\mysql8.0.x\bin\mysql.exe
```
{: .noheader .fit-content }

![WAMP MYSQL PATH](mysql/mysql-cli-wamp-path.webp){:.rounded .bg-secondary-subtle .p-2}
{% endtab %}
{% endtabs %}

### En otros sistemas operativos

A continuación, se muestra la ubicación de los binarios para Linux y macOS:

{% tabs mysql_cliente_so %}
{% tab mysql_cliente_so <i class='fab fa-linux'></i> Linux %}
Cuando instalas MySQL desde los repositorios oficiales o usando paquetes `.deb` o `.rmp`, el cliente `mysql` suele ubicarse en:

```
/usr/bin/mysql
```
{: .noheader .fit-content }

> Por lo general, la ruta `/usr/bin` está incluida en las variables de entorno. Para ejecutar el cliente, basta con abrir directamente la terminal y usar el comando `mysql`.
{:.prompt-info}
{% endtab %}
{% tab mysql_cliente_so <i class="fa-brands fa-apple"></i> macOS %}
Si instalas MySQL mediante el instalador oficial de Oracle, Homebrew u otros gestores de paquetes, las rutas habituales son:

__Instalador oficial__:

```
/usr/local/mysql/bin/mysql
```
{: .noheader .fit-content }

__Homebrew__:

```
/usr/local/opt/mysql-client/bin/mysql
```
{: .noheader .fit-content }
{% endtab %}
{% endtabs %}

## Conectarse al servidor MySQL

Una vez localizado `mysql`, podemos conectarnos a cualquier servidor MySQL al que tengamos acceso. Para ello, basta con abrir una terminal y ejecutar el programa `mysql`, pasando como argumentos las opciones básicas de conexión, como __host__, __usuario__, __contraseña__, entre otros.

### Conectarse a un servidor local

A continuación, probaremos una conexión local:

```terminal
mysql -u root -h localhost -p
```

Estos parámetros son sencillos, aunque dependiendo del método o plugin de autenticación podría variar pero simplemente necesitamos especificar 2:

- `-u`: El usuario que se configuró en el proceso de instalación u otro existente creado por un usuario administrador.
- `-p`: El password para el usuario especificado.

> Si el servidor se ejecuta en su propia máquina, no es necesario especificar el parámetro `-h` ya que el cliente mysql por defecto usa la opción de `localhost` .
{: .prompt-tip }

Al ejecutar la instrucción anterior, se nos solicitará la contraseña:

{% capture conn1 %}
$ mysql -u root -h localhost -p
<span class='hl'>Enter password: </span>
{% endcapture %}
{% include terminal-wrapper.html content=conn1 %}

Cuando la conexión se realiza correctamente, MySQL muestra un **mensaje de bienvenida** y cambia el **prompt de la consola**, indicando que estamos en una sesión activa y listos para ejecutar comandos SQL.

A continuación, se muestra un ejemplo de conexión desde la terminal o CMD:

<pre>
<code class="language-cmd">C:\Users\mcherrera&gt; <span style='background: #ff04;'>mysql -u root -p -h localhost -P 3306</span>
Enter password: 

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 123
Server version: 8.0.25 MySQL Community Server - GPL

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

<span style='background: #ff04;'>mysql&gt;</span> <span style="color: gray;">-- Aquí puedes escribir sentencias SQL</span></code></pre>

### Conectarse a un servidor remoto

Para conectarse a un servidor remoto, simplemente necesitamos indicar la dirección IP o nombre de dominio del servidor MySQLcon el parámetro `-h`. También es habitual especificar opciones adicionales en ciertos casos, como el puerto si no es el predeterminado (`3306`):

```terminal
mysql -u usuario -p -h 192.168.1.50 -P 3306
```

Donde:

* `-h`: ahora se indica la dirección IP o nombre del host remoto.
* `-P`: sirve para especificar el puerto del servidor MySQL, en caso de ser diferente al `3306` por defecto.
* `-u` y `-p`: Igual que en el caso local, indican el usuario y la contraseña.

> La conexión será exitosa siempre y cuando el servidor remoto permita conexiones desde tu IP y que el puerto `3306` esté abierto y accesible desde el exterior.
{: .prompt-info }

Una vez establecida la conexión, el comportamiento es el mismo: se mostrará el **mensaje de bienvenida** y podrás ejecutar sentencias SQL directamente desde la sesión activa.

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">mysql -u admin -h mi-app-db.xxxxxxxxxxx.us-east-1.rds.amazonaws.com -p -P 3306</span>
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 451
Server version: 8.0.36 Source distribution - Amazon RDS

You are connected to your RDS instance in <span style="color: #00bcd4;">us-east-1</span> 🌐
Type <span style="color: #4caf50;">'help;'</span> or <span style="color: #4caf50;">'\h'</span> for help. Type <span style="color: #4caf50;">'\c'</span> to clear the current input statement.

MySQL [(none)]&gt; <span style="color: gray;">-- Aquí puedes escribir tus sentencias SQL</span>
</pre></code>
</div>
</div>

## Modo interactivo del cliente MySQL

Cuando hablamos de **modo interactivo**, nos referimos a estar dentro de una **sesión activa del cliente MySQL**, es decir, cuando ya hemos iniciado sesión y la conexión es correcta, el prompt de la consola nos invita a ejecutar comandos SQL.

![Prompt esperando instrucciones](mysql/prompt-mysql-wait-dark.webp){:.dark}
![Prompt esperando instrucciones](mysql/prompt-mysql-wait-light.webp){:.light .bg-secondary-subtle .rounded}
_Accediendo al modo interactivo_

En __modo interactivo__, puedes experimentar con tus consultas, veamos algunos ejemplos prácticos:

{% capture queries_mysql %}
mysql> <span class='hl'>SHOW DATABASES;</span> <span style='color: var(--text-muted-color)'>-- Mostrar todas las bases de datos disponibles</span>
+---------------------------+
| Database                  |
+---------------------------+
| ecommerce                 |
| ecotech_solutions_company |
| information_schema        |
| mysql                     |
| performance_schema        |
| sys                       |
+---------------------------+
mysql> <span class='hl'>USE ecotech_solutions_company;</span> <span style='color: var(--text-muted-color)'>-- Selecciona la base de datos 'ecotech_solutions_company'</span>
Database changed
mysql> <span class='hl'>SHOW TABLES;</span> <span style='color: var(--text-muted-color)'>-- Mostrar todas las tablas de la base de datos seleccionada</span>
+-------------------------------------+
| Tables_in_ecotech_solutions_company |
+-------------------------------------+
| departamento                        |
| empleado                            |
| proyecto                            |
| usuarios                            |
+-------------------------------------+
mysql> <span class='hl'>DESCRIBE empleado;</span> <span style='color: var(--text-muted-color)'>-- Ver la estructura de una tabla</span>
+-----------------+--------------+------+-----+-------------------+-----------------------------------------------+
| Field           | Type         | Null | Key | Default           | Extra                                         |
+-----------------+--------------+------+-----+-------------------+-----------------------------------------------+
| id              | int          | NO   | PRI | NULL              | auto_increment                                |
| rut             | varchar(12)  | NO   | UNI | NULL              |                                               |
| nombre          | varchar(100) | NO   | MUL | NULL              |                                               |
| apellido        | varchar(100) | NO   |     | NULL              |                                               |
| direccion       | varchar(200) | YES  |     | NULL              |                                               |
| telefono        | varchar(40)  | YES  |     | NULL              |                                               |
| correo          | varchar(200) | NO   | UNI | NULL              |                                               |
| fecha_contrato  | date         | YES  |     | NULL              |                                               |
| salario         | int          | YES  |     | NULL              |                                               |
| departamento_id | int          | YES  | MUL | NULL              |                                               |
| proyecto_id     | int          | YES  | MUL | NULL              |                                               |
| created_at      | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| updated_at      | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
+-----------------+--------------+------+-----+-------------------+-----------------------------------------------+
{% endcapture %}

{% include terminal-wrapper.html content=queries_mysql %}

> Cada comando debe terminar con `;` o `\g` para ejecutarse correctamente.
{:.prompt-info}

En **modo interactivo**, puedes experimentar con tus consultas, probar modificaciones y explorar tus bases de datos, de una forma rápida y directa.


## Opciones del cliente de MySQL

El cliente de MySQL admite una gran variedad de opciones que pueden especificarse tanto en la línea de comandos como en los **archivos de configuración** (`my.cnf` en Linux/macOS o `my.ini` en Windows), utilizando las secciones `[mysql]` y `[client]`.

A continuación se muestra una tabla con algunas de las opciones más utilizadas, junto con una breve descripción:

| Opción                    | Descripción                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `-u, --user`              | Especifica el nombre de usuario para autenticarse.                                            |
| `-p[password]`            | Solicita o especifica la contraseña del usuario. Si se omite, la pedirá de forma interactiva. |
| `-h, --host`              | Define el hostname del servidor MySQL al que se desea conectar.                               |
| `-P, --port`              | Puerto TCP/IP utilizado para la conexión (por defecto 3306).                                  |
| `-D, --database`          | Selecciona directamente la base de datos al iniciar la sesión.                                |
| `-e, --execute`           | Ejecuta una sentencia SQL directamente desde la línea de comandos.                            |
| `-H, --html`              | Devuelve el resultado en formato HTML (útil para reportes o exportación visual).              |
| `--ssl-mode`              | Controla el uso de SSL/TLS en la conexión (`REQUIRED`, `DISABLED`, `VERIFY_CA`, etc.).        |
| `--default-character-set` | Establece el conjunto de caracteres de la conexión (por ejemplo, `utf8mb4`).                  |
| `--column-type-info`      | Muestra información adicional sobre los tipos de columnas en los resultados.                  |
| `--show-warnings`         | Muestra las advertencias generadas por el servidor tras ejecutar una consulta.                |
| `--silent` o `-s`         | Minimiza la salida a lo estrictamente necesario, ideal para scripts automatizados.            |
| `--table`                 | Formatea los resultados en una tabla legible cuando se visualiza en consola.                  |
| `--pager`                 | Permite canalizar la salida a un programa como `less`, útil para navegar grandes resultados.  |


Estas opciones pueden combinarse según las necesidades de cada tarea, ya sea en **desarrollo**, **scripting** o **administración de bases de datos**.

### Conectarse en modo silencioso

El modo silencioso (`--silent`) suprime la salida adicional como encabezados, bordes y mensajes decorativos. Es especialmente útil en scripts o cuando se desea procesar los resultados en otro programa sin ruido visual. Ejemplo:

```terminal
mysql -u usuario -p --silent
```

Por ejemplo, conexión desde el CMD en modo silencioso:

<pre><code class="language-cmd">C:\Users\mcherrera&gt; mysql -u root -p <span style='background: #ff04'>--silent</span>
Enter password: ****
MySQL [(none)]>
</code></pre>

### Volcar los resultados de una consulta en HTML

El cliente de línea de comandos de MySQL permite exportar los resultados de una consulta directamente en formato HTML usando el parámetro `-H`. Esto es útil para generar reportes visuales o incrustar resultados en páginas web de forma rápida.

```terminal
mysql -u usuario -p -D nombre_bd -e "SELECT ... FROM ..." -H > reporte.html
```

![salida en HTML](mysql/mysql-output-html.webp)


### Conexión directa a una base de datos y cargar scripts

La opción `-D` permite especificar directamente a la base de datos que queremos conectarnos, evitando el uso de la sentencia `USE`. De esta forma, se puede automatiza la ejecución de scripts o consultas SQL almacenadas en archivos SQL externos.

__Ejemplo de cargar un SQL externo__:

```terminal
mysql -u usuario -p -D nombre_bd < script.sql
```

Supongamos que ya tenemos una base de datos y queremos crear una tabla llamada `medicamento` con algunos registros de prueba.

Para ello, escribiremos el siguiente archivo SQL y lo ejecutaremos directamente sobre la base de datos usando la opción `-D`.

```sql
CREATE TABLE IF NOT EXISTS medicamento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  presentacion VARCHAR(50),
  stock INT DEFAULT 0
);

INSERT INTO medicamento (nombre, presentacion, stock) VALUES
('Paracetamol', '500mg comprimido', 120),
('Ibuprofeno', '200mg cápsula', 80),
('Amoxicilina', '250mg/5ml suspensión', 50);

SELECT * FROM medicamento;
```
{: file="medicamentos.sql" }

Ahora, con el siguiente comando ejecutamos el contenido de ese archivo sobre la base de datos `clinica_los_alerces`:

<pre><code class="language-cmd">C:\Users\mcherrera&gt; mysql -u root -p <span style='background: #ff04;'>-D clinica_los_alerces < medicamentos.sql</span>
Enter password: ****
id      nombre  presentacion    stock
1       Paracetamol     500mg comprimido        120
2       Ibuprofeno      200mg cápsula   80
3       Amoxicilina     250mg/5ml suspensión    50
</code></pre>

### Cambiar el delimitador de sentencias

En MySQL, el delimitador predeterminado para separar sentencias SQL es el punto y coma (`;`). Sin embargo, podemos cambiarlo por un delimitador personalizado usando la opción `--delimiter` al iniciar el cliente de línea de comandos de MySQL. Por ejemplo:

```terminal
mysql -u usuario -p --delimiter=.
```

Esto abre el cliente MySQL utilizando el punto (`.`) como nuevo delimitador de sentencias. Así, deberás finalizar cada instrucción con un `.` en lugar de `;`.

<pre><code class="language-cmd">C:\Users\mcherrera&gt; mysql -u root -p -s <span style='background: #ff04'>--delimiter=.</span>
Enter password: ****
MySQL [(none)]&gt; <span style='background: #ff04'>SHOW DATABASES.</span>
Database
clinica_los_alerces
mysql
performance_schema
sys
tienda_electroshop
MySQL [(none)]&gt;</code></pre>

### __Cambiar el delimitador temporalmente__

En caso de que no cambiamos el delimitador en un principio, al definir un procedimiento almacenado que incluye múltiples sentencias SQL, lo más probable es que se produzca un error. En estos casos, cambiar el delimitador de forma temportal es útil para evitar que el cliente interprete erróneamente el `;` dentro del cuerpo del procedimiento como el final de toda la sentencia:

```sql
DELIMITER //

CREATE PROCEDURE ejemplo()
BEGIN
  SELECT ...;
  SELECT ....;
END //

DELIMITER ;
```
{: .nolineno }

<pre><code class="language-cmd">MySQL [(test)]&gt; <span style='background: #ff04'> DELIMITER //</span>
MySQL [(test)]&gt; CREATE PROCEDURE ejemplo()
    -> BEGIN
    ->   SELECT 'Primera línea';
    ->   SELECT 'Segunda línea';
    -> END //
Query OK, 0 rows affected (0.053 sec)
MySQL [(test)]&gt; <span style='background: #ff04'> DELIMITER ;</span>
MySQL [(test)]&gt; CALL ejemplo;
+----------------+
| Primera línea  |
+----------------+
| Primera línea  |
+----------------+
1 row in set (0.038 sec)

+----------------+
| Segunda línea  |
+----------------+
| Segunda línea  |
+----------------+
1 row in set (0.039 sec)</code></pre>


Aquí, el delimitador temporal `//` evita que MySQL termine prematuramente la ejecución al encontrar `;`.

> `DELIMITER` no es parte del lenguaje SQL estándar. Es una instrucción del __cliente de MySQL__ que se utiliza para cambiar cómo este interpreta esa entrada.
{:.prompt-info}

## Comandos especiales

Cuando iniciamos una sesión interactiva desde el cliente de terminal **mysql**, podemos ver un listado de comandos que realizan diferentes tareas, para ello debemos ejecutar el comando `help`:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; HELP</span>

Lista de todos los comandos de MySQL:  
Tenga en cuenta que todos los comandos de texto deben estar al principio de la línea y terminar con ';'

?         (\?) Sinónimo del comando `help`
clear     (\c) Borra la instrucción de entrada actual.
connect   (\r) Vuelve a conectarse al servidor, Los argumentos opcionales son db y host.
delimiter (\d) Establecer delimitador de declaración.
edit      (\e) Editar el comando con $EDITOR. (no funciona en la versión 8)
ego       (\G) Envía el comando al servidor mysql, muestra el resultado verticalmente.
exit      (\q) Salir de mysql. Lo mismo que `quit`.
go        (\g) Envía el comando mysql server.
help      (\h) Muestra esta ayuda.
nopager   (\n) Deshabilitar paginación de salida. (El comando solo funciona en Unix.)
source    (\.) Ejecuta un archivo de script SQL. Toma un nombre de archivo como argumento.
status    (\s) Obtener información de estado del servidor.
system    (\!) Ejecute un comando, el comando solo funciona en Unix. 
               (desde 8.0.19,funciona en Windows.)
warnings  (\W) Mostrar advertencias después de cada declaración.
nowarning (\w) No mostrar advertencias después de cada declaración.

charset   (\C) Cambiar a otro conjunto de caracteres. Podría ser necesario para el procesamiento
               con juegos de caracteres multi-bytes.

Para obtener ayuda del lado del servidor, escriba `help contents`
</pre></code>
</div>
</div>

> Según el sistema operativo que estemos utilizando, el listado puede variar, mostrando comandos más o comandos menos. El idioma del servidor por defecto es en inglés pero lo podemos cambiar para que los mensajes se muestren español (que veremos más adelante).
{: .prompt-info }

Ejemplo, **ejecutar un comando del sistema**

```
\! ls
```
{: .nolineno }

El comando anterior, nos imprimirá los directorio y archivos en la ubicación como lo muestra el siguiente bloque:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; \! ls</span>
Applications
Desktop
Documents
Downloads
Library
Movies
Music
Pictures
Public
mysql&gt;
</pre></code>
</div>
</div>

Ejemplo, **ver la información del servidor**

```
\! status
```
{: .nolineno }


Al ejecutar el comando anterior, se imprimirá el estado y la información del servidor como lo muestra el siguiente bloque:

{% tabs out_status %}
{% tab out_status LINUX/MAC %}
<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; \status</span>
--------------
mysql  Ver 8.4.3 for macos14 on x86_64 (MySQL Community Server - GPL)

Connection id:		11
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		less
Using outfile:		''
Using delimiter:	;
Server version:		8.4.3 MySQL Community Server - GPL
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	utf8mb4
Db     characterset:	utf8mb4
Client characterset:	utf8mb4
Conn.  characterset:	utf8mb4
UNIX socket:		/tmp/mysql.sock
Binary data as:		Hexadecimal
Uptime:			1 hour 55 min 53 sec

Threads: 2  Questions: 18  Slow queries: 0  Opens: 139  Flush tables: 3  Open tables: 60  Queries per second avg: 0.002
--------------
</pre></code>
</div>
</div>
{% endtab %}
{% tab out_status CMD %}
```cmd
mysql> \status
--------------
mysql  Ver 8.0.36 for Win64 on x86_64 (MySQL Community Server - GPL)

Connection id:          11
Current database:
Current user:           root@localhost
SSL:                    Not in use
Current pager:          stdout
Using outfile:          ''
Using delimiter:        ;
Server version:         8.0.36
Protocol version:       10
Connection:             127.0.0.1 via TCP/IP
Server characterset:    utf8mb4
Db     characterset:    utf8mb4
Client characterset:    utf8mb4
Conn.  characterset:    utf8mb4
TCP port:               3306
Uptime:                 1 hour 22 min 51 sec

Threads: 2  Questions: 215  Slow queries: 0  Opens: 146  Open tables: 70  Queries per second avg: 0.043
```
{% endtab %}
{% endtabs %}

### Mostrar información de comandos

El comando `HELP` también es una herramienta muy útil para obtener información sobre los comandos disponibles en el intérprete de MySQL. Cuando ejecutas el comando `HELP` seguido del comando que quieres obtener información, se despliega un listado sobre las opciones que puedes utilizar.

Por ejemplo, __ver el listado completo sobre el comando `SHOW`__:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; HELP SHOW</span>
Many help items for your request exist.
To make a more specific request, please type 'help &lt;item&gt;',
where &lt;item&gt; is one of the following
topics:
    About SHOW
    SHOW AUTHORS
    SHOW BINARY LOGS
    SHOW BINLOG EVENTS
    SHOW CHARACTER SET
    SHOW CLIENT_STATISTICS
    SHOW COLLATION
    SHOW COLUMNS
    SHOW CONTRIBUTORS
    SHOW CREATE DATABASE
    SHOW CREATE EVENT
    SHOW CREATE FUNCTION
    SHOW CREATE PACKAGE BODY
    SHOW CREATE PACKAGE
    SHOW CREATE PROCEDURE
    ...
</pre></code>
</div>
</div>

{% include circle-line.html %}

El cliente de línea de comandos de MySQL es una herramienta fundamental para todo administrador o desarrollador que trabaje con bases de datos. Su potencia, flexibilidad y compatibilidad con scripts lo convierten en una opción ideal tanto para tareas cotidianas como para automatizaciones más avanzadas.

Desde cómo localizar el binario del cliente en distintas plataformas, hasta ejecutar comandos del sistema y consultar el estado del servidor, esta herramienta nos brinda acceso total a las funciones más esenciales de MySQL sin necesidad de interfaces gráficas.

> Dominar este cliente no solo mejora tu productividad, sino que también te acerca a un conocimiento más profundo de cómo funciona MySQL por debajo. Esto es especialmente útil en entornos de servidores donde, por lo general, no contamos con un entorno gráfico y la línea de comandos es la única vía de administración disponible.
{: .prompt-info }

__Recursos adicionales__

* [Documentación oficial de MySQL CLI](https://dev.mysql.com/doc/refman/8.0/en/mysql.html){:target='_blank'}
* [Guía de comandos rápidos de MySQL](https://devhints.io/mysql){:target='_blank'}
