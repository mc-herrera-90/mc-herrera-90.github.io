---
title: "Cómo usar el ORM de Ruby on Rails"
icon: icon/rails.svg
categories: [Rails, ORM, Backend]
tags: [rails, ruby, orm, activerecord]
---


El ORM de Ruby on Rails se llama **Active Record**, y es una de las partes más poderosas del framework. Gracias a él puedes trabajar con bases de datos usando **objetos Ruby**, sin escribir SQL manual (aunque puedes hacerlo cuando lo necesites).

En este post construiremos un ejemplo simple usando el ORM, donde gestionaremos libros, autores y categorías. Veremos cómo crear el proyecto, configurar la base de datos, generar modelos, migrar tablas y realizar consultas típicas.

## ¿Qué es Active Record?

Active Record es la capa del MVC encargada de **gestionar los datos**. Cada tabla de la base de datos se representa como una **clase Ruby**, y cada fila como un **objeto**.

Ejemplo:  
La tabla `users` corresponde al modelo:

```ruby
class User < ApplicationRecord
end
````
{: .nolineno }

## Setup

Para comenzar con el setup de Rails, lo primero es preparar el entorno y crear un nuevo proyecto.

{% tabs setup-rails %}
{% tab setup-rails macOS %}
  {% include instructions/mac/ror.md.liquid project-name="bookstore" db="postgres" %}
{% endtab %}
{% tab setup-rails Linux %}
{% endtab %}
{% tab setup-rails Windows %}
  {% include instructions/windows/ror.md.liquid project-name="bookstore" %}
{% endtab %}
{% endtabs %}

Comprobamos la creación de la base de datos:

![Db y rol](macos/psql-db-and-rol.webp){:.light w="750" .rounded .border .bg-secondary-subtle}
![Db y rol](macos/psql-db-and-rol-dark.webp){:.dark w="750" .rounded .border .bg-secondary}

## Crear los modelos

En nuestro proyecto _bookstore_ crearemos tres modelos principales:
- `Book`: representa el libro.
- `Author`: representa un autor.
- `Category`: representa una categoría literaria.

```terminal
rails generate model Author name:string bio:text
rails generate model Category name:string
rails generate model Book title:string price:decimal author:references category:references
```

Rails generará:

* Los modelos dentro de `app/models/`
* Las migraciones dentro de `db/migrate/`

![Modelos](macos/bookstore-rails-models.webp)
_Modelos_

![Migraciones](macos/bookstore-rails-migrations.webp)
_Migraciones_

### Aplicar las migraciones

Usando el comando `rails db` ejecutas la migración:

```terminal
rails db:migrate
```

![Migración](macos/bookstore-rails-db-migrate-dark.webp){:.dark w="800" .rounded .border .bg-secondary}
![Migración](macos/bookstore-rails-db-migrate-light.webp){:.light w="800" .rounded .border .bg-secondary}

## Relacionando los modelos con Active Record

Rails ya conoce las relaciones gracias a `references`, pero las debemos declarar en los modelos.

### `app/models/author.rb`

```ruby
class Author < ApplicationRecord
  has_many :books
end
```

### `app/models/category.rb`

```ruby
class Category < ApplicationRecord
  has_many :books
end
```

### `app/models/book.rb`

```ruby
class Book < ApplicationRecord
  belongs_to :author
  belongs_to :category
end
```

Con esto Active Record genera métodos automáticos como:

* `author.books`
* `category.books`
* `book.author`
* `book.category`

---

## 🧪 5. Probando Active Record en la consola (Rails Console)

Podemos interactuar con nuestra base de datos desde:

```bash
rails console
```

### Crear registros

```ruby
a = Author.create(name: "Gabriel García Márquez")
c = Category.create(name: "Realismo Mágico")

Book.create(
  title: "Cien años de soledad",
  price: 19.99,
  author: a,
  category: c
)
```

### Consultar registros

```ruby
Book.first
Book.where(price: 10..30)
Author.find_by(name: "Gabriel García Márquez").books
```

### Actualizar

```ruby
book = Book.first
book.update(price: 21.99)
```

### Eliminar

```ruby
Book.last.destroy
```

---

## 🎯 6. Controladores y rutas (rápido)

Si quieres exponer libros en una API o vistas:

```bash
rails generate controller Books index show
```

En `config/routes.rb`:

```ruby
resources :books
```

En `app/controllers/books_controller.rb`:

```ruby
class BooksController < ApplicationController
  def index
    @books = Book.includes(:author, :category)
  end

  def show
    @book = Book.find(params[:id])
  end
end
```

Rails ya te da las rutas REST:

* `/books`
* `/books/:id`

---

## 🧵 7. Conclusión

Rails hace que trabajar con una base de datos en el proyecto **bookstore** sea totalmente natural gracias a Active Record. Cada modelo se convierte en una clase Ruby completamente integrada con la base de datos, y las migraciones nos permiten evolucionar la estructura sin dolores de cabeza.

En este pequeño ejemplo ya logramos:

* Crear el proyecto *bookstore*
* Configurar la base de datos
* Definir modelos y relaciones
* Migrar tablas
* Hacer consultas con Active Record
* Preparar controladores y rutas básicas

Si sigues expandiendo este proyecto puedes agregar usuarios, carritos, compras y mucho más — Rails está hecho para escalar contigo.

---

Si quieres, puedo generar:

✅ El mismo artículo pero en formato Markdown
✅ Una versión más larga o más resumida
✅ Agregar API completa con controladores y serializers
✅ Agregar autenticación (Devise)
✅ Agregar vistas con Rails Turbo / Hotwire

Solo dime qué quieres añadir.

Esto crea:

* un archivo en `app/models/user.rb`
* una tabla `users` con las columnas indicadas

## 🔹 Crear registros

```ruby
user = User.create(name: "Marco", email: "marco@example.com", age: 25)
```

o de forma más controlada:

```ruby
user = User.new(name: "Marco")
user.save
```

---

## 🔹 Consultar datos

### Obtener todos los registros

```ruby
User.all
```

### Filtrar registros

```ruby
User.where(age: 25)
```

### Buscar un registro por ID

```ruby
User.find(1)
```

### Ordenar

```ruby
User.order(age: :desc)
```

---

## 🔹 Actualizar un registro

```ruby
user = User.find(1)
user.update(age: 30)
```

---

## 🔹 Eliminar un registro

```ruby
user = User.find(1)
user.destroy
```

---

## 🔹 Consultas más avanzadas

### Seleccionar columnas específicas

```ruby
User.select(:name, :email)
```

### Condiciones con operadores

```ruby
User.where("age > ?", 18)
```

### Combinando condiciones

```ruby
User.where(age: 18..30).order(:age)
```

---

## 🔹 Asociaciones (Relaciones)

Rails facilita relaciones como:

### 1) `has_many` y `belongs_to`

```ruby
class User < ApplicationRecord
  has_many :posts
end

class Post < ApplicationRecord
  belongs_to :user
end
```

Uso:

```ruby
user = User.first
user.posts   # todos los posts del usuario
```

### 2) `has_many :through`

```ruby
class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end
```

### 3) `has_one`, `has_and_belongs_to_many`, etc.

Rails tiene patrones para cubrir todas las relaciones comunes.

---

## 🔹 Validaciones

Active Record permite validar datos antes de guardarlos:

```ruby
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
end
```

Si falla:

```ruby
user = User.new
user.save #=> false
user.errors.full_messages
```

---

## 🔹 Callbacks

Ejecutan lógica automática:

```ruby
class User < ApplicationRecord
  before_save :normalize_name

  def normalize_name
    self.name = name.capitalize
  end
end
```

---

## 🔹 ¿Cuándo usar SQL directo?

Cuando necesitas algo muy optimizado:

```ruby
User.find_by_sql("SELECT * FROM users WHERE age > 20")
```

Pero la mayoría del tiempo Active Record simplifica el trabajo.

---

## ✅ Conclusión

Active Record convierte la base de datos en **objetos Ruby fáciles de manipular**, permitiendo crear, leer, actualizar y eliminar datos sin escribir SQL.

Es uno de los mayores beneficios de Rails: **velocidad, organización y productividad**.

Si quieres, puedo hacer un post complementario sobre:

✔ migraciones
✔ asociaciones avanzadas
✔ scopes
✔ optimización N+1
✔ callbacks y validaciones avanzadas

Solo dímelo.
