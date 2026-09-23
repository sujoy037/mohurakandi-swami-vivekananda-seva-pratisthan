import React from 'react'
import { Target, HeartHandshake } from 'lucide-react';
import images from '../assets/images.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF671F] rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src={images} 
              alt="About Swami Vivekananda Seva Paristhan" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover border-4 border-white"
              onError={(e) => { e.target.src = 'https://placehold.co/600x600/FF671F/white?text=About+Us'; }}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <div className="w-20 h-1 bg-[#FF671F] rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Inspired by the timeless ideals of Swami Vivekananda, the Swami Vivekananda Seva Paristhan was established to serve humanity. We believe that true worship lies in uplifting those who are marginalized and deprived of basic necessities.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#FF671F] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900 block">Eradicate Hunger</strong>
                  <span className="text-gray-600">Ensuring no child is deprived of education due to a lack of food.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HeartHandshake className="w-6 h-6 text-[#FF671F] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900 block">Community Empowerment</strong>
                  <span className="text-gray-600">Building self-reliant communities through education and healthcare.</span>
                </div>
              </li>
            </ul>
            <button className="bg-transparent border-2 border-[#FF671F] text-[#FF671F] hover:bg-[#FF671F] hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
