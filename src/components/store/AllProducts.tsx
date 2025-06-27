import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/blog.webp",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/blog-hero-bg.jpg",
    price: "$149",
    description: "Fitness-focused smartwatch with heart-rate monitoring.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    image: "/blog.webp",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 5,
    name: "Smart Watch",
    image: "/blog-hero-bg.jpg",
    price: "$149",
    description: "Fitness-focused smartwatch with heart-rate monitoring.",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  {
    id: 7,
    name: "Wireless Headphones",
    image: "/blog.webp",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 8,
    name: "Smart Watch",
    image: "/blog-hero-bg.jpg",
    price: "$149",
    description: "Fitness-focused smartwatch with heart-rate monitoring.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  {
    id: 10,
    name: "Wireless Headphones",
    image: "/blog.webp",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 11,
    name: "Smart Watch",
    image: "/blog-hero-bg.jpg",
    price: "$149",
    description: "Fitness-focused smartwatch with heart-rate monitoring.",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  // Add more products if needed
];

export default function AllProducts() {
  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const productsPerPage = 12;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Top controls */}
        <div className="flex flex-wrap gap-4 md:gap-0 justify-between mb-8">
          {/* Search */}
          <div className="basis-full md:basis-[48%] flex items-center border border-gray-300 rounded-md p-1 bg-white max-w-[400px] w-full">
            <div className="p-2 text-gray-500">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="outline-none w-full font-normal"
            />
          </div>

          {/* Filter (placeholder) */}
          {/* <div className="basis-full md:basis-[48%]">
            <select
              className="w-full border border-gray-300 p-2 rounded-md bg-white text-gray-700"
              onChange={() => {}}
            >
              <option value="">Filter (coming soon)</option>
              <option value="price-low">Price Low to High</option>
              <option value="price-high">Price High to Low</option>
              <option value="in-stock">In Stock</option>
            </select>
          </div> */}
        </div>

        {/* Grid/List Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Products</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsGrid(true)}
              className={`p-2 border rounded ${isGrid ? "bg-green-500 text-white" : "bg-white text-gray-800"}`}
            >
              Grid View
            </button>
            <button
              onClick={() => setIsGrid(false)}
              className={`p-2 border rounded ${!isGrid ? "bg-green-500 text-white" : "bg-white text-gray-800"}`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Product View */}
        {currentProducts.length > 0 ? (
          isGrid ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div key={product.id} className="border p-4 rounded shadow hover:shadow-md transition-shadow">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center text-green-600 font-semibold mb-2">
                            <span>{product.price}</span>
                            <button className="text-sm bg-green-500 text-white px-3 py-1 rounded">Add to Cart</button>
                        </div>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                </Link>
                
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {currentProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <li key={product.id} className="py-4 flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <div className="flex justify-between mt-2 items-center">
                                <span className="text-green-600 font-bold">{product.price}</span>
                                <button className="bg-green-500 text-white text-sm px-4 py-1 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </li>
                </Link>
                
              ))}
            </ul>
          )
        ) : (
          <div className="text-center py-12 text-gray-500">No products found matching your search.</div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 mx-2 text-gray-400 shadow rounded"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded mx-1 text-sm ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-800 shadow font-bold"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 mx-2 text-gray-400 shadow rounded"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
