import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../../../images/kitchen1.webp";
import Beauty from "../../../images/contentImage.jpeg";
import Bathroom from "../../../images/toilet access.webp";
import Womens from "../../../images/utility.avif";
import yoga from "../../../images/yogamat.avif";
import spa from "../../../images/spa.jpg";


// Sample categories
const categories = [
  { name: "Beauty & Wellness", image: Beauty },
  { name: "Toilet Accessories", image: Bathroom },
  { name: "Kitchen Accessories", image: Img },
  { name: "Utility Product", image: Womens },
   { name: "Spa", image: spa },
   { name: "Yoga", image: yoga },
  
];

const CategorySlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="py-6 max-w-6xl mx-auto">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-orange-500 object-cover"
              />
            </div>
            <p className="mt-2 text-xs md:text-sm lg:text-base font-medium text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-orange-500 hover:bg-orange-600 text-white rounded-full flex justify-center items-center shadow-md`}
      style={{ ...style, right: "0px", zIndex: 10 }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

// Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-orange-500 hover:bg-orange-600 text-white rounded-full flex justify-center items-center shadow-md`}
      style={{ ...style, left: "0px", zIndex: 10 }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

export default CategorySlider;
