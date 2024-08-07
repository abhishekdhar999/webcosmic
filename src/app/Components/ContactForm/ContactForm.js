"use client";
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/app/Components/Navbar/Navbar';
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
  const greetings = ['hello', 'hi', 'hey', 'greetings', 'howdy'];
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
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.budget || !formData.message || !formData.agreement2) {
      alert('Please fill out all fields and select at least one option.');
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_POST_URL}`, {
      method: 'POST',
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
    <div className="w-full bg-transparent text-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <div className="flex items-center justify-center text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Great ideas start with a simple &nbsp; &nbsp; {' '}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient"
            >
              {greeting}
            </span>.
          </h1>
        </div>

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
                EMAIL: HELLO@GMAIL.COM
                <br/>
                <span className="text-lg md:text-2xl bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
                  we are just a call away
                </span>
              </p>
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-500 text-black rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {['A new website', 'Branding', 'Motion graphics', 'E-Commerce', 'Development', 'On-going support', 'App from scratch'].map((text) => (
              <button
                type="button"
                key={text}
                onClick={() => toggleOption(text)}
                className={`border border-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-heading-white hover:text-black transition-colors duration-300 ${selectedOptions.includes(text) ? 'bg-white text-black' : ''}`}
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
            <button type="submit" className="bg-white text-black px-4 sm:px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
