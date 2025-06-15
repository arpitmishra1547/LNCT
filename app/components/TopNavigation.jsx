"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopNavigation = () => {
  const [isCampusesOpen, setIsCampusesOpen] = useState(false);

  const topLinks = [
    { 
      name: 'Campuses', 
      path: '/campuses',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'LNCT Bhopal Campus',
          path: '/campuses/bhopal',
          logo: '/images/LNCT-logo (2).png'
        },
        { 
          name: 'LNCT Indore Campus',
          path: '/campuses/indore',
          logo: '/images/LNCTVU-1.png'
        },
,
        { 
          name: 'LNCT University',
          path: '/campuses/university',
          logo: '/images/New-logo.png'
        },
        { 
          name: 'LNCT Jabalpur',
          path: '/campuses/group',
          logo: '/images/logo.png'
        },
        { 
          name: 'JNCT Bhopal',
          path: '/campuses/group',
          logo: '/images/JNCT-1-1.png'
        },
        { 
          name: 'Rishiraj College Bhopal',
          path: '/campuses/group',
          logo: '/images/logo2.jpg'
        },
        { 
          name: 'CEC Bilaspur',
          path: '/campuses/group',
          logo: '/images/cec_logo-1.png'
        }
      ]
    },
    { name: 'Library', path: '/library' },
    { name: 'Student Services', path: '/student-services' },
    { name: 'Career', path: '/career' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <div className="bg-gray-900 pt-0 px-2 pb-2 items-center text-white text-center text-sm w-full">
      <div className="w-full flex items-center pt-0">
        {/* Logo */}
        {/* <div className="relative w-45 h-45 flex-shrink-0">
          <Image 
            src="/images/LNCT-Logo (2).png"
            alt="LNCT Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div> */}

        {/* Additional Links - Centered with equal spacing */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-3xl mx-8">
            {topLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div>
                    <button className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300">
                      {link.name}
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            className="flex items-center px-4 py-2 text-white hover:bg-white/10 transition-colors duration-300"
                          >
                            <div className="relative w-8 h-8 mr-3">
                              <Image
                                src={item.logo}
                                alt={`${item.name} logo`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-full"
                              />
                            </div>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-shrink-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 text-white placeholder-gray-400 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;