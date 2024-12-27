import React from 'react';
import logo from '../../../images/logo.png';
import { FaTwitter } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    const footerData = {
        companyInfo: {
            name: "Maiflix Services Private Limited",
            address: "1206, Suryakiran Building, 19 K G Marg, New Delhi - 110001.",
            contact: {
                phone: "+91-990581770",
                email: "info@maiflix.in",
            },
        },
        quickLinks: [
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/products" },
            { name: "FAQs", href: "/faq" },
            { name: "Contact Us", href: "/contact" },
        ],
        customerSupport: [
            { name: "Shipping Policy", href: "/shipping" },
            { name: "Returns Policy", href: "/returns" },
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
        socialLinks: [
            { icon: <IoLogoWhatsapp size={25} />, href: "https://wa.me/91990581770" },
            { icon: <MdAddIcCall size={25} />, href: "tel:+91990581770" },
            { icon: <RiInstagramFill size={25} />, href: "https://www.instagram.com/yourusername" },
            { icon: <FaTwitter size={25} />, href: "https://twitter.com/yourusername" },
            
        ],
    };

    return (
        <footer className="bg-[#ff8800] text-white">
            <div className="mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <div className="flex items-center space-x-2 mb-2">
                        <img
                            src={logo}
                            alt="Maiflix Logo"
                            className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#c85103]"
                        />
                        <h3 className="text-sm font-semibold ">Maiflix Services Private Limited</h3>
                    </div>
                    <p className="text-white text-xs whitespace-nowrap">{footerData.companyInfo.address}</p>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center text-white text-sm">
                            <MdAddIcCall
                                size={30}
                                className="text-[#ff8800] p-1 rounded-full bg-white mr-2"
                            />
                            <a href={`tel:${footerData.companyInfo.contact.phone}`} className="">
                                {footerData.companyInfo.contact.phone}
                            </a>
                        </div>
                        <div className="flex items-center text-white text-sm">
                            <IoMail
                                size={30}
                                className="text-[#ff8800] p-1 rounded-full bg-white mr-2"
                            />
                            <a href={`mailto:${footerData.companyInfo.contact.email}`} className="">
                                {footerData.companyInfo.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='pl-10'>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-white text-sm">
                        {footerData.quickLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="hover:text-white transition">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <ul className="space-y-2 text-white text-sm">
                        {footerData.customerSupport.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="hover:text-white  transition">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 mt-4 text-gray-400">
                        {footerData.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="p-1 text-[#ff8800] rounded-full bg-white hover:text-white hover:bg-[#ff8800] transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-gray-400 text-sm">
                    <p className="text-center">&copy; 2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
