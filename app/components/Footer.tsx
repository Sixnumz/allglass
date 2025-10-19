// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-red-500 text-white text-center py-8 sm:py-5 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base">© 2025 ALL GLASS ALUMINIUM. สงวนลิขสิทธิ์.</p>
        <div className="mt-3 sm:mt-4">
          <a href="https://www.facebook.com/profile.php?id=100064124831338&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl hover:text-gray-800 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}