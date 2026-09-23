import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../assets/logo.svg'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Activities', href: '#activities' },
        { name: 'Administration', href: '#administration' },
        { name: 'Speeches', href: '#speeches' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex-shrink-0 flex items-center gap-3.5 cursor-pointer group">
                        {/* Logo Icon with subtle hover effect */}
                        <img
                            src={logo}
                            alt="Mohurakandi Swami Vivekananda Seva Pratisthan Logo"
                            className="h-20 w-20 lg:h-13 lg:w-13 object-cover rounded-full border-2 border-[#FF671F] shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
                            onError={(e) => { e.target.src = 'https://placehold.co/100x100/FF671F/white?text=Logo'; }}
                        />

                        {/* Organization Title & Subtitle */}
                        <div className="flex flex-col">
                            <span className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-gray-900 leading-tight">
                                Mohurakandi Swami <span className="text-[#FF671F]">Vivekananda</span>
                            </span>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-bold tracking-wider uppercase text-[#FF671F]">
                                    Seva Pratisthan
                                </span>
                                <span className="text-[10px] bg-orange-100 text-[#FF671F] font-semibold px-1.5 py-0.2 rounded-full border border-orange-200">
                                    Estd. 1982
                                </span>
                            </div>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#FF671F] font-medium transition-colors whitespace-nowrap text-sm xl:text-base">
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-[#FF671F] hover:bg-[#e55c1b] text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap text-sm xl:text-base">
                            <Heart className="w-4 h-4 flex-shrink-0" /> Donate Now
                        </button>
                    </nav>

                    <div className="lg:hidden flex items-center flex-shrink-0">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-[#FF671F] font-medium border-b border-gray-50">
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full mt-4 bg-[#FF671F] text-white px-6 py-3 rounded-full font-bold flex justify-center items-center gap-2">
                            <Heart className="w-4 h-4" /> Donate Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header
