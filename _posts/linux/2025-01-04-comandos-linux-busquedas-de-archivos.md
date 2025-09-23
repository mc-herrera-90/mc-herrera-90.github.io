---
title: Búsqueda de archivos y en su contenido
categories: [Linux, Comandos Linux]
icon: icon/bash.svg
---

## Buscar Archivos

Buscar archivo y directorio por su nombre en todo el sistema
: Busca archivos y directorios por nombre en el sistema de archivos
```terminal
find * -name nombre
```

Buscar archivo y directorio por su nombre, dentro de un directorio
: Realiza la búsqueda de archivos y directorios dentro de un directorio específico
```terminal
find directorio -name nombre
```

Buscar archivos y directorios pertenecientes a un usuario, dentro de un directorio
: Encuentra archivos y directorios que pertenecen a un usuario específico
```terminal
find directorio -user usuario
```

Buscar archivos y directorios por su tipo, dentro de un directorio
: Busca archivos y directorios de un tipo específico (`d`: directorio, `f`: archivo regular, `l`: enlace simbólico)
```terminal
find directorio -type f
```

Buscar archivos y ejecutar un comando
: Ejecuta un comando en los archivos encontrados
```terminal
find directorio -name nombre -exec comando {} \;
```

Buscar archivos con extensión `.ps`
: Utiliza locate para encontrar archivos con una extensión específica
```terminal
locate \*.ps
```

Mostrar la ruta completa de un ejecutable
: Encuentra la ubicación de un ejecutable en el sistema
```terminal
which ejecutable
```

Mostrar la ubicación de un archivo binario, de ayuda o fuente
: Usa `whereis` para obtener información sobre el archivo ejecutable
```terminal
whereis ejecutable
```

Mostrar archivos que contienen un nombre específico
: Busca archivos que contienen una parte específica en su nombre
```terminal
find directorio -iname "*parte_nombre*"
```