---
title: "MongoDB: Qué son las colecciones en MongoDB"
categories: [MongoDB, "MongoDB_02-Colecciones y Documentos"]
badge: mongodb
---

En _MongoDB_, una __colección__ es un __contenedor de documentos dentro de una base de datos__. A diferencia de las tablas en bases de datos relacionales, las colecciones no requieren un esquema fijo, lo que permite almacenar documentos con estructuras distintas en un mismo conjunto.

Las colecciones:

- No exigen definir columnas previamente
- Permiten documentos con campos variables
- Se crean automáticamente al insertar el primer documento

Ejemplo conceptual:

![Ejemplo conceptual de MongoDB](mongodb/estructura-de-mongodb-colecciones-y-documentos.avif)

Ejemplo para una base de datos blog:

<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Database -->
      <div class="card shadow-sm border mb-3">
        <div class="card-body text-center">
          <span class="badge bg-dark mb-2">Database</span>
          <h5 class="mb-0">blog</h5>
        </div>
      </div>
      <!-- Connector -->
      <div class="text-center text-muted fs-4">↓</div>
      <!-- Collection -->
      <div class="card shadow-sm border-primary mb-3">
        <div class="card-body text-center">
          <span class="badge bg-primary mb-2">Collection</span>
          <h5 class="mb-0">posts</h5>
        </div>
      </div>
      <!-- Connector -->
      <div class="text-center text-muted fs-4">↓</div>
      <!-- Documents -->
      <div class="card shadow-sm border-success">
        <div class="card-body">
          <div class="text-center mb-3">
            <span class="badge bg-success">Documents</span>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">Documento 1</li>
            <li class="list-group-item text-center">Documento 2</li>
            <li class="list-group-item text-center">Documento 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


Esta flexibilidad es una de las razones principales por las que _MongoDB_ es tan usado en aplicaciones modernas.
