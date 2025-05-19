import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import { useOutletContext } from "react-router-dom";

export default function PopularProducts() {
  const { cartProducts, setCartProducts, wishProducts, setWishProducts } = useOutletContext();
  let [TopsProducts, setTopsProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tops")
      .then((res) => res.json())
      .then((products) => setTopsProducts(products.products));
  }, []);

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Popular Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover what our customers love
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {TopsProducts.map((product) => (
              <div key={product.id} className="px-3">
                <ProductCard
                  name={product.title}
                  href={product.href}
                  id={product.id}
                  price={product.price}
                  category={product.category}
                  imageSrc={product.thumbnail}
                  imageAlt={product.imageAlt}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  wishProducts={wishProducts}
                  setWishProducts={setWishProducts}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-surface shadow-lg hover:shadow-xl text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Next slide"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-surface shadow-lg hover:shadow-xl text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
