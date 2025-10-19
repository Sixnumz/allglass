// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const slides: string[] = [
    '/images/tmpered-glass.jpg',
    '/images/laminated-glass.jpg',
    '/images/tempered-laninated-glass.webp',
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main>
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="slides h-full relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
          <button className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 bg-opacity-70 text-white px-4 py-2 text-xl hover:bg-red-800 transition z-20" onClick={prevSlide}>
            ❮
          </button>
          <button className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 bg-opacity-70 text-white px-4 py-2 text-xl hover:bg-red-800 transition z-20" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold text-center mb-8 sm:mb-12">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="aspect-square rounded overflow-hidden border-3 border-black">
              <Image src="/images/tmpered-glass.jpg" alt="Image 1" width={500} height={500} className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
            <div className="aspect-square rounded overflow-hidden border-3 border-black">
              <Image src="/images/tmpered-glass.jpg" alt="Image 2" width={500} height={500} className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
            <div className="aspect-square rounded overflow-hidden border-3 border-black">
              <Image src="/images/tempered-laninated-glass.webp" alt="Image 3" width={500} height={500} className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
            <div className="aspect-square rounded overflow-hidden border-3 border-black">
              <Image src="/images/logo.jpg" alt="Image 4" width={500} height={500} className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white rounded-lg shadow-sm mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
          <div className="w-full md:w-1/2">
            <Image src="/images/tmpered-glass.jpg" alt="Home Image" width={800} height={600} className="w-full rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-gray-900">Home</span>
            </h2>
            <p className="text-red-500 font-medium text-lg sm:text-xl mb-4">คุณภาพและจุดประสงค์</p>
            <p className="text-gray-600 text-base sm:text-lg">เรามุ่งมั่นให้บริการกระจกและอะลูมิเนียมคุณภาพสูง เพื่อตอบโจทย์ทุกความต้องการ</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 mt-35">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-star text-gray-900 text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl font-medium text-red-500 mb-3 sm:mb-4">คุณภาพสูง</h3>
              <p className="text-gray-600 text-base">กระจกที่แข็งแรง ทนทาน</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-clock text-gray-900 text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl font-medium text-red-500 mb-3 sm:mb-4">บริการรวดเร็ว</h3>
              <p className="text-gray-600 text-base">ส่งมอบงานตรงเวลา</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-coins text-gray-900 text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl font-medium text-red-500 mb-3 sm:mb-4">ราคาเป็นมิตร</h3>
              <p className="text-gray-600 text-base">คุ้มค่าทุกบาท</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}