import express from 'express';
import Cart from '../models/Cart.js';
const router = express.Router();

// Add item to cart
router.post('/cart', async (req, res) => {
  try {
    const { productId, name, price, quantity, imageUrl } = req.body;

    if (!productId || !name || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if product already exists in cart
    let cartItem = await Cart.findOne({ productId });

    if (cartItem) {
      // Increment quantity
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      // Create new cart entry
      cartItem = new Cart({
        productId,
        name,
        price,
        quantity: quantity || 1,
        imageUrl,
      });
      await cartItem.save();
    }

    res.status(201).json(cartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all cart items
router.get('/cart', async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

// Update quantity of an item
router.put('/cart/:id', async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update quantity' });
  }
});

// Remove item from cart
router.delete('/cart/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
});

export default router;
