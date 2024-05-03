import React from 'react'
import './Headerdrop.css'
import Categories from './Categories'

function Headerdrop() {
  return (
    <div className='flex'>
      <Categories/>
      <div className='space-x-5'>
      <div className="dropdown mt-4">
        <button class="dropbtn">Home <a><i class="fa-solid fa-angle-down text-gray-300"></i></a></button>
        <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
          <a href="#">Wooden Home</a>
          <a href="#">Fashion Home</a>
          <a href="#">Furniture Home</a>
          <a href="#">Cosmetics Home</a>
          <a href="#">Food Grocery</a>
        </div>
      </div>
      <div className="dropdown mt-4">
        <button class="dropbtn">Shop <a><i className="fa-solid fa-angle-down text-gray-300"></i></a></button>
        <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
          <a href="#">Shop</a>
          <a href="#">Shop 2</a>
          <a href="#">Shop Details</a>
          <a href="#">Shop Details 2</a>
          <a href="#">Shop Location</a>
          <a href="#">Cart</a>
          <a href="#">Sign In</a>
          <a href="#">Checkout</a>
          <a href="#">Wishlist</a>
          <a href="#">Product Track</a>
        </div>
      </div>
      <div className="dropdown mt-4">
        <button className="dropbtn">Pages <a><i class="fa-solid fa-angle-down text-gray-300"></i></a></button>
        <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
          <a href="#">PAGE LAYOUT</a>
          <a href="#">Shop Filters V1</a>
          <a href="#">Shop Filters V2</a>
          <a href="#">Shop Sidebar</a>
          <a href="#">Shop Right Sidebar</a>
          <a href="#">Shop List View</a> 
          <a href="#">PAGE LAYOUT</a>
          <a href="#">About</a>
          <a href="#">Cart</a>
          <a href="#">Checkout</a>
          <a href="#">Sign In</a>
          <a href="#">Log In</a>
          <a href="#">PAGE TYPE</a>
          <a href="#">Product Track</a>
          <a href="#">Wishlist</a>
          <a href="#">404 / Error</a>
          <a href="#">Coming Soon</a>
        </div>
      </div>
      <div className="dropdown mt-4">
        <button class="dropbtn">Blog <a><i class="fa-solid fa-angle-down text-gray-300"></i></a></button>
        <div className="dropdown-content border-t-2 border-red-500 rounded-b-lg py-2 pl-3 absolute z-[10]">
          <a href="#">Blog</a>
          <a href="#">Blog Details</a>
        </div>
      </div>
      <div className="dropdown mt-4">
        <button className="dropbtn">Contact</button>
      </div>
      </div>
      <div className='mt-8 ml-96 flex font-bold'>
        <a className='call mr-12'><i className="fa-solid fa-phone-flip mx-2 text-rose-500"></i>908.408.501.89</a>
        <p className='find'><a><i className="fa-solid fa-location-dot mx-2 text-rose-500"></i></a>Find Store</p>
      </div>
    </div>
  )
}

export default Headerdrop