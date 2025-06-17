import React from 'react'
import { Link } from 'react-router-dom'
import AutoCar from './AutoCar'
import CategList from './Category/CategList'
import RandomProducts from './RandomProducts'
import Footer from '../../components/footer/Footer'
import Offer from './offer/Offer'
const Home = () => {
  return (
    <>
    <div className="flex flex-col space-y-6 p-4">
      
  
      <hr className="border-t border-gray-300" />
  
      <div>
        <AutoCar />
      </div>
  
      <div>
        <h1 className="text-xl font-semibold mb-2">CATEGORIES</h1>
  
        <hr className="border-t border-gray-300 mb-4" />
  
        <div>
          <CategList />
        </div>
      </div>
      <div>
      <div className="flex justify-between items-center">
  <h1 className="text-xl font-semibold mb-2">TOP RATED</h1>
  <Link to="/products" className="text-white h-7 w-10 bg-blue-700 mr-[10px] rounded-lg">
   <h1 className='ml-2 mt-1'> All</h1>
  </Link>
</div>

      <br />
        <RandomProducts />
      </div>
      <div>
        <Offer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </>
  
  )
}

export default Home