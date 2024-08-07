"use client";
import React from 'react';
import Testimonials from '@/app/Components/Testimonials/testimonial';
import Navbar from '@/app/Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
const Testimonial = () => {
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
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div>
             
        <Navbar></Navbar>
        <figure className="max-w-screen-md ml-36 text-left">
    <svg className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p className="sm:text-xl md:text-3xl lg:text-5xl italic font-medium text-heading-white mb-24">
        &quot;There is only one boss: the customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.&quot;
        </p>
    </blockquote>
</figure>


            <Testimonials testimonials={data} />

            <div>
                <Footer></Footer>
            </div>
        </div>

    );
}

export default Testimonial;