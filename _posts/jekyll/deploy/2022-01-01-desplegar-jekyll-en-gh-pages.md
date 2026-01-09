---
title: "Jekyll: Desplegar en GitHub Pages"
description: Desplegar en GitHub Pages (sin GitHub Actions)
categories: [Jekyll, Jekyll-Deploy]
badge: jekyll
---


GitHub Pages permite publicar sitios estáticos directamente desde un repositorio. Jekyll está soportado de forma nativa, por lo que **no es necesario usar GitHub Actions** si seguimos la estructura y configuración correcta.

En este post veremos el flujo más simple y estable para dejar un sitio Jekyll en línea usando únicamente GitHub Pages.

## 1. Crear el repositorio

Crea un repositorio en GitHub. Puede ser público o privado (con cuenta Pro).

Opciones comunes:

* `usuario.github.io`: sitio principal
* `nombre-del-proyecto`: sitio de proyecto

Ejemplo:

```text
challenge-frontend
```


## 2. Estructura mínima del proyecto

Tu proyecto Jekyll debe tener, como mínimo:

```text
.
├── _config.yml
├── index.md   (o index.html)
├── _posts/    (opcional)
└── assets/    (opcional)
```

Ejemplo de `index.md`:

```md
---
layout: default
title: Inicio
---

# Hola Jekyll
Mi sitio está funcionando.
```


## 3. Configurar _config.yml

Este archivo es clave para que GitHub Pages genere el sitio correctamente.

Ejemplo básico:

```yml
title: Challenge Frontend
description: Retos prácticos de desarrollo
baseurl: "/challenge-frontend" # si NO es usuario.github.io
url: "https://tu-usuario.github.io"

markdown: kramdown
theme: minima
```
{:file='_config.yml'}

>**Importante**
>
>* Si el repo es `usuario.github.io`, deja `baseurl` vacío:
>
>  ```yml
>  baseurl: ""
>  ```
> {:.nolineno}
{: .prompt-warning }


## 4. Instalar dependencias localmente (opcional pero recomendado)

Para probar el sitio antes de subirlo:

```bash
gem install bundler jekyll
bundle init
```

Agrega al `Gemfile`:

```ruby
gem "jekyll", "~> 4.3"
gem "github-pages", group: :jekyll_plugins
```

Luego:

```bash
bundle install
bundle exec jekyll serve
```

---

## 5. Subir el proyecto a GitHub

Desde la raíz del proyecto:

```bash
git init
git add .
git commit -m "feat: initial Jekyll site"
git branch -M main
git remote add origin https://github.com/tu-usuario/challenge-frontend.git
git push -u origin main
```

---

## 6. Configurar GitHub Pages

En el repositorio:

1. Ve a **Settings → Pages**
2. En **Source** selecciona:

   * **Branch**: `main`
   * **Folder**: `/root`
3. Guarda los cambios

GitHub comenzará a construir el sitio automáticamente usando Jekyll.

---

## 7. Acceder al sitio

Después de unos segundos:

```text
https://tu-usuario.github.io/challenge-frontend/
```

Si es un repo tipo `usuario.github.io`:

```text
https://tu-usuario.github.io/
```

---

## 8. Cosas a tener en cuenta

* GitHub Pages **no ejecuta plugins personalizados** de Jekyll.
* Solo se permiten los plugins incluidos en `github-pages`.
* No necesitas generar `_site/` manualmente.
* Cada `push` a `main` vuelve a desplegar el sitio.

---

## Conclusión

Este método es ideal si:

* Quieres un flujo simple
* No necesitas compilación avanzada
* Prefieres evitar GitHub Actions

Para proyectos educativos, blogs o páginas de retos, **GitHub Pages + Jekyll nativo es más que suficiente** y muy estable.
