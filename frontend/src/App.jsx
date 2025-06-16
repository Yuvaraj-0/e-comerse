
import {  Routes, Route } from 'react-router-dom';


import './App.css'
import AddCart from './pages/AddCart'
import Products from './pages/Products'
import Navbar from './components/navbar/Navbar'
import Contact from './pages/ContactForm'
import Search from './components/navbar/Search'
import Cart from './components/header/Cart'
function App ()  {
  

  return (
    <>
    
   <Navbar />
   
    <Routes>
    
    <Route path="/" element={<AddCart />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product/name/:name" element={<Search />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
  
   
    </>
  )
}

export default App
