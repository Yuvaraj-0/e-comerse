import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart in DB + local state
  const addToCart = async (product) => {
    try {
      const res = await axios.post('http://localhost:3002/api/cart', {
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        imageUrl: product.image,
      });
  
      console.log('Added to MongoDB Cart:', res.data);
  
      setCartItems((prevItems) => {
        const exists = prevItems.find(item => item._id === product._id);
        if (exists) {
          return prevItems.map(item =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };
  
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy usage
export const useCart = () => useContext(CartContext);
