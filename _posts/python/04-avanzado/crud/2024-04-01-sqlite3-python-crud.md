---
title: Python - Crud Sqlite3
categories: [Python, Python_04-Avanzado]
mermaid: true
tags: [python, sqlite3]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Trabajar con bases de datos es una de las tareas más comunes en el desarrollo de aplicaciones. Python incluye soporte nativo para SQLite3, una base de datos liviana, embebida y perfecta para prototipos, aplicaciones pequeñas y proyectos educativos.

> Usar SQLite3 en Python es simple porque no requiere instalar un servidor externo: basta con importar el módulo y comenzar a ejecutar operaciones CRUD (crear, leer, actualizar y eliminar registros).
{: .prompt-info }

Antes de escribir código, es importante entender que Python define un estándar para interactuar con bases de datos: la __Python Database API Specification__ (DB-API), que es la base del módulo `sqlite3`.

## ¿Qué es el Python DB-API?

Python DB-API es un conjunto de estándares recomendados por un grupo de interés especial para la estandarización de módulos de base de datos.

Los estándares DB-API se modificaron aún más en DB-API 2.0 mediante otra propuesta de mejora que se específica en el [PEP-249](https://peps.python.org/pep-0249/){: target='_blank' } que establece cómo deben funcionar las librerías de conexión a bases de datos en Python.

> No es una librería específica, sino un estándar que todas las librerías de conexión deben seguir, incluyendo `sqlite3`, `pymysql`, `psycopg2`, entre otras.
{:.prompt-info}

El objetivo es que, sin importar el motor de base de datos, el programador trabaje siempre con la misma estructura básica:

### Conceptos clave de la DB-API

Conexión (connection)
: Representa el enlace a la base de datos. Desde aquí puedes iniciar transacciones, ejecutar comandos o cerrar la conexión.

Cursor (cursor)
: Es el objeto que permite ejecutar sentencias SQL y recuperar resultados.
: En la DB-API, casi todas las operaciones pasan por un cursor.

## Conexión a la base de datos

De acuerdo con los estándares establecidos, el primer paso del proceso es obtener la conexión a través del objeto encargado de gestionar la base de datos. Por ejemplo:

```python
import sqlite3

db_connection = sqlite3.connect("cars.db")
```
{: file="demo-conexion.py" }

En el ejemplo:

- Importamos el módulo `sqlite3`
- Ejecutamos el método `connect()` para crear un objeto de conexión:

### Métodos de un objeto Conexión

El método `connect()` devuelve un objeto de conexión que hace referencia a una base de datos existente o crea una nueva si esta no existe.

Los siguientes métodos del objeto conexión son útiles:

|Método|Descripción|
|:-----|:----------|
|`cursor()`|Devuelve un objeto cursor que usa esta conexión.|
|`commit()`|Compromete explícitamente cualquier transacción pendiente a la base de datos.|
|`rollback()`|Este método opcional hace que una transacción se retrotraiga al punto de partida.|
|`close()`|Cierra la conexión a la base de datos de forma permanente.|

> Los métodos `commit()` y `rollback()`
> del objeto de conexión garantizan el control de transacciones:
> 
> ```python
> import sqlite3
> 
> db = sqlite3.connect("my_db.db")
> try:
>   db.execute("Query")
>   db.commit() # confirmamos explícitamente los cambios
> else:
>   print("Error")
>   db.rollback() # nos volvemos al punto de partida
> db.close()
> ```
{: .prompt-info }

## Crear un Cursor

Un cursor es un objeto de Python que nos permite trabajar con la base de datos, actúa como un identificador para una consulta SQL determinada.

Para crear un cursor se requiere el objeto de conexión de la siguiente forma:

```python
import sqlite3

db_connection = sqlite3.connect('my_db.db')
cursor = db_connection.cursor()
```
{: file="demo-cursor.py" }

### Métodos de un objeto Cursor

Los siguientes métodos del objeto cursor son útiles:

|Método|Descripción|
|:-----|:----------|
|`execute()`|Ejecuta la consulta SQL como parámetro de cadena.|
|`executemany()`|Ejecuta la consulta SQL usando un conjunto de parámetros en la lista de tuplas.|
|`fetchone`|Obtiene la siguiente fila del conjunto de resultado de la consulta.|
|`fetchall()`|Obtiene todas las filas restante del conjunto de resultados de la consulta.|
|`close()`|Cierra el objeto cursor.|

## Operaciones CRUD

Ahora vamos a crear un CRUD completo y, para hacerlo más práctico, lo desarrollaremos como una aplicación de consola. ¿Suena entretenido? <i class="fa-regular fa-face-grin-tongue-wink fa-bounce"></i>

Para facilitarnos la existencia, vamos a modularizar el código, comenzando por tener en un archivo `db.py` lo relacionado con la creación y configuración de la base de datos:

{% include file-viewer.html files=site.data.python.sqlite3 name="python-sqlite3" %}

Entendamos el código anterior, sobretodo las funciones:

**`open_db`**
: Se encargará de crear o abrir la base de datos usando un bloque `try/except` para capturar posibles errores.

**`run_query`**
: Esta función va a utilizar la conexión que retorna `open_db` y con ella podemos realizar consultas a la base de datos.

**`create_schema()`**
: Esta función se encargará de crear el esquema de la base de datos usando el archivo `schema.sql`.

Para comenzar con las operaciones del CRUD, en un archivo `crud.py` definiremos las funciones de las 4 operaciones.

### 1. <span class="badge bg-secondary">C</span> -> CREATE

Empezando con la **C** de **CREATE**, vamos a crear o insertar algunos registros en la base de datos, los datos que queremos insertar se pueden obtener de diferentes maneras:

#### Insertar Datos Manualmente o en Crudo

Podemos ejecutar un comando SQL directamente para insertar datos. Aquí un ejemplo:

```python
import db

def insert_data():
  insert_query = "INSERT INTO cars (brand, model) VALUES(?, ?)"
  cars_data = [
      ('Chevrolet', 'Chevrolet Camaro'),
      ('Chevrolet', 'Chevrolet Captiva'),
      ('Fiat', 'Fiat 125 Mirafiori'),
      ('Fiat', 'Fiat 125 Centurion'),
      ('Honda', 'Honda CR-V'),
      ('Honda', 'Honda CR-X del Sol'),
      ('Honda', 'Honda CR-Z')
  ]
  result = db.run_query(insert_query, cars_data, True)
  print("Record inserted successfully into table, records: ",result.rowcount)

if __name__ == "__main__":
  insert_data()
```
{: file="crud.py" }

Como podemos observar, cuando ejecutamos la función `run_query()` del módulo `db` que definimos anteriormente, le estamos pasando los siguientes parámetros:
- `insert_query` (la consulta).
- `cars_data` (una lista de tuplas con los datos).
- `True` (para decirle que este cursor se ejecute con el método `executemany()` para crear múltiples registros).


#### Insertar Datos desde un Archivo CSV

Primero, creamos un archivo `cars.csv` con el siguiente contenido. Este archivo contendrá los datos de varios automóviles:

```
brand, model
Chevrolet, Chevrolet Camaro
Chevrolet', 'Chevrolet Captiva
Fiat, Fiat 125 Mirafiori
Fiat, Fiat 125 Centurion
Honda, Honda CR-V
Honda, Honda CR-X del Sol
Honda, Honda CR-Z
```
{: file="cars.csv" }

Ya luego escribimos nuevamente la función, ahora importando el módulo **csv** que viene incluido en Python para leer y escribir archivos CSV:


```python
import db, csv

def insert_data():
  insert_query = "INSERT INTO cars (brand, model) VALUES(?, ?)"
  record_count = 0

  with open("cars.csv") as file:
    reader = csv.reader(file)
    next(reader) # Saltamos la cabecera
    for fila in reader:
      db.run_query(insert_query, fila)
      record_count += 1
    print("Record inserted successfully into table, records: ", record_count)

if __name__ == "__main__":
  insert_data()
```
{: file="crud.py" }

#### Insertar Datos Dinámicamente

También podemos modificar la función para solicitar al usuario que ingrese los datos dinámicamente:


```python
import db

def insert_data():
  insert_query = "INSERT INTO cars (brand, model) VALUES(?, ?)"
  record_count = 0

  while True:
    brand = input("Ingrese la marca del vehículo (o 'salir' para terminar): ")
    if brand.lower() == "salir":
      break
    model = input("Ingrese el modelo del vehículo: ")
    db.run_query(insert_query, (brand, model))
    record_count += 1

  print("Records inserted successfully into table, records:", record_count)

if __name__ == "__main__":
  insert_data()
```
{: file="crud.py" }


Ahora desde el módulo principal, importamos la función desde el módulo `crud.py` y verificamos la acción:

```python
from crud import insert_data

def init():
  insert_data()

if __name__ == "__main__":
  init()
```
{: file="main.py" }

> La instrucción `if __name__ == "__main__"` comprueba si el script se está ejecutando como programa principal. Si es así, llama a la función `init()` que de momento solo tiene la invocación de la función `insert_data()` del módulo `crud`. Esto es más que nada para promover la modularidad y la reutilización. Permite que el script sirva como programa independiente y como módulo importable.
{: .prompt-info }

Como resultado nos mostraría el siguiente mensaje al ejecutar el script `main.py`:

```terminal
python3 main.py
```

```
Record inserted successfully into table, records: 7
```
{: .noheader .p-0 }

### 2. c<span class="thl">R</span>ud -> READ

Ya que tenemos registros insertados, vamos a recuperarlos y mostrarlo en la consola:

```python
from prettytable import from_db_cursor # pip install prettytable

def get_data():
  select_query = "SELECT * FROM cars"
  result = db.run_query(select_query)
  mytable = from_db_cursor(result)
  mytable.align = "l"
  print(mytable)
```
{: .nolineno file="crud.py" }

> **prettytable** es una librería de Python que da formato de tabla a los datos por consola y se debe instalar como lo muestra el comentario en la primera línea. 
{: .prompt-info }

Ahora desde el módulo principal, importamos la función desde el módulo `crud.py` y verificamos la acción:

```python
from crud import insert_data, get_data 

def init():
  # insert_data() (comentamos esta línea para no insertar duplicados)
  get_data()

if __name__ == "__main__":
  init()
```
{: file="main.py" }

Volvemos a ejecutar el script principal:

```terminal
python main.py
```

Como resultado, veremos los registros en un formato agradable gracias a **prettytable**:

```
+-----------+--------------------+
| brand     | model              |
+-----------+--------------------+
| Chevrolet | Chevrolet Camaro   |
| Chevrolet | Chevrolet Captiva  |
| Fiat      | Fiat 125 Mirafiori |
| Fiat      | Fiat 125 Centurion |
| Honda     | Honda CR-V         |
| Honda     | Honda CR-X del Sol |
| Honda     | Honda CR-Z         |
+-----------+--------------------+
```
{: .noheader .p-0 }

### 3. cr<span class="thl">U</span>d -> UPDATE

Continuamos con la 3° operación cr**U**d, definiremos una función que permite actualizar el campo `model` de la tabla para actualizar el modelo existente por el nuevo modelo:

```python
def update_data(model, newModel):
  update_query = "UPDATE cars SET model = ? WHERE model = ?"
  db.run_query(update_query, (newModel, model))
```
{: .nolineno file="crud.py" }

> Los marcadores de posiciones `?` en la instrucción SQL, también denominados **param style** indican que se esperan parámetros por parte de la interfaz DB API al momento de ejecutar el método `execute()`.
{: .prompt-info }

Ahora desde el módulo principal, importamos la función desde el módulo `crud.py` y verificamos la acción:

```python
from crud import insert_data, get_data, update_data

def init():
  # insert_data() (comentamos esta línea para no insertar duplicados)
  get_data() # mostramos los datos antes de actualizar
  update_data("Chevrolet Camaro", "Chevrolet Corvette") 
  update_data("Honda CR-V", "Honda HR-V")
  get_data() # mostramos los datos ya actualizados

if __name__ == "__main__":
  init()
```
{: file="main.py" }

Volvemos a ejecutar el script principal:

```terminal
python main.py
```

Observemos que los modelos se actualizaron:

```
+-----------+--------------------+
| brand     | model              |
+-----------+--------------------+
| Chevrolet | Chevrolet Camaro   |
| Chevrolet | Chevrolet Captiva  |
| Fiat      | Fiat 125 Mirafiori |
| Fiat      | Fiat 125 Centurion |
| Honda     | Honda HR-V         |
| Honda     | Honda CR-X del Sol |
| Honda     | Honda CR-Z         |
+-----------+--------------------+
+-----------+--------------------+
| brand     | model              |
+-----------+--------------------+
| Chevrolet | Chevrolet Corvette |
| Chevrolet | Chevrolet Captiva  |
| Fiat      | Fiat 125 Mirafiori |
| Fiat      | Fiat 125 Centurion |
| Honda     | Honda HR-V         |
| Honda     | Honda CR-X del Sol |
| Honda     | Honda CR-Z         |
+-----------+--------------------+
```
{: .noheader .p-0 }


### 4. cru<span class="thl">D</span> -> DELETE

Eliminar es muy sencillo, ya que lo único que debemos preocuparnos es de añadir la cláusula `WHERE` 🤭 para que no te sientas identificado con esta canción:

{% include embed/youtube.html id='i_cVJgIz_Cs' %}

Basta de canciones, y vamos a definir la función que se encargará de eliminar un registro a través del campo `model` de la tabla:

```python
def delete_data(model):
  delete_query = "DELETE FROM cars WHERE model = ?"
  db.run_query(delete_query, (model,))
```
{: .nolineno file="crud.py" }

> <i class="fa-solid fa-microphone-lines"></i> NO TE OLVIDES DE PONER EL `WHERE` EN EL `DELETE FROM` <i class="fa-solid fa-music"></i> JAJA ❤️‍🔥
{: .prompt-danger }

Ahora desde el módulo principal, importamos la función desde el módulo `crud.py` y verificamos la acción:

```python
from crud import insert_data, get_data, update_data, delete_data

def init():
  # insert_data() (comentamos esta línea para no insertar duplicados)
  get_data() # mostramos los datos antes de eliminar
  delete_data("Chevrolet Captiva")
  get_data() # mostramos los datos una vez eliminado el registro

if __name__ == "__main__":
  init()
```
{: file="main.py" }

Volvemos a ejecutar el script principal:

```terminal
python main.py
```

Y terminamos con el siguiente resultado:

```
+-----------+--------------------+
| brand     | model              |
+-----------+--------------------+
| Chevrolet | Chevrolet Corvette |
| Chevrolet | Chevrolet Captiva  |
| Fiat      | Fiat 125 Mirafiori |
| Fiat      | Fiat 125 Centurion |
| Honda     | Honda HR-V         |
| Honda     | Honda CR-X del Sol |
| Honda     | Honda CR-Z         |
+-----------+--------------------+
+-----------+--------------------+
| brand     | model              |
+-----------+--------------------+
| Chevrolet | Chevrolet Corvette |
| Fiat      | Fiat 125 Mirafiori |
| Fiat      | Fiat 125 Centurion |
| Honda     | Honda HR-V         |
| Honda     | Honda CR-X del Sol |
| Honda     | Honda CR-Z         |
+-----------+--------------------+
```
{: .noheader .p-0 }

### Ejemplo Completo en Trinket

<iframe src="https://trinket.io/embed/python3/5fc73d32ecf5?toggleCode=true&start=result&showInstructions=true" width="100%" height="356" style="background: #ddd9; border-radius: 10px; padding: 4px" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
