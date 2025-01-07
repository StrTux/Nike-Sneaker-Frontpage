import React from 'react';

const Navbar = ({ onSearch }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-0 bg-white shadow-md">
            {/* Logo Section */}
            <div className='logo'>
                <img src="/images/001_nike-logos-swoosh-black.png" alt="Nike Logo" className="w-12 cursor-pointer" />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                <li className="hover:text-black cursor-pointer transition duration-300">Home</li>
                <li className="hover:text-black cursor-pointer transition duration-300">About Us</li>
                <li className="hover:text-black cursor-pointer transition duration-300">Contact Us</li>
                <li className="hover:text-black cursor-pointer transition duration-300">Support</li>
            </ul>

            {/* Search Bar */}
            <div className="relative w-1/4">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    className="w-full px-3 py-1.5 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                    🔍
                </button>
            </div>

            {/* Login Button */}
            <button className="bg-black text-white px-4 py-1.5 border border-black rounded-lg text-sm hover:bg-white hover:text-black transition duration-300">
                Login
            </button>
        </nav>
    );
};

export default Navbar;