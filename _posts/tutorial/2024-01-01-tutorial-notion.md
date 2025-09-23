---
title: "Gestionar tu trabajo en Notion"
description: Notion es una de las herramientas más versátiles para la productividad
categories: [Tutoriales, Productividad]
icon: icon/notion.svg
image:
    path: poster/tutorial-notion.webp
    lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQhP/F8pexDR/0wuAFZQOCBgAAAA8AMAnQEqFAALAD85hrpULyklozAIAeAnCWkAAFxHp2A7arn+4J/4wAD+6nsTjTQV9nmgi1KbH57VnV7ic7u0+c07h3KGdskD1oHd2aRptVi3CnrGPTxoWAZ1ktEgAAAA
pin: true
---


[__Notion__](https://www.notion.com/){:target='_blank'} es una de las herramientas de productividad de más rápido crecimiento en los últimos tiempos. Su __versatibilidad__ y __capacidad para adaptarse a diferentes flujos de trabajo__ han hecho   que muchos usuarios avanzados se enamoren de esta herramienta. Aunque en los últimos años ha enfrentado ciertas limitaciones derivadas de cambios en su modelo de negocio (restricciones en algunas funciones que antes eran gratuitas), sigue siendo una opción muy sólida para organizar información y proyectos.

> Lo genial de Notion, es que puedes usarlo para crear exactamente la interfaz que necesitas para mantenerte organizado con las cosas importantes del día a día.
![pagina documentos](notion/propiedad-checkbox.webp)
{: .prompt-tip }

## Qué es Notion

__Notion es una herramienta todo-en-uno__ que permite gestionar notas, proyectos, crear bases de datos y colaborar en equipo. Su capacidad de adaptación permite que se use tanto para organización personal como para trabajo en equipo. En lugar de cambiar entre diferentes aplicaciones, puedes usar Notion como una única plataforma para gestionar tus proyectos, estudios, etc.

![web oficial Notion](notion/pagina-principal.webp)
_Página oficial de Notion_

### ¿Es Notion gratuito?

Notion es gratuito, pero también ofrece [planes de pago](https://www.notion.com/es/pricing){:target="_blank"}: 

| Plan           | Precio               | Ideal para...                               |
| -------------- | -------------------- | ------------------------------------------- |
| **Gratuito**   | 0 US\$/miembro/mes   | Uso individual, organización personal       |
| **Plus**       | 10 US\$/miembro/mes  | Profesionales y equipos pequeños            |
| **Business**   | 20 US\$/miembro/mes  | Empresas en crecimiento (¡recomendado!)     |
| **Enterprise** | Precio personalizado | Organizaciones grandes, control y seguridad |

En la siguiente tabla, podemos observar las diferencias entre los planes de Notion.

| Característica Clave                               | Gratuito |  Plus  | Business | Enterprise |
| -------------------------------------------------- | :------: | :----: | :------: | :--------: |
| **Uso personal y organización básica**             |     ✅    |    ✅   |     ✅    |      ✅     |
| **Colaboración en equipo**                         |     ❌    |    ✅   |     ✅    |      ✅     |
| **Subida de archivos ilimitada**                   |     ❌    |    ✅   |     ✅    |      ✅     |
| **Formularios personalizados**                     |     ❌    |    ✅   |     ✅    |      ✅     |
| **SSO / Seguridad empresarial (SAML, SCIM)**       |     ❌    |    ❌   |     ✅    |      ✅     |
| **Espacios privados y verificación de dominios**   |     ❌    |    ❌   |     ✅    |      ✅     |
| **Integraciones exclusivas (GitHub, Figma, etc.)** |     ❌    |    ❌   |     ✅    |      ✅     |
| **Auditoría, cumplimiento y controles avanzados**  |     ❌    |    ❌   |     ❌    |      ✅     |
| **IA de Notion incluida**                          |  Prueba  | Prueba |     ✅    |      ✅     |
| **Sin conservación de datos (LLM)**                |     ❌    |    ❌   |     ❌    |      ✅     |

### Desventajas del plan gratuito

Revisemos las principales __limitaciones__ de Notion en su versión gratuita.

1\. Límite de Bloques en el Plan Gratuito
: Notion permite hasta **1.000 bloques por espacio de trabajo con más de 2 propietarios** en su versión gratuita. Cada texto, imagen, tabla o cualquier elemento cuenta como un bloque.

> Antiguamente se podía tener hasta cinco invitados en un espacio de trabajo con bloques ilimitados.
{: .prompt-info }

2\. Espacio de Almacenamiento Limitado
: En la versión gratuita solo puedes subir archivos de hasta **5 MB por archivo**, lo que puede ser restrictivo para documentos pesados.

3\. Funcionalidades Avanzadas
: Opciones como el historial de versiones, integraciones avanzadas y mayor almacenamiento están bloqueadas en la versión gratuita.

## Empezando en Notion

Lo primero que se debe hacer es crear una cuenta. Para esto, se debe ingresar a la [página de registro Notion](https://www.notion.so/signup){: target='_blank'}. Una vez allí, selecciona la opción con la cual te quieres registrar:

![Registrarse en Notion](notion/register.webp)
_Página de registro en Notion_ 

Enseguida te llegará un código de registro al correo ingresado, el cual puedes copiar y pegar.

Una vez creamos una cuenta para usar Notion, la primera vez que iniciamos sesión en Notion nos va a ayudar a configurar un espacio de trabajo. Para ello debes seleccionar las opciones que más se adaptan a tus necesidades:

![Setup notion](notion/seleccionar-uso.webp)


## Personalizar Notion

Desde la barra lateral izquierda, en la parte superior, podemos encontrar el botón para ir a la configuraciones.

![Ir a configuraciones](notion/ir-a-configuraciones.webp)

> Desde las configuraciones, **puedes ajustar las preferencias** como **idioma**, **temas**, **notificaciones**, personalizar **espacios de trabajos y permisos**, etc.
{: .prompt-info }

### Cambiar la Apariencia

En **Preferencias** vamos a la sección de **Apariencia** y podemos cambiar entre temas **Oscuro/Claro**:

![Cambiar de tema](notion/custom-theme.webp)

## Páginas y Bloques

En Notion, entender la diferencia entre **páginas** y **bloques** es la clave para organizar tu información. Aunque pueden parecer similares al principio, cumplen funciones distintas. Por eso, te explicaré estas diferencias.

### Páginas en Notion

Las páginas en Notion son el contenedor principal de información. Puedes pensar en las páginas como documentos en blanco donde agregas contenido, pero también funcionan como **carpetas** porque pueden contener otras páginas dentro. Por ejemplo, si tienes una página llamada "**Trabajo**", dentro de ella podrías tener otras páginas:

![página como contenedor de otras páginas](notion/pagina-contenedor-otras-paginas.webp)
_Página como contenedor de otras páginas_

Cada una de esas páginas puede contener más información, incluso otras páginas, creando un sistema jerárquico dentro de la plataforma.

### Bloques en Notion

En notion, **todo es un bloque**. Cada texto, imagen, lista o base de datos o cualquier cosa que agregas dentro de una página es un bloque individual. Si volvemos al ejemplo anterior, dentro de la página "**Trabajo**" ya tenemos varios bloques:

- El título principal (**nombre de la página**) ➝ Es un bloque de encabezado especial.
- Cada página dentro de otra ➝ Es un bloque de tipo "página".
- Saltos de líneas ➝ Es un bloque de texto vácio.

La mejor manera de familiarizarse con Notion es probar algunos bloques, simplemente escriba `/` y verá todas las opciones:

{% include embed/video.html src="notion/despliegue-de-bloques.mp4" %}

## Tipos de Bloques

Como sabemos, todo en Notion funciona con "bloques", un bloque puede ser texto, imágenes, listas, bases de datos y más.

### De Texto

Simple, con opciones de formato (`/h1`, `/bold`, `/citas`, etc):

![Bloques de texto](notion/bloques-de-texto.webp)

### De Listas

Viñetas, numeradas o listas de tareas (`/todo`):

![Bloques de listas](notion/bloques-listas.webp)

### De Imágenes y Videos

Adjunta archivos o incrusta enlaces (`/imagen`, `/video`):

![Bloques de Multimedia](notion/bloques-multimedia.webp)

> Los videos e imágenes que deseas subir desde tu equipo, deben ser menor a **5 MB** usando la versión gratuita.
{: .prompt-info }

## Transforma Bloques

En Notion, todos los bloques se pueden convertir en bloques de otro tipo, para usar, ver o profundizar en esa misma información de una forma distinta:

![convertir bloques](notion/convertir-bloque.webp)

## Organizar Bloques

En Notion, podemos organizar la información de muchas maneras, usando páginas, listas, tablas y más. Pero una de las formas más efectivas para estructurar contenido de manera visual es **usando columnas**.

### Cómo crear columnas

Aunque Notion no tiene un botón directo para crear columnas, podemos hacerlo de forma muy sencilla con **arrastrar y soltar**:

![Poner contenido en columnas](notion/organizar-bloques-horizontal.webp)

También se pueden crear columnas usando el comando `/column` y selecciona la opción "**Columnas** (2, 3, 4, etc.)":

![Poner contenido en columnas](notion/crear-columnas.webp)

Como podemos ver, las columnas permiten organizar bloques de contenido uno al lado de otro, y así distribuir información visualmente en varias secciones dentro de una página. Esto hace que la información sea más fácil de leer y comparar.

Sin embargo, esta no es la única forma de organizar el contenido. Si necesitas ordenar, filtrar y visualizar la información de distintas maneras, entonces una **base de datos** es la mejor opción.

A continuación, veremos qué son las bases de datos en Notion. 🚀

## Bases de Datos en Notion

Las bases de datos en Notion son los tipos de bloques más poderosos y que más funcionalidades nos ofrecen ya que nos permiten **estructurar información y visualizarla de diferentes maneras**, así como **categorizarla**, **filtrarla** y **organizarla** de la manera que más nos convenga en cada contexto.

### Cómo crear una base de datos

Las bases de datos en Notion pueden crearse de dos formas:

- **Bases de Datos Full-Page (Página Completa)**: Se crean como una página independiente dentro de Notion y aparecen en la barra lateral.
- **Bases de Datos Inline (Dentro de una Página)**: Se insertan dentro de una página existente y se combinan con otros bloques de contenido, incluso otras bases de datos.

### Bases de datos Full-Page

Para crear una base de datos full-page en Notion, crea una página nueva y, en la parte inferior `Get Started With`, selecciona `Table`. También puedes abrir una página existente y usar el comando de barra diagonal `/database`.

Al crear una base de datos full-page (creando una nueva página), puedes empezar desde cero o elegir entre las plantillas sugeridas:

![nueva base de datos](notion/new-database.webp)

> Tener una base de datos Full-Page, significa que no podemos añadir más contenido a esa página que se salga de aquel que introduzcamos en la propia base de datos.
{: .prompt-info }

### Bases de datos Inline

Para crear bases de datos inline, abre una página existente o crea una nueva, escribe `/database` y selecciona una vista:

![bases de datos inline](notion/database-inline-vistas.webp)

### Propiedades de las Bases de Datos

Las propiedades en las bases de datos de Notion funcionan como **columnas** en la vista de tabla. Cada propiedad almacena un tipo específico de información dentro de un registro.

Estos son algunos ejemplos de propiedades:

**CheckBox** (Casilla para marcar)
: Si se ha completado la información, puede contener el valor marcado/desmarcado:

![Casillas de verificación](notion/propiedad-checkbox.webp)

**Archivos y multimedia**
: Te permite subir archivos, imágenes y otros archivos relacionados con tus datos:

![Archivos multimedia](notion/propiedad-file.webp)

> En resumen, una base de datos es una colección de páginas y puede crearse dentro de un bloque o ser una página completa.
{: .prompt-info }

## Publicar Páginas

En Notion, puedes compartir tus páginas con otras personas haciéndola pública. Esto es útil para difundir información con otras personas o crear documentos accesibles en línea.

### Instrucciones:

- Abre la página en Notion.  
- Haz clic en **"Compartir"** (arriba a la derecha).  
- Activa **"Compartir en la web"**.  
- Ajusta los permisos según lo que necesites.  
- Copia el enlace y compártelo.
 
> Para dejar de compartir, desactiva **"Compartir en la web"** que la puedes desplegar al presionar nuevamente en el botón **Compartir**.
{: .prompt-info }

### Cambiar el Nombre de Dominio

En la versión gratuita, tu dominio siempre tendrá `notion.site`, pero se puede cambiar el nombre para que cuando publiques una página se vea como `minombre.notion.site`. Para ello debes entrar a **configuraciones** y en la opción **Sitios** actualiza el nombre de dominio:

![Cambiar el nombre de dominio](notion/update-domain.webp)

## Atajos de Teclado

Aunque Notion permite hacer __casi todo en clics__ y menús, aprender sus atajos de teclado puede aumentar tu flujo de trabajo.

| Acción                            | Atajo de teclado                                                 |
| --------------------------------- | ---------------------------------------------------------------- |
| Cambiar entre modo claro y oscuro | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>                |
| Duplicar bloque                   | <kbd>Ctrl</kbd> + <kbd>D</kbd>                                   |
| Insertar enlace                   | <kbd>Ctrl</kbd> + <kbd>K</kbd>                                   |
| Crear nueva página                | <kbd>Ctrl</kbd> + <kbd>N</kbd>                                   |
| Alternar checklist completado     | <kbd>Ctrl</kbd> + <kbd>Enter</kbd>                               |
| Mover bloque arriba/abajo         | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> |
| Abrir búsqueda rápida             | <kbd>Ctrl</kbd> + <kbd>P</kbd>                                   |
| Negrita                           | <kbd>Ctrl</kbd> + <kbd>B</kbd>                                   |
| Cursiva                           | <kbd>Ctrl</kbd> + <kbd>I</kbd>                                   |
| Subrayado                         | <kbd>Ctrl</kbd> + <kbd>U</kbd>                                   |
| Comentario (en base de datos)     | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>                |
| Copiar el link del bloque actual  | <kbd>Ctrl</kbd> + <kbd>L</kbd>                                   |

