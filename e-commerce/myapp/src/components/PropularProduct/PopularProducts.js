import React from 'react'
import Commoncard from './CommonCard'
import PopularData from './PopularData'
import './PopularProducts.css'

const PopularProducts = () => {
    return (
        <div>
            <section>
                <div className='container mx-auto px-10'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold'>Popular <span className='font-normal text-red-600'>Products</span> </h1>
                        </div>
                        <div>
                            <ul className='flex justify-between font-bold'>
                                <li><a href="#" className='mx-5 text-rose-600 underline'>All</a></li>
                                <li><a href="#" className='mx-5'>Popular</a></li>
                                <li><a href="#" className='mx-5'>On Sale</a></li>
                                <li><a href="#" className='mx-5'>Best Rated</a></li>
                            </ul>
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
            </section>
        </div>
    )
}

export default PopularProducts