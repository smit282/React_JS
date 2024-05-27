import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CiShoppingBasket } from "react-icons/ci";
import { PiArrowsLeftRight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
    
import './PopularProducts.css'

import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { ADD , ADDWISh } from"../../redux/action/action"

function Commoncard({ id, firstProductImg, secondeProductImg, productName, Price }) {

    const navigate = useNavigate();

    const Product = {firstProductImg,secondeProductImg,productName,Price,id}
    
    const dispatch = useDispatch();
    
    const data = useSelector((state) => state.cartreducer.carts)
    const deta = useSelector((state)=>state.cartreducer.wishlist)

    const send = (e) => {
        dispatch(ADD(e));
    }

    const addwish =(e)=>{
        dispatch(ADDWISh(e))
    }

    return (
        <div id='PRODUCTCARD' className='ProductCard w-[19rem] h-[26rem]'>
            <div className='ProductCard-Head mx-3.5 my-3 relative'>
                <Link id='ProductCard-link' to='/shopdetail2' className='block rounded-md overflow-hidden relative '>
                    <img src={firstProductImg} alt={productName + "image"} className='black object-contain w-full h-full mx-auto ' />
                    <img src={secondeProductImg} alt={productName + "image"} className='black object-contain mx-auto absolute top-0 z-[1]' />
                </Link>
                <div className='ProductCard-Buttons absolute'>
                    <ul className='bg-white py-3 flex justify-evenly rounded-md'>
                        <li className='flex items-center'>
                            <button onClick={()=>send(Product)} className='text-gray-500 hover:text-black duration-1000'>
                                <CiShoppingBasket className='text-[22px]'/>
                            </button>
                        </li>
                        <li className='flex items-center'>
                            <button className='text-gray-500 hover:text-black duration-1000'>
                                <PiArrowsLeftRight className='text-[22px]'/>
                            </button>
                        </li>
                        <li className='flex items-center'>
                            <button onClick={() => navigate("/shopdetail")} className='text-gray-500 hover:text-black duration-1000'>
                                <FaRegEye className='text-[22px]'/>
                            </button>
                        </li>
                        <li className='flex items-center'>
                            <button onClick={() => addwish(Product)} className='text-gray-500 hover:text-black duration-1000'>
                                <CiHeart className='text-[22px]'/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='ProductCard-body mx-3.5'>
                <Link to='/shopdetail2' className='text-[1rem] capitalize block text-gray-400'>{productName}</Link>
                <p className='text-[1.1rem] font-bold mt-1'>{Price}</p>
            </div>
        </div>
    )
}

export default Commoncard