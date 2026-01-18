---
title: "MySQL - Usar tipos de fechas y tiempos"
icon: icon/mysql.svg
emoji: 🐬
categories: [MySQL, "MySQL-Intermedio"]
tags: [mysql]
pin: true
image:
    path: poster/mysql-trabajar-con-fechas.webp
    lqip: data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSEAAAAABd6CobSOJP9h537umEREh+QNBFlTTthW995p+QwhhksgniwyuTAQhpHO/Eojo/wScS18QmhOrf0VWNoA5xhgLVlA4IDYAAADwAgCdASoUAAsAPzmGulQvKSWjMAgB4CcJZwAAetCIAAD+7Yd0zh+qer1kfKhiOlQMOTAAAAA=
---

El manejo de fechas en MySQL es fundamental para casi cualquier aplicación que requiera la gestión de eventos, pedidos, reportes o registros históricos. En MySQL, contamos con una amplia variedad de funciones que nos permiten no solo obtener la fecha y hora actual, sino también formatear, sumar, restar y comparar fechas de manera precisa. En este post de nivel intermedio, profundizaremos en el uso de estas funciones y exploraremos ejemplos prácticos en un escenario de ecommerce.

## Escenario - Gestión de pedidos en un Ecommerce

Imagina que gestionas una tienda en línea y necesitas analizar datos de pedidos para optimizar tiempos de entrega y generar reportes precisos. Contamos con una tabla llamada `pedidos` que almacena la información relevante.

### 1. Crear la base de datos y la tabla

Para empezar a trabajar, lo primero es crear la base de datos:

```sql
CREATE DATABASE ecommerceDB;
```
{: .nolineno }

### 2. Selecciona la base de datos

```sql
USE ecommerceDB;
```
{: .nolineno }

### 3. Crear la tabla pedidos

```sql
CREATE TABLE IF NOT EXISTS pedidos (
    id INT PRIMARY KEY,
    cliente VARCHAR(100) NOT NULL,
    fecha_pedido DATE NOT NULL,
    fecha_entrega DATE NOT NULL
);
```
{: .nolineno }

### 4. Datos de la tabla pedidos

{% tabs data_pedidos %}
{% tab data_pedidos Datos %}
|id|cliente|fecha_pedido|fecha_entrega|
|:-|:-|:-|:-|
|1|Cliente A|2025-02-10|2025-02-15|
|2|Cliente B|2025-02-12|2025-02-20|
|3|Cliente C|2025-02-15|2025-02-22|
|4|Cliente D|2025-02-18|2025-02-25|
|5|Cliente E|2025-02-20|2025-02-27|
{% endtab %}
{% tab data_pedidos SQL %}
Inserta los datos, con el siguiente comando:

```sql
INSERT INTO pedidos (id, cliente, fecha_pedido, fecha_entrega) VALUES
    (1, 'Cliente A', '2025-02-10', '2025-02-15'),
    (2, 'Cliente B', '2025-02-12', '2025-02-20'),
    (3, 'Cliente C', '2025-02-15', '2025-02-22'),
    (4, 'Cliente D', '2025-02-18', '2025-02-25'),
    (5, 'Cliente E', '2025-02-20', '2025-02-27');
```
{: .nolineno }
{% endtab %}
{% endtabs %}

> MySQL almacena las fechas siguiendo el estándar [**ISO_8601**](https://es.wikipedia.org/wiki/ISO_8601){: target='_blank' } lo que quiere decir en el formato `YYYY-mm-dd`.
{: .prompt-info }

## Consultas basadas en fechas

### 1. Determina la cantidad de días entre el pedido y la entrega

```sql
SELECT id, cliente, 
    fecha_pedido, fecha_entrega,
    DATEDIFF(fecha_entrega, fecha_pedido) AS dias_entrega
FROM pedidos;
```
{: .nolineno }

### 2. Identificar pedidos con retraso

Si el plazo de entrega estándar es de 5 días, filtra aquellos pedidos que se entregaron más tarde:

```sql
SELECT id, cliente, 
    fecha_pedido, fecha_entrega,
    DATEDIFF(fecha_entrega, fecha_pedido) AS dias_entrega
FROM pedidos
WHERE fecha_entrega > DATE_ADD(fecha_pedido, INTERVAL 5 DAY);
```
{: .nolineno }

### 3. Agrupar pedidos por semana

Generar un reporte semanal de pedidos, con la función `WEEK()` para agrupar:

```sql
SELECT
    WEEK(fecha_pedido) AS semana,
    COUNT(*) AS total_pedidos
FROM pedidos
GROUP BY WEEK(fecha_pedido)
ORDER BY semana ASC;
```
{: .nolineno }

### 4. Verificar pedidos realizados en fin de semanas

Identifica si un pedido se realizó en fin de semana usando la función `WEEKDAY()` (donde 5 corresponde a sábado y 6 a domingo):

```sql
SELECT
    id,
    cliente,
    fecha_pedido,
    CASE
      WHEN WEEKDAY(fecha_pedido) IN (5, 6) THEN 'Fin de Semana'
      ELSE 'Día Laboral'
    END AS tipo_dia
FROM pedidos;
```
{: .nolineno }

## **Resumen**

La siguiente tabla contiene algunas de las funciones de fecha y hora que soporta MySQL:

|Nombre|Descripción|
|:-----|:----------|
|[`ADDDATE()`](#adddate)|Agrega valores de tiempo (intervalos) a un valor de fecha.|
|[`CURDATE()`](#curdate)|Obtiene la fecha actual sin la parte de la hora.|
|[`CURRENT_DATE`, `CURRENT_DATE()`](#curdate)|Son sínonimos de `CURDATE()`|
|[`DATE()`](#date)|Extrae la parte de la fecha de una expresión de fecha o fecha y hora.|
|[`DATEDIFF()`](#datediff)|Resta dos fechas.|
|[`DATE_FORMAT()`](#date_format)|Formatear a una fecha de acuerdo a un formato especificado.|
|[`EXTRACT()`](#extract)|Extraer parte de una fecha.|


### **ADDDATE**

La función `ADDDATE()` es similar a `DATE_ADD()`, y se utiliza para agregar un intervalo de tiempo a una fecha. En términos de funcionalidad, ambas hacen lo mismo, pero la sintaxis es ligeramente diferente-

**Sintaxis de `ADDDATE()`**

```sql
ADDDATE(fecha, INTERVAL valor unidad)
```
{: .nolineno }

- **fecha**: La fecha a la que le vamos agregar el intervalo
- **valor**: La cantidad de unidades que deseamos agregar. 
- **unidad**: El tipo de unidad, como `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`, entre otros.

#### **Ejemplos de Uso**

**Agregar Días a una Fecha**

Añadir **31 días** a una fecha:

```sql
SELECT ADDDATE('2024-01-02', INTERVAL 31 DAY);
```
{: .nolineno }

- **Resultado**: `2024-02-02`
- **Acción**: suma 31 días a la fecha `2024-12-01`

**Agregar Meses a una Fecha**

Añadir 3 meses a una fecha:

```sql
SELECT DATE_ADD('2020-12-01', INTERVAL 3 MONTH);
```
{: .nolineno }

- Resultado: `2021-03-01`
- Acción: suma 3 meses a la fecha `2020-12-01`

> La función `ADDDATE()` es útil para cálculos de fechas futuras o pasadas a partir de una fecha base.
{: .prompt-info }


### **CURDATE**

Devuelve el valor actual de la fecha en el formato `YYYY-MM-DD` o `YYYYMMDD` dependiendo si la función se usa en el contexto de cadena o numérico.

```sql
SELECT CURDATE();
```
{: .nolineno }

#### **Ejemplos de Uso**

**Insertar en una Tabla usando la función `CURDATE()`**

Insertar en la tabla de usuarios la fecha en la que se registró cada usuario:

```sql
/* Considerando tener la siguiente tabla */
CREATE TABLE `users`(
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `up` DATE,
  `status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* Usamos la función CURDATE() en el campo up: */
INSERT INTO `users` (`user_id`, `username`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', CURDATE(), 1);
```
{: .nolineno }

Al hacer un `SELECT` a la tabla `users`, obtenemos el registro guardado anteriormente y en el campo `up` muestra la fecha actual de ese momento en que se grabo en la base de datos el registro:

```
+------------+----------+------------+--------+
| user_id    | username | up         | status |
+------------+----------+------------+--------+
| 1010010101 | Jhon Doe | 2023-12-05 |      1 |
+------------+----------+------------+--------+
```
{: .noheader .nolineno }  

### **DATE**

Extrae la parte de la fecha en una expresión de fecha y hora.

#### **Ejemplos de Uso**

**Extraer la Fecha de un Campo Fecha y Hora**

Muestra la fecha de nacimiento en un formato amigable, y extrae la fecha del registro:

```sql
CREATE TABLE `users`(
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `birthday` DATE NOT NULL,
  `up` DATETIME NOT NULL,
  `status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* Insertar valores usando la función CURRENT_TIMESTAMP en el campo up */
INSERT INTO `users` (`user_id`, `username`, `birthday`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', '1990-11-05', CURRENT_TIMESTAMP(), 1);

/* Mostrar solo la fecha del campo up */
SELECT username, DATE_FORMAT(birthday, '%W %M %Y') as birthday,
DATE(up) as up FROM users;
```
{: .nolineno }


### **DATEDIFF**

La función `DATEDIFF()` como ya sabemos, se utiliza para calcular la diferencia en días entre dos fechas, devuelve el valor entero que indica el número de días entre dos fechas, donde el primer argumento es la **fecha futura** y el segundo argumento es la **fecha a evaluar**.

> Ten en cuenta que si inviertes el orden de las fechas, es decir, colocas la fecha a evaluar como primer argumento y la fecha futura como segundo argumento, el resultado será negativo, ya que la operación sería (`fecha_a_evaluar` - `fecha_futura`).
{: .prompt-info }

#### **Ejemplo de uso**

**1.** Calcular el número de días entre el **1 de enero de 2023** y el **5 de diciembre de 2023**:

```sql
SELECT DATEDIFF('2024-12-05', '2024-01-01'); /* 339 */
```
{: .nolineno }

Esta sentencia retornará el número **339** que es la diferencia entre las dos fechas indicadas.

> La función no tiene en cuenta la hora, minutos o segundos, solo las fechas. Si alguna de las fechas es `NULL`, el resultado será `NULL`.
{: .prompt-info }

**2.** Filtrar registros basados en la diferencia de fechas

Si tenemos una tabla con registros de usuarios y sus fechas de inscripción, y queremos obtener solo los usuarios que se registraron hace más de 30 días:

```sql
SELECT * FROM usuarios
WHERE DATEDIFF(NOW(), fecha_inscripcion) > 30;
```
{: .nolineno }

Esta sentencia devolverá todos los usuarios donde la columna `fecha_inscripcion` es anterior a hace más de 30 días respecto a la fecha actual.

### **DATE_FORMAT**

> `DATE_FORMAT()` solo cambia la forma en que se muestra la fecha, no altera el valor subyacente a la fecha en la base de datos.
{: .prompt-info }

#### **Ejemplos de uso**

**1.** Formatear una fecha en formato `DD/MM/YYYY`:

```sql
SELECT DATE_FORMAT('2024-11-07', '%d/%m/%Y');
```
{: .nolineno }

**2.** Obtener el nombre del mes y del día:

```sql
SELECT DATE_FORMAT('2024-11-07', '%W, %M %d, %Y');
```
{: .nolineno }

### **EXTRACT**

La función `EXTRACT()` utiliza los mismos argumentos que la función `DATE_ADD()` o `DATE_SUB()`, pero extrae partes de la fecha en lugar de realizar operaciones ariméticas de fechas.

**Sintaxis de `EXTRACT()`**

```sql
EXTRACT(unidad FROM fecha)
```
{: .nolineno }

- **unidad**: El tipo de unidad, como `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`, entre otros.
- **fecha**: La fecha a la que le vamos extraer la unidad especificada.

#### **Ejemplos de Uso**

```sql
SELECT EXTRACT(YEAR FROM '2022-03-02');
SELECT EXTRACT(MONTH FROM CURDATE());
SELECT EXTRACT(MINUTE FROM CURDATE());
```
{: .nolineno }

### **GET_FORMAT**

Devuelve una cadena de formato. Esta función `GET_FORMAT()` es útil en combinación con `DATE_FORMAT()` y `STR_TO_DATE()`. Los valores posibles para el primer argumento dan como resultado varias cadenas de formato posibles.

**Tabla de especificadores**

|Llamada de función|Resultado|Ejemplo|
|:-----------------|:--------|:------|
|`GET_FORMAT(DATE, 'USA')`|`'%m.%d.%Y'`|`'12.30.2021'`|
|`GET_FORMAT(DATE, 'JIS')`|`'%Y-%m-%d'`|`'2021-12-30'`|
|`GET_FORMAT(DATE, 'ISO')`|`'%Y-%m-%d'`|`'2021-12-30'`|
|`GET_FORMAT(DATE, 'EUR')`|`'%d.%m.%Y'`|`'30.12.2021'`|
|`GET_FORMAT(DATE, 'INTERNAL')`|`%Y%m%d'`|`20211230`|
|`GET_FORMAT(DATETIME, 'USA')`|`'%Y-%m-%d %H.%i.%s'`|`'2021-12-30 07.45.14'`|
|`GET_FORMAT(DATETIME, 'JIS')`|`'%Y-%m-%d %H:%i:%s'`|`2021-12-30 07:45:14`|
|`GET_FORMAT(DATETIME, 'ISO')`|`'%Y-%m-%d %H:%i:%s'`|`2021-12-30 07:45:14`|
|`GET_FORMAT(DATETIME, 'EUR')`|`'%Y-%m-%d %H.%i.%s'`|`2021-12-30 07.45.14`|
|`GET_FORMAT(DATETIME, 'INTERNAL')`|`'%Y%m%d%H%i%s'`|`20211230074514`|


## **Más Ejercicios Prácticos**

### **Buscar Registros entre dos Fechas**

Supongamos que tenemos una tabla `eventos` con una columna `fecha_evento` de tipo `DATE` y queremos obtener todos los eventos que ocurren entre dos fechas específicas. Podemos usar la cláusula `BETWEEN` para realizar la consulta:

```sql
SELECT * FROM eventos
WHERE fecha_evento BETWEEN '2023-01-01' AND '2023-12-31';
```
{: .nolineno }

Esta sentencia devolverá todos los eventos donde la columna `fecha_evento` esté dentro del rango **1 de enero del 2023** al **31 de diciembre de 2023**.

> La cláusula `BETWEEN` es inclusiva, lo que significa que las fechas inicial y final también se incluyen en el resultado.
{: .prompt-info }

### **Buscar Registros después de una Fecha Específica**

Si solo quisieramos obtener los eventos que ocurren después de una fecha específica, podemos usar el operador mayor que (`>`):

```sql
SELECT * FROM eventos
WHERE fecha_evento > '2023-06-01';
```
{: .nolineno }

Esta sentencia te devolverá todos los eventos que ocurren después del **1 de junio de 2023**.


### **Buscar Registros anteriores a una Fecha específica**

De manera similar al ejercicio anterior, podemos buscar los eventos que ocurren antes de una fecha específica usando el operador de menor que (`<`):

```sql
SELECT * FROM eventos
WHERE fecha_evento < '2023-06-01';
```
{: .nolineno }

Esta sentencia devolverá todos los eventos que ocurren **antes del 1 de junio del 2023**.

### **Filtrar Eventos del mes Actual**

Si queremos obtener todos los eventos que ocurren en el mes actual, podemos usar la función `MONTH()` y `YEAR()` para extraer el mes y el año de la fecha:

```sql
SELECT * FROM eventos
WHERE MONTH(fecha_evento) = MONTH(CURDATE())
AND YEAR(fecha_evento) = YEAR(CURDATE());
```
{: .nolineno }

Esta sentencia te devuelve todos los eventos donde la columna `fecha_evento` corresponda al **mes** y **año** actual.

{% include circle-line.html %}

## Notas Finales

Estos ejercicios prácticos nos ayudan a familiarizarnos con las funciones y operadores relacionados con fechas en MySQL. Desde realizar búsquedas entre fechas hasta trabajar con funciones de manipulación de fechas, estas habilidades son esenciales para cualquiera que trabaje con datos temporales en bases de datos.
