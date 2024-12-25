import React, { useState } from "react";
import { IoReloadSharp } from "react-icons/io5";


const ComingSoon = (props) => {
    const {onClose}=props
    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-20 w-100 text-center relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <div className="flex flex-col items-center">
                            <IoReloadSharp size={26} className="font-bold text-center text-orange-600" />
                            <h2 className="text-2xl font-bold text-orange-600">Coming Soon......!</h2>
                        </div>

                        {/* <p className="text-gray-600 mt-2">
              We're working hard to bring this feature to you. Stay tuned for updates!
            </p> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default ComingSoon;
