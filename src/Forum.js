
import React from 'react';
import Review from './Review';
import './index.css';
import './Forum.css';

const Forum = ({ reviews }) => {

  const hardcodedReviews = [
    {
      firstName: 'John',
      lastName: 'Doe',
      packageUsed: 'Cape Town Adventure',
      dateOfDeparture: '2023-06-15',
      dateOfReturn: '2023-06-25',
      rating: 4,
      comment: "The trip was amazing! The tours were well organized and the guides were very knowledgeable. We visited the provided souvenir shop and listed restaurants on the site specific to Cape Town, and they were wonderful recommendations. I don't travel often and the set up of all the amenities and selection menu has a very wide range of options perfect for a novice like me",
      replies: ['Glad to hear you had a great time, John! Did you visit anything outside of the provided amenities', 'For me and my family we stuck to all the recommendations on the site and they worked very well for us. If you have a better idea of what your doing I definetly think adding some of your own will enhance the experience']
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        packageUsed: 'Peru Discovery',
        dateOfDeparture: '2024-06-15',
        dateOfReturn: '2024-06-25',
        rating: 5,
        comment: 'The trip was amazing! The tours were well organized and the guides were very knowledgeable.',
        replies: ['What amenities did you use?', 'We used the homestay with Bobaloo. He was a very great host and all the tours and shops were very close to that location, so we had minimal to no travel costs which visiting. I definetly think if you plan to go choose the rest stops listed on the site for easy convenience.']
      }
  ];

  const allReviews = [...hardcodedReviews, ...reviews];

  return (
    <div className="forum">
      <h2>Community Forum</h2>
      <div className="reviews">
        {allReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          allReviews.map((review, index) => (
            <Review key={index} review={review} />
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
