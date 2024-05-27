import React from 'react';
// import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="bg-slate-100 mt-20 h-full px-14 py-5 pt-10">
                    <div className="container mx-auto flex flex-wrap items-center">
                        <div className="grid grid-cols-5 gap-2 flex-wrap mt-5">
                            <div className="flex">
                                <div>
                                    <a href="#" className=''>
                                        <img src="https://ninico-nextjs.vercel.app/assets/img/logo/logo.png" alt="Logo" className="h-7" />
                                    </a>
                                    <div className='mt-10 text-start text-gray-500'>
                                        <p>
                                            Elegant pink origami desaing three dimensional view and decoration co-exit. Great for adding a decrotatve touch to zany room's decor."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-2 flex'>
                                <div className='footer-col ml-14'>
                                    <h4 className='absolute font-semibold underline underline-offset-1 mr-6'>Information</h4>
                                    <div className='text-sm'>
                                        <ul className='m-0 p-0 font-semibold text-gray-500 text-start leading-9 mt-10'>
                                            <li className='foot-data'><a href="#">Custom Service</a></li>
                                            <li className='foot-data'><a href="#">FAQs</a></li>
                                            <li className='foot-data'><a href="#">Ordering Tracking</a></li>
                                            <li className='foot-data'><a href="#">Contacts</a></li>
                                            <li className='foot-data'><a href="#">Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-2 flex'>
                                <div>
                                    <h4 className='font-semibold absolute underline underline-offset-1 mr-11'>My Account</h4>
                                    <div className='text-sm'>
                                        <ul className='m-0 p-0 hover font-semibold text-gray-500 text-start leading-9 mt-10'>
                                            <li className='foot-data'><a href="#">Delivery Information</a></li>
                                            <li className='foot-data'><a href="#">Privacy Policy</a></li>
                                            <li className='foot-data'><a href="#">Discount</a></li>
                                            <li className='foot-data'><a href="#">Custom Service</a></li>
                                            <li className='foot-data'><a href="#">Terms Condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-2'>
                                <div>
                                    <h4 className='mb-5 font-semibold underline underline-offset-1 mr-40'>Social Network</h4>
                                    <div className='text-sm'>
                                        <ul className='font-semibold text-gray-500 text-start leading-9'>
                                            <li className='foot-data'><a href="#"><i class="fa-brands text-black fa-facebook-f mr-3"></i>facebook</a></li>
                                            <li className='foot-data'><a href="#"><i class="fa-brands text-black fa-dribbble mr-3"></i>Dribbble</a></li>
                                            <li className='foot-data'><a href="#"><i class="fa-brands text-black fa-twitter mr-3"></i>Twitter</a></li>
                                            <li className='foot-data'><a href="#"><i class="fa-brands text-black fa-behance mr-3"></i>Behance</a></li>
                                            <li className='foot-data'><a href="#"><i class="fa-brands text-black fa-youtube mr-3"></i>Youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h4 className='mb-8 font-semibold underline underline-offset-1 mr-40'>Get Newsletter</h4>
                                    <p className='font-semibold text-gray-500 mr-10'>Get on the list and get 10% off your first order!</p>

                                    <div className='mt-5'>
                                        <form action="#">
                                            <input type="text" placeholder='Enter emaail address' className='h-9 mr-16 border-0 pl-7 mb-2 rounded-md' />
                                            <button className='bg-rose-600 inline-block font-medium px-7 py-4 mt-5 mr-20 rounded-md text-white'>
                                                Subscribe Now
                                                <i class="fa-solid fa-arrow-right ml-2"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-10'></hr>
                    <div className='container mx-auto flex items-center justify-between mt-10'>
                        <div className='flex items-center'>
                            <a href="#" className='px-4 py-3 bg-slate-100 rounded-full'>
                                <i class="fa-solid fa-phone-flip"></i>
                            </a>
                            <div className='ml-2 text-start'>
                                <h3 className='font-bold'>980.029.666.99</h3>
                                <p className='text-sm text-slate-400'>Worning 8.00 - 22:00</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='text-start'>
                                <h4 className='font-bold'>Download App on Mobaile</h4>
                                <p className='text-sm text-slate-400'>15% discount on your first purchase</p>
                            </div>
                            <div className='flex pl-2'>
                                <img src="https://ninico-nextjs.vercel.app/assets/img/footer/f-app.jpg" className='w-28 h-10 mr-2' />
                                <img src="https://ninico-nextjs.vercel.app/assets/img/footer/f-google.jpg" alt="" className='w-28 h-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between p-6 bg-stone-200'>
                    <p className='text-stone-600 text-medium'>Copyright 2024 <span className='text-black font-bold'>©Ninico.</span> All rights reserved. Developed by <span className='text-black font-bold'>AliThemes.</span></p>
                    <div>
                        <img src="https://ninico-nextjs.vercel.app/assets/img/footer/f-brand-icon-01.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer