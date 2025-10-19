// app/products/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <main>
      <section className="py-12 sm:py-16 md:py-20 bg-white rounded-lg shadow-sm mt-6 sm:mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold text-center mb-8 sm:mb-12">
            <span className="block">PRODUCTS</span>
            <span className="text-sm sm:text-base text-red-500">(TEMPERED GLASS)</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full md:w-1/3 bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-center mb-4 sm:mb-5">
                <i className="fa-solid fa-circle-info text-white text-2xl mt-5 ml-17 mb-3 mr-100"></i>
                <h1 className="text-white text-center -translate-y-10 text-2xl">Glass Info</h1>
                <Image src="/images/tmpered-glass.jpg" alt="Tempered Glass" width={500} height={300} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded" />
                <h3 className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4">กระจกนิรภัย (Tempered Glass)</h3>
              </div>
              <div className="text-center mb-4 sm:mb-5">
                <Image src="/images/laminated-glass.jpg" alt="Laminated Glass" width={500} height={300} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded" />
                <h3 className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4">กระจกลามิเนต (Laminated Glass)</h3>
              </div>
              <div className="text-center">
                <Image src="/images/tempered-laninated-glass.webp" alt="Tempered-Laminated Glass" width={500} height={300} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded" />
                <h3 className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4">กระจกนิรภัยลามิเนต (Tempered-Laminated Glass)</h3>
                <Link href="/glass-properties" className="inline-block bg-red-500 text-white py-2 px-4 sm:px-5 md:px-6 mt-3 sm:mt-4 rounded-full hover:bg-red-800 transition text-sm sm:text-base md:text-lg hover:bg-red-900">Read more</Link>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">กระจกนิรภัยมีความแข็งแรงสูง 3-5 เท่า มีความทนทานต่อการเปลี่ยนแปลงของอุณหภูมิสูงถึง 250°C และเมื่อแตกจะแตกเป็นเม็ดเล็ก ๆ ลดความเสี่ยงต่อการบาดเจ็บ</p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกนิรภัย ที่สุดของความปลอดภัย</h3>
              <div className="flex justify-center mb-6 sm:mb-8">
                <Image src="/images/tmpered-glass.jpg" alt="กระจกนิรภัย" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกลามิเนต ที่สุดของความทนทาน</h3>
              <div className="flex justify-center mb-6 sm:mb-8">
                <Image src="/images/laminated-glass.jpg" alt="กระจกลามิเนต" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกนิรภัยลามิเนต ที่สุดของความแข็งแกร่งและปลอดภัย</h3>
              <div className="flex justify-center">
                <Image src="/images/tempered-laninated-glass.webp" alt="กระจกนิรภัยลามิเนต" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}