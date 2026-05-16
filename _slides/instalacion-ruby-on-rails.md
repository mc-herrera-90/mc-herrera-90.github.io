---
---

<section data-markdown data-separator-vertical="^\n--\n$">
  <textarea data-template>
    ## Instalar Ruby y Ruby on Rails
    ### Por:

    <a href="mailto:contacto@mcherrera.dev">
      contacto@mcherrera.dev
    </a>
    ---
    <!-- .slide: style="text-align: left" -->

    <h2 align="center">RBENV <i class="fa-regular fa-gem"></i></h2>

    __rbenv__ es una herramienta para sistemas Unix. Es útil para cambiar entre versiones de Ruby en la misma máquina y así garantizar que cada proyecto en el que estés trabajando siempre ejecute la versión correcta.

    ---
    <!-- .slide: style="text-align: left" -->
    
    <h2 align="center">PRERREQUISITOS</h2>

    Primero, se debe actualizar el índice de paquetes e instalar algunas dependencias. Es posible que algunas de estas librerías ya estén presentes, en cuyo caso simplemente se ignorarán, así que puedes ejecutar el siguiente comando y no preocuparte por instalaciones duplicadas:

    ```bash
    sudo apt update && \
    sudo apt install -y git curl autoconf bison build-essential \
    libssl-dev libyaml-dev libreadline6-dev zlib1g-dev \
    libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
    ```

    ---

    ## INSTALAR RBENV

    <p align="left">A continuación, ejecuta los comandos en el orden indicado, avanzando paso a paso.</p>

    <a href="#/3/1" class="navigate-down"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1);" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    <!-- .slide: style="text-align: left" -->

    1\. Clonar el repositorio de __rbenv__ en la ruta `~/.rbenv`:

    ```bash
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    ```

    2\. Agrega la ruta `~/.rbenv/bin` al `$PATH` para que se pueda usar desde la línea de comandos:

    ```bash
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    ```

    3\. Agrega la siguiente instrucción en el archivo `~/.bashrc` para que __rbenv__ se cargue automática en cada inicio de sesión:

    ```bash
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    ```

    --

    <!-- .slide: style="text-align: left" -->

    4\. Aplica los cambios realizados al archivo `~/.bashrc`:

    ```bash
    source ~/.bashrc
    ```

    Ahora, verifica que __rbenv__ se configuró de manera correcta:

    ```bash
    type rbenv
    ```

    El siguiente paso es agrega el plugin __ruby-build__ que simplifica el proceso de instalación para nuevas versiones de Ruby:

    ```bash
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
    ```

    ---

    ## Instalar Ruby

    <p align="left">Antes de instalar Ruby, enumera las versiones disponibles y decide cuál quieres instalar.</p>

    ---
    
    <!-- .slide: style="text-align: left" -->

    Con el siguiente comando, puedes listar todas las versiones disponibles de Ruby:

    ```bash
    rbenv install -l
    ```

    Y ahora elige la versión para instalar usando `rbenv install`. Por ejemplo:

    ```bash
    rbenv install 3.4.9
    ```

    <div style="display: flex; justify-content: space-evenly">
    <img src="/assets/media/ubuntu/rbenv-listar-versiones.webp" width="40%" data-preview-image data-preview-fit="contain">
    <img src="/assets/media/ubuntu/rbenv-install-v349.webp" width="40%" data-preview-image data-preview-fit="contain">
    </div>

    ---

    <!-- .slide: style="text-align: left" -->

    <h2 align="center">Establecer la versión global</h2>

    Para indicar la versión que acabamos de instalar como la nueva predeterminada, utiliza comando `rbenv global`. Por ejemplo:

    ```bash
    rbenv global 3.4.9
    ```

    Finalmente, verifica la versión de Ruby que detecta el sistema:

    ```bash
    ruby --version
    ```

    ---

    ## Cambiar entre versiones

    Puedes alternar fácilmente entre distintas versiones de Ruby que tengas instalada con __rbenv__ y utilizar según las necesidades de cada proyecto.

    ---

    <img src="/assets/media/ubuntu/rbenv-cambio-de-versiones.webp" width="60%" data-preview-image data-preview-fit="contain">

    ---

    <!-- .slide: style="text-align: left" -->
    <h2 align="center">Uso de Gemas</h2>

    Las gemas son el medio de distribución de las librerías de Ruby y tenemos el comando `gem` para poder administrar gemas.

    > Usaremos este comando para instalar __Rails__.

    ---

    <!-- .slide: style="text-align: left" -->

    La forma adecuada para instalar gemas, es la siguiente:

    ```bash
    echo "gem: --no-document" > ~/.gemrc
    ```
  </textarea>
</section>
