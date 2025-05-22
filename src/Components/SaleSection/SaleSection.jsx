import React from 'react'
import { Link } from 'react-router-dom'

export default function SaleSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 dark:from-indigo-900/90 dark:via-purple-900/90 dark:to-indigo-900/90 animate-gradient-x"></div>
          
          <div className="relative flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src="/images/clothes.jpg" 
                alt="Sale Collection" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                Summer Sale
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
                Up to 50% off on selected items. Limited time offer.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  to="/products/:all-products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/products/:all-products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
