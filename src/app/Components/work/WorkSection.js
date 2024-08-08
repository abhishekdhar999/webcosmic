
import React from "react";

export default function WorkSection() {
  const Data = [
    {
heading:"BIOQUENCH",
image:"workImages/bioquench.jpg",
year:"2024",

link:"https://bioquench.in/"
    },
    {
      heading:"ELITE MUSCLES",
      image:"workImages/elitemuscle.png",
      year:"2024",
      
      link:"https://elitemuscles.store/"
          },
          {
            heading:"BETR",
            image:"workImages/betr.png",
            year:"2024",
            
            link:"https://betr-seven.vercel.app/"
                },
                {
                  heading:"STUDYWAVE",
                  image:"workImages/studywave.png",
                  year:"2024",
                  
                  link:"https://thestudywave.com/"
                      },
                      {
                        heading:"MAXXON",
                        image:"workImages/maxxon.png",
                        year:"2023",
                        
                        link:"https://maxxon.in/"
                            },
                            {
                              heading:"TYCOON IMMIGRATION",
                              image:"workImages/tycoonimmigration.png",
                              year:"2023",
                              link:"https://tycoonimmigration.com/"
                                  },
  ];
  return (
<>

<div className="w-full my-24 col-span-12 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on all screens */}
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 bg-background">
        