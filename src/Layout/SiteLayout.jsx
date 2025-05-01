import React, { useState } from 'react'
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Footer from '../Components/Footer/Footer'
export default function SiteLayout() {
  const location=useLocation()
  const urlSplit=location.pathname.split(["/:",])
  const category=urlSplit[urlSplit.length-1]
  const [catParams,setCatParams]=useState(`/products/`)
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [cartProducts,setCartProducts]=useState([])
  const [wishProducts,setWishProducts]=useState([])


  return (
<>
    <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} catParams={catParams} setCatParams={setCatParams} cartProducts={cartProducts} setCartProducts={setCartProducts} wishProducts={wishProducts} setWishProducts={setWishProducts}></Navbar>
    <div className='h-[7vh]'></div>
    <Outlet context={{selectedCategory,setSelectedCategory,cartProducts,setCartProducts,wishProducts,setWishProducts}}></Outlet>
    <Footer></Footer>
</>
  )
}
