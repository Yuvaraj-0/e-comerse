
import {  Routes, Route } from 'react-router-dom';


import './App.css'
import AddCart from './pages/AddCart'
import Products from './pages/Products'
import Navbar from './components/navbar/Navbar'
import Contact from './pages/ContactForm'
import Search from './components/navbar/Search'
import Cart from './components/header/Cart'
import Home from './pages/home/Home'
import CatPg from './pages/home/Category/CatPg'
function App ()  {
  

  return (
    <>
    
   <Navbar />
   
    <Routes>
    
    <Route path="/add" element={<AddCart />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product/name/:name" element={<Search />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<CatPg />} />
    </Routes>
  
   
    </>
  )
}

export default App
