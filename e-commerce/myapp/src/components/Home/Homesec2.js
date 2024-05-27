import React from 'react'
import Floded1 from '../assets/floded-01.png'
import insta1 from '../assets/instagram-01.jpg'
import insta2 from '../assets/instagram-02.jpg'
import insta3 from '../assets/instagram-03.jpg'
import insta4 from '../assets/instagram-04.jpg'
import insta5 from '../assets/instagram-05.jpg'
import insta6 from '../assets/instagram-06.jpg'
function Homesec2() {
    return (
        <div>
            <div className='px-10'>
                <div className='flex justify-center items-center bg-gray-100 p-10 mt-28'>
                    <div className='px-16'> 
                        <img src={Floded1} alt="" />
                    </div>
                    <div className='text-start w-[55%]'>
                        <p className='text-xl font-semibold text-red-500'>$49.00<span className='text-gray-500 line-through'>$59.00</span></p>
                        <h1 className='text-5xl font-bold'>Pro2 Abstract Folded Pots</h1>
                        <p className='text-lg mt-3 text-gray-500 font-normal'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
                        <hr className='h-1.5 w-[70%] mt-7 rounded-full bg-red-600'/>
                        <div className='flex mt-8 space-x-3 items-center'>
                            <button className='py-3 w-20 text-4xl font-bold bg-white'>-135<p className='font-medium text-gray-500 text-sm'>Days</p></button>
                            <button className='py-3 w-20 text-4xl font-bold bg-white'>-22<p className='font-medium text-gray-500 text-sm'>Hour</p></button>
                            <button className='py-3 w-20 text-4xl font-bold bg-white'>-56<p className='font-medium text-gray-500 text-sm'>Minute</p></button>
                            <button className='py-3 w-20 text-4xl font-bold bg-white'>-46<p className='font-medium text-gray-500 text-sm'>Second</p></button>
                            <span className='text-gray-500'>Remains until the <br/> end of the offer</span>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <p className='text-red-500 text-xl font-normal'>Follow On</p>
                    <p className='text-4xl font-bold'><a className='mr-3'><i class="fa-brands fa-instagram"></i></a>ninico-shop</p>
                    <div className='flex justify-around mt-10 space-x-6'>                  
                        <img className='h-52 w-full rounded-md' src={insta1} alt="" />
                        <img className='h-52 w-full rounded-md' src={insta2} alt="" />
                        <img className='h-52 w-full rounded-md' src={insta3} alt="" />
                        <img className='h-52 w-full rounded-md' src={insta4} alt="" />
                        <img className='h-52 w-full rounded-md' src={insta5} alt="" />   
                        <img className='h-52 w-full rounded-md' src={insta6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homesec2