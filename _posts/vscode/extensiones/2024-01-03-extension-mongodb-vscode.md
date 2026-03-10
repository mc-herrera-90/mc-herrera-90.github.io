---
title: "VS Code: MongoDB for VS Code, extensión para trabajar con MongoDB directamente desde VS Code"
categories: ["Visual Studio Code", "VSCode_01-Extensiones"]
badge: vscode
---

__MongoDB for VS Code__ es la extensión oficial para un flujo de trabajo mucho más productivo, una extensión que permite gestionar y consultar tus bases de datos desde VS Code, evitando cambiar entre diferentes herramientas.

## 1. Instalación

1. Abre Visual Studio Code
2. Cambia a Extensiones
3. Busca: `MongoDB for VS Code` (autor: MongoDB mongodb.com)

![Instalar MongoDB for VS Code](vscode/instalar-mongodb-for-vscode.webp)

O puedes abrir su página en el Marketplace y añadirlo:

{% include vscode-extension.html logo="https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.15.1/1773071695424/Microsoft.VisualStudio.Services.Icons.Default" name="MongoDB for VS Code" description="Facilita el trabajo con tus datos de MongoDB directamente desde VS Code" url="https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode" %}

## 2. Conectarse con un servidor de MongoDB

Para empezar a trabajar con una base de datos desde VS Code, debes conectar con un servidor primero. Instalada la extensión se nos habilitará una nueva sección en la barra lateral izquierda con el ícono de MongoDB.

![Sección de MongoDB en VS Code](vscode/seccion-mongodb-vscode.webp)

Ahora se muestra el panel con diferentes secciones y la primera es la que te permite añadir una nueva conexión (Add Connection) y escribir la cadena de conexión:

![Agregar conexión al servidor de mongodb](vscode/conexion-a-mongodb-desde-vscode.webp)

Una vez conectado se listan las bases de datos disponibles:

![Listado de las bases de datos](vscode/listado-de-bases-de-datos-de-mongodb-en-vscode.webp)
