import React from 'react'
import cat1 from '../assets/cat01.svg'
import cat2 from '../assets/cat02.svg'
import cat3 from '../assets/cat03.svg'
import cat4 from '../assets/cat04.svg'
import cat5 from '../assets/cat05.svg'
import cat6 from '../assets/cat06.svg'
import './Homesec1.css'

function Homesec1() {
  return (
    <div className='container'>
      <h1 className='text-start mx-10 mt-5 text-2xl font-bold'>Top <span className='font-normal text-red-500'>Categories</span></h1>
      <div className='flex justify-between mx-16 my-10'>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>20</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat1} alt="" />
          <p className='title'>Driftwood <br /> Table Decor</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>12</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat2} alt="" />
          <p className='title'>Floor Driftwood <br /> Sculpture</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>03</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat3} alt="" />
          <p className='title'>Driftwood <br /> Christmas Tree</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>09</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat4} alt="" />
          <p className='title'>Wooden <br /> Bluetooth Speaker</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>10</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat5} alt="" />
          <p className='title'>Receivers <br /> Amplifiers</p>
        </div>
        <div>
          <span className='ml-20 rounded-full p-3 shadow-md font-bold shadow-slate-200 text-red-400 Top'>05</span>
          <img className='px-10 py-5 bg-zinc-50' src={cat6} alt="" />
          <p className='title'>Appetizer <br /> Plate Set</p>
        </div>
      </div>
    </div>
  )
}

export default Homesec1