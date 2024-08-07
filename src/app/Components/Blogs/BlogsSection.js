import React from "react";
import Image from "next/image";

export const BlogSection = () => {
  return (
    <div className="bg-transparent py-16 lg:py-24">
      {/* Main container for the blog section */}
      <div className="relative px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Heading for the blog section */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Latest Articles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg sm:text-xl text-gray-400 sm:mt-4">
            This is your life and it&apos;s ending one minute @ a time...
          </p>
        </div>

        {/* Blog articles container */}
        <div className="mt-12 grid gap-8 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Individual blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <Image
                className="h-64 w-full object-cover"
                src="/BlogImages/blog1.jpeg"
                alt="Article Cover"
                width={400}
                height={300}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                  How an Outstanding Website Can Skyrocket Your Startups Growth!
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Second blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <Image
                className="h-64 w-full object-cover"
                src="/BlogImages/blog2.jpeg"
                alt="Article Cover"
                width={400}
                height={300}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                  Web Development Trends Small Business Owners Cant Affend to Overlook in 2024

                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Third blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <Image
                className="h-64 w-full object-cover"
                src="/BlogImages/blog3.jpeg"
                alt="Article Cover"
                width={400}
                height={300}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                  Game-Changing Web Development Tips to Propel Your Small Business Forward in 2024!

                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
