import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

const TravelCarousel = ({ items, title }) => {
  const [showDetails, setShowDetails] = useState(null);
  const carouselRef = useRef(null);

  const handleItemClick = (item) => {
    setShowDetails(item);
  };

  const closeDetails = () => {
    setShowDetails(null);
  };

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
        {title}
      </h3>

      <div className="wrapper relative">
        <div
          ref={carouselRef}
          className="carousel flex overflow-x-scroll scrollbar-hide"
        >
          <div className="carousel-items flex px-12">
            {items.map((item) => (
              <div
                key={item.id}
                className="carousel-item flex-shrink-0 w-64 mx-1 transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative h-40 bg-gray-200 rounded overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-white">{item.title}</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <h4 className="text-white font-bold">{item.title}</h4>
                    {item.date && (
                      <p className="text-white text-sm">{item.date}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracted arrow buttons outside the carousel for better positioning */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-0 bottom-0 z-10 px-4 h-full bg-gradient-to-r from-black to-transparent opacity-75 hover:opacity-100 text-white"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-0 bottom-0 z-10 px-4 h-full bg-gradient-to-l from-black to-transparent opacity-75 hover:opacity-100 text-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative h-64 bg-gray-200">
              {showDetails.image ? (
                <img
                  src={showDetails.image}
                  alt={showDetails.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <span className="text-white text-xl">
                    {showDetails.title}
                  </span>
                </div>
              )}
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                {showDetails.title}
              </h3>
              {showDetails.date && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Date:</strong> {showDetails.date}
                </p>
              )}
              {showDetails.location && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Location:</strong> {showDetails.location}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                {showDetails.description || "No description available."}
              </p>

              <div className="flex space-x-3">
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center">
                  <Info className="mr-2" size={20} />
                  More Info
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelCarousel;
