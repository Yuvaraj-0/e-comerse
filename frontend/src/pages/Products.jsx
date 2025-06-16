import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useCart} from '../context/CartContext'
const Products = () => {

    const [products,setProducts] = useState([])
    const { addToCart } = useCart();

useEffect(() => {
axios.get('http://localhost:3002/api/products')
.then(res => setProducts(res.data))
.catch(err => console.error(err));

},[])



  return (
    <>
        
        <div className="container mx-auto px-4">
  <Link to="/" className="text-blue-600 underline">add</Link>
  <h1 className="text-2xl font-bold my-6">Shopping here</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-10">
    {products.map((prod, i) => (
      <div className="border p-4 rounded-md shadow hover:shadow-lg transition" key={i}>
        <img src={prod.image} alt={prod.name} className="h-48 w-full object-cover rounded-md mb-4" />
        <h3 className="font-semibold text-lg mb-1">Name: {prod.name}</h3>
        <h3 className="mb-1">Qty: {prod.quantity}</h3>
        <p className="text-red-500 font-semibold mb-3">Price: ₹{prod.price}</p>
        <button
              onClick={() => {
                console.log(prod);
                addToCart(prod)
              }}
              className="inline-block bg-orange-600 text-white px-3 gap-x-3 py-2 rounded hover:bg-orange-700 transition"
            >
               Add
            </button>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Buy
        </Link>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Products