import React from 'react'
import { useState } from "react";

function Categories() {
    const [togglelist, settogglelist] = useState(false);
    return (
        <div>
            <aside className="w-64 h-full top-0 left-0 overflow-y-auto">
                <div className="absolute p-4">
                    <div className='flex px-12 bg-red-500 py-3 rounded-t-lg' onClick={()=>{settogglelist(!togglelist)}}>
                        <a href="#" className='text-white py-1'><i class="fa-solid fa-bars"></i></a>
                        <h2 className="text-xl text-white font-bold ml-3">Categories</h2>
                    </div>
                    {togglelist? <div>
                        <ul className='py-3 bg-white'>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-regular fa-user"></i></a>Candles</li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-solid fa-fan"></i></a>Handmade<a className='ml-5 text-gray-400'><i class="fa-solid fa-arrow-right-long"></i></a></li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-solid fa-shoe-prints"></i></a>Gift Sets</li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-regular fa-face-smile"></i></a>Plastic Gifts</li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-regular fa-face-smile"></i></a>Hamdy Cream</li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-solid fa-crown"></i></a>Cosmetics</li>
                            <li className="py-2 px-10 text-left decoration-red-500 hover:text-red-600"><a className='pr-3 text-rose-500'><i class="fa-solid fa-gift"></i></a>Silk Accessories</li>
                        </ul>

                        <div class="z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 ">
                            <div class="py-5 leading-7 pl-8 text-left font-semibold" role="none">
                                <p className='hover:text-red-600 hover:underline decoration-red-500'>Value of the Day</p>
                                <p className='hover:text-red-600 hover:underline decoration-red-500'>Top 100 Offers</p>
                                <p className='hover:text-red-600 hover:underline decoration-red-500'>New Arrivals</p>
                            </div>
                        </div>
                    </div>  : <></>}
                </div>
            </aside>
        </div>
    )
}

export default Categories