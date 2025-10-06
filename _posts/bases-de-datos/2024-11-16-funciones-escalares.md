---
title: "Funciones escalares en SQL Server"
categories: [Bases de Datos Relacionales, "SQL Server"]
tags: [Bases de Datos, "Relacionales", "SQL"]
image:
   path: poster/sql-server-funciones-ecalares.webp
   lqip: data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoUAAoAPzmIulOvKSWisAgB4CcJYwCuHBuDM9O4IBSAAPb0pCMXQPNKwFHieDMpwzltavl8Ea1AXfcdri3lpATAAAA=
permalink: /sqlserver/funciones-escalares
pin: true
---

En SQL Server, las funciones escalares son rutinas que devuelven un único valor (numérico, texto, fecha, etc.) definido en la cláusula `RETURNS`.

## Crear una función escalar

La sintaxis básica para definir una función escalar es la siguiente:

```sql
CREATE FUNCTION nombreFuncion (@param1, @param2...)
RETURNS tipo_de_dato
AS
BEGIN
    BLOQUE_DE_CODIGO
    RETURN EXPRESION
END
```
{: .nolineno }


Por ejemplo, si quieres crear una nueva función que retorne el cuadrado de un número dado por parámetro, la formula sería la siguiente:

```sql
CREATE FUNCTION elevarAlCuadrado(@numero INT)
RETURNS INT
AS
BEGIN
    DECLARE @elevado INT; -- Variable interna que sólo tiene efecto dentro de este bloque
    SET @elevado = @numero * @numero; -- Operación para obtener el cuadrado del número dado
    RETURN @elevado;
END
GO
```
{: .nolineno }

> Ojo, si tienes instrucciones antes de la creación de la función, **se debe anteponer `GO`** para separar los lotes de ejecución, de lo contrario el script fallará.
{: .prompt-warning }


**1. En SQL Server Management Studio (SSMS):**

* Abre el **Explorador de Objetos**.
* Expande tu base de datos → `Programación` → `Funciones`  → `Funciones escalares` (según el idioma de tu instalación).

![explorador de objetos](sqlserver/sqlserver-ssms-explorer-scalar-function.webp)

* Ahí aparecerán todas las funciones escalares creadas en la base de datos.

**2. En VS Code con extensiones:**

* Conecta tu base de datos usando una extensión como [**SQL Server (mssql)**](https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql){:target="_blank"}.
* Abre el panel de **SQLTools Explorer**.
* Expande tu base de datos → `Programmability` → `Functions`  → `Scalar-valued Functions`.
* Podrás ver tus funciones, tanto escalares como de otro tipo, de manera similar a SSMS.

![explorador de objetos](sqlserver/sqlserver-vscode-explorer-scalar-function.webp)

> De esta forma, ya sea que trabajes en SSMS o en VS Code, tienes fácil acceso a tus funciones para revisarlas, modificarlas o eliminarlas.
{: .prompt-tip }

## Usar la función

Ahora que tenemos la función creada, podemos invocarla directamente pasando un número como parámetro y obtener de inmediato su valor al cuadrado:

```sql
SELECT dbo.elevarAlCuadrado(7) AS cuadrado;
```

Resultado:

| cuadrado |
| -------- |
| 49       |


También podemos aplicarlo sobre una colección de números, incluso sin necesidad de tener una tabla creada, usando `VALUES`:

```sql
SELECT numero, dbo.elevarAlCuadrado(numero) AS cuadrado
FROM (VALUES (2), (3), (5), (10)) AS t(numero);
```

Resultado:

| numero | cuadrado |
| ------ | -------- |
| 2      | 4        |
| 3      | 9        |
| 5      | 25       |
| 10     | 100      |


> En SQL Server, `dbo` es el **esquema por defecto** de la base de datos (Database Owner).
> Al invocar una función o tabla con `dbo.`, le indicamos al motor exactamente **en qué esquema buscar el objeto**, evitando ambigüedades si existen otros esquemas.
> Además, especificar el esquema mejora el **rendimiento** porque SQL Server no tiene que buscar en todos los esquemas disponibles.
>
> Por ejemplo:
>
> ```sql
> SELECT dbo.elevarAlCuadrado(7);
> ```
> {: .nolineno .noheader .fit-content }
>
> Aquí `dbo` indica que la función `elevarAlCuadrado` se encuentra dentro del esquema por defecto.
> Si hubieras creado la función en otro esquema, por ejemplo `utilidades`, deberías invocarla como:
>
> ```sql
> SELECT utilidades.elevarAlCuadrado(7);
> ```
> {: .nolineno .noheader .fit-content }
{: .prompt-info }

## Otros ejemplos

En Chile, la tasa estándar de IVA es del **19%**. Podemos crear una función escalar que calcule el IVA de un precio neto y retorne su IVA, acorde a la práctica contable:

```sql
CREATE FUNCTION calcularIVA(@precioNeto MONEY)
RETURNS INT
AS
BEGIN
    RETURN @precioNeto * 0.19; -- Calcula el IVA
END
GO
```

**Uso con un valor directo:**

```sql
SELECT dbo.calcularIVA(50000) AS IVA;
```

**Resultado esperado:**

| IVA  |
| ---- |
| 9500 |

> Esta función puede ser combinada con otras funciones escalares, por ejemplo para calcular **precio total con IVA**:
![Funciones escalares](sqlserver/sql-server-funciones-ecalares-iva-precio-total.webp)
{: .prompt-tip }