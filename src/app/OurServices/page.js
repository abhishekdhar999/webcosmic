"use client"
import React, { useRef } from 'react'
import Link from 'next/link';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { FiArrowRight } from "react-icons/fi";
import { BsFillMouse3Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdBroadcastOnPersonal } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { MdLightbulbCircle } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import BlobMarquee from '../Components/BlobMarquee/BlobMarquee';
import style from './OurServices.module.css'
export default function Page() {

  const webDesignRef = useRef(null);
  const appDesignRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const brandingRef = useRef(null);
  const graphicDesigningRef = useRef(null);
  const contentWritingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar></Navbar>



      <div className={`${style.rowOuter} overflow-hidden`}> {/* Use CSS Module class */}
        <div className={style.wrapper}> {/* Use CSS Module class */}

          <div className="flex sm:mt-64 md:mt-0 flex-col md:flex-row items-center justify-center w-full md:w-2/3 h-screen md:px-8 lg:px-16">
            <div className="order-2 md:order-1 flex-1 md:text-left text-center sm:p-4">


              <div className="about-heading mb-4">
              <h1 className="text-3xl sm:mt-0 mt-24 md:text-6xl lg:text-7xl font-bold leading-tight px-4 text-gray-800 dark:text-gray-100 ">
      Experience the Web Like Never Before: <br className="hidden md:block" />
      <span className="text-teal-500 dark:text-teal-300">
        Where the Ordinary Becomes Extraordinary
      </span>
    </h1>
              </div>
              
            </div>
          </div>

          <span className={`${style.shape} sm:block hidden overflow-hidden`} ></span> 
          <span className={`${style.shape} sm:block hidden`}></span> 
          <span className={`${style.shape} overflow-hidden`}></span> 
          <span className={`${style.shape} sm:block hidden`}></span> 
          <span className={style.shape} ></span> 
          <span className={style.shape}></span> 
        </div>
      </div>













      <div className="wrap mx-auto my-12 p-4 max-w-screen-xl">
      


        <div className="middle  mx-auto max-w-screen-xl px-4 py-8 my-36">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            {/* <!-- Left Section --> */}
            <div className="left flex  items-center w-full md:w-1/2">
              <div className="border-l-2 border-gray-300 h-full pl-4">
                <h1 className="text-4xl my-12 font-bold text-left mx-2 "><span className='bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text'>S</span>ER<span className='bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text'>V</span>IC<span className='bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text'>E</span>S</h1>
              </div>
            </div>

            {/* <!-- Right Section --> */}
            <div className="right flex-1 w-full md:w-1/2">
              <p className="font-thin text-lg text-center md:text-left teko text-gray-300">
                We turn the ordinary into the extraordinary. From website launches to
                digital marketing, our services are crafted to elevate your brand and
                drive success. Explore endless possibilities and let your business shine
                in the digital universe.
              </p>
            </div>
          </div>
        </div>
        <Link href={"/Contacts"}>
          <span className="fixed bottom-8 right-8 bg-gray-400 border-4 border-white rounded-xl shadow-lg p-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-semibold text-white  teko">Start your journey</h3>
              <span className="text-3xl text-white">
                <FiArrowRight />
              </span>
            </div>
          </span>
        </Link>
        <div className="end">
          <div className="first-row flex md:flex-row flex-col p-2 gap-4 lg:gap-12">
            <div onClick={() => scrollToSection(webDesignRef)} className=" service-card max-w-sm bg-white border shadow-xl shadow-gray-300 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span >
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/one.webp"
                  alt="webdesignanddevelopment"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    WEB DESIGN & DEVELOPMENT
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Crafting stunning websites and robust applications to elevate your
                  online presence.
                </p>
              </div>
            </div>

            <div onClick={() => scrollToSection(appDesignRef)} className="service-card max-w-sm bg-white border shadow-xl shadow-gray-300 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span >
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/two.webp"
                  alt="appdesignanddevelopment"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    APP DESIGN & DEVELOPMENT
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Designing intuitive and engaging apps that drive user experience and
                  business growth.
                </p>
              </div>
            </div>

            <div onClick={() => scrollToSection(digitalMarketingRef)} className="service-card max-w-sm bg-white shadow-xl shadow-gray-300 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span >
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/three.webp"
                  alt="digitalmarketing"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    DIGITAL MARKETING
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Driving growth with strategic digital marketing campaigns that
                  amplify your brands reach.
                </p>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="second-row my-6 flex md:flex-row flex-col p-2 gap-4 lg:gap-12">
            <div onClick={() => scrollToSection(brandingRef)} className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span>
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/four.webp"
                  alt="branding"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    BRANDING
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Building impactful brands with distinctive identities and compelling
                  stories.
                </p>
              </div>
            </div>

            <div onClick={() => scrollToSection(graphicDesigningRef)} className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span >
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/five.webp"
                  alt="graphicdesigning"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    GRAPHIC DESIGNING
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Creating persuasive and engaging content that resonates with your
                  audience and enhances your brand.
                </p>
              </div>
            </div>

            <div onClick={() => scrollToSection(contentWritingRef)} className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
              <span >
                <img
                  className="rounded-t-lg h-72"
                  src="/servicespageImage/six.webp"
                  alt="contentwriting"
                />
              </span>
              <div className="p-5">
                <span >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">
                    CONTENT WRITING
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  teko">
                  Designing visually striking graphics that capture attention and
                  communicate your message effectively.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* all services */}

        <div ref={webDesignRef} className=' web-services my-24'>
          <h1 className='allServiceHead text-4xl text-center my-12 '> WEB SERVICES</h1>

          <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">

                <SiPagespeedinsights class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">Landing Page Development</h5>
              </div>
            </a>



            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">

                <CgWebsite class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">ERP Development</h5>
              </div>
            </a>



            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">

                <IoMdCart class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">E-Commerce Website</h5>
              </div>
            </a>

          </div>

          <div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">

                <FaCode class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">Web Designing & Development</h5>
              </div>
            </a>



          </div>




          {/* digital marketing services */}

          <div ref={digitalMarketingRef} className='web-services'>
            <h1 className='allServiceHead text-4xl text-center my-12'> DIGITAL MARKETING SERVICES</h1>

            <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">

                  <MdEmail class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">SMO-Social Media Management</h5>
                </div>
              </a>



              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">
                  <FaSearch class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">SEO - Search Engine Optimization</h5>
                </div>
              </a>



              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">
                  <MdEmail class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">Email Marketing Services</h5>
                </div>
              </a>

            </div>

            <div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">
                  <BsFillMouse3Fill class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">PPC-Pay Per Click Advertising</h5>
                </div>
              </a>



              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">
                  <BsGraphUpArrow class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">SMM - Social Media Marketing Services</h5>
                </div>
              </a>

              <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex items-center space-x-4">
                  <MdOutlineMessage class="text-4xl text-gray-900 dark:text-white" />
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">SMS,Whatsapp & Calls(IVR) Marketing</h5>
                </div>
              </a>

            </div>

          </div>
        </div>


        {/* BRANDIG SERVICES */}

        <div ref={brandingRef} className='web-services'>
          <h1 className='allServiceHead text-4xl text-center my-12'> BRANDING SERVICES</h1>

          <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">
                <SiGooglemaps class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">Google Maps & Reviews</h5>
              </div>
            </a>



            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">
                <MdBroadcastOnPersonal class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Personal Branding</h5>
              </div>
            </a>



            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">
                <GiWireframeGlobe class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  teko">Online Reputation Management</h5>
              </div>
            </a>

          </div>

          <div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="flex items-center space-x-4">
                <FaNewspaper class="text-4xl text-gray-900 dark:text-white" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Press Release & News Publishing</h5>
              </div>
            </a>


          </div>

        </div>
      </div>


      {/* CONTENT MARKETING SERVICES */}

      <div ref={contentWritingRef} className='web-services'>
        <h1 className='allServiceHead text-4xl text-center my-12'> CONTENT MARKETING SERVICES</h1>

        <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <FaFileAlt class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Content Writing</h5>
            </div>
          </a>



          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <FiVideo class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Video Creation/Editing</h5>
            </div>
          </a>



          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <FaBloggerB class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Blog Management/Content Marketing</h5>
            </div>
          </a>
        </div>



      </div>

      {/* APP DEVELOPMENT SERVICES */}

      <div ref={appDesignRef} className='web-services'>
        <h1 className='allServiceHead text-4xl text-center my-12'> APP DEVELOPMENT SERVICES</h1>

        <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <ImAndroid class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Android Application Development</h5>
            </div>
          </a>

          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <FaApple class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">iOS Application Development</h5>
            </div>
          </a>




        </div>


      </div>


      <div ref={graphicDesigningRef} className='web-services'>
        <h1 className='allServiceHead text-4xl text-center my-12'> GRAPHIC DESIGNING SERVICES</h1>

        <div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <IoIosCreate class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Logo Designing</h5>
            </div>
          </a>



          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <AiOutlinePicture class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Poster Designing</h5>
            </div>
          </a>



          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-center space-x-4">
              <MdLightbulbCircle class="text-4xl text-gray-900 dark:text-white" />
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white teko">Add Creative Designing</h5>
            </div>
          </a>

        </div>

      </div>


      <div>
        <BlobMarquee></BlobMarquee>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}
