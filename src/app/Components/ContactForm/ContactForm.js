"use client";
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/app/Components/Navbar/Navbar';
import BlobMarquee from '../BlobMarquee/BlobMarquee';
import Footer from '../Footer/Footer';

const ContactForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    budget: '',
    message: '',
    agreement1: false,
    agreement2: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [greeting, setGreeting] = useState('hello');
  const greetings = ['Hello', 'Hi', 'Hey', 'Greetings', 'Howdy'];
  const fileInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prevGreeting) => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const toggleOption = (option) => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(item => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("iin")
    e.preventDefault();
console.log(formData)
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.budget || !formData.message || !formData.agreement2) {
      alert('Please fill out all fields and select at least one option.');
      return;
    }
console.log("yaha tak")
    const response = await fetch("/api/sendEmail", {
  method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        selectedOptions: selectedOptions.filter(Boolean),
      }),
    });
    const result = await response.json();
    console.log(result);

    // Display success message and reset form
    if (response.ok) {
      setSuccessMessage('Your details have been received successfully. We will contact you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        budget: '',
        message: '',
        agreement1: false,
        agreement2: false,
      });
      setSelectedOptions([]);
    } else {
      setSuccessMessage('There was an error sending your details. Please try again.');
    }
  };

  return (

    <>
    <Navbar></Navbar>

    <div className="heading-section flex flex-col md:flex-row justify-center items-center lg:items-stretch gap-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-lg  mx-12 my-12 shadow-sm shadow-blue-400">
  {/* <!-- Left Section --> */}
  <div className="flex items-center justify-center text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold leading-tight">
            Great ideas start with a simple <br></br> {' '}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient"
            >
              {greeting}
            </span>.
          </h1>
        </div>
  {/* <!-- Right Section --> */}
  <div className="right w-full lg:w-1/2 flex justify-center items-center p-4">
    <img
      className="w-40 h-40 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] object-cover rounded-full border-4 border-blue-300 shadow-lg"
      src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_1280.png"
      alt="Customer Service"
    />
  </div>
</div>

    <div className="w-full bg-transparent text-white">
      <div className="max-w-5xl mx-auto p-4 sm:p-8">
        

   <div className="middle mx-auto max-w-screen-xl px-4 py-8 my-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* <!-- Left Section --> */}
            <div className="left flex items-center w-full md:w-1/2">
              <div className="border-l-2 border-gray-300 h-full pl-4">
                <h1 className="sm:text-3xl text-xl my-8 font-bold text-left mx-2"> 
                  CO
                  <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                    N
                  </span>
                  TA
                  <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                    C
                  </span>
                  T
                </h1>
              </div>
            </div> 

            {/* <!-- Right Section --> */}
            <div className="right flex-1 w-full md:w-1/2">
              <p className="font-extrabold text-base md:text-lg text-center md:text-left">
                PH: +91 7508857909 <br />
                PH: +91 8082810157 <br />
                EMAIL: hello@webcosmic.tech 
                <br/>
                <span className="text-lg md:text-2xl bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                  we are just a call away
                </span>
              </p>
            </div>
          </div>
        </div>

        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {['A new website', 'Branding', 'Motion graphics', 'E-Commerce', 'Development', 'On-going support', 'App from scratch'].map((text) => (
              <button
                type="button"
                key={text}
                onClick={() => toggleOption(text)}
                className={`border border-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-white hover:text-black  transition-colors duration-300 ${selectedOptions.includes(text) ? 'bg-white text-black' : ''}`}
              >
                {text}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className="border-b-2 border-white bg-transparent w-full py-2 text-white focus:outline-none placeholder-gray-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              className="border-b-2 border-white bg-transparent w-full py-2 text-white focus:outline-none placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="border-b-2 border-white bg-transparent w-full py-2 text-white focus:outline-none placeholder-gray-400 md:col-span-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              name="budget"
              placeholder="Budget (Rs.)"
              value={formData.budget}
              onChange={handleChange}
              className="border-b-2 border-white bg-transparent w-full py-2 text-white focus:outline-none placeholder-gray-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-white bg-transparent w-full py-2 mb-8 text-white focus:outline-none placeholder-gray-400"
          ></textarea>

          <div className="mb-8">
            <label className="flex items-center mb-4">
              <input type="radio" name="agreement1" checked={formData.agreement1} onChange={handleChange} className="mr-2" />
              <span className="text-gray-400 text-sm md:text-base">I&apos;m happy to receive a monthly newsletter from WebCosmic</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="agreement2" checked={formData.agreement2} onChange={handleChange} className="mr-2" />
              <span className="text-gray-400 text-sm md:text-base">I understand that WebCosmic will securely hold my data in accordance with their privacy policy.</span>
            </label>
          </div>

          <div className="flex justify-end">
            <button onClick={handleSubmit} type="submit" className="bg-white text-black px-4 sm:px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-500 text-black rounded">
            {successMessage}
          </div>
        )}
      </div>
    </div>

    <div>
<BlobMarquee></BlobMarquee>
    </div>
    <div>
<Footer></Footer>
    </div>
    </>
  );
};

export default ContactForm;