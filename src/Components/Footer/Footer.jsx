import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="bg-indigo-100 dark:bg-dark-surface border-t dark:border-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-7 sm:py-8 lg:px-8 lg:py-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Mission statement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-indigo-900 dark:text-dark-primary">
              Making the world a better place through constructing elegant hierarchies.
            </h2>
          </div>
          
         
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Solutions</h3>
                <ul className="mt-4 space-y-2">
                  {['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Support</h3>
                <ul className="mt-4 space-y-2">
                  {['Submit ticket', 'Documentation', 'Guides'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Company</h3>
                <ul className="mt-4 space-y-2">
                  {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-indigo-900 dark:text-dark-accent">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {['Terms of service', 'Privacy policy', 'License'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-indigo-700 dark:text-dark-text-secondary hover:text-indigo-900 dark:hover:text-dark-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="mt-16 border-t border-indigo-200 dark:border-dark-border pt-8">
          <p className="text-xs text-center leading-5 text-indigo-700 dark:text-dark-text-secondary">
            © 2024 John. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
