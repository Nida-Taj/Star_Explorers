import React from 'react';
import ReviewForm from './ReviewForm';  

const ReviewFormPage = ({ onSubmit }) => {
    return (
        <div className="review-form-page">
            <h2>Leave a Review</h2>
            <ReviewForm onSubmit={onSubmit} />
        </div>
    );
};

export default ReviewFormPage;
