import React from 'react';

const NeoPricing: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-white flex flex-col items-center overflow-hidden">
      {/* Decorative Feather Shape on the right */}
      <img
        src="/Neo-web-feather-shape-04.png"
        alt=""
        className="hidden md:block absolute right-0 top-0 pointer-events-none select-none"
        style={{
          width: "420px",
          height: "auto",
          zIndex: 1,
          transform: "rotate(-18deg)",
          marginRight: "-110px",
          marginTop: "10px",
        }}
        aria-hidden="true"
        draggable={false}
      />

      {/* Header */}
      <header className="text-center mb-10 relative z-10">
        <p className="text-lg font-semibold text-gray-800">Pricing</p>
        <h2 className="font-bold mt-2" style={{ color: '#49C2E8', fontFamily: 'Roboto Condensed, sans-serif', fontSize: '36px', fontWeight: 'bold' }}>
          Couldn't get any cheaper
        </h2>
      </header>

      {/* Main Pricing Container */}
      <main 
        className="text-white rounded-3xl p-12 max-w-3xl w-full text-center relative z-10"
        style={{ backgroundColor: '#4A7AB2' }}
      >
        <h3 className="text-3xl font-bold" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Yes, You can afford all your dreams!</h3>
        <p className="mt-4 opacity-90" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '500', fontSize: '15px' }}>
          Fly beyond your expenses, Afford all your dreams, just a T$ away
        </p>

        {/* White Pricing Card */}
        <div className="relative mt-8 bg-white text-gray-800 rounded-2xl p-6 max-w-md mx-auto shadow-lg">
          {/* Blue Banner */}
          <div 
            className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: '#49C2E8' }}
          >
            70% cheaper than most finance apps today
          </div>

          <div className="flex justify-between items-center mt-4">
            {/* Plan Details */}
            <div>
              <h4 className="text-xl font-bold text-left">Monthly Plan</h4>
              <p className="text-xs text-left" style={{ color: '#49C2E8' }}>All pro features</p>
            </div>
            {/* Price Details */}
            <div className="text-right">
              <p className="text-2xl font-bold">1/USD</p>
              <p className="text-xs text-gray-500">that's 0.03 USD a day</p>
            </div>
          </div>
          <a href="#" className="text-xs mt-4 inline-block" style={{ color: '#49C2E8' }}>
            show all features &gt;
          </a>
        </div>

        <p className="mt-6" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '500', fontSize: '15px' }}>
          Or, you can try for free. No credit card required.
        </p>

        {/* CTA Button */}
        <button 
          className="text-white font-bold py-3 px-8 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#49C2E8' }}
        >
          Start Your Free Trial
        </button>
      </main>
    </section>
  );
};

export default NeoPricing;