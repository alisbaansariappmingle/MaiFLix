import React from "react";
import img from '../../../images/kitchen2.jpg';
import img1 from '../../../images/kitchen3.webp';

const Section = () => {
  return (
    <>
    <div className="text-center mt-5">
    <h2 className="text-3xl font-bold ">Our Objectives</h2>
    </div>
     <section className="p-8">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Vision</h2>
          <p className="text-gray-700 text-justify">
            To empower unskilled labor through comprehensive training and sustainable employment opportunities, enabling them to enhance their livelihoods while delivering professional, reliable home management services to urban households. We envision creating a workforce that not only earns better but also benefits from essential healthcare, insurance, and financial security.</p>
        </div>
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Agency Workspace"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img1}
            alt="Agency Workspace"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Mission</h2>
          <p className="text-gray-700 text-justify">
          Our mission is to revolutionize the home management industry by providing high-quality, trained home managers to urban households. We aim to uplift unskilled labor by offering training, fair wages, and essential benefits such as medical facilities and insurance, ensuring they lead dignified, secure lives while contributing to better-managed homes</p>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Section;
