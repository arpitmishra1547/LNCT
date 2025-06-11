"use client"
import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    // Show first announcement immediately
    setCurrentAnnouncement(0);

    // After 3 seconds, show second announcement
    const timer = setTimeout(() => {
      setCurrentAnnouncement(1);
    }, 3000);

    // After showing second announcement for 3 seconds, reset to first
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // Total cycle time: 6 seconds (3s first + 3s second)

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setCurrentAnnouncement(0);
  };

  const handleNext = () => {
    setCurrentAnnouncement(1);
  };

  return (
    <div className="flex items-center ml-16">
      {/* Announcement Button */}
      <div className="flex items-center mr-4">
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-1 px-3 rounded-md transition-colors duration-300 flex items-center">
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          Announcement
          <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Announcement Scrollbar */}
      <div className="w-[60vw] h-[5vh] overflow-hidden flex items-center relative">
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 text-white/60 hover:text-white/80 transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        <div 
          className="transition-all duration-800 ease-in-out transform absolute"
          style={{
            transform: `translateX(${currentAnnouncement === 0 ? '0' : '-50%'})`,
            display: 'flex',
            width: '200%'
          }}
        >
          {/* First Announcement */}
          <div className="w-[60vw] flex-shrink-0 flex items-center justify-center">
            <span className="text-white/80 text-sm font-normal whitespace-nowrap max-w-[50vw] ml-8">
              Register Now for CU Joint Campus Placement Programme
            </span>
          </div>
          {/* Second Announcement */}
          <div className="w-[60vw] flex-shrink-0 flex items-center justify-center">
            <span className="text-white/80 text-sm font-normal whitespace-nowrap max-w-[50vw] ml-8">
              1st International Conference on Building Urban Infrastructure with Leading Design Innovations (BUILD- 2025)
            </span>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 text-white/60 hover:text-white/80 transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>

      {/* Contact Options */}
      <div className="flex items-center space-x-6 ml-8">
        {/* WhatsApp */}
        <div className="flex items-center space-x-2">
          <svg className="h-4 w-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-white/60 text-xs">WhatsApp</span>
        </div>

        {/* Call Us */}
        <div className="flex items-center space-x-2">
          <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-white/60 text-xs">Call Us</span>
        </div>

        {/* 360deg */}
        <div className="flex items-center space-x-2">
          <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-white/60 text-xs">360°</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 