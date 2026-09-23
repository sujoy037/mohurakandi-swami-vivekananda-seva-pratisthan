import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronRight, Users } from 'lucide-react';
import logo from '../assets/logo.svg'
const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(124592);

  useEffect(() => {
    const localVisits = parseInt(localStorage.getItem('totalVisits') || '0', 10);
    const newVisits = localVisits + 1;
    localStorage.setItem('totalVisits', newVisits.toString());
    setVisitorCount(124592 + newVisits);
  }, []);

  return (
    <footer id="contact" className="bg-black text-gray-300 pt-20 pb-10 border-t-4 border-[#FF671F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Professional Brand & Info Section */}
          <div>
            <div className="flex items-center gap-3.5 mb-4 group">
              <img 
                src={logo}
                alt="Mohurakandi Swami Vivekananda Seva Pratisthan Logo" 
                className="h-20 w-20 object-cover rounded-full border-2 border-[#FF671F] shadow-md flex-shrink-0"
                onError={(e) => { e.target.src = 'https://placehold.co/100x100/FF671F/white?text=Logo'; }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm text-white tracking-tight leading-tight">
                  Mohurakandi Swami <span className="text-[#FF671F]">Vivekananda</span>
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF671F]">
                    Seva Pratisthan
                  </span>
                  <span className="text-[9px] bg-orange-950 text-orange-400 font-semibold px-1.5 py-0.2 rounded-full border border-orange-800/50">
                    Estd. 1982
                  </span>
                </div>
              </div>
            </div>

            <p className="text-orange-400 font-semibold text-xs mb-2 tracking-wide">
              (SRI SRI RAMKRISHNA ASHRAM)
            </p>
            <p className="text-gray-400 text-xs mb-3">
              Govt. Reg. No.- S/85128
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to uplifting the marginalized through sustainable welfare programs across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-[#FF671F] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#FF671F] transition-colors">Our Programs</a></li>
              <li><a href="#activities" className="hover:text-[#FF671F] transition-colors">Recent Activities</a></li>
              <li><a href="#administration" className="hover:text-[#FF671F] transition-colors">Administration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF671F] flex-shrink-0 mt-1" />
                <span>P.O.- Mohurakandi, P.S.- Burwan, Dist.- Murshidabad, W.B.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF671F] flex-shrink-0 mt-1" />
                <span>+91 94751 53019 / <br/>+91 94756 81079</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF671F] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:swamivivekananda1982@yahoo.co.in" className="hover:text-[#FF671F] transition-colors break-all">swamivivekananda1982@yahoo.co.in</a>
                  <a href="mailto:swamivivekananda1982@gmail.com" className="hover:text-[#FF671F] transition-colors break-all">swamivivekananda1982@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get updates on our campaigns.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-[#FF671F] text-sm" />
              <button className="bg-[#FF671F] hover:bg-[#e55c1b] px-4 py-2 rounded-r-md transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Total Visitor Counter */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4 bg-gray-900/50 px-8 py-4 rounded-2xl border border-gray-800 shadow-xl">
            <div className="bg-[#FF671F]/10 p-3 rounded-full">
              <Users className="w-6 h-6 text-[#FF671F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Total Visitors</span>
              <span className="text-white font-bold text-3xl tracking-tight leading-none">
                {visitorCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mohurakandi Swami Vivekananda Seva Pratisthan. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;