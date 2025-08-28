'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, rootMargin });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
