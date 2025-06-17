import { useEffect, useState } from 'react';
import axios from 'axios';

const ITEMS_TO_SHOW = 4;

const CyclicSlider = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchRandom();
  }, []);

  const fetchRandom = async () => {
    try {
      const res = await axios.get('http://localhost:3002/api/products/random');
      setProducts(res.data);
      setStartIndex(0);
    } catch (error) {
      console.error(error);
    }
  };

  const getVisibleProducts = () => {
    if (products.length === 0) return [];
    const visible = [];
    for (let i = 0; i < ITEMS_TO_SHOW; i++) {
      visible.push(products[(startIndex + i) % products.length]);
    }
    return visible;
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="relative p-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-3">Trending Now</h2>

      <div className="relative flex items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-300 p-2 rounded hover:bg-gray-400"
          aria-label="Previous"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          ◀
        </button>

        <div className="flex space-x-4 overflow-hidden w-full px-14">
          {visibleProducts.map((p) => (
            <div
              key={p._id}
              className="flex-shrink-0 w-1/4 border p-4 rounded shadow"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-blue-600">₹{p.price}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-300 p-2 rounded hover:bg-gray-400"
          aria-label="Next"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CyclicSlider;
