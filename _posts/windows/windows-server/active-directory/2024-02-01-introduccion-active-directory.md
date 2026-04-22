---
title: "Windows Server: Introducción a Active Directory"
categories: [Windows, "Windows_02-Windows Server"]
tags: [windows, sistema]
badge: windows
---

## Introducción a Active Directory

Active Directory Domain Services es un servicio de directorio desarrollado por Microsoft que se utiliza para administrar y organizar los recursos dentro de una red de computadoras. Su función principal es permitir la gestión centralizada de usuarios, equipos, permisos y políticas de seguridad dentro de un entorno de dominio.

En otras palabras, Active Directory actúa como una “base de datos inteligente” de la red, donde se almacena información sobre quiénes son los usuarios, qué dispositivos existen y qué recursos pueden utilizar.

Este sistema es ampliamente utilizado en empresas y organizaciones porque simplifica la administración de grandes redes, mejora la seguridad y permite controlar el acceso a recursos de forma eficiente.

Gracias a Active Directory, los administradores pueden aplicar políticas de seguridad de manera global, autenticar usuarios de forma centralizada y mantener un control ordenado de toda la infraestructura de TI desde un solo lugar.

## ¿Cuáles son los componentes físicos?

Los componentes físicos en Active Directory Domain Services (AD DS) son aquellos objetos que son tangibles o que representan elementos físicos dentro de la infraestructura de red. Estos componentes no son conceptos lógicos como usuarios o permisos, sino que corresponden a la estructura real donde se ejecuta y soporta el directorio.

Entre los principales componentes físicos se encuentran:

**1. Controladores de dominio (Domain Controllers)**
: Son los servidores físicos o virtuales que alojan la base de datos de Active Directory. Su función principal es autenticar usuarios, aplicar políticas de seguridad y responder a solicitudes del dominio. Cada cambio en el directorio se replica entre ellos.

**2. Sitios (Sites)**
: Representan la ubicación física de la red (por ejemplo, una oficina o sucursal). Los sitios ayudan a optimizar el tráfico de red, controlando cómo se realiza la replicación entre controladores de dominio según la topología física.

**3. Enlaces de sitio (Site Links)**
: Son las conexiones lógicas que representan la comunicación entre diferentes ubicaciones físicas. Permiten definir costos, horarios y frecuencia de replicación entre sitios.

**4. Subredes (Subnets)**
: Asocian rangos de direcciones IP con un sitio específico. Esto permite que Active Directory identifique automáticamente en qué ubicación física se encuentra un cliente dentro de la red.

En conjunto, estos componentes permiten que AD DS funcione de manera eficiente, asegurando autenticación rápida, replicación controlada y una administración organizada de la infraestructura de red.

![Componentes físicos de Active Directory](windows/componentes-fisicos-de-active-directory.webp)

