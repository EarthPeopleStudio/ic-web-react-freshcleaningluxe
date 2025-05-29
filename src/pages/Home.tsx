import React, { useEffect } from 'react';
import '../styles/Home.css';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Fresh Cleaning Luxe | Professional Cleaning Services in Utah';
  }, []);

  return (
    <>
      <Helmet>
        <title>Fresh Cleaning Luxe | Professional Cleaning Services in Utah</title>
        <meta name="description" content="Premium residential and commercial cleaning services in Utah. Serving Salt Lake City, Provo, Ogden and surrounding areas. Get your free quote today!" />
        <meta name="keywords" content="cleaning services Utah, house cleaning Salt Lake City, office cleaning Provo, Fresh Cleaning Luxe" />
        <link rel="canonical" href="https://freshcleaningluxe.com/" />
      </Helmet>
      
      <main className="Home">
        <section className="hero-section" id="home-hero">
          <div className="container">
            <h1>Professional Cleaning Services in Utah</h1>
            <h2>Making homes and businesses spotless throughout Salt Lake City, Provo, and Ogden</h2>
            <p>Fresh Cleaning Luxe offers premium cleaning services tailored to your needs. Whether you need residential or commercial cleaning, our professional team is dedicated to delivering exceptional results.</p>
            <div className="cta-buttons">
              <a href="/quote" className="primary-button">Get Your Free Quote</a>
              <a href="/services" className="secondary-button">Explore Our Services</a>
            </div>
          </div>
        </section>
        
        <section className="services-overview" id="home-services">
          <div className="container">
            <h2>Our Cleaning Services in Utah</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Residential Cleaning</h3>
                <p>We provide comprehensive home cleaning services in Salt Lake City and surrounding areas. From regular maintenance to deep cleaning.</p>
              </div>
              <div className="service-card">
                <h3>Commercial Cleaning</h3>
                <p>Keep your Utah business pristine with our professional commercial cleaning services, available throughout Provo and the entire state.</p>
              </div>
              <div className="service-card">
                <h3>Deep Cleaning</h3>
                <p>Our Ogden deep cleaning services address those hard-to-reach areas and stubborn dirt for a truly thorough clean.</p>
              </div>
              <div className="service-card">
                <h3>Move In/Out Cleaning</h3>
                <p>Starting fresh or leaving? Our detailed move in/out cleaning services in Utah ensure your property is in perfect condition.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="locations-section" id="home-locations">
          <div className="container">
            <h2>Serving All Major Utah Areas</h2>
            <div className="locations-grid">
              <div className="location-card">
                <h3>Salt Lake City</h3>
                <p>Premium cleaning services for Salt Lake City homes and businesses, including downtown and surrounding neighborhoods.</p>
              </div>
              <div className="location-card">
                <h3>Provo</h3>
                <p>Serving Provo with exceptional cleaning services for residences, offices, and commercial spaces.</p>
              </div>
              <div className="location-card">
                <h3>Ogden</h3>
                <p>Comprehensive cleaning solutions for Ogden properties, from regular maintenance to specialized cleaning needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="testimonials-section" id="home-testimonials">
          <div className="container">
            <h2>What Utah Customers Say About Us</h2>
            <div className="testimonials-slider">
              <div className="testimonial">
                <p>"Fresh Cleaning Luxe has been cleaning our Salt Lake City office for over a year now. Their attention to detail is outstanding!"</p>
                <div className="client-info">
                  <h4>Sarah Johnson</h4>
                  <p>Business Owner, Salt Lake City</p>
                </div>
              </div>
              <div className="testimonial">
                <p>"The team at Fresh Cleaning Luxe transformed our Provo home. We've never seen it so clean!"</p>
                <div className="client-info">
                  <h4>Michael Reynolds</h4>
                  <p>Homeowner, Provo</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section" id="home-cta">
          <div className="container">
            <h2>Ready for a Cleaner Utah Home or Business?</h2>
            <p>Experience the Fresh Cleaning Luxe difference with our professional cleaning services.</p>
            <a href="/quote" className="primary-button">Get Your Free Quote Today</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home; 