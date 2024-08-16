"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
function OurServicesComponent({ loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const name = "View All Services";
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers:true,
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, [loading]);

  return (
    <>
      <div className="h-full sm:mb-0 ">
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-auto mx-0 md:space-x-4 space-y-6 md:space-y-0 my-16">
          {/* Left Section */}
          <div className="left text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[150px] ">
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                O
              </span>
              UR
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[150px]  mt-4 md:mt-0 md:ml-12">
              SE
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                R
              </span>
              VIC
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                E
              </span>
              S
            </h1>
          </div>
        </div>
        {!loading && (
          <section className="scroll-section-outer h-full">
            {/* The section up act just as a wrapper. If the trigger (below) is the first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and the animation should alway be two separated refs */}
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner ">
                {/* First Service Section */}
                <div className="scroll-section ">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-4 md:mx-12 lg:mx-36 ">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6 p-2">
                      <h1 className="teko text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6">
                        Web Design & Development
                      </h1>
                      <p className="teko text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden">
                        Building Digital Excellence. Our team of expert
                        developers and designers is dedicated to crafting
                        personalized web solutions that elevate your brands
                        online presence. We specialize in creating high-quality
                        websites and mobile applications tailored to your unique
                        business needs. By focusing on innovation, reliability,
                        and user experience, we deliver digital platforms that
                        are not only visually appealing but also technically
                        robust, ensuring your brand stands out in the digital
                        landscape.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Creative Web Design
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Web Development
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex sm:flex-wrap flex-col sm:flex-row gap-3 mt-3 md:mt-0">
                            <span className="inline-block rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out w-[200px] sm:w-auto teko">
                              E-commerce Website
                            </span>
                            <span className="inline-block rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out w-[120px] sm:w-auto teko">
                              WordPress
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <Image
                        className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640} // Actual width of the image
                        height={640} // Actual height of the image
                      />
                    </div>
                  </div>
                </div>

                {/* Second Service Section */}
                <div className="scroll-section">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-1 md:mx-12 lg:mx-36 my-8 p-6">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6 teko">
                        Digital Marketing
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden teko">
                        Driving Success Through Strategy. Our dynamic digital
                        marketing team crafts data-driven campaigns that elevate
                        your brands online presence. We specialize in SEO,
                        social media management, and targeted advertising to
                        boost engagement and conversions. With a focus on
                        creativity and analytics, we deliver impactful
                        strategies tailored to your business needs, ensuring
                        measurable growth and lasting success.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Motion Graphics
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Creative Campaigns
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Marketing Support
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Search Engine Optimization
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <Image
                        className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="/business-3639451-removebg-preview.png"
                        alt="Digital Marketing"
                        width={640} // Actual width of the image
                        height={640} // Actual height of the image
                      />
                    </div>
                  </div>
                </div>

                {/* Third Service Section */}
                <div className="scroll-section">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6 teko">
                        Branding
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden teko">
                        At the heart of every successful business is a
                        captivating brand. Our branding solutions are tailored
                        to capture your essence and vision, translating them
                        into compelling visuals and messaging. We specialize in
                        crafting logos, taglines, and brand guidelines that not
                        only look great but also communicate your unique story.
                        Whether youre a startup or an established company, our
                        goal is to enhance your brands presence and connect with
                        your audience on a deeper level.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out sm:w-auto w-[200px] teko">
                              Brand strategy
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Tone of voice
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Visual identity
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Press/News Release
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <Image
                        className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="/social-media-5187243_1920-removebg-preview.png"
                        alt="Digital Marketing"
                        width={640} // Actual width of the image
                        height={640} // Actual height of the image
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Service Section */}
                <div className="scroll-section ">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-1 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6 teko">
                        App Design & Development
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden teko">
                        Transform your ideas into intuitive, user-friendly apps
                        with our app design and development services. Our
                        talented team excels in creating seamless digital
                        experiences across platforms, from iOS to Android,
                        ensuring that your app meets the highest standards of
                        performance and aesthetics. We focus on user-centric
                        designs that enhance engagement and functionality,
                        bringing your vision to life with cutting-edge
                        technology and creativity. Whether its a startup app or
                        a complex enterprise solution, we deliver apps that not
                        only meet but exceed your expectations.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              App Development
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              Android Application
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              iOS Application
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out teko">
                              App Management
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <Image
                        className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="/android-mobile-app-development-7815022_1280.png"
                        width={640} // Actual width of the image
                        height={640} // Actual height of the image
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="button flex justify-center items-center my-12 ">
        <Link href={"/OurServices"}>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-200">
            View all Services
          </button>
        </Link>
      </div>
    </>
  );
}

export default OurServicesComponent;
