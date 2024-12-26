import React from 'react';
import { FaStar, FaShoppingCart, FaCheck } from 'react-icons/fa';

const MegaServices = () => {
  const services = [
    { id: 1, name: 'Packages', icon: '📚' },
    { id: 2, name: 'Waxing', icon: '✨' },
    { id: 3, name: 'Korean facial', icon: '🧖‍♀️', isNew: true },
    { id: 4, name: 'Facial', icon: '💆‍♀️' },
    { id: 5, name: 'Ayurvedic facial', icon: '🌿' },
    { id: 6, name: 'Cleanup', icon: '✨' },
    { id: 7, name: 'Pedicure & manicure', icon: '💅' },
    { id: 8, name: 'Hair, bleach & detan', icon: '💇‍♀️' },
    { id: 9, name: 'Threading & face waxing', icon: '🧵' },
  ];

  const packages = [
    {
      id: 1,
      title: 'Complete chocolate roll-on waxing',
      rating: 4.86,
      reviews: '2.1M',
      price: 988,
      originalPrice: 1138,
      duration: '55 mins',
      description: 'Chocolate full arms, underarms, full legs',
    },
    {
      id: 2,
      title: 'Complete honey waxing',
      rating: 4.85,
      reviews: '1.8M',
      price: 696,
      originalPrice: 806,
      duration: '1 hr 10 mins',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* Services Section */}
      <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Select a Service</h3>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:shadow-md cursor-pointer"
            >
              <div className="text-2xl">{service.icon}</div>
              <div className="text-sm mt-1 text-center">{service.name}</div>
              {service.isNew && (
                <span className="bg-orange-500 text-white text-xs px-2 rounded-full mt-1">New</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="w-full md:w-2/4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Available Packages</h3>
        {packages.map((pkg) => (
          <div key={pkg.id} className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-green-600 text-sm">PACKAGE</h4>
                <h3 className="font-semibold">{pkg.title}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="text-purple-600" />
                  <span>{pkg.rating}</span>
                  <span className="text-gray-500">({pkg.reviews} reviews)</span>
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
              <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-50">
                Add
              </button>
            </div>
            <button className="w-full text-left text-gray-700 py-2 px-4 bg-gray-50 rounded hover:bg-gray-100">
              Edit your package
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between mb-6">
          <FaShoppingCart className="text-gray-400 text-2xl" />
          <span className="text-gray-500">No items in your cart</span>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="p-2 bg-green-100 rounded-full">
              <FaCheck className="text-green-600" />
            </span>
            <div className="ml-2">
              <h4 className="font-semibold">Assured reward from CRED</h4>
              <p className="text-sm text-gray-500">Reward via online payment</p>
            </div>
          </div>
          <button className="text-sm text-purple-600">View More Offers ↓</button>
        </div>
        <div>
          <h3 className="font-semibold mb-4">UC Promise</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheck className="text-green-600 mr-2" />
              <span className="text-sm">4.5+ Rated Beauticians</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-600 mr-2" />
              <span className="text-sm">Luxury Salon Experience</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-600 mr-2" />
              <span className="text-sm">Premium Branded Products</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaServices;
