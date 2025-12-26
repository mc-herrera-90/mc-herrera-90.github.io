---
title: "Markdown a PDF"
categories: ["Visual Studio Code", "Extensiones"]
icon: icon/md_pdf.svg
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---


Esta extensión permite convertir cualquier archivo escrito en Markdown (`.md`) en un documento PDF, directamente desde el editor. Excelente para crear documentación profesional, informes técnicos, apuntes académicos, etc. Funciona con atajos de teclado o comandos de la paleta, facilitando la generación de PDFs y también nos da la posibilidad de exportar a otros formatos como __html__, __png__, etc.

## Instalación

1. Abre Visual Studio Code
2. Cambia a Extensiones
3. Busca: `Markdown PDF` (autor: yzane)

![Instalar extensión](vscode/instalar-markdown-pdf.webp)

O puedes abrir su página en el Marketplace y añadirlo:

{% include vscode-extension.html logo="https://yzane.gallerycdn.vsassets.io/extensions/yzane/markdown-pdf/1.5.0/1694185209938/Microsoft.VisualStudio.Services.Icons.Default" name="Markdown PDF" description="Conversor de Markdown para Visual Studio Code" url="https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf" %}

<br/>

__No requiere configuración extra__ para empezar a usarla.


## Ventajas frente a otras alternativas

| Opción           | Ventaja                          |
| ---------------- | -------------------------------- |
| Pandoc           | Muy potente, pero más complejo   |
| Servicios online | Rápidos, pero poco seguros       |
| Markdown PDF     | Integrado, simple y configurable |

Markdown PDF destaca por su **equilibrio entre simplicidad y control**.


## Cómo usar Markdown PDF

Abre una carpeta en tu equipo, ábrela con **Visual Studio Code** y crea un archivo con extensión `.md`. Luego, sigue estos pasos:

1. Haz **clic derecho** sobre el archivo y selecciona una de las siguientes opciones:
   * `Markdown PDF: Export (pdf)`
   * `Markdown PDF: Export (html)`
   * `Markdown PDF: Export (png)`
   * `Markdown PDF: Export (jpeg)`
2. Espera a que finalice el proceso de exportación.
3. El archivo generado (por ejemplo, el PDF) se creará en el **mismo directorio** que el archivo Markdown original.


![Exportar a PDF](vscode/markdown-pdf-exportar-a-pdf.webp)

## Características principales

### 1. Soporte completo de Markdown

Markdown PDF es compatible con la sintaxis estándar de Markdown y respeta la estructura del documento al exportarlo. Se recomienda saber la sintaxis de Markdown, aquí te dejo una referencia rápida a consultar la guía oficial de **CommonMark**: [https://commonmark.org/help/](https://commonmark.org/help/){:target="_blank"}

Markdown PDF respeta:

* Encabezados (`#`, `##`, `###`)
* Listas ordenadas y no ordenadas
* Citas (`>`)
* Enlaces e imágenes
* Tablas
* Bloques de código
* Énfasis (`**negrita**`, `*cursiva*`)

### 2. Soporte para bloques de código

Los bloques de código se renderizan correctamente:

````markdown
```js
function hola() {
  console.log("Hola Markdown PDF");
}
```
````
{:.nolineno}

Incluye:
- Tipografía monoespaciada
- Fondo diferenciado
- Saltos de línea correctos

![Exportar a PDF](vscode/markdown-pdf-render-code-block.webp)


### 3. Soporte para Mermaid (diagramas)

Si usas **Mermaid**, Markdown PDF puede renderizar diagramas como:

````markdown
```mermaid
graph TD
  A[Markdown] --> B[PDF]
  A --> C[HTML]
````
````
{:.nolineno}

Esto es especialmente útil para:

* Diagramas de arquitectura
* Diagramas de flujo
* Diagramas de clases

### 4. Uso de CSS personalizado

Una de sus mejores características es la posibilidad de **inyectar CSS propio** para personalizar el PDF.

En la configuración de VS Code (`settings.json`):

```json
"markdown-pdf.styles": [
  "styles/pdf.css"
]
```
{:.nolineno}

Ejemplos de personalización:

* Tipografía corporativa
* Márgenes
* Colores
* Estilo de encabezados
* Apariencia de tablas


### 5. Encabezados y pies de página

Puedes definir **header y footer** para el PDF:

```json
"markdown-pdf.headerTemplate": "<div style='font-size:10px;'>Mi documento</div>",
"markdown-pdf.footerTemplate": "<div style='font-size:10px;'>Página <span class='pageNumber'></span></div>"
```
{:.nolineno}

Perfecto para:

* Informes académicos
* Documentación profesional
* Entregables formales


### 6. Control de paginación

Soporta reglas CSS como:

```css
.page-break {
  page-break-after: always;
}
```
{:.nolineno}

En Markdown:

```md
<div class="page-break"></div>
```
{:.nolineno}

Muy útil para separar capítulos o secciones.


### 7. Compatibilidad con imágenes locales y remotas

Markdown PDF maneja bien:

* Imágenes locales (`./img/diagrama.png`)
* Imágenes remotas (`https://...`)
* Escalado automático
* Alineación

### 8. Exportación sin conexión

Todo el proceso ocurre **localmente**, sin subir archivos a la nube.
Ideal para:

* Información sensible
* Trabajo offline
* Entornos corporativos


## Configuraciones útiles recomendadas

```json
"markdown-pdf.format": "A4",
"markdown-pdf.margin.top": "20mm",
"markdown-pdf.margin.bottom": "20mm",
"markdown-pdf.margin.left": "15mm",
"markdown-pdf.margin.right": "15mm",
"markdown-pdf.displayHeaderFooter": true
```
{:.nolineno}



### Personalizar PDF

Algo realmente destacable de esta extensión es que permite personalizar el estilo del PDF usando CSS. Esto significa que puedes crear tu propio diseño, ajustando tipografías, colores, márgenes, tamaños de letra, etc.

Esto se debe **ajustar en el archivo** `settings.json` para que se cargue la hoja de estilo correspondiente al exportar el PDF:  

{% include file-viewer.html files=site.data.codes.md_pdf.estilos name="demo1" %}

> Para ver más opciones de los estilos y cómo se interpretan las rutas revisalo [aquí](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf#markdown-pdf.styles){:target='_blank'}
{: .prompt-tip }

A continuación, puedes observar un ejemplo de cómo se vería el documento final aplicando estilos CSS:

{% include embed/pdf.html file="pdf/markdown-pdf_estilos_css.pdf" %}

### Compatibilidad con PlantUML

Al ser compatible con [**PlantUML**](https://plantuml.com/){:target='_blank'}, esta extensión nos permite **insertar directamente el código de los diagramas en el archivo `.md`**, y al exportarlo a PDF se renderizan automáticamente con su formato y estilo.


```
@startuml
class Persona {
  - nombre : String
  - edad : int
  + getNombre() : String
  + getEdad() : int
}

class Estudiante {
  - matricula : String
  + getMatricula() : String
}

Persona <|-- Estudiante
@enduml
```
{:file="md-pdf_plantuml.md"}
> Este es un ejemplo breve, acotado solo al objetivo de aprendizaje. Recuerda definir las directivas de inicio y final; de lo contrario, el diagrama no se renderizará.
> ```
> @startuml
> ...render...
> @enduml
> ```
> {:file="demo.uml"}
{: .prompt-info }

Con esto, abarcamos prácticamente todos los diagramas contemplados en el modelo C4.

| Nivel | Nombre       | Qué muestra                            | Para quién es                       |
| ----- | ------------ | -------------------------------------- | ----------------------------------- |
| C1    | Contexto     | Sistema + usuarios + sistemas externos | Público general, gerencia, clientes |
| C2    | Contenedores | Arquitectura general + tecnologías     | Arquitectos, desarrolladores        |
| C3    | Componentes  | Módulos internos                       | Desarrolladores                     |
| C4    | Código       | Clases y patrones de código            | Equipo técnico avanzado             |


A continuación, puedes ver cómo queda el documento final usando algunos diagramas que diseñé para que puedas animarte:

{% include embed/pdf.html file="pdf/markdown-pdf_plantuml.pdf" %}

{% include circle-line.html %}

### Emojis

Los emojis se pueden usar dentro de los documentos, pero hay algunos detalles a tener en cuenta. Por ejemplo, si escribes `:smile:` o pegas directamente un emoji como 😀, al exportar el archivo a PDF **el resultado no siempre será el mismo**.

* Los **shortcodes** (`:smile:`) son procesados por la extensión y se convierten en imágenes al generar el PDF, por lo que siempre se ven correctamente.
* Los emojis pegados directamente (😀) sí se muestran, pero dependen de la **fuente** que use el generador. Si la fuente no los soporta, pueden aparecer en **blanco y negro** o incluso como cuadros vacíos.

A continuación, puedes ver cómo queda el documento final usando emojis con **shortcodes**:

{% include embed/pdf.html file="pdf/markdown-pdf_emoji-shortcodes.pdf" %}
