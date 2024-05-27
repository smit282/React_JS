import React from 'react'
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import pdet1 from '../assets/product-det-1.png'
import pdet2 from '../assets/product-det-2.png'
import pdet3 from '../assets/product-det-3.png'
import pdet4 from '../assets/product-det-4.png'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'
import '../pages/errorpage/Error.css'

import { useNavigate } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";

function Shopdetail() {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

  return (
    <div>
        <Categories/>
        <Headerdrop/>
        <div className='bg'>
            <div className='text-start mx-10 space-y-3 py-11'>
                <div className='flex space-x-2'>
                    <p onClick={backToHome} className='cursor-pointer hover:text-rose-600 duration-500'>Home</p>
                    <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300'/>Shop Details</p>
                </div>
                <h1 className='text-4xl font-bold'>Shop Details</h1>
            </div>
        </div>
        <div className='flex justify-around mt-16'>
            <div className='space-y-5'>
                <img src={product1} alt="" className='h-20 rounded-md'/>
                <img src={product2} alt="" className='h-20 rounded-md'/>
                <img src={product3} alt="" className='h-20 rounded-md'/>
            </div>
            
            <img src={product1} alt="" className='h-[32rem] rounded-md'/>
            
            <div className='text-start w-1/3'>
                <button className='bg-red-100 text-rose-600 font-semibold text-sm px-2 rounded-sm'>Dress</button><span className='ml-4'><i className="text-yellow-400 fa-solid fa-star"></i><i className="text-yellow-400 fa-solid fa-star"></i><i className="text-yellow-400 fa-solid fa-star"></i></span><span className='ml-2 text-gray-500'>10 Reviews</span>
                <h1 className='text-2xl font-bold mt-2'>Wide Cotton Tunic Dress <span className='border py-0.5 ml-3 text-rose-600 font-semibold text-sm px-2 rounded-sm'>In Stock</span></h1>
                <p className='text-xl font-bold text-gray-500'>$9.35<span className='text-rose-600 text-4xl font-bold ml-2'>$7.25</span></p>
                <p className='text-gray-500 mt-7'>Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a completely modern design and you feel comfortable to put on this hijab. Buy it at the best price.</p>
                <div className='flex justify-between w-96 mt-7'>
                    <button className='font-semibold border px-7 py-4 rounded-md'><i className="fa-solid fa-minus text-gray-300 mr-2"></i>1<i className="fa-solid fa-plus text-gray-300 ml-2"></i></button>
                    <button className='font-bold bg-rose-600 text-white px-8 py-4 rounded-md hover:bg-black duration-500'><i className="fa-solid fa-cart-shopping mr-2"></i>Add To Cart</button>
                    <i className="fa-regular fa-heart text-gray-300 border px-5 py-4 rounded-md hover:bg-rose-600 hover:text-white duration-500"></i>
                </div>
            </div>
            <div className='space-y-5 w-72'>
                <div className='flex border rounded-md px-6 py-2'>
                    <img src={pdet1} alt="" className='h-8 mt-3'/>
                    <p className='text-start ml-5 leading-7 text-sm text-gray-500'>Free Shipping apply to all orders over $100</p>
                </div>
                <div className='flex border rounded-md px-6 py-2'>
                    <img src={pdet2} alt="" className='h-8 mt-3'/>
                    <p className='text-start ml-5 leading-7 text-sm text-gray-500'>Guranteed 100% Organic from natural farmas</p>
                </div>
                <div className='flex border rounded-md px-6 py-2'>
                    <img src={pdet3} alt="" className='h-8 mt-3'/>
                    <p className='text-start ml-5 leading-7 text-sm text-gray-500'>1 Day Returns if you change your mind</p>
                </div>
                <div className='flex border rounded-md px-6 py-2'>
                    <img src={pdet4} alt="" className='h-8 mt-3'/>
                    <p className='text-start ml-5 leading-7 text-sm text-gray-500'>Covid-19 Info: We keep delivering.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopdetail