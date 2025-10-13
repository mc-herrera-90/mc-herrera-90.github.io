---
title: "Potencia de Linux en Windows"
categories: [Sistemas Operativos, WSL]
tags: [Sistemas Operativos]
image:
  path: 'poster/wsl-en-windows.webp'
  lqip: data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJQAAJVvuVJGQltyAA/rCoUQqszueRpcn8FJvx5Majkpl9G/NL0qDSsaRuPXzCqeIWn7HVABw9RNn8Nm6ltnLmIAA=
---

Si eres un desarrollador o entusiasta de Linux y trabajas en Windows, **Windows Subsystem for Linux (comunmente denominado WSL)** es una herramienta imprescindible. En este artículo cubriremos los siguientes puntos:

- **¿Qué es WSL?** y sus ventajas
- **Cómo instalarlo**
- **Cómo usarlo y personalizarlo**

Ahora es posible utilizar algunas distribuciones de GNU/Linux como [__Ubuntu__](https://ubuntu.com/desktop/wsl){:target='_blank'} o [__Debian__](https://wiki.debian.org/InstallingDebianOn/Microsoft/Windows/SubsystemForLinux){:target='_blank'} en nuestro __Windows__.

> Olvidate de máquinas virtuales ni configuraciones complicadas y __disfruta de una experiencia nativa de GNU/Linux dentro de Windows__.
{: .prompt-tip }

## ¿Qué es WSL?

WSL es una capa de compatibilidad que permite ejecutar un entorno Linux directamente en Windows, sin necesidad de una máquina virtual o un arranque dual. Esto significa que puedes utilizar aplicaciones de Linux junto con aplicaciones de Windows, todo desde la misma interfaz. En la siguiente captura, podemos ver un sistema GNU/Linux Debian, ejecutándose en Windows Terminal:


![WSL debian neofetch](wsl/wsl-debian-neofetch-light.webp){:.light}
![WSL debian neofetch](wsl/wsl-debian-neofetch-dark.webp){:.dark}
_WSL debian en Windows_

## ¿Por qué usar WSL?

Aquí te dejo 3 razones por las que deberías empezar a usarlo.

1. **Desarrollo Simplificado**: Si eres un desarrollador que trabaja en aplicaciones web o software que utiliza herramientas de Linux, WSL te permite acceder a esas herramientas sin salir de Windows.

2. **Sin Virtualización**: A diferencia de las máquinas virtuales, WSL tiene un rendimiento casi nativo, lo que significa que puedes ejecutar aplicaciones de Linux rápidamente y sin las penalizaciones de rendimiento.

3. **Acceso a Herramientas de Línea de Comandos**: WSL te da acceso a potentes herramientas de línea de comandos de Linux, como `bash`, `git`, `ssh` y muchas más, facilitando tareas de desarrollo y administración.

## Instalar y habilitar WSL

Primero, abre PowerShell como administrador y ejecuta el siguiente comando:

```powershell
wsl --install
```
{: .nolineno }

Esto instalará la última versión de WSL y la distribución de Linux predeterminada (normalmente Ubuntu). Si ya se encuentra instalada nos muestra las distribuciones disponibles:

![comando de instalación wsl](wsl/wsl-install-command-dark.webp){: .dark }
![comando de instalación wsl](wsl/wsl-install-command-light.webp){: .light }


> Si al ejecutar `wsl --install` no se listan las distribuciones disponibles, puedes usar el siguiente comando para verlas:
>
> ```powershell
> wsl -l --online
> ```
>{:.nolineno}
> Este comando mostrará todas las distribuciones de Linux disponibles para instalar en tu sistema.
{: .prompt-tip }

## Elegir una distribución de Linux

Puedes instalar diferentes distribuciones de Linux. Si quieres elegir una distribución específica, la forma más sencilla es abrir [Microsoft Store](https://apps.microsoft.com/search?query=wsl&hl=es-ES&gl=CL){:target='_blank'} y buscar "Linux". Allí encontraremos opciones como Ubuntu, Debian y Kali Linux. A continuación un ejemplo para instalar Debian desde la Terminal de Windows:

```powershell
wsl --install -d Debian
```
{: .nolineno }

## Configurar una nueva distribución

Cuando se termina de instalar la nueva distribución de WSL, se le pedirá que cree un nombre de usuario y una contraseña para la distribución de Linux:

![comando de instalación wsl](wsl/create-new-user-wsl-dark.webp){:.dark}
![comando de instalación wsl](wsl/create-new-user-wsl-light.webp){:.light}

> Recuerda que esta cuenta es el __administrador__ y tendrá la capacidad de ejecutar comandos administrativos `sudo`.
{: .prompt-info }

## Ventajas de WSL

Una vez que hayas instalado y configurado WSL, podemos comenzar a usarlo. Lo primero que podemos hacer es probar los típicos comandos de Linux como `ls`, `cd`, `mkdir`, etc.

Pero antes de comenzar a configurar un entorno, quiero mostrarte un par de trucos que te harán la vida más fácil.

La primera ventaja de WSL es que no tienes que renunciar a la forma actual de gestionar archivos mediante el Explorador de Windows. En la barra lateral del Explorador, ahora puedes encontrar la opción Linux:

![Explorador de Windows](wsl/explorer-view-linux-light.webp){:.light .rounded .shadow-sm}
![Explorador de Windows](wsl/explorer-view-linux-dark.webp){:.dark .rounded .shadow-sm}

Desde allí, puedes acceder y administrar el sistema de archivos de los sistemas operativos Linux instalados. Lo mejor de esta función es que puedes copiar, pegar y mover archivos entre diferentes sistemas operativos sin problemas.

Otro elemento muy importante es la comunicación entre sistemas. Como ahora tenemos un sistema operativo dentro otro sistema operativo, ambos tienen una forma de comunicarse __mediante la integración de red__ y __sistema de archivos compartidos__.

Desde Windows, puedes acceder a los archivos de Linux usando PowerShell:

```powershell
cd \\wsl$\<NombreDistro>\
```
{: .nolineno }

En mi caso, sería de la siguiente manera:

```bat
cd \\wsl$\Debian\home\mcherrera
```
{: .nolineno .noheader .fit-content }

Desde WSL, puedes acceder al sistema de archivos de Windows en `/mnt`:

```terminal
cd /mnt/c/Users/<usuario>
```

## Instalar Zsh

Cuando abrimos WSL, el shell predeterminado incluido en las distribuciones es [Bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29){:target='_blank'}. Sin embargo Zsh (Z Shell) es un potente intérprete de comandos que ofrece una experiencia mejorada en la terminal. Para instalar Zsh debemos realizar los siguientes pasos:

1\. Actualizar el índice de paquetes
: Antes de instalar Zsh, asegúrate de que el sistema esté actualizado:

```terminal
sudo apt update && sudo apt upgrade -y
```

2\. Instalar Zsh
: Ejecuta el siguiente comando para instalar Zsh:

```terminal
sudo apt install zsh -y
```

3\. Cambiar el shell predeterminado
: Después de instalar Zsh, puedes cambiar tu shell por defecto a Zsh ejecutando:

```terminal
chsh -s $(which zsh)
```

> Cierra y abre WSL nuevamente para que los cambios surtan efecto.
{: .prompt-info }

### Comando take en Zsh

El comando `take` es una función muy útil en Zsh que te permite crear un nuevo directorio y entrar en él de manera rápida y sencilla. Es especialmente práctico para organizar tu trabajo en la terminal.

La sintaxis básica del comando es:

```terminal
take nombre_del_directorio
```

Al ejecutar este comando, se creará un nuevo directorio con el nombre especificado y, automáticamente, cambiarás a ese directorio.

> - **Ahorra Tiempo:** Combina la creación de un directorio y el cambio a ese directorio en un solo comando.
> - **Organización Rápida:** Ideal para proyectos nuevos, ya que puedes crear y entrar en una carpeta de inmediato.
> - **Sencillez:** Evita la necesidad de recordar y escribir dos comandos por separado.
{: .prompt-tip }

### Crear un un comando take

Si no tienes el comando `take`, puedes definirlo en tu archivo `~/.zshrc` añadiendo la siguiente función:

```bash
take() {
  mkdir -p "$1" && cd "$1"
}
```
{: .nolineno file='.zshrc' }

## Instalar Oh My Zsh

Para una experiencia de Zsh más rica, podemos instalar [Oh My Zsh](https://ohmyz.sh/){: target='_blank'}. En la terminal ejecutamos el siguiente comando:

```terminal
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> Si al ejecutar el comando te sale el mensaje "zsh: command not found: curl", simplemente instalamos curl: `sudo apt install curl`.<br>Y si luego al ejecutar el comando te aparece el mensaje "Error: git is not installed", simplemente instalamos git: `sudo apt install git`. 
{: .prompt-info }

![instalación zsh en wsl](wsl/install-oh-my-zsh-light.webp){: .light }
![instalación zsh en wsl](wsl/install-oh-my-zsh-dark.webp){: .dark }

Este script instalará Oh My Zsh y cambiará tu configuración de Zsh automáticamente. A partir de aquí en adelante podemos personalizar la configuración editando el archivo `~/.zshrc`.

### Configurar Plugins

[Oh My Zsh](https://ohmyz.sh/){: target='_blank'} es un framework para gestionar la configuración de Zsh, y su verdadera magia radica en los plugins. Estos complementos amplían las funcionalidades de tu terminal y optimizan tu flujo de trabajo. 

**Algunos plugins para la productividad**:
- **git**: Mejora la experiencia con comandos de Git (viene habilitado).
- **zsh-autosuggestions**: Sugiere comandos mientras escribes.
- **zsh-syntax-highlighting**: Colorea tu terminal para mayor claridad.

### Sugerencias con zsh-autosuggestions

Clonamos el repositorio en el siguiente destino `$ZSH_CUSTOM/plugins` (por defecto en `~/.oh-my-zsh/custom/plugins`):

```terminal
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Añadimos el plugin a la lista para que Zsh lo cargue (dentro de `~/.zshrc`):

```terminal
sed -i '/^plugins=(/ s/)/ zsh-autosuggestions)/' ~/.zshrc
```

**Explicación del comando:**

- `sed -i`: Edita el archivo en el lugar (in-place).
- `'/^plugins=(/'`: Busca la línea que comienza con plugins=(.
- `s/)/ git)/`: Reemplaza el paréntesis de cierre `)` por `zsh-autosuggestions)` (agrega el plugin a la lista antes de cerrarlo).

![agregar plugin zsh-autosuggestions](wsl/add-zsh-autosuggestions-light.webp){:.light}
![agregar plugin zsh-autosuggestions](wsl/add-zsh-autosuggestions-dark.webp){:.dark}

Ahora refresca las configuraciones para que surtan efecto: `source ~/.zshrc`.

## Desinstalar Distribuciones

Para desinstalar una distribución de Linux en Windows, se puede ejecutar el siguiente comando:

```terminal
wsl --unregister <distroName>
```
Donde **<<distroName>>** es el nombre que tiene la distribución existente, que se puede ver en la lista del `comando wsl -l`. 

>En el ejemplo que tenemos al principio instalamos debian, por ende para desinstalarlo debemos ejecutar `wsl --unregister debian`
{: .prompt-info }

## Exportar Distribuciones WSL

Exportar una distribución de WSL te permite crear una copia de seguridad completa de de tu entorno, incluyendo todas las configuraciones de herramientas, bibliotecas específicas que no queremos perder.

Para exportar una distribución WSL, tenemos que ejecutar el siguiente comando:

```terminal
wsl --export <NombreDeLaDistribucion> <RutaDeDestino>\distro_exportada.tar
```

Remplazando `<NombreDeLaDistribucion>` por el nombre de la distribución que se desea exportar y `<RutaDeDestino>` por la ruta donde se quiere guardar el archivo `.tar`. Ejemplo exportando la distribución Debian:

```terminal
wsl --export Debian %UserProfile%\desktop\wsl_debian.tar
```

## Importar distribución en WSL2

Para especificar que deseamos usar WSL 2 durante la importación. Podemos hacerlo con el siguiente comando:

```terminal
wsl --import <NombreDistribucion> <RutaInstalacion> <RutaArchivo>.tar --version 2
```

Ejemplo importando la distribución de Debian que exportamos anteriormente:

```terminal
wsl --import DebianDev C:\WSL\Debian wsl_debian.tar --version 2
```

## Más recursos

WSL es una herramienta poderosa que permite a los usuarios de Windows disfrutar de las ventajas de un entorno Linux sin complicaciones. Ya seas un desarrollador, un administrador de sistemas o simplemente un entusiasta de la tecnología, WSL te ofrece un mundo de posibilidades. ¡Empieza a explorar y potencia tu flujo de trabajo!.

Para aprender más sobre WSL y cómo aprovecharlo al máximo, considera los siguientes recursos:

- [Documentación Oficial de WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- [Foros y Comunidades](https://stackoverflow.com/questions/tagged/wsl)