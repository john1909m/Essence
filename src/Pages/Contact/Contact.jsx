import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-indigo-100 dark:bg-dark-surface dark:bg-gradient-to-r dark:from-dark-surface dark:to-dark-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-900 dark:text-dark-primary sm:text-5xl">Contact Us</h1>
          <p className="mt-6 text-xl text-indigo-800 dark:text-dark-text max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Card - Address */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-dark-surface-secondary text-indigo-600 dark:text-dark-primary">
              <MapPinIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-indigo-900 dark:text-dark-primary">Address</h3>
            <p className="mt-2 text-base text-indigo-800 dark:text-dark-text-secondary">
              123 Commerce Street<br />
              Business City, BC 12345
            </p>
          </div>

          {/* Contact Card - Phone */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-dark-surface-secondary text-indigo-600 dark:text-dark-primary">
              <PhoneIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-indigo-900 dark:text-dark-primary">Phone</h3>
            <p className="mt-2 text-base text-indigo-800 dark:text-dark-text-secondary">
              +1 (555) 123-4567<br />
              Mon-Fri 9am-5pm
            </p>
          </div>

          {/* Contact Card - Email */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-dark-surface-secondary text-indigo-600 dark:text-dark-primary">
              <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-indigo-900 dark:text-dark-primary">Email</h3>
            <p className="mt-2 text-base text-indigo-800 dark:text-dark-text-secondary">
              hello@yourstore.com<br />
              support@yourstore.com
            </p>
          </div>

          {/* Contact Card - Hours */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-dark-surface-secondary text-indigo-600 dark:text-dark-primary">
              <ClockIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-indigo-900 dark:text-dark-primary">Hours</h3>
            <p className="mt-2 text-base text-indigo-800 dark:text-dark-text-secondary">
              Monday-Friday: 9am-6pm<br />
              Saturday: 10am-4pm
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-indigo-50 dark:bg-dark-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-indigo-900 dark:text-dark-primary">Send Us a Message</h2>
            <p className="mt-4 text-lg text-indigo-800 dark:text-dark-text-secondary">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="mt-12 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-indigo-800 dark:text-dark-text">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full rounded-md border-indigo-300 dark:border-dark-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-dark-input dark:text-dark-text p-2 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-indigo-800 dark:text-dark-text">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full rounded-md border-indigo-300 dark:border-dark-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-dark-input dark:text-dark-text p-2 transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-800 dark:text-dark-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-indigo-300 dark:border-dark-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-dark-input dark:text-dark-text p-2 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-indigo-800 dark:text-dark-text">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-indigo-300 dark:border-dark-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-dark-input dark:text-dark-text p-2 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-800 dark:text-dark-text">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-indigo-300 dark:border-dark-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-dark-input dark:text-dark-text p-2 transition-colors duration-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 dark:bg-dark-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-dark-primary-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 dark:text-dark-primary mb-12">Find Us</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg dark:shadow-dark-surface-secondary/50">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155732918656!2d-73.9878449242398!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689873904605!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}