import React from 'react';
import '../styles/ServiceAreaMap.css';

const ServiceAreaMap: React.FC = () => {
  return (
    <div className="service-area-section">
      <div className="service-area-container">
        <div className="service-area-header">
          <div className="location-pin">📍</div>
          <h2>Service Areas</h2>
        </div>
        
        <p className="service-area-description">
          We proudly serve the following areas in Utah County and surrounding regions:
        </p>
        
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193682.84940866254!2d-111.83878119325897!3d40.06838135703354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7808c2f3d545%3A0x673d44f2e32ee549!2sUtah%20County%2C%20UT!5e0!3m2!1sen!2sus!4v1654789542738!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map"
          ></iframe>
        </div>
        
        <div className="cities-list">
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Spanish Fork</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Payson</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Salem</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Provo</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Orem</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Springville</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Mapleton</span>
          </div>
          <div className="city-item">
            <span className="city-dot"></span>
            <span className="city-name">Pleasant Grove</span>
          </div>
        </div>
        
        <p className="service-note">Don't see your area? Contact us and we'll let you know if we can accommodate your location.</p>
      </div>
    </div>
  );
};

export default ServiceAreaMap; 