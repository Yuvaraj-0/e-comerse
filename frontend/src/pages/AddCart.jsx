import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AddCart() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3002/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert('✅ Product submitted!');
      console.log(data);
      setFormData({
        name: '',
        quantity: '',
        price: '',
        image: ''
      });
    } catch (error) {
      alert('❌ Error submitting product');
      console.error(error);
    }
  };
 

  return (
    <div className="max-w-md mx-auto p-4">
        <Link to="/Products">back</Link>
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={formData.name} placeholder="Product Name" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="quantity" value={formData.quantity} type="number" placeholder="Quantity" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="price" value={formData.price} type="number" placeholder="Price" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="image"  value={formData.image} placeholder="Image URL" className="w-full border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
