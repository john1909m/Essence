import React, { useState } from 'react'
// Remove the direct CSS imports that are causing the resolution error
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import ThemeToggle from '../Components/ThemeToggle/ThemeToggle'
import Footer from '../Components/Footer/Footer'
import { useTheme } from '../Context/ThemeContext'

export default function SiteLayout() {
  const location = useLocation()
  const urlSplit = location.pathname.split(["/:",])
  const category = urlSplit[urlSplit.length-1]
  const [catParams, setCatParams] = useState(`/products/`)
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [cartProducts, setCartProducts] = useState([])
  const [wishProducts, setWishProducts] = useState([])
  const { darkMode } = useTheme();

  return (
    <>
      <div className={`min-h-screen transition-all duration-300 ease-in-out ${
        darkMode 
          ? 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg bg-pattern' 
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}>
        <Navbar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          catParams={catParams} 
          setCatParams={setCatParams} 
          cartProducts={cartProducts} 
          setCartProducts={setCartProducts} 
          wishProducts={wishProducts} 
          setWishProducts={setWishProducts}
        />
        <div className='h-[7vh]'></div>
        <main className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent dark:from-dark-bg/50 dark:via-dark-surface/50 dark:to-dark-bg/50 pointer-events-none"></div>
          <Outlet context={{selectedCategory, setSelectedCategory, cartProducts, setCartProducts, wishProducts, setWishProducts}} />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </>
  )
}
