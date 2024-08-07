import React from "react";
import Link from "next/link";
import Image from "next/image"; // Importing Next.js Image component
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoArrowRedo } from "react-icons/io5";

export const ServicesSection = () => {
  return (
    <>
      <div className="services-heading flex flex-col md:flex-row justify-between items-center p-4 lg:mx-36 lg:my-24 sm:my-24 my-12">
        {/* Heading Section */}
        <div className="left text-center md:text-left">
          <h1 className="head-1 my-0 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
            <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
              O
            </span>
            UR
          </h1>
          <h1 className="head-1 md:ml-36 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
            W
            <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
              O
            </span>
            RK
          </h1>
        </div>

        {/* Icon Section */}
        <div className="right mt-4 md:mt-36 flex justify-center md:justify-start">
          <span className="text-8xl lg:text-9xl">
            <BsBoxArrowInUpRight />
          </span>
        </div>
      </div>

      {/* Timeline Section bioquench */}
      <div className="bg-transparent sm:p-4">
        <div className="flex flex-col md:grid grid-cols-9 p-2 mx-auto  md:gap-y-0">
          {/* Event 1 */}
          <div className="flex md:contents flex-row-reverse items-center">
            {/* Event Description for larger screens */}
            <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto hidden md:block">
              <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">
                BIOQUENCH
              </h3>
              <p className="mt-2 sm:block hidden leading-6 text-base font-thin">
                BioQuench offers advanced hydration solutions designed to
                enhance well-being through pure, filtered water. Committed to
                sustainability and innovation, BioQuench ensures high-quality
                products that deliver refreshing, revitalizing hydration for a
                healthier lifestyle.
              </p>
              <a
                href="https://bioquench.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2 text-center me-2 mb-2 my-4 font-extrabold flex text-lg"
                >
                  <span>visit</span>{" "}
                  <span className="mt-1 mx-2">
                    <IoArrowRedo />
                  </span>
                </button>
              </a>
            </div>

            {/* Timeline Connector */}
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-line rounded-t-full bg-gradient-to-b"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
            </div>

            {/* Event Image */}
            <div className="relative sm:p-4 sm:my-6 text-heading-white col-start-6 col-end-10 mr-auto">
              <a
                href="https://bioquench.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/workImages/bioquench.jpg" // Corrected image path
                  alt="Event 1"
                  className="w-full h-auto max-w-full rounded-lg object-cover shadow-md transition-transform transform hover:scale-105 duration-300"
                  width={800} // Provide actual width
                  height={600} // Provide actual height
                />
              </a>
            </div>
          </div>

          {/* Event 2 elite muscle */}
          <div className="flex md:contents items-center">
            {/* Event Description for smaller screens */}
            

            {/* Event Image */}
            <div className="relative sm:p-4 my-6  text-heading-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <a
                href="https://elitemuscles.store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/workImages/elitemuscle.png" // Corrected image path
                  alt="Event 2"
                  className="w-full h-auto max-w-full rounded-lg object-cover shadow-md transition-transform transform hover:scale-105 duration-300"
                  width={800} // Provide actual width
                  height={600} // Provide actual height
                />
              </a>
            </div>

            {/* Timeline Connector */}
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-line"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
            </div>

            {/* Event Description for larger screens */}
            <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-6 col-end-10 mr-auto hidden md:block">
              <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">
                ELITE MUSCLE
              </h3>
              <p className="mt-2 leading-6 text-base font-thin">
                Elite Muscle specializes in premium sports nutrition and fitness
                supplements tailored to support intense training and optimal
                performance. With a focus on quality and efficacy, Elite Muscle
                provides athletes and fitness enthusiasts with cutting-edge
                products designed to enhance strength, endurance, and recovery.
              </p>
              <a
                href="https://elitemuscles.store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2 text-center me-2 mb-2 my-4 font-extrabold flex text-lg"
                >
                  <span>visit</span>{" "}
                  <span className="mt-1 mx-2">
                    <IoArrowRedo />
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex md:contents flex-row-reverse items-center">
            {/* Event Description for larger screens */}
            <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto hidden md:block">
              <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">
                BETR
              </h3>
              <p className="mt-2 leading-6 text-base font-thin">
                Established in 2024. BETR. IndiaFoodworks is an innovative force
                poised to make significant strides across diverse F&B sectors.
                The company envisions a dynamic presence in multiple verticals
                the F&B sector has to offer.
              </p>
              <a
                href="https://betr-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2 text-center me-2 mb-2 my-4 font-extrabold flex text-lg"
                >
                  <span>visit</span>{" "}
                  <span className="mt-1 mx-2">
                    <IoArrowRedo />
                  </span>
                </button>
              </a>
            </div>

            {/* Timeline Connector */}
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-line rounded-t-full bg-gradient-to-b"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
            </div>

            {/* Event Image */}
            <div className="relative sm:p-4 sm:my-6 my-2 text-heading-white col-start-6 col-end-10 mr-auto">
              <a
                href="https://betr-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/workImages/betr.png" // Corrected image path
                  alt="Event 3"
                  className="w-full h-auto max-w-full rounded-lg object-cover shadow-md transition-transform transform hover:scale-105 duration-300"
                  width={800} // Provide actual width
                  height={600} // Provide actual height
                />
              </a>
            </div>

           
          </div>
        </div>

        {/* Internal Link Button */}
        <Link href={"/Work"}>
          <div className="text-center mt-16 font-extrabold flex justify-center">
            {/* <MagicButton name={"see all projects"}></MagicButton> */}
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2 text-center mb-2 font-extrabold text-lg">
              See All Projects
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
