"use client"
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Home/page";
import Footer from './Components/Footer/Footer';
// import MarqueeBanner from "./Components/MarqueeBanner/MarqueeBanner";
export default function Home() {

//   const [loading, setLoading] = useState(true);
 const text = " FLAT 50% OFF FOR STUDENTS PORTFOLIO JUST RS.999"
  
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     // if (!loading) {
//     //   window.scrollTo({ top: 0, behavior: 'smooth' });
//     // }
//     // Simulate loading delay (e.g., for fetching data)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3 seconds for demonstration

//     // Cleanup timeout if component unmounts
//     return () => clearTimeout(timer);
//   }, []);
  

  return (
    <>
    
    <div className="flex justify-between items-center sm:flex-row flex-col sm:mx-6 mx-4 p-2 ">
<h1 className="text-gray-400">FLAT 50% OFF ON STUDENTS PORTFOLIO IN JUST RS 999/-</h1>
<p className="text-gray-400">Ph:8082810157, 7508857909</p>
</div>
    <Navbar></Navbar>
    <Homepage ></Homepage>
<Footer></Footer>
    </>
  );
}
