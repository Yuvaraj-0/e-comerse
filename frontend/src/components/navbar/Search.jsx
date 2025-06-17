import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!name) return;

    axios.get(`http://localhost:3002/api/product/name/${name}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error(err);
        setProduct(null);
      });
  }, [name]);

  if (!name) return <p>Please enter a product to search.</p>;

  return (
    <div className="p-4">
      {!product ? (
        <p>Loading or Product Not Found</p>
      ) : (
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
