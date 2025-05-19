import React from 'react'
import { Link } from 'react-router-dom'

export default function SaleSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-indigo-900/90" />
          
          <div className="relative flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src="/images/clothes.jpg" 
                alt="Sale Collection" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-red-800 font-bold rounded-xl text-2xl transform -rotate-3 shadow-lg">
                  -60% OFF
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Global Sale
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Don't miss out on our biggest sale of the year. Shop now and save big on your favorite items!
              </p>
              
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-dark-surface text-indigo-600 dark:text-indigo-400 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                Shop Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
