import React from 'react';
import '../styles/HistoryPage.css';
import mrsD4 from '../assets/img/mrs_d_4.png';
import ScrollAnimation from '../components/ScrollAnimation';

const HistoryPage: React.FC = () => {
  // Using shorter animation delays
  const shortDelay = 50; // Very short delay for near-immediate display
  
  return (
    <main className="history-page">
      <section className="history-intro">
        <div className="container">
          <ScrollAnimation animation="from-bottom" delay={shortDelay}>
            <h1 className="section-title">Our History</h1>
            <p className="section-subtitle">Our story, mission, vision, and values</p>
          </ScrollAnimation>
          
          <div className="history-content">
            <ScrollAnimation animation="from-left" delay={shortDelay}>
              <div className="founder-image">
                <img src={mrsD4} alt="Daniela Caraballo, CEO & Founder of Fresh Cleaning Luxe" />
                <div className="founder-caption">
                  <h3>Daniela Caraballo</h3>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="from-right" delay={shortDelay}>
              <p>
                Fresh Cleaning Luxe, LLC was born from a simple idea: that a clean space brings tranquility. 
                Founded in Utah by people who understand the value of a clean home or business, 
                based on trust, excellence and the belief that each client deserves a clean, fresh and bright space. 
                We are proud to serve families and businesses throughout Utah County with cleaning solutions according to your needs.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <ScrollAnimation animation="from-bottom" delay={shortDelay}>
              <div className="vision-box">
                <div className="icon">🎯</div>
                <h2>Our Vision</h2>
                <p>
                  To be the most reliable and preferred cleaning company in Utah, recognized for our excellence in detail, 
                  customer service and immediate results.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="from-bottom" delay={shortDelay}>
              <div className="mission-box">
                <div className="icon">💡</div>
                <h2>Our Mission</h2>
                <p>
                  Provide reliable, high-quality and personalized cleaning services that exceed the expectations 
                  of our customers, at all times.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="values">
        <div className="container">
          <ScrollAnimation animation="fade" delay={shortDelay}>
            <div className="values-header">
              <div className="icon">💎</div>
              <h2>Our Fundamental Values</h2>
            </div>
          </ScrollAnimation>
          
          <div className="values-grid">
            {[
              { title: "Integrity", description: "We do the right thing, even when no one is watching." },
              { title: "Excellence", description: "We deliver quality results with every job." },
              { title: "Trust", description: "Your home and office are safe in our hands." },
              { title: "Responsibility", description: "We show up on time, always." },
              { title: "Respect", description: "We value your space, time and preferences." },
              { title: "Customer First", description: "Your satisfaction is our top priority." }
            ].map((value, index) => (
              <ScrollAnimation key={index} animation="from-bottom" delay={shortDelay}>
                <div className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <section className="why-choose-us">
        <div className="container">
          <ScrollAnimation animation="from-bottom" delay={shortDelay}>
            <div className="why-choose-header">
              <h2>Why Choose Us?</h2>
            </div>
          </ScrollAnimation>
          
          <div className="benefits-grid">
            {[
              { title: "Trusted and insured local company", description: "We're fully licensed, bonded and insured for your peace of mind." },
              { title: "Experienced and detailed staff", description: "Our professional cleaners are thoroughly trained and detail-oriented." },
              { title: "Flexible cleaning plans", description: "Choose from one-time, weekly, bi-weekly or monthly cleaning services." },
              { title: "Eco-friendly products available", description: "We offer green cleaning options that are safe for your family and the environment." },
              { title: "100% satisfaction guaranteed", description: "If you're not completely satisfied, we'll re-clean at no additional cost." }
            ].map((benefit, index) => (
              <ScrollAnimation key={index} animation="from-left" delay={shortDelay}>
                <div className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <ScrollAnimation animation="fade" delay={shortDelay}>
            <div className="tagline">
              <p>"We don't just clean, we care."</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default HistoryPage; 