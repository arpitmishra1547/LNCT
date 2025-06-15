'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1D2B53' }}>
      {/* Four Boxes Section */}
      <div className="w-full">
        <div className="grid grid-cols-4">
          <div className="bg-[#71C0BB] p-6 text-center hover:bg-[#5BA8A4] transition-colors duration-300">
            <Link href="/know-lnct" className="text-white text-lg font-semibold">Know LNCT</Link>
          </div>
          <div className="bg-[#5BA8A4] p-6 text-center hover:bg-[#459691] transition-colors duration-300">
            <Link href="/academics" className="text-white text-lg font-semibold">Academics</Link>
          </div>
          <div className="bg-[#459691] p-6 text-center hover:bg-[#2F847F] transition-colors duration-300">
            <Link href="/campus-life" className="text-white text-lg font-semibold">Campus Life</Link>
          </div>
          <div className="bg-[#2F847F] p-6 text-center hover:bg-[#1A726D] transition-colors duration-300">
            <Link href="/know-founder" className="text-white text-lg font-semibold">Know Founder</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Other Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Other Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/career" className="text-[#2b8fc0] hover:text-white">Career</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/placement-records" className="text-[#2b8fc0] hover:text-white">Placement Records</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/admission-process" className="text-[#2b8fc0] hover:text-white">Admission Process</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/admission-enquiry" className="text-[#2b8fc0] hover:text-white">Admission Enquiry</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/seminar-hall" className="text-[#2b8fc0] hover:text-white">Seminar Hall</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/industry-testimonials" className="text-[#2b8fc0] hover:text-white">Industry Testimonials</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/transportation" className="text-[#2b8fc0] hover:text-white">Transportation</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/auditorium" className="text-[#2b8fc0] hover:text-white">Auditorium</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/hostels" className="text-[#2b8fc0] hover:text-white">Hostels</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/sports" className="text-[#2b8fc0] hover:text-white">Sports</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/digital-cafeteria" className="text-[#2b8fc0] hover:text-white">Digital Cafeteria</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/digital-library" className="text-[#2b8fc0] hover:text-white">Digital Library</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/digital-classrooms" className="text-[#2b8fc0] hover:text-white">Digital Classrooms</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/career-development-cell" className="text-[#2b8fc0] hover:text-white">Career Development Cell</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/achievements" className="text-[#2b8fc0] hover:text-white">Achievements</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/nirf" className="text-[#2b8fc0] hover:text-white">NIRF</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/privacy-policy" className="text-[#2b8fc0] hover:text-white">Privacy Policy</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="/terms-and-conditions" className="text-[#2b8fc0] hover:text-white">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          {/* LNCT Group Websites */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LNCT Group</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://lnct.ac.in" className="text-[#2b8fc0] hover:text-white">LNCT Group of Colleges Bhopal</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://lnctu.edu.in" className="text-[#2b8fc0] hover:text-white">LNCT University Bhopal</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://lnctindore.edu.in" className="text-[#2b8fc0] hover:text-white">LNCT BPL Indore Campus</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://jnct.edu.in" className="text-[#2b8fc0] hover:text-white">JNCT Bhopal Campus</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://cec.edu.in" className="text-[#2b8fc0] hover:text-white">CEC Bilaspur Campus</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://lnctjabalpur.edu.in" className="text-[#2b8fc0] hover:text-white">LNCT Jabalpur Campus</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://rcds.edu.in" className="text-[#2b8fc0] hover:text-white">RCDS Bhopal</Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                <Link href="https://lnctworldschool.edu.in" className="text-[#2b8fc0] hover:text-white">LNCT World School</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold text-[#747472]">Reception:</span><br />
                <span className="text-[#2b8fc0]">0755-6185300, 0755-6185300/1/2/3/4/5</span>
              </li>
              <li>
                <span className="font-semibold text-[#747472]">Admission Cell:</span><br />
                <span className="text-[#2b8fc0]">7440777111, 7201800001</span><br />
                <span className="text-[#2b8fc0]">0755-6185350, 0755-6685400</span>
              </li>
              <li>
                <span className="font-semibold text-[#747472]">Training & Placement Cell:</span><br />
                <span className="text-[#2b8fc0]">9826062730, 0755-6185341</span>
              </li>
              <li>
                <span className="font-semibold text-[#747472]">Email:</span><br />
                <a href="mailto:info@lnct.ac.in" className="text-[#2b8fc0] hover:text-white">info@lnct.ac.in</a><br />
                <a href="mailto:admission@lnct.ac.in" className="text-[#2b8fc0] hover:text-white">admission@lnct.ac.in</a><br />
                <a href="mailto:Jobs@lnct.ac.in" className="text-[#2b8fc0] hover:text-white">Jobs@lnct.ac.in</a>
              </li>
              <li>
                <span className="font-semibold text-[#747472]">Address:</span><br />
                <span className="text-gray-400">LNCT Campus, Kalchuri Nagar,<br />
                (P.O. Kolua) Raisen Road,<br />
                Bhopal-462022 (M.P)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Box - Full Width */}
      <div className="w-full bg-[#101415] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4 text-sm">
                <Link href="/brochure" className="text-[#747472] hover:text-white transition-colors duration-300">Brochure</Link>
                <span className="text-[#747472]">|</span>
                <Link href="/privacy-policy" className="text-[#747472] hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <span className="text-[#747472]">|</span>
                <Link href="/terms-and-conditions" className="text-[#747472] hover:text-white transition-colors duration-300">Terms & Conditions</Link>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-[#747472] hover:text-white transition-colors duration-300">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#747472] hover:text-white transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#747472] hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#747472] hover:text-white transition-colors duration-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="text-[#747472] text-sm">
              Copyright © 2025 H.K. KALCHURI EDUCATION TRUST
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 