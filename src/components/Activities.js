import React from 'react'
import { Camera, Calendar, ArrowRight } from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-[#FF671F]"></div>
    {subtitle && <p className="text-lg max-w-2xl mx-auto text-gray-600">{subtitle}</p>}
  </div>
);

const Activities = () => {
    const activities = [
    { title: "Mega Food Drive", date: "Sept 15, 2026", desc: "Distributed over 5,000 hot meals in marginalized areas across the city.", imgPlaceholder: "Food Drive" },
    { title: "Free Health Camp", date: "Sept 10, 2026", desc: "Provided free checkups and medicines to 500+ elderly individuals.", imgPlaceholder: "Health Camp" },
    { title: "School Kit Distribution", date: "Sept 5, 2026", desc: "Handed out backpacks and stationery to 1,000 underprivileged students.", imgPlaceholder: "School Kits" }
  ];
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Recent Activities" subtitle="See our volunteers in action, making a real difference on the ground." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-orange-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-orange-100 group">
              <div className="h-48 bg-orange-200 flex flex-col items-center justify-center relative overflow-hidden">
                <Camera className="w-10 h-10 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-orange-500 font-medium">{act.imgPlaceholder} Photo</span>
                <div className="absolute inset-0 bg-[#FF671F]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FF671F] mb-3">
                  <Calendar className="w-4 h-4" /> {act.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{act.title}</h3>
                <p className="text-gray-600 mb-6">{act.desc}</p>
                <a href="#" className="text-gray-900 font-bold flex items-center gap-2 hover:text-[#FF671F] transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities
