import React from 'react'
import { Camera } from 'lucide-react';
const SectionHeading = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
    <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-white"></div>
  </div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-[#FF671F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Media Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <div key={img} className="aspect-square bg-orange-700/40 rounded-lg flex items-center justify-center hover:bg-orange-600/50 transition-colors cursor-pointer group">
              <Camera className="w-8 h-8 text-orange-200 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery
