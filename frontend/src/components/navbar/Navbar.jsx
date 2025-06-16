import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
const Navbar = () => {
  const { cartItems } = useCart();

  // Calculate total items in cart
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-blue-200 py-3 px-6 rounded-md flex items-center justify-between flex-wrap">
      {/* Logo */}
      <Link to="/products">
      <div className="text-xl font-bold text-blue-900">
        Lalitha's Shopping <span className="text-yellow-200 bg-red-400 px-2 py-1 rounded-md">Zone</span>
      </div>
      </Link>

      {/* Search */}
      <div className="flex justify-center w-full sm:w-auto mt-2 sm:mt-0 ">
        <Link to="/product/name/:name" className=' rounded-lg '><button className='bg-slate-500 rounded-md'>search</button></Link>
      </div>

      {/* Menu */}
      
      <Link to="/cart">
      <div><p></p><h1>Cart<span className="font-bold">{totalCount}</span> </h1></div>
      </Link>
      <div className="text-blue-900 font-semibold mt-2 sm:mt-0">
        Menu
      </div>
      
    </div>
  );
};

export default Navbar;
