---
title: "Cisco Packet Tracer: Instalación y configuración"
categories: [Cisco Packet Tracer, Cpt-Setup]
badge: cisco
---

Aprender redes no siempre requiere acondicionar un laboratorio con hardware costoso. Cisco ofrece una herramienta gratuita y poderosa que permite simular redes completas desde tu computadora: **Packet Tracer**. Si estás empezando en el mundo del networking, estudiando una carrera o te estás preparando para certificaciones como CCNA, dominar esta herramienta es clave. En este artículo, cubriremos __cómo instalar y configurar Cisco Packet Tracer__, y te daré algunos consejos para comenzar tu primera red simulada con éxito.

## ¿Qué es Cisco Packet Tracer?

Cisco Packet Tracer es una herramienta de simulación de redes desarrollada por Cisco, diseñada para ayudar a estudiantes y profesionales a practicar configuraciones de redes __sin necesidad de hardware físico__. Es ampliamente utilizada en programas de formación como Cisco Networking Academy (NetAcad) y en la preparación para certificaciones como el CCNA.

## Requisitos del sistema

Antes de instalar, asegúrate de que tu equipo cumple con los requisitos mínimos:

- **Sistema operativo:** Windows 10/11, macOS o Ubuntu Linux  
- **RAM:** 4 GB mínimo (recomendado: 8 GB)  
- **Espacio en disco:** 1 GB libre  

### 1. Descarga de Cisco Packet Tracer

1. Ve a [netacad.com](https://www.netacad.com/){:target='_blank'}.
2. Crea una cuenta gratuita o inicia sesión si ya tienes una.
3. Accede al curso “Introduction to Packet Tracer” para habilitar la descarga.
4. Si estás logueado, puedes acceder directamente a las [descargas](https://www.netacad.com/resources/lab-downloads?courseLang=es-XL){:target='_blank'}

![Descarga cisco packet tracer](cisco/descarga-cisco-packet-tracer.webp)

{:start="4"}
4. Una vez dentro, dirígete a la sección de recursos y descarga la versión correspondiente a tu sistema operativo.

![Descargar cpt para tu plataforma](cisco/descarga-cpt-plataforma.webp)

### 2. Instalación

**En Windows:**

1. Ejecuta el archivo `.exe` descargado.
2. Acepta los términos y condiciones.
3. Sigue las instrucciones del instalador.
4. Al finalizar, ejecuta el programa.

**En Ubuntu:**

1. Abre el archivo `.deb`.
2. Instala el paquete con `sudo dpkg -i paquete.deb`.
   * Si faltan librerías, la instalación fallará o quedará incompleta. En ese caso, usa `sudo apt --fix-broken install`.
3. Abre la aplicación.
4. Desde la aplicación podrás iniciar sesión en **auth.netacad.com**.

![Login CPT Ubuntu](cisco/cpt-login-ubuntu.webp)
![Overview](cisco/overview-ubuntu-cpt.webp)

**En macOS:**

1. Abre el archivo `.dmg`.
2. Arrastra el icono de Packet Tracer a la carpeta Aplicaciones.
3. Abre la aplicación (puede pedirte permiso de seguridad).

## Primeros pasos en Packet Tracer

1. Inicia sesión con tu cuenta de NetAcad.
2. Verás una interfaz con varios dispositivos (routers, switches, PCs).
3. Prueba colocar o arrastrar dos PCs a la pantalla.

![colocar dispositivos](cisco/colocar-dispositivos.webp)

{:start="4"}
4. Conéctalas usando un cable cruzado (copper cross-over).

![Conexión cross-over](cisco/conexion-cross-copper-2.webp)

{:start='5'}
5. Configura las IPs:
   - PC0: 192.168.1.1
   - PC1: 192.168.1.2

![Asignar IP](cisco/asignar-ip-v4.webp)
{:start='6'}
6. Haz ping desde una PC a la otra para verificar la conexión.
![Ejecutar comando Ping](cisco/ejecutar-comando-ping.webp)

## __Consejos Básicos__

- Usa **zoom** y **etiquetas** para mantener organizada tu topología.
- Guarda tu proyecto frecuentemente (`.pkt`).
- Explora el **modo de simulación** para ver cómo viajan los paquetes.
- Familiarízate con los **comandos CLI** en routers y switches desde temprano.

### ⌨️ __Atajos de teclado útiles__

| Atajo                            | Función                                      |
|----------------------------------|----------------------------------------------|
| <kbd>Ctrl</kbd> + <kbd>N</kbd>  | Crear un nuevo proyecto                      |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>  | Guardar el archivo actual                    |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>  | Guardar como un nuevo archivo               |
| <kbd>Ctrl</kbd> + <kbd>O</kbd>  | Abrir un archivo existente                   |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd>  | Deshacer última acción                       |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>  | Rehacer acción                               |
| <kbd>Ctrl</kbd> + <kbd>P</kbd>  | Imprimir área de trabajo en impresora o como archivo de imagen |
| <kbd>Del</kbd> o <kbd>Supr</kbd>| Eliminar dispositivo o enlace                |
| <kbd>Ctrl</kbd> + 🖱️⤴️ [Scroll ↑]| Acercar el zoom                             |
| <kbd>Ctrl</kbd> + 🖱️⤵️ [Scroll ↓]| Alejar el zoom                              |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>  | Mostrar/Ocultar área de dispositivos |

{% include circle-line.html %}

## Recursos Adicionales

- Curso gratuito: [Introduction to Packet Tracer (NetAcad)](https://www.netacad.com/)
- Documentación oficial: [Cisco Packet Tracer Support](https://www.cisco.com/)