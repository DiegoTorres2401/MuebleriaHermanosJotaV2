const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const Product = require('../models/productos');

router.get('/', async (req, res, next) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    next(createError(500, 'Error al leer los productos desde la base de datos'));
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) return next(createError(404, 'El producto solicitado no existe'));
    res.json(producto);
  } catch (err) {
    next(createError(500, 'Error al buscar el producto'));
  }
});

router.post('/', async (req, res, next) => {
  try {
    const nuevoProducto = new Product(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    next(createError(400, 'Error al crear el producto'));
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const productoActualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!productoActualizado) return next(createError(404, 'El producto solicitado no existe'));
    res.json(productoActualizado);
  } catch (err) {
    next(createError(400, 'Error al actualizar el producto'));
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const productoEliminado = await Product.findByIdAndDelete(req.params.id);
    if (!productoEliminado) return next(createError(404, 'El producto solicitado no existe'));
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    next(createError(500, 'Error al eliminar el producto'));
  }
});

module.exports = router;
