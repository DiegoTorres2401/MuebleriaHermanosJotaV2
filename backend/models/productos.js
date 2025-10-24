
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  ficha: { type: String },
  garantia: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
