const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Search products
router.get('/search', async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({ name: new RegExp(query, 'i') });
  res.json(products);
});

module.exports = router;
