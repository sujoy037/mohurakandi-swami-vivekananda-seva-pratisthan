import React from 'react'
import { Utensils, BookOpen, HeartHandshake, ChevronRight } from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-[#FF671F]"></div>
    {subtitle && <p className="text-lg max-w-2xl mx-auto text-gray-600">{subtitle}</p>}
  </div>
);

const Programs = () => {
    const programs = [
    { title: "Mid-Day Meals", desc: "Providing nutritious meals to school children to eradicate classroom hunger.", icon: <Utensils className="w-6 h-6" /> },
    { title: "Education For All", desc: "Sponsoring education materials and tutoring for underprivileged students.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Community Health", desc: "Organizing free medical camps and health awareness drives in rural areas.", icon: <HeartHandshake className="w-6 h-6" /> }
  ];
  return (
    <section id="programs" className="py-20 bg-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Core Programs" subtitle="Targeted initiatives designed to address the most pressing needs of our society." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-orange-100 group">
              <div className="w-14 h-14 bg-[#FF671F]/10 rounded-xl flex items-center justify-center text-[#FF671F] mb-6 group-hover:bg-[#FF671F] group-hover:text-white transition-colors">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prog.title}</h3>
              <p className="text-gray-600 mb-6">{prog.desc}</p>
              <a href="#" className="text-[#FF671F] font-bold flex items-center gap-2 hover:text-[#e55c1b]">
                Read More <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs
