import React from 'react'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'
import '../pages/errorpage/Error.css'

import Commoncard from '../PropularProduct/CommonCard'
import PopularData from '../PropularProduct/PopularData'
import '../PropularProduct/PopularProducts.css'

import { useNavigate } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";

function Shop() {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");

    };

    return (
        <div>
            <Categories />
            <Headerdrop />
            <div className='bg'>
                <div className='text-start mx-10 space-y-3 py-11'>
                    <div className='flex space-x-2'>
                        <p onClick={backToHome} className='cursor-pointer hover:text-rose-600 duration-500'>Home</p>
                        <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300' />Shop</p>
                    </div>
                    <h1 className='text-4xl font-bold'>Shop</h1>
                </div>
            </div>
            <div className='pt-20 px-9'>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg'>10 <span className='text-gray-500 font-normal'>Item On List</span></p>
                    <div className='flex justify-between w-96'>
                        <div>
                            <select className="rounded-md px-2 py-1.5 border">
                                <option value="sort">Sort by (default)</option>
                                <option value="new">Newest</option>
                                <option value="old">Oldest</option>
                            </select>
                        </div>
                        <div>
                            <select className="rounded-md px-2 py-1.5 border">
                                <option value="all">All</option>
                                <option value="10">10 per page</option>
                                <option value="20">20 per page</option>
                                <option value="30">30 per page</option>
                            </select>
                        </div>
                        <a className='mt-1'><i class="fa-solid fa-list"></i></a>
                        <a className='mt-1'><i className="fa-solid fa-table-cells text-rose-600"></i></a>
                    </div>
                </div>
                <div className='tab-content'>
                    <div className='card-group flex flex-wrap items-center justify-between mt-7 mb-3'>
                        {PopularData.map((cvalue, index) => {
                            const Product = { cvalue };
                            return (
                                <Commoncard key={index} id={cvalue.id} firstProductImg={cvalue.img} secondeProductImg={cvalue.img2} productName={cvalue.title} Price={cvalue.rate} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop