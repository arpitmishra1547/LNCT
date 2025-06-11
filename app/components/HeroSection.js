"use client"
import React from 'react';


const HeroSection = () => {
  return (
    <>
      <div className="pt-70 pb-8 px-8 sm:px-12 lg:px-16">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Join The League of Achievers!
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed mb-8">
            LNCT Group of College is one of the Top engineering college in Bhopal, MP and Central India. 
            LNCT Synonymous with excellence in higher education with 32+ Years of Academic Excellence and Discipline.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300">
            Apply Today
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection; 