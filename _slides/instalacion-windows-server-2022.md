---
title: Instalación de Windows Server 2022
---

<section data-markdown
         data-separator-vertical="^\n--\n$">
  <textarea data-template>
    ## Instalar Windows Server

    ### Con interfaz gráfica

    ### Por:

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

    <p align="left">Es una interfaz de escritorio para entornos Linux que permite administrar máquinas virtuales mediante <a href="https://libvirt.org/" target="_blank">libvirt</a>. Se distribuye en repositorios oficiales de la mayoría de las distribuciones (Fedora, Ubuntu, etc).</p>

    #### Instalar
    
    <a href="#/2/1" class="navigate-down"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1)" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    ### En Ubuntu/Debian <i class="fa-brands fa-debian"></i>

    Abre una nueva Terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y ejecuta:

    ```bash
    sudo apt-get install virt-manager
    ```

    --

    ### Buscar la aplicación

    Una vez instalado, busca la aplicación _"Virtual Machine Manager"_:

    <img src="/assets/media/ubuntu/buscar-virtual-machine-manager.webp" width="55%" data-preview-image data-preview-fit="contain">

    --

    ### Primer inicio de Virt-Manager

    Al abrir __Virt-Manager__ por primera vez, es normal ver un error de conexión a la API de virtualización <a href="https://libvirt.org/" target="_blank">libvirt</a>.

    <img src="/assets/media/ubuntu/error-al-conectar-con-libvirt.webp" width="55%" data-preview-image data-preview-fit="contain">

    --

    <!-- .slide: style="text-align: left" -->

    <h3 align="center">Solución</h3>

    Esto ocurre porque el usuario aún no tiene permisos para acceder al servicio. Para solucionarlo ejecuta el siguiente comando:

    ```bash
    sudo usermod -aG libvirt $USER
    sudo usermod -aG kvm $USER
    ```

    Luego, cierra sesión y vuelve a entrar o reinicia el sistema
    
    --

    ### Crear una nueva máquina virtual

    Al entrar nuevamente a __virt-manager__, continua con el proceso de crear una nueva máquina virtual:

    <img src="/assets/media/ubuntu/crear-una-nueva-maquina-con-virt-manager-paso-1.webp" width="55%" data-preview-image data-preview-fit="contain">

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

    Define la contraseña del usuario administrador del servidor.

    <img src="/assets/media/windows/windows-server-2022/08_define-password-para-administrator.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---

    ### 9. Inicio de sesión

    Ingresa con la cuenta Administrator utilizando la contraseña configurada.

    Presiona <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Supr</kbd> para desbloquear la pantalla de inicio de sesión.

    ---
    <!-- .slide:
      data-background-image="/assets/media/ubuntu/fondo-de-pantalla.webp"
      data-background-size="contain"
      data-background-position="center"
    -->
    <video data-autoplay src="/assets/media/windows/windows-server-2022/inicio-de-sesion-administrator.mp4" data-preview-video="/assets/media/windows/windows-server-2022/inicio-de-sesion-administrator.mp4"></video>
    ---
    ## Configuración inicial

    Después de iniciar sesión, es importante realizar una serie de configuraciones iniciales para asegurarse de que el servidor esté listo para desempeñar sus funciones de manera efectiva.
    ---

    # 1. Configuración de Red

    ---

    ## Asignación de Dirección IP
    
    - Abrir el __Server Manager__.
    - Ir a __Local Server__ y hacer clic en el enlace de __Ethernet__.
    - Clic derecho en __Properties__ en el __Network Connections__.
    - Seleccionar __Internet Protocol Versión 4 (TCP/IPv4)__ y clic en __Properties__.
    - Asignar una dirección IP estática, máscara de subred, puerta de enlace predeterminada y servidores DNS según las necesidades de la red.
  </textarea>
</section>
