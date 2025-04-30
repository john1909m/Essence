import React from 'react'
export default function Categories() {
  return (
    <>
        <div className="categories flex justify-center">
            <div className="categoriesCardsWrapper grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w[80vw] md:w-[90vw] sm:w-[95vw] max-sm:w-[100vw] gap-10 ">
                <div className="categoryCard lg:w-[20vw] md:w-[40vw] sm:w-[80vw] max-sm:w-[90vw]  h-[40vh] bg-cover bg-top" style={{backgroundImage:'url("/public/images/original.jpg")'}}>
                    <div className="group cardOverlay bg-[rgba(0,0,0,0.2)] h-full flex justify-center items-center hover:bg-[rgba(255,255,255,0.5)] transition-all">
                        <h2 className='text-3xl font-bold text-white group-hover:text-indigo-700 group-hover:scale-110 transition-all'>Clothing</h2>
                    </div>
                </div>


                <div className="categoryCard lg:w-[20vw] md:w-[40vw] sm:w-[80vw] max-sm:w-[90vw] h-[40vh] bg-cover bg-top" style={{backgroundImage:'url("/public/images/image23.jpg")'}}>
                    <div className="group cardOverlay bg-[rgba(0,0,0,0.2)] h-full flex justify-center items-center hover:bg-[rgba(255,255,255,0.5)] transition-all">
                        <h2 className='text-3xl font-bold text-white group-hover:text-indigo-700 group-hover:scale-110 transition-all'>Shoes</h2>
                    </div>
                </div>



                <div className="categoryCard lg:w-[20vw] md:w-[40vw] sm:w-[80vw] max-sm:w-[90vw] h-[40vh] bg-cover bg-top" style={{backgroundImage:'url("/public/images/jewelry-accessories-model-diamond-bracelet-22180098.webp")'}}>
                    <div className="group cardOverlay bg-[rgba(0,0,0,0.2)] h-full flex justify-center items-center hover:bg-[rgba(255,255,255,0.5)] transition-all">
                        <h2 className='text-3xl font-bold text-white group-hover:text-indigo-700 group-hover:scale-110 transition-all'>Accessories</h2>
                    </div>
                </div>


            </div>

        </div>

        <div className='h-[5vh]'></div>
    </>
  )
}
