import React, { useState } from "react";
import contact from "../../../images/contactus.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);


    };

    return (
        <section className="p-3 bg-gray-100 sm:p-8 md:p-8 lg:p-8">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Column */}
                <div className="flex justify-center items-center flex-col space-y-4 lg:space-y-0">
                    <div className="px-4 text-center lg:text-left">
                        <h5 className="text-[#ff8800] font-bold text-lg lg:text-xl">Contact Us</h5>
                        <h1 className="text-2xl lg:text-3xl font-semibold">Talk To Us</h1>
                        <p className="text-sm lg:text-base">Your feedback is valuable to us. If you have questions and suggestions, we're here to listen.  Please reach out to us below details:</p>
                        <div className="flex items-center space-x-8 mt-4">
                            {/* Phone */}
                            <div className="flex items-center">
                                <IoCall className="text-[#ff8800] mr-2 text-3xl" />
                                <span className="text-sm lg:text-base">+91 9958190770</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center">
                                <IoMail className="text-[#ff8800] mr-2 text-3xl" />
                                <span className="text-sm lg:text-base">info@maiflix.in</span>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="flex items-center pt-3">
                            <FaLocationDot className="text-[#ff8800] mr-2 text-3xl" />
                            <span className="text-sm lg:text-base">1206,Suryakiran Building, 19 K G Marg New Delhi-110001.</span>
                        </div>

                    </div>
                    <div className="w-full max-w-md">
                        <img src={contact} alt="Contact Us" className="w-full h-auto" />
                    </div>
                </div>

                {/* Contact Form Column */}
                <div className="bg-white shadow-lg rounded-lg p-8 m">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
                    {successMessage && (
                        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
                            {successMessage}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-250 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-3"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                id="number"
                                value={formData.number}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // Allow only numeric characters and limit to 10 digits
                                    if (/^[0-9+\-\s]*$/.test(value)) {
                                        setFormData({ ...formData, number: value });
                                    }
                                }}
                                className="w-full border-2 border-gray-250 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-3"
                                placeholder="Enter Your Mobile Number"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-250 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-3"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border-2 border-gray-250 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 p-3"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full sm:w-1/2 md:w-1/3 bg-[#ff8800] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
