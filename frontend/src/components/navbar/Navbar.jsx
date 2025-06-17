import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import DropdownMenu from './DropdownMenu';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/name/${searchTerm.trim()}`);
      setSearchTerm(''); // optionally clear input
    }
  };

  // Calculate total items in cart
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-blue-200 py-3 px-6 rounded-md flex items-center justify-between flex-wrap">
      {/* Logo */}
      <Link to="/">
      <div className="text-xl font-bold text-blue-900">
        Lalitha's Shopping <span className="text-yellow-200 bg-red-400 px-2 py-1 rounded-md">Zone</span>
      </div>
      </Link>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="🔍 Search product"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-3 py-1 rounded-l border-none outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r"
        >
          Search
        </button>
      </form>

      {/* Menu */}
      
      <Link to="/cart">
      <div><p></p><h1><span className="font-bold">{totalCount}</span><FaShoppingCart className="text-black text-xl" />
       </h1></div>
      </Link>
      <div className="text-blue-900 font-semibold mt-2 sm:mt-0">
        <DropdownMenu />
      </div>
      
    </div>
  );
};

export default Navbar;
