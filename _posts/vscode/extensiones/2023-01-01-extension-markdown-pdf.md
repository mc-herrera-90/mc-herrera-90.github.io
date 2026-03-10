---
title: "VS Code: Markdown PDF, extensión para convertir archivos a diferentes formatos"
categories: ["Visual Studio Code", "VSCode_01-Extensiones"]
badge: vscode
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

> __Exportación sin conexión__:  
> Todo el proceso ocurre **localmente**, sin subir archivos a la nube. Ideal para __proteger información sensible__ y __trabajo offline__.
{:.prompt-tip}

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

Si usas **Mermaid**, Markdown PDF puede renderizar diagramas correctamente. Sin embargo, **en versiones recientes de Mermaid los diagramas pueden no generarse correctamente** al exportar a PDF.

Una forma de solucionarlo es cambiar la versión de la librería en el servidor de mermaid en el archivo de configuración de VS Code (`settings.json`):

```js
{
  // "markdown-pdf.mermaidServer": "https://unpkg.com/mermaid/dist/mermaid.min.js",
  "markdown-pdf.mermaidServer": "https://unpkg.com/mermaid@9.4.3/dist/mermaid.min.js",
}
```
{:file="settings.json" .nolineno }


#### 3.1 Diagrama de flujo (Flowchart)

{% tabs d-flowchart %}
{% tab d-flowchart Markdown %}
````html
```mermaid
---
title: "Vertical (arriba → abajo) — TD o TB"
---
flowchart TD
    A[Inicio] --> B{"¿Usuario autenticado?"}
    B -- Sí --> C[Mostrar dashboard]
    B -- No --> D[Redirigir a login]
    C --> E[Fin]
    D --> E
```

```mermaid
---
title: "Horizontal (izquierda → derecha) — LR"
---
flowchart LR
    A[Inicio] --> B{"¿Usuario autenticado?"}
    B -- Sí --> C[Mostrar dashboard]
    B -- No --> D[Redirigir a login]
    C --> E[Fin]
    D --> E
```

```mermaid
---
title: "Cambiar tema (neutral, dark, forest)"
---
%%{init: {'theme': 'forest'}}%%
flowchart LR
    A[Inicio] --> B{"¿Usuario autenticado?"}
    B -- Sí --> C[Mostrar dashboard]
    B -- No --> D[Redirigir a login]
    C --> E[Fin]
    D --> E
```

<h3 style="text-align:center;">Centrado</h3>

<div class="mermaid" align="center">
flowchart TD
    A[Inicio] --> B{"¿Usuario autenticado?"}
    B -- Sí --> C[Mostrar dashboard]
    B -- No --> D[Redirigir a login]
    C --> E[Fin]
    D --> E
</div>
````
{:file="flowchart.md"}
{% endtab %}
{% tab d-flowchart PDF %}
{% include embed/pdf.html file="pdf/mermaid/flowchart.pdf" %}
{% endtab %}
{% endtabs %}

#### 3.2. Diagrama de secuencia

{% tabs d-sequence %}
{% tab d-sequence Markdown %}
````html
<style>
    pre:last-child {
        background: #000;
    }
</style>

```mermaid
---
title: "Diagrama de secuencia normal"
---
sequenceDiagram
    participant Usuario
    participant App
    participant API

    Usuario->>App: Solicita datos
    App->>API: GET /data
    API-->>App: Respuesta JSON
    App-->>Usuario: Muestra información
```

```mermaid
---
title: "Diagrama de secuencia con tema personalizado"
---
%%{init: {
  "theme": "base",
  "themeVariables": {
    "actorBorder": "#4CAF50",
    "actorBkg": "#2196F3",
    "actorTextColor": "#fff",
    "messageColor": "#FF5722",
    "noteBkgColor": "#FF9800",
    "noteTextColor": "#000",
    "fontFamily": "monospace",
  }
}}%%
sequenceDiagram
    participant Usuario
    participant App
    participant API

    Usuario->>App: Solicita datos
    App->>API: GET /data
    API-->>App: Respuesta JSON
    App-->>Usuario: Muestra información
    Note over App,API: Nota importante
```

```mermaid
---
title: "Diagrama de secuencia con tema dark"
---
%%{init: {'theme': 'dark'}}%%
sequenceDiagram
    participant Usuario
    participant App
    participant API

    Usuario->>App: Solicita datos
    App->>API: GET /data
    API-->>App: Respuesta JSON
    App-->>Usuario: Muestra información
```
````
{:file="sequence.md"}
{% endtab %}
{% tab d-sequence PDF %}
{% include embed/pdf.html file="pdf/mermaid/sequence.pdf" %}
{% endtab %}
{% endtabs %}

#### 3.3 Diagrama de clases

{% tabs d-classdiagram %}
{% tab d-classdiagram Markdown %}
````
```mermaid
---
title: 1. Diagrama Básico
---
classDiagram
    class Usuario {
        +id
        +nombre
        +email
        +login()
    }
```

```mermaid
---
title: 2. Diagrama Medio y relacionaes (con dirección horizontal)
---
classDiagram
    direction LR
    class Usuario {
        +id
        +nombre
        +email
        +login()
        +logout()
    }

    class Admin {
        +permisos
        +crearUsuario()
        +eliminarUsuario()
    }

    class Cliente {
        +id
        +nombre
        +historialCompras()
    }

    Usuario <|-- Admin
    Cliente --> Usuario
```

```mermaid
---
title: 3. Diagrama extendido con notas y relaciones (con tema forest)
---
%%{init: {"theme":"forest","fontFamily":"monospace"}}%%
classDiagram
    class Usuario {
        +id
        +nombre
        +email
        +login()
        +logout()
    }

    class Admin {
        +permisos
        +crearUsuario()
        +eliminarUsuario()
    }

    class Cliente {
        +id
        +nombre
        +historialCompras()
    }

    class Producto {
        +id
        +nombre
        +precio
        +descuento()
    }

    class Pedido {
        +id
        +fecha
        +total()
    }

    class Inventario {
        +productosDisponibles()
        +actualizarStock()
    }

    Usuario <|-- Admin
    Cliente --> Pedido
    Pedido --> Producto
    Producto --> Inventario

    %% Notas usando la sintaxis correcta
    note for  Usuario "Usuario general del sistema"
    note for Admin "Admin con permisos especiales"
    note for Pedido "Pedido contiene productos"
```
````
{:file="classDiagram.md"}
{% endtab %}
{% tab d-classdiagram PDF %}
{% include embed/pdf.html file="pdf/mermaid/classDiagram.pdf" %}
{% endtab %}
{% endtabs %}

#### 3.4 Diagrama de estados

{% tabs d-statediagram %}
{% tab d-statediagram Markdown %}
````
```mermaid
---
title: 1. Diagrama básico
---
stateDiagram-v2
    [*] --> Inactivo

    Inactivo --> Activo : login
    Activo --> Inactivo : logout

    Activo --> Suspendido : timeout
    Suspendido --> Activo : reactivar

```

```mermaid
---
title: 2. Diagrama Medio (con acciones en transiciones y estados)
---
stateDiagram-v2
    [*] --> Inactivo

    Inactivo --> Activo : login / validarCredenciales()
    Activo --> Inactivo : logout / cerrarSesion()

    Activo --> Suspendido : inactividad / bloquear()
    Suspendido --> Activo : reactivar / habilitar()
```

<div class="page">

```mermaid
---
title: 3. Diagrama extendido (con notas y más lógica)
---
stateDiagram-v2
    
    [*] --> Inactivo

    Inactivo --> Validando : login
    Validando --> Activo : OK
    Validando --> Inactivo : ERROR

    state Activo {
        [*] --> Navegando
        Navegando --> Comprando : comprar
        Comprando --> Navegando : cancelar
    }

    Activo --> Suspendido : timeout
    Suspendido --> Activo : reactivar
    Activo --> Inactivo : logout

    note right of Suspendido
      Cuenta bloqueada
      temporalmente
    end note
```
````
{:file="stateDiagram.md"}
{% endtab %}
{% tab d-statediagram PDF %}
{% include embed/pdf.html file="pdf/mermaid/stateDiagram.pdf" %}
{% endtab %}
{% endtabs %}

#### 3.5 Diagrama ER (Entidad–Relación)


{% tabs d-erdiagram %}
{% tab d-erdiagram Markdown %}
````
```mermaid
---
title: 1. Modelo base (conceptual)
---
erDiagram
    USUARIO ||--o{ PEDIDO : realiza
    PEDIDO ||--|{ PRODUCTO : contiene

    USUARIO {
        int id
        string nombre
        string email
        string telefono
    }

    PEDIDO {
        int id
        date fecha
    }

    PRODUCTO {
        int id
        string nombre
        float precio
    }
```

<div class="page">

```mermaid
---
title: 2. Modelo intermedio (lógico temprano)
---
%%{init: {'theme': 'forest'}}%%
erDiagram
    USUARIO ||--o{ PEDIDO : realiza
    PEDIDO ||--o{ DETALLE_PEDIDO : tiene
    PRODUCTO ||--o{ DETALLE_PEDIDO : aparece_en

    USUARIO {
        int id_usuario PK
        string nombre
        string email UK
        string telefono UK
    }

    PEDIDO {
        int id_pedido PK
        date fecha
    }

    PRODUCTO {
        int id_producto PK
        string nombre
        float precio
    }

    DETALLE_PEDIDO {
        int cantidad
        float precio_unitario
    }
```

<div class="page">


<h3>3. Modelo final (lógico / relacional)</h3>

<pre class="mermaid" style="display: flex; justify-content: center; background: transparent; border: none">
%%{init: {'theme': 'neutral'}}%%
erDiagram
    USUARIO ||--o{ PEDIDO : genera
    USUARIO ||--|| ROL : tiene
    PEDIDO ||--o{ DETALLE_PEDIDO : incluye
    PRODUCTO ||--o{ DETALLE_PEDIDO : aparece_en

    USUARIO {
        int id_usuario PK
        string nombre
        string email UK
        int id_rol FK
    }

    ROL {
        int id_rol PK
        string descripcion UK
    }

    PEDIDO {
        int id_pedido PK
        date fecha
        int id_usuario FK
    }

    PRODUCTO {
        int id_producto PK
        string nombre
        float precio
    }

    DETALLE_PEDIDO {
        int id_pedido FK
        int id_producto FK
        int cantidad
        float precio_unitario
    }
</pre>
````
{:file="erDiagram.md"}
{% endtab %}
{% tab d-erdiagram PDF %}
{% include embed/pdf.html file="pdf/mermaid/erDiagram.pdf" %}
{% endtab %}
{% endtabs %}


#### 3.6 Diagrama de Gantt

{% tabs d-ganttdiagram %}
{% tab d-ganttdiagram Markdown %}
````
```mermaid
gantt
    title Plan del proyecto
    dateFormat YYYY-MM-DD

    section Desarrollo
    Diseño          : 2024-01-01, 5d
    Implementación  : 2024-01-06, 10d
    Pruebas         : 2024-01-16, 4d
```

```mermaid
gantt
    title Plan del proyecto (con dependencias)
    dateFormat YYYY-MM-DD
    excludes weekends
    axisFormat %d/%m

    section Desarrollo
    Diseño          :done,    d1, 2024-01-01, 5d
    Implementación  :active,  d2, after d1, 10d
    Pruebas         :         d3, after d2, 4d
```

```mermaid
gantt
    title Proyecto - Versión avanzada
    dateFormat YYYY-MM-DD
    excludes weekends
    axisFormat %d/%m

    section Análisis
    Requisitos      :done,    a1, 2024-01-01, 3d
    Aprobación      :milestone, a2, after a1, 0d

    section Desarrollo
    Diseño          :done,    d1, after a2, 5d
    Backend         :active,  d2, after d1, 8d
    Frontend        :         d3, after d1, 8d

    section Pruebas
    Pruebas QA      :         t1, after d2, 4d
    Correcciones    :         t2, after t1, 3d
```
````
{:file="ganttDiagram.md"}
{% endtab %}
{% tab d-ganttdiagram PDF %}
{% include embed/pdf.html file="pdf/mermaid/ganttDiagram.pdf" %}
{% endtab %}
{% endtabs %}


### 4. Uso de CSS personalizado

Una de sus mejores características es la posibilidad de **inyectar CSS propio** para personalizar el PDF.

En la configuración de VS Code (`settings.json`):

```json
"markdown-pdf.styles": [
  "styles/pdf.css"
]
```
{:file="settings.json" .nolineno}

Ejemplos de personalización:

* Tipografía corporativa
* Márgenes
* Colores
* Estilo de encabezados
* Apariencia de tablas

{% include file-viewer.html files=site.data.codes.markdown-pdf.styles-settings name="styles_settings" %}

El resultado, sería el siguiente:

{% include embed/pdf.html file="pdf/mermaid/preview-with-style.pdf" %}

### 5. Encabezados y pies de página

Puedes definir **header y footer** para el PDF:

```json
{
    "markdown-pdf.headerTemplate": "<div style='font-size:10px;'>Mi documento</div>",
    "markdown-pdf.footerTemplate": "<div style='font-size:10px;'>Página <span class='pageNumber'></span></div>"
}
```
{:file="settings.json" .nolineno}

Por ejemplo:
{% tabs header_and_footer %}
{% tab header_and_footer Markdown %}
````markdown
# Prueba de Header y Footer

Este documento sirve únicamente para **verificar que el header y footer de página**.

El header debería mostrar:
* **@mcherrera** alineado a la **izquierda**
* **El título del documento** alineado a la **derecha**

El footer debería mostrar:
- [mcherrera.dev](https://mcherrera.dev) a la izquierda
- **Número de página** al centro

Puedes repetir este texto varias veces para ver cómo funciona en varias páginas:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui, ac sagittis metus. Sed sit amet lectus a erat blandit sodales. Aenean eget nisl nec urna malesuada tristique. Nullam pulvinar eros sit amet arcu convallis, nec feugiat ligula sagittis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui, ac sagittis metus. Sed sit amet lectus a erat blandit sodales. Aenean eget nisl nec urna malesuada tristique. Nullam pulvinar eros sit amet arcu convallis, nec feugiat ligula sagittis.

<div class="page"></div>

# Segunda página

Así podemos ver que tanto el encabezado como el pie de página se mantienen correctamente en todas las páginas.
````
{:file="header-and-footer.md"}
{% endtab %}
{% tab header_and_footer Settings %}
```json
{
    "markdown-pdf.format": "A4",
    "markdown-pdf.margin.top": "2cm",
    "markdown-pdf.margin.bottom": "2cm",
    "markdown-pdf.headerTemplate": "<div style=\"font-size: 9px; margin-left: 1cm;\"> @mcherrera</div> <div style=\"font-size: 9px; margin-left: auto; margin-right: 1cm; \"><span class='title'></span></div>",
    "markdown-pdf.footerTemplate": "<div style='width:100%; font-size:10px; padding: 0 1cm'><a href='https://mcherrera.dev' style='float:left; text-decoration:none; color:inherit;'>mcherrera.dev</a><span style='display:block; text-align:center;'>Página <span class='pageNumber'></span></span></div>"
}
```
{:file="settings.json" .nolineno}
{% endtab %}
{% tab header_and_footer PDF %}
{% include embed/pdf.html file="pdf/mermaid/header-and-footer.pdf" %}
{% endtab %}
{% endtabs %}

### 6. Compatibilidad con imágenes locales y remotas

Markdown PDF maneja bien:

* Imágenes locales (`./images/imagen.png`)
* Imágenes remotas (`https://...`)
* Escalado automático
* Alineación

Ejemplo:

{% tabs d-imagenes %}
{% tab d-imagenes Markdown %}
````markdown
# Prueba de imágenes

Markdown PDF maneja bien:

- Imágenes locales
- Imágenes remotas
- Escalado automático
- Alineación

## Imagen local (ruta relativa)

![Imagen local](./images/heart.png)

## Imagen local con tamaño controlado

<img src="./images/heart.png" width="400" alt="Imagen local escalado">

## Imagen remota

![Logo remoto](https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png)

## Imagen remota centrada

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" width="200" alt="Imagen remota centrada">
</p>

## Imagen alineada a la derecha

<p align="right">
  <img src="./images/heart.png" width="200" alt="Imagen local derecha">
</p>
````
{: file="test-imagenes.md" .nolineno }
{% endtab %}
{% tab d-imagenes PDF %}
{% include embed/pdf.html file="pdf/mermaid/test-imagenes.pdf" %}
{% endtab %}
{% endtabs %}


### 7. Soporte extendido basado en markdown-it

Markdown PDF utiliza **`markdown-it`**, lo que permite usar varias funcionalidades avanzadas de Markdown:

#### 7.1 Contenedores (markdown-it-container)

{% tabs markdown_it_container %}
{% tab markdown_it_container Markdown %}
````markdown
::: note
Este es un bloque de nota
:::

::: warning
Este es un bloque de advertencia
:::
````
{:.nolineno}
{% endtab %}
{% tab markdown_it_container Output %}
```html
<div class="note">
<p>Este es un bloque de nota</p>
</div>
<div class="warning">
<p>Este es un bloque de advertencia</p>
</div>
```
{:.nolineno}
{% endtab %}
{% endtabs %}

Se pueden estilizar con CSS.

#### 7.2 HTML embebido

```markdown
<p align="center">
  <img src="./img/diagrama.png" width="300">
</p>
```

Permite centrar imágenes, usar `<div>` y otros elementos HTML.

#### 7.3 Checkboxes (markdown-it-checkbox)

Extensión para habilitar **checkboxes** en Markdown al generar el PDF.

{% tabs markdown-it-checkbox %}
{% tab markdown-it-checkbox Markdown %}
```md
- [x] Tarea completada
- [ ] Tarea pendiente
```
{:.nolineno}
{% endtab %}
{% tab markdown-it-checkbox Output %}
```html
<ul>
<li><input type="checkbox" id="checkbox0" checked="true"><label for="checkbox0">Tarea completada</label></li>
<li><input type="checkbox" id="checkbox1"><label for="checkbox1">Tarea pendiente</label></li>
</ul>
```
{:.nolineno}
{% endtab %}
{% endtabs %}

#### 7.4 Includes (markdown-it-include)

**Markdown PDF** ya incluye soporte para **`markdown-it-include`**.

Este plugin permite **insertar el contenido de otros archivos Markdown** dentro de un documento principal usando una sintaxis especial.

La inclusión se realiza anteponiendo dos puntos (`:`) a un enlace Markdown:

```md
:[Texto descriptivo](ruta/al/archivo.md)
```
{:.nolineno}

* El archivo indicado se **inserta directamente** en el documento
* La ruta es **relativa al archivo actual**

__Ejemplo básico__:

{% include file-viewer.html files=site.data.codes.markdown-pdf.markdown-it-include name="demo-markdown-include" %}

Al exportar a PDF, la introducción y el diagrama se renderizan **como parte del documento**, no como un enlace. Por ejemplo, el siguiente PDF sería el resultado:

{% include embed/pdf.html file="pdf/mermaid/markdown-it-include.pdf" %}

<br/>
__Consideraciones__:

- Solo funciona con archivos `.md`
- El contenido incluido **hereda estilos y numeración**
- Ideal para separar capítulos, diagramas y anexos
- Facilita mantener documentos largos sin repetir contenido

#### 7.5 PlantUML (markdown-it-plantuml)

PlantUML permite crear diagramas a partir de texto plano, facilitando su mantenimiento y control de versiones dentro de la documentación técnica. Mediante [**`markdown-it-plantuml`**](https://github.com/gmunguia/markdown-it-plantuml){:target='_blank'}, los diagramas definidos en bloques entre las directivas `@startuml` y `@enduml` se renderizan automáticamente al exportar a PDF.

> Recuerda definir las directivas de inicio y final; de lo contrario, el diagrama no se renderizará.
> ```
> @startuml
> ...render...
> @enduml
> ```
> {:file="demo.uml"}
{: .prompt-info }

__Ejemplo básico__:

{% tabs d-plantuml %}
{% tab d-plantuml Markdown %}
```
## Ejemplo 1 – Estilo visual predeterminado

@startuml
class Usuario {
  id: int
  nombre: string
  email: string
}

class Pedido {
  id: int
  fecha: date
}

Usuario "1" --> "0..*" Pedido
@enduml

## Ejemplo 2 – Estilo visual personalizado

@startuml
skinparam classBackgroundColor #EEF2FF
skinparam classBorderColor #1E40AF
skinparam classFontColor #1F2937
skinparam classFontSize 12

class Producto {
  +id: int
  +nombre: string
  +precio: float
}

class Categoria {
  +id: int
  +nombre: string
}

Categoria "1" --> "0..*" Producto : agrupa
@enduml


## Ejemplo 3 – Paquetes y visibilidad

@startuml
left to right direction

skinparam packageStyle rectangle

package "Dominio" {
  class Usuario {
    +id: int
    +nombre: string
  }

  class Rol {
    +id: int
    +nombre: string
  }
}

package "Autenticación" {
  class AuthService {
    +login()
    +logout()
  }
}

Usuario "*" -- "*" Rol
AuthService ..> Usuario : valida
@enduml
```
{:file="markdown-it-plantuml.md"}
{% endtab %}
{% tab d-plantuml PDF %}
{% include embed/pdf.html file="pdf/markdown-pdf/markdown-it-plantuml.pdf" %}
{% endtab %}
{% endtabs %}

## Ejemplos avanzados

### Personalizar diseño PDF

Algo realmente destacable de esta extensión es que permite personalizar el estilo del PDF usando CSS. Esto significa que puedes crear tu propio diseño, ajustando tipografías, colores, márgenes, tamaños de letra, etc.

{% include file-viewer.html files=site.data.codes.md_pdf.estilos name="demo1" %}

> Para ver más opciones de los estilos y cómo se interpretan las rutas revisalo [aquí](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf#markdown-pdf.styles){:target='_blank'}
{: .prompt-tip }

A continuación, puedes observar un ejemplo de cómo se vería el documento final aplicando estilos CSS:

{% include embed/pdf.html file="pdf/markdown-pdf_estilos_css.pdf" %}

### Diagramas con PlantUML

A continuación, puedes ver cómo queda el PDF final usando algunos diagramas con PlantUML que diseñé:

{% include embed/pdf.html file="pdf/markdown-pdf_plantuml.pdf" %}

### Usar Emojis

Los emojis se pueden usar dentro de los documentos, pero hay algunos detalles a tener en cuenta. Por ejemplo, si escribes `:smile:` o pegas directamente un emoji como 😀, al exportar el archivo a PDF **el resultado no siempre será el mismo**.

* Los **shortcodes** (`:smile:`) son procesados por la extensión y se convierten en imágenes al generar el PDF, por lo que siempre se ven correctamente.
* Los emojis pegados directamente (😀) sí se muestran, pero dependen de la **fuente** que use el generador. Si la fuente no los soporta, pueden aparecer en **blanco y negro** o incluso como cuadros vacíos.

A continuación, puedes ver cómo queda el documento final usando emojis con **shortcodes**:

{% include embed/pdf.html file="pdf/markdown-pdf_emoji-shortcodes.pdf" %}
