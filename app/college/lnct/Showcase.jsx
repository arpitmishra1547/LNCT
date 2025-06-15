import React from "react";

const Showcase = () => {
  return (
    <div className="bg-gray-900 flex items-end justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Section - Text Content */}
        <div className="text-white px-4 md:px-8">
          <div className="flex">
            <div className="w-2 bg-red-600 mr-4"></div>{" "}
            {/* Red vertical line */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight mb-2">
              LNCT Bhopal | Central India's No. 1 Engineering Institute - Bhopal
              </h2>
              <p className="text-base italic font-normal leading-relaxed">
              Learn, achieve and excel with LNCT Group of colleges
              </p>
            </div>
          </div>
          <div className="mt-9 ml-4">
            <a 
              href="https://admissions.lnct.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 inline-block"
            >
              Admission Today
            </a>
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/videos/lnct-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
