import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-6">
            {/* Navigation Links */}
            <div className="mb-4">
                <a href="https://www.nike.com" className="hover:underline mx-4">Home</a>
                <a href="https://www.nike.com/w/products" className="hover:underline mx-4">Products</a>
                <a href="https://www.nike.com/help" className="hover:underline mx-4">Contact</a>
            </div>
            
            {/* Social Media Links */}
            <div className="mb-4">
                <a href="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer" className="mx-4">Facebook</a>
                <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer" className="mx-4">Twitter</a>
                <a href="https://www.instagram.com/nike" target="_blank" rel="noopener noreferrer" className="mx-4">Instagram</a>
            </div>

            {/* Copyright */}
            <p className="mt-4 text-sm">&copy; 2023 Nike, Inc. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
