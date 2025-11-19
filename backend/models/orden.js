import mongoose from "mongoose";

const ordenSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario", // Cambiar referencia cuando se tenga el model usuario
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

export default mongoose.model("Orden", ordenSchema);
