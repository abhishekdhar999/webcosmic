"use client"
import { useState,useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Home/page";
import Footer from './Components/Footer/Footer';
import PreLoader from "./Components/PreLoader/PreLoader";
export default function Home() {

  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Simulate loading delay (e.g., for fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demonstration

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
    {loading && <PreLoader></PreLoader> }
    
    <Navbar></Navbar>
    <Homepage loading={loading}></Homepage>
<Footer></Footer>
    </>
  );
}
