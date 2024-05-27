import React from 'react'
import error from '../../assets/error.png'
import Categories from '../../Home/Categories'
import Headerdrop from '../../Home/Headerdrop'
import './Error.css'

import { useNavigate } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";

function Error() {

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
            <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300'/>Error</p>
          </div>
          <h1 className='text-4xl font-bold'>Error</h1>
        </div>
      </div>
      <div className='block mx-auto space-y-8 mt-20'>
        <img src={error} alt="" className='block mx-auto object-contain'/>

        <h1 className="font-bold text-5xl">404. Page not found</h1>

        <p className="mb-10 text-gray-600">Sorry, we couldn’t find the page you where looking for. We suggestthat<br/>you return to homepage.</p>

        <button className="bg-rose-600 rounded-md text-white px-10 py-3.5 hover:text-black duration-500"><i className="mr-4  fa-solid fa-arrow-left-long"></i>Back To Home</button>
      </div>
    </div>
  )
}

export default Error