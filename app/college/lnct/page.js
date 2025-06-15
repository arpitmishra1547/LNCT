import React from "react";
import Navbar from "@/app/components/Navbar";
import Showcase from "./Showcase";
import Image from "next/image";
import AnnouncementBar from "@/app/components/AnnouncementBar";
import Footer from "@/app/components/Footer";

const LNCTPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <AnnouncementBar />
      <div className="flex bg-gray-900 items-center px-4 py-2">
        <div className="w-32 h-16 relative">
          <Image
            src="/images/LNCT-Logo.png"
            alt="LNCT Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
      <Showcase />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">
          LNCT College | 32+ Years of Academic Excellence and Discipline.
        </h1>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-lg leading-relaxed">
              At LNCT, Top Engineering Colleges in Bhopal / MP / Central India, We believe in Providing Futuristic
              Learning Modules for our students through sophisticated Digital Classrooms and ensure Real-time
              learning experience. 3200+ Placement Offers – State-of-the-Art Infrastructure – Holistic exposure to
              extracurricular activities – Among Top Engineering Colleges in Bhopal and Central India.
            </p>
            <p className="text-lg leading-relaxed">
              LNCT's 5th accreditation by the NBA! It's a testament to the excellent quality of Computer Science &
              Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering,
              Mechanical Engineering, and Civil Engineering programs. This accreditation opens up limitless
              opportunities for students to soar high and achieve success in their careers.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
            <div className="relative" style={{width: '400px', height: '400px'}}>
              <Image
                src="/pics/NBA.jpg"
                alt="NBA Accreditation and Rankings"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center mt-4 space-y-1">
              <p className="text-base">www.LNCT.ac.in</p>
              <p className="text-base">LNCT Campus Kalchuri Nagar, Raisen Road, Bhopal (MP)</p>
              <p className="text-xl font-bold">📞 7440777111, 222, 333</p>
            </div>
          </div>
        </div>
      </div>
     < Footer />
    </div>
  );
};

export default LNCTPage;
