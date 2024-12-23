import React from "react";
import Image from "../../../images/2 6.png";

const HomeService = () => {
  return (
    <div className=" bg-[#FF8800] p-6 md:p-8 lg:p-12 rounded-xl">
      {/* Header Text */}
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8">
        Expert Home Services Tailored to Your Needs
      </h2>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-white shadow-lg"
          >
            <img
              src={Image}
              alt="Home service"
              className="w-full h-48 md:h-56 lg:h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center text-center md:text-right space-y-4 md:space-y-0 md:space-x-4">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
          Your comfort is our priority.
        </h2>
        <button className="bg-white text-[#FF8800] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HomeService;
