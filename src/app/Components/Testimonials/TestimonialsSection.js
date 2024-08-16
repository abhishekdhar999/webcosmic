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
    name: "Sutantar Brar",
    position: "Founder of EliteFitness",
    image: "/testimonials/author-03.jpg",
    short: "Highly Recommend",
    testimonial: "WebCosmic is simply amazing. They delivered a top-notch website for our tech startup, integrating all the necessary features and ensuring a smooth user experience. Their expertise and dedication were evident in every step of the project. We highly recommend WebCosmic for any web development needs.",

  },
];

const TestimonialSection = () => {
  return (
    <div>
   <div className="flex flex-col md:flex-row justify-center items-center md:mx-auto mx-0 md:space-x-4 space-y-6 md:space-y-0">
  
 
  <div className="left text-center md:text-left my-12">
    <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[150px] ">
      <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">U</span>SE<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">R</span>S
    </h1>
    <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-[150px]  mt-4 md:mt-0 md:ml-12">
      V<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">O</span>IC<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">E</span>
    </h1>
  </div>

</div>
        <Testimonials testimonials={data} showViewMore="true"/>
        </div>
  );
};



export default TestimonialSection;