"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import BlobMarquee from "../Components/BlobMarquee/BlobMarquee";
import style from './About.module.css'
const About = () => {
  const [isUsVisible, setIsUsVisible] = useState(false);

//   useEffect(() => {
//     const aboutElement = document.getElementById("about");
//     const handleAnimationEnd = () => {
//       setIsUsVisible(true);
//       aboutElement.removeEventListener("animationend", handleAnimationEnd);
//     };

//     aboutElement.addEventListener("animationend", handleAnimationEnd);

//     return () => {
//       aboutElement.removeEventListener("animationend", handleAnimationEnd);
//     };
//   }, []);

  return (
    <>
      <Navbar />

      <div className=" mt-12">
       <img className="h-[500px] mt-6 w-full" src="https://img.freepik.com/free-vector/innovation-concept-illustration-idea-creativity-improvement-ideas_613284-2114.jpg?t=st=1723158453~exp=1723162053~hmac=275884fea946580433bf00d1865d368d16bf7d74cc836c4d42257a3efdff21c0&w=2000" alt="" />
      </div>

      <div className="middle  mx-auto max-w-screen-xl px-4 py-8 my-16">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    {/* <!-- Left Section --> */}
    <div className="left flex  items-center w-full md:w-1/2">
      <div className="border-l-2 border-gray-300 h-full pl-4">
        <h1 className="text-4xl my-12 font-bold text-left mx-2"> <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">A</span>BO<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">U</span>T</h1>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="right flex-1 w-full md:w-1/2">
      <p className="font-thin text-lg text-center md:text-left">
      At Webcosmic, our clients are at the heart of everything we do. We pride ourselves on building lasting partnerships through transparency, trust, and dedication. Our team is committed to delivering reliable solutions that are tailored to your specific needs, ensuring your success every step of the way.
      </p>
    </div>
  </div>
</div>

     

      {/* first */}
<section className="flex flex-col md:flex-row sm:px-4 md:px-6 items-center justify-center text-center my-24 ">
            <div className="max-w-3xl">
              <p className="text-base md:text-4xl font-thin leading-relaxed">
                Welcome to <span className="font-bold">WebCosmic</span>, where
                we don&apos;t just build websites—we craft digital experiences
                that are out of this world. <span className="text-[#7bcfcf]">As a forward-thinking web
                development agency, we&apos;re here to launch your business
                into the future with our innovative solutions.</span>
              </p>
            </div>
          </section>

      <div className="relative min-h-screen bg-transparent text-white font-sans items-center p-2 md:p-12 pt-1">
        <div className="relative z-10  mx-4 md:mx-auto space-y-8 ">
          
        <section className="flex flex-col md:flex-row p-4 md:p-12 items-center md:items-start">
  

  {/* Text Section (Right Side) */}
  <div className="md:w-2/3 lg:w-3/5 md:pl-8 mt-6 md:mt-0 max-w-lg">
    <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background text-center md:text-left">
      Our Approach
    </h2>
    <p className="text-lg md:text-xl font-thin leading-relaxed text-center md:text-left text-gray-400">
    At WebCosmic, we believe in a world where digital interactions are seamless and meaningful. Our vision is to bridge the gap between technology and human experience, creating digital ecosystems that empower businesses and enrich lives. We strive to push the boundaries of whats possible, fostering a culture of continuous learning and adaptation in an ever-evolving digital world.
    </p>
  </div>


  {/* Image Section (Left Side) */}
  <div className="md:w-1/3 lg:w-2/5 md:pr-8">
    <Image
      src={`/approach.png`}
      alt="Our Approach"
      className="w-full h-auto max-w-xs mx-auto md:max-w-none"
      width={500} 
      height={300} 
    />
  </div>
</section>
{/* second */}

          <section className="flex flex-col md:flex-row p-4 md:p-12 items-center lg:ml-44">
  {/* Image Section (Left Side) */}
  <div className="md:w-1/3 lg:w-2/5 md:pr-8">
    <Image
      src={`/ourvisionnew.png`}
      alt="Our Approach"
      className="w-full h-auto max-w-xs mx-auto md:max-w-none"
      width={500} 
      height={300} 
    />
  </div>

  {/* Text Section (Right Side) */}
  <div className="md:w-2/3 lg:w-3/5 md:pl-8 mt-6 md:mt-0 max-w-lg">
    <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background text-center md:text-left">
      Our Mission
    </h2>
    <p className="text-lg md:text-xl font-thin leading-relaxed text-center md:text-left text-gray-400">
    Our mission is to empower brands by unlocking their true potential in the digital realm. We are dedicated to delivering innovative solutions that drive growth, enhance brand identity, and create memorable experiences for users. By aligning our expertise with your business goals, we aim to be a catalyst for your success, enabling you to thrive in the digital age.
    </p>
  </div>
</section>

{/* third */}
<section className="flex flex-col md:flex-row p-4 md:p-12 items-center md:items-start">
  

  {/* Text Section (Right Side) */}
  <div className="md:w-2/3 lg:w-3/5 md:pl-8 mt-6 md:mt-0 max-w-lg">
    <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background text-center md:text-left">
      Our Vision
    </h2>
    <p className="text-lg md:text-xl font-thin leading-relaxed text-center md:text-left text-gray-400">
    At WebCosmic, we envision a digital world where creativity knows no bounds and technology is a bridge to infinite possibilities. We are committed to pushing the boundaries of what's possible, creating digital landscapes that inspire and engage. Our goal is to lead the charge in innovation, ensuring our clients are always at the forefront of the digital frontier. Join us as we journey into a future filled with endless opportunities, where your ideas can truly shine and make an impact.
    </p>
  </div>

  {/* Image Section (Left Side) */}
  <div className="md:w-1/3 lg:w-2/5 md:pr-8">
    <Image
      src={`/our_vision.png`}
      alt="Our Approach"
      className="w-full h-auto max-w-xs mx-auto md:max-w-none"
      width={500} 
      height={300} 
    />
  </div>
</section>

          <p className="text-center text-3xl md:text-5xl font-syne pt-12 pb-4 highlight-text gradient-glow-text animated-gradient-text">
            WebCosmic – Crafting the Future, One Pixel at a Time.
          </p>
        </div>
        <style jsx global>{`
          @font-face {
            font-family: "Montreal";
            font-style: normal;
            font-weight: 400;
            src: local("Montreal"), local("Montreal-Regular"),
              url(https://path-to-montreal-font.woff2) format("woff2");
          }

          @font-face {
            font-family: "__syne_ab8453";
            src: url("path-to-syne-ab8453.woff2") format("woff2");
          }

          .font-syne {
            font-family: "__syne_ab8453", "__syne_Fallback_ab8453", sans-serif;
          }

          .highlight-text {
            position: relative;
            background-color: rgba(105, 102, 255, 0.1);
            border: 2px solid #6966ff;
            padding: 0.75rem;
            border-radius: 8px;
            text-shadow: 0 0 2px rgba(105, 102, 255, 0.15),
              0 0 3px rgba(105, 102, 255, 0.15);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          @keyframes glow {
            0% {
              text-shadow: 0 0 2px rgba(105, 102, 255, 0.15),
                0 0 3px rgba(105, 102, 255, 0.15);
            }
            50% {
              text-shadow: 0 0 4px rgba(105, 102, 255, 0.3),
                0 0 6px rgba(105, 102, 255, 0.3);
            }
            100% {
              text-shadow: 0 0 2px rgba(105, 102, 255, 0.15),
                0 0 3px rgba(105, 102, 255, 0.15);
            }
          }

          @keyframes Footer_rainbow__y_VUe {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes slideInFromTop {
            0% {
              opacity: 0;
              transform: translateY(-50px);
              visibility: hidden;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              visibility: visible;
            }
          }

          @keyframes slideInFromAbove {
            0% {
              opacity: 0;
              transform: translateY(-150px);
              visibility: hidden;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              visibility: visible;
            }
          }

          .gradient-glow-text {
            background: linear-gradient(90deg, pink, purple, cyan, limegreen);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glow 2s infinite;
          }

          .animated-gradient-text {
            background: linear-gradient(90deg, #633cc9, #3b8392, #cb24cc);
            background-size: 200% 200%;
            animation: Footer_rainbow__y_VUe 3s ease-in-out infinite;
            background-clip: text;
            -webkit-background-clip: text;
          }

          .animated-about {
            animation: slideInFromTop 1s ease-out forwards;
            font-family: "Montreal", sans-serif;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            letter-spacing: calc(-0.02em);
            opacity: 0;
            visibility: hidden;
          }

          .animated-us {
            animation: slideInFromAbove 1s ease-out forwards;
            animation-delay: 1s; /* Delay to ensure 'US' appears after 'ABOUT' */
            opacity: 0;
            visibility: hidden;
            font-family: "Montreal", sans-serif;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            letter-spacing: calc(-0.02em);
          }

          .animated-us.visible {
            opacity: 1;
            visibility: visible;
            transition: opacity 1s ease-out, transform 1s ease-out;
          }

          .capsule-background {
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.2)
            );
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          }

          #about,
          #us {
            font-family: "Montreal", sans-serif;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            letter-spacing: calc(-0.02em);
          }

          #about,
          #us {
            margin-top: 0;
            margin-bottom: 0;
            font-size: clamp(2.5rem, 8vw, 8rem); /* Responsive font size */
            height: 100px;
          }

          #us {
            margin-left: 0; /* Remove left margin */
          }
        `}</style>
      </div>

      <div>
        <BlobMarquee></BlobMarquee>
      </div>
      <div>
      <Footer />
      </div>
      
    </>
  );
};

export default About;
