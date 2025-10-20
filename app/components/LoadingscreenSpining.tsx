'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dotsRef.current = dotsRef.current.slice(0, 6); // Limit dots to 6

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Spinning dots animation
      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          gsap.to(dot, {
            rotation: 360,
            duration: 2 + index * 0.2, // Vary speed for each dot
            ease: 'linear',
            transformOrigin: '50% 80px', // Orbit around center (80px radius)
            repeat: -1,
          });
          gsap.to(dot, {
            scale: 1.3,
            opacity: 0.6,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        }
      });

      // Wave pulse effect
      gsap.to(waveRef.current, {
        scale: 2.5,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: 'power2.out',
      });

      // Text animation
      gsap.to('.loading-text', {
        opacity: 1,
        scale: 1.1,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'power3.inOut',
      });

      // Background glow animation
      gsap.to('.glow', {
        opacity: 0.15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Background gradient animation
      gsap.to('.bg-gradient', {
        backgroundPosition: '200% center',
        duration: 6,
        repeat: -1,
        ease: 'linear',
      });
    }, containerRef);

    // Fade out after 3 seconds
    const timeout = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        onComplete: () => {
          if (containerRef.current) containerRef.current.remove();
        },
      });
    }, 3000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="loading-container fixed inset-0 flex items-center justify-center z-50 bg-black bg-gradient-to-r from-black via-gray-900 to-black bg-[length:200%_100%] bg-gradient"
    >
      <div className="glow absolute inset-0 bg-white/5 rounded-full blur-3xl" />
      <div className="relative">
        {/* Wave Pulse */}
        <div
          ref={waveRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 opacity-50"
        />
        {/* Spinning Dots */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) dotsRef.current[index] = el;
            }}
            className="absolute w-3 h-3 bg-white rounded-full opacity-80"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-80px)`, // Position dots in a circle
            }}
          />
        ))}
        {/* Loading Text */}
        <div
          className="loading-text mt-24 text-white text-2xl font-extrabold opacity-0"
          style={{ fontFamily: "'Kanit', sans-serif", textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}
        >
          LOADING
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;