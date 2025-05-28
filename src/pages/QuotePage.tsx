import React from 'react';
import QuoteForm from '../components/QuoteForm';
import ServiceAreaMap from '../components/ServiceAreaMap';
import '../styles/QuotePage.css';

const QuotePage: React.FC = () => {
  return (
    <main className="quote-page">
      <div className="quote-page-header">
        <h1>Request Your Free Quote</h1>
        <div className="hours-banner">
          <div className="icon-container">
            <div className="icon-24">24/7</div>
            <div className="attribution">
              Available around the clock
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