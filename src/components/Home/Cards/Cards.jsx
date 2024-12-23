import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTag, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import img1 from '../../../images/facewash.avif';
import img2 from '../../../images/safola oil.avif';
import img3 from '../../../images/soap1.avif';
import img4 from '../../../images/fruits.avif';
import img5 from '../../../images/electric.avif';

const Cards = () => {
  // Static product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a sample description for product 1.",
      featured_image: img1,
      rating: 4.5,
      price: 300,
      oldPrice: 400,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a sample description for product 2.",
      featured_image: img2,
      rating: 3.5,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a sample description for product 2.",
      featured_image: img3,
      rating: 5,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 4,
      name: "Product 5",
      description: "This is a sample description for product 2.",
      featured_image: img4,
      rating: 3.5,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 5,
      name: "Product 6",
      description: "This is a sample description for product 2.",
      featured_image: img5,
      rating: 3.5,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 6,
      name: "Product 7",
      description: "This is a sample description for product 2.",
      featured_image: img1,
      rating: 4.8,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 7,
      name: "Product 8",
      description: "This is a sample description for product 2.",
      featured_image: img4,
      rating: 4.9,
      price: 250,
      oldPrice: 300,
    },
    {
      id: 8,
      name: "Product 9",
      description: "This is a sample description for product 2.",
      featured_image: img3,
      rating: 5,
      price: 250,
      oldPrice: 300,
    },
    // Add more products as needed
  ];

  // Render star ratings
  const renderStars = (rating, maxRating = 5) => {
    return (
      <div className="flex">
        {Array.from({ length: maxRating }, (_, index) => {
          const currentRating = index + 1;
          if (rating >= currentRating) {
            return <FaStar key={index} className="text-[#ff8800]" />;
          } else if (rating >= currentRating - 0.5) {
            return <FaStarHalfAlt key={index} className="text-[#ff8800]" />;
          } else {
            return <FaRegStar key={index} className="text-[#ff8800]" />;
          }
        })}
      </div>
    );
  };

  return (
    <div className="mx-auto p-2 sm:p-4 md:p-6 lg:p-10 xl:p-10 xl:pt-2">
      <div className="flex text-center justify-center items-center mb-4">
        <p className="font-bold text-xl">Featured Products</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white shadow-sm border-2 rounded-lg overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105"
          >
            <Link to={`/products/${product.id}`}>
              <div className="relative">
                <img
                  src={product.featured_image}
                  alt={product.name}
                  className="object-cover w-full h-48 p-4"
                />
                <div className="absolute top-1 left-1 bg-[#ff8800] text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <FaTag className="mr-1" /> {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                </div>
                <div className="absolute top-1 right-1 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <AiOutlineHeart className="w-5 h-5 inline text-[#ff8800]" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-start text-lg font-semibold mb-2">
                  {product.name.slice(0, 50)}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description.slice(0, 50)}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center bg-[#ff8800] text-white px-1 py-1 rounded-md text-xs font-bold">
                    {product.rating}
                    <FaStar className="ml-1" />
                  </div>
                  <div className="flex text-sm text-gray-600 mr-[7.5rem]">
                    {renderStars(product.rating)}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-green-500">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-end text-sm text-gray-600 pt-4">
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          See All
        </button>
      </div>


    </div>
  );
};

export default Cards;
