import React from 'react';

export const HeroTopRightWave: React.FC = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute -top-12 -right-12 z-0 h-60 w-60 text-royal-blue/25"
    fill="currentColor"
    viewBox="0 0 200 200"
  >
    <path
      d="M43.7,-59.6C56.9,-51.2,68.1,-39.7,73.4,-25.7C78.7,-11.6,78.2,5.1,72.6,19.8C67.1,34.4,56.5,47.1,43.2,56.1C29.9,65.1,15,70.5,0,70.5C-15,70.5,-30,65.1,-42.6,55.9C-55.2,46.7,-65.4,33.7,-70.7,18.8C-76,3.9,-76.4,-12.8,-70.5,-27.1C-64.5,-41.3,-52.1,-53,-38.2,-61.1C-24.3,-69.1,-9,-73.4,3.7,-77.8C16.3,-82.2,30.5,-68,43.7,-59.6Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const HeroBottomLeftWave: React.FC = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-16 -left-12 z-0 h-68 w-68 text-periwinkle/40"
    fill="currentColor"
    viewBox="0 0 200 200"
  >
    <path
      d="M38.1,-52.8C49.9,-44.2,60.2,-33.5,65.9,-20.3C71.5,-7.1,72.6,8.6,67.6,22.8C62.6,37.1,51.5,49.8,38.1,58.7C24.7,67.5,9,72.4,-6.2,74.5C-21.4,76.6,-36.1,75.9,-48.2,67.9C-60.3,59.9,-69.8,44.6,-74.2,28.4C-78.5,12.2,-77.7,-4.8,-71.9,-19.7C-66.1,-34.7,-55.4,-47.5,-42.3,-55.8C-29.2,-64.1,-13.6,-67.9,0.8,-69C15.2,-70.1,26.4,-61.4,38.1,-52.8Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const SparkleStar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
  </svg>
);

export const HeartOutlineDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    className={`fill-none stroke-current ${className}`}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.1}
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const BrushUnderline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 120 10">
    <path d="M2 7 Q 60 0, 118 5" strokeLinecap="round" strokeWidth="2.8" />
  </svg>
);

export const SplashMotif: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span aria-hidden="true" className={`font-black tracking-tighter text-royal-blue select-none ${className}`}>
    \|/
  </span>
);

export const LoopDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 100 30">
    <path
      d="M10 20 C 30 5, 50 35, 70 15 C 80 5, 95 25, 90 20"
      strokeLinecap="round"
      strokeWidth="2.2"
    />
  </svg>
);
