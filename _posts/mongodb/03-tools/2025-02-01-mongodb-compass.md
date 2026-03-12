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

Modifica los valores necesarios y para actualizar presiona el botón de __Update__:

![Modificar valores](mongodb/compass-editar-valores-del-documento.webp)

## 6. Diferentes formas de visualizar documentos

MongoDB Compass ofrece varias formas de visualizar los documentos dentro de una colección. A continuación se puede observar las 3 opciones disponibles:

![Diferentes vistas de los documentos](mongodb/compass-diferentes-vistas-de-documentos.webp)

## 7. Crear nuevas colecciones

Para crear nuevas colecciones desde MongoDB Compass:

1. Selecciona la base de datos.
2. Haz clic sobre el ícono (`+`).
3. Nombra la colección y haz clic en __Create Collection__.

![Crear nuevas colecciones desde MongoDB Compass](mongodb/compass-crear-nuevas-colecciones.webp)

## 8. MongoDB Shell desde MongoDB Compass

Además de la interfaz gráfica, __MongoDB Compass__ incluye un __shell integrado__ que permite ejecutar comandos directamente contra la base de datos.

### 8.1 Abrir MongoDB Shell

Una vez conectado a una base de datos en MongoDB Compass:

1. Observa la parte superior de la ventana de MongoDB Compass.
2. Haz __clic__ en `>_ Open MongoDB shell`.
3. Se abrirá una consola interactiva en una nueva pestaña.

![Botón de abrir mongodb Shell](mongodb/compass-boton-open-mongodb-shell.webp)

### 8.2 Ejecutar comandos en MongoDB Shell

Una vez abierta la consola, puedes ejecutar comandos directamente.

![Mongosh comandos](mongodb/compass-mongosh-comandos.webp)

La ventaja de esto es poder ejecutar __bloques de código JavaScript__ para automatizar tareas.

![Comando foreach en Mongosh](mongodb/compass-comando-foreach-en-mongosh.webp)

## 9. Barra de filtros de MongoDB Compass

Una vez que tienes documentos dentro de una colección, puedes buscar información usando filtros.

Para aplicar un filtro:

1. Abre una colección.
2. En la parte superior encontrarás el campo para escribir el filtro.
3. Una vez escrita la consulta presiona el botón __Find__.

![Compass Barra de Filtros](mongodb/compass-usar-barra-de-filtros.webp)

## 10. Visualización del esquema en una colección

En la pestaña **Schema** de **MongoDB Compass** puedes analizar rápidamente la **estructura y distribución de los datos** almacenados en una colección.

### 10.1 Analizar una colección

Para generar este análisis debes presionar el botón **Analyze**, ubicado en la parte superior de la pestaña **Schema**.

![Visualización del esquema](mongodb/compass-schema-analyze.webp)

En el ejemplo de la imagen, se está analizando la colección **`products`** dentro de la base de datos `playground`. Compass genera automáticamente un **reporte basado en una muestra de documentos**, en este caso **51 documentos**, para mostrar cómo están organizados los datos.

Esto permite verificar rápidamente si los documentos siguen una estructura consistente.

En el ejemplo:

* El campo **`category`** muestra que aproximadamente **33 % de los productos pertenecen a la categoría `electronics`**.
* El resto de las categorías aparecen con menor frecuencia en el gráfico.

Esto ayuda a entender **qué valores son más comunes dentro de la colección**.

También puedes aplicar un **filtro previo** en el campo de consulta, por ejemplo:

```json
{ "category": "electronics" }
```
{: .nolineno .typing }

De esta manera se analizará únicamente los documentos que cumplan esa condición.

### 10.2 Exportar el esquema

La herramienta también permite exportar el análisis usando el botón **Export Schema**.

![Exportar schema](mongodb/compass-export-schema-standard.webp)

Esto resulta útil para:

* documentar la estructura de la base de datos
* compartir el modelo de datos con otros desarrolladores
* analizar inconsistencias en los documentos

En colecciones grandes, esta vista es especialmente útil para **comprender rápidamente cómo están estructurados los datos y detectar posibles problemas en el diseño o en la calidad de los datos**.
