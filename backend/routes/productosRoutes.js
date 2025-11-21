const express = require('express');
const router = express.Router();
const productosControllers = require('../controllers/productosControllers');

router.get('/', productosControllers.getProductos);
router.get('/:id', productosControllers.getProducto);
router.post('/', productosControllers.postProducto);
router.put('/:id',  productosControllers.putProducto);
router.delete('/:id', productosControllers.deleteProducto);

module.exports = router;
