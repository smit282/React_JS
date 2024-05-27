import React from 'react'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'
import './errorpage/Error.css'

import { IoRemoveOutline } from "react-icons/io5";

import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_cart , CART_QUT_INCREASE, CART_QUT_DECREASE } from '../../redux/action/action';
import { useNavigate } from 'react-router-dom';
function Cart() {

    let Subtotal = 0;
    const GST = 18.00;
    let GSTCount = 0;

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    const dispatch = useDispatch();

    const Removecart = (id) => {
        dispatch(REMOVE_cart(id))
    }

    const data = useSelector((state) => state.cartreducer.carts)
    // console.log(data);

    const increment_Qut = (item) => {
        dispatch(CART_QUT_INCREASE(item))
    }
    const decrease_Qut = (item) => {
        dispatch(CART_QUT_DECREASE(item))
    }

    GSTCount += Subtotal * GST

    return (
        <div>
            <Categories />
            <Headerdrop />
            <div className='bg'>
                <div className='text-start mx-10 space-y-3 py-11'>
                    <div className='flex space-x-2'>
                        <p onClick={backToHome} className='cursor-pointer hover:text-rose-600 duration-500'>Home</p>
                        <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300' />Cart</p>
                    </div>
                    <h1 className='text-4xl font-bold'>Cart</h1>
                </div>
            </div>
            <div className='px-10 pt-20'>
                <div>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold"><span>Images</span></th>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold">Courses</th>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold">Unit Price</th>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold">Quantity</th>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold">Total</th>
                                <th className="px-4 py-1.5 border text-center text-lg font-bold">Remove</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {data.map((item, ind) => {
                                let { id, firstProductImg, productName, Price } = item
                                return (
                                    <tr key={ind} className='cart-item'>
                                        <td className=''>
                                            <a href="#" className='flex justify-center'>
                                                <img src={firstProductImg} alt="" className='' />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" className='product-name'>{productName}</a>
                                        </td>
                                        <td>{Price}</td>
                                        <td className=''>
                                            {/* <input type="number" min={1} defaultValue={1} name='qty' className='qty' /> */}
                                            {/* <input type="number" onClick={()=>increment_Qut(item)} name='qty' className='qty' /> */}
                                            <input type="number" onClick={()=>decrease_Qut(item)} name='qty' className='qty' />
                                        </td>
                                        <td>{Price}</td>
                                        <td>
                                            <button onClick={() => Removecart(id)}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between my-12'>
                    <div>
                        <input placeholder='Coupon code' type='text' className='border py-3 pl-4 rounded-lg text-lg focus:outline-none'></input>
                        <button className='bg-rose-600 border py-4 px-9 ml-3 rounded-lg text-sm font-semibold text-white'>Apply Coupon</button>
                    </div>
                    <button className='bg-rose-600 border py-4 px-9 ml-3 rounded-lg text-sm font-semibold text-white'>Update cart</button>
                </div>
                <div className='flex justify-end'>
                    <div className='text-start'>
                        <h1 className='text-2xl'>Cart Totals</h1>
                        <div className='py-5'>
                            <div className='flex justify-between text-gray-500 text-sm py-3 px-8 border w-[38rem]'>
                                <p>Subtotal</p>
                                <p>$50.00</p>
                            </div>
                            <div className='flex justify-between text-gray-500 text-sm py-3 px-8 border-t-0 border w-[38rem]'>
                                <p>Total</p>
                                <p>$50.00</p>
                            </div>
                        </div>
                        <button className='bg-rose-600 border py-4 px-9 rounded-lg text-sm font-semibold text-white'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart