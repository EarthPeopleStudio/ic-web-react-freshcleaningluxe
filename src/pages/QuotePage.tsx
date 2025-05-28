import React from 'react';
import QuoteForm from '../components/QuoteForm';
import ServiceAreaMap from '../components/ServiceAreaMap';
import '../styles/QuotePage.css';
import Icon24 from '../assets/img/24.png';

const QuotePage: React.FC = () => {
  return (
    <main className="quote-page">
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