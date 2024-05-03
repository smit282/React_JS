import React from 'react'
import img32 from './assets/instagram-01.jpg'
import img33 from './assets/instagram-02.jpg'
import img34 from './assets/instagram-03.jpg'
import img35 from './assets/instagram-04.jpg'
import img36 from './assets/instagram-05.jpg'
import img37 from './assets/instagram-06.jpg'

function Homesec2() {
    return (
        <div className='px-10'>
            <div className='flex justify-center items-center bg-gray-100 p-10 mt-28'>
                <div className='px-16'> 
                    <img src={img32} alt="" />
                </div>
                <div className='text-start w-[55%]'>
                    <p className='text-xl font-semibold text-red-500'>$49.00<span className='text-gray-500 line-through'>$59.00</span></p>
                    <h1 className='text-5xl font-bold'>Pro2 Abstract Folded Pots</h1>
                    <p className='text-lg mt-3 text-gray-500 font-normal'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
                    <hr className='h-1.5 w-[70%] mt-7 rounded-full bg-red-600'/>
                    <div className='flex mt-8 space-x-3 items-center'>
                        <button className='py-3 w-20 text-4xl font-bold bg-white'>-135<p className='font-normal text-gray-500 text-lg'>Days</p></button>
                        <button className='py-3 w-20 text-4xl font-bold bg-white'>-22<p className='font-normal text-gray-500 text-lg'>Hour</p></button>
                        <button className='py-3 w-20 text-4xl font-bold bg-white'>-56<p className='font-normal text-gray-500 text-lg'>Minute</p></button>
                        <button className='py-3 w-20 text-4xl font-bold bg-white'>-46<p className='font-normal text-gray-500 text-lg'>Days</p></button>
                        <span className='text-gray-500'>Remains until the <br/> end of the offer</span>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <p className='text-red-500 text-xl font-normal'>Follow On</p>
                <p className='text-4xl font-bold'><a className='mr-3'><i class="fa-brands fa-instagram"></i></a>ninico-shop</p>
                <div className='flex justify-around mt-10 space-x-6'>                  
                    <img className='h-52 w-full rounded-md' src={img32} alt="" />
                    <img className='h-52 w-full rounded-md' src={img33} alt="" />
                    <img className='h-52 w-full rounded-md' src={img34} alt="" />
                    <img className='h-52 w-full rounded-md' src={img35} alt="" />
                    <img className='h-52 w-full rounded-md' src={img36} alt="" />   
                    <img className='h-52 w-full rounded-md' src={img37} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Homesec2