import React from 'react'
import { Link } from 'react-router-dom'

export default function SaleSection() {
    
    
  return (
    <>
        <div className="sale flex justify-center items-center">
            <div className="saleCard rounded-lg overflow-hidden shadow-lg w-[80vw] max-md:flex-col flex justify-between bg-gradient-to-r from-indigo-500 via-indigo-30 to-transparent max-md:h-[70vh]">
                <div className="saleCardImage max-md:w-[100%] max-lg:w-[50%] lg:w-[50%] lg:h-[100%] max-md:h-[60%] overflow-hidden">
                    <img src="/images/clothes.jpg" className='w-full h-full' alt="" />
                </div>
                <div className="saleCardContent w-[45%] max-md:pb-5 max-md:pl-5 max-md:h-[35%] max-md:w-[100%] flex flex-col md:gap-5 max-md:gap-1 justify-center items-start">
                    <h3 className='text-[35px] max-md:text-[25px] text-red-800 font-bold bg-yellow-300 rounded-lg'>-60%</h3>
                    <h2 className='md:text-[55px] max-md:text-[30px]  font-bold'>Global Sale</h2>
                    <Link to="/products" className='flex justify-center max-lg:w-[40%] lg:w-[50%] max-md:w-[60%] bg-indigo-700 max-lg:h-[10%] lg:h-[15%] max-md:h-[30%] rounded-lg text-lg font-bold text-white hover:bg-indigo-500 transition-all'>
                    <button onClick={()=>{
                        
                    }}>BUY NOW</button>
                    </Link>
                </div>

            </div>
        </div>
        <div className='h-[5vh]'></div>
    </>
  )
}
