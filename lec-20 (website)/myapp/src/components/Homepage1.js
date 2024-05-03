import React from 'react'
import img6 from './assets/cat01.svg'
import img7 from './assets/cat02.svg'
import img8 from './assets/cat03.svg'
import img9 from './assets/cat04.svg'
import img10 from './assets/cat05.svg'
import img11 from './assets/cat06.svg'
import img12 from './assets/product-1.jpg'
// import img13 from './assets/product-2.jpg'
import img14 from './assets/product-3.jpg'
// import img15 from './assets/product-4.jpg'
import img16 from './assets/product-5.jpg'
// import img17 from './assets/product-6.jpg'
import img18 from './assets/product-7.jpg'
// import img19 from './assets/product-8.jpg'
import img20 from './assets/product-9.jpg'
// import img21 from './assets/product-10.jpg'
import img22 from './assets/product-11.jpg'
// import img23 from './assets/product-12.jpg'
import img24 from './assets/product-13.jpg'
// import img25 from './assets/product-14.jpg'
import img26 from './assets/product-15.jpg'
// import img27 from './assets/product-16.jpg'
import img28 from './assets/product-17.jpg'
// import img29 from './assets/product-18.jpg'
import img30 from './assets/product-19.jpg'
// import img31 from './assets/product-20.jpg'
import './Homepage1.css'

function Homepage1() {
  return (
    <div className='container'>
      <h1 className='text-start mx-10 mt-5 text-2xl font-bold'>Top <span className='font-normal text-red-500'>Categories</span></h1>
      <div className='flex justify-between mx-16 my-10'>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>20</span>
          <img className='px-10 py-5 bg-zinc-50' src={img6} alt="" />
          <p className='title'>Driftwood <br /> Table Decor</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>12</span>
          <img className='px-10 py-5 bg-zinc-50' src={img7} alt="" />
          <p className='title'>Floor Driftwood <br /> Sculpture</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>03</span>
          <img className='px-10 py-5 bg-zinc-50' src={img8} alt="" />
          <p className='title'>Driftwood <br /> Christmas Tree</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>09</span>
          <img className='px-10 py-5 bg-zinc-50' src={img9} alt="" />
          <p className='title'>Wooden <br /> Bluetooth Speaker</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>10</span>
          <img className='px-10 py-5 bg-zinc-50' src={img10} alt="" />
          <p className='title'>Receivers <br /> Amplifiers</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400'>05</span>
          <img className='px-10 py-5 bg-zinc-50' src={img11} alt="" />
          <p className='title'>Appetizer <br /> Plate Set</p>
        </div>
      </div>

      <div className='container mt-24'>
        <div className='flex justify-between'>
          <h1 className='mx-10 text-2xl font-bold'>Popular <span className='font-normal text-red-500'>Products</span></h1>
          <div className='space-x-10 mr-10'>
            <button className='font-semibold text-red-500 underline'>All</button>
            <button className='font-semibold'>Popular</button>
            <button className='font-semibold'>On Sale</button>
            <button className='font-semibold'>Best Rated</button>
          </div>
        </div>

        <div className='flex justify-around mx-5 mt-10'>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img12} alt="" />
            {/* <img className='h-72 w-full' src={img13} alt=""/> */}
            <p className='text-gray-500 mt-5'>Bradley Burgess 2</p>
            <p className='font-semibold'>$20.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img14} alt="" />
            {/* <img className='h-72 w-full' src={img15} alt=""/> */}
            <p className='text-gray-500 mt-5'>Allie Sharp</p>
            <p className='font-semibold'>$30.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img16} alt="" />
            {/* <img className='h-72 w-full' src={img17} alt=""/> */}
            <p className='text-gray-500 mt-5'>Nathaniel Baldwin</p>
            <p className='font-semibold'>$40.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img18} alt="" />
            {/* <img className='h-72 w-full' src={img19} alt=""/> */}
            <p className='text-gray-500 mt-5'>Effie Rois</p>
            <p className='font-semibold'>$40.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img20} alt="" />
            {/* <img className='h-72 w-full' src={img21} alt=""/> */}
            <p className='text-gray-500 mt-5'>Carolyn Goodwin</p>
            <p className='font-semibold'>$50.00</p>
          </div>
        </div>

        <div className='flex justify-around mx-5 mt-10'>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img22} alt="" />
            {/* <img className='h-72 w-full' src={img23} alt=""/> */}
            <p className='text-gray-500 mt-5'>Evelyn Patton</p>
            <p className='font-semibold'>$60.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img24} alt="" />
            {/* <img className='h-72 w-full' src={img25} alt=""/> */}
            <p className='text-gray-500 mt-5'>Sally Ray</p>
            <p className='font-semibold'>$70.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img26} alt="" />
            {/* <img className='h-72 w-full' src={img27} alt=""/> */}
            <p className='text-gray-500 mt-5'>Ora Bowman</p>
            <p className='font-semibold'>$80.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img28} alt="" />
            {/* <img className='h-72 w-full' src={img29} alt=""/> */}
            <p className='text-gray-500 mt-5'>Frederick Valdez</p>
            <p className='font-semibold'>$90.00</p>
          </div>
          <div className='text-start'>
            <img className='h-72 w-full rounded-md' src={img30} alt="" />
            {/* <img className='h-72 w-full' src={img31} alt=""/> */}
            <p className='text-gray-500 mt-5'>Terry Byrd</p>
            <p className='font-semibold'>$100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage1