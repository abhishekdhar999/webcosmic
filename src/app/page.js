"use client"
import {useState,useEffect} from 'react';
import './styles/globals.css';
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "./Home/page";
import Preloader from "@/Components/PreLoader/PreLoader";
import Footer from '../Components/Footer/Footer';
import MarqueeBanner from '@/Components/MarqueeBanner/MarqueeBanner';
export default function Home() {

  const [loading, setLoading] = useState(true);
const text = " FLAT 50% OFF FOR STUDENTS PORTFOLIO JUST RS.999"
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // if (!loading) {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
    // Simulate loading delay (e.g., for fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demonstration

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);
  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   Router.events.on('routeChangeStart', handleStart);
  //   Router.events.on('routeChangeComplete', handleComplete);
  //   Router.events.on('routeChangeError', handleComplete);

  //   window.addEventListener('load', handleComplete);

  //   // Clean up event listeners
  //   return () => {
  //     Router.events.off('routeChangeStart', handleStart);
  //     Router.events.off('routeChangeComplete', handleComplete);
  //     Router.events.off('routeChangeError', handleComplete);
  //     window.removeEventListener('load', handleComplete);
  //   };
  // }, []);

  return (
    <>
    {loading && <Preloader/>}
    <MarqueeBanner text={text}></MarqueeBanner>
    <Navbar></Navbar>
    <Homepage loading={loading}></Homepage>
<Footer></Footer>
    </>
  );
}
