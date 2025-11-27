const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const Orden = require("../models/orden");
const auth = require("../middlewares/auth");

router.post("/", auth, async (req, res, next) => {
  try {

    console.log("REQ.USER EN POST:", req.user); // <-- para debug

    const nuevaOrden = new Orden({
      usuario: req.user.userId,
      items: req.body.items.map(item => ({
        nombre: item.name,
        precio: item.price,
        cantidad: item.cantidad,
      })),
      total: req.body.total,
    });

    const ordenGuardada = await nuevaOrden.save();
    res.status(201).json(ordenGuardada);

  } catch (err) {
    console.error("ERROR CREANDO ORDEN:", err);
    next(createError(500, "Error al crear la orden"));
  }
});

router.get("/usuario", auth, async (req, res, next) => {
  try {

    console.log("REQ.USER EN GET:", req.user); // <-- para debug

    const ordenes = await Orden.find({ usuario: req.user.userId })
      .sort({ createdAt: -1 });

    res.json(ordenes);

  } catch (err) {
    next(createError(500, "Error al obtener las órdenes"));
  }
});

module.exports = router;
