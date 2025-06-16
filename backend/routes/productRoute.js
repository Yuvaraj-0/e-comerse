import express from 'express';
import Product from '../models/productModel.js'; // Adjust this if needed

const router = express.Router();



/**
 * @route   GET /api/product/:name
 * @desc    Fetch a single product by exact name (case-insensitive)
 */
router.get('/product/name/:name', async (req, res) => {
  try {
    const name = req.params.name;
    console.log('Received search request for:', name);
    const product = await Product.findOne({ name: new RegExp(`^${name}$`, 'i') }); // exact case-insensitive
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
