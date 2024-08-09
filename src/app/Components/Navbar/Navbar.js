// src/components/Navbar.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css"; // Assuming you have custom styles
import { GiTireIronCross } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Mobile menu toggle"); // Debugging log
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Navbar container */}
      <nav className=" h-16  bg-transparent ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/logo/logo.png"
              className="h-8"
              alt="Logo"
              height={150}
              width={75}
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          {isMobileMenuOpen ? (
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 z-50"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen}
            >
              {/* Close icon */}
              <GiTireIronCross size={24} className="text-gray-900 dark:text-white z-50" />
            </button>
          ) : (
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}
          
            

          {/* Navbar Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto z-50`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 text-lg"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white   dark:hover:text-[#c367ca]md:dark:hover:bg-[#c367ca] md:dark:hover:text-[#c367ca] text-lg"
                >
                  About
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/OurServices"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#c367ca] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/Work"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-[#c367ca] md:dark:hover:bg-transparent text-lg"
                >
                  Showcase
                </a>
              </li>
              <li>
                <Link
                  href="/Contacts"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#c367ca] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
