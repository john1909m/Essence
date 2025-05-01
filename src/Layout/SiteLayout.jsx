import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

import Footer from '../Components/Footer/Footer'
export default function SiteLayout() {


  const [cartProducts,setCartProducts]=useState([])
  const [wishProducts,setWishProducts]=useState([])


  return (
<>
    <Navbar cartProducts={cartProducts} setCartProducts={setCartProducts} wishProducts={wishProducts} setWishProducts={setWishProducts}></Navbar>
    <div className='h-[7vh]'></div>
    <Outlet context={{cartProducts,setCartProducts,wishProducts,setWishProducts}}></Outlet>
    <Footer></Footer>
</>
  )
}
