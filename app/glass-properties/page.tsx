// app/glass-properties/page.tsx
'use client';
import LoadingScreen from '@/app/components/LoadingScreen';
import Image from 'next/image';

export default function GlassProperties() {
  return (
    <main>
      {/*<LoadingScreen />*/}
      <section className="py-12 sm:py-16 md:py-20 bg-white rounded-lg shadow-sm mt-6 sm:mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-500 font-bold text-center mb-8 sm:mb-12">คุณสมบัติของกระจก</h2>
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8" data-aos="fade-up">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/images/tmpered-glass.jpg" alt="กระจกนิรภัย" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกนิรภัย (Tempered Glass)</h3>
                <ul className="list-none space-y-2 text-sm sm:text-base md:text-lg">
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> มีความแข็งแรงสูง 3-5 เท่าเมื่อเทียบกับกระจกธรรมดา</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> ทนต่อการเปลี่ยนแปลงอุณหภูมิสูงถึง 250°C</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> เมื่อแตกจะแตกเป็นเม็ดเล็ก ๆ ลดความเสี่ยงต่อการบาดเจ็บ</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> เหมาะสำหรับงานที่ต้องการความปลอดภัย เช่น ประตู หน้าต่าง</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8" data-aos="fade-up">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/images/laminated-glass.jpg" alt="กระจกลามิเนต" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกลามิเนต (Laminated Glass)</h3>
                <ul className="list-none space-y-2 text-sm sm:text-base md:text-lg">
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> ประกอบด้วยกระจก 2 ชั้นหรือมากกว่าที่มีฟิล์ม PVB คั่นกลาง</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> เมื่อแตก ฟิล์มจะยึดกระจกไว้ไม่ให้แตกกระจาย</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> ช่วยลดเสียงรบกวนจากภายนอกได้ดี</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> ป้องกันรังสี UV ได้มากถึง 99%</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> เหมาะสำหรับงานที่ต้องการความปลอดภัยและลดเสียง เช่น ห้องประชุม</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8" data-aos="fade-up">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/images/tempered-laninated-glass.webp" alt="กระจกนิรภัยลามิเนต" width={400} height={300} className="w-full max-w-[200px] sm:max-w-xs md:max-w-md rounded-lg shadow-md hover:scale-105 transition" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium mb-3 sm:mb-4">กระจกนิรภัยลามิเนต (Tempered-Laminated Glass)</h3>
                <ul className="list-none space-y-2 text-sm sm:text-base md:text-lg">
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> รวมคุณสมบัติของกระจกนิรภัยและกระจกลามิเนต</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> มีความแข็งแรงสูงและเมื่อแตกจะไม่กระจาย</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> ให้ความปลอดภัยสูงสุดและลดเสียงได้ดี</li>
                  <li className="text-gray-600 flex items-start"><span className="text-red-500 mr-2">•</span> เหมาะสำหรับงานที่ต้องการความแข็งแกร่งและความปลอดภัยสูง เช่น อาคารสูง</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}