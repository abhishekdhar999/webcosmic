import React from "react";

export default function WorkSection() {
  const data = [
    {
      heading: "BIOQUENCH",
      image: "workImages/bioquench.jpg",
      year: "2024",
      link: "https://bioquench.in/"
    },
    {
      heading: "ELITE MUSCLES",
      image: "workImages/elitemuscle.png",
      year: "2024",
      link: "https://elitemuscles.store/"
    },
    {
      heading: "BETR",
      image: "/workImages/betr.png",
      year: "2024",
      link: "https://betr-seven.vercel.app/"
    },
    {
      heading: "STUDYWAVE",
      image: "workImages/studywave.png",
      year: "2024",
      link: "https://thestudywave.com/"
    },
    {
      heading: "MAXXON",
      image: "workImages/maxxon.png",
      year: "2023",
      link: "https://maxxon.in/"
    },
    {
      heading: "TYCOON IMMIGRATION",
      image: "workImages/tycoonimmigration.png",
      year: "2023",
      link: "https://tycoonimmigration.com/"
    }
  ];

  return (
    <div className="w-full my-24 px-0 sm:px-20 py-8 md:py-12">
      {/* Grid setup with 2 columns on medium screens and above */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 bg-background">
        {data.map((work, index) => (
          <a
            key={index}
            href={work.link}
            className="shadow-md rounded-lg overflow-hidden relative group block transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between p-4 bg-white border-t border-r border-l border-gray-600 md:rounded-t-lg">
              <h3 className="tex