import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
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
    <div className="group relative dark:bg-dark-surface rounded-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-indigo-50 dark:bg-dark-card lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700 dark:text-white">
            <a href={href} className='font-bold'>
              {name}
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500 dark:text-gray-300">{category}</p>
        </div>
        <p className="text-lg font-medium text-gray-900 dark:text-indigo-300">${price}</p>
      </div>
      <div className="btns flex justify-between gap-1 mt-3">
        <button className='bg-indigo-600 p-1 w-full rounded-md h-[5vh] text-[16px] font-semibold text-white hover:bg-indigo-800 transition-all' onClick={()=>{
          addCartItem({
            id:id,
            title:name,
            price:price,
            imageSrc:imageSrc
          })
          console.log("added");
          
        }}>Add To Cart</button>
        <button
        onClick={()=>{
          addWishItem({
            id:id,
            title:name,
            price:price,
            imageSrc:imageSrc
          })
        }} className='bg-red-600 w-[20%] p-1 rounded-md flex justify-center items-center h-[5vh] text-[16px] font-semibold text-white hover:bg-red-800 transition-all'>
          <HeartIcon className='h-5 w-5'></HeartIcon>
        </button>
      </div>
    </div>
  );
}