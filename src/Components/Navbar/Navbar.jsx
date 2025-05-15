import React, { useState , Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogPanel,DialogTitle,DialogBackdrop  } from '@headlessui/react'
import { useToast } from '../../Context/ToastContext'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar({cartProducts,setCartProducts,wishProducts,setWishProducts,setSelectedCategory}) {
  const { showToast } = useToast();





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
    setIsOpen(true)
  }
  function closeLoginModal() {
    setIsOpen(false)
  }
  function openRegisterModal() {
    setRegIsOpen(true)
  }
  function closeRegisterModal() {
    setRegIsOpen(false)
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

  // Update wishlist to cart operation to show toast
  const moveToCart = (item) => {
    setCartProducts(prev => {
      const exists = prev.some(product => product.id === item.id);
      if (exists) {
        showToast(`${item.title || item.name} is already in your cart`, 'error');
        return prev;
      } else {
        showToast(`${item.title || item.name} moved to cart`, 'success');
        return [...prev, {
          id: item.id,
          title: item.title || item.name,
          price: item.price,
          imageSrc: item.imageSrc,
        }];
      }
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
          <div className="fixed inset-0 bg-gray-500/75" />
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
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Your Wishlist</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setWishlistOpen(false)}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {wishlistItems.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="size-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.href}>{item.name || item.title}</a>
                                      </h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex space-x-4">
                                      <button
                                      onClick={()=>{

                                        moveToCart(item);
                                      }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Move to Cart
                                      </button>
                                      <button
                                      onClick={()=>{

                                        removeFromWishlist(item);
                                      }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
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

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-6">
                        <Link
                          to="#"
                          onClick={() => {
                            setWishlistOpen(false);
                            openCartModal();
                          }}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Go To Cart
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            onClick={() => setWishlistOpen(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
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
      <div className="fixed inset-0 bg-gray-500/75" />
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
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl"
            transition
              
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setCartOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.title}</a>
                                  </h3>
                                  <p className="ml-4">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                

                                <div className="flex">
                                  <button 
                                  onClick={()=>{
                                    removeFromCart(product);
                                  }}
                                   type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
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

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${products.reduce((total, product) => total + Number(product.price), 0)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6 " onClick={()=>{
                    setCartOpen(false)
                  }}>
                    <Link
                      to="/checkout"
                      
                      state={{ cartProducts: products }}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setCartOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
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

<Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeLoginModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>


        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-lg w-full space-y-4 bg-white p-12 rounded-xl shadow-xl">
              <p className='text-center font-bold text-[30px] underline'>Login</p>
              <form onSubmit={(e)=>{e.preventDefault}} action="" className='flex flex-col'>
                <input type="email" htmlFor="email" name='email' placeholder='Email Address' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2 mb-3' />
                <input type="Password" htmlFor="Password" name='Password' placeholder='Password' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2' />
                <p className='text-center mt-2'>Don't have an account? <a className='text-indigo-600 cursor-pointer' onClick={()=>{
                  closeLoginModal();
                  openRegisterModal();
                }}>Register</a></p>
                <button className='w-full bg-indigo-600 h-[8vh] mt-2 rounded-md text-white font-semibold text-[20px] hover:bg-indigo-800 transition-all hover:scale-105' type='submit'>Login</button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>



{/* -------------------Register Modal-------------------------- */}

    <Transition show={RegIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeRegisterModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>


        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-lg w-full space-y-4 bg-white p-12 rounded-xl shadow-xl">
              <p className='text-center font-bold text-[30px] underline'>Register</p>
              <form onSubmit={(e)=>{e.preventDefault}} action="" className='flex flex-col'>
              <input type="text" htmlFor="name" name='name' placeholder='Full Name' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2 mb-3' />
              <input type="number" htmlFor="number" name='number' placeholder='Phone Number' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2 mb-3' />

                <input type="email" htmlFor="email" name='email' placeholder='Email Address' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2 mb-3' />
                <input type="Password" htmlFor="Password" name='Password' placeholder='Password' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 rounded-md h-[7vh] pl-2 mb-3' />
                <input type="Password" htmlFor="ConfirmPassword" name='ConfirmPassword' placeholder='ConfirmPassword' className='border-b-2 focus:outline-none focus:-translate-y-1 transition-all border-indigo-700 mb-3 rounded-md h-[7vh] pl-2' />
                <p className='text-center mt-2'>Have an account? <a className='text-indigo-600 cursor-pointer'  onClick={()=>{
                  openLoginModal();
                  closeRegisterModal();
                }}>Login</a></p>
                <button className='w-full bg-indigo-600 h-[8vh] mt-2 rounded-md text-white font-semibold text-[20px] hover:bg-indigo-800 transition-all hover:scale-105' type='submit'>Register</button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>

    



{/* -------------------NavBar-------------------------- */}

    <Disclosure as="nav" className="bg-indigo-100 shadow-lg fixed z-20 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-indigo-600 hover:bg-indigo-700 transition-all hover:text-white focus:ring-2 focus:ring-indigo focus:outline-hidden focus:ring-inset">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo and main navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="/images/logo.png.webp"
                className="h-5 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  item.submenu ? (
                    <Menu as="div" key={item.name} className="relative">
                      
                      <MenuButton
                        onClick={() => handleItemClick(item) }
                        className={classNames(
                          item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 hover:bg-indigo-600 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out flex items-center'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </MenuButton>
                      {/* </Link> */}

                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute grid grid-cols-3 left-0 z-10 mt-2 w-[50vw] origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-indigo-700 focus:outline-hidden">
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
                                    focus ? 'bg-indigo-300 transition-all rounded-sm' : '',
                                    'block px-4 py-2 text-sm text-indigo-800'
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
                  <Link to={item.href}> <button
                      key={item.name}
                      onClick={() => handleItemClick(item)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 hover:bg-indigo-600 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out'
                      )}
                    >
                      {item.name}
                    </button></Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right side icons and buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            {/* Wishlist icon */}
            <button
            onClick={()=>{setWishlistOpen(true)}}
              type="button"
              className="relative rounded-full p-1 text-indigo-800 hover:bg-indigo-600 transition-all hover:text-white focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View wishlist</span>
              <HeartIcon className="size-6" />
            </button>

            {/* Cart icon */}
            <button
            onClick={openCartModal}
              type="button"
              className="relative rounded-full p-1 text-indigo-800 hover:bg-indigo-600 transition-all hover:text-white focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart</span>
              <ShoppingBagIcon className="size-6" />
            </button>

            {/* Login button - hidden on tablet and below (md breakpoint) */}
            <button
            onClick={openLoginModal}
              className="hidden md:block rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>

            {/* Register button - hidden on tablet and below (md breakpoint) */}
            <button
            onClick={openRegisterModal}
              className="hidden md:block rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-800 transition-colors"
            >
              Register
            </button>
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
          <DisclosurePanel className="sm:hidden">
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
                            item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 hover:bg-indigo-600 hover:text-white',
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
                        <DisclosurePanel className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setSelectedCategory(subItem.name)}
                              className="block rounded-md px-3 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-600 hover:text-white"
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
                      item.current ? 'bg-indigo-900 text-white' : 'text-indigo-800 hover:bg-indigo-600 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ease-in-out'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile login button - shown only in mobile menu */}
              <DisclosureButton
                as="button" 
                onClick={openLoginModal}
                className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700 text-left sm:hidden"
              >
                Login
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </Transition>
      </div>
    </Disclosure>



</>



  )
}