import React from 'react'
import './Contact.css'
import Categories from '../Home/Categories'
import Headerdrop from '../Home/Headerdrop'

function Contact() {
    return (
        <div>
            <Categories />
            <Headerdrop />
            <div className='flex justify-around py-24'>
                <div className='w-1/4'>
                    <div className='border mb-30 py-10 px-9 text-start rounded-md'>
                        <h1 className='text-2xl font-bold'>Get In Touch</h1>
                        <div className='mt-6 space-y-5'>
                            <p className='text-gray-500'><i className='mr-3 fa-solid fa-location-dot fa-fw'></i>24/26 Strait Bargate, Boston, PE21,<br />United Kingdom</p>
                            <p className='text-gray-500'><i className='mr-3 fa-solid fa-phone-flip fa-fw'></i>+098 (905) 786 897 8<br />6 - 146 - 389 - 5748</p>
                            <p className='text-gray-500'><i className='mr-3 fa-regular fa-clock fa-fw'></i>Store Hours:<br />10 am - 10 pm EST, 7 days a week</p>
                        </div>
                    </div>
                    <div className='space-y-2 mt-8'>
                        <p href="/tel:0123456" className='get border font-bold rounded-md py-4'>Get Support On Call<i className='get-i ml-5 text-rose-600 fa-solid fa-headphones fa-fw'></i></p>
                        <p className='get border font-bold rounded-md py-4'>Get Direction<i className='get-i ml-5 text-rose-600 fa-solid fa-location-dot fa-fw'></i></p>
                    </div>
                </div>
                <div className='text-start w-2/3'>
                    <h1 className='text-2xl font-bold'>Make Custom Request</h1>
                    <p className='text-xs mt-1 text-gray-500 font-semibold'>Must-have pieces selected every month want style Ideas and Treats?</p>
                    <form className='mt-10' action='https://formspree.io/f/xpzvnana' method='POST'>
                        <div className='flex grid grid-cols-12 grid-rows-3'>
                            <div class="col-start- col-span-6"><input className="block w-full px-5 py-5 border rounded-md text-sm" placeholder="Full name" required type="text" name="Full name" /></div>
                            <div class="col-start-7 col-span-12"><input className="block w-full px-5 py-5 border rounded-md text-sm" placeholder="Email address" required type="email" name="Email address" /></div>
                            <div class="col-start-1 col-span-6"><input className="block w-full px-5 py-5 border rounded-md text-sm" placeholder="Phone number" required type="text" name="Phone number" /></div>
                            <div class="col-start-7 col-span-12"><input className="block w-full px-5 py-5 border rounded-md text-sm" placeholder="Subject" required type="text" name="Subject" /></div>
                            <div class="col-start-1 col-span-12"><textarea className="block w-full px-5 py-5 border rounded-md text-sm" placeholder="Enter message" required name="Enter message" /></div>
                        </div>
                        <button className='mt-10 bg-rose-600 text-white text-sm font-bold px-9 py-4 rounded-lg'>Get A Quote<i className='ml-3 fa-solid fa-arrow-right-long fa-fw'></i></button>
                    </form>
                </div>
            </div>
            <iframe className="w-full min-h-[550px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714920225088!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact