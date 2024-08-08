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

      <div className={`${style.rowOuter} overflow-hidden`}> {/* Use CSS Module class */}
        <div className={style.wrapper}> {/* Use CSS Module class */}

          <div className="flex sm:mt-64 md:mt-0 flex-col md:flex-row items-center justify-center w-full md:w-2/3 h-screen px-4 md:px-8 lg:px-16">
            <div className="order-2 md:order-1 flex-1 md:text-left text-center p-4">
              <div className="about-heading mb-4">
                <h1 className="sm:text-4xl text-3xl lg:text-5xl font-extrabold leading-tight text-gray-800 dark:text-white">
                  <span className="text-blue-600">WEB COSMIC</span> <br className="hidden md:block" /> Crafting the Future One Pixel at a Time
                </h1>
              </div>
              <div className="about-text">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Welcome to <span className="font-bold text-blue-600">WebCosmic</span>, where we don&apos;t just build websites—we craft digital experiences that are out of this world. As a forward-thinking web development agency, we&apos;re here to launch your business into the future with our innovative solutions.
                </p>
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
      

      


      <div className="relative min-h-screen bg-transparent text-white font-sans items-center p-2 md:p-12 pt-1">
        <div className="relative z-10  mx-4 md:mx-auto space-y-8 ">
          
          <section className="flex flex-col md:flex-row-reverse p-4 md:p-12 items-center md:items-start">
            <div className="md:w-1/2 md:pl-8 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-center font-thin leading-relaxed">
                At WebCosmic, we see a future where your brand stands out in the
                digital universe. We&apos;re dedicated to creating
                transformative digital experiences that propel your business
                forward.
              </p>
            </div>
            <div className="md:w-1/2 md:pr-8">
              <Image
                src={`/ourvisionnew.png`}
                alt="Our Vision"
                className="w-full h-auto max-w-xs mx-auto"
                width={500} 
        height={300}
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row p-4 md:p-12 items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background">
                Our Approach
              </h2>
              <p className="text-lg md:text-xl text-center font-thin leading-relaxed">
                Innovation is our compass. We stay ahead of the curve with the
                latest technologies and trends, ensuring your brand is always
                future-ready. Our commitment to excellence means your business
                doesn&apos;t just survive—it thrives.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src={`/approach.png`}
                alt="Our Approach"
                className="w-full h-auto max-w-xs mx-auto"
                width={500} 
        height={300} 
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row p-4 md:p-12 items-center md:items-start mt-12">
  <div className="md:w-1/2 md:pr-8">
    <Image
      src={`/AboutImages/aboutFront.png`}
      alt="Our Mission"
      className="w-full h-auto max-w-xs mx-auto"
      width={500}
      height={300}
    />
  </div>
  <div className="md:w-1/2 md:pl-8 max-w-lg">
    <h2 className="text-3xl md:text-4xl font-syne mb-4 p-2 capsule-background">
      Our Mission
    </h2>
    <p className=" text-lg md:text-xl text-center font-thin leading-relaxed">
      Our mission at WebCosmic is to revolutionize the digital world with
      innovative and engaging web solutions. We strive to deliver excellence
      by turning your ideas into dynamic web experiences.
    </p>
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
