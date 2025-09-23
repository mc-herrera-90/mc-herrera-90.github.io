---
title: "Markdown a PDF"
categories: [Vscode, Extensiones]
icon: icon/md_pdf.svg
ex1:
  - name: ".vscode/settings.json"
    language: "json"
    content: |
      {
        "markdown-pdf.styles": [
          "style.css"
        ]
      }

  - name: "style.css"
    language: "css"
    content: |
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 10px;
        }
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          margin: 20px 0;
          border: 1px solid #ccc8;
        }
        .card-header {
          background: #3498db;
          color: white;
          padding: 15px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .card-body {
          padding: 10px;
        }
        .command {
          background: #f8f9fa;
          border-left: 4px solid #3498db;
          padding: 8px 10px;
          margin: 10px 0;
          border-radius: 0 5px 5px 0;
          font-family: 'Courier New', monospace;
          font-size: 0.95rem;
          color: #2c3e50;
        }
        .description {
          color: #7f8c8d;
          font-size: 0.7rem;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .file-commands .card-header { background: #e74c3c; }
        .file-commands .command { border-left-color: #e74c3c; }
        .system-commands .card-header { background: #9b59b6; }
        .system-commands .command { border-left-color: #9b59b6; }
        .network-commands .card-header { background: #f39c12; }
        .network-commands .command { border-left-color: #f39c12; }
        .permissions-commands .card-header { background: #16a085; }
        .permissions-commands .command { border-left-color: #16a085; }
        .process-commands .card-header { background: #d35400; }
        .process-commands .command { border-left-color: #d35400; }
        .search-commands .card-header { background: #27ae60; }
        .search-commands .command { border-left-color: #27ae60; }

  - name: "markdown-pdf_estilos.md"
    language: "md"
    content: |
        <div class="container">
          <p align="center" style="margin: 90px 0">
            &lt;img src="logo_linux.png" height="600"/>
          </p>
          <p align="center" style="margin: 70px 0">
            <h2 align="center">Cheatsheet — comandos Linux esenciales</h2>
            <p align="center">Comandos rápidos para archivos, permisos, procesos, red y búsqueda</p>
          </p>
          <div class="cards-grid" style="margin-top: 155px">
            <div class="card file-commands">
                <div class="card-header">Comandos de Archivos</div>
                <div class="card-body">
                  <div class="command">ls -lha</div>
                  <div class="description">Listar archivos con detalles y archivos ocultos</div>
                  <div class="command">cp -r origen destino</div>
                  <div class="description">Copiar directorios de forma recursiva</div>
                  <div class="command">rm -rf directorio</div>
                  <div class="description">Eliminar directorio y su contenido (¡cuidado!)</div>
                  <div class="command">mv archivo nuevo_nombre</div>
                  <div class="description">Mover o renombrar archivos</div>
                  <div class="command">find /ruta -name "*.txt"</div>
                  <div class="description">Buscar archivos por nombre</div>
                </div>
              </div>
              <div class="card system-commands">
                <div class="card-header">Sistema y Información</div>
                <div class="card-body">
                  <div class="command">top</div>
                  <div class="description">Monitorizar procesos y uso de recursos</div>
                  <div class="command">df -h</div>
                  <div class="description">Mostrar espacio en disco de forma legible</div>
                  <div class="command">free -h</div>
                  <div class="description">Mostrar memoria libre y disponible</div>
                  <div class="command">uname -a</div>
                  <div class="description">Mostrar información del sistema</div>
                  <div class="command">history</div>
                  <div class="description">Mostrar historial de comandos</div>
                </div>
              </div>
              <div class="card network-commands">
                  <div class="card-header">Red y Conectividad</div>
                  <div class="card-body">
                    <div class="command">ping dominio.com</div>
                    <div class="description">Comprobar conectividad con un host</div>
                    <div class="command">ifconfig</div>
                    <div class="description">Mostrar configuración de interfaces de red</div>
                    <div class="command">netstat -tulpn</div>
                    <div class="description">Mostrar puertos y conexiones activas</div>
                    <div class="command">ssh usuario@host</div>
                    <div class="description">Conectar por SSH a un servidor remoto</div>
                    <div class="command">wget url</div>
                    <div class="description">Descargar archivos desde internet</div>
                  </div>
              </div>
              <div class="card permissions-commands">
                <div class="card-header">Permisos y Propiedad</div>
                <div class="card-body">
                  <div class="command">chmod 755 archivo</div>
                  <div class="description">Cambiar permisos de archivo (rwxr-xr-x)</div>
                  <div class="command">chown usuario:grupo archivo</div>
                  <div class="description">Cambiar propietario y grupo de archivo</div>
                  <div class="command">chmod +x script.sh</div>
                  <div class="description">Hacer un archivo ejecutable</div>
                  <div class="command">umask 022</div>
                  <div class="description">Establecer máscara de permisos por defecto</div>
                  <div class="command">getfacl archivo</div>
                  <div class="description">Ver permisos ACL de un archivo</div>
                </div>
              </div>
              <div class="card process-commands">
                <div class="card-header">Gestión de Procesos</div>
                <div class="card-body">
                  <div class="command">ps aux</div>
                  <div class="description">Listar todos los procesos en ejecución</div>
                  <div class="command">kill -9 PID</div>
                  <div class="description">Terminar proceso forzosamente por ID</div>
                  <div class="command">bg</div>
                  <div class="description">Reanudar proceso en segundo plano</div>
                  <div class="command">fg</div>
                  <div class="description">Traer proceso al primer plano</div>
                  <div class="command">nohup comando &</div>
                  <div class="description">Ejecutar comando persistente</div>
                </div>
              </div>
              <div class="card search-commands">
                <div class="card-header">Búsqueda y Texto</div>
                <div class="card-body">
                  <div class="command">grep "texto" archivo</div>
                  <div class="description">Buscar texto dentro de archivos</div>
                  <div class="command">awk '{print $1}' archivo</div>
                  <div class="description">Procesar texto y extraer campos</div>
                  <div class="command">sed 's/old/new/g' archivo</div>
                  <div class="description">Reemplazar texto en archivos</div>
                  <div class="command">sort archivo</div>
                  <div class="description">Ordenar líneas de texto</div>
                  <div class="command">uniq archivo</div>
                  <div class="description">Mostrar líneas únicas</div>
                </div>
              </div>
          </div>
        </div>
---


Esta extensión permite convertir cualquier archivo escrito en Markdown (`.md`) en un documento PDF, directamente desde el editor. deal para crear documentación profesional, informes, blogs o apuntes académicos sin salir de VSCode. Funciona con atajos de teclado o comandos de la paleta, facilitando la generación de PDFs y también nos da la posibilidad de exportar a otros formatos como __html__, __png__, etc.

### Personalizar PDF

Algo realmente destacable de esta extensión es que permite personalizar el estilo del PDF usando CSS. Esto significa que puedes crear tu propio diseño, ajustando tipografías, colores, márgenes, tamaños de letra, etc.

Esto se debe **ajustar en el archivo** `settings.json` para que se cargue la hoja de estilo correspondiente al exportar el PDF:  

{% include file-viewer.html files=page.ex1 %}

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
