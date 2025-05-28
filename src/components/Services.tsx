import React, { useRef } from 'react';
import { FaHome, FaBuilding, FaBath, FaTruckMoving, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Services.css';
import promoImg from '../assets/img/promo.jpg';
import mrsD3 from '../assets/img/mrs_d_3.png';
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';
import BeforeAfterShowcase from './BeforeAfterShowcase';

// Define a type for service
type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

// Define a type for service detail
type ServiceDetail = {
  title: string;
  icon: React.ReactElement;
  items: string[];
};

const Services: React.FC = () => {
  const servicesGridRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const services: Service[] = [
    {
      title: 'Residential Cleaning',
      description: 'Basic and deep cleaning, weekly, fortnightly or monthly cleaning, cleaning after parties or events.',
      icon: FaHome({}),
      link: '/services/residential'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Offices, premises and clinics, regular maintenance cleaning for professional environments.',
      icon: FaBuilding({}),
      link: '/services/commercial'
    },
    {
      title: 'Deep Cleaning & Maintenance',
      description: 'Thorough deep cleaning, carpet washing, windows, disinfection, and specialized cleaning needs.',
      icon: FaBath({}),
      link: '/services/deep-cleaning'
    },
    {
      title: 'Move-In/Move-Out Cleaning',
      description: 'Before delivering or receiving a house/apartment. Start fresh in your new home or leave your old one pristine.',
      icon: FaTruckMoving({}),
      link: '/services/move-in-out'
    },
    {
      title: 'Post-Construction Cleaning',
      description: 'Dust removal, debris and thorough cleaning after construction or renovation projects.',
      icon: FaTools({}),
      link: '/services/post-construction'
    }
  ];

  // Service details for the detailed section
  const serviceDetails: ServiceDetail[] = [
    {
      title: "Residential Cleaning",
      icon: FaHome({}) as React.ReactElement,
      items: [
        "Basic and deep cleaning",
        "Weekly, fortnightly or monthly cleaning",
        "Cleaning after parties or events"
      ]
    },
    {
      title: "Commercial Cleaning",
      icon: FaBuilding({}) as React.ReactElement,
      items: [
        "Offices, premises and clinics",
        "Regular maintenance cleaning"
      ]
    },
    {
      title: "Deep Cleaning & Maintenance",
      icon: FaBath({}) as React.ReactElement,
      items: [
        "Thorough deep cleaning service",
        "Carpet washing, windows, disinfection"
      ]
    },
    {
      title: "Move-In/Move-Out Cleaning",
      icon: FaTruckMoving({}) as React.ReactElement,
      items: [
        "Before delivering or receiving a house/apt",
        "Leave your old home pristine"
      ]
    },
    {
      title: "Post-Construction Cleaning",
      icon: FaTools({}) as React.ReactElement,
      items: [
        "Dust removal, debris and thorough cleaning",
        "After construction or renovation projects"
      ]
    }
  ];

  // Use a very short delay for near-immediate display
  const shortDelay = 50;

  return (
    <section id="services" className="services">
      <div className="container">
        <ScrollAnimation animation="from-bottom" delay={shortDelay}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional cleaning solutions for every need</p>
        </ScrollAnimation>
        
        <div className="services-container">
          <div 
            className="services-scroll-arrows scroll-arrow-left"
            onClick={scrollLeft}
          >
            {FaChevronLeft({})}
          </div>
          
          <div 
            className="services-grid" 
            ref={servicesGridRef}
          >
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="from-bottom" delay={shortDelay} className="service-card-wrapper">
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <div 
            className="services-scroll-arrows scroll-arrow-right"
            onClick={scrollRight}
          >
            {FaChevronRight({})}
          </div>
        </div>
        
        <ScrollAnimation animation="from-left" delay={shortDelay}>
          <div className="owner-profile">
            <div className="owner-image">
              <img src={mrsD3} alt="Daniella Caraballo, owner of Fresh Cleaning Luxe" />
            </div>
            <div className="owner-details">
              <h3>Meet Our Team</h3>
              <p>
                At Fresh Cleaning Luxe, we take pride in our professional, detail-oriented 
                cleaning services. Our dedicated team ensures your space is spotless and welcoming,
                using only the best products and techniques for every job.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        
        <BeforeAfterShowcase />

        <div className="service-details">
          {serviceDetails.map((service, index) => (
            <ScrollAnimation key={index} animation="from-right" delay={shortDelay}>
              <div className="service-detail">
                <h3>
                  {service.icon} {service.title}
                </h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="about-section" id="about">
          <div className="container">
            <ScrollAnimation animation="from-bottom" delay={shortDelay}>
              <h2 className="section-title">Why Choose Us?</h2>
              <ul className="benefits-list-centered">
                <li>✓ Trusted and insured local company</li>
                <li>✓ Experienced and detailed staff</li>
                <li>✓ Flexible cleaning plans</li>
                <li>✓ Eco-friendly products available</li>
                <li>✓ 100% satisfaction guaranteed</li>
              </ul>
            </ScrollAnimation>

            <div className="about-content-wrapper">
              <ScrollAnimation animation="from-left" delay={shortDelay}>
                <div className="about-image">
                  <img 
                    src={promoImg} 
                    alt="Professional cleaner" 
                    className="responsive-promo-image"
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="from-right" delay={shortDelay}>
                <div className="about-content">
                  <div className="content-container">
                    <div className="content-top">
                      <p className="tagline"><em>We Clean, You Relax!</em></p>
                      
                      <div className="contact-info-small">
                        <p>📩 Contact us: <a href="mailto:book@freshcleaningluxe.com">book@freshcleaningluxe.com</a></p>
                        <p>🏠 Serving Spanish Fork and surrounding areas</p>
                      </div>
                    </div>
                    
                    <div className="content-middle">
                      <div className="special-offer shine-effect">
                        <h3>SPECIAL OFFER</h3>
                        <p>Get 15% OFF your first cleaning!</p>
                        <p className="small">Limited-time promotion for new clients</p>
                      </div>
                    </div>
                    
                    <div className="content-bottom">
                      <div className="cta-container">
                        <p className="quote-text">Looking for reliable cleaning?</p>
                        <Link to="/book" className="btn-primary book-quote-btn shine-effect">
                          <span className="desktop-text">BOOK YOUR FREE QUOTE</span>
                          <span className="mobile-text">BOOK NOW</span>
                        </Link>
                        <p className="quote-subtext">No-obligation quote tailored to your needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 