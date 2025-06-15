'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isPlacementOpen, setIsPlacementOpen] = useState(false);
  const [isAlumniOpen, setIsAlumniOpen] = useState(false);
  const [isImportantLinksOpen, setIsImportantLinksOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', hasDropdown: true, dropdownType: 'about' },
    { name: 'College', path: '/college', hasDropdown: true, dropdownType: 'college' },
    { name: 'Department', path: '/department', hasDropdown: true, dropdownType: 'department' },
    { name: 'Admission', path: '/admission', hasDropdown: true, dropdownType: 'admission' },
    { name: 'Placement', path: '/placement', hasDropdown: true, dropdownType: 'placement' },
    { name: 'Alumni', path: '/alumni', hasDropdown: true, dropdownType: 'alumni' },
    { name: 'Important Links', path: '/important-links', hasDropdown: true, dropdownType: 'importantLinks' },
    { name: 'Login', path: '/login', hasDropdown: true, dropdownType: 'login' },
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
    { name: 'Civil Engineering', path: '/navbaritems/civildepartment' },
    { name: 'Electrical and Electronics Engineering', path: '/department/electrical-electronics-engineering' },
    { name: 'Mechanical Engineering', path: '/department/mechanical-engineering' },
    { name: 'Electrical Engineering', path: '/department/electrical-engineering' },
    { name: 'Electronics and Communication Engineering', path: '/department/electronics-communication-engineering' },
    { name: 'Computer Science Engineering', path: '/department/computer-science-engineering' },
    { name: 'Information Technology Engineering', path: '/department/information-technology-engineering' },
  ];

  const admissionItems = [
    { name: 'Admission-process', path: '/admission/admission-process' },
    { name: 'Admission Enquiry', path: '/admission/admission-enquiry' },
    { name: 'T & C Online Payment', path: '/admission/t-c-online-payment' },
    { name: 'Fee Refund Policy', path: '/admission/fee-refund-policy' },
    { name: 'Download Prospectus', path: '/admission/download-prospectus' },
    { name: 'Fee Structure', path: '/admission/fee-structure' },
  ];

  const placementItems = [
    { name: 'Career Development Cell', path: '/placement/career-development-cell' },
    { name: 'Clubs', path: '/placement/clubs' },
    { name: 'Regular Activities', path: '/placement/regular-activities' },
    { name: 'Placement Records', path: '/placement/placement-records' },
    { name: 'Industry Interaction', path: '/placement/industry-interaction' },
    { name: 'CISCO Academy', path: '/placement/cisco-academy' },
    { name: 'Achievements', path: '/placement/achievements' },
    { name: 'Coursera For LNCT', path: '/placement/coursera-for-lnct' },
    { name: 'Student Testimonial', path: '/placement/student-testimonial' },
    { name: 'Placement Brochure', path: '/placement/placement-brochure' },
    { name: 'Kalchuri-LNCT Group Incubation Centre', path: '/placement/kalchuri-lnct-group-incubation-centre' },
    { name: 'LNCT MODEL UNITED NATIONS 2022', path: '/placement/lnct-model-united-nations-2022' },
    { name: 'Triumph', path: '/placement/triumph' },
  ];

  const alumniItems = [
    { name: 'About Alumni Cell', path: '/alumni/about-alumni-cell' },
    { name: 'Alumni Affairs', path: '/alumni/alumni-affairs' },
    { name: 'Alma Connect', path: '/alumni/alma-connect' },
    { name: 'Alumni Newsletter', path: '/alumni/alumni-newsletter' },
    { name: 'Eminent Alumni', path: '/alumni/eminent-alumni' },
    { name: 'Endowment Foundation', path: '/alumni/endowment-foundation' },
  ];

  const importantLinksItems = [
    { name: 'National Conferences', path: '/important-links/national-conferences' },
    { name: 'NIRF 2025', path: '/important-links/nirf-2025' },
    { name: 'Hostel Allotment', path: '/important-links/hostel-allotment' },
    { name: 'Agnipath Yogna', path: '/important-links/agnipath-yogna' },
    { name: 'CSR', path: '/important-links/csr' },
    { name: 'ICMMCI-2022', path: '/important-links/icmmci-2022' },
    { name: 'Admission 2025-26', path: '/important-links/admission-2025-26' },
    { name: 'Voice of LNCT', path: '/important-links/voice-of-lnct' },
    { name: 'LNCT Bhopal', path: '/important-links/lnct-bhopal' },
    { name: 'LNCP Bhopal', path: '/important-links/lncp-bhopal' },
    { name: 'LNCT Radio', path: '/important-links/lnct-radio' },
    { name: 'Tie-Up', path: '/important-links/tie-up' },
    { name: 'LNCT Blog', path: '/important-links/lnct-blog' },
  ];

  const loginItems = [
    { name: 'Employee Login', path: '/login/employee-login' },
    { name: 'Student Login', path: '/login/student-login' },
    { name: 'New Student Registration', path: '/login/new-student-registration' },
    { name: 'Online Fee Payment', path: '/login/online-fee-payment' },
    { name: 'Registration Process Tutorial', path: '/login/registration-process-tutorial' },
    { name: 'LNCT Hall Booking App', path: '/login/lnct-hall-booking-app' },
  ];

  const aboutItems = [
    { name: 'LNCT-Group', path: '/about/lnct-group' },
    { name: 'Our Leadership', path: '/about/our-leadership' },
    { name: 'Infrastructure', path: '/about/infrastructure' },
    { name: 'Facilities', path: '/about/facilities' },
    { name: 'Innovation & Start-up', path: '/about/innovation-start-up' },
    { name: 'Committees', path: '/about/committees' },
    { name: 'AICTE', path: '/about/aicte' },
    { name: 'Accreditation Status', path: '/about/accreditation-status' },
    { name: 'RGPV', path: '/about/rgpv' },
    { name: 'Academic Calendar', path: '/about/academic-calendar' },
    { name: 'Hostel Allotment', path: '/about/hostel-allotment' },
    { name: 'Bus Route', path: '/about/bus-route' },
    { name: 'International Journal of LNCT', path: '/about/international-journal-of-lnct' },
    { name: 'Grievance Redressal', path: '/about/grievance-redressal' },
  ];

  return (
    <div className="w-full z-40">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative border border-black rounded-2xl" style={{ background: 'rgb(243,243,243)' }}>
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
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'department') {
                              setIsDepartmentOpen(!isDepartmentOpen);
                              setIsCollegeOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'placement') {
                              setIsPlacementOpen(!isPlacementOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'alumni') {
                              setIsAlumniOpen(!isAlumniOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'importantLinks') {
                              setIsImportantLinksOpen(!isImportantLinksOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'login') {
                              setIsLoginOpen(!isLoginOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsAboutOpen(false);
                            } else if (item.dropdownType === 'about') {
                              setIsAboutOpen(!isAboutOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                            } else if (item.dropdownType === 'admission') {
                              setIsAdmissionOpen(!isAdmissionOpen);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            }
                          }}
                          className="text-black hover:text-gray-700 text-base font-semibold transition-colors duration-300 cursor-pointer px-4 py-2"
                        >
                          {item.name}
                        </button>
                        
                        <div className={`absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg transition-all duration-300 z-50 ${ /* White background for dropdown */
                          (item.dropdownType === 'college' && isCollegeOpen) || 
                          (item.dropdownType === 'department' && isDepartmentOpen) ||
                          (item.dropdownType === 'placement' && isPlacementOpen) ||
                          (item.dropdownType === 'alumni' && isAlumniOpen) ||
                          (item.dropdownType === 'importantLinks' && isImportantLinksOpen) ||
                          (item.dropdownType === 'login' && isLoginOpen) ||
                          (item.dropdownType === 'about' && isAboutOpen) ||
                          (item.dropdownType === 'admission' && isAdmissionOpen)
                            ? 'opacity-100 visible' 
                            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                        }`}>
                          <div className={item.dropdownType === 'placement' ? '' : 'py-2'}>
                            {((item) => {
                              let itemsToShow = [];
                              if (item.dropdownType === 'college') {
                                itemsToShow = collegeItems;
                              } else if (item.dropdownType === 'department') {
                                itemsToShow = departmentItems;
                              } else if (item.dropdownType === 'placement') {
                                itemsToShow = placementItems;
                              } else if (item.dropdownType === 'alumni') {
                                itemsToShow = alumniItems;
                              } else if (item.dropdownType === 'importantLinks') {
                                itemsToShow = importantLinksItems;
                              } else if (item.dropdownType === 'login') {
                                itemsToShow = loginItems;
                              } else if (item.dropdownType === 'about') {
                                itemsToShow = aboutItems;
                              } else if (item.dropdownType === 'admission') {
                                itemsToShow = admissionItems;
                              }
                              return (
                                <div className="flex">
                                  <div className={`${item.dropdownType === 'placement' || item.dropdownType === 'department' ? 'w-[400px]' : 'w-64'}`}>
                                    {itemsToShow.map((dropdownItem) => (
                                      <Link
                                        key={dropdownItem.name}
                                        href={dropdownItem.path}
                                        className={`block text-black hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                                          item.dropdownType === 'placement' || item.dropdownType === 'department' ? 'pl-4 py-1.5' : 'px-4 py-2'
                                        }`}
                                        onClick={() => {
                                          setIsCollegeOpen(false);
                                          setIsDepartmentOpen(false);
                                          setIsPlacementOpen(false);
                                          setIsAlumniOpen(false);
                                          setIsImportantLinksOpen(false);
                                          setIsLoginOpen(false);
                                          setIsAboutOpen(false);
                                        }}
                                      >
                                        {dropdownItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                  {item.dropdownType === 'placement' && (
                                    <div className="w-[300px] border-l border-gray-200 h-fit">
                                      <img 
                                        src="/images/call-to-Action.jpg" 
                                        alt="Call to Action"
                                        className="w-full object-cover rounded-r-xl"
                                        style={{ height: `${placementItems.length * 2.4}rem` }}
                                      />
                                    </div>
                                  )}
                                  {item.dropdownType === 'department' && (
                                    <div className="w-[300px] border-l border-gray-200 h-fit">
                                      <img 
                                        src="/images/library.jpg" 
                                        alt="Library"
                                        className="w-full object-cover rounded-r-xl"
                                        style={{ height: `${departmentItems.length * 2.4}rem` }}
                                      />
                                    </div>
                                  )}
                                  {item.dropdownType === 'admission' && (
                                    <div className="w-[300px] border-l border-gray-200 h-fit">
                                      <img 
                                        src="/images/admission-placeholder.jpg" 
                                        alt="Admission"
                                        className="w-full object-cover rounded-r-xl"
                                        style={{ height: `${admissionItems.length * 2.4}rem` }}
                                      />
                                    </div>
                                  )}
                                </div>
                              );
                            })(item)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-black hover:text-gray-700 text-base font-semibold transition-colors duration-300 cursor-pointer px-4 py-2"
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
                className="text-black hover:text-gray-700 p-2 cursor-pointer"
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
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'department') {
                          setIsDepartmentOpen(!isDepartmentOpen);
                          setIsCollegeOpen(false);
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'placement') {
                          setIsPlacementOpen(!isPlacementOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'alumni') {
                          setIsAlumniOpen(!isAlumniOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsPlacementOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'importantLinks') {
                          setIsImportantLinksOpen(!isImportantLinksOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'login') {
                          setIsLoginOpen(!isLoginOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsAboutOpen(false);
                        } else if (item.dropdownType === 'about') {
                          setIsAboutOpen(!isAboutOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                        } else if (item.dropdownType === 'admission') {
                          setIsAdmissionOpen(!isAdmissionOpen);
                          setIsCollegeOpen(false);
                          setIsDepartmentOpen(false);
                          setIsPlacementOpen(false);
                          setIsAlumniOpen(false);
                          setIsImportantLinksOpen(false);
                          setIsLoginOpen(false);
                          setIsAboutOpen(false);
                        }
                      }}
                      className="text-black hover:bg-gray-100 block w-full text-left px-3 py-2 rounded-full text-base font-medium cursor-pointer"
                    >
                      {item.name}
                    </button>
                    
                    {((item.dropdownType === 'college' && isCollegeOpen) || 
                      (item.dropdownType === 'department' && isDepartmentOpen) ||
                      (item.dropdownType === 'placement' && isPlacementOpen) ||
                      (item.dropdownType === 'alumni' && isAlumniOpen) ||
                      (item.dropdownType === 'importantLinks' && isImportantLinksOpen) ||
                      (item.dropdownType === 'login' && isLoginOpen) ||
                      (item.dropdownType === 'about' && isAboutOpen) ||
                      (item.dropdownType === 'admission' && isAdmissionOpen))
                       && (
                      <div className="pl-4 mt-2 space-y-1 bg-white">
                        {((item) => {
                          let itemsToShow = [];
                          if (item.dropdownType === 'college') {
                            itemsToShow = collegeItems;
                          } else if (item.dropdownType === 'department') {
                            itemsToShow = departmentItems;
                          } else if (item.dropdownType === 'placement') {
                            itemsToShow = placementItems;
                          } else if (item.dropdownType === 'alumni') {
                            itemsToShow = alumniItems;
                          } else if (item.dropdownType === 'importantLinks') {
                            itemsToShow = importantLinksItems;
                          } else if (item.dropdownType === 'login') {
                            itemsToShow = loginItems;
                          } else if (item.dropdownType === 'about') {
                            itemsToShow = aboutItems;
                          } else if (item.dropdownType === 'admission') {
                            itemsToShow = admissionItems;
                          }
                          return itemsToShow.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-3 py-2 text-black hover:bg-gray-100 rounded-full text-base font-medium cursor-pointer"
                            onClick={() => {
                              setIsOpen(false);
                              setIsCollegeOpen(false);
                              setIsDepartmentOpen(false);
                              setIsPlacementOpen(false);
                              setIsAlumniOpen(false);
                              setIsImportantLinksOpen(false);
                              setIsLoginOpen(false);
                              setIsAboutOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ));
                        })(item)}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-black hover:bg-gray-100 block px-3 py-2 rounded-full text-base font-medium cursor-pointer"
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