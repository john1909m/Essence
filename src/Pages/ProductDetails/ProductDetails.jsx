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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images?.map((image, index) => (
                <div key={index} className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900">Category:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.category}</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900">Brand:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.brand}</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900">Rating:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.rating} / 5</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm font-medium text-gray-900">Stock:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.stock} units</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                onClick={addToCart}
                className="flex-1 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
              <button
                onClick={addToWishlist}
                className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 