import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bookingNumber, setBookingNumber] = useState('');
  const [packageUsed, setPackageUsed] = useState('');
  const [dateOfDeparture, setDateOfDeparture] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [step, setStep] = useState(1); 

  const handleNextClick = () => {
    if (step === 1) {
      
      if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        bookingNumber.trim() === '' ||
        packageUsed.trim() === '' ||
        dateOfDeparture.trim() === '' ||
        dateOfReturn.trim() === ''
      ) {
        alert('Please fill out all fields.');
        return;
      }
      setStep(2); 
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue === rating ? 0 : starValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating > 0 && comment.trim() !== '') {
      onSubmit({
        firstName,
        lastName,
        bookingNumber,
        packageUsed,
        dateOfDeparture,
        dateOfReturn,
        rating,
        comment
      });
     
      setFirstName('');
      setLastName('');
      setBookingNumber('');
      setPackageUsed('');
      setDateOfDeparture('');
      setDateOfReturn('');
      setRating(0);
      setComment('');
      setStep(1); 
    } else {
      alert('Please provide a rating and comment.');
    }
  };

  return (
    <div className="review-form">
      {step === 1 && (
        <div>
          <h2>Leave A Review</h2>
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Booking Number:</label>
              <input
                type="number"
                value={bookingNumber}
                onChange={(e) => setBookingNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Package Used:</label>
              <select
                value={packageUsed}
                onChange={(e) => setPackageUsed(e.target.value)}
                required
              >
                <option value="">Select a package</option>
                <option value="Cape">Cape Town Adventure</option>
                <option value="Beijing">Beijing Experience</option>
                <option value="Vienna">Vienna Getaway</option>
                <option value="Peru">Peru Discovery</option>
                <option value="Turkey">Turkey Escapade</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Departure:</label>
              <input
                type="date"
                value={dateOfDeparture}
                onChange={(e) => setDateOfDeparture(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Return:</label>
              <input
                type="date"
                value={dateOfReturn}
                onChange={(e) => setDateOfReturn(e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={handleNextClick}>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='rating'>Rating:</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <FaStar
                    key={value}
                    className={value <= rating ? 'star-selected' : 'star-unselected'}
                    onClick={() => handleStarClick(value)}
                  />
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Comment:</label>
              <textarea
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here..."
                required
              />
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
