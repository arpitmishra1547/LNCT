"use client"
import React, { useState, useRef } from 'react';

const Labs = () => {
  const labSections = [
    {
      id: 1,
      name: "AI & Robotics Studio",
      image: "/labs/drone.jpg",
      description: "The AI & Robotics Studio at Woxsen University aims to further discovery and knowledge creation in data science, data analytics and predictive analytics. The facility is powered with the latest GPUs from NVIDIA and updated IMAC and is well equipped to run complex algorithms built on NLP, Keras, and TensorFlow."
    },
    {
      id: 2,
      name: "IDEA Lab",
      image: "/labs/IOT.jpeg",
      description: "The Analytics & Behavioral Lab is designed for in-depth study of human behavior through data. It provides advanced tools for statistical analysis, simulations, and eye-tracking, enabling students to explore consumer trends, market dynamics, and psychological patterns."
    },
    {
      id: 3,
      name: "Bloomberg Finance Lab",
      image: "/labs/incubation.jpg",
      description: "The Bloomberg Finance Lab offers real-time financial market data, news, and analytics. Equipped with Bloomberg Terminals, it allows students to practice trading, portfolio management, and financial analysis in a simulated environment, preparing them for careers in finance."
    },
    {
      id: 4,
      name: "Design & Tech Lab",
      image: "/labs/ev.jpg",
      description: "The Design & Tech Lab fosters creativity and innovation in product design and technology development. With access to 3D printers, laser cutters, and advanced design software, students can prototype and develop innovative solutions across various industries."
    },

  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const largeSectionRef = useRef(null);

  const handleScroll = (direction) => {
    if (largeSectionRef.current) {
      const children = Array.from(largeSectionRef.current.children);
      if (children.length === 0) return;

      let nextIndex = currentSectionIndex;
      if (direction === 'left') {
        nextIndex = Math.max(0, currentSectionIndex - 1);
      } else {
        nextIndex = Math.min(labSections.length - 1, currentSectionIndex + 1);
      }

      if (nextIndex !== currentSectionIndex) {
        const targetElement = children[nextIndex];
        const targetScrollLeft = targetElement.offsetLeft;
        largeSectionRef.current.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
        setCurrentSectionIndex(nextIndex);
      }
    }
  };

  return (
    <div className="w-full h-[85vh] bg-[#FFF5F5] py-8">
      <div className="container mx-auto px-4 h-full">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          World-class Campus to Bring Out the Best in <span className="text-red-600">U</span>
        </h2>
        {/* Small boxes section */}
        <div className="flex justify-between gap-4 h-[15vh] items-center">
          {labSections.map((section) => (
            <div 
              key={section.id}
              className="w-[24%] h-[13vh] flex-shrink-0 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-[#FFF5F5] flex items-center p-3 cursor-pointer"
            >
              <div className="flex-1 px-3">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{section.name}</h3>
              </div>
              <div className="w-[11vh] h-[11vh] relative flex-shrink-0">
                <img
                  src={section.image}
                  alt={section.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Large image with description section with custom scroll */} 
        <div className="relative mt-8">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 disabled:opacity-30 transition-opacity"
            onClick={() => handleScroll('left')}
            disabled={currentSectionIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <div ref={largeSectionRef} className="flex overflow-x-hidden scroll-smooth h-[50vh] items-center pb-4 gap-12">
            {labSections.map((section) => (
              <div 
                key={section.id}
                className="min-w-full h-[45vh] flex-shrink-0 bg-[#FFF5F5] flex flex-row items-center p-8"
              >
                <div className="flex-1 pr-12 w-[20vh]">
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">{section.name}</h3>
                  <p className="text-gray-600 text-xl leading-relaxed break-words">{section.description}</p>
                </div>
                <div className="w-[40vh] h-[40vh] relative flex-shrink-0">
                  <img
                    src={section.image}
                    alt={section.name}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 disabled:opacity-30 transition-opacity"
            onClick={() => handleScroll('right')}
            disabled={currentSectionIndex === labSections.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Labs; 