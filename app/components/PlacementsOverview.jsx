"use client";
import React, { useState, useRef, useEffect } from 'react';

const PlacementsOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const images = [
    '/placements/Placement-Records-6.jpeg',
    '/placements/Placement_2022.jpg',
    '/placements/Placement-Records-2.jpeg',
    '/placements/1500.jpg',
  ];

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="placements-overview bg-blue-800 py-16 px-4">
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Placements Overview<br />
        <span className="text-2xl font-normal">The World's Leading Companies Hire Our Talent</span>
      </h1>

      {/* Image Gallery Container */}
      <div className="relative max-w-4xl mx-auto mb-12 flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute -left-16 top-1/2 -translate-y-1/2 transition-all ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          aria-label="Previous"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex items-center justify-center">
                <img
                  src={image}
                  alt={`Placement Record ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={currentIndex === images.length - 1}
          className={`absolute -right-16 top-1/2 -translate-y-1/2 transition-all ${
            currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          aria-label="Next"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center text-white mb-12">
        <div className="w-1/4 text-center p-4">
          <div className="text-5xl font-light">1.12<span className="text-2xl align-super">CR</span></div>
          <div className="text-lg">Highest International<br />Package Offered</div>
        </div>
        <div className="w-1/4 text-center p-4">
          <div className="text-5xl font-light">9877+</div>
          <div className="text-lg">Total Offers <br />in last 5 Years</div>
        </div>
        <div className="w-1/4 text-center p-4">
          <div className="text-5xl font-light">1600+</div>
          <div className="text-lg">Offers For <br /> 2024 Batch</div>
        </div>
        <div className="w-1/4 text-center p-4">
          <div className="text-5xl font-light">500+</div>
          <div className="text-lg">Top <br />Recruiters</div>
        </div>
      </div>

      {/* Bottom row of statistics */}
      <div className="flex flex-wrap justify-center text-white">
        <div className="w-1/5 text-center p-4 border-r border-white">
          <div className="text-5xl font-light">20<span className="text-2xl align-super">LPA</span></div>
          <div className="text-lg">Package Offered by<br />50+ Companies</div>
        </div>
        <div className="w-1/5 text-center p-4 border-r border-white">
          <div className="text-5xl font-light">15<span className="text-2xl align-super">LPA</span></div>
          <div className="text-lg">Package Offered by<br />60+ Companies</div>
        </div>
        <div className="w-1/5 text-center p-4 border-r border-white">
          <div className="text-5xl font-light">10<span className="text-2xl align-super">LPA</span></div>
          <div className="text-lg">Package Offered by<br />200+ Companies</div>
        </div>
        <div className="w-1/5 text-center p-4 border-r border-white">
          <div className="text-5xl font-light">7<span className="text-2xl align-super">LPA</span></div>
          <div className="text-lg">Package Offered by<br />162 Companies</div>
        </div>
        <div className="w-1/5 text-center p-4">
          <div className="text-5xl font-light">5<span className="text-2xl align-super">LPA</span></div>
          <div className="text-lg">Package Offered by<br />500+ Companies</div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-12">
        <a 
          href="https://admissions.lnct.ac.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded inline-block"
        >
          APPLY TODAY
        </a>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded">VIEW PLACEMENTS</button>
      </div>
    </div>
  );
};

export default PlacementsOverview;