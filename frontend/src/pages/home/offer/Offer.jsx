import { useEffect, useState } from 'react';
import axios from 'axios';

const Offer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:3002/products/category', { category: 'Foods' })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://imgs.search.brave.com/0_4lggK36BtfmX9yHKz_Ad7dLGpWB9_0zkaFRBMmQw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjU2NzI5NDQvZmls/ZS9vcmlnaW5hbC0w/NjEwNjhkYjIyNzBk/ZGRiY2JhZjcxZTZl/MGU4OTQwNC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy"
          alt="Left Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Products */}
      <div className="md:w-1/2 w-full p-4">
        <h1 className="text-2xl font-bold mb-4">Foods Products</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p._id} className="border p-4 rounded shadow">
              <img
                src={p.image}
                className="w-full h-40 object-cover mb-2"
                alt={p.name}
              />
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-blue-600">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
