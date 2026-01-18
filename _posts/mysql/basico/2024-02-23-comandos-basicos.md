---
title: "MySQL - Comandos básicos"
categories: [MySQL, "MySQL-Básico"]
icon: icon/mysql.svg
emoji: 🐬
mermaid: true
image:
  path: poster/mysql-comandos-basicos.webp
  lqip: data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBUAAAABF9D/iAgQZNtMYmi7v88FIvqfSy4AVlA4IEQAAAAQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJQAALJSVN7wAA/uqMZSCDGYI3LG5n8dklI+kzvPrch/tg24u7I+SCEAAAAA==
tags: [mysql]
pin: true
---

Como probablemente ya sabes, [**SQL**](https://es.wikipedia.org/wiki/SQL "Ir a definición"){: target="_blank" } es un lenguaje estándar para trabajar y gestionar bases de datos. Nos permite realizar una variedad de operaciones, como crear estructuras, consultar información, modificar datos y gestionar el acceso. Dentro de SQL, __los comandos se agrupan en distintos sublenguajes__, cada uno con un propósito específico. Estos sublenguajes están pensados para facilitar tareas concretas, desde definir la estructura de una base de datos, hasta manipular sus datos o gestionar permisos de acceso, todo de forma más ordenada y eficiente.

A continuación, tenemos un diagrama que nos muestra esos **sublenguajes** que derivan de __SQL__:

```mermaid
graph TD
    B(<strong class="fs-1">SQL</strong>)
    B-->C(<strong class="fs-3">DML</strong><br />Data Manipulation Language)
    B-->D(<strong class="fs-3">DDL</strong><br />Data Definition Language)
    B-->E(<strong class="fs-3">DCL</strong><br />Data Control Language)
    C-->|comandos| CD[SELECT<br />INSERT<br />UPDATE<br />DELETE]
    D-->|comandos| DD[CREATE<br />ALTER<br />DROP]
    E-->|comandos| ED[GRANT<br />DENY<br />REVOKE]
```

## Comandos de Definición de Datos (DDL)

Los comandos __DDL__ nos permiten crear y modificar la estructura de las bases de datos, como sus tablas, columnas, tipos de datos y relaciones. También se utilizan para definir otros objetos importantes, como índices, vistas, procedimientos, usuarios, etc. En versiones más recientes de MySQL, es posible crear roles (conjuntos de permisos) para facilitar la gestión de privilegios.

La siguiente ilustración muestra algunos ejemplos de cómo usar estos comandos para crear objetos en la base de datos:

![DDL](mysql/mysql-ddl.webp)

### Crear una base de datos

Para empezar a trabajar con una base de datos, lo primero que necesitamos es crear una. Esto se puede hacer con el comando `CREATE DATABASE`:

```sql
CREATE DATABASE tienda;
```
{: .nolineno }

Este comando crea una base de datos llamada `tienda`, donde podemos almacenar los datos relacionados con una tienda.

> Siempre que se crea una base de datos, es necesario seleccionarla antes de trabajar con sus objetos usando el comando `USE nombre_bd;`.
{: .prompt-info }

Después de crear una base de datos, debemos seleccionarla para trabajar con ella. Para hacerlo, usamos el siguiente comando:

```sql
USE tienda;
```
{: .nolineno }

> Si estás trabajando con el cliente de terminal de MySQL, puedes personalizar el **prompt** para que muestre el nombre de la base de datos a la que estás conectado, puedes ejecutar el siguiente comando en el cliente de terminal:
> ```shell
> prompt \u@\h [\d]>\_
> ````
> {: .nolineno }
> ![set prompt mysql](mysql/mysql-set-prompt-light.webp){: .light }
> ![set prompt mysql](mysql/mysql-set-prompt-dark.webp){: .dark }
{: .prompt-tip }


### Crear una tabla

Después de crear y seleccionar la base de datos, el siguiente paso es definir las tablas que almacenarán la información. Para este ejemplo, queremos construir una estructura básica compuesta por usuarios, productos y pedidos. Cada tabla utiliza tipos de datos apropiados según el tipo de información que manejará.

El siguiente diagrama ER (Entidad–Relación) muestra la estructura propuesta, junto con las relaciones entre las tablas y las claves primarias (PK) y foráneas (FK) asociadas:

```mermaid
erDiagram
    USUARIOS {
        int id PK
        string nombre
        string email
    }

    PRODUCTOS {
        int id PK
        string nombre
        int precio
        int cantidad
    }

    PEDIDOS {
        int id PK
        int usuario_id FK
        int producto_id FK
        int cantidad
    }

    USUARIOS ||--o{ PEDIDOS : "realiza"
    PRODUCTOS ||--o{ PEDIDOS : "incluye"
```

> En este modelo:
>
> * Cada **usuario** puede realizar varios **pedidos**.
> * Cada **producto** puede estar incluido en múltiples **pedidos**.
> * La tabla **PEDIDOS** actúa como una tabla intermedia que relaciona usuarios y productos, además de almacenar la cantidad solicitada.
{:.prompt-info}

Para ello, utilizamos el comando `CREATE TABLE` y configuramos las columnas con sus tipos correspondientes.


```sql
-- Tabla de usuarios
CREATE TABLE USUARIOS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL
);

-- Tabla de productos
CREATE TABLE PRODUCTOS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  precio INT NOT NULL,
  cantidad INT NOT NULL
);

-- Tabla de pedidos (relaciona usuarios y productos)
CREATE TABLE PEDIDOS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,

  CONSTRAINT fk_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES USUARIOS(id),

  CONSTRAINT fk_producto
    FOREIGN KEY (producto_id)
    REFERENCES PRODUCTOS(id)
);

```
{: .nolineno }

> Si bien usamos tipo `INT` para almacenar precios en este ejemplo, considerando que en **Chile** los valores monetarios se suelen manejar sin decimales porque es una manera más sencilla de representarlos (por ejemplo, representando $10.000 como 10000). Es importante tener en cuenta que, dependiendo del formato de la moneda en un país, podrías necesitar ajustar el tipo de datos. Por ejemplo el tipo de dato `DECIMAL(10, 2)` se usa para almacenar valores monetarios con dos decimales, lo cual es útil para la mayoría de las monedas que manejan centavos.
{: .prompt-info }

### Ver estructura de una tabla

Después de crear una tabla, es común querer revisar su estructura para asegurarte de que las columnas y tipos de datos estén correctos. Para ello, podemos utilizar el comando `DESCRIBE`. Este comando te muestra información detallada sobre la estructura de una tabla, incluyendo el nombre de las columnas, los tipos de datos y otros detalles importantes:

```sql
DESCRIBE productos;
```
{: .nolineno }

![mysql describe productos](mysql/mysql-describe-productos-light.webp){: .light }
![mysql describe productos](mysql/mysql-describe-productos-dark.webp){: .dark }

### Modificar una tabla

El comando `ALTER` se utiliza para modificar la estructura de una tabla ya existente. Con `ALTER`, podemos agregar, eliminar columnas existentes, o cambiar el tipo de datos de las columnas.

### Agregar columna a una tabla

Si necesitamos agregar una nueva columna a una tabla, como por ejemplo, agregar una columna `descripcion` para detallar el producto, lo podemos hacer de la siguiente manera:

```sql
ALTER TABLE productos
ADD descripcion TEXT;
```
{: .nolineno }

#### Modificar el tipo de dato de una columna

Si deseamos cambiar el tipo de datos de una columna (por ejemplo, cambiar el tipo de una columna `precio` de `INT` a `DECIMAL`), usamos el siguiente comando:

```sql
ALTER TABLE productos
MODIFY precio DECIMAL(10, 2);
```
{: .nolineno }

Este comando cambia el tipo de la columna `precio` a `DECIMAL(10, 2)` para permitir decimales en los precios.

### Eliminar una columna de una tabla

Si decides que ya no necesitas una columna específica, puedes eliminarla con el siguiente comando:

```sql
ALTER TABLE productos
DROP COLUMN descripcion;
```
{: .nolineno }

Este comando elimina la columna `descripcion` de la tabla `productos`.

### Renombrar una tabla

Si deseas cambiar el nombre de una tabla, podemos usar el comando `RENAME TABLE`:

```sql
RENAME TABLE productos TO productos_nuevos;
```
{: .nolineno }

Este comando renombra la tabla `productos`a `productos_nuevos`.

### Eliminar una tabla

Si necesitas eliminar una tabla que ya no se usa, puedes hacerlo con el comando `DROP TABLE`:

```sql
DROP TABLE productos;
```
{: .nolineno }

## Comandos de Manipulación de Datos (DML)

Los comandos de manipulación de datos se utilizan para realizar operaciones sobre los datos que se encuentran dentro de las tablas de la base de datos.

![DML](mysql/mysql-dml.webp)

Las operaciones principales en este grupo son el **CRUD**, un acrónimo que representa:

- **C**: Create (Crear): Insertar nuevos registros en la base de datos.
- **R**: Read (Leer): Consultar los datos existentes en la base de datos.
- **U**: Update (Actualizar): Modificar los datos existentes.
- **D**: Delete (Eliminar): ELiminar datos de la base de datos.

Estas operaciones permiten gestionar y manipular los datos almacenados en las tablas, desde agregar nuevos registros hasta modificarlos o eliminarlos según sea necesario.

### Insertar datos en una tabla

Para agregar información a una tabla, usamos el comando `INSERT INTO`:

```sql
INSERT INTO productos (nombre, precio, cantidad)
VALUES ('Camiseta', 19990, 100);
```
{: .nolineno }

Este comando agrega un producto llamado `'Camiseta'` con un precio de `19990` (en el caso de que estemos usando un tipo `INT` para los precios) y una cantidad de `100` unidades en la tabla `productos`.

### Insertar múltiples registros

En lugar de insertar registros uno a uno, podemos insertar múltiples registros al mismo tiempo:

```sql
INSERT INTO productos (nombre, precio, cantidad)
VALUES 
    ('Polerón', 23990, 100),
    ('Pantalón', 24990, 50),
    ('Zapatos', 39990, 75);
```
{: .nolineno }

### Consultar datos de una tabla

Para leer los datos almacenados, usamos el comando `SELECT`. Podemos consultar todos los productos de la siguiente forma:

```sql
SELECT * FROM productos;
```
{: .nolineno }

Este comando muestra todos los registros de la tabla `productos`, es decir, todos los productos con `id`, `nombre`, `precio` y `cantidad`.

![mysql select productos](mysql/mysql-select-productos-light.webp){: .light }
![mysql select productos](mysql/mysql-select-productos-dark.webp){: .dark }

### Actualizar información de registros

Para actualizar información de un producto o registro, podemos usar el comando `UPDATE`. Por ejemplo, para actualizar la cantidad de camisetas disponibles:

```sql
UPDATE productos
SET cantidad = 120
WHERE id = 1;
```
{: .nolineno }

Este comando cambia la cantidad del producto con `id` igual a `1` a `120`unidades.

> Es muy importante el uso de la cláusula `WHERE` al realizar una actualización en una tabla. Si olvidas incluir el `WHERE`, el comando **actualizará todos los registros de la tabla**.
{: .prompt-danger }

### Eliminar datos de una tabla

Si queremos eliminar un producto o registro, usamos el comando `DELETE`:

```sql
DELETE FROM productos WHERE id = 1;
```
{: .nolineno }

> Nunca olvides el `WHERE` en este tipo de operaciones.
{: .prompt-danger }

## Comandos de Control de Datos (DCL)

Los comandos de control de datos se utilizan para gestionar los permisos de los usuarios y la seguridad de la base de datos. En MySQL, los permisos (privilegios) determinan qué operaciones puede realizar un usuario en una base de datos. Administrar correctamente los privilegios es esencial para un administrador de base datos (DBA).

### Conceder privilegios a un usuario

Antes de conceder privilegios, asegúrate de crear un usuario:

```sql
CREATE USER 'mcherrera'@'localhost' IDENTIFIED BY '_user123';
```
{: .nolineno }

En MySQL, para ver los privilegios de un usuario, se puede ejecutar el siguiente comando:

```sql
SHOW GRANTS FOR 'mcherrera'@'localhost';
```
{: .nolineno }

Para otorgar privilegios a un usuario, usamos el comando `GRANT`. Por ejemplo, para darle a un usuario acceso completo a la base de datos `tienda`, puedes ejecutar el siguiente comando:

```sql
GRANT ALL PRIVILEGES ON tienda.* TO 'mcherrera'@'localhost';
```
{: .nolineno }

Este comando concede todos los privilegios sobre la base de datos `tienda` al usuario `mcherrera`.

![Otorgar privilegios a un usuario](mysql/mysql-grant-privileges-dark.webp){: .dark }
![Otorgar privilegios a un usuario](mysql/mysql-grant-privileges-light.webp){: .light }

### Revocar Permisos de un usuario

Para revocar los privilegios de un usuario, se puede utilizar el comando `REVOKE` de la siguiente manera:

```sql
REVOKE ALL PRIVILEGES ON tienda.* FROM 'mcherrera'@'localhost';
```
{: .nolineno }

### Aplicar cambios de privilegios

Después de otorgar o revocar privilegios, es recomendable ejecutar el siguiente comando para que los cambios surtan efecto:

```sql
FLUSH PRIVILEGES;
```
{: .nolineno }

Este comando recarga los privilegios y asegura que se apliquen correctamente.

Si deseas eliminar al usuario y sus privilegios, usamos el comando `DROP USER`:

```sql
DROP USER 'mcherrera'@'localhost';
```
{: .nolineno }

#### Resumen de los comandos aplicados

| Acción|Comando SQL|
|:------|:----------|
|Crear usuario|`CREATE USER 'usuario'@'host' IDENTIFIED BY 'pass';`|
|Ver privilegios de un usuario|`SHOW GRANTS FOR 'usuario'@'host';`|
|Otorgar privilegios|`GRANT ALL PRIVILEGES ON base_de_datos.* TO 'usuario'@'host';`|
|Revocar privilegios|`REVOKE SELECT ON base_de_datos.* FROM 'usuario'@'host';`|
|Aplicar cambios|`FLUSH PRIVILEGES;` |
|Eliminar usuario|`DROP USER 'usuario'@'host';`|
