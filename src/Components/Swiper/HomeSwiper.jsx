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
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },
          autoplay: {
            delay:4000,
            disableOnInteraction: false,
          },
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);

  return (
    <section className="relative">
      <div className="swiper w-full h-[80vh] md:h-[90vh]">
        <div className="swiper-wrapper">
          <div className="swiper-slide relative">
            <img 
              className="w-full h-full object-cover" 
              src="/images/M94E3XqhiVFwLPXGTajF6e.webp" 
              loading="lazy" 
              alt="Fashion Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Discover Your Style
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8">
                      Explore our latest collection of trendy fashion items
                    </p>
                    <Link 
                      to="/products/:all-products" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Shop Now
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide relative">
            <img 
              className="w-full h-full object-cover" 
              src="/images/318707.webp" 
              loading="lazy" 
              alt="Luxury Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Luxury Collection
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8">
                      Experience the finest quality in fashion
                    </p>
                    <Link 
                      to="/products/:all-products" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Explore More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide relative">
            <img 
              className="w-full h-full object-cover" 
              src="/images/Wallpaper-furniture-images.webp" 
              loading="lazy" 
              alt="Home Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      Home Essentials
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8">
                      Transform your living space with our curated collection
                    </p>
                    <Link 
                      to="/products/:all-products" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Shop Collection
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination !bottom-8"></div>
        
        {/* <div className="swiper-button-prev !w-12 !h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !text-white hover:!bg-white/30 transition-all duration-300"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !text-white hover:!bg-white/30 transition-all duration-300"></div> */}
      </div>
    </section>
  )
}
