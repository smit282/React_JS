import React from 'react'
import './Headerdrop.css'
import Categories from './Categories'
import { Link , useNavigate} from 'react-router-dom'

function Headerdrop() {
  const navigate = useNavigate();
  return (
    <div className='flex'>
      <Categories/>
      <div className='space-x-5'>
        <div className="dropdown mt-4">
          <Link to='/' class="dropbtn">Home <a><i class="fa-solid fa-angle-down text-gray-300"></i></a></Link>
          <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
            <a href="#">Wooden Home</a>
            <a href="#">Fashion Home</a>
            <a href="#">Furniture Home</a>
            <a href="#">Cosmetics Home</a>
            <a href="#">Food Grocery</a>
          </div>
        </div>
        <div className="dropdown mt-4">
          <button onClick={()=>navigate("/shop")} class="dropbtn">Shop <a><i className="fa-solid fa-angle-down text-gray-300"></i></a></button>
          <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
            <Link to='/shop' href="#">Shop</Link>
            <a href="#">Shop 2</a>
            <Link to='/shopdetail' href="#">Shop Details</Link>
            <a href="#">Shop Details 2</a>
            <a href="#">Shop Location</a>
            <Link to='/cart' href="#">Cart</Link>  
            <Link to='/signin' href="#">Sign In</Link>
            <a href="#">Checkout</a>
            <Link to='/wishlist' href="#">Wishlist</Link>
            <a href="#">Product Track</a>
          </div>
        </div>
        <div className="dropdown mt-4">
          <button className="dropbtn">Pages <a><i class="fa-solid fa-angle-down text-gray-300"></i></a></button>
          <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
            <div className='flex justify-evenly w-[40rem]'>
              <div>
                <a href="#" className='font-bold'>PAGE LAYOUT</a>
                <a href="#">Shop Filters V1</a>
                <a href="#">Shop Filters V2</a>
                <a href="#">Shop Sidebar</a>
                <a href="#">Shop Right Sidebar</a>
                <a href="#">Shop List View</a> 
              </div>
              <div>
                <a href="#" className='font-bold'>PAGE LAYOUT</a>
                <Link to='/about' href="#">About</Link>
                <Link to='/cart' href="#">Cart</Link>
                <a href="#">Checkout</a>
                <Link to='/signin' href="#">Sign In</Link>
                <Link to='/signin' href="#">Log In</Link>
              </div>
              <div>
                <a href="#" className='font-bold'>PAGE TYPE</a>
                <a href="#">Product Track</a>
                <Link to='/wishlist' href="#">Wishlist</Link>
                <Link to='/notfound' href="#">404 / Error</Link>
                <a href="#">Coming Soon</a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown mt-4">
          <Link to='/about' href="#" className="dropbtn">About</Link>
        </div>
        <div className="dropdown mt-4">
          <Link to='/contact' className="dropbtn">Contact</Link>
        </div>
      </div>
      <div className='mt-8 ml-96 flex font-bold'>
        <Link to='/contact' className='call mr-12'><i className="fa-solid fa-phone-flip mx-2 text-rose-500"></i>908.408.501.89</Link>
        <p className='find'><a><i className="fa-solid fa-location-dot mx-2 text-rose-500"></i></a>Find Store</p>
      </div>
    </div>
  )
}

export default Headerdrop