---
title: Instalación de Windows Server 2022
---

<section data-markdown
         data-separator-vertical="^\n--\n$">
  <textarea data-template>
    # Instalar Windows Server 2022
    ## Descarga la ISO en👇

    <a href="https://www.microsoft.com/es-es/evalcenter/download-windows-server-2022" target="_blank">
      https://www.microsoft.com/es-es/evalcenter/download-windows-server-2022
    </a>
    ---
    ### Virt Manager

    Es una interfaz de escritorio para entornos Linux que permite administrar máquinas virtuales mediante <a href="https://libvirt.org/" target="_blank">libvirt</a>

    #### Instalar
    
    <a href="#/1/1" class="navigate-down"><img class="r-frame" style="background: rgba(255, 255, 255, 0.1)" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"/></a>

    --

    Instálalo desde tu distribución de preferencia, está disponible para:
    
    - <i class="fa-brands fa-debian"></i> Debian
    - <i class="fa-brands fa-fedora"></i> Fedora
  

    --

    ### En Ubuntu

    Abre una nueva Terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y ejecuta:

    ```bash
    sudo apt-get install virt-manager
    ```
    ---

    <!-- .slide:
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/01_asistente-seleccionar-idioma.webp" width="50%" data-preview-image data-preview-fit="contain">

    ---

    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="cover"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/02_seleccionar_install-now.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---
    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/03_seleccionar-version-datacenter-desktop.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---
    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/04_aceptar-licencia-us.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---
    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/05_seleccionar-custom-install.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---
    <!-- .slide:
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/06_seleccionar-el-disco-a-instalar.webp" width="50%" data-preview-image data-preview-fit="contain">

    ---
    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/07_terminar-el-proceso-de-instalacion.webp" width="50%" data-preview-image data-preview-fit="contain">
    
    #### Esperamos a que termine el proceso
    ---
    # Después de la instalación
    ## Se reiniciará y te solicitará
    ### establecer la contraseña para el administrador

    ---
    <!-- .slide: 
      data-background="#51d1f6"
      data-background-size="contain"
      data-background-position="center"
    -->
    <img src="/assets/media/windows/windows-server-2022/08_define-password-para-administrator.webp" width="50%" data-preview-image data-preview-fit="contain">
    ---
    ## Después de definir la contraseña, presiona
    ### <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Supr</kbd> 
    ### Para iniciar sesión
    ---
    <!-- .slide:
      data-background-image="/assets/media/ubuntu/fondo-de-pantalla.webp"
      data-background-size="contain"
      data-background-position="center"
    -->
    <video data-autoplay src="/assets/media/windows/windows-server-2022/inicio-de-sesion-administrator.mp4"></video>
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
