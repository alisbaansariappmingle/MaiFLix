import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Popup from "../OurSpecializedServices/Popup";

// Dummy package data
const packages = [
  {
    id: 1,
    title: "Cleaning",
    rating: 4.86,
    reviews: "3BHK+1",
    price: 988,
    originalPrice: 1138,
    duration: "1.5 HRS minimum",
    description: "Brooming and Moping.",
  },
  {
    id: 2,
    title: "Dusting",
    rating: 4.5,
    reviews: "3BHK+1",
    price: 1500,
    originalPrice: 1400,
    duration: "1 HRS minimum",
    description: "Bedroom includes bathroom brooming.",
  },
  {
    id: 3,
    title: "Kitchen Helper",
    rating: 4.7,
    reviews: "1BHK",
    price: 1000,
    originalPrice: 1300,
    duration: "1 HRS minimum",
    description: "Cleaning and organising slabs and washing utensils and mop used by helper during that hour shall be the responsibility during her hours of work",
  },
  {
    title: "All-Rounder",
    rating: 4.9,
    reviews: "Multi-Skilled",
    price: 2500,
    originalPrice: 3000,
    duration: "4 HRS minimum",
    description: "A versatile professional skilled in cleaning,cooking and general maintenance.",

  },
  {
    id: 5,
    title: "Baby Care Taker",
    rating: 4.9,
    reviews: "Recommended for infants",
    price: 2000,
    originalPrice: 2500,
    duration: "8 HRS minimum",
    description: "Trained caregivers to provide safe and nurturing care for infants and young children.",
  },
  {
    id: 6,
    title: "24hrs Live-In",
    rating: 5.0,
    reviews: "Full Time",
    price: 12000,
    originalPrice: 15000,
    duration: "24 HRS",
    description: "Round-the-clock care and assistance for home and personal needs.",

  },
];

const HomeService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
    setIsPopupOpen(false); // Close the popup after form submission
  };

  return (
    <div className="bg-[#FF8800] p-6 md:p-8 lg:p-12 rounded-xl">
      {/* Header Text */}
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8">
        Expert Home Services Tailored to Your Needs
      </h2>

      {/* Available Packages Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white shadow-md rounded-lg p-4 border">
            <h4 className="text-green-600 text-sm">PACKAGE</h4>
            <h3 className="font-semibold">{pkg.title}</h3>
            <span className="text-gray-500 text-sm">({pkg.reviews})</span>

            <div className="flex items-center gap-1 text-sm">
              <FaStar className="text-orange-600" />
              <span>{pkg.rating}</span>
            </div>
            <div className="mt-1">
              <span className="text-lg font-bold">₹{pkg.price}</span>
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{pkg.originalPrice}
              </span>
              <span className="text-sm text-gray-500 ml-2">• {pkg.duration}</span>
            </div>
            {pkg.description && (
              <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
            )}
            <button className="px-4 py-1 text-orange-600 border border-orange-600 rounded hover:bg-purple-50 mt-4">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center text-center md:text-right space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
          Your comfort is our priority.
        </h2>
        <button
          onClick={handleOpenPopup}
          className="bg-white text-[#FF8800] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Now
        </button>
      </div>

      {/* Popup Component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleFormSubmit}
        formTitle="Book Now"
      />
    </div>
  );
};

export default HomeService;
