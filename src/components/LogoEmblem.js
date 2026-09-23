import React from 'react';

export default function LogoEmblem() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white">
      {/* Outer Circular Container */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#FF671F] bg-orange-50/40 flex flex-col items-center justify-center shadow-lg p-4 text-center overflow-hidden">
        
        {/* Top/Sun Graphic Area */}
        <div className="absolute top-3 text-[#FF671F] flex flex-col items-center">
          {/* Sun rays effect representation */}
          <div className="w-8 h-3 bg-orange-400/20 rounded-full blur-[1px] mb-1"></div>
        </div>

        {/* Center Text 1: "दिव্যজ্যোতি" (Divyajyoti / Symbol text from your letterhead) */}
        <div className="z-10 mb-1">
          <span className="text-xl sm:text-2xl font-bold text-[#FF671F] tracking-wide block drop-shadow-sm font-serif">
            দিব্যজ্যোতি
          </span>
        </div>

        {/* Divider Line */}
        <div className="w-16 h-0.5 bg-[#FF671F]/40 my-1"></div>

        {/* Organization Name inside Circle */}
        <div className="z-10 px-2">
          <p className="text-[10px] sm:text-xs font-extrabold text-gray-900 leading-tight uppercase">
            Mohurakandi Swami Vivekananda Seva Pratisthan
          </p>
          <span className="text-[9px] font-semibold text-[#FF671F] block mt-0.5">
            (Sri Sri Ramakrishna Ashram)
          </span>
        </div>

        {/* Subtle Inner Ring Border */}
        <div className="absolute inset-2 rounded-full border border-dashed border-[#FF671F]/30 pointer-events-none"></div>
      </div>
    </div>
  );
}