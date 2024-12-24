import React, { useState } from "react";
import Image from "../images/Animation - 1735017615422.gif"; // Replace with your image path

const PopupForm = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    "Delhi",
    "Gurgaon",
    "Noida",
  ];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted with city:", selectedCity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 sm:mx-8 lg:mx-16 p-4 relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-black focus:outline-none"
        >
          ✖
        </button>

        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 mb-4 md:mb-0">
          <img
            src={Image}
            alt="Popup Image"
            className="w-full h-40 md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 p-4 md:p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-center text-gray-800">
            Membership Form
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Contact Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                placeholder="Enter your contact number"
              />
            </div>

            {/* City Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                City
              </label>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm"
              >
                <option value="" disabled>
                  Select your city
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 md:py-3 px-4 md:px-5 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 shadow-md transform transition-transform hover:scale-105"
              >
                Call me back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
