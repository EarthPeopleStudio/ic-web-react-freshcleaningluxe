import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/BubbleEffect.css';

interface BubbleEffectProps {
  className?: string;
  bubbleCount?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  colors?: string[];
}

const BubbleEffect: React.FC<BubbleEffectProps> = ({
  className = '',
  bubbleCount = 15,
  minSize = 10,
  maxSize = 50,
  speed = 25,
  colors = ['#e6f3ff', '#b3d9ff', '#e6f9ed', '#b3ecc9']
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert createBubble to useCallback to use in dependency array
  const createBubble = useCallback(
    (
      container: HTMLDivElement,
      containerWidth: number,
      containerHeight: number,
      minSize: number,
      maxSize: number,
      speed: number,
      colors: string[]
    ) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random properties
      const size = Math.random() * (maxSize - minSize) + minSize;
      const left = Math.random() * (containerWidth - size);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const animationDuration = (Math.random() * 10 + speed) + 's';
      const animationDelay = (Math.random() * 10) + 's';
      
      // Set bubble styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}px`;
      bubble.style.bottom = `-${size}px`;
      bubble.style.backgroundColor = color;
      bubble.style.animationDuration = animationDuration;
      bubble.style.animationDelay = animationDelay;
      
      container.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
          createBubble(container, containerWidth, containerHeight, minSize, maxSize, speed, colors);
        }
      }, (parseFloat(animationDuration) + parseFloat(animationDelay)) * 1000);
    },
    [minSize, maxSize, speed, colors]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    
    // Clear any existing bubbles
    container.innerHTML = '';
    
    // Create new bubbles
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(container, containerWidth, containerHeight, minSize, maxSize, speed, colors);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, [bubbleCount, minSize, maxSize, speed, colors, createBubble]);
  
  return (
    <div className={`bubble-container ${className}`} ref={containerRef}></div>
  );
};

export default BubbleEffect; 