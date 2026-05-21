---
title: Instalación de MongoDB y Mongo Compass
---

<section data-markdown
          data-separator-vertical="^\n--\n$">
  <textarea data-template>

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ![](/assets/media/mongodb/mongodb-proto.avif)

    ## Instalar MongoDB Community Server

    ---
    
    ## Elige tu entorno

    {% include markdown/reveal/os_system.liquid os_linux='ubuntu' color_linux='#E95420' %}

    ---

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" id="windows" -->

    ## Instalación en Windows <i class="fa-brands fa-windows fa-2xl" style="color: #08A1F7 !important"></i>

    ### Descarga el archivo `.msi` 👇

    <a href="https://www.mongodb.com/try/download/community" style="color: #ff8 !important" target="_blank">
      https://www.mongodb.com/try/download/community
    </a>
  
    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 1. Descargar y ejecutar el asistente

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_01.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 2. Aceptar términos


    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>
    
    <img src="/assets/media/mongodb/instalacion-windows/_02.webp" data-preview-image data-preview-fit="cover" width="80%">

    <a onclick="Reveal.down(); return false;"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 3. Tipo de instalación

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_03.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 4. Destino de instalación

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_04.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 5. Configurar el servicio de MongoDB

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_05.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 6. Agregar MongoDB Compass a la instalación

    <p align="center">( Herramienta gráfica para administrar bases de datos en MongoDB )</p>

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_06.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 7. Esperar a que termine del proceso

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_07.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>

    --

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" -->

    ### 8. Buscar y abrir el programa MongoDB Compass

    <div style="display:flex; align-items:center; justify-content:center; gap:10px;">

    <a onclick="Reveal.up(); return false;"><img class="r-frame" style="transform: rotate(180deg); background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Up arrow"/></a>

    <img src="/assets/media/mongodb/instalacion-windows/_08.webp" width="80%" data-preview-image data-preview-fit="cover">

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>
    </div>
    

    --

    <a href="#/conectar-a-mongodb"><h2>Conectar a MongoDB <i class="fa-solid fa-angles-right fa-2xl"></i></h2></a>

    ---

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" id="linux" -->
    
    ### Instalar en Debian/Ubuntu <i class="fa-brands fa-ubuntu fa-2xl" style="color: #E95420 !important"></i>

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="100%" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    ### 1. Preparar el sistema

    Actualizar e instalar las herramientas necesarias para manejar paquetes vía HTTPS y verificar firmas digitales:
  

    ```bash
    sudo apt update && sudo apt install gnupg curl -y
    ```

    --
    
    ### 2. Importar la llave GPG pública

    Esto permite que el sistema confíe en los paquetes que vienen de MongoDB:

    ```bash
    curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
      sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
      --dearmor
    ```

    --

    ### 3. Crear el archivo de repositorio

    Ahora, se debe crear un archivo de lista para que `apt` sepa dónde buscar.

    ```bash
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
    https://repo.mongodb.org/apt/debian \
    bookworm/mongodb-org/8.0 main" | \
    sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
    ```

    --

    ### 4. Instalar MongoDB

    Actualiza tu base de datos local e instala el metapaquete que incluye la base de datos, las herramientas y el shell ( con el que puedes conectarte a MongoDB ):

    ```bash
    sudo apt update
    sudo apt install -y mongodb-org
    ```

    ---

    <!-- .slide: id="macos" -->

    ### 1. Instalar brew

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    ### 2. Instalar MongoDB
    
    ```bash
    brew tap mongodb/brew
    brew install mongodb-community@7.0
    ```

    ---

    <!-- .slide: data-background-image="https://www.mongodb.com/es/docs/images/background-shape.svg" data-background-size="cover" data-background-position="center" class="white" id="conectar-a-mongodb" -->

    ### Conectarse desde MongoDB Compass

    <div style="display:flex; align-items:flex-start; justify-content:center; gap:20px;">

      <div style="text-align:center;">
        <h3>1</h3>
        <font size="5">Crear una nueva conexión</font>
        <img src="/assets/media/mongodb/instalacion-windows/_09.webp"
            width="100%"
            data-preview-image
            data-preview-fit="cover">
      </div>

      <div style="text-align:center;">
        <h3>2</h3>
        <font size="5">Completar la información</font>
        <img src="/assets/media/mongodb/instalacion-windows/_10.webp"
            width="100%"
            data-preview-image
            data-preview-fit="cover">
      </div>

      <div style="text-align:center;">
        <h3>3</h3>
        <font size="5">Guardar y conectar</font>
        <img src="/assets/media/mongodb/instalacion-windows/_11.webp"
            width="100%"
            data-preview-image
            data-preview-fit="cover">
      </div>

    </div>
  </textarea>
</section>
