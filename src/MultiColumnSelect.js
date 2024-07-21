import React, { useState } from 'react';
import './MultiColumnSelect.css'; 

const MultiColumnSelect = () => {
    const [selectedCategory, setSelectedCategory] = useState('accommodations');

    const categories = {
        accommodations: [
            { label: 'Hotels', options: ['Luxury', 'Budget', 'Boutique'] },
            { label: 'Vacation Rentals', options: ['House', 'Apartment', 'Cabin'] },
            { label: 'Hostels', options: ['Dormitory', 'Private'] },
            { label: 'Homestays', options: ['Shared', 'Private'] },
        ],
        food: [
            { label: 'Restaurants', options: ['Fine Dining', 'Casual', 'Fast Food'] },
            { label: 'Bars', options: ['Cocktail', 'Pub', 'Wine Bar'] },
            { label: 'Bakeries', options: ['Artisan', 'Chain', 'Local'] },
            { label: 'Cafes', options: ['Espresso', 'Bistro', 'Tea House'] },
        ],
        shopping: [
            { label: 'Local Markets', options: ['Flea Market', 'Farmers Market'] },
            { label: 'Grocery Stores', options: ['Supermarket', 'Organic'] },
            { label: 'Malls', options: ['Luxury', 'Shopping Center'] },
            { label: 'Souvenir Shops', options: ['Handmade', 'Tourist'] },
        ],
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="multi-column-select">
            <div className="dropdown-container">
                <label htmlFor="category-select">Select Category:</label>
                <select id="category-select" onChange={handleCategoryChange}>
                    <option value="accommodations">Accommodations</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                </select>
            </div>

            <div className="options-container">
                {categories[selectedCategory].map((category, index) => (
                    <div key={index} className="options-group">
                        <h3>{category.label}</h3>
                        {category.options.map((option, idx) => (
                            <div key={idx} className="option-item">
                                <input type="checkbox" id={`${selectedCategory}-${index}-${idx}`} />
                                <label htmlFor={`${selectedCategory}-${index}-${idx}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiColumnSelect;

