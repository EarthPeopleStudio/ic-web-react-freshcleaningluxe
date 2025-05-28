import React from 'react';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

const ServicesPage: React.FC = () => {
  return (
    <main>
      <section id="services-page" style={{ paddingTop: '120px' }}>
        <Services />
      </section>
      <FAQ />
    </main>
  );
};

export default ServicesPage; 