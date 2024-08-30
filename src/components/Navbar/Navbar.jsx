import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-around pb-0 pt-1 bg-white">
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul className="flex space-x-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Support</li>
            </ul>
            <button className="bg-black text-white px-6 py-1.5 border-2 border-solid border-white rounded-md">Login</button>
            {/* <div className='shoes'>
                <img src="/images/shoe_image.png" alt="shoes" />
            </div> */}
        </nav>
    );
};

export default Navbar;