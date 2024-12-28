import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import logo from '../../images/logo.png';
// import { FaHandsHelping } from "react-icons/fa";
import LoginPopup from './LoginPopup';
import image from '../../images/Figure_img-2.jpg';
import ComingSoon from '../ComingSoon/ComingSoon';
import MegaServices from "../Services/MegaServices/MegaServices";
// import LoginPopup from './LoginPopup';


const Underline = () => (
  <div className="absolute -bottom-1 rounded left-0 w-full h-[4px] bg-[#ff8800] scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
);

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const openComingSoon = () => {
    console.log(isComingSoonOpen);

    setIsComingSoonOpen(!isComingSoonOpen);
  };

  const closeComingSoon = () => {
    console.log(isComingSoonOpen)
    setIsComingSoonOpen(!isComingSoonOpen);
  };
  const openLoginPopup = () => {
    setIsLoginPopupOpen(true); // Open the login popup
  };
  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };


  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#services-dropdown") &&
        !event.target.closest("#mobile-services-dropdown")
      ) {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }

      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleMobileDropdown = () => setMobileDropdownOpen((prev) => !prev);
  return (
    <div className="relative w-full">
      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-300 ">
        <div className="flex items-center justify-between px-6 py-2">
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button w-12 text-xl block md:hidden text-[#ff8800] font-bold h-9 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          {/* Logo */}
          <div className=" items-center  text-[#ff8800] font-bold text-2xl sm:text-3xl md:text-2xl lg:text-3xl">
            <div className="flex flex-col">
              <img src={logo} alt="Maiflix Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-sm  whitespace-nowrap ">Maiflix </span>
            </div>
          </div>
          <button
            className="download-button w-12 text-3xl pl-2 block md:hidden text-[#ff8800] font-bold h-9 focus:outline-none"
          // onClick={downloadFile}
          >
            <LiaFileDownloadSolid />
          </button>

          {/* Desktop Menu Links */}
          <ul className="hidden md:flex items-center space-x-16 text-gray-800 text-lg font-bold lg:pl-20">
            <li className="relative group">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
              >
                Home
              </NavLink>
              <Underline />
            </li>
            <li className="relative group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
              >
                About
              </NavLink>
              <Underline />
            </li>
            <li id="services-dropdown" className="relative group">
              <button className="flex items-center text-gray-800 hover:text-[#ff8800]">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <Underline />

              {/* Mega Menu for large screen */}
              <div className="absolute top-full mt-6 bg-white shadow-lg rounded-lg w-[600px] opacity-0 invisible transition-all duration-300 z-20 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible">
                <div className="grid grid-cols-2 gap-6 px-6 py-6">
                  <div>
                    <ul className="space-y-4 text-sm text-gray-600">
                      <li>
                        <a
                          href="/megamenu"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>DOMESTIC HELPER</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/megamenu"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>BABYSITTER/JAPA</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/megamenu"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>COOK</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-4 text-sm text-gray-600">
                      <li>
                        <a
                          href="/services/all-in-one"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>ALL IN ONE</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/megamenu"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>PART TIMER</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/megamenu"
                          className="hover:text-orange-500 flex flex-col items-start space-y-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">
                              <img
                                src={image}
                                alt="icon"
                                className="w-7 h-7 rounded-full"
                              />
                            </span>
                            <span>24 HRS ALL ROUNDER</span>
                          </div>
                          <p className="text-sm text-gray-500 pl-7 font-normal">
                            Here Some Description
                          </p>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </li>



            <li className="relative group text-gray-300">
              <NavLink
                onClick={openComingSoon}
                className={({ isActive }) =>
                  isActive ? "text-gray-800" : "hover:text-[#ff8800]"
                }

              >
                Pricing
              </NavLink>
              {isPopupOpen && <LoginPopup onClose={togglePopup} />}
              <Underline />
            </li>
            <li className="relative group">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
              >
                Contact
              </NavLink>
              <Underline />
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:space-x-10 text-md font-bold">
            <NavLink
              // to="/login"
              onClick={openLoginPopup}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ff8800] font-bold"
                  : "text-[#ff8800] hover:underline"
              }
            >
              Login
            </NavLink>

            {/* Search Button on Large Screen */}
            <button
              onClick={openComingSoon}
              className="hidden md:block px-4 py-2 bg-[#ff8800] text-white font-medium rounded-lg border border-transparent transition-all duration-300 hover:bg-transparent hover:text-[#ff8800] hover:border-[#ff8800]">
              Search Job
            </button>

            {/* Cart Button */}
            <div className="relative">
              <NavLink onClick={openComingSoon} aria-label="Go to Cart" >
                <IoCart className="text-[#ff8800] w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-8" />
                <span className="absolute -top-1 -right-1  bg-[#ff8800] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full sm:w-4 sm:h-4 sm:text-sm md:w-4 md:h-4">
                  1
                </span>
              </NavLink>
            </div>

          </div>
        </div>

        {isPopupOpen && <ComingSoon />}
        {/* Mobile Search Bar */}
        <div className="md:hidden w-full px-4 pb-3">
          <div className="relative flex items-center mt-3">
            <TiLocation className="left-3 w-9 h-5" />
            <p>Address, Pin code....</p>
          </div>
        </div>

        <div className="md:hidden w-full px-4 pb-3 border-t border-gray-200">
          <div className="relative flex items-center mt-3">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8800] focus:border-transparent"
            />
          </div>
        </div>
      </nav>


      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <div className="mobile-menu fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-lg z-40 p-4">
          <button
            className="text-gray-600 text-3xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
          <ul className="mt-4 space-y-4 text-gray-800 text-sm font-bold">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li id="mobile-services-dropdown">
              <button
                onClick={toggleMobileDropdown}
                className="flex items-center text-gray-800 hover:text-[#ff8800]"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMobileDropdownOpen && (
                <div className="grid grid-cols-2 gap-8 px-1 py-6 border-2 border-gray-500 rounded-md">
                  <div>
                    {/* <h4 className="text-lg font-semibold text-gray-800">Web Development</h4> */}
                    <ul className="space-y-2 text-xs text-gray-600">
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}>DOMESTIC HELPER
                      </NavLink></li>
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}>COOK</NavLink></li>
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}>BABYSITTER/ JAPA</NavLink></li>
                    </ul>
                  </div>
                  <div>
                    {/* <h4 className="text-lg font-semibold text-gray-800">Mobile Development</h4> */}
                    <ul className="space-y-2 text-xs text-gray-600">
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}>ALL IN ONE</NavLink></li>
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}>PART TIMER</NavLink></li>
                      <li><NavLink to="/megamenu" className="hover:text-[#ff8800]" onClick={() => setMobileMenuOpen(false)}> 24 Hrs ALL ROUNDERE</NavLink></li>
                    </ul>
                  </div>

                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Coming Soon Popup */}
      {isComingSoonOpen && <ComingSoon onClose={closeComingSoon} />}
      {/* Login Popup */}
      {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}
    </div>
  );
};

export default Header;
