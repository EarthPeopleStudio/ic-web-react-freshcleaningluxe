import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';
import mrsD1 from '../assets/img/mrs_d_1.png';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    // Slight delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Handle window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine if we're on a smaller screen (1080p or less)
  const isSmallScreen = windowWidth <= 1080;

  return (
    <div className="hero">
      <div className={`hero-overlay ${isSmallScreen ? 'darkened' : ''}`}></div>
      <div className="hero-background">
        <img 
          src={mrsD1} 
          alt="Professional cleaner with blue gloves and cleaning supplies"
          className={isVisible ? 'fade-in' : ''}
          style={isSmallScreen ? { objectPosition: '70% 25%' } : {}}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="hero-bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
      </div>
      
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>
      
      <div className="hero-content-centered">
        <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>
          <span className="text-animated">We Clean,</span> <br />
          <span className="text-animated delay-1">You Relax!</span>
        </h1>
        <div className={`hero-message ${isVisible ? 'animate-in' : ''}`}>
          <p>Professional cleaning services</p>
          <p>for homes and businesses in Utah</p>
        </div>
        <div className={`hero-buttons ${isVisible ? 'animate-in' : ''}`}>
          <Link to="/book" className="btn-primary">
            <span className="btn-text">REQUEST YOUR FREE QUOTE</span>
          </Link>
          <Link to="/services" className="btn-secondary">
            <span className="btn-text">SEE ALL SERVICES</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 