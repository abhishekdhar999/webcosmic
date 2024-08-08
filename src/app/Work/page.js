import React from 'react';


import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Image from 'next/image';
export default function Page() {
  const data = [
    {
heading:"BIOQUENCH",
image:"workImages/bioquench.jpg",
year:"2024",
description:"VISIT BIOQUENCH WEBSITE",
link:"https://bioquench.in/"
    },
    {
      heading:"ELITE MUSCLES",
      image:"workImages/elitemuscle.png",
      year:"2024",
      description:"VISIT ELITE MUSCLES WEBSITE",
      link:"https://elitemuscles.store/"
          },
          {
            heading:"BETR",
            image:"workImages/betr.png",
            year:"2024",
            description:"VISIT BETR WEBSITE",
            link:"https://betr-seven.vercel.app/"
                },
                {
                  heading:"STUDYWAVE",
                  image:"workImages/studywave.png",
                  year:"2024",
                  description:"VISIT STUDYWAVE WEBSITE ",
                  link:"https://thestudywave.com/"
                      },
                      {
                        heading:"MAXXON",
                        image:"workImages/maxxon.png",
                        year:"2023",
                        description:"VISIT MAXXON WEBSITE ",
                        link:"https://maxxon.in/"
                            },
                            {
                              heading:"TYCOON IMMIGRATION",
                              image:"workImages/tycoonimmigration.png",
                              year:"2023",
                              description:"VISIT TYCOON IMMIGRATION WEBSITE ",
                              link:"https://tycoonimmigration.com/"
                                  }
  ]
  return (
<>
<Navbar></Navbar>
<div className='headind  flex sm:flex-row flex-col sm:mx-12 mx-2 mt-16'>
  <div className='left sm:w-2/3'>
  <h1 className='sm:text-4xl lg:text-6xl' > <span className='sm:text-6xl '></span>Explore our curated selection of projects<span className='text-[#9072d1]'> that showcase our commitment to excellence and innovation.</span>   <span className='sm:text-6xl'></span>

</h1>
</div>
<div className='right '>
  <img src="workImages/3d-metal-star-isolated_1308-119601-removebg-preview.png" alt="" />
</div>

</div>

<div className="middle  mx-auto max-w-screen-xl px-4 py-8 my-16">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    {/* <!-- Left Section --> */}
    <div className="left flex  items-center w-full md:w-1/2">
      <div className="border-l-2 border-gray-300 h-full pl-4">
        <h1 className="text-4xl my-12 font-bold text-left mx-2"> W<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">O</span>RK</h1>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="right flex-1 w-full md:w-1/2">
      <p className="font-thin text-lg text-center md:text-left">
      As a burgeoning freelance agency, we are committed to providing innovative and reliable solutions tailored to the unique needs of each client. With a strong foundation built on creativity and expertise, we pride ourselves on delivering exceptional service across diverse projects.
      </p>
    </div>
  </div>
</div>





<div className="w-full flex justify-center items-center col-span-12 px-auto sm:px-20 py-8 md:py-12 ">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://bioquench.in/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="w-[900px] flex items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                BIOQUENCH
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2024
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/bioquench.jpg"
                alt="BIOQUENCH"
                className=" object-cover"
                width={900}
                height={400}
              />
            </div>
          </a>
        
      </div>
    </div>

{/* second */}
    <div className="w-full flex justify-center  col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid w-[900px] grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://maxxon.in/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex w-[900px] items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                MAXXON
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2024
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/maxxon.png"
                alt="BIOQUENCH"
                className=" object-cover"
width={900}
height={400}
              />
            </div>
          </a>
        
      </div>
    </div>


{/* third */}
    <div className="w-full flex justify-center col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid w-[900px] grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://elitemuscles.store/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                ELITE MUSCLE
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2024
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/elitemuscle.png"
                alt="BIOQUENCH"
                className=" object-cover"
                width={900}
                height={400}
              />
            </div>
          </a>
        
      </div>
    </div>

{/* fourth */}
    <div className="w-full flex justify-center col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid w-[900px] grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://betr-seven.vercel.app/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                BETR
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2024
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/betr.png"
                alt="BIOQUENCH"
                className=" object-cover"
                width={900}
                height={400}
              />
            </div>
          </a>
        
      </div>
    </div>

{/* fifth */}
    <div className="w-full flex justify-center col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid w-[900px] grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://tycoonimmigration.com/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex  items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                TYCOON IMMIGRATION
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2023
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/tycoonimmigration.png"
                alt="BIOQUENCH"
                className=" object-cover"
                width={900}
                height={400}
              />
            </div>
          </a>
        
      </div>
    </div>

{/* sixth */}
<div className="w-full flex justify-center col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid w-[900px] grid-cols-1 sm:grid-cols-1 gap-6 p-4 md:p-6 bg-background">
        
          <a
           
            href="https://thestudywave.com/"
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex  items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                THE STUDY WAVE
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-600">
                2023
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 md:rounded-lg relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-4 md:p-8 opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 text-center text-base md:text-lg font-light">
                {work.description}
              </div> */}
              <Image
                src="/workImages/studywave.png"
                alt="BIOQUENCH"
                className=" object-cover"
                width={900}
                height={400}
              />
            </div>
          </a>
        
      </div>
    </div>

   
    
    <div className=''>
  <Footer></Footer>
</div>

    </>
  );
}
