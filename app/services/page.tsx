export default function Services() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-34 sm:py-48 md:py-62 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-xl mx-auto w-full max-w-[90vw] mt-8 sm:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-8 sm:mb-12">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-shield-halved text-black text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">กระจกนิรภัย</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">กระจกที่แข็งแรงและปลอดภัย</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-pen-nib text-black text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">กระจกตกแต่ง</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">ออกแบบตามสไตล์ที่คุณต้องการ</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <i className="fa-solid fa-wrench text-black text-5xl mb-10"></i>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">ติดตั้งกระจก</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">บริการติดตั้งโดยทีมงานมืออาชีพ</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}