import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.post('/category', async (req, res) => {
  const { category } = req.body;

  try {
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

export default router;
