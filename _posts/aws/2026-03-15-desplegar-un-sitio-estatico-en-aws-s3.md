---
title: "AWS: Desplegar una Web Estática en AWS S3"
categories: [AWS, "AWS_02-AWS Guías"]
image: poster/aws-s3.webp
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Si tienes una página web estática (generada con HTML, CSS y JS o frameworks como Jekyll, Hugo o Astro), puedes publicarla en Internet gratis usando los servicios serverless de AWS. Aquí te ayudo a cómo hacerlo paso a paso, ya sea que tengas una cuenta __Free Tier__ o una __cuenta de estudiante en AWS Academy__.

Para ello, usaremos:

- __Amazon S3__: Servicio de almacenamiento de archivos.

## 1. Entendiendo AWS Serverless

AWS Serverless en un modelo de desarrollo nativo de la nube que permite a los desarrolladores crear y ejecutar aplicaciones sin preocuparse por los servidores. Mientras los servidores sigan existiendo, AWS se encarga de su configuración, mantenimiento y escalado. Solo tienes que centrarte en el desarrollo de tu sitio web.

> __Serverless no significa que no haya servidores__, sino que no tienes que administrarlos. AWS se encarga de todo y solo tienes que subir tus archivos y dejar que el servicio los sirva al mundo sin preocuparse por infraestructura.
{: .prompt-info }

## 2. ¿Qué son los buckets de Amazon S3?

En **Amazon S3**, un **bucket** es un contenedor donde se almacenan archivos en la nube. Estos archivos pueden ser de cualquier tipo, como documentos, imágenes, videos o recursos de un sitio web.

Podemos pensar en un bucket como si fuera **una carpeta principal en internet**, donde se organizan y guardan los archivos.

### 2.1 Cómo funciona un bucket

Dentro de un bucket se almacenan **objetos**, que son los archivos que subimos al servicio. Cada objeto incluye:

* el **archivo** (por ejemplo `imagen.png` o `index.html`)
* un **nombre o clave**
* metadatos asociados al archivo

Por ejemplo, un bucket podría contener archivos como el siguiente proyecto de ejemplo:

{% include file-viewer.html files=site.data.netlify.proyecto-certificados name="sitio-demo" %}

### 2.2 Características importantes de los buckets

* Cada bucket tiene un **nombre único global** dentro de **Amazon Web Services**.
* Los archivos pueden ser **privados o públicos** según la configuración de permisos.
* Permiten almacenar **grandes cantidades de datos** de forma escalable.

### 2.3 Uso común de los buckets

Los buckets de **Amazon S3** se utilizan para muchas cosas, por ejemplo:

* almacenar **archivos de aplicaciones**
* guardar **copias de seguridad**
* almacenar **imágenes o videos**
* publicar **sitios web estáticos** (que lo realizaremos)

![Ilustración de un bucket](aws/s3-bucket-ilustracion.webp)

En resumen, un **bucket** es simplemente el **contenedor donde se almacenan los archivos en Amazon S3**, y es la unidad básica de organización dentro del servicio.

## 3. Ir a la consola de administración

### 3.1 Ingresar a tu cuenta de AWS

Si aún no tienes una cuenta, puedes registrate para acceder a una cuenta __Free Tier__ en [https://aws.amazon.com/free/](https://aws.amazon.com/free/){:target='_blank'}.

![Home Page](aws/homepage-freetier.webp)

### 3.2 Ingresar desde AWS Academy

Si eres estudiante en __AWS Academy__, inicia el AWS __Learner Lab__ desde el [portal de AWS Academy](https://awsacademy.instructure.com/login/canvas){:target='_blank'}.

![Learner lab start AWS Console](aws/learner-lab-start-console.webp)

### 3.3 Buscar el servicio en el panel de inicio

Desde la consola principal de AWS, busca __“S3”__ en la barra de búsqueda de servicios y haz clic en el servicio S3:

![Buscar el servicio de S3](aws/aws-console-buscar-s3.webp)

## 4. Crear un nuevo Bucket

En la página de inicio de S3, encontrará un botón para __crear un nuevo bucket__:

![Crear Bucket](aws/s3-crear-buckte.webp)

> Puedes crear el bucket con la configuración predeterminada, pero ten en cuenta que __el nombre no podrá cambiarse en el futuro__.
{:.prompt-info}

### 4.1 Configuración general del bucket

Aquí definimos el nombre y el tipo de uso:

![s3 configuración general](aws/s3-configuracion-general.webp)

### 4.2 Configuración de acceso al bucket

Para un sitio web en S3 debemos __permitir acceso público__ porque los visitantes necesitan poder leer los archivos HTML, CSS y JavaScript del bucket para que la página se muestre en el navegador.

![s3 configuración de acceso al bucket](aws/s3-configuracion-de-acceso-al-bucket.webp)

### 4.3 Finalizar con la creación del bucket

El resto de la configuración la dejamos tal cual y procedemos a crear el bucket.

![Creación del bucket](aws/s3-creacion-del-bucket.webp)

## 5. Cargar los archivos

Después de crear el contenedor, haz clic en él para acceder a la opción de subir archivos. Haz clic en el botón que dice __Cargar__.

![Cargar archivos desde la interfaz](aws/s3-cargar-archivos-desde-la-interfaz.webp)

Luego, sube los archivos arrastrando la carpeta.

{% include embed/video.html src="aws/cargar-archivos-a-s3.webm" %}

## 6. Confugurar la política de acceso

Aunque hayamos __deshabilitado el bloqueo de acceso público__, __los objetos del bucket siguen siendo privados por defecto en Amazon S3__.

En el siguiente ejemplo podemos observar que la URL del objeto `index.html`, que debería llevarnos a la página web, no se mostrará debido a la falta de permisos.

{% include embed/video.html src="aws/s3-permisos-insuficientes.webm" %}

Para solucionarlo, debemos ir al bucket y luego hacer clic sobre la pestaña __Permisos__ y bajar hasya el botón para __Editar__ las políticas del bucket.

![Editar politicas del bucket](aws/editar-politicas-s3-boton.webp)

Ahora, añade el siguiente fragmento en formato __JSON__ en el cuadro disponible:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::NOMBRE-DE-TU-BUCKET/*"
    }
  ]
}
```
{:.nolineno .typing .typing-fast }

> Asegúrate de cambiar `NOMBRE-DE-TU-BUCKET` por el nombre del bucket creado.
{:.prompt-info}

Ahora desplazate hasta encontrar el botón de __"Guardar cambios"__:

![Guardar políticas](aws/s3-guardar-politicas.webp)