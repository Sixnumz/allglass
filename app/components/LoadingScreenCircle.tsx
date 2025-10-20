'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Logo animation: pulse, rotate, and subtle glow
      tl.to('.logo', {
        scale: 1.3,
        rotation: 120,
        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))',
        duration: 1.7,
        ease: 'power4.inOut',
      }).to('.logo', {
        scale: 1,
        rotation: 0,
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))',
        duration: 1.7,
        ease: 'power4.inOut',
      });

      // Text wave animation
      tl.to(
        '.loading-text',
        {
          opacity: 1,
          y: -10,
          scale: 1.25,
          duration: 0.9,
          ease: 'power3.out',
          stagger: { amount: 0.8, from: 'center' },
        },
        0
      ).to('.loading-text', {
        opacity: 0.3,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.in',
      });

      // Background subtle glow animation
      gsap.to('.glow', {
        opacity: 0.2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    // Fade out after 2 seconds
    const timeout = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        onComplete: () => {
          if (containerRef.current) containerRef.current.remove();
        },
      });
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="loading-container fixed inset-0 flex items-center justify-center z-50 bg-black bg-gradient-to-r from-black via-gray-900 to-black bg-[length:200%_100%]"
    >
      <div className="glow absolute inset-0 bg-white/5 rounded-full blur-3xl" />
      <div className="text-center relative">
        {/* Modern Logo */}
        <svg
          className="logo w-14 h-14 mx-auto text-white"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path
            d="M50 26 A24 24 0 0 1 74 50 A24 24 0 0 1 50 74 A24 24 0 0 1 26 50 A24 24 0 0 1 50 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
          <circle cx="50" cy="50" r="8" fill="white" />
        </svg>
        {/* Loading Text */}
        <div className="mt-14 flex space-x-4 justify-center">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
            <span
              key={index}
              className="loading-text text-1xl font-black text-white opacity-0"
              style={{ fontFamily: "'Kanit', sans-serif", textShadow: '0 0 12px rgba(255, 255, 255, 0.8)' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;