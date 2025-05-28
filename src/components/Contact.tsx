import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>"Extcelient service! My kitchen and bathroom are spotless. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <p>— Sarah M., Provo</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>"After renovation, they made everything shine. Will definitely call again!"</p>
              </div>
              <div className="testimonial-author">
                <p>— Mike R., Spanish Fork</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-heading">
              <h2>Get In Touch</h2>
              <p className="get-in-touch-subtitle">Ready for a spotless space? Contact us today!</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-detail">
                  <h3>Call or Text</h3>
                  <p className="get-in-touch-phone"><a href="tel:+13855654128">385-565-4128</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <div className="contact-detail">
                  <h3>Email Us</h3>
                  <p className="get-in-touch-email"><a href="mailto:book@freshcleaningluxe.com">book@freshcleaningluxe.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-detail">
                  <h3>Service Area</h3>
                  <p className="get-in-touch-area">Spanish Fork, Payson, Provo, Salem & surrounding areas</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Connect With Us</h3>
              <div className="social-buttons">
                <a href="https://www.facebook.com/share/1XzoFC5K7K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-button">
                  <div className="contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="18" height="18" fill="currentColor">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/freshcleaningluxe" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-button">
                  <div className="contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="https://maps.app.goo.gl/2kp6ejXPqFRpzEA37" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="social-button">
                  <div className="contact-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                  </div>
                  <span>Location</span>
                </a>
              </div>
            </div>
            
            <div className="contact-cta">
              <Link to="/book" className="btn-primary book-quote-btn">BOOK YOUR FREE QUOTE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 