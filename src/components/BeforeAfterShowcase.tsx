import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import '../styles/BeforeAfterShowcase.css';

// Import before/after images
import bathtubBefore from '../assets/img/bathtub_before.png';
import bathtubAfter from '../assets/img/bathtub_after.png';
import garageBefore from '../assets/img/garage_before.png';
import garageAfter from '../assets/img/garage_after.png';
import grillBefore from '../assets/img/grill_before.png';
import grillAfter from '../assets/img/grill_after.png';
import kitchenBefore from '../assets/img/kitchen_before.png';
import kitchenAfter from '../assets/img/kitchen_after.png';
import stoveBefore from '../assets/img/stove_before.png';
import stoveAfter from '../assets/img/stove_after.png';

interface CleaningCase {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfterShowcase: React.FC = () => {
  const cleaningCases: CleaningCase[] = [
    {
      title: "Bathroom Transformation",
      beforeImage: bathtubBefore,
      afterImage: bathtubAfter,
      description: "Deep cleaning for bathtubs and showers, removing soap scum, mildew, and stains."
    },
    {
      title: "Garage Organization",
      beforeImage: garageBefore,
      afterImage: garageAfter,
      description: "Complete garage cleaning and organization, from floors to storage areas."
    },
    {
      title: "BBQ Grill Renewal",
      beforeImage: grillBefore,
      afterImage: grillAfter,
      description: "Professional deep cleaning for outdoor grills and cooking equipment."
    },
    {
      title: "Kitchen Revival",
      beforeImage: kitchenBefore,
      afterImage: kitchenAfter,
      description: "Full kitchen cleaning, including cabinets, countertops, and appliances."
    },
    {
      title: "Stove & Cooktop Detailing",
      beforeImage: stoveBefore,
      afterImage: stoveAfter,
      description: "Thorough cleaning of stoves and cooktops, removing burnt-on food and grease."
    }
  ];

  return (
    <div className="before-after-showcase">
      <h2 className="showcase-title">See Our Transformations</h2>
      <p className="showcase-subtitle">Slide to compare before & after results</p>
      
      <div className="showcase-grid">
        {cleaningCases.map((item, index) => (
          <div className="showcase-item" key={index}>
            <h3 className="showcase-item-title">{item.title}</h3>
            <BeforeAfterSlider 
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              beforeAlt="Before Cleaning"
              afterAlt="After Cleaning"
            />
            <p className="showcase-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterShowcase; 