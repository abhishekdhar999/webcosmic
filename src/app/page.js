import "../globals.css"
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "./Home/page";

import Footer from '../Components/Footer/Footer';

export default function Home() {

//   const [loading, setLoading] = useState(true);
// const text = " FLAT 50% OFF FOR STUDENTS PORTFOLIO JUST RS.999"
  
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
    
    {/* <MarqueeBanner text={text}></MarqueeBanner> */}
    <Navbar></Navbar>
    <Homepage ></Homepage>
<Footer></Footer>
    </>
  );
}
