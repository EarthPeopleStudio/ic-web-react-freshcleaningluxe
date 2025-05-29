import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import revolvoLogo from '../assets/img/revolvo_logo.png';
import BubbleEffect from './BubbleEffect';
import { scrollToTop } from '../utils/scrollToTop';

const Footer: React.FC = () => {
  const handleNavClick = () => {
    scrollToTop();
  };
  return (
    <footer className="footer">
      <div className="bubble-wrapper">
        <BubbleEffect 
          bubbleCount={20}
          minSize={15}
          maxSize={60}
          speed={35}
          colors={['var(--blue-100)', 'var(--blue-200)', 'var(--green-100)', 'var(--green-200)']}
        />
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-company">
            <div className="footer-logo">
              <img src={logo} alt="Fresh Cleaning Luxe, LLC" />
            </div>
            <h3>FRESH CLEANING LUXE, LLC</h3>
            <p>Professional cleaning services in Utah County</p>
            <div className="contact-info">
              <p><span className="contact-icon">📞</span> <span>Call/Text:</span> <a href="tel:+13855654128">385-565-4128</a></p>
              <p><span className="contact-icon">✉️</span> <span>Email:</span> <a href="mailto:book@freshcleaningluxe.com">book@freshcleaningluxe.com</a></p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1XzoFC5K7K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="20" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.instagram.com/freshcleaningluxe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </div>
              </a>
              <a href="https://maps.app.goo.gl/2kp6ejXPqFRpzEA37" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
              <li><Link to="/services" onClick={handleNavClick}>Services</Link></li>
              <li><Link to="/journey" onClick={handleNavClick}>Our History</Link></li>
              <li><Link to="/book" onClick={handleNavClick}>Book Online</Link></li>
              <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning & Maintenance</li>
              <li>Move-In/Move-Out Cleaning</li>
            </ul>
          </div>
          
          <div className="footer-areas">
            <h4>Service Areas</h4>
            <p>Serving throughout Utah.</p>
            <div className="footer-cta">
              <Link to="/book" className="btn-primary" onClick={handleNavClick}>BOOK YOUR FREE QUOTE</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fresh Cleaning Luxe, LLC. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy" onClick={handleNavClick}>Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms-conditions" onClick={handleNavClick}>Terms & Conditions</Link>
            <span className="divider">|</span>
            <Link to="/cookie-policy" onClick={handleNavClick}>Cookie Policy</Link>
          </div>
          <div className="footer-powered-by">
            <span>Powered by</span>
            <a href="https://revolvo.tech" target="_blank" rel="noopener noreferrer" aria-label="Revolvo Tech - Web Development Agency">
              <img src={revolvoLogo} alt="Revolvo" />
              <span className="visually-hidden">Revolvo Tech</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 