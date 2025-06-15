"use client"
import React from 'react';

const VirtualTour = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Step Inside LNCT - Virtually!
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Explore the vibrant LNCT campus from anywhere in the world with our immersive Virtual Tour - your gateway
            to world-class education and state-of-the-art facilities.
          </p>
        </div>

        {/* Virtual Tour Container */}
        <div className="relative w-full mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://tour.lnct.ac.in/LNCT/"
              className="w-full h-[70vh]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour; 