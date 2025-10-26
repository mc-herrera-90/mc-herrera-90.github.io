---
title: Conectando Python con Oracle Autonomous Database
icon: icon/python.svg
categories: [Python, "Tutorial"]
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
📂 OracleWaller
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

A continuación se muestra un ejemplo completo de conexión usando el nuevo **modo “Thin”** del driver `oracledb`, que **no requiere instalación del cliente Oracle**.

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

Para mayor comodidad, puedes carga automáticamente las variables desde en un archivo `.env` a nuestro entorno de Python. Para ello, se debe instalar la librería:

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

## Consejo profesional

Si planeas usar esta conexión en aplicaciones web o entornos de producción:

* Implementa **pool de conexiones** con `oracledb.create_pool()`.
* Nunca almacenes contraseñas en texto plano.
* Usa **Oracle Cloud Vault** para gestionar credenciales.
* Considera usar **autenticación IAM** para mayor seguridad.


## Recursos útiles

* [Documentación oficial de `python-oracledb`](https://python-oracledb.readthedocs.io/en/latest/){:target="_blank"}
* [Conexión segura con Oracle Wallet](https://docs.oracle.com/en/cloud/paas/autonomous-database/){:target="_blank"}


Conectar **Python** a una **Oracle Autonomous Database** es un proceso sencillo pero poderoso:
permite aprovechar la escalabilidad y seguridad del ecosistema Oracle con la flexibilidad del lenguaje Python.

Ya sea para construir una **API**, realizar **análisis de datos** o entrenar **modelos de machine learning**,
esta integración te brinda una base sólida y moderna para tus proyectos cloud.
