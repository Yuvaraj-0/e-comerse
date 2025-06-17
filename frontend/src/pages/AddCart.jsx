import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AddCart() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    image: '',
    category:'',
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
        image: '',
        category:'',
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
        <label for="dropdown" className="block mb-2 text-sm font-medium text-gray-700">Choose an option</label>
                <select
          id="dropdown"
          name="category"
          value={formData.category}
          onChange={handleChange}  // make sure to update formData.category on change
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>Select an option</option>
          <option value="Electronics">Electronics</option>
          <option value="Dress">Dress</option>
          <option value="Ornaments">Ornaments</option>
          <option value="Foods">Foods</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Decoratives">Decoratives</option>
          <option value="Toys">Toys</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
