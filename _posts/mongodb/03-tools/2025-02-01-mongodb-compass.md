---
title: "MongoDB: MongoDB Compass interfaz gráfica para explorar bases de datos MongoDB"
categories: [MongoDB, "MongoDB_03-Tools"]
badge: mongodb
---

Cuando trabajas con **MongoDB**, muchas veces interactúas desde la terminal utilizando `mongosh`. Sin embargo, existe una herramienta oficial que facilita enormemente la exploración y administración de las bases de datos: **MongoDB Compass**.

**MongoDB Compass** es la interfaz gráfica oficial de MongoDB que permite visualizar, consultar y administrar bases de datos de forma más intuitiva.

## 1. ¿Qué es MongoDB Compass?

**MongoDB Compass** es un cliente gráfico que permite interactuar con servidores MongoDB sin necesidad de escribir comandos constantemente.

Con esta herramienta puedes:

* Explorar bases de datos y colecciones
* Insertar, editar y eliminar documentos
* Ejecutar consultas
* Analizar esquemas de datos
* Crear índices
* Visualizar estadísticas de la base de datos

Todo esto desde una **interfaz visual muy clara**.

![UI Compass](mongodb/compass-ui.gif){:.rounded}

### 1.1 Ventasjas de MongoDB Compass

- [x] Interfaz visual fácil de usar
- [x] Ideal para aprender MongoDB
- [x] Permite editar documentos rápidamente
- [x] Incluye herramientas de análisis de datos
- [x] Cliente oficial mantenido por MongoDB

## 2. Conectar MongoDB Compass a un servidor de MongoDB

Cuando abres MongoDB Compass verás unos botones para añadir nuevas conexiones.

![Botones de nueva conexión](mongodb/compass-boton-nueva-conexion.webp)

Ejemplo para un servidor local:

![Conexión a base de datos local](mongodb/compass-nueva-conexion.webp)

Después de conectarte podrás navegar por:

![Bases de datos locales](mongodb/compass-bases-de-datos-locales.webp)

## 3. Crear nuevas bases de datos

En MongoDB Compass, las bases de datos se crean junto con su primera colección. Por ejemplo:

![Crear una nueva base de datos](mongodb/compass-crear-base-de-datos.webp)

Ahora tu base de datos aparecerá en la lista.

![Nueva base de datos](mongodb/compass-nueva-base-de-datos.webp)

## 4. Insertar documentos desde Compass

### 4.1 Insertar un documento

Para agregar un nuevo documento:

1. Abre una colección.
2. Haz clic en **Insert Document**.
3. Introduce los datos en formato JSON.

Ejemplo:

![Abrir la colección](mongodb/compass-insertar-documento.webp)

Luego presionas **Insert** y el documento se guarda inmediatamente.

![Insertar documento](mongodb/compass-insertar-documento-con-json.webp)

Una vez insertado, se puede ver como ahora la colección tiene un documento.

![Documento insertado](mongodb/compass-ver-documento-insertado.webp)

### 4.2 Insertar muchos documentos desde un archivo

Para insertar un conjunto de documentos desde un archivo __JSON__:

1. Abre una colección.
2. Haz clic en __Import JSON or CSV file__.
3. Seleccionar el archivo desde el explorador.

![Seleccionar importar un archivo](mongodb/compass-insertar-desde-un-archivo.webp)

<a href="{{ '/assets/data/datos-de-productos.json' | relative_url }}" download>
Descargar dataset JSON de productos <i class="fa-solid fa-download"></i>
</a>

Luego __buscas el archivo__ y __selecciona el archivo a importar__.

![Seleccionar archivo a importar](mongodb/compasss-seleccionar-archivo-a-importar.webp)

Si el formato es correcto, puedes confirma el archivo seleccionado haciendo clic en __Import__.

![Confirmar el archivo a importar](mongodb/compass-confirmar-el-archivo-a-importar.webp)

Luego verás los nuevos documentos en la colección.

![Nuevo documentos](mongodb/compass-nuevos-documentos-agregado-desde-un-archivo.webp)

## 5. Editar documentos

MongoDB Compass puede editar los documentos de una colección de forma muy simple.

En la colección buscas el documento y presionas el ícono para editar:

![Editar documento](mongodb/compass-icono-editar-documentos.webp)

Modifica los valores necesario y para actualizar presiona el botón de __Update__:

![Modificar valores](mongodb/compass-editar-valores-del-documento.webp)