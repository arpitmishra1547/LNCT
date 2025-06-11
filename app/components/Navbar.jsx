'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'College', path: '/college', hasDropdown: true, dropdownType: 'college' },
    { name: 'Department', path: '/department', hasDropdown: true, dropdownType: 'department' },
    { name: 'Admission', path: '/admission' },
    { name: 'Placement', path: '/placement' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Important Links', path: '/important-links' },
    { name: 'Login', path: '/login' },
    { name: 'Contact', path: '/contact' },
  ];

  const collegeItems = [
    { name: 'LNCT', path: '/college/lnct' },
    { name: 'LNCT & Science', path: '/college/lnct-science' },
    { name: 'LNCT Excellence', path: '/college/lnct-excellence' },
    { name: 'LNCT MBA', path: '/college/lnct-mba' },
    { name: 'LNCT MCA', path: '/college/lnct-mca' },
    { name: 'LNCT Pharmacy', path: '/college/lnct-pharmacy' },
    { name: 'LNCT Vidhyapeeth University', path: '/college/lnct-vidhyapeeth' },
    { name: 'LNCT University', path: '/college/lnct-university' },
    { name: 'LNCT Jabalpur', path: '/college/lnct-jabalpur' },
    { name: 'Jnct BHopal', path: '/college/jnct-bhopal' },
    { name: 'Rishiraj college', path: '/college/rishiraj-college' },
    { name: 'CEC bilaspur', path: '/college/cec-bilaspur' },
  ];

  const departmentItems = [
    { name: 'Civil Engineering', path: '/department/civil-engineering' },
    { name: 'Electrical and Electronics Engineering', path: '/department/electrical-electronics-engineering' },
    { name: 'Mechanical Engineering', path: '/department/mechanical-engineering' },
    { name: 'Electrical Engineering', path: '/department/electrical-engineering' },
    { name: 'Electronics and Communication Engineering', path: '/department/electronics-communication-engineering' },
    { name: 'Computer Science Engineering', path: '/department/computer-science-engineering' },
    { name: 'Information Technology Engineering', path: '/department/information-technology-engineering' },
  ];

  return (
    <div className="fixed w-full z-40 mt-27">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Glassy background with custom gradient */}
          <div 
            className="absolute inset-0 backdrop-blur-md rounded-2xl border border-white/20"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
            }}
          />
          
          <div className="relative flex items-center justify-between h-14">
            {/* Desktop Menu */}
            <div className="hidden md:block w-full">
              <div className="flex items-baseline justify-between space-x-4">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div className="relative group">
                        <button
                          onClick={() => {
                            if (item.dropdownType === 'college') {
                              setIsCollegeOpen(!isCollegeOpen);
                              setIsDepartmentOpen(false);
                            } else if (item.dropdownType === 'department') {
                              setIsDepartmentOpen(!isDepartmentOpen);
                              setIsCollegeOpen(false);
                            }
                          }}
                          className="text-white/80 hover:text-white text-base font-semibold transition-colors duration-300 cursor-pointer px-4 py-2"
                        >
                          {item.name}
                        </button>
                        
                        <div className={`absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-all duration-300 z-50 ${
                          (item.dropdownType === 'college' && isCollegeOpen) || 
                          (item.dropdownType === 'department' && isDepartmentOpen) 
                            ? 'opacity-100 visible' 
                            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                        }`}>
                          <div className="py-2">
                            {(item.dropdownType === 'college' ? collegeItems : departmentItems).map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                                onClick={() => {
                                  setIsCollegeOpen(false);
                                  setIsDepartmentOpen(false);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-white/80 hover:text-white text-base font-semibold transition-colors duration-300 cursor-pointer px-4 py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 p-2 cursor-pointer"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.dropdownType === 'college') {
                          setIsCollegeOpen(!isCollegeOpen);
                          setIsDepartmentOpen(false);
                        } else if (item.dropdownType === 'department') {
                          setIsDepartmentOpen(!isDepartmentOpen);
                          setIsCollegeOpen(false);
                        }
                      }}
                      className="text-white hover:bg-white/10 block w-full text-left px-3 py-2 rounded-full text-base font-medium cursor-pointer"
                    >
                      {item.name}
                    </button>
                    
                    {((item.dropdownType === 'college' && isCollegeOpen) || 
                      (item.dropdownType === 'department' && isDepartmentOpen)) && (
                      <div className="pl-4 mt-2 space-y-1">
                        {(item.dropdownType === 'college' ? collegeItems : departmentItems).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-3 py-2 text-white hover:bg-white/10 rounded-full text-base font-medium cursor-pointer"
                            onClick={() => {
                              setIsOpen(false);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-white hover:bg-white/10 block px-3 py-2 rounded-full text-base font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 