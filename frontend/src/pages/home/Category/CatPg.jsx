import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CatPg = () => {
    const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3002/products/category', { category })
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [category]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category} Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p._id} className="border p-4 rounded shadow">
            <img src={p.image} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-blue-600">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatPg