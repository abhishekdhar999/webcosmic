"use client";

import React, { useEffect, useRef, useState } from react;
import gsap from "gsap";
import Link from next/link;
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedList from "@/app/Components/AnimatedList/AnimatedList";
import dynamic from next/dynamic;
import Productspage from "@/app/Components/products/products";
import { BlogSection } from "@/app/Components/Blogs/BlogsSection";
import OurServicesComponent from "@/app/Components/OurServicesComponents/OurServicesComponents";
import Reviews from "@/app/Components/Reviews/Reviews";
import TestimonialSection from "@/app/Components/Testimonials/TestimonialsSection";
 
 import BlobMarquee from "../Components/BlobMarquee/BlobMarquee";
import { ServicesSection } from "@/app/Components/Services/Services";
const Model = dynamic(() => import("../Components/Model/Model"), { ssr: false });
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
      <div className="flex flex-col md:flex-row justify-center items-center h-[100vh]   lg:px-16 md:mt-0  mt-[50px] ">
  {/* Left Section */}
  <div className="relative lg:w-1/2 md:w-2/3 flex flex-col justify-center items-start space-y-6 p-6">
  {/* Decorative Gradient Circles */}
  <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 rounded-full filter blur-xl"></div>
  <div className="absolute bottom-[-100px]  w-[250px] h-[250px] bg-gradient-to-bl from-purple-500 to-indigo-500 opacity-30 rounded-full filter blur-xl"></div>

  {/* Heading */}
  <div className="heading text-center md:text-left">
    <h1 className="head-1 text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-800 dark:text-yellow-600 leading-tight mb-4">
      WEBCOSMIC
    </h1>
  </div>

  {/* Animated List */}
  <div className="w-full text-center md:text-left">
    <h1 className="text-base md:text-lg font-extrabold font-serif text-gray-700 dark:text-gray-400 md:block hidden">
      <AnimatedList words={["Innovate", "Design", "Develop", "Deploy", "Inspire"]} />
    </h1>
  </div>

  {/* Descriptive Text */}
  <div className="text text-center ml-2 md:text-left text-gray-700 dark:text-gray-400 max-w-xl text-xl leading-relaxed md:block hidden">
    <p>
      Lets face it, first impressions matter. Your websites an opportunity to wow your audience, so why choose bad design? Brands win over fans when they are brave enough to go beyond their creative comfort zone.
    </p>
  </div>

  {/* Button */}
  <div className="button md:block hidden">
    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-200">
      Start Your Project
    </button>
  </div>
</div>

  {/* Right Section (3D Model) */}
  <div className="md:w-1/2 flex-1 w-full  h-full justify-center items-center">
    <Model />
  </div>
</div>

      {/* <div className="relative flex md:flex-col flex-row items-center justify-center h-screen p-4 sm:mt-[-45px] mt-[105px] ">
  
  <div className="flex flex-col w-full h-full justify-center items-center space-y-8">

  
    <div className="flex flex-col items-center justify-center w-full h-auto p-4 space-y-4">

      
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-serif text-gray-300"
      >
        WEBCOSMIC
      </h1>


      <h1 className="text-base md:text-lg font-extrabold font-serif text-gray-300">
        <AnimatedList words={["Word1", "Word2", "Word3", "Word4", "Word5"]} />
      </h1>

  
      <div className="w-full text-center text-gray-300 bg-black font-thin rounded-xl bg-opacity-50 text-xl px-8 py-4">
        Lets face it, first impressions matter. Your websites an opportunity to wow your audience, so why choose bad design? Brands win over fans when theyre brave enough to go beyond their creative comfort zone.
      </div>

     
      <div className="mt-6">
        <Link href="/Contacts">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start your project
            </span>
          </button>
        </Link>
      </div>
    </div>

    
    <div className="flex-1 w-full flex items-center justify-center relative">
      <Model />
    </div>

  </div>
</div> */}


      <div>
<OurServicesComponent loading={loading}></OurServicesComponent>
      </div>
      <div>
        <Productspage></Productspage>
      </div>
      <div>
<ServicesSection></ServicesSection>
      </div>
      
      <div>
<BlogSection></BlogSection>
      </div>
      <div>
<Reviews></Reviews>
      </div>
      <div>
        <TestimonialSection></TestimonialSection>
      </div>
      <div>
<BlobMarquee></BlobMarquee>
      </div>
    </>
  );
}
