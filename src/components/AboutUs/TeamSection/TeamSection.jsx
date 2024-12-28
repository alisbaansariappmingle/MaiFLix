import React from "react";
import image from '../../../images/hr.webp';
import image1 from '../../../images/designer.webp';
import image2 from '../../../images/productdesigner.jpg';
import image3 from '../../../images/engineer.jpg';
import image4 from '../../../images/call cenetr.jpg';
import image5 from '../../../images/chef2.webp';

const TeamSection = () => {
  // Dynamic team data
  const teamMembers = [
    {
      name: "Shreya",
      role: "HR",
      image: image,
      // linkedIn: "https://linkedin.com",
    },
    {
      name: "Sumith",
      role: "Chef Trainer",
      image: image5,
      // linkedIn: "https://linkedin.com",
    },
    {
      name: "Zoya Khan",
      role: "Marketing Manager",
      image: image2,
      // linkedIn: "https://linkedin.com",
    },
    {
      name: "Aarush Singhaniya",
      role: "Software Engineer",
      image: image3,
      // linkedIn: "https://linkedin.com",
    },
    {
      name: "Aditya",
      role: "Customer Care",
      image: image4,
      // linkedIn: "https://linkedin.com",
    },
  ];

  return (
    <section className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          We take care to understand your business properly – its trajectory,
          potential, and what makes it unique.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="text-center group transform transition duration-300 hover:scale-105"
          >
            <div className="relative inline-block">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full mb-3 md:mb-4 shadow-lg 
                         object-cover transform transition duration-300 
                         group-hover:shadow-xl"
              />
              {/* <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 
                            group-hover:bg-opacity-20 transition-all duration-300 
                            flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-2 rounded-full bg-blue-600 hover:bg-blue-700 
                           transform transition hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div> */}
            </div>
            <h3 className="text-base md:text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500 text-xs md:text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;