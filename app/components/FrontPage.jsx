'use client';

import React from 'react';

const FrontPage = () => {
  return (
    <div className="relative w-full h-[100vh] bg-[#161616] flex overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-start p-16">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-red-500 transform -translate-x-1/2"></div>
          <h1 className="text-white text-5xl font-bold uppercase ml-8 leading-tight">
            THE WORLD IS AT <br />
            WOXSEN... <br />
            MAKE THE WORLD <br />
            YOUR CLASSROOM.
          </h1>
        </div>
      </div>

      {/* Right Section - Video Background */}
      <div className="relative w-1/2 h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/lncted.mp4"
          autoPlay
          loop
          muted
          playsInline // Important for mobile autoplay
        >
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        
      </div>
    </div>
  );
};

export default FrontPage; 