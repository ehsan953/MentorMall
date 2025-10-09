import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import Register from "../signup/register";
import Login from "../signup/login";
import Contact from "../contact/Contact";
import Modal from "../common/modal/Modal";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsSignupModalOpen(false);
    setIsSigninModalOpen(false);
    setIsContactUsModalOpen(false);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    <div className="max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between gap-6 py-2 lg:py-4 px-6 font-bold text-[18px] w-full">
        <div className="hidden lg:flex lg:flex-col gap-2 w-full lg:order-2">
          <div className="flex justify-between items-center">
            {/* <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
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
            </div> */}
            {/* Navigation Dropdowns */}
          <div
            className="gap-2 text-[#595459] text-[14px] font-normal flex flex-col lg:flex-row"
            ref={dropdownRef}
          >
            {/* Explore Dropdown */}
            <div className="relative">
              <Button
                onClick={() => toggleDropdown("explore")}
                customClass={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                  openDropdown === "explore"
                    ? "bg-gray-300 transition duration-200"
                    : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                <span>Explore</span> <BiChevronDown className="h-5 w-5" />
              </Button>
              {openDropdown === "explore" && (
                <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                  <Link
                    to="/membership"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Membership
                  </Link>
                  <Link
                    to="/blog"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/testimonial"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Testimonial
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    About us
                  </Link>
                  <a
                    onClick={() => setIsContactUsModalOpen(true)}
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Contact us
                  </a>
                </div>
              )}
            </div>
            {isContactUsModalOpen && (
              <Modal
                isModalOpen={isContactUsModalOpen}
                onModalClose={handleModalClose}
              >
                <Contact onClose={handleModalClose} />
              </Modal>
            )}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("learn")}
                className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                  openDropdown === "learn"
                    ? "bg-gray-300 transition duration-200"
                    : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                <span>Learn</span> <BiChevronDown className="h-5 w-5" />
              </button>
              {openDropdown === "learn" && (
                <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                  <Link
                    to="/courses"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Live Courses
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("career")}
                className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                  openDropdown === "career"
                    ? "bg-gray-300 transition duration-200"
                    : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                <span>Career</span> <BiChevronDown className="h-5 w-5" />
              </button>
              {openDropdown === "career" && (
                <div className="absolute left-0 mt-1 w-[12.5rem] bg-white shadow-lg rounded-md p-2 z-50">
                  <Link
                    to="/"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Become a Practitioner
                  </Link>
                  <Link
                    to="/"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Become an Instructor
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("store")}
                className={`flex gap-1 items-center cursor-pointer pl-4 pr-3 py-2 rounded-md transition-colors ${
                  openDropdown === "store"
                    ? "bg-gray-300 transition duration-200"
                    : "hover:bg-gray-200 transition duration-300"
                }`}
              >
                <span>Store</span> <BiChevronDown className="h-5 w-5" />
              </button>
              {openDropdown === "store" && (
                <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                  <Link
                    to="/store"
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Products
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <NavLink to="/" className="block hover:bg-gray-200">
                <button className="rounded-md flex justify-between w-full text-left px-4 py-2 transition duration-300 hover:bg-gray-200">
                  Jobs
                </button>
              </NavLink>
            </div>
            {/* Add other dropdowns here */}
          </div>
            <div className="flex items-center gap-2">
              <Button customClass="px-4 py-2 rounded-md text-gray-500 font-medium hover:text-green-500" onClick={() => setIsSigninModalOpen(true)}>
                <span>Sign in</span>
              </Button>
              <Button
                customClass="px-4 py-2 text-sm rounded-md border border-green-500 hover:bg-green-500 text-green-500 hover:text-white"
                onClick={() => setIsSignupModalOpen(true)}
              >
                <span>Join</span>
              </Button>
              {/* <FaBell className="text-2xl cursor-pointer text-gray-500" />
              <FaUser className="text-2xl cursor-pointer text-gray-500" /> */}
            </div>
            {isSignupModalOpen && (
              <Modal
                isModalOpen={isSignupModalOpen}
                onModalClose={handleModalClose}
              >
                <Register onClose={handleModalClose} />
              </Modal>
            )}
            {isSigninModalOpen && (
              <Modal
                isModalOpen={isSigninModalOpen}
                onModalClose={handleModalClose}
              >
                <Login onClose={handleModalClose} />
              </Modal>
            )}
          </div>

          
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex gap-2 relative text-[#595459] text-[14px] font-normal">
          {/* <div className="text-gray-500">
            <FaSearch className="w-[24px] h-[24px]" />
          </div> */}
          <div className="text-gray-500 relative" onClick={toggleMenu}>
            <MdApps className="w-[24px] h-[24px] cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div
              className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-60 z-50"
              ref={dropdownRef}
            >
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("explore")}
                  className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    openDropdown === "explore"
                      ? "bg-gray-300 transition duration-200"
                      : "hover:bg-gray-200 transition duration-300"
                  }`}
                >
                  Explore <BiChevronDown />
                </button>
                {openDropdown === "explore" && (
                  <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                    <Link
                      to="/membership"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Membership
                    </Link>
                    <Link
                      to="/blog"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/testimonial"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Testimonial
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      About Us
                    </Link>
                    <a
                      onClick={() => setIsContactUsModalOpen(true)}
                      className="block px-4 py-2 hover:bg-gray-200 hover:cursor-pointer"
                    >
                      Contact Us
                    </a>
                  </div>
                )}
              </div>
              {isContactUsModalOpen && (
                <Modal
                  isModalOpen={isContactUsModalOpen}
                  onModalClose={handleModalClose}
                >
                  <Contact onClose={handleModalClose} />
                </Modal>
              )}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("learn")}
                  className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    openDropdown === "learn"
                      ? "bg-gray-300 transition duration-200"
                      : "hover:bg-gray-200 transition duration-300"
                  }`}
                >
                  Learn <BiChevronDown />
                </button>
                {openDropdown === "learn" && (
                  <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                    <Link
                      to="/courses"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Live Courses
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("career")}
                  className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    openDropdown === "career"
                      ? "bg-gray-300 transition duration-200"
                      : "hover:bg-gray-200 transition duration-300"
                  }`}
                >
                  Career <BiChevronDown />
                </button>
                {openDropdown === "career" && (
                  <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                    <Link
                      to="/"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Become a Practitioner
                    </Link>
                    <Link
                      to="/"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Become an Instructor
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("store")}
                  className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    openDropdown === "store"
                      ? "bg-gray-300 transition duration-200"
                      : "hover:bg-gray-200 transition duration-300"
                  }`}
                >
                  Store <BiChevronDown />
                </button>
                {openDropdown === "store" && (
                  <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                    <Link
                      to="/store"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Products
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("jobs")}
                  className={`flex justify-between w-full items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    openDropdown === "jobs"
                      ? "bg-gray-300 transition duration-200"
                      : "hover:bg-gray-200 transition duration-300"
                  }`}
                >
                  Jobs <BiChevronDown />
                </button>
                {openDropdown === "jobs" && (
                  <div className="absolute left-0 mt-1 w-52 bg-white shadow-lg rounded-md p-2 z-10">
                    <Link
                      to="/"
                      onClick={closeDropdown}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Go to Jobs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center px-2 lg:order-1">
          <a href="/">
            <img
              src="/text-logo-cap.png"
              // src="/zentra-cropped2.png"
              alt=""
              className="w-[130px] lg:w-[180px]"
            />
          </a>
        </div>

        {/* Icons */}

        <div className="flex items-center gap-2 order-3 lg:hidden">
          <Button customClass="px-4 py-2 rounded-md text-gray-500 font-medium hover:text-green-500">
            <span>Sign in</span>
          </Button>
          <Button
            customClass="px-4 py-2 text-sm rounded-md border border-green-500 hover:bg-green-500 text-green-500 hover:text-white"
            onClick={() => setIsSignupModalOpen(true)}
          >
            <span>Join</span>
          </Button>
          {/* <FaBell className="text-2xl cursor-pointer text-gray-500" />
              <FaUser className="text-2xl cursor-pointer text-gray-500" /> */}
        </div>
        {isSignupModalOpen && (
              <Modal
                isModalOpen={isSignupModalOpen}
                onModalClose={handleModalClose}
              >
                <Register onClose={handleModalClose} />
              </Modal>
            )}
      </div>
    </div>
  );
}
