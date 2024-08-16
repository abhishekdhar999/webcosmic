"use client";
import React, { useState, useRef } from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
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
    {
        name: "John Smith",
        position: "CEO, GlobalTech Solutions",
        image: "/testimonials/author-04.jpg",
        short: "Significant Traffic Increase",
        testimonial: "WebCosmic did a fantastic job building our company's website. The design is sleek, and the user experience is seamless. We've seen a significant increase in traffic since the launch. Highly recommended!",
    },
    {
        name: "Priya Kapoor",
        position: "Marketing Head, UrbanClap India",
        image: "/testimonials/author-05.jpg",
        short: "Exceptional Marketing Team",
        testimonial: "WebCosmic's marketing team is exceptional. They helped us with targeted campaigns that significantly boosted our online presence. Their expertise in digital marketing is truly impressive.",
    },
    {
        name: "Emily Zhang",
        position: "Founder, ZenApp Innovations",
        image: "/testimonials/author-06.jpg",
        short: "Beyond Expectations",
        testimonial: "We partnered with WebCosmic to develop our Android and iOS apps, and they delivered beyond our expectations. The apps are user-friendly, responsive, and have helped us reach a wider audience. We are thrilled with the results!",
    },
    {
        name: "Rohan Mehra",
        position: "Managing Director, Mehra Industries",
        image: "/testimonials/author-07.jpg",
        short: "Streamlined Operations",
        testimonial: "WebCosmic built a custom ERP solution for our business, and it has streamlined our operations incredibly. The team understood our requirements and delivered a robust system that perfectly fits our needs.",
    },
    {
        name: "Sarah Thompson",
        position: "COO, BrightFuture Solutions",
        image: "/testimonials/author-08.jpg",
        short: "Outstanding E-Commerce Site",
        testimonial: "WebCosmic developed our e-commerce website, and it has been a game-changer for our business. The site's performance is outstanding, and the design is top-notch. We've seen a significant boost in sales since going live.",
    },
    {
        name: "Anjali Verma",
        position: "Owner, Verma Textiles",
        image: "/testimonials/author-09.jpg",
        short: "Dramatically Improved Rankings",
        testimonial: "The SEO services provided by WebCosmic have improved our search rankings dramatically. Our website now ranks on the first page for several key terms, leading to more traffic and inquiries. We're very happy with the results!",
    },
    {
        name: "Aditya Patel",
        position: "CEO, Patel Agro Industries",
        image: "/testimonials/author-10.jpg",
        short: "Robust ERP Solution",
        testimonial: "WebCosmic built a robust ERP solution for us that has streamlined our supply chain management. The system is intuitive, and the support team has been excellent in addressing our queries. We highly recommend their services!",
    },
    {
        name: "Rakesh Gupta",
        position: "Founder, Gupta Automobiles",
        image: "/testimonials/author-11.jpg",
        short: "Hit Android App",
        testimonial: "Our new Android app developed by WebCosmic is a hit with our customers. It's fast, reliable, and easy to navigate. The team at WebCosmic did an outstanding job!",
    },
    {
        name: "Laura Mitchell",
        position: "CMO, EcoGreen International",
        image: "/testimonials/author-12.jpg",
        short: "Innovative Campaigns",
        testimonial: "WebCosmic's digital marketing expertise helped us reach new heights. Their campaigns were innovative and drove significant engagement. We're thrilled with the results and look forward to future collaborations.",
    },
    {
        name: "Sneha Desai",
        position: "CTO, Desai Industries",
        image: "/testimonials/author-13.jpg",
        short: "Visually Appealing and Functional",
        testimonial: "We needed a new website and app for our business, and WebCosmic delivered exactly what we were looking for. The site is visually appealing and functions flawlessly, while the app has been well-received by our users. Great work!",
    }
];
    const [selectedReview, setSelectedReview] = useState(data[0]);
    const scrollRef = useRef(null);

    const handleSelect = (review) => {
        setSelectedReview(review);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    

    return (
      <>
      <Navbar></Navbar>
        <div className=" min-h-screen md:mx-12 sm:mb-36 md:mb-36  mb-[470px] text-white ">
            <div className="container mx-auto py-16 px-4 relative">
                <h2 className="md:text-6xl text-3xl  font-extrabold text-center mb-12 tracking-wider">
                    CLIENTS <span className='text-teal-400 '>TESTIMONIALS</span>
                </h2>

                <div className="relative">
                    <button 
                        onClick={() => scroll('left')} 
                        className="absolute left-4 top-1/2 transform-translate-y-1/2 bg-transparent hover:bg-gray-600 text-white rounded-full p-3 shadow-lg transition-transform transform-hover:scale-110 z-10 md:left-2 lg:left-4 border border-gray-700"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 16l-4-4 4-4 1.4 1.4L11.8 12H16v2H11.8l2.6 2.6L13 16z" />
                        </svg>
                    </button>

                    <div 
                        ref={scrollRef} 
                        className="overflow-x-auto whitespace-nowrap py-6 px-6 flex flex-nowrap space-x-6 scroll-smooth snap-x snap-mandatory"
                    >
                        {data.map((review, index) => (
                            <div
                                key={index}
                                className={`inline-block w-80 bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-700 ${
                                    selectedReview === review ? "border-2 border-teal-500" : ""
                                } snap-start`}
                                style={{ minWidth: '300px', maxWidth: 'calc(100% - 32px)' }} // Adjust card size based on content
                                onMouseOver={() => handleSelect(review)}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden absolute top-[0.5rem] left-1/2 transform -translate-x-1/2 z-10">
                                        {/* <img 
                                            src={review.image} // Use the correct image for each review
                                            alt="Testimonial"
                                            className="w-full h-full object-cover"
                                        /> */}
                                    </div>
                                </div>
                                <div className="pt-16 p-6">
                                    <h3 className="text-xl font-semibold text-teal-400 mb-2 text-center">
                                       {review.name}
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-1 text-center">
                                    {review.short}
                                    </p>
                                    <p className="text-sm font-semibold text-blue-300 text-center">
                                        {review.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => scroll('right')} 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-600 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 z-10 md:right-2 lg:right-4 border border-gray-700"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7 4l4 4-4 4-1.4-1.4L8.2 8H4V6h4.2L5.6 4.4 7 4z" />
                        </svg>
                    </button>
                </div>

                {selectedReview && (
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 mt-12 mx-auto max-w-screen-md text-center">
                        <h3 className="text-3xl font-semibold mb-4 text-teal-400">
                            {selectedReview.short}
                        </h3>
                        <h4 className="text-xl font-medium mb-2 text-gray-300">
                            {selectedReview.name}
                        </h4>
                        <h4 className="text-xl font-medium mb-2 text-blue-300">
                            {selectedReview.position}
                        </h4>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            {selectedReview.testimonial}
                        </p>
                    </div>
                )}
            </div>
        </div>
        
        <div>
          <Footer></Footer>
        </div>
        </>
    );
};

export default Testimonial;