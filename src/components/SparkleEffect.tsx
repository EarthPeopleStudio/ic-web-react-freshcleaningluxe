import React, { useEffect, useState, useRef } from 'react';
import '../styles/SparkleEffect.css';

interface SparkleEffectProps {
  showSparkles: boolean;
  containerWidth: number;
  containerHeight: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const SparkleEffect: React.FC<SparkleEffectProps> = ({ 
  showSparkles, 
  containerWidth, 
  containerHeight 
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle fade-in and fade-out transitions
  useEffect(() => {
    if (showSparkles) {
      // Cancel any fade-out in progress
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
      setIsFadingOut(false);
      setShouldRender(true);
    } else if (shouldRender) {
      // Start fade-out process
      setIsFadingOut(true);
      
      // Remove component after fade-out completes
      fadeTimeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        setIsFadingOut(false);
      }, 800); // Slightly longer than animation duration to ensure it completes
    }
    
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [showSparkles, shouldRender]);
  
  // Generate completely new random sparkles each time
  useEffect(() => {
    if ((!showSparkles && !isFadingOut) || containerWidth <= 0 || containerHeight <= 0) {
      return;
    }
    
    // Generate random sparkles with more randomness
    const newSparkles: Sparkle[] = [];
    
    // Randomize sparkle count for more natural feel
    const minSparkles = 15;
    const maxSparkles = 35;
    const sparkleCount = Math.floor(minSparkles + Math.random() * (maxSparkles - minSparkles));
    
    // Randomly distribute sparkles across the container
    for (let i = 0; i < sparkleCount; i++) {
      // Add randomness to position
      const randomizeFactor = 0.5 + Math.random() * 0.5; // Between 0.5 and 1
      
      // Randomize position
      const x = Math.random() * containerWidth * randomizeFactor;
      const y = Math.random() * containerHeight;
      
      // Randomize size between 3-12px for more variety
      const size = 3 + Math.random() * 9;
      
      // Randomize animation delay for more natural feel
      const delay = Math.random() * 1; // Reduced from 3 to 1 second max
      
      newSparkles.push({
        id: i,
        x,
        y,
        size,
        delay
      });
    }
    
    // Add some focused sparkles near the slider edge
    const sliderEdgeSparkles = Math.floor(sparkleCount / 4); // 25% of sparkles near the edge
    
    for (let i = 0; i < sliderEdgeSparkles; i++) {
      // Position x near the left edge (slider edge)
      const edgeMargin = containerWidth * 1; // 15% of container width
      const x = Math.random() * edgeMargin;
      const y = Math.random() * containerHeight;
      const size = 3 + Math.random() * 9;
      const delay = Math.random() * 1; // Reduced from 3 to 1 second max
      
      newSparkles.push({
        id: sparkleCount + i,
        x,
        y,
        size,
        delay
      });
    }
    
    setSparkles(newSparkles);
  }, [showSparkles, containerWidth, containerHeight, isFadingOut]);
  
  if (!shouldRender) return null;
  
  return (
    <div className={`sparkle-container ${isFadingOut ? 'fading-out' : ''}`}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            opacity: 0, // Start invisible
            animation: isFadingOut 
              ? `fadeOut 0.7s ease-out forwards` 
              : `sparkle 3s ease-in-out infinite, pulse 2s ease-in-out infinite, fadeIn 0.2s ease-in-out forwards ${sparkle.delay * 0.3}s`
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect; 