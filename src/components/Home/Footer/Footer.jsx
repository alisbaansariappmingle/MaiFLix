const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className=" mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Maiflix</h3>
                    <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nulla repellendus a beatae tempora. Qui deserunt tempora sit voluptatibus iusto rem dignissimos laboriosam cupiditate, maxime dicta doloremque repellendus beatae nihil!            </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="/about" className="hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-white transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-white transition">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="/shipping" className="hover:text-white transition">
                                Shipping Policy
                            </a>
                        </li>
                        <li>
                            <a href="/returns" className="hover:text-white transition">
                                Returns Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-white transition">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:text-white transition">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>

                    <div className="flex space-x-4 mt-4 text-gray-400">
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
                    {/* <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
