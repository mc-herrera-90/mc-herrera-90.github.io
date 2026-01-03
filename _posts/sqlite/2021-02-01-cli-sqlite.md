---
title: "Command Line For SQLite3"
categories: [SQLite, SQLite-CLI]
tags: [SQLite, SQL]
image:
  path: poster/sqlite-cli-shell.webp
  lqip: data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBUAAAABF9D/iAgQZNtMYmi7v88FIvqfSy4AVlA4IFoAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJYgCdABuxpDp2c2dbBoAA/mFM6qUC24fxX3gBWhW85NEtVhEZh7nBiA92rtoJgZGSQbGINpYYi7eesK2p6wp84AA=
---

SQLite incluye **`sqlite3`**, una herramienta de línea de comandos que permite interactuar directamente con bases de datos SQLite y ejecutar sentencias SQL. Es ideal para **pruebas rápidas, consultas y tareas de administración** sin necesidad de una interfaz gráfica.

## Instalación

Esta herramienta de línea de comandos (CLI) está disponible para **Windows, macOS y Linux**. A continuación, revisa los **siguientes métodos de instalación** según el sistema operativo.

{% tabs install_sqlite %}
{% tab install_sqlite <i class="fa-brands fa-windows"></i> Windows %}
1. Ingresa al sitio oficial: [https://www.sqlite.org/download.html](https://www.sqlite.org/download.html){:target='_blank'}
2. Descarga el archivo **sqlite-tools** correspondiente a la arquitectura de tu sistema (32 o 64 bits), por ejemplo: `sqlite-tools-win32-x86`.
3. Extrae el archivo `.zip` en una carpeta, por ejemplo `C:\sqlite`.
4. Abre la terminal ( símbolo del sistema o PowerShell ), navega a esa carpeta y ejecuta `sqlite3` para iniciar el programa.

{: .prompt-info }
> __Opcional__: Agrega la ruta de SQLite a las variables de entorno para poder usarlo desde cualquier ubicación del sistema.
{% endtab %}
{% tab install_sqlite <i class="fa-brands fa-apple"></i> macOS %}
Puedes instalar SQLite fácilmente usando Homebrew:

```terminal
brew install sqlite
```
{% endtab %}
{% tab install_sqlite <i class="fa-brands fa-linux"></i> Linux %}
En la mayoría de las distribuciones Linux, SQLite está disponible en los repositorios oficiales:

```terminal
sudo apt update
sudo apt install sqlite3
```
{% endtab %}
{% endtabs %}

Después, solo escribe `sqlite3` en la terminal para iniciar una sesión en memoria.

![Configuración actual de sqlite](sqlite/dot-command-show-light.webp){:.light}
![Configuración actual de sqlite](sqlite/dot-command-show-dark.webp){:.dark}
_Configuración sqlite3 (Ubuntu)_

## ¿Qué podemos hacer con la línea de comandos de SQLite3?

Esta sección describe las operaciones más comunes al trabajar con SQLite desde la línea de comandos, siguiendo el flujo natural de creación, modificación y gestión de una base de datos.

{% include accordion.html
  id="sqlite-operaciones"
  items=site.data.sqlite_operaciones
%}

## Más comandos especiales

Para ver una lista de los comandos de puntos disponibles, puedes escribir `.help` sin argumentos o `help TOPIC` para obtener información detallada sobre un `TOPIC` en específico. A continuación, te dejo una tabla con algunos comandos especiales disponibles.

|Comando|Descripción|Valor predeterminado|
|:------|:----------|:-------------------|
|`.archive`|Administrar archivos SQL.|.|
|`.auth`|Muestra devoluciones de llamadas|OFF|
|`.backup` **?DB? FILE**|Crea un respaldo de la `DB` actual en un `FILE` indicado.|MAIN|
|`.bail` **ON** \| **OFF**|Detener después de un error.|OFF|
|`.binary` **ON** \| **OFF**|Activa o desactiva la salida binaria.|ON|
|`.cd` **DIR**|Cambiar de ubicación a `DIR` especificado.|.|
|`.changes` **ON** \| **OFF**|Mostrar número de filas afectadas por SQL.|ON|
|`.clone` **NEWDB**|Clona la base de datos actual en `NEWDB` (directorio)|.|
|`.databases`|Lista las bases de datos adjuntas|.| 


## Funciones de E/S de archivos

La función `readfile(x)` lee todo el contenido de un archivo y devuelve ese contenido como un `BLOB`. Esto se puede usar para cargar contenido en una tabla. Por ejemplo:

```sql
CREATE TABLE imagenes(nombre TEXT,tipo TEXT,imagen BLOB);

INSERT INTO imagenes(nombre,tipo,imagen)
VALUES(
   'icon_folder',
   'png',
   readfile('C:\\Users\\home\\Pictures\\folder.png')
);
```
{: .nolineno }

La función `writefile(x, y)` crea un archivo llamado (`x`) y escribe el `BLOB` (`y`) y devuelve el número de bytes escritos:

```sql
SELECT writefile('folder.png', imagen)
FROM imagenes WHERE nombre = 'icon_folder';
```
{: .nolineno }

## Analizar archivos CSV

Con SQLite3 CLI, puedes importar archivos CSV fácilmente y consultarlos con SQL.

> ¡Ideal para analizar datos rápido sin herramientas adicionales!
{: .prompt-tip }

Ejecuta `sqlite3` sin argumentos. Esto iniciará **SQLite en la memoria** en vez de crear una base de datos en el disco.

{% tabs ejemplo_import_csv %}
{% tab ejemplo_import_csv <i class="fa-solid fa-terminal"></i> SQLite3 CLI %}
```sql
.mode csv
.import ventas.csv ventas
.tables
.mode table
SELECT * FROM ventas LIMIT 5;
```
{: .nolineno }

__Resultado:__

![Importar y analizar CSV](sqlite/importar-y-analizar-csv-light.webp){:.light}
![Importar y analizar CSV](sqlite/importar-y-analizar-csv-dark.webp){:.dark}

__Ver las primeras 5 filas__:
```sql
SELECT * FROM ventas LIMIT 5;
```
{: .nolineno }

__Total de ventas por categoría__:
```sql
SELECT 'Categoría', SUM(Total) AS Ventas_Totales
FROM ventas
GROUP BY 'Categoría';
```
{: .nolineno }

__Ventas en enero de 2024__:
```sql
SELECT * FROM ventas WHERE Fecha_Venta LIKE '2024-01%';
```
{: .nolineno }

__Productos más caros vendidos__:
```sql
SELECT * FROM ventas ORDER BY Precio DESC LIMIT 5;
```
{: .nolineno }

__Guardar los resultados en un nuevo CSV__
: Si después de analizar los datos quieres guardar los resultados en otro archivo CSV, usa:

```sql
.mode csv
.output resumen.csv

SELECT 'Categoría', SUM(Total) AS Ventas_Totales
FROM ventas GROUP BY 'Categoría';

.output stdout -- Volver a cambiar la salida al modo normal
```
{: .nolineno }

Esto creará un archivo **resumen.csv** con el total de ventas por categoría.  
{% endtab %}
{% tab ejemplo_import_csv <i class="fa-solid fa-file-csv"></i> Archivo CSV %}
Copia y guarda este contenido en un archivo llamado `ventas.csv`:
```
Producto,Categoría,Precio,Cantidad,Total,Fecha_Venta
Laptop,Electrónica,1200000,2,2400000,2023-01-15
Teléfono,Electrónica,850000,1,850000,2023-02-20
Teclado,Accesorios,46000,3,138000,2023-03-10
Mouse,Accesorios,25500,2,51000,2023-04-05
Monitor,Electrónica,300000,1,300000,2023-05-12
Impresora,Oficina,200000,1,200000,2023-06-25
Escritorio,Muebles,450000,1,450000,2023-07-30
Silla de oficina,Muebles,220000,2,440000,2023-08-18
Cámara,Electrónica,670000,1,670000,2023-09-22
Auriculares,Accesorios,75000,4,300000,2023-10-10
Laptop,Electrónica,1300000,1,1300000,2023-11-15
Teléfono,Electrónica,900000,2,1800000,2023-12-05
Teclado,Accesorios,50000,1,50000,2024-01-08
Mouse,Accesorios,30000,3,90000,2024-02-14
Monitor,Electrónica,310000,2,620000,2024-03-20
Impresora,Oficina,215000,1,215000,2024-04-02
Escritorio,Muebles,480000,1,480000,2024-05-09
Silla de oficina,Muebles,250000,3,750000,2024-06-15
Cámara,Electrónica,700000,2,1400000,2024-07-21
Auriculares,Accesorios,81000,1,81000,2024-08-30
```
{:file='ventas.csv'}
{% endtab %}
{% endtabs %}


## Exportar a otros formatos

SQLite permite exportar a otros formatos como __JSON__, __CSV__. Esto resulta útil cuando necesitas compartir información fuera de la base de datos.

### Exportar a JSON

SQLite permite exportar directamente a JSON si usas una versión 3.33 o superior, puedes exportar tus datos a JSON con el siguiente comando:

```bash
sqlite3 mi_base.db -json "SELECT * FROM ventas;" > ventas.json
```
{:.nolineno}

### Expotar a CSV

El formato CSV es ideal para hojas de cálculo u otras herramientas que aceptan datos tabulares, puedes exportar a CSV con el siguiente comando:

```bash
sqlite3 -header -csv mi_base_db "SELECT * FROM ventas;" > ventas.csv
```
{:.nolineno}

- `-header`: incluye la fila con nombres de columnas.
- `-csv`: define el formato delimmitado por comas.

## Configuraración permanente

Para definir opciones de forma permanente al ejecutar sqlite3, crea un archivo de configuración `.sqliterc` en el directorio del usuario. Ejemplo:

```terminal
nano ~/.sqliterc
```

Luego añade las opciones que quieres que se apliquen siempre:

```
.headers on
.mode table
.nullvalue NULL
PRAGMA foreign_keys = ON;
```
{: .nolineno file=".sqliterc"}

Al abrir nuevamente el programa se aplican esas configuraciones.

![aplicar las configuraciones](sqlite/configuracion-permanente-sqliterc-light.webp){: .light }
![aplicar las configuraciones](sqlite/configuracion-permanente-sqliterc-dark.webp){: .dark }

{% include circle-line.html %}

La línea de comandos de SQLite3 es una herramienta ligera que te permite administrar bases de datos sin necesidad de instalar programas gráficos. Es __ideal para quienes están aprendiendo__ SQL.