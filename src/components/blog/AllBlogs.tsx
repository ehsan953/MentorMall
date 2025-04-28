import React, { useState } from "react";
import Button from "../common/Button";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
const blogs = [
  {
    id: 1,
    blogimage: "/blog.webp",
    blogtitle: "This is Blog Title",
    submittedby: "John Doe",
    blogdescription: "This is Blog description.",
    date: "15-12-2024",
  },
  {
    id: 2,
    blogimage: "/blog-hero-bg.jpg",
    blogtitle: "This is Title",
    submittedby: "ehsan",
    blogdescription: "This is description.",
    date: "15-12-2024",
  },
  {
    id: 3,
    blogimage: "/blog.webp",
    blogtitle: "This is  Title",
    submittedby: "ali",
    blogdescription: "This is description.",
    date: "15-12-2024",
  },
  {
    id: 4,
    blogimage: "/blog-hero-bg.jpg",
    blogtitle: "This is blog Title",
    submittedby: "ali",
    blogdescription: "This is blog description.",
    date: "15-12-2024",
  },
  {
    id: 5,
    blogimage: "/blog.webp",
    blogtitle: "This is  Title",
    submittedby: "awais",
    blogdescription: "This is description.",
    date: "15-12-2024",
  },
  {
    id: 6,
    blogimage: "/blog-hero-bg.jpg",
    blogtitle: "This is  Title",
    submittedby: "John Doe",
    blogdescription: "This is description.",
    date: "15-12-2024",
  },
  {
    id: 7,
    blogimage: "/blog.webp",
    blogtitle: "This is last Title",
    submittedby: "awais",
    blogdescription: "This is description.",
    date: "15-12-2024",
  },
];

export default function AllBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const blogsPerPage = 6;

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog => {
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.blogtitle.toLowerCase().includes(searchLower) ||
      blog.blogdescription.toLowerCase().includes(searchLower)
      // || blog.submittedby.toLowerCase().includes(searchLower) // if we want to search by author also
    );
  });

  // Calculate the index of the first and last program for the current page
  const indexOfLastProgram = currentPage * blogsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - blogsPerPage;

  // Get the current programs to display based on pagination
  const currentblogs = filteredBlogs.slice(indexOfFirstProgram, indexOfLastProgram);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
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
              placeholder="Search by title, description, or author..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="outline-none w-full font-normal focus:border-blue-50"
            />
          </div>
          {/* <div className="basis-full sm:basis-[48%] md:basis-[24%] flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
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
          </div> */}
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            {/* {isGrid ? ( */}
            {currentblogs.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {currentblogs.map((blog) => (
                  <div>
                    <div
                      key={blog.id}
                      className="grid grid-cols-12 p-4 border rounded shadow-sm transition-shadow"
                    >
                      <div className="col-span-8 px-3 flex flex-col justify-between">
                        <div>
                          <div className="flex gap-4 mb-4">
                            {/* <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="h-12 w-12 rounded-[50%] object-cover"
                              /> */}

                            <div className="flex flex-1 justify-between">
                              <div className="">
                                <h3 className="text-xl text-left font-medium text-gray-900">
                                  {blog.blogtitle}
                                </h3>
                              </div>
                            </div>
                          </div>
                          <p className="text-left text-md text-gray-700 mb-4">
                            {blog.blogdescription}
                          </p>
                        </div>
                        <div className="flex justify-between mt-8 text-gray-500">
                          <span className="text-[12px] ">{blog.date}</span>
                          <span className="text-[12px]">
                            By {blog.submittedby}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-4 px-3">
                        <div className="">
                          <img
                            src={blog.blogimage}
                            alt={blog.blogtitle}
                            className="aspect-video rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No blogs found matching your search.</p>
              </div>
            )}
            {filteredBlogs.length > 0 && (
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
            )}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="h-[450px] bg-green-100 w-[283px] mx-auto mt-4 lg:mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
