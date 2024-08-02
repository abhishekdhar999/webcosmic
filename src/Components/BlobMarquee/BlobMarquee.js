"use client";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Blob from "../Blob/Blob";
import Marquee from "../Marquee/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Styled component for a wrapper


export default function BlobMarquee() {
  
  const text = `WEB COSMIC 2023* WEB COSMIC 2023* `;
  const slideRef = useRef(null); // Reference to the Marquee element
const trigRef =  useRef(null)
  

  return (
    <>
      <div ref={trigRef} className=" overflow-y-hidden"></div>
        <div className="relative">
          <Blob />
          <span ref={slideRef} className=" absolute top-[25%] overflow-hidden">
            
            <Marquee className="overflow-hidden" text={text} />
            <p></p>
          </span>
        </div>
      

    </>
  );
}
