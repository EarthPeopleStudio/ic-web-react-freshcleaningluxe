import { useEffect } from 'react';

/**
 * Custom hook to initialize scroll animations using Intersection Observer
 */
const useScrollAnimations = () => {
  useEffect(() => {
    // Function to initialize the animation observer
    const setupAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      // Get all elements with reveal class
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Call setup animations
    setupAnimations();

    // Cleanup function
    return () => {
      // Remove all animation classes on component unmount to reset for next time
      const animatedElements = document.querySelectorAll('.reveal.active');
      animatedElements.forEach((element) => {
        element.classList.remove('active');
      });
    };
  }, []);

  return null;
};

export default useScrollAnimations; 