---
title: "Markdown a PDF"
categories: ["Editores, IDEs", Vscode]
icon: icon/md_pdf.svg
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Esta extensión permite convertir cualquier archivo escrito en Markdown (`.md`) en un documento PDF, directamente desde el editor. Ideal para crear documentación profesional, informes, blogs o apuntes académicos sin salir de VSCode. Funciona con atajos de teclado o comandos de la paleta, facilitando la generación de PDFs y también nos da la posibilidad de exportar a otros formatos como __html__, __png__, etc.

{% include vscode-extension.html logo="https://yzane.gallerycdn.vsassets.io/extensions/yzane/markdown-pdf/1.5.0/1694185209938/Microsoft.VisualStudio.Services.Icons.Default" name="Markdown PDF" description="Conversor de Markdown para Visual Studio Code" url="https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf" %}

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

A continuación, puedes ver cómo queda el documento final usando algunos diagramas de ejemplo:

{% include embed/pdf.html file="pdf/markdown-pdf_plantuml.pdf" %}

### Emojis

Los emojis se pueden usar dentro de los documentos, pero hay algunos detalles a tener en cuenta. Por ejemplo, si escribes `:smile:` o pegas directamente un emoji como 😀, al exportar el archivo a PDF **el resultado no siempre será el mismo**.

* Los **shortcodes** (`:smile:`) son procesados por la extensión y se convierten en imágenes al generar el PDF, por lo que siempre se ven correctamente.
* Los emojis pegados directamente (😀) sí se muestran, pero dependen de la **fuente** que use el generador. Si la fuente no los soporta, pueden aparecer en **blanco y negro** o incluso como cuadros vacíos.

A continuación, puedes ver cómo queda el documento final usando emojis con **shortcodes**:

{% include embed/pdf.html file="pdf/markdown-pdf_emoji-shortcodes.pdf" %}
