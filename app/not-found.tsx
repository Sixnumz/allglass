'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/app/components/LoadingScreen';

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
      {/*<LoadingScreen />*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full"
      >
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="mb-6"
        >
          <svg
            className="w-20 h-20 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - หน้าไม่พบ</h1>
        <p className="text-gray-600 mb-8">ขออภัย! หน้าที่คุณกำลังมองหาไม่มีอยู่หรือถูกลบไปแล้ว</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300"
        >
          กลับสู่หน้าแรก
        </Link>
      </motion.div>
    </div>
  );
}