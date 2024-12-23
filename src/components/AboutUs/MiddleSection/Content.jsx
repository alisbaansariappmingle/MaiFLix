import React from "react";
import img from '../../../images/bannerimg.jpg';

const AboutAgency = () => {
  return (
    <section className="p-8">
      {/* Heading Content */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">About Our Agency</h2>
        <p className="text-gray-500">
          We take care to understand your business properly – its trajectory,
          potential, and what makes it unique.
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
          <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
