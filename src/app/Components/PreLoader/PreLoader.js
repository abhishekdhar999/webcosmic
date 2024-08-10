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
      <div className=''><h1 className='text-xl'>Loading......</h1></div>
      
    </div>

    </>
  );
};

export default Preloader;
