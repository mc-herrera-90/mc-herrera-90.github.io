---
title: "Windows Server: Instalación de Windows Server 2022 con interfaz gŕafica"
categories: [Windows, "Windows_02-Windows Server"]
badge: windows
---

Si estás comenzando en el mundo de servidores o quieres hacer pruebas sin afectar tu sistema principal, usar máquinas virtuales es la mejor opción. En este post abordaremos los pasos para instalar Windows Server 2022.


## Requisitos previos

Antes de comenzar, asegúrate de tener:

* Un equipo con virtualización habilitada (Intel VT-x o AMD-V)
* Oracle VirtualBox o GNOME Boxes instalado
* ISO de **Windows Server 2022**
* Al menos:

  * 4 GB de RAM (recomendado 8 GB)
  * 60 GB de almacenamiento disponible

---

## Instalación de Windows Server 2022

### 1. Selecciona idioma y formato
![Seleccionar idioma](windows/windows-server-2022/01_asistente-seleccionar-idioma.webp)

### 2. Haz clic en **"Install now"**
![Install now](windows/windows-server-2022/02_seleccionar_install-now.webp)

### 3. Elige la edición (Datacenter desktop)
![Seleccionar versión datacenter desktop](windows/windows-server-2022/03_seleccionar-version-datacenter-desktop.webp)

### 4. Acepta los términos
![Aceptar licencia](windows/windows-server-2022/04_aceptar-licencia-us.webp)

### 5. Selecciona **Custom: Install**
![Seleccionar custom install](windows/windows-server-2022/05_seleccionar-custom-install.webp)

### 6. Elige el disco y continúa
![Seleccionar el disco a instalar](windows/windows-server-2022/06_seleccionar-el-disco-a-instalar.webp)

### 7. Espera mientras se completa la instalación (puede tardar varios minutos)
![Finalizar el proceso](windows/windows-server-2022/07_terminar-el-proceso-de-instalacion.webp)

## Configuración inicial

### Define la contraseña del usuario **Administrador**

![Define credenciales](windows/windows-server-2022/08_define-password-para-administrator.webp)

Presiona `Ctrl + Alt + Supr` para iniciar sesión

## Primeros pasos recomendados

* Cambiar nombre del servidor
* Configurar red (IP fija si es necesario)
* Instalar roles (ej: Active Directory, DNS, DHCP)
* Ejecutar Windows Update
