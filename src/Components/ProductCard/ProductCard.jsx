import React from 'react';

export default function ProductCard({name, href, imageAlt, imageSrc, price, color}) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-indigo-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700">
            <a href={href} className='font-bold'>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-lg text-gray-500">{color}</p>
        </div>
        <p className="text-lg font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}