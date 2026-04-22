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
![Seleccionar idioma](windows/windows-server-2022/asistente-seleccionar-idioma.webp)

### 2. Haz clic en **"Install now"**
![Install now](windows/windows-server-2022/install-now.webp)

### 3. Elige la edición (Datacenter desktop)
![Seleccionar versión datacenter desktop](windows/windows-server-2022/seleccionar-version-datacenter-desktop.webp)

### 4. Acepta los términos
![Aceptar licencia](windows/windows-server-2022/aceptar-licencia-us.webp)

### 5. Selecciona **Custom: Install**
![Seleccionar custom install](windows/windows-server-2022/seleccionar-custom-install.webp)

### 6. Elige el disco y continúa
![Seleccionar el disco a instalar](windows/windows-server-2022/seleccionar-el-disco-a-instalar.webp)

### 7. Espera mientras se completa la instalación (puede tardar varios minutos)
![Finalizar el proceso](windows/windows-server-2022/terminar-el-proceso-de-instalacion.webp)


## Configuración inicial

### Define la contraseña del usuario **Administrador**

![Define credenciales](windows/windows-server-2022/define-password-para-administrator.webp)

Presiona `Ctrl + Alt + Supr` para iniciar sesión

![Image](https://images.openai.com/static-rsc-4/DZuMiRF9tx3stpqJDCI68NU--AU65ym8-kJVODSBCd8Q3NEwXl8RVmmyeiNzD95h09Ib2d_9f32IzdVHD9NkLmwUTee6Bsq419JDtt0cKwLlOvtBn2IKXeMRzN0oDsss-zIUpxqTqcqAtjU9repaQ3vf5CxLuCYZ3AsBoAE52O0NalwDakYdDPjn9N_kR3Gx?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/12VPn0oKQ9BFNCynhHhtISZYkAndzJ_lCwPWca7QISpBeuAA4zZTvTK3sw4TgDPTt69bSY4Gl-nBaLqjrX7WQF-2DxR4565QGH2gnRLX2YEc-KA2Hh5uTSnlbeCNokO4R6q-kQZTISeOz27Lo2chW4Qhq68XRejt2BGST4UhPnNx7V_XMXPC5nrN5yvtlRhO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/OZEf4Bs6p-7Uuk6yjmmFr4ooIK2lqJuNRO7VxhaqqVbTrTvRLTXM2OK0g60RH0JacgERIcapxiBL9QcHs5ShkG9qXBf-8X_uVIYktvfYJ8TWpOJKd9m41OBHODdWF7-znMwsA39U4MY12To61GytWoCrbQ6vJ5jCHnuRvfvtUV2s0uLBtaCqZn4Ok0luWB9z?purpose=fullsize)

Después de instalar:

2. 
3. Accede al **Administrador del servidor (Server Manager)**

---

## 🛠️ Paso 4: Primeros pasos recomendados

* Cambiar nombre del servidor
* Configurar red (IP fija si es necesario)
* Instalar roles (ej: Active Directory, DNS, DHCP)
* Ejecutar Windows Update

---

## ⚠️ Problemas comunes

❌ **La VM va lenta**
✔ Aumenta RAM y CPU desde la configuración

❌ **No detecta red**
✔ Verifica que Boxes esté usando NAT correctamente

❌ **Pantalla pequeña**
✔ Instala herramientas de integración o ajusta resolución

---

## 🧠 Conclusión

Instalar **Windows Server 2022** en **GNOME Boxes** es una excelente forma de aprender y experimentar sin riesgos. Gracias a su simplicidad, puedes levantar un entorno de laboratorio en pocos minutos, ideal para practicar administración de servidores, Active Directory o despliegues.

