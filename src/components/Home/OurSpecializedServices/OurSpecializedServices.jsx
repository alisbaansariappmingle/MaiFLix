import React from "react";
import { IoStar } from "react-icons/io5";

const OurSpecializedServices = () => {
  const services = [
    {
      img: require("../../../images/Figure_img-1.jpg"),
      title: "Domestic Help",
      rating: 4.3,
    },
    {
      img: require("../../../images/Figure_img-2.jpg"),
      title: "Cooks",
      rating: 4.8,
    },
    {
      img: require("../../../images/Figure_img-3.jpg"),
      title: "Babysitter/ Japa",
      rating: 4.9,
    },
    {
      img: require("../../../images/Figure_img-4.jpg"),
      title: "All-Rounder",
      rating: 4.7,
    },
    {
      img: require("../../../images/Figure_img-5.jpg"),
      title: "24 Hrs - Live In",
      rating: 4.4,
    },
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-8 border-black w-full">
      <h2 className="text-center font-semibold text-xl sm:text-xl md:text-xl mb-2 text-center md:text-center">
        Our Specialized Services
      </h2>
      <h2 className="text-center font-semibold text-xl sm:text-xl md:text-xl text-center md:text-center">
        Hire Experts, <br /> Tailored Specifically to Your Requirements
      </h2>
      <p className="text-[#656565] text-center mt-2 mb-6 px-4 text-justify md:text-center">
        Maiflix provides fully verified professionals along with a complimentary
        replacement policy to ensure your satisfaction.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 md:p-10 lg:px-20">
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
            <h3 className="font-semibold text-center text-lg mt-4">{service.title}</h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00] mt-2">
              {[...Array(5)].map((_, starIndex) => (
                <IoStar
                  key={starIndex}
                  style={{
                    color:
                      starIndex < Math.floor(service.rating)
                        ? "#FECC00"
                        : "#d1d1d1",
                  }}
                />
              ))}
              <span className="font-bold text-gray-700 ml-1">
                {service.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecializedServices;
