import React from 'react';

const services = [
  { id: 1, name: 'Packages', icon: '📚' },
  { id: 4, name: 'Facial', icon: '💆‍♀️' },
  { id: 5, name: 'Ayurvedic facial', icon: '🌿' },
  { id: 6, name: 'Cleaning', icon: '✨' },
];

const ServiceList = () => {
  return (
    <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 border">
      <h2 className="text-xl font-semibold mb-4">Domestic Helper</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:shadow-md cursor-pointer"
          >
            <div className="text-2xl">{service.icon}</div>
            <div className="text-sm mt-1 text-center">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
