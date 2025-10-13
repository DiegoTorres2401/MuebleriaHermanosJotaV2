// routes/productosRoutes.js
const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const productos = require('../productos');

// GET /api/productos - Obtener todos los productos
router.get('/', async (req, res, next) => {
  try {
    res.json(productos);
  } catch (err) {
    next(createError(500, "Error al leer los productos"));
  }
});

// GET /api/productos/:id - Obtener un producto por ID
router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) return next(createError(404, "El producto solicitado no existe"));

    res.json(producto);
  } catch (err) {
    next(createError(500, "Error al buscar el producto"));
  }
});

module.exports = router;