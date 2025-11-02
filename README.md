# E-commerce Muebleria Hermanos Jota

Aplicación e-commerce desarrollada con React (Frontend) y Express.js (Backend).

## 📋 Descripción

Proyecto fullstack que implementa una tienda online con catálogo de productos, vista de detalle, carrito de compras y formulario de contacto. La aplicación ahora incluye persistencia de datos en una base de datos (configurable por entorno), endpoints adicionales para gestión de productos y opciones básicas de despliegue con Docker.

## 🔁 Actualizaciones

Se incorporaron los cambios de refactorización del frontend hacia una arquitectura basada en rutas y componentes por página, además de integración con la API del backend. En concreto:

- Migración de la gestión manual de vistas a React Router para la navegación.
- Reemplazo de datos estáticos de productos por llamadas dinámicas a los endpoints del backend.
- Añadido validación de formularios usando Formik y Yup.
- Reorganización de la estructura de componentes introduciendo componentes a nivel "página" (page-level components) y separación clara entre componentes y páginas.

Estas mejoras modernizan la arquitectura de la aplicación, facilitan la escalabilidad y permiten una integración más limpia con el backend para la gestión de productos.

## 🔧 Tabla de cambios (por archivo)

A continuación se resume, archivo por archivo, los cambios realizados durante la refactorización hacia una arquitectura basada en rutas y la integración con la API.

| Archivo | Descripción |
|---|---|
| client/src/App.jsx | Reemplazado el manejo manual de vistas por Routes y definiciones de rutas. |
| client/src/main.jsx | Envuelve App en BrowserRouter para soporte de routing. |
| client/src/components/Navbar.jsx | Añadida funcionalidad de menú hamburguesa y componentes Link para la navegación. |
| client/src/components/ProductCard.jsx | Actualizado para usar Link en la navegación y consumir datos de producto desde la API. |
| client/src/components/ProductList.jsx | Refactorizado para obtener los productos desde la API en lugar de datos estáticos. |
| client/src/components/ProductDetail.jsx | Actualizado para usar el hook navigate y aceptar la estructura de producto proporcionada por la API. |
| client/src/components/ProductosDestacados.jsx | Refactorizado para obtener productos destacados desde la API. |
| client/src/components/ContactForm.jsx | Añadida validación con Formik/Yup y modal de éxito. |
| client/src/components/CrearProducto.jsx | Nuevo componente para crear productos con validación de formulario. |
| client/src/pages/*.jsx | Nuevos componentes de página que envuelven los componentes existentes para routing. |
| client/src/styles/global.css | Añadidos estilos para menú responsive, estilos de modal y mejoras de layout. |
| client/package.json | Añadidas dependencias: formik, react-router-dom, yup (y ajustes de scripts si corresponde). |
| backend/productos.js | Actualizadas rutas/paths de imágenes para coincidir con la nueva estructura del directorio public. |
| client/index.html | Actualizada la versión del CDN de Font Awesome y metadatos relacionados. |

## 🏗️ Arquitectura del Proyecto

```
proyecto/
├── backend/                  # API REST Express
│   ├── config/
│   │   └── db.js             # Conexión a base de datos (MongoDB por defecto)
│   ├── controllers/
│   │   └── productosController.js
│   ├── middlewares/
│   │   └── logger.js         # Middleware de logging
│   ├── routes/
│   │   └── productosRoutes.js # Rutas de productos (GET, POST, PUT, DELETE)
│   ├── models/
│   │   └── producto.model.js  # Modelo de producto para la DB
│   ├── node_modules/
│   ├── .env.example
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js             # Servidor principal
│
├── client/                   # Aplicación React
│   ├── public/
│   │   ├── logo.svg
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Contacto.jsx
│   │   │   ├── CraerProducto.jsx
│   │   │   ├── EliminarButton.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── pages/            # Páginas 
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── docker/                   # (Opcional) Dockerfiles / docker-compose
│   ├── Dockerfile.backend
│   ├── Dockerfile.client
│   └── docker-compose.yml
└── README.md                 # Documentación principal
```

## 🚀 Tecnologías

### Backend
- Node.js
- Express.js
- MongoDB 

### Frontend
- React (Vite)
- CSS

## ⚙️ Instalación

### Backend
```bash
cd backend
npm install
# crear archivo .env basado en .env.example (MONGO_URI, PORT, etc.)
```

### Frontend
```bash
cd client
npm install
```

## 🏃 Ejecución

### 1. Iniciar el Backend
```bash
cd backend
npm run dev        # o npm start en producción
```
Por defecto el backend usa la variable PORT (revisa .env.example). Si no está configurado, se usa 3000.

### 2. Iniciar el Frontend
```bash
cd client
npm run dev
```
La aplicación cliente corre por defecto en `http://localhost:5173`.

### 3. Con Docker (opcional)
- Construir y levantar con docker-compose:
```bash
docker-compose up --build
```
(Ver /docker/docker-compose.yml y Dockerfile.* para detalles)

## 📡 API Endpoints (resumen)

Rutas principales disponibles en el backend bajo /api/productos:

- GET /api/productos
  - Obtiene el listado completo de productos.
  - Respuesta 200: array de productos.

- GET /api/productos/:id
  - Obtiene un producto por ID.
  - 200: producto
  - 404: { status: 404, message: "El producto solicitado no existe" }

- POST /api/productos
  - Crea un nuevo producto.
  - Body (JSON): { name, price, description, image, ficha, garantia, ... }
  - 201: producto creado
  - 400: validación inválida

- PUT /api/productos/:id
  - Actualiza un producto existente.
  - 200: producto actualizado
  - 404: producto no encontrado

- DELETE /api/productos/:id
  - Elimina un producto.
  - 204: eliminado correctamente
  - 404: producto no encontrado

Nota: Algunos endpoints pueden requerir autenticación si se activó (revisa middlewares de auth en /backend/middlewares).

Ejemplo de respuesta GET /api/productos:
```json
[
  {
    "id": "648a1f2b...",
    "name": "Mesa de Centro",
    "price": 8000,
    "description": "Mesa de centro con sobre circular...",
    "image": "./assets/img/Mesa de Centro Araucaria.png",
    "ficha": "Medidas: 90 × 90 × 45 cm...",
    "garantia": "10 años en estructura"
  }
]
```

## 🎨 Funcionalidades del Frontend (actualizadas)

- Catálogo de productos con manejo de carga y errores.
- Vista de detalle de producto.
- Carrito de compras con persistencia opcional (localStorage o backend según configuración).
- Formulario de contacto controlado con validaciones.

## 🛠️ Características Técnicas (resumen)

### Backend
- Middleware de logging para peticiones.
- Manejo centralizado de errores.
- Validación y estructura de rutas con `express.Router`.
- Endpoints REST completos (GET, POST, PUT, DELETE).
- Conexión a base de datos (MONGO_URI vía .env).

### Frontend
- Arquitectura por componentes.
- Estado local y elevación de estado.
- Formulario controlado y feedback de UI.
- Persistencia del carrito (si está activado).

## 🔄 Flujo de Datos (resumen)

1. **App.jsx** mantiene estado principal (productos, carrito, producto seleccionado).
2. Componentes hijos reciben datos por props.
3. Funciones de actualización se pasan como props.
4. Carrito se actualiza con `addToCart()` y puede persistirse.
5. El backend puede almacenar productos y pedidos en la DB.

## 📚 Próximas Mejoras / Notas

- Autenticación completa de usuarios
  - Registro y login con backend que hashea contraseñas y emite JWT.
  - Persistencia segura del JWT en el frontend para mantener la sesión tras recargas.
- Experiencia de usuario y rutas protegidas
  - UI condicional (mostrar opciones según estado de sesión: Login / Mi Perfil / Logout).
  - Logout que elimina el token y actualiza el estado global.
  - Rutas privadas (ej. /perfil, /mis-pedidos) que redirigen a login si no hay sesión.
- Carrito y proceso de pedidos
  - Estado global del carrito con Context API (ítems y cantidades accesibles desde toda la app).
  - Finalizar compra solo para usuarios autenticados; creación de pedido vía POST con JWT que asocia el pedido al usuario.
  - Vaciado automático del carrito tras pedido exitoso.

## 👨‍💻 Desarrollo

**Sprints 3 y 4**
- Diego Ramirez - Backend
- Diego Torres - Frontend

**Sprint 5 y 6**
- Diego Ramirez - Frontend
- Diego Torres - Backend

---


