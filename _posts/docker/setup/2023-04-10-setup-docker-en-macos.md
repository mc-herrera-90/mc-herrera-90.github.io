---
title: "Docker: Instalar Docker Desktop en macOS"
categories: [Docker, Docker-Setup]
badge: docker
---

Para instalar **Docker** en macOS, sigue estos pasos:

### 1. Descargar Docker Desktop para macOS

- Abre el navegador y ve a la [página oficial de Docker Desktop](https://www.docker.com/products/docker-desktop){: target='_blank' }.
- Haz clic en **"Download for Mac"** para descargar el instalador compatible con tu versión de macOS.

> Si tu Mac tiene una arquitectura **Apple Silicon (M1/M2)**, asegúrate de seleccionar la versión de Docker para Apple Silicon. Si tienes una Mac con Intel, selecciona la versión adecuada para Intel.
{: .prompt-tip }

### 2. Instalar Docker Desktop

- Una vez descargado el archivo `.dmg`, haz doble clic sobre él para abrir el instalador.
- En la ventana que aparece, arrastra el icono de **Docker** a la carpeta de **Aplicaciones**.
- Abre **Docker** desde la carpeta de aplicaciones (puedes buscarlo en Spotlight o abrirlo desde el Finder).
- Es posible que veas una advertencia de seguridad, ya que Docker requiere permisos de administración. Haz clic en "Abrir" si es el caso.

### 3. Configurar Docker

- Al abrir Docker, es posible que se te pida que inicies sesión con una cuenta Docker (puedes crear una cuenta gratuita si no tienes una).
- Docker puede necesitar instalar algunas dependencias y pedirte permisos para modificar configuraciones del sistema. Acepta los permisos y espera a que se complete la instalación.
- Después de algunos minutos, Docker debería estar en ejecución. Verás un ícono de Docker (una ballena) en la barra de menús si todo está bien.

### 4. Verificar la instalación

Una vez que Docker se haya instalado correctamente, abre la terminal y ejecuta el siguiente comando para verificar que Docker esté funcionando:

```terminal
docker --version
```


Este comando debería devolver la versión de Docker instalada, algo similar a:

```terminal
Docker version 20.10.24, build 3d7e5e3
```
{: .noheader }

Si ves algo como esto, significa que Docker está instalado y funcionando correctamente.

### 5. Iniciar el servicio de Docker

Si Docker aún no está funcionando (por ejemplo, no ves el ícono de la ballena en la barra de menú), intenta iniciar Docker manualmente desde la carpeta de Aplicaciones.

### 6. Usar Docker

Una vez que Docker esté en funcionamiento, puedes comenzar a usarlo. Por ejemplo, puedes probar correr un contenedor básico de **hello-world** para asegurarte de que todo esté funcionando correctamente:

```terminal
docker run hello-world
```

Esto descargará una imagen de Docker y ejecutará un contenedor que imprimirá un mensaje de bienvenida si todo está bien configurado.


### 7. Instalar Docker Compose (opcional)

Si necesitas usar **Docker Compose** (una herramienta para gestionar aplicaciones multi-contenedor), debería estar incluido con Docker Desktop en versiones más recientes. Para verificar si tienes Docker Compose instalado, ejecuta:

```terminal
docker-compose --version
```

> Si no está instalado, puedes seguir [estas instrucciones oficiales](https://docs.docker.com/compose/install/){: target='_blank' } para instalar Docker Compose.
{: .prompt-info }


### Problemas comunes:

1. **Docker no se inicia**: Si Docker no se inicia, intenta reiniciar tu computadora y volver a abrir Docker. A veces, los permisos de sistema requieren reiniciar para aplicarse correctamente.
   
2. **Requiere permisos adicionales**: Si ves mensajes sobre permisos de administrador, asegúrate de haber permitido los cambios en la configuración del sistema y en la red de macOS.

3. **Requiere hardware de 64 bits**: Si tu Mac es más antiguo, asegúrate de que sea compatible con Docker (requiere procesadores Intel de 64 bits o M1/M2).
