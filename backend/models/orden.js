const mongoose = require("mongoose");

const ordenSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        nombre: { type: String, required: true },
        precio: { type: Number, required: true },
        cantidad: { type: Number, required: true },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    estado: {
      type: String,
      default: "pendiente",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orden", ordenSchema);
