import React from 'react'
import "./HomeSwiper.scss"
import { useEffect } from 'react'
import Swiper from 'swiper/bundle';
import { Link } from 'react-router-dom';

import 'swiper/css/bundle';

export default function HomeSwiper() {


    useEffect(() => {
        const swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 4000,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);

  return (
    <>
    <div className="swiper w-[100vw] lg:h-[80vh] md:h-[50vh] max-md:h-[30vh] ">
  {/* <!-- Additional required wrapper --> */}
  <div className="swiper-wrapper">
    {/* <!-- Slides --> */}
    <div className="swiper-slide">
        <img className='w-[100%] relative'  src="/images/M94E3XqhiVFwLPXGTajF6e.webp" loading='lazy' alt="Slide1"/>
        <div className="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-[100%] h-full flex justify-center items-center ">
            <Link to="/products/:all-products" className=' bg-indigo-800 font-bold text-xl max-md:w-[40%] md:w-[20%] hover:bg-indigo-500 transition-all text-white w-[20vw] md:h-[10vh] top-60 left-44 max-md:translate-y-16 max-md:h-[7vh] md:translate-y-28 lg:translate-y-40 rounded-xl flex items-center justify-center'>Get Started</Link>
        </div>
        
    </div>
    <div className="swiper-slide">
    <img className='w-[100%]  relative'  src="/images/318707.webp" loading='lazy' alt="slide2"/>
    <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-[100%] h-full flex justify-center items-center ">
            <Link to="/products/:all-products" className=' bg-indigo-800 font-bold text-xl max-md:w-[40%] md:w-[20%] hover:bg-indigo-500 transition-all text-white w-[20vw] md:h-[10vh] top-60 left-44 max-md:translate-y-16 max-md:h-[7vh] md:translate-y-28 lg:translate-y-40 rounded-xl flex items-center justify-center'>Get Started</Link>
        </div>
        </div>
    <div className="swiper-slide">
    <img className='w-[100%]  relative'  src="/images/Wallpaper-furniture-images.webp" loading='lazy' alt="Slide3"/>
    <div className="bg-[rgba(0,0,0,0.0.3)] absolute top-0 left-0 w-[100%] h-full flex justify-center items-center ">
            <Link to="/products/:all-products" className=' bg-indigo-800 font-bold text-xl max-md:w-[40%] md:w-[20%] hover:bg-indigo-500 transition-all text-white w-[20vw] md:h-[10vh] top-60 left-44 max-md:translate-y-16 max-md:h-[7vh] md:translate-y-28 lg:translate-y-40 rounded-xl flex items-center justify-center'>Get Started</Link>
        </div>
    </div>
    
  </div>
  {/* <!-- If we need pagination --> */}
  <div className="swiper-pagination"></div>

  {/* <!-- If we need navigation buttons --> */}
  {/* <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div> */}

  
</div>

<div className="h-[5vh]"></div>

    </>
  )
}
