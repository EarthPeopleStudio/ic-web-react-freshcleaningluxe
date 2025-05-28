import { useState, useEffect } from 'react';

// Breakpoint values (should match CSS breakpoints)
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook to check if the current viewport is below a specified breakpoint
 */
export const useIsMobile = (breakpoint: BreakpointKey = 'md'): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoints[breakpoint]);
    };
    
    // Initial check
    checkSize();
    
    // Add event listener
    window.addEventListener('resize', checkSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkSize);
  }, [breakpoint]);

  return isMobile;
};

/**
 * Hook to get the current active breakpoint
 */
export const useBreakpoint = (): BreakpointKey => {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>('xs');

  useEffect(() => {
    const determineBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= breakpoints.xxl) {
        setBreakpoint('xxl');
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else if (width >= breakpoints.sm) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    };
    
    // Initial check
    determineBreakpoint();
    
    // Add event listener
    window.addEventListener('resize', determineBreakpoint);
    
    // Cleanup
    return () => window.removeEventListener('resize', determineBreakpoint);
  }, []);

  return breakpoint;
};

/**
 * A utility function to conditionally apply classes based on breakpoint
 * This is NOT a hook and doesn't use hooks internally
 */
export const getResponsiveClasses = (
  baseClasses: string,
  currentBreakpoint: BreakpointKey,
  responsiveOptions: Partial<Record<BreakpointKey, string>>
): string => {
  const breakpointKeys: BreakpointKey[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const currentIndex = breakpointKeys.indexOf(currentBreakpoint);
  
  let classesToApply = baseClasses;
  
  // Apply classes for current and smaller breakpoints
  for (let i = 0; i <= currentIndex; i++) {
    const bp = breakpointKeys[i];
    if (responsiveOptions[bp]) {
      classesToApply += ` ${responsiveOptions[bp]}`;
    }
  }
  
  return classesToApply;
};

/**
 * Custom hook that uses getResponsiveClasses with the current breakpoint
 */
export const useResponsiveClasses = (
  baseClasses: string,
  responsiveOptions: Partial<Record<BreakpointKey, string>>
): string => {
  const currentBreakpoint = useBreakpoint();
  return getResponsiveClasses(baseClasses, currentBreakpoint, responsiveOptions);
}; 