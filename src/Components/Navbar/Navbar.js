"use client"
import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import '../../app/globals.css'
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import SideNavbar from "../SideNavbar/SideNavbar";

import { Canvas} from '@react-three/fiber';
import gsap from 'gsap';

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const textRef = useRef(null);

    return (
        <>
            <div className="flex justify-between items-center mx-4 lg:mx-12 my-6 mb-8 overflow-hidden">
                {/* Left Section */}
                <div className="left z-50 flex items-center">
                    <div className="circular-text">
                        <div className='curve'>
                            <span className='text'>
                                <Link href={"/"}>
                                <img className='h-[50px] w-[90px]' src="logo.png" alt="Logo" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="middle bg-transparent hidden lg:block">
                    <nav className="shift">
                        <ul className="flex space-x-6 text-gray-700">
                            <li>
                                <Link href={"/"} className="hover:text-black transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/About"} className="hover:text-black transition-colors duration-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"/OurServices"} className="hover:text-black transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Work"} className="hover:text-black transition-colors duration-300">
                                    Showcase
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="right hidden lg:block">
                <Link href={"/Contacts"}>
                    <button
                        type="button"
                        className="btn text-white border-2 border-white rounded-full  text-[15px] font-semibold px-5 py-2.5 transition-colors duration-500 hover:bg-white hover:text-black z-50"
                    >
                        Get In Touch
                    </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <span className="sideNavbar-btn lg:hidden">
                   
                    <button
                        onClick={handleClick}
                        className="flex items-center justify-center border-2 border-white p-2 rounded-full text-white font-semibold z-50 transition-all duration-300"
                    >
                        {!active ? (
                            <span className="flex items-center">
                                Menu <FaBars className="ml-2 mt-1" />
                            </span>
                        ) : (
                            <span className="flex items-center">
                                Close <RxCross1 className="ml-2 mt-1" />
                            </span>
                        )}
                    </button>
                    
                </span>
            </div>

            <SideNavbar active={active} setActive={setActive} />
        </>
    );
}
