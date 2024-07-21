import React, { useState } from 'react';
import CustomMultiSelect from './CustomMultiSelect';
import './book.css'; 

const BookNow = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfDeparture, setDateOfDeparture] = useState('');
    const [dateOfReturn, setDateOfReturn] = useState('');
    const [packageUsed, setPackageUsed] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [customAmenities, setCustomAmenities] = useState([{ name: '' }]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [numPeople, setNumPeople] = useState(false);

    const packages = [
        { value: 'cape-town-adventure', label: 'Cape Town Adventure' },
        { value: 'beijing-experience', label: 'Beijing Experience' },
        { value: 'vienna-getaway', label: 'Vienna Getaway' },
        { value: 'peru-discovery', label: 'Peru Discovery' },
        { value: 'turkey-escapade', label: 'Turkey Escapade' }
    ];
    const accommodations = [
        { label: 'Hotels', options: ['Hilton Hotel', 'Embassy Suites', 'Hyatt', 'Marriott', 'Renaissance Hotels'] },
        { label: 'Vacation Rentals', options: ['SakSak Rentals', 'Mimi Vacation homes', 'Air CnD', 'Mistiks', 'Cozy Co'] },
        { label: 'Hostels', options: ['Cheapy Hostels', 'Ember', 'Selina'] },
        { label: 'Homestays', options: ["Lori's Home", "Burt's Home", "Claire's Home", "Suzy's Home", "Bobaloo's Home"] }
    ];

    const food = [
        { label: 'Restaurants', options: ['Elysian Table', 'Opulent Harvest', 'Luxe Bistro', 'Celestial Cuisine', 'Grand Harvest'] },
        { label: 'Cafes', options: ['Morning Reverie Café', 'Whispering Willow Café', 'Velvet Roost Café', 'Luminous Cup Café', 'Horizon Café'] },
        { label: 'Bakeries', options: ['Golden Crust Bakery', 'Refined Delights', 'The Artisan Oven', 'Elegant Crumbs', 'Culinary Crave Bakery'] },
        { label: 'Bars', options: ['The Velvet Lounge', 'Sapphire Bar & Lounge', "The Aristocrat’s Retreat", 'Eclipse Bar & Spirits', 'The Opal Lounge'] }
    ];

    const shopping = [
        { label: 'Malls', options: ['Luxe Haven', 'Metro Heights', 'Eclipse Plaza', 'The Spectrum', 'Harmony Center'] },
        { label: 'Markets', options: ['Fresh Harvest Market', 'City Central Market', 'Greenfield Market', 'Sunset Plaza Market'] },
        { label: 'Souvenir Shops', options: ['Beijing Treasures', 'Cape Town Keepsakes', "Vienna's Essence", 'Turkish Delight Emporium', 'Peruvian Essence'] },
        { label: 'Grocery', options: ['EcoMart', 'CityGrocer', 'FreshPick Grocery', 'MarketPlace', 'UrbanBite'] }
    ];

    const handleNext = (event) => {
        event.preventDefault();
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedAmenities.length >= 1) {
            setShowConfirmation(true); 
        } else {
            alert('Please select up to 3 amenities.');
        }
    };

    const handleConfirmation = () => {
        setShowConfirmation(false); 
        alert('Booking Successful!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDateOfDeparture('');
        setDateOfReturn('');
        setPackageUsed('');
        setNumPeople('');
        setSelectedAmenities([]);
        setCustomAmenities([{ name: '' }]);
        setStep(1);
    };
    const handleCancel = () => {
        alert('Booking Canceled!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDateOfDeparture('');
        setDateOfReturn('');
        setPackageUsed('');
        setNumPeople('');
        setSelectedAmenities([]);
        setCustomAmenities([{ name: '' }]);
        setStep(1);
    };

    const handleCustomAmenityChange = (index, event) => {
        const newCustomAmenities = [...customAmenities];
        newCustomAmenities[index].name = event.target.value;
        setCustomAmenities(newCustomAmenities);
    };

    const handleRemoveCustomAmenity = (index) => {
        const newCustomAmenities = customAmenities.filter((_, i) => i !== index);
        setCustomAmenities(newCustomAmenities);
    };

    const handleAddCustomAmenity = () => {
        setCustomAmenities([...customAmenities, { name: '' }]);
    };

    return (
        <div className="book-now">
            <div className="progress-bar">
                {['Personal Information', 'Select Amenities', 'Add Custom Amenities'].map((stepTitle, index) => (
                    <div key={index} className={`step ${step > index + 1 ? 'completed' : step === index + 1 ? 'active' : ''}`}>
                        {stepTitle}
                    </div>
                ))}
            </div>
            <div className="form-container">
                {step === 1 && (
                    <form onSubmit={handleNext}>
                        <h2>Personal Information</h2>
                        <h4>Fields marked with * are required</h4>

                        <div className="form-row">
                            <div className="form-group">
                                <label>*First Name:</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>*Last Name:</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
              <label>*Number of People:</label>
              <input
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
              />
            </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>*Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>*Phone Number:</label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>*Date of Departure:</label>
                                <input
                                    type="date"
                                    value={dateOfDeparture}
                                    onChange={(e) => setDateOfDeparture(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>*Date of Return:</label>
                                <input
                                    type="date"
                                    value={dateOfReturn}
                                    onChange={(e) => setDateOfReturn(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>*Package Used:</label>
                            <select
                               value={packageUsed}
                               onChange={(e) => setPackageUsed(e.target.value)}
                               required
                           >
                               <option value="">Select Package</option>
                               {packages.map((pkg) => (
                                   <option key={pkg.value} value={pkg.value}>
                                       {pkg.label}
                                   </option>
                               ))}
                            </select>
                        </div>
                        <div className="form-buttons">
                            <button type="submit">Next</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleNext}>
                        <h2>Select Amenities</h2>
                        <div className="form-group">
                            <CustomMultiSelect
                                title="Accommodations"
                                categories={accommodations}
                                selectedAmenities={selectedAmenities}
                                setSelectedAmenities={setSelectedAmenities}
                            />
                            <CustomMultiSelect
                                title="Food"
                                categories={food}
                                selectedAmenities={selectedAmenities}
                                setSelectedAmenities={setSelectedAmenities}
                            />
                            <CustomMultiSelect
                                title="Shopping"
                                categories={shopping}
                                selectedAmenities={selectedAmenities}
                                setSelectedAmenities={setSelectedAmenities}
                            />
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={handleBack}>Back</button>
                            <button type="submit">Next</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <h2>Add Custom Amenities</h2>
                        <div className="form-group">
                            <label>Custom Amenities:</label>
                            {customAmenities.map((amenity, index) => (
                                <div key={index} className="custom-amenity-row">
                                    <input
                                        type="text"
                                        placeholder={`Custom Amenity ${index + 1}`}
                                        value={amenity.name}
                                        onChange={(e) => handleCustomAmenityChange(index, e)}
                                    />
                                    <button type="button" onClick={() => handleRemoveCustomAmenity(index)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddCustomAmenity}>Add Custom Amenity</button>
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={handleBack}>Back</button>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                )}
                {showConfirmation && (
                    <div className="confirmation">
                        <h2>Confirmation</h2>
                        <p><strong>Name:</strong> {firstName} {lastName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone Number:</strong> {phoneNumber}</p>
                        <p><strong>Date of Departure:</strong> {dateOfDeparture}</p>
                        <p><strong>Date of Return:</strong> {dateOfReturn}</p>
                        <p><strong>Package Used:</strong> {packageUsed}</p>
                        <p><strong>Selected Amenities:</strong> {selectedAmenities.map(amenity => amenity.option).join(', ')}</p>
                        {customAmenities.length > 0 && (
                            <p><strong>Custom Amenities:</strong> {customAmenities.map((amenity, index) => (
                                <span key={index}>{amenity.name}{index !== customAmenities.length - 1 ? ', ' : ''}</span>
                            ))}</p>
                        )}
                        <div className="form-buttons">
                            <button type="button" onClick={handleConfirmation}>Confirm Booking</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookNow;




