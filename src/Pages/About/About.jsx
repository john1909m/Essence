import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Typically 3-5 business days for domestic orders. International shipping may take 7-14 business days."
  },
  {
    question: "What's your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship to over 100 countries worldwide with various shipping options available at checkout."
  }
];

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    bio: "Started this company in 2015 with a vision to create the best online shopping experience."
  },
  {
    name: "Sarah Williams",
    role: "Head of Customer Service",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    bio: "Dedicated to ensuring every customer has a perfect shopping experience with us."
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    bio: "Builds and maintains our platform to be fast, secure, and easy to use."
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-900 sm:text-5xl">Our Story</h1>
          <p className="mt-6 text-xl text-indigo-800 max-w-3xl mx-auto">
            Founded in 2015, we're passionate about bringing you quality products with exceptional service.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-indigo-900">Our Mission</h2>
            <p className="mt-4 text-lg text-indigo-800">
              To provide high-quality products at affordable prices while delivering an exceptional shopping experience that keeps customers coming back.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold text-indigo-900">Our Values</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                <p className="ml-3 text-base text-indigo-800">Customer satisfaction above all else</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                <p className="ml-3 text-base text-indigo-800">Ethical sourcing and sustainability</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                <p className="ml-3 text-base text-indigo-800">Continuous innovation and improvement</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover" src={person.image} alt={person.name} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900">{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                  <p className="mt-4 text-indigo-800">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto divide-y-2 divide-indigo-100">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="py-6">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-indigo-800">
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronDownIcon
                      className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-indigo-600`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-4 pr-12">
                    <p className="text-base text-indigo-700">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">
            <span className="block">Ready to shop?</span>
            <span className="block text-indigo-600">Start browsing our collection today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}