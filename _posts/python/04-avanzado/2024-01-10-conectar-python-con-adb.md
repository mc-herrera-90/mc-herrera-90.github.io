---
title: "Python: Conectar con Oracle Autonomous Database"
icon: icon/python.svg
categories: [Python, Python_04-Integraciones]
image:
    path: poster/python-adb.webp
    lqip: data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwAwCdASoUAAsAPzmIulOvKSWisAgB4CcJZgCdAB87I8BCy/pQAgD+oMJm1X2r2TfzZNbTXWf9L+N8znXHbn++k1kUTW1sld+ooGg9QcWvAsCRQ1T95CFRs5YbzhLIwHy1D4MAAAA=
---

En este post, aprenderás paso a paso a conectar __Python__ <i class="fab fa-python"></i> con una __Oracle Autonomus Database__ (ADB) en la nube ☁️. Este tipo de base de datos es parte del ecosistema Oracle Cloud Infrastructure (OCI) y se destaca por su administración automática.

## ¿Qué es Oracle Autonomous Database?

**Oracle Autonomous Database (ADB)** es una base de datos completamente gestionada por Oracle Cloud.
Su principal ventaja es que **automatiza las tareas de administración** como el parcheo, respaldo y optimización del rendimiento.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

1. Una cuenta en **Oracle Cloud Infrastructure (OCI)**.
2. Una **instancia activa** de Autonomous Database.
3. El **wallet de conexión (archivo ZIP)** descargado desde la consola OCI.
4. Python 3.8 o superior instalado en tu equipo.
5. Las siguientes librerías de Python:

```terminal
pip install oracledb
```
{:.typing}

> Si estás usando el cliente antiguo `cx_Oracle`, se recomienda migrar al nuevo paquete oficial `oracledb`.
{: .prompt-tip }

## Configuración del Wallet

Lo primero es descargar una **Wallet**. A continuación, puedes revisar las instrucciones para obtenerla y descargarla:

{% include embed/pdf.html file="pdf/descargar-wallet.pdf" %}

El **Wallet** contiene los certificados y archivos de configuración necesarios para conectarte de forma segura.
Después de descargarlo desde {% include tooltip.html word="OCI" description="Oracle Cloud Infrastructure es la plataforma de servicios en la nube de Oracle, similar a AWS, Azure o Google Cloud." %}, descomprímelo en un directorio de tu elección, por ejemplo:

```
/Users/tu_usuario/OracleWallet/
```
{:.noheader .fit-content}

En su interior verás archivos como:

```
📂 OracleWallet
├── README
├── cwallet.sso
├── ewallet.p12
├── ewallet.pem
├── keystore.jks
├── ojdbc.properties
├── sqlnet.ora
├── tnsnames.ora
└── truststore.jks
```
{:.noheader .fit-content}

Estos archivos permiten que el cliente Python sepa cómo y a qué punto de conexión conectarse.

{% include circle-line.html %}

## Conexión desde Python

De forma predeterminada, el paquete `python-oracledb` permite la conexión directa a Oracle Database, a este método se le denomina **modo “Thin”** (recomendado para los ejemplos). Se conecta directamente a la base de datos usando __TCP/IP__ y protocolos Oracle nativos, sin depender de librerías externas.

![OracleDB Thin Mode](oracledb/thin-mode.webp){:.rounded }

### Ejemplo simple de conexión

A continuación se muestra un ejemplo simple de conexión usando el **modo “Thin”** del driver `oracledb`:

```python
import oracledb

# Ruta al directorio donde descomprimiste el wallet
wallet_path = "/Users/tu_usuario/OracleWallet"

# Alias de conexión definido en tnsnames.ora (por ejemplo: "adb_high")
tns_alias = "adb_high"

# Credenciales de tu base de datos
username = "admin"
password = "TuContraseñaSegura123"

# Establecer conexión
connection = oracledb.connect(
  user=username,
  password=password,
  dsn=tns_alias,
  config_dir=wallet_path,
  wallet_location=wallet_path,
  wallet_password=None
)

# Crear un cursor y ejecutar una consulta
cursor = connection.cursor()
cursor.execute("SELECT sysdate FROM dual")

for row in cursor:
  print("Fecha actual en Oracle Cloud:", row[0])

# Cerrar la conexión
cursor.close()
connection.close()
```
{:file="main.py"}

### Conexión usando variables de entorno

Para mantener seguras tus credenciales, puedes usar variables de entorno:

```terminal
export USERDB=admin
export PASSWORDDB=TuContraseñaSegura123
export WALLET_LOCATION=/Users/tu_usuario/OracleWallet
export PASSWORDWALLET=TuContraseñaDeWallet
```

Y luego, en Python:

```python
import oracledb
import os

wallet_path = os.getenv("WALLET_LOCATION")
tns_alias = os.getenv("TNS_ALIAS")
username = os.getenv("USERDB")
password = os.getenv("PASSWORDDB")
password_wallet = os.getenv("PASSWORDWALLET")

try:
    connection = oracledb.connect(
        user=username,
        password=password,
        dsn=tns_alias,
        config_dir=wallet_path,
        wallet_location=wallet_path,
        wallet_password=password_wallet
    )

    print("✅ Conexión exitosa a Oracle Autonomous Database")

except oracledb.DatabaseError as e:
    print("❌ Error al conectar o consultar la base de datos:", e)

finally:
    if 'cursor' in locals():
        cursor.close()
    if 'connection' in locals():
        connection.close()
```
{: file="conexion.py"}

### Conexión usando variables de entorno con Dotenv

Para mayor comodidad, puedes carga automáticamente las variables desde un archivo `.env` a nuestro entorno de Python. Para ello, se debe instalar la librería:

```terminal
pip install python-dotenv
```

Y crea el archivo `.env` en la raíz del proyecto:

```ini
WALLET_LOCATION=Users/mcherrera/workspace/OracleWallet
USERDB=ADMIN
PASSWORDDB=TuContraseñaSegura123
PASSWORDWALLET=TuContraseñaDeWallet
TNS_ALIAS=adb_high
DB_USER=ADMIN
DB_DSN=dbname_high
```
{:file=".env"}

> No olvidar añadir este archivo al `.gitignore` para que no se valla en el control de versiones.
{: .prompt-warning }

El resultado al ejecutar el script sería como se muestra a continuación:

![Cursor python adb](python/python-cursor-adb.webp)

## Crear una API mínima con Flask

Aprovechando que ya tenemos conexión a Oracle, podemos crear una __API mínima con Python__ usando [__Flask__](https://flask.palletsprojects.com/en/stable/){:target='_blank'} para exponer los datos de ADB como un sevicio REST.

### ¿Qué es Flask?

Flask es un microframework para Python que permite crear APIs y aplicaciones web de forma rápida, ligera y flexible. Su simplicidad lo hace perfecto para estas demostraciones sin la complejidad sobre la estructura y configuración del backend de frameworks más pesados como Django.

## Crear una conexión segura

En este punto, volvemos a configurar una conexión aunque será diferentes y aplicando buenas prácticas. Lo primero es añadir Flask al proyecto.

### 1. Instalar Flask

Ejecuta el siguiente comando en tu entorno de trabajo:

```terminal
pip install Flask
```

### 2. Configura las variables de entorno

Antes de conectarnos, se cargan las credenciales desde un archivo `.env` (no deben ir en el código fuente).
Esto permite mantener la seguridad y flexibilidad del entorno:

| Variable          | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `USERDB`          | Usuario de la base de datos Oracle                 |
| `PASSWORDDB`      | Contraseña del usuario                             |
| `TNS_ALIAS`       | Alias o cadena de conexión definida en el wallet   |
| `WALLET_LOCATION` | Ruta del directorio donde está el wallet de Oracle |
| `PASSWORDWALLET`  | Contraseña del wallet                              |

> Esto hace que la aplicación sea **portable y segura**, ideal para entornos productivos o en la nube.
{: .prompt-tip }

### 3. Inicialización del servidor Flask

Primero importamos la clase `Flask`. Una instancia de esta clase será nuestra aplicación WSGI.

```python
from flask import Flask

app = Flask(__name__)
```
{: .nolineno }

Se crea la instancia principal de Flask, que actuará como servidor web para procesar solicitudes REST.
Aquí luego se agregarán los *endpoints* (por ejemplo: `/employees`, `/departments`, etc.).

### 4. Creación del pool de conexiones Oracle

Antes de definir los endpoints de la API, necesitamos un **pool de conexiones**.
En lugar de abrir y cerrar una conexión a Oracle en cada solicitud (lo que hicimos en los ejemplos anteriores y es algo ineficiente), el pool mantiene **varias conexiones abiertas y reutilizables**.


```python
def create_pool():
  try:
    pool = oracledb.create_pool(
      user=DB_USER,
      password=DB_PASSWORD,
      dsn=DB_ALIAS,
      config_dir=DB_WALLET_PATH,
      wallet_location=DB_WALLET_PATH,
      wallet_password=DB_WALLET_PASS,
      min=1,
      max=5,
      increment=1
    )
    app.logger.info("✅ Pool de conexiones creado correctamente.")
    return pool
  except Exception as e:
    app.logger.error(f"❌ Error al crear el pool: {e}")
    return None
```
{: .nolineno }

Esta función crea un **pool de conexiones compartido** a Oracle:

* **`min=1`**: Mínimo de conexiones abiertas al iniciar.
* **`max=5`**: Máximo de conexiones simultáneas que el pool puede mantener.
* **`increment=1`**: Número de conexiones que se agregan cuando se requiere más carga.

> Un *connection pool* mantiene conexiones persistentes con la base de datos, lo que:
> * Reduce la latencia al evitar reconectar cada vez.
> * Mejora la eficiencia en aplicaciones concurrentes.
> * Ahorra recursos del servidor Oracle.
{: .prompt-info }

### 5. Pool global en la aplicación

El siguiente paso es asignar el pool como un atributo global de la app Flask.

```python
app.db_pool = create_pool()
```
{: .nolineno }

Esto permite acceder fácilmente a `app.db_pool` desde cualquier *endpoint* para ejecutar consultas o procedimientos.

### 6. Manejo seguro del cierre del pool

Cuando el proceso Flask se detiene (por ejemplo con <kbd>Ctrl</kbd>+<kbd>C</kbd> o al apagar el servidor), se ejecuta esta función:

```python
def shutdown_pool(*args):
  pool = getattr(app, "db_pool", None)
  if pool and getattr(pool, "opened", False):
    try:
      pool.close()
      print("🧹 Pool cerrado correctamente")
    except Exception as e:
      print(f"⚠️ Error al cerrar el pool: {e}")

signal.signal(signal.SIGINT, shutdown_pool)
signal.signal(signal.SIGTERM, shutdown_pool)
```
{: .nolineno }

En resumen, esta función:

* Detecta si el pool sigue abierto.
* Cierra todas las conexiones activas.
* Evita errores del tipo `DPY-1002: connection pool is not open`.

> Esto es una **buena práctica recomendada**, ya que garantiza:
> * Liberación adecuada de recursos.
> * Cierre limpio del proceso.
> * Evitar fugas de conexión o errores al reiniciar la app.
{: .prompt-tip }


Hasta ahora, contamos con una **configuración base profesional y con buenas prácticas**:

| Elemento          | Función principal                         |
| ----------------- | ----------------------------------------- |
| `.env`            | Protege credenciales                      |
| `create_pool()`   | Crea un pool eficiente de conexiones      |
| `app.db_pool`     | Centraliza el acceso a la base de datos   |
| `shutdown_pool()` | Cierra ordenadamente el pool al finalizar |

## Definir Endpoints

Ya contamos con un **pool de conexiones global**, ahora podemos comenzar a definir los endpoints de la API.

### 1. Endpoint: Obtener datos

El primer endpoint será un **GET** que devuelva una lista en este caso de empleados desde la tabla `employees`.

```python
@app.route("/employees", methods=["GET"])
def get_employees():
  pool = getattr(app, "db_pool", None)
  if not pool or not getattr(pool, "opened", False):
    return jsonify({"error": "El pool de conexiones no está abierto"}), 500

  try:
    with pool.acquire() as conn:
      with conn.cursor() as cursor:
        # Cambiar al esquema correcto
        cursor.execute("ALTER SESSION SET CURRENT_SCHEMA = WKSP_ATP2025")
        
        # Ejecutar consulta
        cursor.execute("SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME FROM EMPLOYEES")
        rows = cursor.fetchall()
        
        # Formatear resultados en JSON
        data = [{"id": r[0], "first_name": r[1], "last_name": r[2]} for r in rows]
        return jsonify(data)
  except Exception as e:
    return jsonify({"error": str(e)}), 500
```

__¿Qué está pasando?__

1. **Validación del pool**
: Antes de cualquier consulta, verificamos que el pool esté activo (`if not pool`).

2. **Adquisición segura de conexión**
: `with pool.acquire()` obtiene una conexión activa del pool y la devuelve automáticamente al terminar.

3. **Cursor para ejecutar SQL**
: - `cursor.execute()` envía la consulta a Oracle.
: - Luego `fetchall()` obtiene todos los resultados.

4. **Conversión a JSON**
: Transformamos los resultados en una lista de diccionarios para enviar una respuesta limpia y estructurada.

5. **Manejo de errores Oracle**
: Si ocurre una excepción, se captura y se devuelve un mensaje estándar con enlace a la documentación.

Es momento de configurar la aplicación para ejecutarla:

```python
if __name__ == "__main__":
  app.run(debug=True)
```
{: .nolineno }

Una vez configurada, ejecutamos el script:
```terminal
python main.py
```

Procede a realizar una petición al endpoint para ver los resultados:

![request employees](oracledb/request-employees.webp)


## Recursos útiles

* [Documentación oficial de `python-oracledb`](https://python-oracledb.readthedocs.io/en/latest/){:target="_blank"}
* [Conexión segura con Oracle Wallet](https://docs.oracle.com/en/cloud/paas/autonomous-database/){:target="_blank"}


Conectar **Python** a una **Oracle Autonomous Database** es un proceso sencillo pero poderoso:
permite aprovechar la escalabilidad y seguridad del ecosistema Oracle con la flexibilidad del lenguaje Python.

Ya sea para construir una **API**, realizar **análisis de datos** o entrenar **modelos de machine learning**,
esta integración te brinda una base sólida y moderna para tus proyectos cloud.
