import React, { useEffect } from 'react';
import '../styles/BookingPage.css';

const BookingPage: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1 className="section-title">Book Online</h1>
        <p className="section-subtitle">Schedule your cleaning service in just a few clicks</p>
      </div>

      <div className="booking-container">
        <div className="booking-info">
          <div className="booking-card">
            <h2>Ready to experience a spotless clean?</h2>
            <p>Book your appointment with FRESH CLEANING LUXE LLC and enjoy:</p>
            <ul>
              <li>Professional cleaning services</li>
              <li>Flexible scheduling options</li>
              <li>Experienced and reliable cleaners</li>
              <li>Satisfaction guaranteed</li>
            </ul>
            <p className="booking-discount">GET UP TO 30% OFF YOUR FIRST CLEANING</p>
            <p className="booking-contact">
              Questions? Call us at <strong>+1 (385) 565-4128</strong>
            </p>
          </div>
        </div>
        
        <div className="calendly-container">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/revolvotech/session"
            style={{ minWidth: '320px', height: '630px' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 