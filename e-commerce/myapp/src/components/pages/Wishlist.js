import React from 'react'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'
import './errorpage/Error.css'
import './Wishlist.css'

import { useNavigate } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { REMOVEWISH } from '../../redux/action/action';

function Wishlist() {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };
    
    const dispatch = useDispatch();

    const WishRemove = (id) => {
        dispatch(REMOVEWISH(id))
    }

    const WishlistlistItem = useSelector((state) => state.cartreducer.wishlist)
    console.log(WishlistlistItem);

    return (
        <div>
            <Categories />
            <Headerdrop />
            <div className='bg'>
                <div className='text-start mx-10 space-y-3 py-11'>
                    <div className='flex space-x-2'>
                        <p onClick={backToHome} className='cursor-pointer hover:text-rose-600 duration-500'>Home</p>
                        <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300'/>Wishlist</p>
                    </div>
                    <h1 className='text-4xl font-bold'>Wishlist</h1>
                </div>
            </div>
            <div className='px-5 pt-20'>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold"><span>Images</span></th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Courses</th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Unit Price</th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Quantity</th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Total</th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Add To Cart</th>
                            <th className="px-4 py-1.5 border text-center text-lg font-bold">Remove</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white text-center">
                        {WishlistlistItem.map((item, ind) => {
                            let { id, firstProductImg, productName, Price } = item
                            return (
                                <tr key={ind}>
                                    <td className="whitespace-nowrap">
                                        <a href="#" className='flex justify-center'>
                                            <img src={firstProductImg} alt="" className='product-img w-[125px] h-[143px]' />
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="product-name">{productName}</div>
                                    </td>
                                    <td className="whitespace-nowrap">{Price}</td>
                                    <td className="whitespace-nowrap">
                                        <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                    </td>
                                    <td className="whitespace-nowrap">{Price}</td>
                                    <td>
                                        <button className='tp-btn'>Add To Cart</button>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <button onClick={() => WishRemove(id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Wishlist