import React, { useState, useEffect } from 'react';
import img1 from '../../../images/maiflix-img-1.jpg';

const Banner = () => {
    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img1];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full mx-auto pt-1">
            {/* Carousel Images */}
            <div className="overflow-hidden rounded-lg sm:h-80 md:h-96 lg:h-[450px] object-cover">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`carousel image ${index + 1}`}
                            className="w-full object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-orange-600 text-white p-1 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-orange-600 text-white p-1 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
            >
                &#8250;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-white'} shadow`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
