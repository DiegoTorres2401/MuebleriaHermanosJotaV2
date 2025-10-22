# E-commerce Muebleria Hermanos Jota

Aplicación e-commerce desarrollada con React (Frontend) y Express.js (Backend) para los Sprints 3 y 4.

## 📋 Descripción

Proyecto fullstack que implementa una tienda online con catálogo de productos, vista de detalle, carrito de compras y formulario de contacto. La aplicación consume una API REST propia desarrollada con Express.js.

## 🏗️ Arquitectura del Proyecto

```
proyecto/
├── backend/                  # API REST Express
│   ├── middlewares/
│   │   └── logger.js         # Middleware de logging
│   ├── routes/
│   │   └── productosRoutes.js # Rutas de productos
│   ├── node_modules/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── productos.js          # Datos de productos (array)
│   └── server.js             # Servidor principal
│
├── client/                   # Aplicación React (SPA)
│   ├── public/
│   │   ├── logo.svg
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── CartIcon.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
└── README.md                 # Documentación principal
```

## 🚀 Tecnologías

### Backend
- Node.js
- Express.js

### Frontend
- React
- CSS

## ⚙️ Instalación

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd client
npm install
```

## 🏃 Ejecución

### 1. Iniciar el Backend (Puerto 3000)

```bash
cd backend
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### 2. Iniciar el Frontend (Puerto 5173)

```bash
cd client
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📡 API Endpoints

### GET /api/productos
Obtiene el listado completo de productos.

**Respuesta (200):**
```json
[
    {
    id: 1,
    name: 'Mesa de Centro',
    price: 8000,
    description: 'Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.',
    image: './assets/img/Mesa de Centro Araucaria.png',
    ficha: 'Medidas: 90 × 90 × 45 cm. Materiales: Sobre de mármol Patagonia, patas de nogal. Acabado: Mármol pulido, aceite natural en madera. Peso: 42 kg. Carga máxima: 25 kg distribuidos.',
    garantia: '10 años en estructura'

  }
]
```

### GET /api/productos/:id
Obtiene un producto específico por ID.

**Parámetros:**
- `id` (number): ID del producto

**Respuesta exitosa (200):**
```json
  {
    id: 1,
    name: 'Mesa de Centro',
    price: 8000,
    description: 'Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.',
    image: './assets/img/Mesa de Centro Araucaria.png',
    ficha: 'Medidas: 90 × 90 × 45 cm. Materiales: Sobre de mármol Patagonia, patas de nogal. Acabado: Mármol pulido, aceite natural en madera. Peso: 42 kg. Carga máxima: 25 kg distribuidos.',
    garantia: '10 años en estructura'

  }
```

**Respuesta de error (404):**
```json
{
  "status": 404,
  "message": "El producto solicitado no existe"
}
```

## 🎨 Funcionalidades del Frontend

### 1. Catálogo de Productos
- ✅ Muestra estados de "Cargando..." y manejo de errores
- ✅ Renderiza lista de productos con `.map()`
- ✅ Componentes reutilizables (`<ProductCard />`)

### 2. Vista de Detalle
- ✅ Renderizado condicional (sin React Router)
- ✅ Click en producto muestra detalle completo
- ✅ Componente `<ProductDetail />` con información extendida

### 3. Carrito de Compras
- ✅ Estado global en `App.jsx`
-  Botón "Añadir al Carrito" en cada producto (en desarrollo)
- ✅ Componente `<CartIcon />` con contador
- ✅ Array de productos en el carrito

### 4. Formulario de Contacto
- ✅ Componente controlado con `useState`
- ✅ Inputs vinculados al estado
- ✅ Validación y console.log al enviar
- ✅ Mensaje de éxito en la UI

## 🛠️ Características Técnicas

### Backend
- ✅ Middleware de logging, que permite seguimiento de cada peticion
- ✅ Manejo centralizado de errores
- ✅ Validación de rutas (404)
- ✅ Rutas organizadas con `express.Router`
- ✅ Async/await con try/catch
- ✅ Soporte JSON con `express.json()`

### Frontend
- ✅ Arquitectura basada en componentes
- ✅ Props para comunicación entre componentes
- ✅ Estado local y elevación de estado
- ✅ Renderizado condicional
- ✅ Formularios controlados

## 🧪 Ejemplos de Uso

### Probar la API (Backend)

```bash
# Listar todos los productos
 http://localhost:3000/api/productos

# Obtener producto específico
 http://localhost:3000/api/productos/1
```

### Usar la Aplicación (Frontend)

1. Abre `http://localhost:5173`
2. Navega por el catálogo de productos
3. Haz click en un producto para ver detalles
4. Agrega productos al carrito
5. Completa el formulario de contacto



## 🔄 Flujo de Datos

1. **App.jsx** mantiene el estado principal (productos, carrito, producto seleccionado)
2. Los componentes hijos reciben datos vía **props**
3. Las funciones para actualizar estado se pasan como props
4. El carrito se actualiza mediante función `addToCart()`
5. La vista cambia mediante renderizado condicional

## 📚 Próximas Mejoras

- [ ] Implementar React Router para navegación
- [ ] Conectar backend a base de datos
- [ ] Agregar endpoints POST, PUT, DELETE
- [ ] Implementar autenticación de usuarios
- [ ] Persistir carrito en localStorage
- [ ] Añadir página de checkout

## 👨‍💻 Desarrollo

**Sprints 3 y 4**

- Diego Ramirez - backend
- Diego Torres - frontend

---
