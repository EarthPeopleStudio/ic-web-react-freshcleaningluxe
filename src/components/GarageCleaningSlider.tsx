import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const beforeImage = process.env.PUBLIC_URL + '/images/before.png';
const afterImage = process.env.PUBLIC_URL + '/images/after.png';

const GarageCleaningSlider: React.FC = () => {
  return (
    <div className="garage-cleaning-showcase">
      <h3>Garage Cleaning Transformation</h3>
      <BeforeAfterSlider 
        beforeImage={beforeImage}
        afterImage={afterImage}
        beforeAlt="Before Cleaning"
        afterAlt="After Cleaning"
      />
      <p className="showcase-description">
        Our professional garage cleaning service transforms cluttered, dirty spaces into clean, organized environments.
      </p>
    </div>
  );
};

export default GarageCleaningSlider; 