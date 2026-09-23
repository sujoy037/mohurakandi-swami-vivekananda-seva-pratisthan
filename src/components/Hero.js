import React from 'react'
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FF671F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Empowering Lives, <span className="text-orange-200">Building Futures</span>
          </h1>
          <p className="text-xl text-orange-50 mb-10 leading-relaxed">
            Join our mission to provide food, education, and shelter to those in need. Together, we can create a sustainable impact in our communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-orange-50 text-[#FF671F] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Support Our Cause <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-[#FF671F] px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
