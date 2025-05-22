import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogPanel,DialogTitle,DialogBackdrop  } from '@headlessui/react'
import { useToast } from '../../Context/ToastContext'
import { useAuth } from '../../Context/AuthContext'
import Login from '../Auth/Login'
import Register from '../Auth/Register'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar({cartProducts,setCartProducts,wishProducts,setWishProducts,setSelectedCategory}) {
  const { showToast } = useToast();
  const { user, isAuthenticated, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);





  const initialNavigation = [
 
    { name: 'Home', href: '/', current: true },
    { 
      name: 'All Products', 
      href: '#', 
      current: false,
      submenu: [
        { name: 'All Products', href: '/products/all-products:' },
        { name: 'beauty', href: '/products/:beauty' },
        { name: 'fragrances', href: '/products/:fragrances' },
        { name: 'furniture', href: `/products/:furniture` },
        { name: 'groceries', href: '/products/:groceries' },
        { name: 'home-decoration', href: '/products/:home-decoration' },
        { name: 'kitchen-accessories', href: '/products/:kitchen-accessories' },
        { name: 'laptops', href: '/products/:laptops' },
        { name: 'mens-shirts', href: '/products/:mens-shirts' },
        { name: 'mens-shoes', href: '/products/:mens-shoes' },
        { name: 'mens-watches', href: '/products/:mens-watches' },
        { name: 'mobile-accessories', href: '/products/:mobile-accessories' },
        { name: 'motorcycle', href: '/products/:motorcycle' },
        { name: 'skin-care', href: '/products/:skin-care' },
        { name: 'smartphones', href: '/products/:smartphones' },
        { name: 'sports-accessories', href: '/products/:sports-accessories' },
        { name: 'sunglasses', href: '/products/:sunglasses' },
        { name: 'tablets', href: '/products/:tablets' },
        { name: 'tops', href: '/products/:tops' },
        { name: 'vehicle', href: '/products/:vehicle' },
        { name: 'womens-bags', href: '/products/:womens-bags' },
        { name: 'womens-dresses', href: '/products/:womens-dresses' },
        { name: 'womens-jewellery', href: '/products/:womens-jewellery' },
        { name: 'womens-shoes', href: '/products/:womens-shoes' },
        { name: 'womens-watches', href: '/products/:womens-watches' },
        
      ]
    },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
  

  // console.log(catParams);

  const [navigation, setNavigation] = useState(initialNavigation)
  const [isOpen,setIsOpen]=useState(false)
  const [RegIsOpen,setRegIsOpen]=useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)



  const products = cartProducts || []
  const wishlistItems = wishProducts || []

  useEffect(()=>{
    const wishStored=localStorage.getItem("wishList")
    const cartStored=localStorage.getItem("cartProducts")
    if (wishStored){
      setWishProducts(JSON.parse(wishStored))
      
      
    }
    else{
      setWishProducts([])
    }
    if(cartStored){
      setCartProducts(JSON.parse(cartStored))
    }
    else{
      setCartProducts([])
    }
  },[setWishProducts,setCartProducts])
  function openCartModal(){
    setCartOpen(true)
  }
  function openLoginModal() {
    setIsLoginOpen(true);
  }
  function closeLoginModal() {
    setIsLoginOpen(false);
  }
  function openRegisterModal() {
    setIsRegisterOpen(true);
  }
  function closeRegisterModal() {
    setIsRegisterOpen(false);
  }
  function switchToLogin() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }
  function switchToRegister() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }
  const handleItemClick = (clickedItem) => {
    setNavigation(navigation.map(item => ({
      ...item,
      current: item.name === clickedItem.name
    })))
  }

  // Update cart removal to show toast
  const removeFromCart = (product) => {
    setCartProducts(prev => {
      const index = prev.findIndex(item => item.id === product.id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        showToast(`${product.title} removed from cart`, 'success');
        return newCart;
      }
      return prev;
    });
  }

  // Update wishlist to cart operation to allow duplicates
  const moveToCart = (item) => {
    setCartProducts(prev => {
      // Always add the item, no duplicate check
      showToast(`${item.title || item.name} moved to cart`, 'success');
      return [...prev, {
        id: item.id,
        title: item.title || item.name,
        price: item.price,
        imageSrc: item.imageSrc,
      }];
    });
  }

  // Update wishlist removal to show toast
  const removeFromWishlist = (item) => {
    setWishProducts(prev => {
      const index = prev.findIndex(product => product.id === item.id);
      if (index >= 0) {
        const newWishlist = [...prev];
        newWishlist.splice(index, 1);
        showToast(`${item.title || item.name} removed from wishlist`, 'success');
        return newWishlist;
      }
      return prev;
    });
  }

  const handleLogout = () => {
    logout();
    showToast('Successfully logged out!', 'success');
  };

  return (

<>
{/* -------------------WishList-------------------------- */}
<Transition show={wishlistOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setWishlistOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white dark:bg-dark-surface-secondary shadow-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-dark-surface-secondary shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-dark-text">Your Wishlist</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setWishlistOpen(false)}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200 dark:divide-dark-border">
                            {wishlistItems.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="size-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-dark-text">
                                      <h3>
                                        <a href={item.href} className="hover:text-indigo-600 dark:hover:text-dark-primary transition-colors">{item.name || item.title}</a>
                                      </h3>
                                      <p className="ml-4 text-indigo-600 dark:text-dark-primary">${item.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex space-x-4">
                                      <button
                                        onClick={() => moveToCart(item)}
                                        type="button"
                                        className="font-medium text-indigo-600 dark:text-dark-primary hover:text-indigo-500 dark:hover:text-dark-primary-hover transition-colors"
                                      >
                                        Move to Cart
                                      </button>
                                      <button
                                        onClick={() => removeFromWishlist(item)}
                                        type="button"
                                        className="font-medium text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-dark-border px-4 py-6 sm:px-6">
                      <div className="mt-6">
                        <Link
                          to="#"
                          onClick={() => {
                            setWishlistOpen(false);
                            openCartModal();
                          }}
                          className="flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                        >
                          Go To Cart
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            onClick={() => setWishlistOpen(false)}
                            className="font-medium text-indigo-600 dark:text-dark-primary hover:text-indigo-500 dark:hover:text-dark-primary-hover transition-colors"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>




{/* -------------------Cart-------------------------- */}

<Transition show={cartOpen} as={Fragment}>
  <Dialog as="div" className="relative z-30" onClose={setCartOpen}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300 sm:duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white dark:bg-dark-surface-secondary shadow-2xl">
              <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-dark-surface-secondary shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-dark-text">Shopping cart</Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setCartOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200 dark:divide-dark-border">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border">
                              <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900 dark:text-dark-text">
                                  <h3>
                                    <a href={product.href} className="hover:text-indigo-600 dark:hover:text-dark-primary transition-colors">{product.title}</a>
                                  </h3>
                                  <p className="ml-4 text-indigo-600 dark:text-dark-primary">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex">
                                  <button 
                                    onClick={() => removeFromCart(product)}
                                    type="button" 
                                    className="font-medium text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-dark-border px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900 dark:text-dark-text">
                    <p>Subtotal</p>
                    <p className="text-indigo-600 dark:text-dark-primary">${products.reduce((total, product) => total + Number(product.price), 0)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6" onClick={() => setCartOpen(false)}>
                    <Link
                      to="/checkout"
                      state={{ cartProducts: products }}
                      className="flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setCartOpen(false)}
                        className="font-medium text-indigo-600 dark:text-dark-primary hover:text-indigo-500 dark:hover:text-dark-primary-hover transition-colors"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  </Dialog>
</Transition>



{/* -------------------Login Modal-------------------------- */}

<Transition show={isLoginOpen} as={Fragment}>
  <Dialog as="div" className="relative z-50" onClose={() => setIsLoginOpen(false)}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm transition-opacity" />
    </Transition.Child>

    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-dark-surface-secondary px-4 pb-4 pt-5 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <Login onClose={() => setIsLoginOpen(false)} onSwitchToRegister={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }} />
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>



{/* -------------------Register Modal-------------------------- */}

    <Transition show={isRegisterOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsRegisterOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>


        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-dark-surface-secondary px-4 pb-4 pt-5 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <Register onClose={() => setIsRegisterOpen(false)} onSwitchToLogin={() => {
                  setIsRegisterOpen(false);
                  setIsLoginOpen(true);
                }} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>

    



{/* -------------------NavBar-------------------------- */}

    <Disclosure as="nav" className="bg-white/80 dark:bg-dark-surface/80 border-b border-gray-200 dark:border-dark-border shadow-lg fixed z-20 w-full backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-indigo-600 dark:text-dark-primary hover:bg-indigo-50 dark:hover:bg-dark-primary/10 transition-all hover:text-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo and main navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="shrink-0 items-center mt-2 hidden md:flex">
              <img
                alt="Your Company"
                src="/images/logo.png.webp"
                className="h-8 w-auto dark:invert dark:brightness-[0.85] dark:contrast-[1.15] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => 
                  item.submenu ? (
                    <Menu as="div" key={item.name} className="relative">
                      <MenuButton
                        onClick={() => handleItemClick(item)}
                        className={classNames(
                          item.current 
                            ? 'bg-indigo-600 text-white shadow-md' 
                            : 'text-gray-700 dark:text-dark-text hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:text-indigo-700 dark:hover:text-dark-primary',
                          'rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out flex items-center gap-1'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                      </MenuButton>

                      <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute grid grid-cols-3 left-0 z-10 mt-2 w-[50vw] max-h-[60vh] overflow-y-auto origin-top-left rounded-2xl bg-white dark:bg-dark-surface-secondary py-2 shadow-xl ring-1 ring-black/5 dark:ring-dark-border focus:outline-none">
                          {item.submenu.map((subItem) => (
                            <MenuItem key={subItem.name}>
                              {({ focus }) => (
                                <Link
                                  to={subItem.href}
                                  onClick={() => {
                                    handleItemClick(item);
                                    setSelectedCategory(subItem.name);
                                  }}
                                  className={classNames(
                                    focus 
                                      ? 'bg-indigo-50 dark:bg-dark-primary/20' 
                                      : '',
                                    'block px-4 py-2.5 text-sm text-gray-700 dark:text-dark-text hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:text-indigo-700 dark:hover:text-dark-primary transition-all duration-200'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleItemClick(item)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current 
                          ? 'bg-indigo-600 text-white shadow-md' 
                          : 'text-gray-700 dark:text-dark-text hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:text-indigo-700 dark:hover:text-dark-primary',
                        'rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right side icons and buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
            {/* Wishlist icon */}
            <button
              onClick={() => setWishlistOpen(true)}
              type="button"
              className="relative rounded-xl p-2 text-gray-700 dark:text-dark-text hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:text-indigo-700 dark:hover:text-dark-primary transition-all duration-200"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View wishlist</span>
              <HeartIcon className="size-6" />
            </button>

            {/* Cart icon */}
            <button
              onClick={openCartModal}
              type="button"
              className="relative rounded-xl p-2 text-gray-700 dark:text-dark-text hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:text-indigo-700 dark:hover:text-dark-primary transition-all duration-200"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart</span>
              <ShoppingBagIcon className="size-6" />
            </button>

            {/* Auth buttons */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 dark:text-dark-text">Welcome, {user.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="hidden md:block rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="hidden md:block rounded-xl bg-white dark:bg-dark-surface-secondary px-4 py-2 text-sm font-medium text-indigo-600 dark:text-dark-primary border border-indigo-600 dark:border-dark-primary shadow-sm hover:bg-indigo-50 dark:hover:bg-dark-primary/10 hover:shadow-md transition-all duration-200"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <DisclosurePanel className="sm:hidden max-h-[80vh] overflow-y-auto">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                item.submenu ? (
                  <Disclosure key={item.name} as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          as="button"
                          onClick={() => handleItemClick(item)}
                          className={classNames(
                            item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white',
                            'flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out'
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'ml-1 h-4 w-4 transition-transform duration-200'
                            )}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="ml-4 space-y-1 max-h-[40vh] overflow-y-auto pr-2 bg-indigo-50 rounded-md py-2 my-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setSelectedCategory(subItem.name)}
                              className="block rounded-md px-3 py-2 text-base font-medium text-indigo-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-all"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleItemClick(item)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 dark:text-gray-300 hover:bg-indigo-600 hover:text-white',
                      'flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile login button - shown only in mobile menu */}
              {!isAuthenticated && (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsRegisterOpen(true)}
                    className="block w-full rounded-md bg-indigo-900 px-3 py-2 text-base font-medium text-white hover:bg-indigo-800"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </DisclosurePanel>
        </Transition>
      </div>
    </Disclosure>



</>



  )
}