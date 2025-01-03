import React from 'react';
import logo from '../../../images/logo.png';
import { FaTwitter } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
// import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    const footerData = {
        companyInfo: {
            name: "Maiflix Services Private Limited",
            address: "1206, Suryakiran Building, 19 K G Marg, New Delhi - 110001.",
            contact: {
                phone: "+91-9958190770",
                email: "info@maiflix.in",
            },
        },
        quickLinks: [
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/megamenu" },
            { name: "FAQs", href: "/faq" },
            { name: "Contact Us", href: "/contact" },
        ],
        customerSupport: [
            { name: "Shipping Policy", href: "/privacy-policy" },
            { name: "Returns Policy", href: "/privacy-policy" },
            { name: "Terms & Conditions", href: "/privacy-policy" },
            { name: "Privacy Policy", href: "/privacy-policy" },
        ],
        socialLinks: [
            { icon: <IoLogoWhatsapp size={25} />, href: "https://wa.me/+919958190770" },
            { icon: <FaFacebookF size={24}/>, href: "https://facebook.com/yourprofile", ariaLabel: "Facebook" },
            { icon: <FaTwitter size={25} />, href: "https://twitter.com/yourprofile", ariaLabel: "Twitter" },
            { icon: <FaInstagram  size={25}/>, href: "https://instagram.com/yourusername", ariaLabel: "Instagram" },
            { icon: <FaLinkedinIn  size={25}/>, href: "https://linkedin.com/in/yourprofile", ariaLabel: "LinkedIn" },

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
                    <p className="text-white text-xs  md:whitespace-nowrap">{footerData.companyInfo.address}</p>
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
                <div className="pl-0 md:pl-10">
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
                    <p className="text-center">Copyright &copy; Powered By Optimizaum</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
