// src/components/Navbar.js
"use client"
import React, { useState } from 'react';
import styles from './Navbar.module.css';
 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className={styles.desktopNavbar}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <img
              src="/Logo/logo.png"
              className={styles.logoImage}
              alt="Flowbite Logo"
            />
            {/* <span className={styles.logoText}>Flowbite</span> */}
          </a>
          <ul className={styles.navLinks}>
            <li>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={styles.mobileNavbar}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <img
              src="/Logo/logo.png"
              className={styles.logoImage}
              alt="Flowbite Logo"
            />
            {/* <span className={styles.logoText}>Flowbite</span> */}
          </a>
          <button
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className={styles.menuIcon}
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
        </div>

        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ''
          }`}
          id="mobile-menu"
        >
          <ul className={styles.mobileNavLinks}>
            <li>
              <a href="#" className={styles.mobileLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.mobileLink}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.mobileLink}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.mobileLink}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className={styles.mobileLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
