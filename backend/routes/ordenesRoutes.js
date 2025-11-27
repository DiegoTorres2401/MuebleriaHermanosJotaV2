const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const Orden = require("../models/orden");
const auth = require("../middlewares/auth");

router.post("/", auth, async (req, res, next) => {
  try {
    const nuevaOrden = new Orden({
      usuario: req.usuario,
      items: req.body.items,
      total: req.body.total,
    });

    const ordenGuardada = await nuevaOrden.save();
    res.status(201).json(ordenGuardada);

  } catch (err) {
    next(createError(500, "Error al crear la orden"));
  }
});

router.get("/usuario", auth, async (req, res, next) => {
  try {
    const ordenes = await Orden.find({ usuario: req.usuario }).sort({
      createdAt: -1,
    });

    res.json(ordenes);

  } catch (err) {
    next(createError(500, "Error al obtener las órdenes"));
  }
});

module.exports = router;
