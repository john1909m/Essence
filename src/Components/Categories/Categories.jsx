import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/products/:mens-shirts" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                style={{backgroundImage:'url("/images/original.jpg")'}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  Clothing
                </h3>
                <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-8px] transition-all duration-300">
                  Explore our latest fashion collection
                </p>
              </div>
            </div>
          </Link>

          <Link to="/products/:mens-shoes" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                style={{backgroundImage:'url("/images/image23.jpg")'}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  Shoes
                </h3>
                <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-8px] transition-all duration-300">
                  Step into style with our footwear
                </p>
              </div>
            </div>
          </Link>

          <Link to="/products/:womens-jewellery" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                style={{backgroundImage:'url("/images/jewelry-accessories-model-diamond-bracelet-22180098.webp")'}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  Accessories
                </h3>
                <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-8px] transition-all duration-300">
                  Complete your look with our accessories
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
