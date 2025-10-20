// app/layout.tsx
'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import LoadingScreen from '@/app/components/LoadingScreen';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <html lang="th">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALL GLASS ALUMINIUM</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className="font-['Kanit'] text-gray-800 bg-gray-100">
        <Header />
        {children}
        <Footer />
        <button
          className="back-to-top fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-red-500 text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl opacity-0 invisible hover:bg-red-800 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </body>
    </html>
  );
}