---
title: "MySQL - macOS"
categories: [MySQL, "MySQL-Setup"]
tags: [mysql, setup]
image:
    path: poster/mysql-instalacion-mac.webp
    lqip: data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZwAAWxVRq/jfBzIAAAD+6o2TPtwDHmMtMLGqNV28JUaeMpSE+dN9rSlkweKo/zoYLWo5CQjX6hpuT9oodfcQKIAAAA==
---

En este artículo, cubriremos la instalación de MySQL en macOS, cómo configurarlo para que funcione y cómo verificar que la instalación se haya completado correctamente.

## Instalación tradicional (paquete oficial)

Este método es el recomendado si prefieres una instalación gráfica y administrada, similar a otros sistemas operativos.

### **Paso 1**: Descargar MySQL

Para descargar la imagen de la **versión comunitaria**, sigue estas instrucciones:

1. Dirígete a la página oficial de MySQL: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/){: target='_blank' }.
2. En la sección **MySQL Community Server**, selecciona la opción para descargar la versión de MySQL adecuada.
3. **Descarga el archivo .dmg** de la versión más reciente de la base de datos, seleccionando la versión correspondiente según tu procesador:
   - **Si tienes un procesador Intel**, selecciona la versión para **macOS 1X.XX (x86, 64-bit)**.
   - **Si tienes un procesador Apple M1 (ARM)**, selecciona la versión para **macOS 1X.XX (ARM, 64-bit)**.

![página de descargas](mysql/mysql-pagina-de-descargas-macos.webp)

### **Paso 2**: Instalación del Paquete

![instalador](mysql/mysql-installer-mac-light.webp){: .right .w-50 .light }
![instalador](mysql/mysql-installer-mac-dark.webp){: .right .w-50 .dark }
- Una vez descargado el archivo `.dmg`, haz doble clic en el archivo para montar la imagen del disco.
- Dentro de la imagen montada, verás un instalador. Haz doble clic en el instalador para iniciar el proceso de instalación.
- Se abrirá una ventana emergente con el mensaje de "Este paquete ejecutará un programa para determinar si el software se puede instalar", presiona en **permitir** para iniciar el asistente. 

### **Paso 3**: Asistente de Instalación

El asistente de instalación, te guiará para instalar y configurar MySQL, sigue estas instrucciones:

![tipo de instalación](mysql/mysql-mac-asistente-licencia.webp)
_**Aceptar la licencia** ☝️_


![tipo de instalación](mysql/mysql-mac-asistente-tipo-instalacion.webp)
_**Seleccionar el tipo de instalación** ☝️ (al instalar, te solicitará confirmar como administrador)_


![definir password](mysql/mysql-mac-asistente-definir-password-root.webp)
_**Definir la contraseña del usuario root** ☝️ (al finalizar, te solicitará confirmar como administrador)_

![finalizar instalador](mysql/mysql-mac-asistente-finalizar.webp)
_**Finalizar el instalador** ☝️_


### **Paso 4**: Verificar Instalación

1. Después de completar la instalación de MySQL, abre **Preferencias del Sistema**. Para hacerlo, puedes hacer clic en el icono de **Apple** en la esquina superior izquierda de la pantalla y seleccionar **Preferencias del Sistema**

2. Dentro de **Preferencia del Sistema**, busca el panel de MySQL. Este panel se instala automáticamente con MySQL y te permite iniciar, detener y configurar el servidor de MySQL.

![preferencias del sistema](mysql/mysql-mac-preferencias-del-sistema-light.webp){: .light }
![preferencias del sistema](mysql/mysql-mac-preferencias-del-sistema-dark.webp){: .dark }

Desde aquí podrás:

- **Iniciar** o **Detener** el servidor MySQL.
- Verificar el estado del servicio.
- Configurar las opciones de MySQL a través de un archivo de configuración.
- **Desinstalar** MySQL.

![panel mysql](mysql/mysql-mac-panel-instancias-light.webp){: .light }
![panel mysql](mysql/mysql-mac-panel-instancias-dark.webp){: .dark }

### **Paso 5**: Añadir MySQL al PATH (Opcional)

Después de haber instalado MySQL, si al abrir una terminal no reconoce el comando `mysql`, puede ser que no lo haya añadido automáticamente al **PATH**.

Para conectarse al servidor desde la terminal, se requiere agregar el directorio que contiene los binarios de MySQL a la variable `PATH`. Para hacerlo, sigue estas instrucciones:

Abrir el archivo de configuración `~/.bashrc` o `~/.bash_profile`:

```terminal
nano ~/.bash_profile
```

> Si tienes zsh, en vez de `~/.bashrc` remplazalo por `~/.zshrc`.
{: .prompt-info }

Añadir la siguiente línea al final del archivo:

```bash
export PATH=$PATH:/usr/local/mysql/bin
```
{: .nolineno file='.bashrc' }

> Cambia `/usr/local/mysql/bin` y remplazalo según el destino de instalación que seleccionaste.
{: .prompt-info }

{% include circle-line.html %}

## Instalación usando Homebrew

Este método es ideal para desarrolladores, ya que es más ligero, fácil de actualizar y automatizar.

1\. Instalar Homebrew
: Si no ha instalado previamente Homebrew en su Mac, abra la Terminal y ejecute el siguiente comando:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> Después de ejecutar este comando, tendrá comandos como `brew install`, `brew upgrade` y `brew uninstall` disponibles en la Terminal.
{: .prompt-info }

2\. Instalar MySQL
: Entonces, para instalar MySQL, necesitas ejecutar el siguiente comando:

```
brew instalar mysql
```

3\. Iniciar el Servicio
: La instalación tardará un poco. Una vez finalizada, puede iniciar el servidor MySQL con el siguiente comando:

```terminal
brew services start mysql
```

4\. Iniciar la instalación segura de mysql
: Para proteger su MySQL con una contraseña root, ejecute lo siguiente:

```terminal
mysql_secure_installation
```
  
