
import WorkSection from '@/app/Components/work/WorkSection';

import Navbar from '@/app/Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
export default function Work() {



  const data = [
    {
heading:"BIOQUENCH",
image:"workImages/bioquench.jpg",
year:"2024",
description:"VISIT BIOQUENCH WEBSITE",
link:"https://bioquench.in/"
    },
    {
      heading:"ELITE MUSCLES",
      image:"workImages/elitemuscle.png",
      year:"2024",
      description:"VISIT ELITE MUSCLES WEBSITE",
      link:"https://elitemuscles.store/"
          },
          {
            heading:"BETR",
            image:"workImages/betr.png",
            year:"2024",
            description:"VISIT BETR WEBSITE",
            link:"https://betr-seven.vercel.app/"
                },
                {
                  heading:"STUDYWAVE",
                  image:"workImages/studywave.png",
                  year:"2024",
                  description:"VISIT STUDYWAVE WEBSITE ",
                  link:"https://thestudywave.com/"
                      },
                      {
                        heading:"MAXXON",
                        image:"workImages/maxxon.png",
                        year:"2023",
                        description:"VISIT MAXXON WEBSITE ",
                        link:"https://maxxon.in/"
                            },
                            {
                              heading:"TYCOON IMMIGRATION",
                              image:"workImages/tycoonimmigration.png",
                              year:"2023",
                              description:"VISIT TYCOON IMMIGRATION WEBSITE ",
                              link:"https://tycoonimmigration.com/"
                                  }
  ]
  return (
<>
<Navbar></Navbar>
<div className='headind  flex sm:flex-row flex-col sm:mx-12 mx-2 mt-16'>
  <div className='left sm:w-2/3'>
  <h1 className='sm:text-4xl lg:text-5xl' > <span className='sm:text-6xl '></span>Explore our curated selection of projects<span className='text-[#9072d1]'> that showcase our commitment to excellence and innovation.</span>   <span className='sm:text-6xl'></span>

</h1>
</div>
<div className='right '>
  <img src="workImages/3d-metal-star-isolated_1308-119601-removebg-preview.png" alt="" />
</div>

</div>

<div className="middle  mx-auto max-w-screen-xl px-4 py-8 my-16">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    {/* <!-- Left Section --> */}
    <div className="left flex  items-center w-full md:w-1/2">
      <div className="border-l-2 border-gray-300 h-full pl-4">
        <h1 className="text-4xl my-12 font-bold text-left mx-2"> W<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">O</span>RK</h1>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="right flex-1 w-full md:w-1/2">
      <p className="font-thin text-lg text-center md:text-left">
      As a burgeoning freelance agency, we are committed to providing innovative and reliable solutions tailored to the unique needs of each client. With a strong foundation built on creativity and expertise, we pride ourselves on delivering exceptional service across diverse projects.
      </p>
    </div>
  </div>
</div>


    <div>
      <WorkSection worksData={data}/>
    </div>

<div>
  <Footer></Footer>
</div>
    </>
  );
}
