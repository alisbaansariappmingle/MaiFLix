import React from 'react';
import image from '../../../images/services.jpg'; // Use 'image' here (lowercase 'i')

const HeroSection = () => {
    const title = "Maiflix Services";
    const description = "Book a professional housekeeper for your daily chores";
    const buttonText = "Book Now";
    const buttonLink = "/book-now";
    const imageSrc = image; // Correct reference to 'image'
    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-black">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-yellow-500 my-2 mx-auto lg:mx-0"></div>
                <p className="text-lg text-gray-600 mb-5">
                    {description}
                </p>
                <a href={buttonLink || '#'} className=" bg-orange-500 text-white px-4 py-2 text-lg rounded hover:bg-orange-600 transition">
                    {buttonText}
                </a>
            </div>

            <div className="relative flex items-center justify-center">
                <img
                    src={imageSrc}
                    alt="Services"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 border-4 border-orange-500 rounded-lg"></div>
            </div>
        </div>
    );
};

export default HeroSection;
