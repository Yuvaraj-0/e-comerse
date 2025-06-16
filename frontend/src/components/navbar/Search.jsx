import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState(name || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) return; // if no name in URL, skip fetch

    axios.get(`http://localhost:3002/api/product/name/${name}`)
  .then(res => setProduct(res.data))
  .catch(err => console.error(err));

  }, [name]);

  // When user submits form, navigate to new URL to trigger useEffect
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/name/${searchTerm.trim()}`);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search product by name"
          className="border rounded px-3 py-2 flex-grow"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {!product && name && <p>Loading or Product Not Found</p>}

      {product && (
        <div>
          <img src={product.image} alt={product.name} className="w-48 h-48 object-cover" />
          <h1>{product.name}</h1>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Search;


