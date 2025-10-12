// server.js
const express = require('express');
const productosRoutes = require('./routes/productosRoutes');
const { loggerMiddleware } = require('./middlewares/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para logging de peticiones
app.use(loggerMiddleware);

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/api/productos', productosRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: 'API de Productos - Muebleria Hermanoss Jota',
    endpoints: {
      productos: '/api/productos',
      productoById: '/api/productos/:id'
    }
  });
});

// Manejador de rutas no encontradas (404)
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Manejo de errores centralizado
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            status: err.status,
            message: err.message || 'Ocurrió un error en el servidor.'
        }
    })
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Endpoints disponibles:`);
  console.log(`  - GET http://localhost:${PORT}/api/productos`);
  console.log(`  - GET http://localhost:${PORT}/api/productos/:id`);
});

module.exports = app;