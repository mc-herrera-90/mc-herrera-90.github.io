---
title: "AWS: Introducción a AWS Academy y sus herramientas"
categories: [AWS, "AWS_01-Academy"]
badge: aws
---

**AWS Academy** es un programa educativo de **Amazon Web Services (AWS)** diseñado para que estudiantes y docentes aprendan **computación en la nube** utilizando las mismas herramientas y tecnologías que se usan en la industria.

---

## 1. ¿Qué es AWS Academy?

**AWS Academy** es una iniciativa que permite a instituciones educativas ofrecer formación en tecnologías cloud. Los estudiantes obtienen acceso a contenido oficial, entornos de laboratorio en la nube y preparación para certificaciones profesionales.

![Team](aws/team.avif)

A diferencia de otros cursos más teóricos, AWS Academy está diseñado para **aprender mediante la práctica**. Los estudiantes reciben acceso a una cuenta educativa de AWS que incluye **créditos para utilizar distintos servicios de la plataforma**, lo que permite experimentar con recursos reales de la nube, desplegar aplicaciones y realizar laboratorios sin necesidad de utilizar una cuenta personal.

---

## 2. Acceso mediante invitación

Para usar __AWS Academy__ es necesario ser invitado por un __docente__ o __administrador__ de una institución eductiva asociada (no es una plataforma de acceso libre).

La invitación llega por correo electrónico para unirse a un curso específico, permitiendo el acceso a laboratorios y recursos sin costo.

![Invitación para unirse a curso](aws/invitacion-para-unirse-a-curso-de-aws-academy.webp)

Una vez recibes la invitación para participar en **AWS Academy**, el siguiente paso es completar el registro en la plataforma **Canvas**, que es donde se gestionan los cursos y laboratorios.

A continuación se muestra la pantalla inicial de registro:

![Crear password y aceptar politicas](aws/aws-academy-crear-password-y-aceptar-politicas.webp)

En esta página deberás completar algunos datos básicos para activar tu acceso al laboratorio.

1. __Contraseña (obligatorio)__: Debes crear una contraseña para tu cuenta. Este campo es obligatorio y será la clave que utilizarás para iniciar sesión en la plataforma.
2. **Zona horaria**: Selecciona tu zona horaria correspondiente. En muchos casos aparecerá automáticamente configurada según tu región.
3. Información de contacto (opcional): Existe una casilla donde puedes permitir que AWS comparta noticias, actualizaciones y ofertas relacionadas con sus servicios.
4. __Aceptación de términos (requerido)__: Debes marcar la casilla donde aceptas los **términos de uso y políticas** del laboratorio de AWS Academy. Este paso es obligatorio para continuar.

Una vez completados los campos requeridos, simplemente haz clic en el botón **Register** para terminar el proceso. Después de esto, tu cuenta quedará activada y podrás acceder al curso y a los laboratorios de **AWS Academy**.

![Página de inicio del laboratorio](aws/aws-academy-learner-lab-inicio.webp)

---

## 3. Cómo abrir y ejecutar el **Learner Lab** en AWS Academy

Una vez que has completado el registro en **Canvas**, podrás acceder al curso y a los laboratorios prácticos. Uno de los más importantes es el **Learner Lab**, que proporciona un entorno temporal para trabajar con los servicios de **Amazon Web Services**.

### 3.1 Acceder al curso en Canvas

Primero debes iniciar sesión en **Canvas** con el correo y contraseña que configuraste durante el registro.

Una vez dentro:

1. En el panel principal selecciona el **curso de AWS Academy**.
2. Dentro del curso busca la sección llamada **Modules** o **Módulos**.
3. Allí encontrarás el enlace al **AWS Academy Learner Lab**.

![Ir al enlace de Learner Lab](aws/aws-academy-pasos-para-el-link-de-learner-lab.webp)

Este laboratorio es el entorno donde podrás utilizar los servicios de AWS para realizar prácticas.

### 3.2 Abrir el Learner Lab

Al hacer clic en el laboratorio, se abrirá una página con la información del entorno de práctica. En esta página normalmente encontrarás:

* Descripción del laboratorio
* Estado del entorno
* Botón para iniciar el laboratorio

Para comenzar debes presionar el botón **Start Lab**.

![Presiona Start Lab](aws/aws-academy-start-learner-lab.webp)

Este botón inicia la creación del entorno temporal que utilizarás durante la práctica.

> Supervisa siempre el **presupuesto del laboratorio** que aparece en la parte superior de la interfaz.
> ![Créditos consumidos](aws/learner-lab-creditos-consumido.webp)
> Si superas el presupuesto asignado, **la cuenta del laboratorio se desactivará automáticamente y se perderán todos los recursos y el progreso realizado**. Por ello, es importante controlar el uso de los servicios mientras trabajas en el laboratorio.
{:.prompt-warning}

### 3.3 Esperar a que el laboratorio se inicialice

Cuando presionas **Start Lab**, la plataforma comienza a preparar el entorno de trabajo en **Amazon Web Services**.

Durante este proceso:

* El sistema crea una **cuenta temporal de AWS**
* Se habilitan los permisos necesarios
* Se asignan **créditos educativos** para utilizar servicios

> Este proceso puede tardar entre **30 segundos y algunos minutos**.  
> Mientras se prepara el entorno, el estado del laboratorio cambiará de **rojo** a **amarillo** y cuando esté listo, aparecerá en **verde** (AWS <small><i class="fa-solid fa-circle text-success"></i></small>).
{:.prompt-info}

---

## 4. Abrir la consola de AWS

Cuando el laboratorio esté listo, aparecerá el botón disponible para abrir **AWS Console**.

![Learner lab start AWS Console](aws/learner-lab-start-console.webp)

Al hacer clic, se abrirá una nueva pestaña del navegador con la **consola de administración de AWS**, que es la interfaz principal para gestionar los servicios de la nube.

![AWS Console tour](aws/aws-console-tour.webp)

Desde esta consola podrás trabajar con distintos servicios del ecosistema de **Amazon Web Services**, como por ejemplo:

* **Amazon EC2** para crear máquinas virtuales
* **Amazon S3** para almacenar archivos
* **Amazon RDS** para administrar bases de datos
* **AWS Lambda** para ejecutar funciones sin servidores (serverless)

![AWS Console](aws/aws-console-servicios-populares.webp)

---

## 6. Finalizar el laboratorio

Cuando termines de trabajar en el entorno, es recomendable detener el laboratorio para liberar los recursos.

Para hacerlo:

1. Regresa a la página del **Learner Lab**.
2. Haz clic en **End Lab**.

Esto cerrará el entorno temporal y evitará consumir los créditos asignados.

![End Lab](aws/learner-lab-end.webp)

---

Si estás comenzando en la nube, AWS Academy es un excelente punto de partida, ya que nos permite pasar de la teoría a la práctica. La nube no se aprende solo estudiando, se aprende implementando.