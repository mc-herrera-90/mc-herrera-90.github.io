---
title: Instalación de Windows Server 2022
---

<section data-markdown
         data-separator-vertical="^\n--\n$">
  <textarea data-template>
    ## Instalar Windows Server

    ### Con interfaz gráfica


    <a href="mailto:contacto@mcherrera.dev">
      contacto@mcherrera.dev
    </a>

    ---

    ### Descargar la ISO

    Asegúrate de descargar previamente la ISO del sistema operativo, selecciona el lenguaje y la versión en 👇

    <font size="5"><a href="https://www.microsoft.com/es-es/evalcenter/download-windows-server-2022" target="_blank">https://www.microsoft.com/es-es/evalcenter/download-windows-server-2022</a></font>
    
    <img src="/assets/media/extras/descargar-iso-winserver2022.webp" width="50%" data-preview-image data-preview-fit="contain">

    ---

    ### Virt Manager

    Es una interfaz de escritorio para entornos Linux que permite administrar máquinas virtuales mediante <a href="https://libvirt.org/" target="_blank">libvirt</a>. Se distribuye en repositorios oficiales de la mayoría de las distribuciones (Fedora, Ubuntu, etc).

    #### Instalar
    
    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    ### En Ubuntu/Debian <i class="fa-brands fa-debian"></i>

    Abre una nueva Terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y ejecuta:

    ```bash
    sudo apt update && sudo apt upgrade
    sudo apt install virt-manager
    ```

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1); cursor: pointer" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    ### Buscar la aplicación

    Una vez instalado, busca la aplicación _"Virtual Machine Manager"_:

    <div style="display:flex; align-items:center; justify-content:center; gap:20px;">
      <img
        src="/assets/media/ubuntu/buscar-virtual-machine-manager.webp"
        width="55%"
        data-preview-image
        data-preview-fit="contain"
      >
      <a onclick="Reveal.down(); return false;">
        <img
          class="r-frame"
          style="background: rgba(255,255,255,0.1); cursor:pointer;"
          src="https://static.slid.es/reveal/arrow.png"
          width="120"
          alt="Down arrow"
        >
      </a>
    </div>

    --

    ### Primer inicio de Virt-Manager

    Al abrir __Virt-Manager__ por primera vez, es normal ver un error de conexión a la API de virtualización <a href="https://libvirt.org/" target="_blank">libvirt</a>.

    <div style="display:flex; align-items:center; justify-content:center; gap:20px;">
      <img
        src="/assets/media/ubuntu/error-al-conectar-con-libvirt.webp"
        width="55%"
        data-preview-image
        data-preview-fit="contain"
      >
      <a onclick="Reveal.down(); return false;">
        <img
          class="r-frame"
          style="background: rgba(255,255,255,0.1); cursor:pointer;"
          src="https://static.slid.es/reveal/arrow.png"
          width="120"
          alt="Down arrow"
        >
      </a>
    </div>

    --

    <!-- .slide: style="text-align: left" -->

    <h3 align="center">Solución</h3>

    Esto ocurre porque el usuario aún no tiene permisos para acceder al servicio. Para solucionarlo ejecuta el siguiente comando:

    ```bash
    sudo usermod -aG libvirt $USER
    sudo usermod -aG kvm $USER
    ```

    Luego, cierra sesión y vuelve a entrar o reinicia el sistema

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto">
      <img
        class="r-frame"
        style="background: rgba(255,255,255,0.1); cursor:pointer;"
        src="https://static.slid.es/reveal/arrow.png"
        width="120"
        alt="Down arrow"
      >
    </a>  

    --

    ### Crear una nueva máquina virtual

    Al entrar nuevamente a __virt-manager__, continua con el proceso de crear una nueva máquina virtual:

    <div style="display:flex; align-items:center; justify-content:center; gap:20px;">
      <img
        src="/assets/media/ubuntu/crear-una-nueva-maquina-con-virt-manager-paso-1.webp"
        width="55%"
        data-preview-image
        data-preview-fit="contain"
      >
      <a onclick="Reveal.down(); return false;">
        <img
          class="r-frame"
          style="background: rgba(255,255,255,0.1); cursor:pointer;"
          src="https://static.slid.es/reveal/arrow.png"
          width="120"
          alt="Down arrow"
        >
      </a>
    </div>

    --

    ### Cargar la imagen ISO

    <p align="left">Estando en la pantalla principal de opciones, el siguiente paso será cargar la imagen ISO <i class="fa-solid fa-compact-disc"></i> del sistema operativo.<p>
    
    <ol style="text-align: left; display: block">
      <li>Presiona <strong><em>Browse</em></strong> y elige tu archivo <strong>.iso</strong>
      <li>Continúa con el asistente de configuración</strong>
    </ol>

    <img src="/assets/media/ubuntu/buscar-la-iso-descargada-de-en-virt-manager.webp" width="55%" data-preview-image data-preview-fit="contain">

    ---

    <!-- .slide: style="text-align: left" -->

    <h3 align="center">Recursos recomendados</h3>

    Para instalar <i class="fa-brands fa-windows"></i> Windows Server 2022 se recomienda:

    - <i class="fa-solid fa-memory"></i> **Memoria RAM:** 4 GB mínimo  
    - <i class="fa-solid fa-microchip"></i> **CPU:** 2 núcleos virtuales  
    - <i class="fa-solid fa-hard-drive"></i> **Disco:** 40 GB o más

    > Para el entorno gráfico, IIS, Active Directory o varias máquinas virtuales, considera asignar más RAM y CPU.
  
    ---
  
    ### Interfaces de red de la máquina virtual

    Se recomienda añadir dos adaptores:

    | Adaptador | Uso |
    |---|---|
    | NAT | Acceso a internet |
    | Red interna / Host-Only | Comunicación del laboratorio |

    
    ### ¿Por qué usar dos interfaces?

    Permite separar la red del laboratorio del acceso a internet, facilitando el control y la comunicación con otras máquinas virtuales que son parte del laboratorio.

    ---

    <!-- .slide:
      data-background-image="/assets/media/ubuntu/fondo-de-pantalla.webp"
      data-background-size="contain"
      data-background-position="center"
      style="text-align: center"
    -->

    <img src="/assets/media/ubuntu/virt-manager-crear-nueva-red.webp" width="65%" data-preview-image data-preview-fit="cover">

    ---

    ### 1. Seleccionar idioma y formato regional

    Configura el idioma del sistema, formato de hora/moneda y distribución del teclado antes de iniciar la instalación.

    <img src="/assets/media/windows/windows-server-2022/01_asistente-seleccionar-idioma.webp" width="50%" data-preview-image data-preview-fit="contain">

    ---

    ### 2. Inicio del instalador

    Presiona _“Install now”_ para comenzar el proceso de instalación de Windows Server.

    <img src="/assets/media/windows/windows-server-2022/02_seleccionar_install-now.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 3. Seleccionar edición

    Elige la versión de Windows Server, por ejemplo __Standard__ o __Datacenter__ y selecciona la variante con interfaz gráfica (_“Desktop Experience”_).

    <img src="/assets/media/windows/windows-server-2022/03_seleccionar-version-datacenter-desktop.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 4. Aceptar términos

    Acepta los términos y condiciones de licencia de Microsoft para continuar con la instalación de Windows Server.

    <img src="/assets/media/windows/windows-server-2022/04_aceptar-licencia-us.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 5. Tipo de instalación

    Selecciona _“Custom: Install Microsoft Server Operating  System only”_ para realizar una instalación limpia del sistema operativo.

    <img src="/assets/media/windows/windows-server-2022/05_seleccionar-custom-install.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 6. Particionado del disco

    Selecciona el disco virtual creado. Windows Server creará automáticamente las particiones necesarias del sistema.

    <img src="/assets/media/windows/windows-server-2022/06_seleccionar-el-disco-a-instalar.webp" width="50%" data-preview-image data-preview-fit="contain">

    ---

    ### 7. Copia de archivos e instalación

    <p align="left">El instalador copia los archivos necesarios y configura automáticamente el sistema. Esperamos a que termine el proceso, el sistema se reinicia para continuar con la configuración inicial del entorno.</p>
  
    <img src="/assets/media/windows/windows-server-2022/07_terminar-el-proceso-de-instalacion.webp" width="40%" data-preview-image data-preview-fit="contain">
    
    ---

    ### 8. Configuración de contraseña

    Define la contraseña del usuario administrador del servidor y haz click en _"Finish"_ para reiniciar el sistema.

    <img src="/assets/media/windows/windows-server-2022/08_define-password-para-administrator.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 9. Inicio de sesión

    <p align="left">Al reiniciar, se mostrará la pantalla de inicio de sesión, donde podrás ingresar con la cuenta <strong>Administrator</strong> utilizando la contraseña configurada.</p>


    <p align="left">Presiona <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Supr</kbd> para desbloquear la pantalla de inicio de sesión.</p>

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto">
      <img
        class="r-frame"
        style="background: rgba(255,255,255,0.1); cursor:pointer;"
        src="https://static.slid.es/reveal/arrow.png"
        width="120"
        alt="Down arrow"
      >
    </a>

    --

    <!-- .slide:
      data-background-image="/assets/media/ubuntu/fondo-de-pantalla.webp"
      data-background-size="contain"
      data-background-position="center"
      style="text-align: center"
    -->

    <video data-autoplay src="/assets/media/windows/windows-server-2022/inicio-de-sesion-administrator.mp4" data-preview-video="/assets/media/windows/windows-server-2022/inicio-de-sesion-administrator.mp4"></video>

    ---

    ### 10. Configuración de IP estática
  
    Primero necesitas que el servidor tenga una dirección fija antes de cualquier servicio de red (como Active Directory o DNS).
    
    Porque si la IP cambia, se rompe el acceso al dominio, falla el DNS y los clientes no encontrarán el servidor.

    > La IP estática se asignará a la interfaz de red interna del laboratorio que se creó para la comunicación entre máquinas virtuales.

    <a onclick="Reveal.down(); return false;" style="display: table; margin: auto">
      <img
        class="r-frame"
        style="background: rgba(255,255,255,0.1); cursor:pointer;"
        src="https://static.slid.es/reveal/arrow.png"
        width="120"
        alt="Down arrow"
      >
    </a>

    --
    
       

    ---


    - Abrir el __Server Manager__.
    - Ir a __Local Server__ y hacer clic en el enlace de __Ethernet__.
    - Clic derecho en __Properties__ en el __Network Connections__.
    - Seleccionar __Internet Protocol Versión 4 (TCP/IPv4)__ y clic en __Properties__.
    - Asignar una dirección IP estática, máscara de subred, puerta de enlace predeterminada y servidores DNS según las necesidades de la red.
  </textarea>
</section>
