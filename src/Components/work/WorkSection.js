import React from 'react';

export default function WorkSection({ worksData }) {
  return (
    <div className="w-full col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 md:p-6 bg-background">
        {worksData.map((work, index) => (
          <a
            key={index}
            href={work.link}
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                {work.heading}
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                {work.year}
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div>
              <img
                src={work.image}
                alt={work.name}
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
