"use client"
import React, { useRef, useState } from 'react';

const News = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4; // Number of items visible at once

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      const scrollAmount = newIndex * (300 + 24); // 300px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.min(4, currentIndex + 1);
      setCurrentIndex(newIndex);
      const scrollAmount = newIndex * (300 + 24); // 300px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      setCurrentIndex(index);
      const scrollAmount = index * (300 + 24); // 300px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const newsData = [
    {
      id: 1,
      image: "/News/502679465_1137141605123156_9065242427518929766_n.jpg",
      title: "LNCT Campus Event Highlights",
      date: "March 15, 2024"
    },
    {
      id: 2,
      image: "/News/503683609_1140103714826945_8248185077777344736_n.jpg",
      title: "Technical Symposium Success",
      date: "March 14, 2024"
    },
    {
      id: 3,
      image: "/News/503786605_1140787461425237_2514032507345951825_n.jpg",
      title: "Student Achievement Celebration",
      date: "March 13, 2024"
    },
    {
      id: 4,
      image: "/News/504087373_1141057611398222_2723322664188603269_n.jpg",
      title: "Industry Collaboration Program",
      date: "March 12, 2024"
    },
    {
      id: 5,
      image: "/News/505804231_1144928341011149_7899566907053141848_n.jpg",
      title: "Research & Innovation Showcase",
      date: "March 11, 2024"
    },
    {
      id: 6,
      image: "/News/505856622_1145711417599508_4987709974148948179_n.jpg",
      title: "Cultural Fest Highlights",
      date: "March 10, 2024"
    },
    {
      id: 7,
      image: "/News/504140968_1141646131339370_2974464428677919101_n.jpg",
      title: "Sports Meet Success",
      date: "March 9, 2024"
    },
    {
      id: 8,
      image: "/News/503367354_1210737283490189_1293688610372167258_n.jpeg",
      title: "Alumni Meet 2024",
      date: "March 8, 2024"
    }
  ];

  return (
    <div className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-left">News</h2>
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative flex items-center gap-4 w-full">
            <button 
              className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl z-10 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 py-4 overflow-hidden"
            >
              {newsData.map((news) => (
                <div 
                  key={news.id} 
                  className="min-w-[300px] bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                >
                  <div className="w-full h-[200px] overflow-hidden rounded-t-xl">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{news.title}</h3>
                    <p className="text-sm text-gray-500">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl z-10 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollRight}
              disabled={currentIndex >= 4}
            >
              →
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex gap-3 mt-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 