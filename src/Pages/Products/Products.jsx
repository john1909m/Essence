import React, { useState, Fragment, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function Products() {
  const { selectedCategory, setSelectedCategory } = useOutletContext();
  const location = useLocation();
  const categoryFromUrl = location.pathname.split('/products/')[1]?.replace(':', '') || 'all-products';
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { name: 'All Products', slug: 'all-products', href: '/products/all-products' },
    { name: 'beauty', slug: 'beauty', href: '/products/beauty' },
    { name: 'fragrances', slug: 'fragrances', href: '/products/fragrances' },
    { name: 'furniture', slug: 'furniture', href: '/products/furniture' },
    { name: 'groceries', slug: 'groceries', href: '/products/groceries' },
    { name: 'home-decoration', slug: 'home-decoration', href: '/products/home-decoration' },
    { name: 'kitchen-accessories', slug: 'kitchen-accessories', href: '/products/kitchen-accessories' },
    { name: 'laptops', slug: 'laptops', href: '/products/laptops' },
    { name: 'mens-shirts', slug: 'mens-shirts', href: '/products/mens-shirts' },
    { name: 'mens-shoes', slug: 'mens-shoes', href: '/products/mens-shoes' },
    { name: 'mens-watches', slug: 'mens-watches', href: '/products/mens-watches' },
    { name: 'mobile-accessories', slug: 'mobile-accessories', href: '/products/mobile-accessories' },
    { name: 'motorcycle', slug: 'motorcycle', href: '/products/motorcycle' },
    { name: 'skin-care', slug: 'skin-care', href: '/products/skin-care' },
    { name: 'smartphones', slug: 'smartphones', href: '/products/smartphones' },
    { name: 'sports-accessories', slug: 'sports-accessories', href: '/products/sports-accessories' },
    { name: 'sunglasses', slug: 'sunglasses', href: '/products/sunglasses' },
    { name: 'tablets', slug: 'tablets', href: '/products/tablets' },
    { name: 'tops', slug: 'tops', href: '/products/tops' },
    { name: 'vehicle', slug: 'vehicle', href: '/products/vehicle' },
    { name: 'womens-bags', slug: 'womens-bags', href: '/products/womens-bags' },
    { name: 'womens-dresses', slug: 'womens-dresses', href: '/products/womens-dresses' },
    { name: 'womens-jewellery', slug: 'womens-jewellery', href: '/products/womens-jewellery' },
    { name: 'womens-shoes', slug: 'womens-shoes', href: '/products/womens-shoes' },
    { name: 'womens-watches', slug: 'womens-watches', href: '/products/womens-watches' }
  ];

  useEffect(() => {
    setLoading(true);
    setSelectedCategory(categoryFromUrl);
    
    const apiUrl = categoryFromUrl !== 'all-products' 
      ? `https://dummyjson.com/products/category/${categoryFromUrl}`
      : 'https://dummyjson.com/products';
    
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [categoryFromUrl, setSelectedCategory]);

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setMobileFiltersOpen(false);
  };

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300">
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
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
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
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-dark-surface-secondary py-4 pb-12 shadow-2xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-dark-text">Categories</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-dark-surface-secondary p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4 border-t border-gray-200 dark:border-dark-border">
                  <ul className="px-2 py-3 font-medium text-gray-900 dark:text-dark-text">
                    {categories.map((category) => (
                      <li key={category.slug}>
                        <Link
                          to={category.href}
                          className={`block px-3 py-2 rounded-xl ${
                            selectedCategory === category.slug
                              ? 'bg-indigo-100 dark:bg-dark-primary/20 text-indigo-600 dark:text-dark-primary'
                              : 'text-gray-600 dark:text-dark-text-secondary hover:bg-indigo-50 dark:hover:bg-dark-primary/10'
                          } transition-all duration-200`}
                          onClick={() => handleCategoryClick(category.slug)}
                        >
                          {category.name}
                        </Link>
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
        <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-dark-border pb-6 pt-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-dark-text">
            {selectedCategory === 'all-products' ? 'All Products' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
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
              <h2 className="text-lg font-medium text-gray-900 dark:text-dark-text mb-4">Categories</h2>
              <ul className="space-y-2 border-r border-gray-200 dark:border-dark-border pr-4">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      to={category.href}
                      className={`group flex items-center w-full text-left px-3 py-2 rounded-xl ${
                        selectedCategory === category.slug
                          ? 'bg-indigo-100 dark:bg-dark-primary/20 text-indigo-600 dark:text-dark-primary font-medium'
                          : 'text-gray-600 dark:text-dark-text-secondary hover:bg-indigo-50 dark:hover:bg-dark-primary/10'
                      } transition-all duration-200`}
                      onClick={() => handleCategoryClick(category.slug)}
                    >
                      {category.name}
                      <ChevronRightIcon className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                        selectedCategory === category.slug ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500 dark:border-dark-primary"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="px-2 animate-fade-in-up">
                      <ProductCard
                        name={product.title}
                        id={product.id}
                        href={`/product/${product.id}`}
                        price={product.price}
                        category={product.category}
                        imageSrc={product.thumbnail}
                        imageAlt={product.description || product.title}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}