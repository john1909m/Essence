import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-white dark:from-dark-surface dark:to-dark-bg border-t border-gray-200 dark:border-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Newsletter Section */}
        <div className="mb-16 rounded-2xl bg-indigo-600 dark:bg-dark-primary/20 px-6 py-10 sm:py-16 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white dark:text-dark-text">Stay up to date</h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100 dark:text-dark-text-secondary">
              Get the latest news and updates about our products and services.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 dark:bg-dark-input dark:border-dark-border dark:text-dark-text"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-100 dark:text-dark-text-secondary">
              We care about your data. Read our{' '}
              <a href="#" className="font-medium text-white underline dark:text-dark-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Mission statement */}
          <div className="space-y-8">
            <img
              className="h-12 w-auto dark:invert dark:brightness-[0.85] dark:contrast-[1.15]"
              src="/images/logo.png.webp"
              alt="Your Company"
            />
            <p className="text-base text-indigo-700 dark:text-dark-text-secondary">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((item) => (
                <a key={item} href="#" className="text-indigo-600 dark:text-dark-primary hover:text-indigo-500 dark:hover:text-dark-primary-hover transition-colors">
                  <span className="sr-only">{item}</span>
                  <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-dark-primary/20 flex items-center justify-center">
                    <EnvelopeIcon className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Solutions</h3>
                <ul className="mt-6 space-y-4">
                  {['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Support</h3>
                <ul className="mt-6 space-y-4">
                  {['Submit ticket', 'Documentation', 'Guides'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Company</h3>
                <ul className="mt-6 space-y-4">
                  {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {['Privacy', 'Terms', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 dark:border-dark-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-indigo-700 dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} Essence, Inc. All rights reserved for John.
          </p>
        </div>
      </div>
    </footer>
  )
}
