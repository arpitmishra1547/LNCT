import React from 'react';
// import TopNavigation from './TopNavigation';
import Navbar from './Navbar';
// import HeroSection from './HeroSection';
import Showcase from './Showcase';
import Image from 'next/image';
import AnnouncementBar from './AnnouncementBar';
// import TopNavigation from './TopNavigation';


const Main = () => {
  return (
    <div className="bg-gray-900">
      <AnnouncementBar />
      {/* <TopNavigation /> */}
      <div className="flex items-center px-4 py-2">
        <div className="w-32 h-16 relative bg-gray-900">
          <Image
            src="/images/LNCT-Logo.png"
            alt="LNCT Logo"
            fill
            className="object-contain"
            priority
            style={{ filter: 'invert(100%)' }}
          />
        </div>
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
      {/* <HeroSection /> */}
      <Showcase />
      
      {/* New Section with Image and Text */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Column: Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 relative h-[600px]">
            <Image
              src="/ranking/rank-1.png"
              alt="Rank 1 Private Engineering College"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex-1 text-gray-800 space-y-4">
            <p className="text-lg leading-relaxed">
              Born in semi urban city of Bilaspur (C.G.),Shri Jai Narayan Chouksey, completed his post graduation from 
              Robertson College, Jabalpur. He established Lakshmi Narain College of Technology (LNCT), Bhopal in 1994 
              under the banner of H.K. Kalchuri Education Trust. Since then, With the commitment of <strong className="text-black">"Working 
              Towards Being the Best"</strong>, LNCT Group has achieved many milestones. The institute is successfully 
              meeting the objective of producing skilled manpower of the highest quality who is able to cope up with 
              the challenges of ever evolving industrial needs of the country.The Alumni of LNCT Group are working all 
              across the Globe in Big Multi National Companies.
            </p>
            <p className="text-lg leading-relaxed">
              Today, LNCT Group is one of the Largest and most preferred Educational Group for Engineering,
              Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering
              courses.. Bright young students from all across the country are coming to fulfill their dream in this group.
            </p>
            <p className="text-lg leading-relaxed">
              The LNCT Campus at Bhopal is spread over a lush green environment of approx. 50 acres. The campus
              constitutes of many buildings that houses the academics and research centers. In addition to this, the
              academic building has tutorial rooms, lecture halls, computer and electronics labs and offices of the
              administrations and faculty. The campus is fully equipped with facilities like Wi-Fi,central library (digital
              library, Internet lab), digital classrooms, hostel, mess,Central workshop, Auditorium Sports Ground etc.
            </p>
            {/* Virtual Tour Text and Icon Placeholder */}
            <div className="flex items-center justify-end mt-8">
              <h3 className="text-xl font-bold text-black mr-4">
                Step into Your Future: Explore LNCT Group of Colleges with Our Virtual Tour!
              </h3>
              {/* Placeholder for 360 Virtual Tour Icon */}
              <div className="w-24 h-24 relative">
                {/* Image for 360 Virtual Tour Icon will go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main; 