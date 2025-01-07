import React from 'react';

const FilterOptions = ({ onFilter }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilter({ [name]: value });
    };

    return (
        <div className="flex justify-center p-4 space-x-4">
            <select name="size" onChange={handleFilterChange} className="border rounded p-2 text-lg">
                <option value="">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <select name="color" onChange={handleFilterChange} className="border rounded p-2 text-lg">
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
    );
};

export default FilterOptions; 