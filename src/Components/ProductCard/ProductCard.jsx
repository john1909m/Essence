import React, { useEffect } from 'react';
import { useOutletContext, Link } from "react-router-dom";
// import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useToast } from '../../Context/ToastContext';


export default function ProductCard({name,id, href, imageAlt, imageSrc, price, category}) {
const {setCartProducts,cartProducts,setWishProducts,wishProducts}=useOutletContext()
const { showToast } = useToast();

  const addCartItem=(item)=>{
    setCartProducts(prev => [...prev,item])
    showToast(`${name} has been added to your cart`, 'success');
  }
  
  const addWishItem=(item)=>{
    setWishProducts(prev => [...prev,item])
    showToast(`${name} has been added to your wishlist`, 'success');
  }

useEffect(()=>{
  localStorage.setItem("wishList",JSON.stringify(wishProducts))
  localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
  // console.log("added");
  // console.log(localStorage.getItem("wishList"));
  
},[wishProducts,cartProducts])
  // console.log(cartProducts);
  
  return (
    <div className="group relative bg-white dark:bg-dark-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-dark-card">
        <Link to={`/product/${id}`} className="block">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <button
          onClick={() => {
            addWishItem({
              id: id,
              title: name,
              price: price,
              imageSrc: imageSrc
            });
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Add to wishlist"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <Link to={`/product/${id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 capitalize">{category}</p>
          </div>
          <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">${price}</p>
        </div>

        <button
          onClick={() => {
            addCartItem({
              id: id,
              title: name,
              price: price,
              imageSrc: imageSrc
            });
          }}
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}