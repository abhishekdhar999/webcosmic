import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the marquee animation
const marquee = keyframes`
  0% {
    transform: translateX(0); // Start position
  }
  100% {
    transform: translateX(-100%); // End position (halfway through the repeated text)
  }
`;

// Style for the Marquee Container
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden; // Ensures overflow content is hidden
  white-space: nowrap; // Prevents text wrapping
  box-sizing: border-box;
  position: relative; // Relative positioning for absolute children
  display: flex; // Use flexbox for alignment
  align-items: center;
  background-color: #000; // Background color for contrast
  padding: 10px 0; // Vertical padding for the container
`;

// Style for the Marquee Text
const MarqueeText = styled.div`
  display: inline-block; // Allow inline block properties
  animation: ${marquee} 15s linear infinite; // Adjust speed for continuous motion
  /* Double the width to enable continuous loop without gap */
  width: 200%; 
  /* Align the text to center */
  display: flex;
  align-items: center;
  font-size: 1rem; // Smaller font size
  color: #fff; // Text color for readability
  font-weight: bold; // Bold text
  text-transform: uppercase; // Uppercase letters for emphasis
  letter-spacing: 0.1em; // Slight letter spacing
  padding-left: 100%; // Move the text offscreen initially
  letter-spacing: 0.5em;
`;

// Marquee Component
const MarqueeBanner = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeText>
        {/* Repeat the text to create seamless scrolling */}
        <span className=''>
          {text}   ... &nbsp; {text}   ... &nbsp; {text}   ... &nbsp; {text}   ... &nbsp; {/* Repeat multiple times */}
        </span>
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default MarqueeBanner;
