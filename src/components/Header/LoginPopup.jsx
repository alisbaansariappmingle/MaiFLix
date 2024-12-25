import React from 'react';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-lg shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Login Form</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-300"
          >
            ✖
          </button>
        </div>
        <form  className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full border-2 border-gray-300 rounded-lg shadow-sm  focus:ring-orange-500 sm:text-sm px-4 py-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Number
            </label>
            <input
              type="phone"
              id="email"
              name="email"
              className="block w-full border-2 border-gray-300 rounded-lg shadow-sm  focus:ring-orange-500 sm:text-sm px-4 py-2"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            {/* <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-300"
              onClick={onClose}
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
