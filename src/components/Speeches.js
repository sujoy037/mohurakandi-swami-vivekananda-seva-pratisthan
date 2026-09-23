import React from 'react'
import { Play, Quote, Users } from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-[#FF671F]"></div>
    {subtitle && <p className="text-lg max-w-2xl mx-auto text-gray-600">{subtitle}</p>}
  </div>
);

const Speeches = () => {
 return (
    <section id="speeches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Inspiring Words" subtitle="Listen to the speeches and messages that drive our mission forward." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer min-h-[300px] flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 bg-[#FF671F]/20 group-hover:bg-[#FF671F]/10 transition-colors z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
            <div className="relative z-20 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-[#FF671F] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,103,31,0.5)]">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Annual Foundation Day Speech</h3>
              <p className="text-gray-300">Watch our Founder discuss our vision for the upcoming year.</p>
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            {[
              { quote: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
              { quote: "Service to humanity is the truest form of worship. We must dedicate ourselves to the upliftment of the poor and the marginalized.", author: "Board President" }
            ].map((item, idx) => (
              <div key={idx} className="bg-orange-50 p-8 rounded-2xl border border-orange-100 relative h-full flex flex-col justify-center shadow-sm">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-200/50" />
                <p className="text-gray-800 text-lg italic mb-6 relative z-10 leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-orange-100 shadow-sm">
                    <Users className="w-6 h-6 text-[#FF671F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.author}</h4>
                    <p className="text-sm text-[#FF671F] font-medium">Inspirational Message</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speeches
