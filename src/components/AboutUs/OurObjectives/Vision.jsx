import React from "react";
import img from '../../../images/kitchen2.jpg';


// Dynamic content array
const content = [
  {
    title: "Vision",
    text: "To empower unskilled labor through comprehensive training and sustainable employment opportunities, enabling them to enhance their livelihoods while delivering professional, reliable home management services to urban households. We envision creating a workforce that not only earns better but also benefits from essential healthcare, insurance, and financial security.",
    image: img,
  },
  
];

const Vision = () => {
  return (
    <>
      <div className="text-center mt-5">
        <h2 className="text-3xl font-bold text-[#ff8800]">Our Objectives</h2>
      </div>
      <section className="p-8">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-700 text-justify">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Vision;
