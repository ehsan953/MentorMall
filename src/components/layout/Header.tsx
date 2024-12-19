import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import Button from '../../components/common/Button';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <div className="flex items-center justify-between gap-6 py-2 lg:py-4 px-6 font-bold text-[18px] w-full bg-slate-50">
      {/* Center Links & Search */}
      <div className="hidden lg:flex lg:flex-col gap-2 w-full lg:order-2">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
          <div className="p-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none w-full font-normal focus:border-blue-50"
          />
        </div>
        
        {/* Navigation Dropdowns */}
        <div className="gap-2 text-[#595459] text-[14px] font-normal flex flex-col lg:flex-row" ref={dropdownRef}>
          {/* Explore Dropdown */}
          <div className="relative">
            <Button onClick={() => toggleDropdown("explore")} customClass={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                openDropdown === "explore" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
              }`} >
                <span>Explore</span> <BiChevronDown className="h-5 w-5" />
              </Button>
            {openDropdown === "explore" && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2">
                <NavLink to="/membership" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Membership
                </NavLink>
                <NavLink to="/blog" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Blog
                </NavLink>
                <NavLink to="/testimonial" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Testimonial
                </NavLink>
                <NavLink to="/about" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  About us
                </NavLink>
                <NavLink to="/contact" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Contact us
                </NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("learn")}
              className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                openDropdown === "learn" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
              }`}
            >
              <span>Learn</span> <BiChevronDown className="h-5 w-5" />
            </button>
            {openDropdown === "learn" && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2">
                <NavLink to="/courses" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Live Courses
                </NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("career")}
              className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                openDropdown === "career" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
              }`}
            >
              <span>Career</span> <BiChevronDown className="h-5 w-5" />
            </button>
            {openDropdown === "career" && (
              <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2">
                <NavLink to="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Become a Practitioner
                </NavLink>
                <NavLink to="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Become an Instructor
                </NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("store")}
              className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                openDropdown === "store" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
              }`}
            >
              <span>Store</span> <BiChevronDown className="h-5 w-5" />
            </button>
            {openDropdown === "store" && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2">
                <NavLink to="/store" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                  Products
                </NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <NavLink to="/" onClick={closeDropdown} className="block hover:bg-gray-200">
              <button
                className="rounded-md flex justify-between w-full text-left px-4 py-2 transition duration-300 hover:bg-gray-200"
              >
                Jobs
              </button>
            </NavLink>
          
          </div>
          {/* Add other dropdowns here */}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden flex gap-2 relative text-[#595459] text-[14px] font-normal">
        <div className="text-gray-500">
          <FaSearch className="w-[24px] h-[24px]" />
        </div>
        <div className="text-gray-500 relative" onClick={toggleMenu}>
          <MdApps className="w-[24px] h-[24px] cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div
            className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60"
            ref={dropdownRef}
          >
            <div className="relative">
              <button
                onClick={() => toggleDropdown("explore")}
                className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "explore" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                Explore <BiChevronDown />
              </button>
              {openDropdown === "explore" && (
                <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                  <NavLink to="/membership" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Membership
                  </NavLink>
                  <NavLink to="/blog" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Blog
                  </NavLink>
                  <NavLink to="/testimonial" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Testimonial
                  </NavLink>
                  <NavLink to="/about" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    About Us
                  </NavLink>
                  <NavLink to="/contact" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Contact Us
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("learn")}
                className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "learn" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                Learn <BiChevronDown />
              </button>
              {openDropdown === "learn" && (
                <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                  <NavLink to="/courses" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Live Courses
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("career")}
                className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "career" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                Career <BiChevronDown />
              </button>
              {openDropdown === "career" && (
                <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                  <NavLink to="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Become a Practitioner
                  </NavLink>
                  <NavLink to="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Become an Instructor
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("store")}
                className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "store" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                Store <BiChevronDown />
              </button>
              {openDropdown === "store" && (
                <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                  <NavLink to="/store" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Products
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("jobs")}
                className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "jobs" ? "bg-gray-300 transition duration-200" : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                Jobs <BiChevronDown />
              </button>
              {openDropdown === "jobs" && (
                <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                  <NavLink to="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-200">
                    Go to Jobs
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="flex items-center px-2 lg:order-1">
        <a href="/">
          <img src="/MentorMall-logo-transparent.png" alt="" className="w-[130px] lg:w-[180px]" />
        </a>
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center order-3 text-gray-500">
        <FaBell className="text-2xl cursor-pointer" />
        <FaUser className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
