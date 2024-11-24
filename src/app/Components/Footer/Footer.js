'use client';

import React, { useState } from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log("");

    if (!email) {
      alert('Please fill out all fields and select at least one option.');
      return;
    }

    const response = await fetch("/api/subscribeNewsletter", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const result = await response.json();
    console.log(result);

    // Display success message and reset form
    if (response.ok) {
      setSuccessMessage('You have subscribed to the newsletter.');
      setEmail("");
    } else {
      setSuccessMessage('There was an error sending your details. Please try again.');
    }
    alert(`Subscribed with email: ${email}`);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-container">
      <style jsx>{`
        .footer-container {
          background-color: #000000;
          color: #ffffff;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: 'Montserrat', sans-serif; /* Use a web-friendly font */
          max-width: 100vw; /* Ensure it doesn't exceed the viewport width */
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap; /* Allow items to wrap on smaller screens */
          gap: 1rem; /* Add space between items */
          max-width: 1200px; /* Limit width for better alignment */
        }

        .footer-logo {
          display: flex;
          align-items: center;
          flex: 1; /* Allow it to take equal space */
          justify-content: center; /* Center logo on smaller screens */
        }

        .footer-logo img {
          height: 80px;
          width: auto; /* Maintain aspect ratio */
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1; /* Allow it to take equal space */
          justify-content: center; /* Center contact section */
          position: relative;
        }

        .footer-email {
          position: relative;
          display: inline-block; /* Allow tooltip to work correctly */
          font-size: 1.5rem; /* Make email font size responsive */
          cursor: pointer;
          color: white;
          transition: color 0.3s;
          padding: 0.5rem; /* Add some padding for better touch area */
        }

        .footer-email:hover {
          animation: rainbow 5s linear infinite;
          color: transparent;
          background: linear-gradient(90deg, pink, purple, cyan, limegreen);
          -webkit-background-clip: text;
        }

        .footer-email:hover .copy-tooltip {
          display: block;
        }

        .copy-tooltip {
          display: none;
          position: absolute;
          top: 110%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ffffff;
          color: #000000;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          white-space: nowrap;
          margin-top: 0.5rem;
          font-size: 1rem;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a slight shadow for better visibility */
          transition: opacity 0.3s ease; /* Smooth transition for tooltip */
        }

        .footer-socials {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          font-size: 2rem; /* Increase icon size for better touch targets */
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
        }

        .footer-socials a {
          color: #ffffff;
          transition: color 0.3s;
        }

        .footer-socials a:hover {
          color: #0A66C2; /* Change icon color on hover */
        }

        .footer-sectors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem; /* Adjust gap for better alignment on smaller screens */
          margin-bottom: 2rem;
          width: 100%;
          max-width: 1200px; /* Limit width for better alignment */
        }

        .sector-item {
          border: 1px solid #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          flex: 1 1 calc(33.333% - 1rem); /* Allow items to fill up space and wrap */
          max-width: calc(33.333% - 1rem); /* Make sure they don't exceed the container */
          box-sizing: border-box; /* Include padding and border in width calculation */
          text-align: center; /* Center text inside the item */
          transition: background-color 0.3s, color 0.3s; /* Add transitions for hover effects */
        }

        .sector-item:hover {
          background-color: #ffffff;
          color: #000000;
        }

        .footer-newsletter {
          display: flex;
          flex-direction: column; /* Stack elements on smaller screens */
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 600px; /* Limit the width of the form */
          margin-bottom: 2rem;
        }

        .footer-newsletter input {
          width: 100%; /* Make input take full width */
          max-width: 100%; /* Ensure it doesn't exceed container width */
          padding: 0.5rem 1rem;
          border: 1px solid #ffffff;
          border-radius: 20px;
          background-color: transparent;
          color: #ffffff;
          transition: border-color 0.3s; /* Smooth transition for border color */
        }

        .footer-newsletter input:focus {
          border-color: #6966ff; /* Change border color on focus */
          outline: none; /* Remove default focus outline */
        }

        .footer-newsletter button {
          padding: 0.5rem 2rem;
          border: 1px solid #ffffff;
          border-radius: 20px;
          background-color: transparent;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .footer-newsletter button:hover {
          background-color: #ffffff;
          color: #000000;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          font-size: 1rem;
          flex-wrap: wrap; /* Allow links to wrap on smaller screens */
        }

        .footer-links a {
          padding: 0.5rem 1rem;
          border: 2px solid transparent;
          border-radius: 20px; /* Make links slightly rounded */
          background: transparent;
          color: white;
          text-decoration: none;
          transition: border-color 0.3s, color 0.3s;
        }

        .footer-links a:hover {
          border-color: transparent;
          background: linear-gradient(90deg, pink, purple, cyan, limegreen);
          background-clip: padding-box;
          color: transparent;
          -webkit-background-clip: text;
        }

        .footer-bottom {
          display: flex;
          justify-content: center; /* Center content on smaller screens */
          align-items: center;
          width: 100%;
          font-size: 0.875rem; /* Make font size slightly smaller */
          padding: 1rem 0;
          border-top: 1px solid #ffffff; /* Add a top border for separation */
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .footer-email {
            font-size: 1.25rem; /* Smaller font size on mobile */
          }

          .footer-socials {
            font-size: 1.75rem; /* Smaller icon size on mobile */
          }

          .footer-newsletter {
            flex-direction: column; /* Stack input and button on mobile */
            gap: 0.5rem; /* Reduce gap on mobile */
          }

          .footer-links {
            gap: 1rem; /* Reduce gap between links on mobile */
            font-size: 0.875rem; /* Smaller font size on mobile */
          }

          .sector-item {
            flex: 1 1 100%; /* Make items full width on mobile */
            max-width: 100%;
          }

          .footer-bottom {
            font-size: 0.75rem; /* Smaller font size on mobile */
          }
        }

        @keyframes rainbow {
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
      `}</style>
      <div className='bg-white w-full h-[1px] my-2'></div>
      <div className="footer-top">
        <div className="footer-logo">
          <Image src={`/logo/logo.png`} alt="Logo" 
          width={100}
          height={50}/>
        </div>
        <div className="footer-contact">
          <CopyToClipboard text="hello@webcosmic.com" onCopy={handleCopy}>
            <span className="footer-email">hello@webcosmic.tech 
              <div className="copy-tooltip">
                {copied ? 'Email copied!' : ' Click to Copy email address'}
              </div>
            </span>
          </CopyToClipboard>
          <div className="mobile-numbers">
            <span className="number ">+91 7508857909</span><br />
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
          </div>
        </div>
      </div>
      
      <div id='our-sector' className="text-4xl font-bold text-white text-left mb-4">
        Our Sectors
      </div>
      <div className="footer-sectors">
        <div className="sector-item">Agencies</div>
        <div className="sector-item">SaaS and Tech</div>
        <div className="sector-item">B2B Transformation</div>
        <div className="sector-item">Healthcare</div>
        <div className="sector-item">Media & Entertainment</div>
        <div className="sector-item">Retail</div>
      </div>
      <div id='our-sector' className="text-2xl font-bold text-white text-left mb-4">
        Subscribe to our Newsletter
      </div>
      <div className="footer-newsletter">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={handleEmailChange} 
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className="footer-links">
        <a href="/contact">Contact</a>
        <a href="/faqs">FAQs</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className="footer-bottom">
        <span>© WebCosmic 2024</span>
      </div>
    </footer>
  );
}
