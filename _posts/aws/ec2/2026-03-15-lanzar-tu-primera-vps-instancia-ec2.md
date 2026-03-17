---
title: "AWS: Cómo lanzar tu primer VPS con una instancia EC2"
categories: [AWS, "AWS_01-AWS Academy"]
badge: aws
---

Una de las primeras prácticas al trabajar con **computación en la nube** es aprender a crear un servidor virtual. En **Amazon Web Services**, esto se realiza mediante el servicio **Amazon EC2**, que permite crear **máquinas virtuales en la nube** llamadas *instancias*.

Estas instancias funcionan de forma similar a un **VPS (Virtual Private Server)** tradicional: puedes instalar software, ejecutar aplicaciones o desplegar sitios web.

A continuación se muestra el proceso completo para lanzar tu primera instancia.

## 1. Ir a la consola de administración

Desde el portal de [AWS Academy](https://awsacademy.instructure.com/login/canvas){:target='_blank'} inicia el AWS Learner Lab para habilitar la consola.

![Learner lab start AWS Console](aws/learner-lab-start-console.webp)

## 2. Acceder al servicio EC2

Una vez dentro de la **consola de AWS**.

1. En el buscador superior escribe **EC2**.
2. Selecciona el servicio **Amazon EC2**.

![Buscar y seleccionar ec2](aws/aws-console-buscar-ec2.webp)

Se abrirá el panel principal de administración de instancias.

Desde este panel podrás crear, administrar y monitorear tus servidores virtuales.

![ec2 home page](aws/ec2-pagina-principal.webp)

---

## 3. Iniciar la creación de la instancia

Dentro del panel de EC2 nos desplazamos hasta encontrar el botón:

<a href="https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#LaunchInstances:" target="_blank" class="border-0"><kbd style="background: #ec7211; color: black">Launch Instance</kbd></a>

Haz clic en este botón para comenzar el asistente de creación de tu servidor.

![Botón launch instance](aws/ec2-boton-para-lanzar-instancia.webp)

---

## 4. Configurar el nombre de la instancia y seleccionar imagen

El primer paso es asignar un **nombre a tu instancia**. 

El nombre es simplemente una etiqueta para identificar tu servidor dentro de AWS. Luego seleccionar la **AMI (Amazon Machine Image)**, que es la plantilla del sistema operativo que se instalará en tu servidor.

AWS ofrece varias opciones como:

* **Ubuntu**
* **Amazon Linux**
* **Windows Server**

Para prácticas iniciales suele recomendarse:

**Ubuntu Server LTS**

porque es ligero, estable y ampliamente utilizado en servidores.

Por ejemplo:

![Nombre y selección de imagen](aws/ec2-nombre-y-seleccion-de-imagen.webp)

---

## 5. Seleccionar el tipo de instancia

El tipo de instancia determina los **recursos del servidor**, como CPU y memoria RAM.

Para prácticas o entornos de laboratorio suele utilizarse: `t2.micro` o `t3.micro`.

![Seleccionar el tipo de instancia](aws/ec2-seleccionar-tipo-de-instancia.webp)

Este tipo de instancia ofrece recursos básicos y es suficiente para realizar pruebas o ejecutar aplicaciones.

> Elegir otro tipo de instancia, podría **consumir los créditos del laboratorio más rápidamente** o incluso no estar permitido por las restricciones del entorno.
{:.prompt-warning}

---

## 6. Crear o seleccionar una clave SSH

Para conectarte al servidor necesitarás una **clave SSH**.

Durante este paso puedes:

* Crear una nueva **Key Pair**
* Descargar el archivo `.pem`
* Guardarlo en tu computadora

![Generar nueva par de claves](aws/ec2-generar-par-de-clave.webp)

Este archivo es **necesario para conectarte al servidor de forma segura**. Es importante guardar bien esta clave, ya que sin ella no podrás acceder al servidor.

![Guardar la llave pem en otro directorio](aws/clave-pem-guardar-en-otro-directorio.webp)

---

## 7. Configurar las reglas de seguridad

AWS utiliza **grupos de seguridad** para controlar el tráfico de red hacia la instancia.

Las configuraciones más comunes son:

* **SSH (puerto 22)** → para conectarte al servidor
* **HTTP (puerto 80)** → para servidores web
* **HTTPS (puerto 443)** → para tráfico seguro

Para comenzar, puedes habilitar al menos:

```
SSH - 22
```

Esto permitirá conectarte al servidor desde tu computadora.

---

## 8. Lanzar la instancia

Una vez configurados todos los parámetros, haz clic en:

**Launch Instance**

AWS comenzará a crear tu servidor virtual.

El proceso suele tardar **menos de un minuto**.

Cuando termine, la instancia aparecerá en el panel de **Instances** con el estado:

```
Running
```

Esto significa que el servidor ya está activo.

---

## 9. Conectarse al servidor

Para conectarte a tu VPS puedes utilizar **SSH**.

Primero debes obtener la **IP pública** de la instancia desde el panel de EC2.

Luego ejecuta en tu terminal:

```bash
ssh -i mi-clave-aws.pem ubuntu@IP_PUBLICA
```

Ejemplo:

```bash
ssh -i mi-clave-aws.pem ubuntu@3.85.120.10
```

Si todo está correcto, accederás directamente al servidor.

---

## 10. Verificar el funcionamiento del servidor

Una vez conectado puedes ejecutar algunos comandos básicos:

```bash
sudo apt update
```

o instalar un servidor web como **NGINX**:

```bash
sudo apt install nginx
```

Después de instalarlo, podrás acceder desde el navegador usando la **IP pública del servidor**.

---

## Conclusión

Crear un VPS en **Amazon Web Services** mediante **Amazon EC2** es uno de los primeros pasos para trabajar con infraestructura en la nube. A través de este servicio es posible desplegar servidores en cuestión de minutos y utilizarlos para alojar aplicaciones, sitios web o entornos de desarrollo.

Aprender a lanzar instancias EC2 permite comprender cómo funcionan los servidores en la nube y constituye una habilidad fundamental dentro del mundo del **cloud computing**.
