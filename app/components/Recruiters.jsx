"use client"
import React, { useEffect, useRef } from 'react';

const Recruiters = () => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const companyLogos = [
    {
      id: 1,
      name: "TCS",
      logo: "/logo/TCS_NewLogo_Final_CMYK.png"
    },
    {
      id: 2,
      name: "Infosys",
      logo: "/logo/Infosys_idxq8SaZnR_1.png"
    },
    {
      id: 3,
      name: "Wipro",
      logo: "/logo/Wipro_idfHO5d0SD_1.png"
    },
    {
      id: 4,
      name: "Microsoft",
      logo: "/logo/Microsoft_Logo_1.png"
    },
    {
      id: 5,
      name: "Amazon",
      logo: "/logo/Amazon_Logo_1.png"
    },
    {
      id: 6,
      name: "Cisco",
      logo: "/logo/Cisco_Logo_1.png"
    },
    {
      id: 7,
      name: "Accenture",
      logo: "/logo/Accenture_id4vRrAYpl_1.png"
    },
    {
      id: 8,
      name: "Oracle",
      logo: "/logo/Oracle_ideA555_no_1.png"
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const isAtEnd = 
            scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >= 
            scrollContainerRef.current.scrollWidth - 10;

          if (isAtEnd) {
            // Reset to start when reaching the end
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Scroll one section at a time
            scrollContainerRef.current.scrollBy({
              left: 200 + 16, // width + gap
              behavior: 'smooth'
            });
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    startAutoScroll();

    // Cleanup interval on component unmount
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full py-16 bg-[rgb(243,243,243)]">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-left">Our Recruiters</h2>
        <div className="relative flex items-center gap-4 w-full">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 py-4 overflow-hidden"
          >
            {companyLogos.map((company) => (
              <div 
                key={company.id} 
                className="min-w-[200px] h-[120px] bg-white rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 flex items-center justify-center p-4"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-w-[140px] max-h-[80px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters; 