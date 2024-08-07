// import React from "react";
// import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";

// export default function SideNavbar({ active, setActive }) {
//   return (
//     <>
//       <div
//         className={ ` fixed z-50 top-0 left-[-310px] h-full w-2/3 bg-gray-800 text-white transition-transform transform lg:hidden ${
//           active ? "translate-x-72" : "-translate-x-full"
//         }`}
//       >
//         <div className="left my-12">
//           <ul className=" space-y-0 md:space-y-6">
//             <li className="slink md:mx-12 mx-6">
//               <span className="link-hover">
//                 <Link href="/">
//                   <span className="hover:text-gray-300 cursor-pointer md:text-[100px] text-2xl">
//                     Home
//                   </span>
//                 </Link>
//               </span>
//             </li>
//             <li className="slink md:mx-12 mx-6">
//               <span className="link-hover">
//                 <Link href="/About">
//                   <span className="hover:text-gray-300 cursor-pointer md:text-[100px] text-2xl">
//                     About
//                   </span>
//                 </Link>
//               </span>
//             </li>
//             <li className="slink md:mx-12 mx-6">
//               <span className="link-hover">
//                 <Link href="/OurServices">
//                   <span className="hover:text-gray-300 cursor-pointer md:text-[100px] text-2xl">
//                     Services
//                   </span>
//                 </Link>
//               </span>
//             </li>
//             <li className="slink md:mx-12 mx-6">
//               <span className="link-hover">
//                 <Link href="/Work">
//                   <span className="hover:text-gray-300 cursor-pointer md:text-[100px] text-2xl">
//                     Showcase
//                   </span>
//                 </Link>
//               </span>
//             </li>
//           </ul>
//         </div>

//         <div className="mx-10 sm:mt-12 mt-0">
//           <ul className="flex space-x-2  sm:space-x-6">
//             <Link href="https://www.facebook.com" passHref>
//               <span
//                 className="sm:text-3xl text-xl font-extrabold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer
//                 "
//               >
//                 <FaFacebook />
//               </span>
//             </Link>
//             <Link href="https://www.linkedin.com" passHref>
//               <span
//                 className="sm:text-3xl text-xl font-extrabold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer
//                 "
//               >
//                 <FaLinkedin />
//               </span>
//             </Link>
//             <Link href="https://twitter.com" passHref>
//               <span
//                 className="sm:text-3xl text-xl font-extrabold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaXTwitter />
//               </span>
//             </Link>
//             <Link href="https://github.com" passHref>
//               <span
//                 className="sm:text-3xl text-xl font-extrabold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </span>
//             </Link>
//           </ul>
//         </div>


//       </div>
//     </>
//   );
// }
