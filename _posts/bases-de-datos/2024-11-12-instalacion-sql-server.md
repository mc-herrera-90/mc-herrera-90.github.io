---
title: "Instalación en diferentes Sistemas Operativos"
categories: [Bases de Datos Relacionales, "SQL Server"]
image:
   path: poster/instalar-sql-server.webp
   lqip: data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAACwBACdASoUAAsAPzmEulOvKKWisAgB4CcJbACdMoRwFf/gMkWvJhQJ/EK2DLSAAO8rgizc1oA7jhiJY1T3dHJfSlwzueCDL6Dbh4Ipj71oM3bXXDXOBNOvuvjwNGVAzhUGWFbpWB7AAA==
tags: [Bases de Datos, "SQL"]
---

Microsoft SQL Server es uno de los gestores de bases de datos más utilizados en entornos empresariales y con esto nos referimos a lo siguiente:

- __Empresarial__: se usa principalmente en organizaciones medianas y grandes (bancos, retail, salud, educación, gobierno, etc.) porque soporta grandes volúmenes de datos, alta disponibilidad, seguridad avanzada y administración centralizada.

- __Desarrollo de software__: SQL Server también puede usarse en sistemas pequeños o aplicaciones específicas (por ejemplo, un software de gestión interna de una pyme), pero no es tan común en ese nivel porque existen alternativas más livianas y económicas como MySQL o PostgreSQL.


Su instalación puede variar dependiendo del sistema operativo, pero en todos los casos es importante comprender no solo los pasos técnicos, sino también las **decisiones de configuración** que afectan al entorno en el que trabajaremos.

A continuación, revisaremos el proceso en Windows, Linux y macOS (vía contenedores), deteniéndonos en los aspectos claves de la instalación.

## Instalación en Windows

Descarga el instalador desde la página oficial: [SQL Server Downloads](https://www.microsoft.com/es-es/sql-server/sql-server-downloads){:target="_blank"}

En Windows, SQL Server se integra de forma nativa y su instalador nos ofrece varias rutas posibles.

1. **Selección de la edición**
   Lo primero es definir la edición que instalaremos:

   * **Developer**: gratuita y con todas las características, pensada para entornos de desarrollo.
   * **Express**: ligera y gratuita, pero con limitaciones de tamaño y memoria.
   * **SQL Server 2022 local** (en tu máquina o servidor local)
   * **SQL Server en Azure** (la versión en la nube)

   Para pruebas o aprendizaje, la opción más conveniente suele ser **Developer**.

![Seleccionar versión](sqlserver/seleccionar-version.webp)

{:start="2"}
2. **Método de instalación**
   Al iniciar el instalador, se ofrecen tres modos de instalación:
   * **Básica**: instala con configuraciones predeterminadas.
   * **Personalizado**: permite definir detalles como rutas de instalación o características opcionales.
   * **Descargar medios**: descarga los binarios para instalarlos en otro momento o en otra máquina.

   Si tu interés es tener control sobre la instancia, selecciona **Personalizado**.

![Sql server instalación personalizada](sqlserver/windows-instalacion-personalizada.webp)

### Configurar una nueva instancia

Una vez instalado, se abrirá el asistente (Centro de instalación de SQL Server 2022). Actúa como un lanzador de asistentes (wizards) que guían paso a paso en distintas operaciones relacionadas con el motor de base de datos y sus herramientas. En las opciones que nos muestra el asistente, es precisamente la primera la que nos ayuda a configurar una nueva instancia:

![Crear una nueva instancia](sqlserver/nueva-instancia.webp)

Esta opción, inicia el asistente principal para crear una __nueva instancia__ de SQL Server 2022 (standalone, es decir, independiente) y comenzar el proceso de instalación del motor de base de datos.

Al seleccionar la opción, se inicia el asistente y podrás elegir la edición (Developer, Express, etc):

![Seleccionar la edición](sqlserver/seleccionar-edicion.webp)

SQL Server puede instalarse como **instancia por defecto** o como **instancia con nombre**.

* Instancia por defecto → accesible con el nombre del servidor.
* Instancia con nombre → se accede especificando `Servidor\Instancia`.

Esta decisión es relevante si planeas tener varias instancias en la misma máquina.

![configurar istancia](sqlserver/configurar-instancia.webp)

**Modo de autenticación**: Aquí definimos cómo los usuarios se conectarán:

* **Windows Authentication**: integra la seguridad del sistema operativo.
* **Mixed Mode**: añade el clásico usuario `sa` de SQL Server con su contraseña.

En entornos de pruebas suele usarse Mixed Mode para tener flexibilidad, pero siempre estableciendo una **contraseña robusta** para `sa`.

![configurar istancia](sqlserver/configurar-autenticacion.webp)

## Instalación en Linux (ejemplo con Ubuntu)

> En este proceso, instaremos SQL Server 2022 en Ubuntu 22.04 y se podrá conecar con __sqlcmd__ para crear la primera base de datos.
{: .prompt-tip }

### Requisitos Previos

- Una máquina con Ubuntu 20.04 o superior instalado.
- Contar con __al menos 4GB de memoria__.

SQL Server está soportado oficialmente en Linux, pero el enfoque es distinto: aquí todo se gestiona desde la consola.

1\. Registro del repositorio
: Antes de instalar, debemos agregar el repositorio de Microsoft para que el sistema encuentre los paquetes correctos. Esto asegura que siempre obtengamos la versión soportada.

2\. Instalación del motor
: Tras actualizar los repositorios, instalamos el paquete `mssql-server`. El servicio se incorpora automáticamente al sistema y puede controlarse con `systemctl`.

3\. Configuración inicial
: El comando:

   ```terminal
   sudo /opt/mssql/bin/mssql-conf setup
   ```

   inicia un asistente que pregunta:

   * La **edición** que usaremos (Developer, Express, etc.).
   * La **contraseña para `sa`**.
   * La **configuración de telemetría**.

   Este paso es el equivalente en consola al asistente gráfico de Windows, pero más directo.

## Instalación en macOS (vía Docker)

macOS no tiene soporte nativo, pero gracias a los contenedores podemos trabajar con SQL Server de manera casi transparente.

1. **Descargar la imagen oficial**
   Desde Docker Hub podemos obtener la versión más reciente con:

   ```terminal
   docker pull mcr.microsoft.com/mssql/server:2022-latest
   ```

2. **Creación del contenedor**
   Al levantar el contenedor, definimos variables de entorno críticas:

   * `ACCEPT_EULA=Y` para aceptar la licencia.
   * `SA_PASSWORD` con una clave segura.
   * El puerto `1433`, que será el canal de conexión estándar.

   Ejemplo:

```terminal
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=TuClaveSegura123" \
   -p 1433:1433 --name sqlserver -d \
   mcr.microsoft.com/mssql/server:2022-latest
```

> La variable de entorno antes era `SA_PASSWORD` pero está en desuso. Actualmente es `MSSQL_SA_PASSWORD`.
{: .prompt-info }

**Conexión al contenedor:**

Una vez corriendo, se puede acceder con cualquier cliente compatible. La ventaja aquí es que la instalación queda aislada y es fácil de reiniciar o eliminar.

Desde Docker podemos ejecutar una sesión interactiva y conectar con el cliente `sqlcmd` con:

```terminal
docker exec -it sqlserver bash
```

Ahora podemos conectarnos con el cliente `sqlcmd` usando el siguiente comando:

```terminal
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'TuClaveSegura123' -C
```

{% include embed/video.html src="sqlserver/mssql-docker-sqlcmd.mp4" %}

La instalación de SQL Server no se reduce a “dar siguiente”.
Cada entorno Windows, Linux o macOS plantea distintas decisiones de configuración: desde elegir la edición correcta hasta definir el modo de autenticación o la forma de desplegar el servidor.

Comprender estos puntos desde el inicio te asegura un entorno más seguro, ordenado y fácil de administrar a futuro.