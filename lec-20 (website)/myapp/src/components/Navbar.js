import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex items-center">

          {/* Logo */}
          <div className="flex items-center">
            <img src="https://ninico-nextjs.vercel.app/assets/img/logo/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Search Box */}
          <div className="w-5/12">
            <a href="#"><i class="fa-solid fa-magni fying-glass"></i></a>
            <input type="text" placeholder="Search products..." className="bg-gray-200 rounded-md px-2 pr-96 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          {/* Language Select */}
          <div className="relative ml-72">
            <select className="text-dark rounded-md px-2 py-2 border-2 focus:outline-none">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>

          {/* currency Select */}
          <div className="relative">
            <select className="text-dark rounded-md mx-10 px-2 py-2 border-2 focus:outline-none">
              <option value="U">USD</option>
              <option value="Y">YEAN</option>
              <option value="E">EURO</option>
            </select>
          </div>

          {/* icon */}
          <a className='mx-6' href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          <a className='mx-6' href="#"><i class="fa-regular fa-user"></i></a>
          <a className='mx-6' href="#"><i class="fa-regular fa-heart"></i></a>

        </div>
      </nav>
    </div>      
  )
}

export default Navbar