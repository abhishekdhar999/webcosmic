// components/Preloader.js

import React from 'react';
// import styles from './Preloader.module.css'; // Import styles

const Preloader = () => {
  return (
<>
<div>
        <img src="preloader.png" alt="" />
      </div>

    
    <div className='preloader'>

      
      <div className='animate-diagonal h-[200px] w-[200px]'>
        <img src="preloader.png" alt="" />
      </div>
      <h2 className='text-4xl font-sans font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Happy Surrfing...</h2>
      <div className='loader'>
      
      </div>
    </div>

    </>
  );
};

export default Preloader;
