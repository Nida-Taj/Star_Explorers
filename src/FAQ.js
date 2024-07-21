import React from 'react';
import './index.css';

const FAQ = () => {
  return (
    <main className="faq" role="main">
      <section className="faq-content" aria-labelledby="faq-heading">
        <h1 id="faq-heading">FAQ</h1>
        <div role="region" aria-labelledby="cancellation-policy">
          <h2 id="cancellation-policy">Cancellation Policy</h2>
          <p>
            To cancel your reservation, please notify us at least 2 weeks prior to your departure date to receive a full refund.
            Cancellations made within a week or less will incur a 60% cancellation fee based on the total amount of the reservation.
          </p>
        </div>
        <div role="region" aria-labelledby="no-shows">
          <h2 id="no-shows">No Shows</h2>
          <p>
            If you do not show up for your package activities, no refunds will be issued.
          </p>
        </div>
        <div role="region" aria-labelledby="modifications">
          <h2 id="modifications">Modifications</h2>
          <p>
            If you require changes to your reservation, please contact us as soon as possible with your booking number.
          </p>
        </div>
        <div role="region" aria-labelledby="make-booking">
          <h2 id="make-booking">How do I make a booking?</h2>
          <p>
            To make a booking, visit our website and select your desired package or service. 
            Follow the prompts to enter your details, choose your dates, 
            and select your desired amenities. You will receive a confirmation
            once your booking is successfully completed.
          </p>
        </div>
        <div role="region" aria-labelledby="modify-booking">
          <h2 id="modify-booking">Can I modify my booking after it’s been confirmed?</h2>
          <p>
            Yes, you can modify your booking by contacting our customer support team. 
            Changes should be made as soon as possible to ensure availability.
          </p>
        </div>
        <div role="region" aria-labelledby="change-dates">
          <h2 id="change-dates">Can I change my booking dates?</h2>
          <p>
            Yes, changes to booking dates can be made by contacting our customer support team.
            Changes are subject to availability and may result in additional charges.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
