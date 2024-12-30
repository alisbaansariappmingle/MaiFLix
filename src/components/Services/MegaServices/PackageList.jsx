import React from 'react';
import { FaStar } from 'react-icons/fa';

const packages = [
  {
    id: 1,
    title: 'Cleaning',
    rating: 4.86,
    reviews: '3BHK+1',
    price: 2000,
    originalPrice: 1500,
    duration: '1.5 HRS minimum',
    description: 'Brooming and Moping',
  },
];

const PackageList = () => {
  return (
    <div className="w-full md:w-2/4 bg-white shadow-md rounded-lg p-4 border">
      <h3 className="text-lg font-semibold mb-4">Available Packages</h3>
      {packages.map((pkg) => (
        <div key={pkg.id} className="mb-8">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-green-600 text-sm">PACKAGE</h4>
              <h3 className="font-semibold">{pkg.title}</h3>
              <span className="text-gray-500 text-sm">({pkg.reviews})</span>

              <div className="flex items-center gap-1 text-sm">
                <FaStar className="text-purple-600" />
                <span>{pkg.rating}</span>
              </div>
              <div className="mt-1">
                <span className="text-lg font-bold">₹{pkg.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">₹{pkg.originalPrice}</span>
                <span className="text-sm text-gray-500 ml-2">• {pkg.duration}</span>
              </div>
              {pkg.description && (
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              )}
            </div>
            <button className="px-4 py-1 text-orange-600 border border-orange-600 rounded hover:bg-purple-50">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
