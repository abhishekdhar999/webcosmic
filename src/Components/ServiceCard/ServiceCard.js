// ServiceCard.jsx
import React from "react";

// ServiceCard Component
const ServiceCard = ({ onClick, imgSrc, title, description }) => {
  return (
    <div
      className="w-full md:w-1/3 lg:w-1/4 p-4 cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
