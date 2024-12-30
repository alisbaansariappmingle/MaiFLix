import React from 'react';

const PricingTable = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 border">
        <h1 className="text-2xl font-semibold text-orange-500 mb-6">Subscription Charges</h1>

        {/* Subscription Charges Table */}
        <table className="table-auto w-full border-collapse border border-orange-500 mb-8">
          <thead>
            <tr className="bg-orange-100">
              <th className="border border-orange-600 px-4 py-2">Shift</th>
              <th className="border border-orange-600 px-4 py-2">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24H Shift</td>
              <td className="border border-orange-600 px-4 py-2">20000/- + 18% GST Annually</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10H/6H Shift</td>
              <td className="border border-orange-600 px-4 py-2">12000/- + 18% GST Annually</td>
            </tr>
          </tbody>
        </table>

        {/* Features */}
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>3 Guaranteed Replacements</li>
          <li>Police Verified Staff</li>
          <li>1 Relationship Manager (Who will take regular feedbacks of the services)</li>
        </ul>

        <h1 className="text-2xl font-semibold text-orange-500 mb-6">Charges</h1>

        {/* Charges Table */}
        <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-orange-600 px-4 py-2">Category</th>
              <th className="border border-orange-600 px-4 py-2">Shift</th>
              <th className="border border-orange-600 px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* All Rounder Salary */}
            <tr>
              <td className="border border-orange-600 px-4 py-2" rowSpan="3">All Rounder</td>
              <td className="border border-orange-600 px-4 py-2">6 Hour</td>
              <td className="border border-orange-600 px-4 py-2">10-12000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10 Hour</td>
              <td className="border border-orange-600 px-4 py-2">14-16000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24 Hour</td>
              <td className="border border-orange-600 px-4 py-2">20-22000/-</td>
            </tr>

            {/* Professional Cooks */}
            <tr>
              <td className="border border-orange-600 px-4 py-2" rowSpan="4">Professional Cooks</td>
              <td className="border border-orange-600 px-4 py-2">Visit Basis</td>
              <td className="border border-orange-600 px-4 py-2">5000/- (One time meal), 7000-8000/- (Two time meal)</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">6 Hour</td>
              <td className="border border-orange-600 px-4 py-2">10-11000/- (Homestyle Cooking), 12-14000/- (Multiple Cuisine)</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10 Hour</td>
              <td className="border border-orange-600 px-4 py-2">15-18000/- (Homestyle Cooking), 18-20000/- (Multiple Cuisine)</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24 Hour</td>
              <td className="border border-orange-600 px-4 py-2">20-25000/- (Homestyle Cooking), More than 25000/- (Multiple Cuisine)</td>
            </tr>

            {/* Chefs for Businesses */}
            <tr>
              <td className="border border-orange-600 px-4 py-2" rowSpan="3">Chefs for Businesses</td>
              <td className="border border-orange-600 px-4 py-2">6 Hour</td>
              <td className="border border-orange-600 px-4 py-2">17-18000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10 Hour</td>
              <td className="border border-orange-600 px-4 py-2">18-22000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24 Hour</td>
              <td className="border border-orange-600 px-4 py-2">25-27000/-</td>
            </tr>

            {/* Japa Maids/Baby Caretaker/Babysitter */}
            <tr>
              <td className="border border-orange-600 px-4 py-2" rowSpan="4">Japa Maids/Baby Caretaker/Babysitter</td>
              <td className="border border-orange-600 px-4 py-2">6 Hour</td>
              <td className="border border-orange-600 px-4 py-2">12-15000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10 Hour</td>
              <td className="border border-orange-600 px-4 py-2">18000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24 Hour</td>
              <td className="border border-orange-600 px-4 py-2">22-25000/- (Newborn and mother both: 28-30000/-)</td>
            </tr>

            {/* House Maids */}
            <tr>
              <td className="border border-orange-600 px-4 py-2" rowSpan="4">House Maids</td>
              <td className="border border-orange-600 px-4 py-2">Visit Basis</td>
              {/* <td className="border border-orange-600 px-4 py-2">6000/-</td> */}
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">6 Hour</td>
              <td className="border border-orange-600 px-4 py-2">10-12000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">10 Hour</td>
              <td className="border border-orange-600 px-4 py-2">14-15000/-</td>
            </tr>
            <tr>
              <td className="border border-orange-600 px-4 py-2">24 Hour</td>
              <td className="border border-orange-600 px-4 py-2">Same as All Rounder</td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-700 italic">
          <strong>Note:</strong> Salary of the maid is to be given directly to the maid by the end of the month.
        </p>
        <p className="text-gray-700 mt-4">
          <strong>Timings:</strong> 8:00 AM - 8:00 PM onwards.
        </p>
      </div>
    </div>
  );
};

export default PricingTable;
