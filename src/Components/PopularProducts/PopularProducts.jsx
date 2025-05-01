import React, { useState,useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PopularProducts() {
  let [TopsProducts , setTopsProducts]=useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/products/category/tops")
    .then((res)=>res.json())
    .then((products)=>setTopsProducts(products.products))
  },[])




        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };



  return (
    <>
       <div className="bg-white w-full flex justify-center">
      <div className="w-[80vw] py-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
          Customers also purchased
        </h2>

        <Slider {...settings}>
          {TopsProducts.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard className=""
                name={product.title}
                href={product.href}
                price={product.price}
                category={product.category}
                imageSrc={product.thumbnail}
                imageAlt={product.imageAlt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute right-0 top-1/2 font-bold text-3xl flex justify-center items-center -translate-y-1/2 z-10 bg-indigo-300 p-2 pb-4 rounded-full hover:bg-indigo-300"
      >
        {">"}
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute pb-4 font-bold text-3xl left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-300 p-2 rounded-full hover:bg-indigo-300"
      >
        {"<"}
      </button>
    );
  }
