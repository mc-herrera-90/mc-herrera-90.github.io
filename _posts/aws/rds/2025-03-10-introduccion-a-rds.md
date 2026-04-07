---
title: "AWS: Guía práctica para configurar y lanzar tu primera base de datos en AWS - RDS"
categories: [AWS, "AWS_02-Guías"]
image: aws/rds-ilustracion.webp
---

Amazon Web Services (AWS) ofrece una gran variedad de herramientas para crear y gestionar aplicaciones en la nube. Uno de los servicios más utilizados para el manejo de bases de datos es **Amazon Relational Database Service (RDS)**, que permite configurar, operar y escalar bases de datos de forma sencilla.

## ¿Qué es AWS RDS?

**Amazon RDS (Relational Database Service)** es un servicio de Amazon Web Services que te permite crear y usar bases de datos SQL en la nube sin complicarte con la administración.

Soporta motores como **MySQL**, **PostgreSQL**, **Oracle** y **SQL Server**, y se encarga automáticamente de cosas como backups, actualizaciones y escalado.

En simple: tú usas la base de datos, y AWS se encarga de que todo funcione bien por detrás.

## 1. Ir a la consola de RDS

Desde el portal de [AWS Academy](https://awsacademy.instructure.com/login/canvas){:target='_blank'} inicia el AWS Learner Lab para habilitar la consola.

![Learner lab start AWS Console](aws/learner-lab-start-console.webp)

## 2. Acceder al servicio de Amazon RDS

Una vez dentro de la **consola de AWS**.

1. En el buscador superior escribe **RDS**.
2. Selecciona el servicio **Aurora and RDS**.

![Buscar el servicio en la consola](aws/buscar-aws-rds-en-la-consola.webp)

## 3. Crear una instancia y seleccionar el motor de base de datos

En el panel, seleccionamos __Bases de datos__ y clic en __Crear base de datos__:

![Crear base de datos](aws/aws-rds-crear-base-de-datos.webp)

Luego hay que seleccionar el motor de base de datos, para este ejemplo utilizamos __MariaBD__:

![Seleccionar MariaDB](aws/seleccion-de-mariadb-en-rds.webp)

## 4. Configurar plantilla y opción de creación

Las opciones son para cada escenario:

- __Producción__ si estás ejecutando una aplicación y necesita __alta disponibilidad__.
- __Desarrollo y pruebas__ si es para experimentación.
- __Entorno de pruebas__ (Free Tier) simplemente si son pruebas básicas.

![Configurar plantilla](aws/rds-configurar-plantilla-y-opcion-de-creacion.webp)

## 5. Configuración y características de la base de datos

En esta sección se visualizan las características de la base de datos y se permite configurar las credenciales de acceso.

![configuración mariadb](aws/mariadb-configuracion-rds.webp)

Más abajo, seguimos completando y seleccionando la forma de configurar las credenciales.

![configuracion mariadb credenciales](aws/mariadb-configuracion-credenciales-rds.webp)


## 6. Configuración de la instancia

En esta sección se definen las características de la instancia de base de datos, permitiendo seleccionar el tipo de clase según las necesidades de rendimiento y capacidad. 

* **Clases estándar:** equilibrio entre rendimiento y costo.
* **Clases optimizadas para memoria:** mayor RAM para alto rendimiento.
* **Clases ampliables:** ajustan CPU dinámicamente, más económicas para uso variable.

![configuración instancia](aws/configuracion-instancia-mariadb-rds.webp)