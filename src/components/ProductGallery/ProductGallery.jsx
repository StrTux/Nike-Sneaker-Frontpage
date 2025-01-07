import React, { useState } from 'react';
import { FaCartPlus, FaShoppingBag } from 'react-icons/fa';

const ProductGallery = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [cart, setCart] = useState([]);

    const products = [
        {
            id: 1,
            name: 'Nike Air Max',
            image: 'https://pixabay.com/get/g0220dd1739b6a3b6b6c4eafc89273447a54e58a68530b84a2a4192f8f3bb5993c600ff8a845556435b8af32981bc98f3.jpg',
            price: '$120',
            sizes: ['S', 'M', 'L', 'XL'],
        },
        {
            id: 2,
            name: 'Nike Zoom',
            image: 'https://pixabay.com/get/g1824646a72943666e78a62bedf842c494db4f626dc4c5e49d7264645998c89b612375f090d0080d24e4bec191543ec6e.jpg',
            price: '$150',
            sizes: ['M', 'L', 'XL'],
        },
        {
            id: 3,
            name: 'Nike React',
            image: 'https://pixabay.com/get/g50bc5b78d93a2389ec49d17030a9a9177c07c2531b8b2c5b043cc601d3078125e57d35eaa8def48add05ffd92a52dcaa.jpg',
            price: '$100',
            sizes: ['S', 'M'],
        },
        {
            id: 4,
            name: 'Nike Air Force',
            image: 'https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg',
            price: '$130',
            sizes: ['S', 'M', 'L'],
        }
    ];

    const handleAddToCart = (product) => {
        if (selectedSize) {
            setCart([...cart, { ...product, size: selectedSize }]);
        } else {
            alert('Please select a size');
        }
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="p-8 bg-white flex justify-center items-center">
            <div className="w-full max-w-6xl">
                <h2 className="text-center text-2xl font-semibold mb-8">Our Latest Collection</h2>
                
                {/* Product Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-all"
                        >
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <div className="flex justify-between mb-2">
                                <strong className="text-lg">{product.name}</strong>
                                <span className="text-gray-700">{product.price}</span>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-4">
                                <span className="text-sm font-medium">Select Size:</span>
                                <div className="flex space-x-2 mt-2">
                                    {product.sizes.map((size, index) => (
                                        <button 
                                            key={index} 
                                            onClick={() => handleSelectSize(size)}
                                            className={`px-4 py-2 bg-gray-200 rounded-full hover:bg-black hover:text-white transition-all ${selectedSize === size ? 'bg-black text-white' : ''}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="flex justify-between items-center mt-4">
                                <button 
                                    onClick={() => handleAddToCart(product)} 
                                    className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 flex items-center"
                                >
                                    <FaCartPlus className="mr-2" /> Add to Bag
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                {cart.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold">Your Cart</h3>
                        <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
                            {cart.map((item, index) => (
                                <div key={index} className="flex justify-between items-center mb-4">
                                    <div>
                                        <span className="font-medium">{item.name}</span> - <span className="text-sm">Size: {item.size}</span>
                                    </div>
                                    <button 
                                        onClick={() => handleRemoveFromCart(item.id)} 
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductGallery;
