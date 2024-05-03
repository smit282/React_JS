import React from 'react'
import Headerdrop from './Headerdrop'
import img1 from './assets/banner-1.jpg'
import img2 from './assets/banner-2.jpg'
import img3 from './assets/banner-3.jpg'
import img4 from './assets/banner-slider-01.jpg'
import img5 from './assets/banner-slider-02.jpg'
import './Headerslider.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Headerslider() {
  return (
    <div>
      <Headerdrop/>
      <div className='grid grid-cols-12'>
        <div className='p-5 col-start-3 col-span-7'>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}} navigation={false} modules={[Autoplay, Pagination, Navigation]} className="h-[470px] w-full">
            <SwiperSlide>
              <img className='rounded-md absolute' src={img1} alt=""/>
              <div className='top-28 pl-16 text-left absolute'>
                <h2 className='text-red-500 text-lg'>
                  Accessories
                </h2>
                <p className='text-[47px] font-bold'>
                  Up To <span className='text-rose-500'>40% off</span><br/>latest Creations
                </p>
                <div className='mt-5'>
                  <button className="rounded-md px-8 py-4 font-bold text-xs bg-white">Shop Now <a className='ml-3'><i class="fa-solid fa-arrow-right-long"></i></a></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-md absolute' src={img2} alt=""/>
              <div className='top-28 pl-16 text-left absolute'>
                <h2 className='text-red-500 text-lg'>
                  Accessories
                </h2>
                <p className='text-[47px] font-bold'>
                  Up To <span className='text-rose-500'>35% off</span><br/>latest Creations
                </p>
                <div className='mt-5'>
                  <button className="rounded-md px-8 py-4 font-bold text-xs bg-white">Shop Now <a className='ml-3'><i class="fa-solid fa-arrow-right-long"></i></a></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-md absolute' src={img3} alt=""/>
              <div className='top-28 pl-16 text-left absolute'>
                <h2 className='text-red-500 text-lg'>
                  Accessories
                </h2>
                <p className='text-[47px] font-bold'>
                  Up To <span className='text-rose-500'>45% off</span><br/>latest Creations
                </p>
                <div className='mt-5'>
                  <button className="rounded-md px-8 py-4 font-bold text-xs bg-white">Shop Now <a className='ml-3'><i class="fa-solid fa-arrow-right-long"></i></a></button>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            </div>
          </Swiper>    
        </div>
        <div className='col-start-10 col-span-12'>
          <img className='my-5 rounded-lg' src={img4} alt="" />
          <div className='top-48 pl-8 text-left absolute'>
            <h2 className='text-red-500 text-lg'>
              Hand made
            </h2>
            <p className='text-[20px] font-bold'>
              New Morden Stylist<br/>Crafts
            </p>
          </div>
          
          <img className='rounded-lg' src={img5} alt="" />
          <div className='bottom-56 pl-8 text-left absolute'>
            <h2 className='text-red-500 text-lg'>
              Popular
            </h2>
            <p className='text-[20px] font-bold'>
              Energy with our<br/>newest collection
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Headerslider