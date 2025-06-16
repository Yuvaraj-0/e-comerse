import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:3002/api/cart');
      setCartItems(res.data);
      console.log("received items",res.data)
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Update quantity
  const updateQuantity = async (itemId, newQty) => {
    try {
      await axios.put(`http://localhost:3002/api/cart/${itemId}`, { quantity: newQty });
      fetchCart();
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  // Remove item
  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3002/api/cart/${itemId}`);
      fetchCart();
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center border p-4 rounded-md justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right font-bold text-xl">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
