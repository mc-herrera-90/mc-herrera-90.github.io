---
title: "Docker: Instalar Docker en Linux"
categories: [Docker, Docker_01-Setup]
badge: docker
---

Para instalar **Docker** en Linux, sigue estos pasos.
El proceso puede variar levemente según la distribución, pero aquí verás el método recomendado usando los repositorios oficiales de Docker.

## 1. Actualizar el sistema

Antes de instalar cualquier cosa, actualiza la lista de paquetes:

```terminal
sudo apt update
sudo apt upgrade -y
```
{:.typing}

> Este ejemplo usa **Ubuntu/Debian**. Si usas Fedora, Arch o otra distro, los comandos cambian.
{: .prompt-info }

## 2. Instalar dependencias

Instala los paquetes necesarios para usar repositorios HTTPS:

```terminal
sudo apt install ca-certificates curl gnupg -y
```
{:.typing}


## 3. Agregar la clave GPG oficial de Docker

Agregar la clave GPG oficial garantiza que los paquetes provienen realmente de los repositorios confiables de Docker y no han sido modificados por terceros.

```terminal
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```
{:.typing}


## 4. Agregar el repositorio oficial

```terminal
echo \
"deb [arch=$(dpkg --print-architecture) \
signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
{:.typing}

Actualiza nuevamente:

```terminal
sudo apt update
```
{:.typing}


## 5. Instalar Docker

```terminal
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```
{:.typing}

## 6. Verificar la instalación

Comprueba que Docker esté funcionando:

```terminal
docker --version
```

Deberías ver algo como:

```terminal
Docker version 26.x.x, build xxxxx
```
{: .noheader }


## 7. Ejecutar Docker sin sudo (opcional)

Para no tener que usar `sudo` en cada comando:

```terminal
sudo usermod -aG docker $USER
newgrp docker
```

---

## 8. Probar con un contenedor

Ejecuta el contenedor de prueba:

```terminal
docker run hello-world
```

Si ves un mensaje de bienvenida, Docker está funcionando correctamente ✅


## 9. Verificar Docker Compose

En versiones modernas viene incluido como plugin:

```terminal
docker compose version
```

---

## Problemas comunes

1. **Permiso denegado al usar Docker**
   → Asegúrate de haber agregado tu usuario al grupo `docker` y reinicia sesión.

2. **El servicio no está activo**

```terminal
sudo systemctl enable docker
sudo systemctl start docker
```

3. **Conflictos con instalaciones antiguas**
   → Desinstala versiones previas (`docker`, `docker.io`) antes de instalar desde el repositorio oficial.

---

Si quieres, puedo prepararte otra versión más corta tipo **guía rápida** o una específica para **Fedora, Arch o WSL** 👍
