import React from 'react'
import { Users } from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-[#FF671F]"></div>
    {subtitle && <p className="text-lg max-w-2xl mx-auto text-gray-600">{subtitle}</p>}
  </div>
);

const Administration = () => {
  return (
    <section id="administration" className="py-20 bg-orange-50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Administration & Board" subtitle="Guided by experienced leaders dedicated to social transformation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-orange-100 transition-all">
              <div className="w-32 h-32 mx-auto rounded-full bg-orange-100 mb-6 overflow-hidden relative border-4 border-white shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-12 h-12 text-[#FF671F]/50" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Board Member {member}</h4>
              <p className="text-[#FF671F] font-medium mt-1">Trustee</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Administration
