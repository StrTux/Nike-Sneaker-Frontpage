import React, { useState } from 'react';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        alert(`Subscribed successfully with: ${email}`);
        setEmail('');
    };

    return (
        <div className="p-8 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-400 rounded-l-lg w-1/2 focus:outline-none"
            />
            <button
                onClick={handleSubscribe}
                className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800 transition-all"
            >
                Subscribe
            </button>
        </div>
    );
};

export default NewsletterSubscription;