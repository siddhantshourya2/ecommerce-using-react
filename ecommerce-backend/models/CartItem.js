const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('CartItem', CartItemSchema);
