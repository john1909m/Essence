import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
export default function SiteLayout() {
  return (
<>
    <Navbar></Navbar>
    <div className='h-[7vh]'></div>
    <Outlet></Outlet>
    <Footer></Footer>
</>
  )
}
