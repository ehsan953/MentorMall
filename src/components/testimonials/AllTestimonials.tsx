import React, { useState } from "react";
import Button from "../common/Button";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    image: "/Mentor1.JPG",
    name: "John Doe",
    feedback: "This platform is amazing! It helped me achieve my goals.",
    designation: "Business Owner",
    membership: "Starter",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 2,
    image: "/Mentor1.JPG",
    name: "Jane Smith",
    feedback: "The mentorship I received was life-changing. Highly recommend!",
    designation: "Entrepreneur",
    membership: "Practitioner",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 3,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Instructor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 4,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Standard",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 5,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Senior Instructor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 6,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Mentor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 7,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Mentor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 8,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Mentor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 9,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Mentor",
    date: "15/12/2024 - 6:15am",
  },
  {
    id: 10,
    image: "/Mentor1.JPG",
    name: "Sam Wilson",
    feedback: "Professional and insightful guidance. Fantastic experience!",
    designation: "Freelancer",
    membership: "Mentor",
    date: "15/12/2024 - 6:15am",
  },
];

export default function AllTestimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const testimonialsPerPage = 9;

  // Calculate the index of the first and last program for the current page
  const indexOfLastProgram = currentPage * testimonialsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - testimonialsPerPage;

  // Get the current programs to display based on pagination
  const currenttestimonials = testimonials.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section className="">
      <div className="p-8 max-w-[1400px] mx-auto text-center">
        <div className="flex flex-wrap gap-4 md:gap-0 justify-between mb-8">
          <div className="basis-full md:basis-[50%] flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
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
          <div className="basis-full sm:basis-[48%] md:basis-[24%] flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
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
          <div className="basis-full sm:basis-[48%] md:basis-[24%] flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
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
        </div>
        

        <div className="flex justify-center">
          {/* {isGrid ? ( */}
          <div className="basis-[90%] sm:basis-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
            {currenttestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-4 border rounded shadow-sm transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-[50%] object-cover"
                  />
                  <div className="flex flex-1 justify-between">
                    <div className="">
                      <h3 className="text-xl text-left font-medium text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-left text-[12px] text-gray-600">
                        {testimonial.membership}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="25"
                      viewBox="0 0 31 25"
                      fill="none"
                    >
                      <path
                        d="M30.892 4.95525C31.1626 4.72028 30.8432 4.73325 30.8432 4.73325C30.6025 4.80455 30.3618 4.89529 30.3618 4.89529C30.0006 5.03733 29.6606 5.23098 29.3518 5.47055C29.0402 5.67926 28.7611 5.93552 28.5242 6.23054C27.3836 6.60163 25.0883 7.65654 25.0883 7.65654C24.5329 7.77645 23.7431 8.04707 23.7431 8.04707C23.3077 8.18513 22.8942 8.38823 22.516 8.64988C22.3022 8.73695 22.072 8.77296 21.8427 8.75521C21.4333 8.74261 21.0244 8.79341 20.6297 8.90591C20.4425 8.96424 20.2867 9.00799 20.1577 9.04202C20.249 8.58506 20.2977 8.14754 20.2977 8.14754C20.3175 7.91099 20.3238 7.67346 20.3166 7.43616C20.26 6.37638 19.8321 5.97775 19.81 5.92914C18.6269 4.75107 17.3621 5.70714 17.3621 5.70714C16.4653 6.35532 16.7862 7.83641 16.8319 7.94336C16.8771 8.21393 16.9791 8.47108 17.1308 8.69687C16.857 8.81516 16.0452 8.73738 16.0452 8.73738C15.5937 8.16212 14.4279 7.76511 14.4279 7.76511C13.9166 7.43778 13.2512 6.48333 13.2512 6.48333C12.636 5.2048 11.1776 4.71866 11.1871 4.64899C9.24882 3.38017 8.88226 2.83732 8.88226 2.83732C8.70195 2.7195 8.54891 2.56241 8.43388 2.37712C8.39612 2.3285 8.35522 2.27503 8.31589 2.21507C8.20261 1.84075 7.96663 1.2428 7.97135 0.81014C7.97135 0.81014 7.90527 0.324005 7.67243 0.829586C7.64711 0.918909 7.63076 1.01068 7.62366 1.10344L7.58747 1.06293C7.58824 1.0581 7.58824 1.05318 7.58747 1.04835H7.57017C6.7159 0.080938 6.88738 0.383962 6.47834 0.00153593C6.25336 -0.0227708 6.32101 0.249465 6.32101 0.249465C6.34951 0.308533 6.38607 0.3631 6.42956 0.41151C6.30371 0.361276 6.1747 0.366137 6.30371 0.698329C6.30371 0.698329 6.33989 0.748563 6.40125 0.821483C6.34146 0.81014 6.14166 0.790695 6.27381 1.05483C6.27381 1.05483 6.37293 1.14557 6.52081 1.26063C6.44687 1.26063 6.36349 1.30438 6.46418 1.49883C6.63095 1.64327 6.80819 1.77436 6.99436 1.89098C7.0533 2.06999 7.1259 2.24392 7.21147 2.41114C7.44903 2.80167 8.05158 3.0496 8.05158 3.0496C8.83821 3.62324 10.4933 5.72496 10.4933 5.72496C10.8572 6.21057 11.2863 6.6405 11.7676 7.00188C12.0787 7.28042 12.3286 7.62402 12.5007 8.0098C13.0435 8.89618 12.9979 8.89294 14.2769 9.99647C14.5218 10.323 14.6767 10.7115 14.7253 11.1211C14.686 11.6072 14.6828 12.2003 14.6828 12.2003C14.6767 12.5421 14.5958 12.878 14.4459 13.183C14.2961 13.488 14.0813 13.7542 13.8175 13.9617C13.5772 14.1324 13.3115 14.2615 13.0309 14.3441C12.0413 14.6115 11.143 15.6162 11.1084 15.6599C10.5153 16.4021 8.66987 17.5867 8.66987 17.5867C7.90842 18.2138 6.62465 18.3839 6.62465 18.3839C4.93498 18.4196 3.06124 20.5521 3.06124 20.5521C2.93544 20.7405 2.7486 20.8767 2.53421 20.9361C1.82782 20.6525 1.5997 21.4223 1.5997 21.4223C1.51516 21.749 1.37042 22.056 1.17335 22.3265C0.668336 22.9746 0.514158 23.3652 0.474827 23.5888C0.461893 23.6418 0.454509 23.6962 0.452802 23.7508C0.440816 23.7947 0.44327 23.8413 0.459781 23.8835C0.476292 23.9258 0.505928 23.9612 0.54405 23.9842C0.543454 24.0438 0.557579 24.1026 0.585099 24.155C0.61262 24.2075 0.652631 24.2518 0.701375 24.284C0.702433 24.292 0.702433 24.3002 0.701375 24.3083C0.701375 24.4703 0.885444 24.5611 0.904323 24.5692C0.918188 24.6348 0.951526 24.6944 0.999724 24.7397C1.04792 24.785 1.1086 24.8138 1.17335 24.822C1.46283 25.2109 1.78062 24.8414 1.78062 24.8414C1.83704 24.7677 1.88361 24.6865 1.91907 24.6C2.01637 24.4041 2.09184 24.1975 2.14404 23.9842C2.2526 23.587 2.43067 23.2136 2.66951 22.8823C2.883 22.6661 3.07924 22.4325 3.25633 22.1839C3.79595 21.5843 4.12476 21.432 4.12476 21.432C4.82133 21.1596 5.50395 20.8507 6.16998 20.5067C6.42975 20.4059 6.69848 20.3315 6.97234 20.2847C7.17588 20.2607 7.3816 20.264 7.58433 20.2944C7.93516 20.3738 8.29229 20.2442 8.52828 20.1567C8.52828 20.1567 9.13869 20.0789 9.73968 19.9946C9.59385 20.3139 9.46671 20.6418 9.35895 20.9766C9.32555 21.1804 9.22296 21.3653 9.06947 21.4984C8.38354 21.5422 8.48265 22.2649 8.48265 22.2649C8.52718 22.571 8.51328 22.8831 8.44175 23.1837C8.09249 24.352 8.28442 24.6 8.28442 24.6C8.33949 24.7717 8.51412 24.937 8.69032 24.809C8.92473 24.8965 8.96879 24.7896 9.09936 24.7588C9.28728 24.7185 9.45673 24.6147 9.58078 24.4638C9.65798 24.2496 9.69792 24.0231 9.69877 23.7946C9.69333 23.515 9.70911 23.2355 9.74597 22.9584C9.78263 22.6899 9.84806 22.4263 9.94105 22.1725C10.1022 21.8533 10.3015 21.5561 10.5342 21.2878C10.9936 20.8292 11.895 19.8439 12.2757 19.4242L12.4488 19.374C13.3235 19.058 14.0661 18.7663 14.0661 18.7663C15.8329 18.1295 16.352 17.4813 16.352 17.4813C17.3719 16.5019 18.4501 15.5889 19.5803 14.7476C20.5605 14.1643 20.9963 12.641 20.9963 12.641C21.2983 11.3657 21.6869 11.3544 21.8442 11.2086C22.2695 10.9718 22.6706 10.6917 23.0415 10.3724C24.0263 10.1553 25.2833 9.11656 25.2833 9.11656C25.7742 8.86378 26.0432 8.70983 26.0432 8.70983C26.748 8.35657 28.4251 7.02456 28.4251 7.02456C28.559 6.92677 28.7065 6.8503 28.8625 6.7977C28.987 6.80939 29.1125 6.79409 29.2309 6.75278C29.3493 6.71148 29.458 6.64508 29.55 6.55788C29.5925 6.50926 29.6302 6.46227 29.6648 6.41528C29.8877 6.29421 30.0985 6.15093 30.2941 5.98748C30.6088 5.53537 30.1651 5.68121 30.1651 5.68121C30.1187 5.70515 30.0709 5.72626 30.022 5.74441C30.0763 5.65434 30.1461 5.57526 30.2281 5.51106C30.4145 5.47966 30.5977 5.43084 30.7756 5.36522C30.9329 5.24531 30.9329 5.20318 30.8825 5.18049C31.0965 4.93905 30.958 4.94391 30.892 4.95525Z"
                        fill="#005187"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-left text-md text-gray-700 mb-4">
                  {testimonial.feedback}
                </p>
                <div className="flex justify-between">
                  <span className="text-[12px] text-gray-600">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 mx-2 text-gray-400 shadow-lg rounded-md"
          >
            <FaChevronLeft className="h-[14px]" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 rounded-md mx-1 text-sm ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 font-bold shadow-lg"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="shadow-lg px-3 py-2 mx-2 text-gray-400 rounded-md"
          >
            <FaChevronRight className="h-[14px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
