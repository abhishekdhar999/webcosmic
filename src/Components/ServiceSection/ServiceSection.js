// ServiceSection.jsx
import React, { forwardRef } from "react";

// ServiceSection Component using forwardRef
const ServiceSection = forwardRef(({ title, icon, description, features, imageSrc }, ref) => (
  <section ref={ref} className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <div className="bg-blue-600 text-white rounded-full p-3 mr-4">{icon}</div>
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-700 mb-8">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-gray-200 rounded-full p-3 mr-3 text-blue-600">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover mt-8 rounded-lg shadow-lg" />
    </div>
  </section>
));

// Ensure that the ServiceSection component is exported
export default ServiceSection;
