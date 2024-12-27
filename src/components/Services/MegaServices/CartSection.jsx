import React from 'react';
import img from '../../../images/quality assured.webp';

const CartSection = () => {
    const title = "Maiflix Promise";
    const items = ['Verified Professionals', 'Booking', 'Transparent Pricing'];
    const imageSrc = img;
    const imageAlt = "Quality Assured";

    return (
        <div className="px-4 pb-20 bg-white shadow rounded-lg border border-gray-200 flex items-center">
            <div className="flex-grow">
                <h2 className="text-lg font-bold">{title}</h2>
                <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="ml-4 flex-shrink-0">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-16 h-16 object-contain"
                />
            </div>
        </div>
    );
};

export default CartSection;
