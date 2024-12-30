import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const Topbar = () => {
    // Social media links array
    const socialLinks = [
        { icon: <FaFacebookF />, href: "https://facebook.com/yourprofile", ariaLabel: "Facebook" },
        { icon: <FaTwitter />, href: "https://twitter.com/yourprofile", ariaLabel: "Twitter" },
        { icon: <FaInstagram />, href: "https://instagram.com/yourusername", ariaLabel: "Instagram" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/yourprofile", ariaLabel: "LinkedIn" },
    ];

    return (
        <div className="bg-[#ff8800] text-white">
            <div className="container mx-auto flex items-center py-1 px-2 md:px-4">
                {/* Right Section: Call Icon and Social Media Icons */}
                <div className="ml-auto flex items-center space-x-4 md:space-x-6">
                    {/* Contact Number with Call Icon */}
                    <a
                        href="tel:+919958190770"
                        className="flex items-center space-x-2 text-white"
                        aria-label="Call"
                    >
                        <MdAddIcCall size={26} className="text-orange-500 bg-white p-1 rounded-full" />
                        <span className="text-sm md:text-md">+91 9958190770</span>
                    </a>

                    {/* Social Media Icons */}
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-orange-500 bg-white p-1 rounded-full hover:text-orange-700 transition"
                            aria-label={link.ariaLabel}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
