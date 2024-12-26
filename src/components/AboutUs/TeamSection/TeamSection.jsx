import React from "react";
import image from '../../../images/hr.webp';
import image1 from '../../../images/designer.webp';
import image2 from '../../../images/productdesigner.jpg';
import image3 from '../../../images/engineer.jpg';
import image4 from '../../../images/call cenetr.jpg';
import image5 from '../../../images/chef2.webp';

const TeamSection = () => {
  return (
    <section className="p-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-500">
          We take care to understand your business properly – its trajectory,
          potential, and what makes it unique.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <img
            src={image}
            alt="Team Member"
            className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold">Shreya</h3>
          <p className="text-gray-500 text-sm">HR</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img
            src={image5}
            alt="Team Member"
            className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold">Sumith</h3>
          <p className="text-gray-500 text-sm">Chef Trainer</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img
            src={image2}
            alt="Team Member"
            className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold">Zoya Khan</h3>
          <p className="text-gray-500 text-sm">Marketing Manager</p>
        </div>
        <div className="text-center">
          <img
            src={image3}
            alt="Team Member"
            className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold">Aarush Singhaniya</h3>
          <p className="text-gray-500 text-sm">Software Engineer</p>
        </div>
        <div className="text-center">
          <img
            src={image4}
            alt="Team Member"
            className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold">Aditya</h3>
          <p className="text-gray-500 text-sm">Customer Care</p>
        </div>
        
      </div>
    </section>
  );
};

export default TeamSection;
