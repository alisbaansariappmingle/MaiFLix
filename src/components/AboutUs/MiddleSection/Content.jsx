import React from "react";
import img from '../../../images/bannerimg.jpg';

const Content = () => {
  return (
    <section className="p-8">
      {/* Heading Content */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">About Maiflix</h2>
        {/* <p className="font-bold text-md">Seamless home solutions with trained certified verified home managers</p> */}

        <h3></h3>
        <p className="text-gray-500">
          "Maiflix Services Private Limited is incorporated with a vision to transform the labor market by empowering unskilled workers to secure better livelihoods. Established as an app-based platform, Maiflix offers a unique blend of e-contracting, workforce deployment, and skill enhancement to connect skilled workers with employers across hospitality, housemaid services, and culinary sectors. Our services include training, certification, and background verification to ensure industry readiness.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Agency Workspace"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-justify">
          Our approach combines technology with social impact, providing essential benefits like medical facilities and insurance, and allowing workers to thrive in both temporary and permanent roles. Alongside workforce solutions, Maiflix also manufactures, brands, and sells household cleaning products, and offers a variety of household goods through an integrated e-commerce portal. Through these initiatives, Maiflix is positioned not just as a manpower solutions provider but as a comprehensive household brand with a commitment to quality, trust, and social upliftment.</p>
        </div>
      </div>
      
    </section>
  );
};

export default Content;
