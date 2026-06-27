import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in';
  duration?: 'duration-300' | 'duration-500' | 'duration-700' | 'duration-1000' | 'duration-1500';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-500' | 'delay-700' | '';
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animation = 'slide-up',
  duration = 'duration-1000',
  delay = '',
  threshold = 0.1,
  once = true,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger a bit before appearing in viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Define animation-specific Tailwind classes
  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-in':
        return isIntersecting 
          ? 'opacity-100' 
          : 'opacity-0';
      case 'slide-up':
        return isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12';
      case 'slide-down':
        return isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-12';
      case 'slide-left':
        return isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-12';
      case 'slide-right':
        return isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isIntersecting 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95';
      default:
        return isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${duration} ${delay} ease-out ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
