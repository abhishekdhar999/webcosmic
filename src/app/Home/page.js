"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import './globals.css'
import Link from 'next/link';
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedList from '@/Components/AnimatedList/AnimatedList';

import dynamic from 'next/dynamic';
import Productspage from '@/Components/products/products';
// import BlobMarquee from '@/Components/BlobMarquee/BlobMarquee';
import { BlogSection } from '@/Components/Blogs/BlogsSection';
import OurServicesComponent from '@/Components/OurServicesComponents/OurServicesComponents';
import Reviews from '@/Components/Reviews/Reviews';
import TestimonialSection from '@/Components/Testimonials/TestimonialsSection';

import { ServicesSection } from '@/Components/Services/Services';
// const Model = dynamic(() => import('@/Components/Model/Model'), { ssr: false });
gsap.registerPlugin(TextPlugin);
const name = "Start Your Project"

export default function Homepage({loading}) {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className='relative flex flex-col items-center justify-center h-screen p-4 sm:mt-[-45px] mt-[105px] '>

      <div className="absolute top-28  right-[-10px] mt-0 mr-4 sm:mt-0 sm:mr-8">
          <img className="lg:block hidden h-24 w-24 sm:h-[150px] sm:w-[150px]     " src="homepageimages/stars.png" alt="Stars" />
        </div>
       
        <h1 ref={headingRef} className='text-4xl md:text-7xl font-extrabold font-serif text-gray-300 absolute top-[150px] md:top-[200px] mx-4 md:mx-12 left-4 md:left-[50px] z-10 hidden sm:block'>
          <span className='flex'>
            WEB C <span className='mr-[-60px] md:mr-[-110px] ml-[-60px] md:ml-[-110px] mt-[-25px] md:mt-[-55px]'><img className='h-[90px] md:h-[180px]' src="saturnHome.png" alt="Logo" /></span> SMIC
          </span>
        </h1>
        
        <h1 className='text-base md:text-lg font-extrabold font-serif text-gray-300 absolute top-[220px] md:top-[300px] left-4 md:left-[50px] mx-8 md:mx-16 z-10 hidden md:block'>
          {/* <AnimatedList words={['Word1', 'Word2', 'Word3', 'Word4', 'Word5']} /> */}
        </h1>
{/* for mobile */}
        <div className='text-container flex  items-center mt-[-80px] sm:hidden '>
          <h1 className='emerging-text text-3xl md:text-6xl font-extrabold font-serif text-blue-300 bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text mt-4'>
            WEB COSMIC
          </h1>
        </div>
        {/* 3D Model */}
        <div className='flex-1 w-full sm:mt-[-30px]  md:h-[600px] md:w-[600px] relative'>
          {/* <Blob /> */}
          {/* <Model /> */}
        </div>

        {/* Responsive text for mobile view */}
        

        <div className='absolute left-8 md:left-24 bottom-20 md:bottom-40'>
          <Link href={"/Contacts"}>
          <div className='gradient-border flex bg-transparent border-2 border-gray-300 p-3 pl-6 pr-6 rounded-full'>
           
          </div>
          </Link>
        </div>

        {/* Right Bottom Text */}
        <div className='absolute right-8 md:right-20 bottom-24 md:bottom-40 w-3/4 md:w-1/3 text-left text-gray-300 bg-black hidden md:block font-thin rounded-xl bg-opacity-50 p-4 shadow-lg shadow-[#c367ca]'>
          Lets face it, first impressions matter. Your websites an opportunity to wow your audience, so why choose bad design? Brands win over fans when theyre brave enough to go beyond their creative comfort zone.
        </div>
      </div>

      <div>
<OurServicesComponent loading={loading}></OurServicesComponent>
      </div>
      <div>
        <Productspage></Productspage>
      </div>
      <div>
<ServicesSection></ServicesSection>
      </div>
      {/* <div>
<BlobMarquee></BlobMarquee>
      </div> */}
      <div>
<BlogSection></BlogSection>
      </div>
      <div>
<Reviews></Reviews>
      </div>
      <div>
        <TestimonialSection></TestimonialSection>
      </div>
      
    </>
  );
}
