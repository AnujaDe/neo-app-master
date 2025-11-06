import type { FC } from 'react';
import Image from 'next/image';

const NeoFooter: FC = () => {
  return (
    <footer className="w-full">
      {/* Top "Powered by" section */}
      <div className="py-12 bg-gradient-to-r from-cyan-100 via-white to-cyan-100">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <Image 
              src="/images/neo-logo.png" 
              alt="Neo Logo" 
              width={100} 
              height={50} 
              objectFit="contain" 
            />
          </div>
          <span className="text-gray-600 font-semibold">Powered by</span>
          <div>
            <Image 
              src="/images/FintaraLogos.png" 
              alt="Fintara Logo" 
              width={160} 
              height={50}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Fintara logo */}
          <div className="flex justify-center md:justify-start">
             <Image 
              src="/images/FintaraLogos.png" 
              alt="Fintara Logo" 
              width={130} 
              height={40}
              objectFit="contain"
            />
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Fintara Products</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Support & Help</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Open Support Ticket</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Q&As</a></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Terms</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">TOS</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className="bg-[#3b82f6] h-10"></div>
    </footer>
  );
};

export default NeoFooter;