---
title: Operaciones con archivos comprimidos
categories: [Linux, Comandos Linux]
icon: icon/bash.svg
---

## Archivos TAR

Mostrar contenido de archivo TAR
: Para ver el contenido de un archivo .tar sin extraerlo
```terminal
tar -tf archive.tar
```

Crear archivo TAR
: Genera un archivo TAR a partir de un directorio
```terminal
tar -cvf archivo.tar directorio1
```

Crear archivo TAR con varios archivos y directorios
: Permite empaquetar múltiples archivos y directorios en un solo archivo TAR
```terminal
tar -cvf archivo.tar archivo1 archivo2 directorio1
```

Crear archivo TAR comprimido en bzip2
: Genera un archivo TAR comprimido usando el algoritmo bzip2
```terminal
tar -cvfj archivo.tar.bz2 directorio1
```

Crear archivo TAR comprimido en gzip
: Crea un archivo TAR comprimido en formato gzip.
```terminal
tar -cvfz archivo.tar.gz directorio1
```

Extraer archivo TAR
Descomprime un archivo TAR
```tar
tar -xvf archivo.tar
```

Extraer archivo TAR en un directorio específico
: Extrae el contenido de un archivo TAR en el directorio deseado
```terminal
tar -xvf archivo.tar -C /directorio
```

Extraer archivo TAR preservando permisos de usuario
: Extrae un archivo TAR mientras conserva los permisos de usuario
```terminal
tar -xpvf archivo.tar
```

Descomprimir archivo TAR comprimido en bzip2
: Extrae un archivo TAR que ha sido comprimido con bzip2
```terminal
tar -xvfj archivo.tar.bz2
```

Descomprimir archivo TAR comprimido en gzip
: Extrae un archivo TAR comprimido en formato gzip
```terminal
tar -xvfz archivo.tar.gz
```