import React from 'react';
import { Link, useLocation,useLoaderData } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function PaymentPage() {
    const loaderData = useLoaderData();
    const location = useLocation();
    
    const cartProducts = loaderData?.cartProducts || location.state?.cartProducts || [];
  // Calculate total
  const subtotal = cartProducts.reduce((total, product) => {
    const price = typeof product.price === 'string' 
      ? parseFloat(product.price.replace('$', '')) 
      : product.price;
    return total + (price || 0);
  }, 0);
  
  const shipping = 5.99; // Example shipping cost
  const tax = subtotal * 0.1; // Example 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">Checkout</h1>
          <Link to="/cart" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
            ← Back to cart
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Order Summary */}
          <div className="lg:order-2 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Order</h2>
            <div className="bg-indigo-50 rounded-lg p-6">
              <ul className="divide-y divide-indigo-200">
                {cartProducts.map((product) => (
                  <li key={product.id} className="py-4 flex">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc || product.thumbnail}
                        alt={product.title || product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          {product.title || product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{product.category || product.color}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between">
                        <p className="text-sm text-gray-500">Qty 1</p>
                        <p className="text-base font-medium text-gray-900">
                          ${typeof product.price === 'string' 
                            ? parseFloat(product.price.replace('$', '')).toFixed(2)
                            : product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-indigo-200 mt-6 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <p>Tax</p>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-indigo-900 mt-4 pt-4 border-t border-indigo-200">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:order-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
            <div className="bg-indigo-50 rounded-lg p-6">
              {/* Apple Pay Button */}
              <button
                className="w-full bg-black text-white rounded-md py-3 px-4 mb-6 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Pay with Apple Pay
              </button>

              <div className="text-center text-gray-500 mb-6">- OR -</div>

              {/* Payment Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors mt-6"
                >
                  Pay ${total.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}