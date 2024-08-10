import Link from 'next/link';
// import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Navbar from '../Components/Navbar/Navbar';
const blogs = [
    { id: '1', title: 'Understanding JavaScript Closures',image:"/BlogImages/blog1page.jpeg" },
    { id: '2', title: 'Getting Started with React',image:"/BlogImages/blog1page.jpeg" },
    { id: '3', title: 'A Deep Dive into Node.js',image:"/BlogImages/blog1page.jpeg" },
    { id: '4', title: 'A Deep Dive into Node.js',image:"/BlogImages/blog1page.jpeg" },
    
];

export default function Blog() {
    return (
        <>
     <Navbar/>
        <div className="">
           <div className='upper flex md:flex-row flex-col justify-center items-center  mx-6'>
<div className='left md:w-1/2'>
<Image src="/BlogImages/modern-blogger-concept-with-flat-design_23-2147996703-removebg-preview.png" 
alt=''
height={100}
width={500}/>
</div>
<div className='right md:w-1/2 p-6'>
<h1 className='text-6xl'>Exploring the Web, <span className='text-blue-600'>One Post at a Time.</span></h1>
</div>
           </div>

           <div className=''>


           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mx-2">
    {blogs.map((blog) => (
        <Link key={blog.id} href={`/Blogs/${blog.id}`}>
            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <a href="#">
                    <Image
                        className="rounded-t-lg"
                        src={blog.image}
                        alt=""
                        width={300}
                        height={400}
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {blog.title}
                        </h5>
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </Link>
    ))}
</div>

        </div>

        </>
    );
}
