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
    <div className="relative w-full overflow-hidden mb-12">
      <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
        {title}
      </h3>

      <div className="wrapper relative">
        <div
          ref={carouselRef}
          className="carousel flex overflow-x-scroll scrollbar-hide py-4"
        >
          <div className="carousel-items flex px-12 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="carousel-item flex-shrink-0 w-80 transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-800"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative h-52 bg-gray-200 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-white">{item.title}</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h4 className="text-white text-xl font-bold drop-shadow-md">
                      {item.title}
                    </h4>
                    {item.date && (
                      <p className="text-white text-sm opacity-90">
                        {item.date}
                      </p>
                    )}
                    {item.location && (
                      <p className="text-white text-sm opacity-90">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel navigation buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all ml-2"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all mr-2"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="relative h-96 bg-gray-200">
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

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                {showDetails.title}
              </h3>
              {showDetails.date && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Дата:</strong> {showDetails.date}
                </p>
              )}
              {showDetails.location && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Место:</strong> {showDetails.location}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-200 mb-8 text-lg leading-relaxed">
                {showDetails.description || "Описание недоступно."}
              </p>

              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg flex items-center font-medium transition-all">
                  <Info className="mr-2" size={20} />
                  Подробнее
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 font-medium transition-all">
                  Добавить в избранное
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
