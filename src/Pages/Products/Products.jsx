import React, { useState,Fragment,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition,Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const categories = [
    { name: 'All Products', href: '' },
      { name: 'beauty', href: 'beauty' },
      { name: 'fragrances', href: 'fragrances' },
      { name: 'furniture', href: 'furniture' },
      { name: 'groceries', href: 'groceries' },
      { name: 'home-decoration', href: 'home-decoration' },
      { name: 'kitchen-accessories', href: 'kitchen-accessories' },
      { name: 'laptops', href: 'laptops' },
      { name: 'mens-shirts', href: 'mens-shirts' },
      { name: 'mens-shoes', href: 'mens-shoes' },
      { name: 'mens-watches', href: 'mens-watches' },
      { name: 'mobile-accessories', href: 'mobile-accessories' },
      { name: 'motorcycle', href: 'motorcycle' },
      { name: 'skin-care', href: 'skin-care' },
      { name: 'smartphones', href: 'smartphones' },
      { name: 'sports-accessories', href: 'sports-accessories' },
      { name: 'sunglasses', href: 'sunglasses' },
      { name: 'tablets', href: 'tablets' },
      { name: 'tops', href: 'tops' },
      { name: 'vehicle', href: 'vehicle' },
      { name: 'womens-bags', href: 'womens-bags' },
      { name: 'womens-dresses', href: 'womens-dresses' },
      { name: 'womens-jewellery', href: 'womens-jewellery' },
      { name: 'womens-shoes', href: 'womens-shoes' },
      { name: 'womens-watches', href: 'womens-watches' },
  ];
  let [products , setProducts]=useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    const apiUrl = selectedCategory 
      ? `https://dummyjson.com/products/category/${selectedCategory}`
      : 'https://dummyjson.com/products';
    
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [selectedCategory]);

  const handleCategoryClick = (categoryHref) => {
    setSelectedCategory(categoryHref);
    setMobileFiltersOpen(false);
  };
  console.log(products);
  
  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Categories</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile Categories */}
                <div className="mt-4 border-t border-gray-200">
                  <ul className="px-2 py-3 font-medium text-gray-900">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                      onClick={() => handleCategoryClick(category.href)}
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.href
                          ? 'bg-indigo-100 text-indigo-600 font-medium'
                          : 'text-gray-600 hover:bg-indigo-50'
                      }`}
                    >
                      {category.name}
                    </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>

          {/* Mobile filter button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop Categories */}
            <div className="hidden lg:block">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-4 border-r border-gray-200 pr-4">
                {categories.map((category) => (
                  <li key={category.name} onClick={()=>{handleCategoryClick(category.href) ;setMobileFiltersOpen(false)}}>
                    <button
                      onClick={() => handleCategoryClick(category.href)}
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.href
                          ? 'bg-indigo-100 text-indigo-600 font-medium'
                          : 'text-gray-600 hover:bg-indigo-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="px-2">
                        <ProductCard className=""
                          name={product.title}
                          href={product.href}
                          price={product.price}
                          category={product.category}
                          imageSrc={product.thumbnail}
                          imageAlt={product.imageAlt}
                        />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}