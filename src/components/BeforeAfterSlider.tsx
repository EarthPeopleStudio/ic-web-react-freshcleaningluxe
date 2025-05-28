import React, { useState, useRef, useEffect } from 'react';
import '../styles/BeforeAfterSlider.css';
import SparkleEffect from './SparkleEffect';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  beforeAlt = 'Before Cleaning', 
  afterAlt = 'After Cleaning' 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeLabel, setActiveLabel] = useState<'before' | 'after'>('before');
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isSliding, setIsSliding] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [sparkleKey, setSparkleKey] = useState(0); // Key to force re-render of sparkles
  const sliderRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);
  const slidingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPositionRef = useRef<number>(50);
  
  // Show sparkles on initial load
  useEffect(() => {
    setShowSparkles(true);
  }, []);
  
  // Track image natural dimensions after load
  useEffect(() => {
    const handleImageLoad = () => {
      if (afterImageRef.current) {
        const { naturalWidth, naturalHeight } = afterImageRef.current;
        setImageSize({ width: naturalWidth, height: naturalHeight });
      }
    };
    
    if (afterImageRef.current) {
      afterImageRef.current.addEventListener('load', handleImageLoad);
      
      // If the image is already loaded
      if (afterImageRef.current.complete) {
        handleImageLoad();
      }
    }
    
    return () => {
      // Create a local variable to keep reference to afterImageRef.current
      const imageElement = afterImageRef.current;
      if (imageElement) {
        imageElement.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);
  
  useEffect(() => {
    // Update the active label based on slider position
    if (sliderPosition < 40) {
      setActiveLabel('after');
    } else if (sliderPosition > 60) {
      setActiveLabel('before');
    }
    
    // Update container dimensions for sparkle positioning
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      
      // Use the full slider width and height for sparkles
      // This ensures particles cover the entire right side
      setContainerDimensions({
        width: sliderRect.width,
        height: sliderRect.height
      });
    }
    
    // Check if slider position has changed significantly to regenerate sparkles
    const positionDifference = Math.abs(sliderPosition - lastPositionRef.current);
    if (positionDifference > 5) {
      // Position changed by more than 5% - regenerate sparkles
      setSparkleKey(prevKey => prevKey + 1);
      lastPositionRef.current = sliderPosition;
    }
    
    // Show sparkles when sliding
    if (isSliding) {
      setShowSparkles(true);
      
      // Reset the sliding timeout
      if (slidingTimeoutRef.current) {
        clearTimeout(slidingTimeoutRef.current);
      }
      
      // Hide sparkles after 2 seconds of inactivity
      slidingTimeoutRef.current = setTimeout(() => {
        setIsSliding(false);
        // Only hide sparkles if not hovering
        if (!isHovering) {
          setShowSparkles(false);
        }
      }, 2000);
    }
    
    // Update CSS variables for clip-path
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--slider-position', `${sliderPosition}%`);
    }
    
    return () => {
      if (slidingTimeoutRef.current) {
        clearTimeout(slidingTimeoutRef.current);
      }
    };
  }, [sliderPosition, isSliding, imageSize, isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsSliding(true);
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current || !e.touches[0]) return;
    
    setIsSliding(true);
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowSparkles(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    
    // Only hide sparkles if not sliding
    if (!isSliding) {
      setShowSparkles(false);
    }
  };

  return (
    <div 
      className="before-after-slider" 
      ref={sliderRef} 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-image-container">
        <img src={beforeImage} alt={beforeAlt} className="before-image" />
        <img 
          src={afterImage} 
          alt={afterAlt} 
          className="after-image" 
          ref={afterImageRef}
        />
        
        <div 
          className="after-image-overlay"
          style={{ 
            width: `${100 - sliderPosition}%`,
            clipPath: `inset(0 0 0 ${sliderPosition}%)`
          }}
        />
        
        {/* Separate container for sparkles that follows the slider position */}
        <div 
          className="right-side-sparkles"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
          }}
        >
          <SparkleEffect 
            key={sparkleKey} // Force re-render when key changes
            showSparkles={showSparkles}
            containerWidth={Math.max(containerDimensions.width, 100)}
            containerHeight={Math.max(containerDimensions.height, 100)}
          />
        </div>
        
        <div className="slider-divider"></div>
      </div>
      
      <div className="slider-label">
        <div className={`label ${activeLabel === 'before' ? 'active' : ''}`}>
          {beforeAlt}
        </div>
        <div className={`label ${activeLabel === 'after' ? 'active' : ''}`}>
          {afterAlt}
        </div>
      </div>
      
      <div className="slider-handle">
        <div className="slider-arrow left"></div>
        <div className="slider-arrow right"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider; 