import React from 'react'
import login from '../assets/login-bg.jpg'
import signin from '../assets/sign-bg.jpg'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'
import './errorpage/Error.css'

import { useNavigate } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";

function Signin() {

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
                        <p className='text-gray-500 flex'><IoRemoveOutline className='text-3xl text-gray-300'/>Sign In</p>
                    </div>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                </div>
            </div>
            <div className='flex justify-evenly mt-20'>
                <div>
                    <div className='rounded-lg overflow-hidden'>
                        <img src={login} alt="Signin"/>
                        <div className='p-12 bg-gray-100'>
                            <div className='flex justify-between'>
                                <a><i className="fa-solid fa-briefcase bg-white text-rose-600 rounded-lg p-5"></i></a>
                                <div className='text-start space-y-2'>
                                    <h1 className='font-bold text-lg'>Sign Up</h1>
                                    <p className='w-[520px] text-sm text-gray-500'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                </div>
                            </div>
                            <div className='mt-6 space-y-2 text-sm'>
                                <div className='relative'>
                                    <div className="absolute inset-y-0 flex items-center ps-8 pointer-events-none">
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <input className="block px-5 py-5 w-full rounded-md ps-16 focus:outline-none" placeholder="Username / email address" type="email"/>
                                </div>
                                <div className='relative'>
                                    <div className="absolute inset-y-0 flex items-center ps-8 pointer-events-none">
                                        <i className="fa-solid fa-key"></i>
                                    </div>
                                    <input className="block px-5 py-5 w-full rounded-md ps-16 focus:outline-none" placeholder="Password" type="password"/>
                                </div>
                            </div>
                            <div className='mt-5 text-sm text-start'>
                                <a href='#' className='underline decoration-solid'>Already Have Account?</a>
                            </div>
                            <button className='mt-5 w-full bg-amber-50 text-sm font-bold py-5 rounded-md hover:bg-black hover:text-white duration-500'>Register Now<i className='ml-3 fa-solid fa-arrow-right-long fa-fw'></i></button>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg overflow-hidden'>
                    <img src={signin} alt="Login"/>
                    <div className='p-12 bg-gray-100'>
                        <div className='flex justify-between'>
                            <a><i className="fa-solid fa-lock bg-white text-rose-600 rounded-lg p-5"></i></a>
                            <div className='text-start space-y-2'>
                                <h1 className='font-bold text-lg'>Login Here</h1>
                                <p className='w-[520px] text-sm text-gray-500'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                            </div>
                        </div>
                        <div className='mt-6 space-y-2 text-sm'>
                            <div className='relative'>
                                <div className="absolute inset-y-0 flex items-center ps-8 pointer-events-none">
                                    <i className="fa-regular fa-user"></i>
                                </div>
                                <input className="block px-5 py-5 w-full rounded-md ps-16 focus:outline-none" placeholder="Username / email address" type="email"/>
                            </div>
                            <div className='relative'>
                                <div className="absolute inset-y-0 flex items-center ps-8 pointer-events-none">
                                    <i className="fa-solid fa-key"></i>
                                </div>
                                <input className="block px-5 py-5 w-full rounded-md ps-16 focus:outline-none" placeholder="Password" type="password"/>   
                            </div>
                        </div>
                        <div className='flex justify-between mt-5 text-sm'>
                            <label className='text-gray-400'>Remember me</label>
                            <a href='#' className='underline decoration-solid'>Forget Password</a>
                        </div>
                        <button className='mt-5 w-full bg-rose-600 text-white text-sm font-bold py-5 rounded-md hover:bg-black duration-500'>Login Now<i className='ml-3 fa-solid fa-arrow-right-long fa-fw'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin