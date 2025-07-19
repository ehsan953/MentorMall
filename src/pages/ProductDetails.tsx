import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const sampleProduct = {
  id: 1,
  name: "Wireless Headphones",
  price: "$99",
  mainImage: "/blog.webp",
  images: ["/blog.webp", "/blog-hero-bg.jpg", "/blog.webp", "/blog-hero-bg.jpg"],
  description:
    "High-quality wireless headphones with noise cancellation. Enjoy immersive audio with long-lasting comfort and a sleek design, ideal for daily use.",
};

const relatedProducts = [
  {
    id: 2,
    name: "Smart Watch",
    image: "/blog-hero-bg.jpg",
    price: "$149",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "/blog.webp",
    price: "$45",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    image: "/blog-hero-bg.jpg",
    price: "$25",
  },
];

export default function ProductDetails() {
  const { id } = useParams(); // use if you pass product id from route
  const [selectedImage, setSelectedImage] = useState(sampleProduct.mainImage);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity((q) => q + 1);
    else setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-24">
        {/* Images */}
        <div className="lg:w-1/2 w-full">
          <div className="border rounded-lg overflow-hidden mb-4">
            <img src={selectedImage} alt="Selected" className="w-full object-cover" />
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            {sampleProduct.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedImage(img)}
                alt={`Thumbnail ${idx + 1}`}
                className={`basis-full md:w-[49%] md:basis-[49%] lg:w-[48.7%] lg:basis-[48.7%] xl:w-[23.2%] xl:basis-[23.2%] 2xl:w-[23.5%] 2xl:basis-[23.5%] rounded object-cover cursor-pointer border ${selectedImage === img ? "border-green-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{sampleProduct.name}</h1>
          <p className="text-2xl text-green-600 font-semibold mb-6">{sampleProduct.price}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">Quantity:</span>
            <div className="flex border rounded">
              <button onClick={() => handleQuantityChange("dec")} className="px-3 py-1 text-xl">-</button>
              <span className="px-4 py-1">{quantity}</span>
              <button onClick={() => handleQuantityChange("inc")} className="px-3 py-1 text-xl">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Add to Cart</button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-900 transition">Buy Now</button>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700 leading-relaxed">{sampleProduct.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[80%] mx-auto">
          {relatedProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border p-4 rounded shadow hover:shadow-md transition">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-green-600 font-semibold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
