import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useToast } from '../../Context/ToastContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setCartProducts, setWishProducts } = useOutletContext();
  const { showToast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    setCartProducts(prev => [...prev, {
      id: product.id,
      title: product.title,
      price: product.price,
      imageSrc: product.thumbnail
    }]);
    showToast(`${product.title} has been added to your cart`, 'success');
  };

  const addToWishlist = () => {
    setWishProducts(prev => [...prev, {
      id: product.id,
      title: product.title,
      price: product.price,
      imageSrc: product.thumbnail
    }]);
    showToast(`${product.title} has been added to your wishlist`, 'success');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl text-gray-700">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-surface-secondary">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images?.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-h-1 aspect-w-1 overflow-hidden rounded-xl bg-gray-100 dark:bg-dark-surface-secondary cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-indigo-500 dark:hover:ring-dark-primary"
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text">{product.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-indigo-600 dark:text-dark-primary">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700 dark:text-dark-text-secondary">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text">Category:</h3>
                <p className="ml-2 text-sm text-indigo-600 dark:text-dark-primary">{product.category}</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text">Brand:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.brand}</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text">Rating:</h3>
                <div className="ml-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    ({product.rating} out of 5)
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text">Stock:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.stock} units</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-x-3">
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200 dark:bg-dark-primary dark:hover:bg-dark-primary-hover"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-indigo-600 dark:border-dark-primary px-4 py-3 text-base font-medium text-indigo-600 dark:text-dark-primary shadow-sm hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:shadow-md transition-all duration-200"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-10 border-t border-gray-200 dark:border-dark-border pt-10">
              <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-700 dark:text-dark-text-secondary">Free shipping worldwide</li>
                  <li className="text-gray-700 dark:text-dark-text-secondary">30-day return policy</li>
                  <li className="text-gray-700 dark:text-dark-text-secondary">2-year warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 