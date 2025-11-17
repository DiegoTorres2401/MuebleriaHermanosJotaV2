const express = require('express');
const router = express.Router();
const { getProductos, getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/productosControllers');

router.get('/', getProductos);

router.get('/:id', getProducto);

router.post('/', postProducto);

router.put('/:id', putProducto);

router.delete('/:id', deleteProducto);

module.exports = router;
