---
title: "Angular: Crear un gestor de snippets con Angular usando MongoDB y Node.js"
categories: [Angular, Angular_04-Proyectos]
badge: angular
---

En este ejercicio construiremos una aplicación simple para **guardar snippets de código** en la nube usando:

* <i class="fa-brands fa-angular text-danger"></i> **Angular**
* <span class="devicon--mongodb"></span> **MongoDB Atlas**
* <i class="fa-brands fa-node-js text-success"></i> **Node.js**

La aplicación permitirá:

* crear **categorías** (`html`, `css`, `javascript`)
* asignar un **nombre al snippet**
* guardar el **código en un textarea**
* almacenar todo en MongoDB Atlas

# 1. Crear el proyecto Angular

Se recomienda generar el proyecto con [Angular CLI](https://angular.dev/tools/cli){:target='_blank'}, si no lo tienes ejecuta el siguiente comando:

```terminal
npm install -g @angular/cli
```
{: .typing }

Crear el proyecto:

```terminal
ng new angular-code-snippets
cd angular-code-snippets
```
{:.typing}

Durante la creación el asistente preguntará algunas opciones:

```terminal
✔ Which stylesheet system would you like to use? → CSS
✔ Do you want to enable Server-Side Rendering (SSR)? → No
✔ Which AI tools do you want to configure with Angular best
practices? → None
```
{:.noheader}

Generar componente:

```terminal
ng generate component snippets
```
{:.typing}

# 2. Crear el backend con Express

Crear carpeta para el backend e inicializar un `package.json`:

```terminal
mkdir backend-express-code-snippets
cd backend-express-code-snippets
npm init -y
```
{:.typing}

Instalar dependencias:

```terminal
npm install express mongoose cors
```
{:.typing}

Crear archivo `server.js`:

```terminal
touch server.js
```
{:.nolineno}

# 3. Conectar con MongoDB Atlas

Crear cuenta en **MongoDB Atlas** y obtener la URI.

Ejemplo:

```
mongodb+srv://user:password@cluster.mongodb.net/snippets
```

En `server.js`:

```javascript
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://user:password@cluster0.igvcwzf.mongodb.net/?appName=Cluster0"

app.use(cors())
app.use(express.json())

// conexión a MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
  console.log("✅ Conectado a MongoDB Atlas")
})
.catch(err => {
  console.error("❌ Error conectando a MongoDB:", err)
})


// esquema
const SnippetSchema = new mongoose.Schema({
  category: String,
  title: String,
  code: String
})

const Snippet = mongoose.model("Snippet", SnippetSchema)


// ruta de prueba
app.get("/", (req,res)=>{
  res.send("API Snippets funcionando 🚀")
})


// crear snippet
app.post("/snippets", async (req,res)=>{

  try {

    const snippet = new Snippet(req.body)

    await snippet.save()

    res.status(201).json(snippet)

  } catch(error){

    res.status(500).json({
      error:"Error guardando snippet"
    })

  }

})

// listar snippets
app.get("/snippets", async (req,res)=>{

  const snippets = await Snippet.find()

  res.json(snippets)

})


// iniciar servidor
app.listen(PORT, ()=>{
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
})
```
{:file="server.js"}

Ejecutar:

```terminal
node server.js
```
{:.typing}

Abrimos el navegador en `http://localhost:3000`:

![Backend operativo](angular/backend-express-operativo.webp)


# 4. Crear formulario en Angular

En `snippets.component.html`:

```html
<form (submit)="saveSnippet()">

<input [(ngModel)]="snippet.category" name="category" placeholder="Category">

<input [(ngModel)]="snippet.title" name="title" placeholder="Snippet name">

<textarea [(ngModel)]="snippet.code" name="code"></textarea>

<button type="submit">
Guardar
</button>

</form>
```
{:file="snippets}

---

# 5. Enviar datos al backend

Instalar cliente HTTP.

```bash
ng add @angular/common
```

En `snippets.component.ts`:

```ts
import { HttpClient } from '@angular/common/http'

snippet:any={}

constructor(private http:HttpClient){}

saveSnippet(){

this.http.post(
'http://localhost:3000/snippets',
this.snippet
).subscribe()

}
```

---

# 6. Ejecutar la aplicación

Frontend:

```bash
ng serve
```

Backend:

```bash
node server.js
```

Ahora puedes abrir:

```
http://localhost:4200
```

y guardar snippets en MongoDB Atlas.

---

# 7. Build para producción

Compilar Angular:

```bash
ng build --configuration production
```

Esto generará la carpeta:

```
dist/code-snippets
```

---

# 8. Desplegar backend

Puedes desplegar el backend en servicios como:

* **Render**
* **Railway**
* **Vercel**

Sube el backend y conecta la variable:

```
MONGODB_URI
```

---

# Resultado

Con este pequeño proyecto construiste:

* un **formulario Angular**
* un **API con Express**
* una **base de datos en MongoDB Atlas**
* un **flujo completo de guardado de snippets**

Este patrón es la base para construir herramientas más grandes como:

* gestores de snippets
* plataformas tipo **gist**
* repositorios de código personal.
