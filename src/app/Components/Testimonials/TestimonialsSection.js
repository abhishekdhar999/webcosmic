import React from 'react';
import Testimonials from './testimonial';
import { BsBoxArrowInUpRight } from "react-icons/bs";
const data = [
  {
    name: "Mohit Tariyal",
    position: "Founder of TheStudyWave",
    image: "/testimonials/author-01.jpg",
    short: "WebCosmic Excellence",
    testimonial: "WebCosmic built a very good website for us. Their attention to detail and commitment to delivering a high-quality product were outstanding. We now have a website that not only looks great but also performs exceptionally well, helping us attract more customers and grow our business.",
  },
  {
    name: "Rohit Tiwari",
    position: "Co-Owner of Bioquench",
    image: "/testimonials/author-02.jpg",
    short: "Responsive Team",
    testimonial: "WebCosmic and the team were very cooperative and responsive throughout the process. They provided us with a fantastic e-commerce website that met all our requirements. The seamless communication and professional approach made the entire experience enjoyable and stress-free.",
  },
  {
    name: "Deepanshu Bhateja",
    position: "Founder of EliteFitness",
    image: "/testimonials/author-03.jpg",
    short: "Highly Recommend",
    testimonial: "WebCosmic is simply amazing. They delivered a top-notch website for our tech startup, integrating all the necessary features and ensuring a smooth user experience. Their expertise and dedication were evident in every step of the project. We highly recommend WebCosmic for any web development needs.",

  },
];

const TestimonialSection = () => {
  return (
    <div>
    <div class="-mx-4 flex flex-wrap justify-center">
    <div className="services-heading flex flex-col md:flex-row justify-between p-4  mb-16 ">
          <div className="left text-center md:text-left">
            <h1 className="head-1 my-0 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">U
            <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">S</span>ERS
            </h1>
            <h1 className="head-1 md:ml-36 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">V</span>OI<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">C</span>E
            </h1>
          </div>

          <div className="right mt-4 md:mx-12 lg:mx-36 md:mt-36 flex justify-center md:justify-start">
            <span className="text-8xl lg:text-9xl">
              <BsBoxArrowInUpRight />
            </span>
          </div>
        </div>
        </div>
        <Testimonials testimonials={data} showViewMore="true"/>
        </div>
  );
};



export default TestimonialSection;