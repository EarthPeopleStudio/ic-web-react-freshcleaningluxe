import React from 'react';
import '../styles/Home.css';
import SEOv2 from '../utils/SEOv2';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <SEOv2 
        title="Professional House Cleaning Service | Fresh Cleaning Luxe | Utah County"
        description="Top-rated house cleaning services in Utah County. Residential, commercial, and deep cleaning in Spanish Fork, Payson, Provo, Salem. Get your free quote today!"
        keywords="cleaning services Utah County, house cleaning Spanish Fork, maid service Provo, professional cleaning service, deep cleaning Payson, residential cleaning Utah, move out cleaning Salem"
      />
    </div>
  );
};

export default Home; 