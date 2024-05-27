import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { useSelector } from 'react-redux'

function Navbar() {

  const data = useSelector((state) => state.cartreducer.carts)
  // console.log(data, "data");

  const deta = useSelector((state) => state.cartreducer.wishlist)
  // console.log(deta, "deta");

  const navigate = useNavigate();

  return (
    <div>
      <header className="flex px-5 space-x-10 mt-7">
        <div className="flex justify-between w-[63rem]">
          <img src="https://ninico-nextjs.vercel.app/assets/img/logo/logo.png" alt="Logo" className="h-7 mt-2" />
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center ps-6 pointer-events-none">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder="Search products..." className="block ps-12 bg-gray-100 rounded-md py-3.5 w-[47rem] focus:outline-none" />
          </div>
        </div>

        <div className='flex space-x-5'>
          <div>
            <select className="text-dark rounded-md px-8 py-3 border focus:outline-none">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div>
            <select className="text-dark rounded-md px-3 py-3 border focus:outline-none">
              <option value="U">USD</option>
              <option value="Y">YEAN</option>
              <option value="E">EURO</option>
            </select>
          </div>
        </div>

        <div className='space-x-8 mt-3'>
          <button onClick={() => navigate("/cart")} className='text-xl' href="#" >
            <BsCart3 onClick={()=>navigate("/cart")} />
            <span className='absolute top-9 right-[8.8%] text-[10px] p-1 text-white bg-red-500 rounded-full'>
              {data.length}
            </span>
          </button>

          <button to='/signin' className='text-xl' href="#">
            <FaRegUser />
          </button>

          <button className='text-xl' href="#">
            <FaRegHeart onClick={() => navigate("/wishlist")} />
            <span className='absolute top-9 right-[1.8%] text-[10px] p-1 text-white bg-red-500 rounded-full'>
              {deta.length}
            </span>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar