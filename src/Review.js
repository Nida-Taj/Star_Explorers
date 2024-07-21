import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';
import './Review.css';

const Review = ({ review }) => {
  const { firstName, lastName, packageUsed, dateOfDeparture, dateOfReturn, rating, comment, replies: initialReplies = [] } = review;
  const [replies, setReplies] = useState(initialReplies);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      setReplies([...replies, replyText.trim()]);
      setReplyText('');
    }
  };

  return (
    <div className="review">
      <div className="left-side">
        <h3>{firstName} {lastName}</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <FaStar
              key={value}
              className={value <= rating ? 'star-selected' : 'star-unselected'}
            />
          ))}
        </div>
        <p className="package-name2">Package: {packageUsed}</p>
        <p>Departure: {dateOfDeparture}</p>
        <p>Return: {dateOfReturn}</p>
      </div>
      <div className="comment-section">
        <p>Review: </p>
        <p className="comment">{comment}</p>
      </div>
      <hr className="divider" />
      <div className="reply-section">
        <h4>Replies:</h4>
        {replies.length === 0 && <p>No replies yet.</p>}
        {replies.map((reply, index) => (
          <div key={index} className="reply">
            <p>{reply}</p>
          </div>
        ))}
        <form onSubmit={handleReplySubmit} className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Ask a Question..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Review;



