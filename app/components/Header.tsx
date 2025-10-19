// app/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4 sm:py-1">
      <div className="container px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={135} height={135} className="h-16 sm:h-20 md:h-24 -ml-5 hover:scale-110 transition-transform" />
          <span className="hidden md:block text-lg sm:text-xl md:text-2xl font-bold text-red-500 ml-3 sm:ml-5 md:ml-6 uppercase tracking-wider">ALL GLASS ALUMINIUM</span>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? '' : 'hidden'} md:flex space-x-6 lg:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 lg:space-x-1 p-4 md:p-0">
            <li><Link href="/" className="text-red-500 font-medium text-base lg:text-lg py-2 px-4 hover:bg-red-500 hover:text-white rounded-full transition">HOME</Link></li>
            <li><Link href="/products" className="text-red-500 font-medium text-base lg:text-lg py-2 px-4 hover:bg-red-500 hover:text-white rounded-full transition">PRODUCTS</Link></li>
            <li><Link href="/services" className="text-red-500 font-medium text-base lg:text-lg py-2 px-4 hover:bg-red-500 hover:text-white rounded-full transition">SERVICES</Link></li>
            <li><Link href="/portfolio" className="text-red-500 font-medium text-base lg:text-lg py-2 px-4 hover:bg-red-500 hover:text-white rounded-full transition">PORTFOLIO</Link></li>
            <li><Link href="/contact" className="text-red-500 font-medium text-base lg:text-lg py-2 px-4 hover:bg-red-500 hover:text-white rounded-full transition">CONTACT</Link></li>
          </ul>
        </nav>
        <div className="hamburger md:hidden flex flex-col space-y-1 cursor-pointer" onClick={toggleMenu}>
          <span className="w-8 h-1 bg-red-500"></span>
          <span className="w-8 h-1 bg-red-500"></span>
          <span className="w-8 h-1 bg-red-500"></span>
        </div>
      </div>
    </header>
  );
}