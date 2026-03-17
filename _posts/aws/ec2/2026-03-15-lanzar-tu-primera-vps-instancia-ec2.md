---
title: "AWS: Cómo lanzar tu primera instancia EC2"
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

## 6. Crear o configurar una clave SSH

Para conectarte al servidor necesitarás una **clave SSH**.

Durante este paso puedes:

* Crear una nueva **Key Pair**
* Selecciona el formato `.pem`
* Descarga y guarda en un lugar seguro en tu computadora

![Generar nueva par de claves](aws/ec2-generar-par-de-clave.webp)

Este archivo es **necesario para conectarte al servidor de forma segura**. Es importante guardar bien esta clave, ya que sin ella no podrás acceder al servidor.

![Guardar la llave pem en otro directorio](aws/clave-pem-guardar-en-otro-directorio.webp)

---

## 7. Configurar las reglas de seguridad

AWS utiliza **grupos de seguridad** para controlar el tráfico de red hacia la instancia.

Las configuraciones más comunes son:

* **SSH (puerto 22)**: para conectarte al servidor
* **HTTP (puerto 80)**: para servidores web
* **HTTPS (puerto 443)**: para tráfico seguro

Para comenzar, puedes habilitar al menos el tráfico de SSH:

![Habilitar SSH](aws/ec2-configuraciones-de-red-ssh-mi-ip.webp)

Esto permitirá conectarte al servidor desde tu computadora.

> Si configuras SSH con la opción **Mi IP**, solo podrás conectarte desde la dirección IP actual desde la que creaste la instancia. Si cambias de red (por ejemplo, otra Wi-Fi o ubicación), tu IP cambiará y no podrás acceder hasta actualizar la regla de seguridad.  
> Puedes permitir acceso desde **cualquier IP (`0.0.0.0/0`)** por motivos de movilida, pero recuerda que **igual será necesario utilizar la llave privada `.pem` para autenticarse**, lo que mantiene el acceso protegido.
{:.prompt-warning}

---

## 8. Lanzar la instancia

Una vez configurados los parámetros básicos, haz clic en:

<kbd style="background: #ec7211; color: black">Launch Instance</kbd>

![Lanzar instancia](aws/ec2-lanzar-la-instancia-mi-primer-servidor.webp)

AWS comenzará a crear tu servidor virtual.

El proceso suele tardar **menos de un minuto**.

Cuando el proceso termine, aparecerá una notificación indicando que **la instancia se inició correctamente**. Desde ese momento podrás verla en la lista de instancias y en ese mismo instante nos muestra la opción **“Conectarse a la instancia”** para acceder a ella.

![Conectarse a la instancia](aws/ec2-opcion-de-conectarse-a-la-instancia.webp)

---

## 9. Conectarse al servidor

Primero debes obtener la **IP pública** de la instancia desde el panel de EC2.

![Ver instrucciones de conexión desde el panel de EC2](aws/ec2-panel-de-instancia-y-buscar-instrucciones-para-conectarse.webp)

Luego ejecuta en tu terminal:

```terminal
chmod 400 "mi-clave-aws.pem"
ssh -i mi-clave-aws.pem ubuntu@IP_PUBLICA
```
{:.typing}

Ejemplo:

![Conectarse desde la Terminal](aws/conectarse-desde-la-terminal-por-ssh-a-ec2.webp)

Si todo está correcto, accederás directamente al servidor y puedes comprobarlo observando como cambia el __prompt__.

![Conexión](aws/ec2-conexion-exitosa-desde-terminal.webp)

---

## 10. Verificar el funcionamiento del servidor

Una vez conectado puedes ejecutar algunos comandos básicos:

```terminal
sudo apt update
```
{:.typing}

o instalar un servidor web como **NGINX**:

```terminal
sudo apt install nginx
```
{:.typing}

Después de instalarlo, podrás acceder desde el navegador usando la **IP pública del servidor**, pero eso lo veremos más adelante.

Aprender a lanzar instancias EC2 permite comprender cómo funcionan los servidores en la nube y constituye una habilidad fundamental dentro del mundo del **cloud computing**.