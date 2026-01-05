---
title: "Postgres: Cómo usar pg_dump para copias de seguridad"
categories: [Postgres, "Postgres-CLI"]
badge: postgresql
tags: [postgres, cli]
---


PostgreSQL viene con `pg_dump` que es la herramienta de línea de comandos diseñada para realizar copias de seguridad de bases de datos. A diferencia de otras herramientas de respaldo, `pg_dump` genera un archivo de volcado que contiene los comandos SQL necesarios para reconstruir la base de datos, incluyendo esquemas, tablas y datos.

## Conectarse a la base de datos

Antes de usar `pg_dump`, es importante que PostgreSQL esté en ejecución y que tengas las credenciales de acceso a la base de datos.

{% tabs connect_postgres %}
{% tab connect_postgres <i class="fa-brands fa-windows"></i> Windows %}
```cmd
psql -U tu_usuario -d postgres
```

* `-U postgres`: Usuario con el que te conectas (por defecto `postgres`).
* `-d postgres`: Nombre de la base de datos a la que te conectas (predeterminada `postgres`).
* Te pedirá la contraseña que definiste en la instalación.
{% endtab %}
{% tab connect_postgres <i class="fa-brands fa-linux"></i> Linux %}
```terminal
sudo -u postgres psql -d postgres
```

* `sudo -u postgres`: Ejecuta `psql` como el usuario del sistema `postgres`.
* También puedes usar solo `psql -U tu_usuario -d postgres` si tu usuario tiene permisos.
{% endtab %}
{% tab connect_postgres <i class="fa-brands fa-apple"></i> macOS %}
```terminal
psql -U postgres -d postgres
```

* Funciona igual que en Linux si instalaste PostgreSQL con Homebrew o con el instalador oficial.
{% endtab %}
{% endtabs %}


## Métodos para realizar copias de seguridad

Existen 2 métodos para realizar copias de seguridad en PostgreSQL:

1. **Copias de Seguridad Lógicas**
   - Utilizan herramientas como `pg_dump` y `pg_dumpall` para exportar los datos en un formato que se puede restaurar fácilmente.
   - Las copias lógicas permiten realizar respaldos de las bases de datos de manera estructurada y selectiva, a nivel de tablas, esquemas o incluso registros individuales.
   - Las copias lógicas se pueden transferir fácilmente entre diferentes instancias de PostgreSQL.

2. **Copias de Seguridad Físicas**
   - Implican copiar los archivos del sistema de archivos donde PostgreSQL almacena los datos. Esto generalmente se hace mediante herramientas de nivel de sistema, como `rsync`.
   - Las copias físicas, respaldan todo el sistema de archivos.


## Ejemplo de uso pg_dump

La herramienta [`pg_dump`](https://www.postgresql.org/docs/current/app-pgdump.html){:target='_blank'} forma parte del paquete de instalación de PostgreSQL, lo que nos permite utilizarla directamente desde la línea de comando en la terminal. Para hacer una copia de seguridad de una base de datos existente en el servidor, simplemente ejecutamos el siguiente comando en una nueva terminal:

```terminal
pg_dump -U usuario -d dbname -f backup.sql
```

- **-U:** Especifica el usuario.
- **-d:** Indica la base de datos que se va a respaldar.
- **-f:** Define el archivo donde se guardará la copia.

## Ejemplo de uso pg_dumpall

Si necesitas respaldar todas las bases de datos en una instancia de PostgreSQL, usa [`pg_dumpall`](https://www.postgresql.org/docs/current/app-pg-dumpall.html){:target='_blank'}:

```terminal
pg_dumpall -U usuario -f all_backup.sql
```

Este comando generará un archivo SQL que contiene la definición y los datos de todas las bases de datos.

## Restaurar copias de seguridad

Para restaurar una copia de seguridad realizada con `pg_dump`, podemos utilizar el cliente de terminal `psql` de la siguiente manera:

```terminal
psql -U usuario -d dbname -f backup.sql
```

Si has hecho una copia de seguridad con `pg_dumpall`, podemos restaurar usando el cliente de terminal `psql` de la siguiente menera:

```terminal
psql -U usuario -f all_backup.sql
```

Otra opción es restaurar bases de datos utilizando el programa `pg_restore` desde la línea de comandos:

```terminal
pg_restore -U <user> -d <dbname> -v "backup.dump"
```

## Mejores Prácticas

Aquí podemos proponer una variedad de recomendaciones, considerando como importantes las siguientes:

- **Automatización**: Programar las copias de seguridad para que se realicen de manera automática, usando herramientas como `cron` (en linux) o tareas programadas (en Windows).

- **Almacenamiento Remoto**: Guardar las copias de seguridad en un lugar seguro y remoto (por ejemplo, en un servicio de almacenamiento en la nube) para protegerlas de desastres locales.

- **Pruebas de Restauración**: Realizar pruebas periódicas de restauración para garantizar que las copias de seguridad sean válidas y puedas recuperar los datos en caso de emergencia.


### Automatización con bash

Puedes usar el siguiente ejemplo de código, sólo cambia los valores que correspondan por los de tu configuración:

```bash
#!/bin/bash

# Fecha actual para nombrar el archivo de backup de manera única
FECHA=$(date +\%Y\%m\%d\%H\%M\%S)

# Directorio donde se guardará el backup
BACKUP_DIR="/ruta/a/tu/backups"

# Nombre de la base de datos
DB_NAME="nombre_basedatos"

# Usuario de PostgreSQL
DB_USER="usuario"

# Archivo de backup
BACKUP_FILE="$BACKUP_DIR/backup_$DB_NAME_$FECHA.dump"

# Comando pg_dump para realizar la copia de seguridad
pg_dump -U $DB_USER -F c -b -v -f $BACKUP_FILE $DB_NAME

# Verificar si el comando pg_dump fue exitoso
if [ $? -eq 0 ]; then
  echo "Backup exitoso: $BACKUP_FILE"
else
  echo "Error al realizar el backup de la base de datos."
fi
```
{:  file="backup_postgres.sh" }