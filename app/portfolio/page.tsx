// app/portfolio/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  return (
    <main>
      <section className="py-16 sm:py-20 bg-white rounded-lg shadow-sm mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">PORTFOLIO</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 text-base sm:text-lg">สำรวจผลงานคุณภาพสูงจากทีมงานมืออาชีพของเรา</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={() => openModal('modal1')} data-aos="fade-up">
              <Image src="/images/portfolio1.jpg" alt="ผลงาน 1" width={400} height={300} className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition" />
              <div className="absolute bottom-0 w-full bg-red-500 bg-opacity-90 text-white text-center py-2 hover:bg-red-900">โครงการหมู่บ้าน A</div>
            </div>
            <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={() => openModal('modal2')} data-aos="fade-up" data-aos-delay="100">
              <Image src="/images/portfolio2.jpg" alt="ผลงาน 2" width={400} height={300} className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition" />
              <div className="absolute bottom-0 w-full bg-red-500 bg-opacity-90 text-white text-center py-2 hover:bg-red-900">อาคารพาณิชย์ B</div>
            </div>
            <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={() => openModal('modal3')} data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/portfolio3.jpg" alt="ผลงาน 3" width={400} height={300} className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition" />
              <div className="absolute bottom-0 w-full bg-red-500 bg-opacity-90 text-white text-center py-2 hover:bg-red-900">โรงแรม C</div>
            </div>
            <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={() => openModal('modal4')} data-aos="fade-up" data-aos-delay="300">
              <Image src="/images/portfolio4.jpg" alt="ผลงาน 4" width={400} height={300} className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition" />
              <div className="absolute bottom-0 w-full bg-red-500 bg-opacity-90 text-white text-center py-2 hover:bg-red-900">คอนโด D</div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 text-lg sm:text-xl mb-6">เราภูมิใจในผลงานทุกชิ้นที่สร้างสรรค์ ติดต่อเราเพื่อดูเพิ่มเติม!</p>
            <Link href="/contact" className="inline-block bg-red-500 text-white py-3 px-6 sm:px-8 rounded-full hover:bg-red-900 transition">ติดต่อเรา</Link>
          </div>
        </div>
      </section>

      {/* Modals - ตัวอย่างสำหรับ modal1, ทำซ้ำสำหรับอื่นๆ */}
      {activeModal === 'modal1' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg max-w-3xl w-11/12 sm:w-10/12 md:w-9/12 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-6 text-3xl text-red-500 cursor-pointer hover:text-red-800 transition" onClick={closeModal}>×</span>
            <h3 className="text-xl sm:text-2xl text-red-500 font-medium mb-6">โครงการหมู่บ้าน A</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Image src="/images/portfolio1.jpg" alt="รูปย่อย 1" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" />
              <Image src="/images/portfolio2.jpg" alt="รูปย่อย 2" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100" />
              <Image src="/images/portfolio3.jpg" alt="รูปย่อย 3" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200" />
            </div>
          </div>
        </div>
      )}
      {/* ทำซ้ำสำหรับ modal2, modal3, modal4 โดยเปลี่ยน h3 และ src รูป sub (ถ้าไม่มีรูป sub จริง สามารถใช้ placeholder) */}
      {activeModal === 'modal2' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg max-w-3xl w-11/12 sm:w-10/12 md:w-9/12 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-6 text-3xl text-red-500 cursor-pointer hover:text-red-800 transition" onClick={closeModal}>×</span>
            <h3 className="text-xl sm:text-2xl text-red-500 font-medium mb-6">อาคารพาณิชย์ B</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Image src="/images/portfolio2.jpg" alt="รูปย่อย 1" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" />
              <Image src="/images/portfolio3.jpg" alt="รูปย่อย 2" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100" />
              <Image src="/images/portfolio4.jpg" alt="รูปย่อย 3" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200" />
            </div>
          </div>
        </div>
      )}
      {activeModal === 'modal3' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg max-w-3xl w-11/12 sm:w-10/12 md:w-9/12 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-6 text-3xl text-red-500 cursor-pointer hover:text-red-800 transition" onClick={closeModal}>×</span>
            <h3 className="text-xl sm:text-2xl text-red-500 font-medium mb-6">อาคารพาณิชย์ B</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Image src="/images/portfolio2.jpg" alt="รูปย่อย 1" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" />
              <Image src="/images/portfolio3.jpg" alt="รูปย่อย 2" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100" />
              <Image src="/images/portfolio4.jpg" alt="รูปย่อย 3" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200" />
            </div>
          </div>
        </div>
      )}
      {activeModal === 'modal4' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg max-w-3xl w-11/12 sm:w-10/12 md:w-9/12 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="absolute top-4 right-6 text-3xl text-red-500 cursor-pointer hover:text-red-800 transition" onClick={closeModal}>×</span>
            <h3 className="text-xl sm:text-2xl text-red-500 font-medium mb-6">อาคารพาณิชย์ B</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Image src="/images/portfolio2.jpg" alt="รูปย่อย 1" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" />
              <Image src="/images/portfolio3.jpg" alt="รูปย่อย 2" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100" />
              <Image src="/images/portfolio4.jpg" alt="รูปย่อย 3" width={300} height={200} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}