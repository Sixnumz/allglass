'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const rippleRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    particlesRef.current = particlesRef.current.slice(0, 10); // Limit particles to 10

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Progress bar animation
      tl.to('.progress-bar', {
        width: '100%',
        duration: 2.5,
        ease: 'power3.inOut',
      }).to('.progress-bar', {
        width: '0%',
        duration: 0.5,
        ease: 'power2.out',
      });

      // Icon animation: pulse and glow
      gsap.to(iconRef.current, {
        scale: 1.2,
        filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power3.inOut',
      });

      // Ripple effect
      gsap.to(rippleRef.current, {
        scale: 3,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.out',
      });

      // Particle animation: subtle and organic
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            x: () => Math.random() * 100 - 50,
            y: () => Math.random() * 100 - 50,
            opacity: 0,
            scale: () => Math.random() * 0.4 + 0.3,
            duration: 2 + Math.random() * 1.5,
            repeat: -1,
            delay: index * 0.2,
            ease: 'sine.out',
          });
        }
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

    // Fade out after 3 seconds (adjusted from 2s for better visibility)
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
      className="loading-container fixed inset-0 flex items-center justify-center z-50 bg-black bg-gradient-to-r from-black via-gray-900 to-black bg-[length:200%_100%] bg-gradient"
    >
      <div className="glow absolute inset-0 bg-white/5 rounded-full blur-3xl" />
      {/* Particles */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) particlesRef.current[index] = el;
          }}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-30"
          style={{
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <div className="text-center relative">
        {/* Ripple Effect */}
        <div
          ref={rippleRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/10 opacity-50"
        />
        {/* Icon/Image above Progress Bar */}
        {/* <Image
          ref={iconRef}
          src="/images/favicon.ico" // Replace with your PNG or GIF path in /public
          alt="Loading Icon"
          className="w-48 h-48 mx-auto mb-4 relative object-contain"
        /> */}
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="progress-bar w-0 h-full bg-white/80 rounded-full" />
        </div>
        {/* Loading Text */}
        <div
          className="loading-text mt-6 text-white text-xl font-extrabold opacity-0"
          style={{ fontFamily: "'Kanit', sans-serif", textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;