// src/components/Fragments/Dashboard/TravelCarousel.jsx
import React from 'react';

const TravelCarousel = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
      {items.map((item) => (
        <div key={item.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.description || item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCarousel;