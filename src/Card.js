import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

const Card = ({ title, description, imageUrl }) => {
    const history = useHistory();
    const handleBookNow = () => {
        history.push('/book'); 
    };
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button  onClick={handleBookNow} className="card-button">Book Now</button>
            </div>
        </div>
    );
}

export default Card;