import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            username: 'john_doe',
            rating: 5,
            text: 'Amazing product! Really comfortable and stylish. Worth every penny.',
            avatar: 'https://i.pravatar.cc/150?img=1',
            isVerified: true,
            source: 'iPhone',
            permalink: 'https://twitter.com/john_doe/status/1',
            time: new Date(2022, 9, 10, 0, 52),
        },
        {
            id: 2,
            name: 'Jane Smith',
            username: 'jane_smith',
            rating: 4,
            text: 'Great shoes, but I wish they had more color options. Still, really good quality.',
            avatar: 'https://i.pravatar.cc/150?img=2',
            isVerified: false,
            source: 'Android',
            permalink: 'https://twitter.com/jane_smith/status/2',
            time: new Date(2022, 9, 12, 14, 20),
        },
        {
            id: 3,
            name: 'Robert Johnson',
            username: 'robert_johnson',
            rating: 3,
            text: 'The shoes are good, but a bit tight around the toes. Would love to see some improvements.',
            avatar: 'https://i.pravatar.cc/150?img=3',
            isVerified: true,
            source: 'Web',
            permalink: 'https://twitter.com/robert_johnson/status/3',
            time: new Date(2022, 9, 15, 10, 30),
        },
    ];

    return (
        <div className="reviews p-4 bg-white">
            <h2 className="text-xl font-bold mb-4 text-center">Customer Reviews</h2>

            {/* Review Items */}
            <div className="flex flex-wrap justify-center gap-6">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-300 flex flex-col items-center text-center min-h-[320px] w-80"
                    >
                        {/* User Avatar */}
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        {/* User Name and Verified Badge */}
                        <div className="mb-2">
                            <span className="font-semibold text-lg text-blue-600">{review.name}</span>
                            {review.isVerified && (
                                <span className="ml-1 text-blue-500">✔</span>
                            )}
                        </div>
                        {/* Review Text */}
                        <p className="text-gray-700 text-sm mb-2">{review.text}</p>
                        
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500 mb-2">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`text-xl ${index < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* Review Source and Timestamp */}
                        <span className="text-sm text-gray-500 mb-2">
                            {review.time.toLocaleDateString()} · {review.source}
                        </span>

                        {/* Permalink */}
                        <a
                            href={review.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm"
                        >
                            View on Twitter
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
