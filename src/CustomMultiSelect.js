import React, { useState } from 'react';
import './CustomMultiSelect.css'; 

const CustomMultiSelect = ({ title, categories, selectedAmenities, setSelectedAmenities }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCheckboxChange = (category, option) => {
        const isSelected = selectedAmenities.some(
            (amenity) => amenity.category === category && amenity.option === option
        );

        if (isSelected) {
            setSelectedAmenities(
                selectedAmenities.filter(
                    (amenity) => !(amenity.category === category && amenity.option === option)
                )
            );
        } else {
            setSelectedAmenities([
                ...selectedAmenities,
                { category, option }
            ]);
        }
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="custom-multi-select">
            <button onClick={handleButtonClick}>
                {title} {showDropdown ? '▲' : '▼'}
            </button>
            {showDropdown && (
                <div className="dropdown-content">
                    {categories.map((category, idx) => (
                        <div key={idx} className="dropdown-category">
                            <strong>{category.label}</strong>
                            {category.options.map((option, index) => (
                                <div key={index} className="dropdown-option">
                                    <input
                                        type="checkbox"
                                        id={`${category.label}-${option}`}
                                        checked={selectedAmenities.some(
                                            (amenity) => amenity.category === category.label && amenity.option === option
                                        )}
                                        onChange={() => handleCheckboxChange(category.label, option)}
                                    />
                                    <label htmlFor={`${category.label}-${option}`}>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomMultiSelect;
