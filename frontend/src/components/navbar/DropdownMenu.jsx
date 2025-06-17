import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 text-black flex space-x-6 rounded-lg relative">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none"
        >
          <FaBars className="text-2xl cursor-pointer" />
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Electronics</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Dress</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Shoes</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DropdownMenu;
