const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Get cart items
router.get('/', async (req, res) => {
  const cartItems = await CartItem.find();
  res.json(cartItems);
});

// Add item to cart
router.post('/', async (req, res) => {
  const { productId, name, price } = req.body;
  const cartItem = new CartItem({ productId, name, price, quantity: 1 });
  await cartItem.save();
  res.json(cartItem);
});

// Remove item from cart
router.delete('/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item removed' });
});

module.exports = router;
