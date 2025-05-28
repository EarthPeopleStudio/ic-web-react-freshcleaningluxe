import React from 'react';
import QuoteForm from '../components/QuoteForm';
import ServiceAreaMap from '../components/ServiceAreaMap';
import '../styles/QuotePage.css';
import Icon24 from '../assets/img/24.png';
import SEOv2 from '../utils/SEOv2';

const QuotePage: React.FC = () => {
  return (
    <main className="quote-page">
      <SEOv2 
        title="Get Your Free Cleaning Quote | Fresh Cleaning Luxe | Utah County"
        description="Request a free, no-obligation cleaning quote for your home or business in Utah County. Professional cleaning services in Spanish Fork, Payson, Provo, Salem."
        keywords="cleaning quote, free cleaning estimate, house cleaning cost Utah County, commercial cleaning quote, deep cleaning services price, affordable cleaning service Utah"
      />
      <div className="quote-page-header">
        <h1>Request Your Free Quote</h1>
        <div className="hours-banner">
          <div className="icon-container">
            <img src={Icon24} alt="24/7 Service" className="icon-24" />
            <div className="attribution">
              <a href="https://pngtree.com/freepng/24-hours-service-sign-design-with-blue-round-arrow-and-clock_8774970.html">
                png image from pngtree.com
              </a>
            </div>
          </div>
        </div>
        <p>Let us know what you need and we'll get back to you with a customized cleaning plan</p>
      </div>
      <QuoteForm />
      <ServiceAreaMap />
    </main>
  );
};

export default QuotePage; 