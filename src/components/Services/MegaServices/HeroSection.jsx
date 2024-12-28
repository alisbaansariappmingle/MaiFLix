import React from "react";
import image from "../../../images/services.jpg"; // Correct import

const HeroSection = () => {
    const title = "Maiflix Services";
    const description = "Book a professional housekeeper for your daily chores";
    const buttonText = "Book Now";
    const buttonLink = "/book-now";
    const imageSrc = image;

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 py-8 sm:py-12 bg-white space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-lg">
                <h1 className="text-3xl sm:text-4xl font-bold text-black">
                    {title}
                </h1>
                <div className="w-16 h-1 bg-yellow-500 my-4 mx-auto lg:mx-0"></div>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                    {description}
                </p>
                <a
                    href={buttonLink || "#"}
                    className="inline-block bg-orange-500 text-white px-6 py-3 text-sm sm:text-lg rounded shadow hover:bg-orange-600 transition"
                >
                    {buttonText}
                </a>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center w-full max-w-md lg:max-w-xl -order-3 lg:order-0">
                <img
                    src={imageSrc}
                    alt="Services"
                    className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 border-4 border-orange-500 rounded-lg"></div>
            </div>
        </div>
    );
};

export default HeroSection;
