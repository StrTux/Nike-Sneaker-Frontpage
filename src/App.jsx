import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductGallery from './components/ProductGallery/ProductGallery';
import Footer from './components/Footer/Footer';
import NewsletterSubscription from './components/NewsletterSubscription/NewsletterSubscription';

import Reviews from './components/Reviews/Reviews';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [filter, setFilter] = useState({ size: '', color: '' });

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleFilter = (value) => {
        setFilter({ ...filter, ...value });
    };

    return (
        <div className="bg-gray-100">
            <Navbar />
            <Hero />
            <ProductGallery />
            <Reviews />
            <NewsletterSubscription />
            <Footer />
        </div>
    );
};

export default App;
