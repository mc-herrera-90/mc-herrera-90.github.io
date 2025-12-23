---
title: "Routing en React (React Router)"
categories: [React, React Router]
image:
  path: poster/react-router-v6.webp
  lqip: data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJYwCsACFbUpV58MRpMLAAAP4lfJkjXyl4LQ8YyzrBjCIZ7r73mq00YUSCNgkdkWPDhFTbDELgw8dle9SFgAAA
tags: [desarrollo web, react]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
estructura_paginas:
  - name: "src/pages/About.jsx"
    language: "jsx"
    content_file: |
      export default function About() {
        return (
          <>
            {/* El contenido de esta página se definirá más adelante */}
          </>
        );
      }

  - name: "src/pages/Home.jsx"
    language: "jsx"
    content_file: |
      export default function Home() {
        return (
          <>
            {/* El contenido de esta página se definirá más adelante */}
          </>
        );
      }

  - name: "src/pages/NotFound.jsx"
    language: "jsx"
    content_file: |
      export default function NotFound() {
        return (
          <>
            {/* El contenido de esta página se definirá más adelante */}
          </>
        );
      }
  - name: "src/App.jsx"
    language: "jsx"
    content_file: |
      export default function App() {
        return (
          <>
            {/* Aquí se definirán las rutas de la aplicación y se importarán los componentes correspondientes */}
          </>
        );
      }

main_rr:
  - name: "src/main.jsx"
    language: "jsx"
    content_file: |
      import { StricMode } from 'react'
      import { createRoot } from 'react-dom/client'
      import { BrowserRouter } from 'react-router-dom' // Importamos el enrutador
      import App from './App';

      createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          {/* 👇 Envolvemos la app con el enrutador */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      );
---

[React Router](https://reactrouter.com/){:target='_blank'} es la librería estándar para gestionar el enrutamiento en aplicaciones de React. Facilita la navegación entre diferentes vistas, actualiza la URL del navegador y mantiene la interfaz de usuario sincronizada con la ruta actual.

Con React Router, puedes crear una aplicación de página única SPA (_Single Page Application_) con múltiples páginas que se renderizan dinámicamente sin necesidad de recargar la página completa. Permite gestionar la navegación, gestionar rutas anidadas, pasar parámetros y gestionar el historial del navegador.

## ¿Cómo funciona React Router?

Cuando el usuario hace clic en un enlace o escribe directamente la URL en la barra de direcciones del navegador, React Router actualiza la interfaz sin recargar toda la página, esto se logra manipulando el historial de navegación y utilizando componentes para cambiar el contenido dinámicamente, todo del lado del cliente.

__Veamos la siguiente ilustración__:

![Web root](react/rr-web-root.webp)

![Web about](react/rr-web-about.webp)

Como puedes observar, la interfaz se actualiza pero no se vuelve a dibujar toda la página. Supongamos que tenemos el proyecto con la siguiente estructura de rutas configuradas:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```
{: .nolineno .fit-content }

Cuando el usuario va a `http://miweb.com/about`, React Router hace lo siguiente:

1. __Lee la URL__ → `/about`
2. __Busca coincidencia__ → encuentra `path="/about"`
3. __Renderiza__ el componente → `<About />`

## Set-up para - React Router

Doy por hecho qie ya cuentas con las siguientes herramientas instaladas en tu sistema:

- [Node.js](https://nodejs.org/en/){:target='_blank'} Necesitarás __Node.js 14.18.0__ o superior para este tutorial. __Vite__ que es la herramienta que usaremos para configurar el proyecto requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} si prefieres usarlo como gestor de paquetes): Herramienta para instalar y gestionar dependencias.

__Recomendado:__

- [Git](https://git-scm.com/){:target='_blank'}: Para manejar el control de versiones y poder subirlo a Github o para clonar el repositorio de ejemplo.

### 1. Generar un nuevo proyecto

Para generar un nuevo proyecto de React utilizando [Vite](https://vite.dev/){:target='_blank'}, ejecuta el siguiente comando:

```terminal
npm create vite@latest react-router-demo -- --template react
```

> Cambia el `<react-router-demo>` por el nombre de tu preferencia.
{: .prompt-info .fit-content }

Una vez generado el proyecto, navegamos a la carpeta y ejecutamos el comando para instalar las dependencias:

```terminal
cd reat-router-demo
npm install
```

### 2. Instalar React Router

React Router está disponible como un paquete independiente:

```terminal
npm install react-router-dom
```

> Si usas TypeScript:
> `npm install --save-dev @types/react-router-dom`
{: .prompt-info .fit-content }

## Estructura del proyecto

Para comenzar, definiremos la estructura de componentes que utilizaremos dentro de la carpeta `src`. En este caso, se trata de los componentes principales que serán renderizados por **React Router**, es decir, las distintas vistas de nuestra aplicación.

{% include file-viewer.html files=page.estructura_paginas %}

Esta organización nos permite separar claramente cada página de la aplicación. Por ahora, estas serán las páginas principales. Más adelante iremos ampliándolas y desarrollándolas con mayor detalle.
{: .prompt-info }


## Componentes de React Router

React Router se puede dividir en 3 categorías principales:

1. __Enrutadores__ (Routers)
2. __Comparadores de ruta__ (Route Matchers)
3. __Navegadores__ (Navigators)

### Enrutadores

Son los encargados de gestionar la navegación de la aplicación. Sirven como contenedores principales que determinan el cómo y el cuándo se muestran diferentes rutas:

- `<BrowserRouter>` o `createBrowserRouter`: Usa rutas URL normales (`*.com/dashboard`), se requiere que el servidor esté configurado correctamente. Utiliza la API del historial del navegador para mantener la interfaz del usuario sincronizada con la URL.

- `<HashRouter>` o `createHashRouter`: Almacena la ubicación en la parte de la URL con un hash `#` (`*.com/#/dashboard`), de esta forma no se necesita ninguna configuración especial del lado del servidor (no es recomendable utilizar la URL en formato hash).

### Comparadores de ruta

- `<Routes>`: Este componente se va a encargar de buscar a través de sus hijos `<Route>` la URL que sea igual o parecida para mostrar su contenido, en caso de que encuentre una coincidencia ignorará el resto de `<Route>`; en caso de que no encuentre nada devolverá `null`.

- `<Route>`: Define una ruta específica y el componente que se debe de renderizar cuando esa ruta coincide con la URL actual.

- `<Outlet>`: Componente donde se renderizan los componentes de rutas definidas como hijos en la configuración del enrutador.

> __Recomendación__ poner primero las rutas más específicas a las menos específicas, ya que se corre el riesgo que haga mal el enrutamiento.
{: .prompt-info }

### Navegadores

- `<Link>`: Componente para crear enlaces dentro de la aplicación. Reemplaza a las etiquetas `<a>` de HTML para evitar recargar la página.
- `<NavLink>`: Es un componente especial, que nos sirve para poder cambiar el estilo del enlace (siempre y cuando coincida).
- `<Navigate>` o `useNavigate`: Cuando se quiere forzar la navegación a una URL específica.

Ya teniendo un resumen de los conceptos básicos, podemos seguir avanzando.

## Configurar enrutamiento

El __enrutador__ es un componente de nivel superior que permite que todos los demás componentes de navegación y hooks de React Router funcionen correctamente. Ya sabemos que existen distintos tipos de enrutadores, como `<BrowserRouter>`, `<HashRouter>`, `<StaticRouter>` y `<MemoryRouter>`. Para aplicaciones web del tipo SPA (_Single Page Application_), el más utilizado es `<BrowserRouter>`.

Una aplicación debe estar envuelta por un enrutador como `<BrowserRouter>`, que a su vez contiene uno o más bloques `<Routes>`. El componente `<Routes>` evalúa todos sus hijos `<Route>`.

Como el enrutador será el encargado de proveer el contexto de rutas, debemos utilizarlo en el punto más alto de la aplicación. Abre el archivo `main.jsx` y envuelve la aplicación con el enrutador:

{% assign conf_react_router = page.estructura_paginas | concat: page.main_rr %}

{% include file-viewer.html files=conf_react_router name="w_main" %}


Al envolver `<App />` dentro de `<BrowserRouter>`, le damos acceso a todas las funcionalidades de React Router. Esto permite que dentro de cualquier parte de tu componente `<App />` o sus hijos puedas:

- Usar `<Routes>` y `<Route>`.
- Usar `<Link>` para nevagación sin recargar la página.
- Usar los hooks de navegación y parámetros.

## Crear rutas

A partir de React Router v6, las rutas se pueden defenir de forma más declarativa con `<Routes>` y `<Route>`. A continuación, tienes el componente `App.jsx` y en las otras tabs el contenido de las páginas (componentes a renderizar) que importamos en `App.jsx`:


{% include file-viewer.html files=site.data.codes.react.react-router-1 name="rr1" %}

> React Router usa el wildcard `*` para definir rutas no encontradas.
{: .prompt-info .fit-content }

__En la siguiente demostración, se observa el resultado__:

{% include embed/video.html src="react/react-router-demo1.webm" %}

## Agregar componentes reutilizable

Como observamos en el ejemplo anterior, si querías ver una página diferente, tenías que escribir la ruta directamente en la barra de direcciones del navegador (por ejemplo: `/about`). Esto __no es práctico para el usuario final__.

### Agregar barra de navegación

Para solucionar esto, vamos a __crear una barra de navegación__ utilizando el componente `<Link>` de `react-router-dom`. Así, podremos cambiar de página de forma dinámica y sin recargar el navegador.

Dentro de la carpeta `src/components/` (debes crearla si no la tienes), crea un archivo `Navbar.jsx` para agregar lo siguiente:

{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>
        Inicio
      </Link>
      <Link to="/about" style={{ color: '#fff' }}>
        Acerca de
      </Link>
    </nav>
  );
}
```
{: file="components/Navbar.jsx" }
{% endraw %}

> __Recordar__ siempre usar el componente `<Link>` en lugar de `<a href="...">`, lo cual permite que React Router controle el cambio de rutas __sin recargar la página__.
{: .prompt-info }

Ahora para integrar la barra de navegación en la aplicación se debe usar __antes de donde definimos las rutas__. Entonces, editamos `App.jsx` para añadir el componente __Navbar__:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' // Importamos el componente
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> {/* 👈 aquí lo usamos */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
```
{: file="App.jsx"}

### Agregar pie de página

De la misma forma que vimos anteriormente, dentro de la carpeta `src/components`, crea un nuevo componente `Footer.jsx`:

```jsx
export default function Footer() {
  const styles = {
    footer: {
      marginTop: '2rem',
      padding: '1rem',
      background: '#20232a',
      textAlign: 'center',
    },
    text: {
      color: '#fff',
      fontSize: '0.9rem',
    },
  }
  
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  )
}
```
{:file="components/Footer.jsx"}

Ahora vamos a usar el componente justo después de las rutas para que se muestre en todas las páginas:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // Importamos el componente
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* 👈 aquí lo usamos */}
    </>
  );
}
```
{: file="App.jsx"}

__A continuación, tenemos el resultado__:

{% include embed/video.html src="react/react-router-demo2.webm" %}

Pasa por el siguiente repostorio para revisar la rama con el código trabajado hasta ahora:

{% include github-repo.html owner="mc-herrera-90" repo="react-router-demo/tree/1-uso-de-enrutador-y-rutas" %}

## Navegación Programática

En las aplicaciones SPA, a veces no solo queremos navegar a otra página a través de un enlace `<Link>`, sino que queremos hacerlo de manera programada, es decir, desde una función de JavaScript.

Esto resulta útil, por ejemplo:

- Cuando un formulario se envía correctamente y queremos redirigir al usuario.
- Cuando después de iniciar sesión llevamos al usuario a su panel.
- Cuando ocurre un error y redirigimos a una página de error personalizada.

Aquí React Router nos ofrece el hook `useNavigate` que nos devuelve una función que podemos usar para cambiar de ruta programáticamente, por ejemplo:

```jsx
const navigate = useNavigate();
navigate('/ruta-a-la-que-quieres-ir');
```
{: .nolineno }

### Agregar la sección de Contacto

Vamos a trabajar en una nueva página en `pages/Contact.jsx` y creamos un formulario de contacto que al enviarse correctamente redirige a una página de agradecimiento:

{% raw %}
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular validación simple (que no haya campos vacíos)
    if (form.nombre && form.email && form.mensaje) {
      console.log('Formulario enviado:', form);

      // Redirigir al usuario a la página de agradecimiento
      navigate('/thanks');
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <section>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBotton: '1rem' }}>
          <label>Nombre:</label><br/>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBotton: '1rem' }}>
          <label>Email:</label><br/>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBotton: '1rem' }}>
          <label>Mensaje:</label><br/>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
```
{: file="pages/Contact.jsx"}
{% endraw %}

Y ahora nos falta crear esa página que se renderizará cuando la URL cambie a `/thanks`. Usaremos un componente funcional de React en `pages/Thanks.jsx` con el siguiente contenido para mostrar al usuario:

{% raw %}
```jsx
export default function Thanks() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>¡Gracias por contactarnos!</h2>
      <p>Tu mensaje ha sido enviado exitosamente. Te responderemos pronto.</p>
    </div>
  );
};
```
{: file="pages/Thanks.jsx"}
{% endraw %}

Por último, añadimos estas nuevas rutas dentro del componente `<Routes>` en `App.jsx` y en la barra de navegación añadimos este nuevo enlace:

{% tabs demo-rr-contact %}
{% tab demo-rr-contact App %}
```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact' // Importamos la página
import Thanks from './pages/Thanks' // Importamos la página
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  {/* 👈 aquí agregamos la ruta */}
        <Route path="/thanks" element={<Thanks />} />  {/* 👈 aquí agregamos la otra ruta */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
```
{:file="App.jsx"}
{% endtab %}
{% tab demo-rr-contact Navegación %}
{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav style={{ padding: '1rem', background: '#282c34' }}>
			<Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>
					Inicio
			</Link>
			<Link to="/about" style={{ color: '#fff' }}>
					Acerca de
			</Link>
			<Link to="/contact" style={{ color: '#fff' }}> {/* 👈 aquí agregamos el nuevo link */}
					Contacto
			</Link>
		</nav>
  )
}
```
{:file="components/Navbar.jsx" }
{% endraw %}
{% endtab %}
{% endtabs %}


__El resultado, lo puedes ver a continuación__:

{% include embed/video.html src="react/react-router-demo3.webm" %}

## Rutas dinámicas

Además de definir rutas estáticas como `/`, `/about` o `/contact`, React Router nos permite trabajar con rutas dinámicas.

Estas rutas nos permiten reutilizar una misma plantilla de una página para mostrar distintos contenidos según el valor del parámetro recibido. Para acceder a estos parámetros desde el componente, React Router nos ofrece el hook `useParams`.

Este es un hook que devuelve un __objeto__ de pares clave/valor con los parámetros dinámicos de la URL actual que coincidieron con `<Route path>`. las rutas secundarias heredan todos los parámetros de las rutas principales.

### Agregar la sección de Servicios

Siguiendo con nuestra aplicación, vamos a crear:
- Una nueva página en `pages/Services.jsx`
- Una segunda página en `pages/ServiceDetail.jsx` y se encargará de mostrar el detalle de cada servicio, capturando el parámetro proporcionado en la URL.

Primero, agreguemos estas nuevas rutas dentro de `<Routes>` para de una vez estén disponible:

{% tabs demo-useparams %}
{% tab demo-useparams Rutas nuevas %}
```jsx
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'

(
  <Routes>
    <Route path="/services" element={<Services>}>
    <Route path="/services/:name" element={<ServiceDetail/>}>
  </Routes>
)
```
{: .nolineno .fit-content }
{% endtab %}
{% tab demo-useparams App.jsx %}
```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Thanks from './pages/ServiceDetail'
import Services from './pages/Services' // Importamos la página
import ServiceDetail from './pages/ServiceDetail' // Importamos la página
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/services" element={<Contact />} />  {/* 👈 aquí agregamos la ruta */}
        <Route path="/services/:name" element={<Thanks />} />  {/* 👈 aquí agregamos la otra dinámica */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
```
{:file="App.jsx"}
{% endtab %}
{% endtabs %}

En la página `Services.jsx`, vamos a mostrar los siguientes servicios de ejemplos:

{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Services() {

  const servicios = [
    { nombre: 'diseño web', emoji: '🎨', descripcion: 'Diseño moderno y responsivo para tu sitio.' },
    { nombre: 'ecommerce', emoji: '🛒', descripcion: 'Tiendas online eficientes y seguras.' },
    { nombre: 'seo', emoji: '🚀', descripcion: 'Optimización para motores de búsqueda.' }
  ]

  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem'}}>Nuestros Servicios</h2>
      <div style={{ marginTop: '1rem'}}>
        {servicios.map(servicio => (
          <div key={servicio.nombre} style={{ display: 'inline-block', margin: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>{servicio.emoji}</div>
            <h3>{servicio.nombre.toUpperCase()}</h3>
            <Link to={`/services/${servicio.nombre}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </section> 
  )
}
```
{: file="pages/Services.jsx" }
{% endraw %}

Para mostrar el detalle y cargar más información. En lugar de tener los datos de los servicios directamente en el componente, los almacenaremos en un archivo externo en `data/servicios.json` y que luego cargaremos desde nuestro componente. Para revisar el contenido del json debes cambiar a la pestaña izquierda:

{% tabs demo-use-params2 %}
{% tab demo-use-params2 ServiceDetail %}
{% raw %}
```jsx
import { useParams } from 'react-router-dom'
import servicios from '../data/servicios.json'

export default function ServiceDetail () {
  const { name } = useParams();
  const servicio = servicios[name];

  if (!servicio) return <p>Servicio no encontrado.</p>

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>{servicio.titulo}</h2>
      <p>{servicio.descripcion}</p>
      <h3>Beneficios: </h3>
      <ul>
        {servicios.beneficios.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```
{: file="pages/ServiceDetail.jsx"}
{% endraw %}
{% endtab %}
{% tab demo-use-params2 json %}
```json
{
  "diseno-web": {
    "titulo": "🎨 Diseño Web",
    "descripcion": "Creamos sitios web modernos, responsivos y visualmente atractivos para tu marca o negocio.",
    "beneficios": [
      "Diseño adaptable a móviles y tablets",
      "Optimización para velocidad de carga",
      "Fácil mantenimiento y escalabilidad"
    ]
  },
  "ecommerce": {
    "titulo": "🛒 E-commerce",
    "descripcion": "Desarrollamos plataformas de comercio electrónico seguras y rápidas para impulsar tus ventas.",
    "beneficios": [
      "Integración con pasarelas de pago",
      "Panel de administración personalizado",
      "Soporte para múltiples productos y categorías"
    ]
  },
  "seo": {
    "titulo": "🚀 SEO",
    "descripcion": "Mejoramos tu visibilidad en motores de búsqueda para que más clientes te encuentren.",
    "beneficios": [
      "Auditoría técnica SEO",
      "Optimización de contenido",
      "Estrategias de posicionamiento orgánico"
    ]
  }
}
```
{: file="data/servicios.json"}
{% endtab %}
{% endtabs %}

__Observa la siguiente la demostración__:

{% include embed/video.html src="react/react-router-demo4.webm" %}

## Filtros dinámicos

En secciones anteriores, ya vimos cómo usar algunos hooks como `useNavigate`, que permite redirigir al usuario de forma programática, y `useParams` para acceder a parámetros de la URL y mostrar el detalle de un servicio.

Ahora, vamos axplorar otro hook importante: `useSearchParams`, que nos permite __leer y modificar los parámetros de búsqueda__ (_query string_) en la URL, como `?=tiposeo`

Esto es muy útil cuando queremos __filtrar contenido__ en una misma página, sin necesidad de rutas adicionales. En nuestro caso, lo aplicaremos para filtrar los sevicios disponibles por tipo.

### Agregar nuevos servicios

Vamos a modificar el conjunto de servicios en `pages/Services.jsx` y dejarlo de la siguiente forma:

{% tabs demo-rr-new-services %}
{% tab demo-rr-new-services Servicios %}
```jsx
const servicios = [
  { nombre: 'diseño web', emoji: '🎨', tipo: 'web', descripcion: 'Diseño moderno y responsivo para tu sitio.' },
  { nombre: 'ecommerce', emoji: '🛒', tipo: 'ecommerce', descripcion: 'Tiendas online eficientes y seguras.' },
  { nombre: 'seo', emoji: '🚀', tipo: 'seo', descripcion: 'Optimización para motores de búsqueda.' },

  { nombre: 'landing page', emoji: '📄', tipo: 'web', descripcion: 'Páginas de aterrizaje que convierten.' },
  { nombre: 'carrito avanzado', emoji: '🧾', tipo: 'ecommerce', descripcion: 'Funcionalidades personalizadas para tu tienda.' },
  { nombre: 'auditoría SEO', emoji: '🔍', tipo: 'seo', descripcion: 'Diagnóstico completo de tu posicionamiento.' },
  { nombre: 'branding', emoji: '💼', tipo: 'web', descripcion: 'Construye una imagen profesional para tu marca.' },
  { nombre: 'pasarela de pago', emoji: '💳', tipo: 'ecommerce', descripcion: 'Integración con medios de pago populares.' }
];
```
{: .nolineno }
{% endtab %}
{% tab demo-rr-new-services Pages/Services.jsx %}
{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Services() {

  const servicios = [
    { nombre: 'diseño web', emoji: '🎨', tipo: 'web', descripcion: 'Diseño moderno y responsivo para tu sitio.' },
    { nombre: 'ecommerce', emoji: '🛒', tipo: 'ecommerce', descripcion: 'Tiendas online eficientes y seguras.' },
    { nombre: 'seo', emoji: '🚀', tipo: 'seo', descripcion: 'Optimización para motores de búsqueda.' },

    { nombre: 'landing page', emoji: '📄', tipo: 'web', descripcion: 'Páginas de aterrizaje que convierten.' },
    { nombre: 'carrito avanzado', emoji: '🧾', tipo: 'ecommerce', descripcion: 'Funcionalidades personalizadas para tu tienda.' },
    { nombre: 'auditoría SEO', emoji: '🔍', tipo: 'seo', descripcion: 'Diagnóstico completo de tu posicionamiento.' },
    { nombre: 'branding', emoji: '💼', tipo: 'web', descripcion: 'Construye una imagen profesional para tu marca.' },
    { nombre: 'pasarela de pago', emoji: '💳', tipo: 'ecommerce', descripcion: 'Integración con medios de pago populares.' }
  ];

  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem'}}>Nuestros Servicios</h2>
      <div style={{ marginTop: '1rem'}}>
        {servicios.map(servicio => (
          <div key={servicio.nombre} style={{ display: 'inline-block', margin: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>{servicio.emoji}</div>
            <h3>{servicio.nombre.toUpperCase()}</h3>
            <Link to={`/services/${servicio.nombre}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </section> 
  )
}
```
{: file="pages/Services.jsx" }
{% endraw %}
{% endtab %}
{% endtabs %}

### Implementación del filtro

A continuación, implementaremos la funcionalidad de filtro por __tipo de servicio__ (web, ecommerce, seo, etc.), aprovechando los datos que ya tenemos. Cada vez que el usuario haga clic en uno de estos botones, actualizaremos el parámetro `tipo` en la URL usando el hook `useSearchParams`, y luego mostraremos solamente los servicios que correspondan a ese tipo. El flujo sería mas menos como lo siguiente:

![react](react/react-router-services-filter.webp)

También añadiremos un botón de "Todos" para limpiar el filtro y volver a ver todos los servicios disponibles. El componente quedaría de la siguiente manera:

{% raw %}
```jsx
import { useSearchParams, Link } from 'react-router-dom';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filtro = searchParams.get("tipo")

  const servicios = [
    { nombre: 'diseño web', emoji: '🎨', tipo: 'web', descripcion: 'Diseño moderno y responsivo para tu sitio.' },
    { nombre: 'ecommerce', emoji: '🛒', tipo: 'ecommerce', descripcion: 'Tiendas online eficientes y seguras.' },
    { nombre: 'seo', emoji: '🚀', tipo: 'seo', descripcion: 'Optimización para motores de búsqueda.' },

    { nombre: 'landing page', emoji: '📄', tipo: 'web', descripcion: 'Páginas de aterrizaje que convierten.' },
    { nombre: 'carrito avanzado', emoji: '🧾', tipo: 'ecommerce', descripcion: 'Funcionalidades personalizadas para tu tienda.' },
    { nombre: 'auditoría SEO', emoji: '🔍', tipo: 'seo', descripcion: 'Diagnóstico completo de tu posicionamiento.' },
    { nombre: 'branding', emoji: '💼', tipo: 'web', descripcion: 'Construye una imagen profesional para tu marca.' },
    { nombre: 'pasarela de pago', emoji: '💳', tipo: 'ecommerce', descripcion: 'Integración con medios de pago populares.' }
  ];

  // Si hay filtro, aplicalo
  const serviciosFiltrados = filtro
    ? servicios.filter(s => s.tipo === filtro)
    : servicios
 
  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem' }}>Nuestros Servicios</h2>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setSearchParams({ tipo: 'web' })}>Web</button>{' '}
        <button onClick={() => setSearchParams({ tipo: 'ecommerce' })}>Ecommerce</button>{' '}
        <button onClick={() => setSearchParams({ tipo: 'seo' })}>SEO</button>{' '}
        <button onClick={() => setSearchParams({})}>Todos</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {serviciosFiltrados.map(servicio => (
          <div key={servicio.nombre} style={{ display: 'inline-block', margin: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>{servicio.emoji}</div>
            <h3>{servicio.nombre.toUpperCase()}</h3>
            <Link to={`/services/${servicio.nombre}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
```
{:file="pages/Services.jsx"}
{% endraw %}

__Observa la siguiente demostración__:

{% include embed/video.html src='react/react-router-demo5.webm' %}

Por último, revisa en el repositorio, en la rama "2-uso-de-hooks", lo que hemos hecho hasta ahora.

{% include github-repo.html owner="mc-herrera-90" repo="react-router-demo/tree/2-uso-de-hooks" %}

{% include circle-line.html %}

En esta guía práctica vimos cómo React Router nos permite crear experiencias dinámicas y fluidas en nuestras aplicaciones. Usamos sus componentes principales para definir rutas, crear enlaces de navegación y mostrar contenido dinámico en una aplicación de React. Además, exploramos hooks esenciales como `useNavigate` para redirigir programáticamente, `useParams` para mostrar contenido según la URL, y `useSearchParams` para implementar filtros manteniendo el estado en la barra del navegador.

Con solo unos pocos hooks, ya podemos construir interfaces más inteligentes, reutilizables y fáciles de navegar.

Esto es solo el comienzo. React Router tiene mucho más por explorar… pero ahora ya tienes una base para seguir creando.
