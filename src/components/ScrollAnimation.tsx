import React, { useEffect, useRef, ReactNode } from 'react';
import '../styles/Animations.css';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade' | 'from-bottom' | 'from-top' | 'from-left' | 'from-right';
  threshold?: number;
  delay?: number;
  className?: string;
  rootMargin?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'from-bottom',
  threshold = 0.2,
  delay = 0,
  className = '',
  rootMargin = '0px 0px -100px 0px'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const current = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
            } else {
              entry.target.classList.add('visible');
            }
            
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );
    
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, delay, rootMargin]);
  
  return (
    <div 
      ref={elementRef}
      className={`scroll-animation ${animation} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 