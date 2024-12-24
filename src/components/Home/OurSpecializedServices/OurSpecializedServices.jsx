import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Popup from "./Popup";

const OurSpecializedServices = () => {
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
    setIsPopupOpen(false);
  };

  const services = [
    {
      img: require("../../../images/Figure_img-1.jpg"),
      title: "Domestic Helper",
      rating: 2.3,
    },
    {
      img: require("../../../images/Figure_img-2.jpg"),
      title: "Cook",
      rating: 4.8,
    },
    {
      img: require("../../../images/Figure_img-3.jpg"),
      title: "Babysitter/ Japa",
      rating: 3.9,
    },
    {
      img: require("../../../images/Figure_img-4.jpg"),
      title: "All in One",
      rating: 4.7,
    },
    {
      img: require("../../../images/Figure_img-5.jpg"),
      title: "24 Hrs Allrounder",
      rating: 4.4,
    },
    {
      img: require("../../../images/Figure_img-1.jpg"),
      title: "Part Time",
      rating: 3.1,
    },
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-8 border-black w-full">
      <h2 className="text-center font-semibold text-xl sm:text-xl md:text-xl mb-2">
        Maiflix Specialises
      </h2>
      <h2 className="text-center font-semibold text-xl sm:text-xl md:text-xl">
        In Getting You Trained, <br /> Verified, and Insured Maids
      </h2>
      <p className="text-[#656565] text-center mt-2 mb-6 px-4 text-justify md:text-center">
        Maiflix provides fully verified professionals along with a complimentary
        replacement policy to ensure your satisfaction.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 md:p-10 lg:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-3xl shadow-md w-full max-w-sm mx-auto"
          >
            <img
              src={service.img}
              alt={service.title}
              className="rounded-2xl object-cover text-center w-full"
            />
            <h3 className="font-semibold text-center text-lg mt-4">
              {service.title}
            </h3>
            <div className="flex items-center justify-center gap-0 text-[#ff8800] mt-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <IoStar
                      key={starIndex}
                      style={{
                        color:
                          starIndex < Math.floor(service.rating)
                            ? "#ff8800"
                            : "#d1d1d1",
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-[#ff8800] text-white px-1 py-1 rounded-md text-xs font-bold">
                    {service.rating}
                    <FaStar className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book Now Button inside each card */}
            <div className="w-full mt-6">
              <button
                onClick={handleOpenPopup}
                className="w-full py-1 text-white bg-[#ff8800] rounded-b-xl font-semibold hover:bg-orange-500 transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleFormSubmit}
        formTitle="Book Now"
      />
    </div>
  );
};

export default OurSpecializedServices;
