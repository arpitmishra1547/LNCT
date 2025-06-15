"use client"
import React, { useRef, useEffect, useState } from 'react';

const ResearchAndDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-purple-700 text-lg font-semibold mb-2">Research & Development Cell ( R&D )</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Study at India's No.1 Research-Intensive Educational Group
        </h1>
        <p className="text-gray-600 mb-12 relative">
          <span className="inline-block border-b border-gray-400 w-16 align-middle mr-2"></span>
          Start your Journey to Innovation here at LNCT Group of Colleges
          <span className="inline-block border-b border-gray-400 w-16 align-middle ml-2"></span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="text-left">
            <div className="mb-8">
              <p className="text-5xl font-bold text-purple-700">1200+</p>
              <div className="border-b-2 border-purple-700 w-24 my-2"></div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Publications in National & International Journals
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-700">20+</p>
              <div className="border-b-2 border-purple-700 w-24 my-2"></div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Industry Sponsored Advanced Research Labs
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="text-left">
            <div className="mb-8">
              <p className="text-5xl font-bold text-purple-700">191+</p>
              <div className="border-b-2 border-purple-700 w-24 my-2"></div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Patents filed Successfully by LNCT Group
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-700">54+</p>
              <div className="border-b-2 border-purple-700 w-24 my-2"></div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Departmental Research Groups
              </p>
            </div>
          </div>

          {/* Right Column - Bar Chart */}
          <div className="text-left">
            <h3 className="text-red-600 text-xl font-bold mb-4">Intellectual Property Rights</h3>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-purple-500 mr-2"></div>
              <span className="text-gray-700 text-sm">IPR (Patents/Design/Copyright)</span>
            </div>
            <div className="flex justify-between items-end h-80 border-l border-b border-gray-300 relative">
              {/* Y-axis labels and horizontal grid lines */}
              {[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70].map((value) => (
                <React.Fragment key={value}>
                  {/* Horizontal Grid Line */}
                  <div
                    className="absolute left-0 w-full border-t border-gray-200"
                    style={{ bottom: `calc(${value}/70 * 100%)` }}
                  ></div>
                  {/* Y-axis Label */}
                  <span
                    className="absolute right-full mr-2 text-xs text-gray-500 transform -translate-y-1/2"
                    style={{ bottom: `calc(${value}/70 * 100%)` }}
                  >
                    {value}
                  </span>
                </React.Fragment>
              ))}

              {/* Bars */}
              <div className="flex-1 h-full flex items-end relative z-10">
                <div className={`w-1/5 bg-purple-500 mx-1 relative flex items-end justify-center transition-transform duration-1000 ease-out ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ height: `calc(16/70*100%)`, transformOrigin: 'bottom' }}>
                  <div className="absolute -bottom-6 text-xs text-gray-700">2019</div>
                </div>
                <div className={`w-1/5 bg-purple-500 mx-1 relative flex items-end justify-center transition-transform duration-1000 ease-out ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ height: `calc(28/70*100%)`, transformOrigin: 'bottom' }}>
                  <div className="absolute -bottom-6 text-xs text-gray-700">2020</div>
                </div>
                <div className={`w-1/5 bg-purple-500 mx-1 relative flex items-end justify-center transition-transform duration-1000 ease-out ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ height: `calc(61/70*100%)`, transformOrigin: 'bottom' }}>
                  <div className="absolute -bottom-6 text-xs text-gray-700">2021</div>
                </div>
                <div className={`w-1/5 bg-purple-500 mx-1 relative flex items-end justify-center transition-transform duration-1000 ease-out ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ height: `calc(43/70*100%)`, transformOrigin: 'bottom' }}>
                  <div className="absolute -bottom-6 text-xs text-gray-700">2012</div>
                </div>
                <div className={`w-1/5 bg-purple-500 mx-1 relative flex items-end justify-center transition-transform duration-1000 ease-out ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ height: `calc(52/70*100%)`, transformOrigin: 'bottom' }}>
                  <div className="absolute -bottom-6 text-xs text-gray-700">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment; 