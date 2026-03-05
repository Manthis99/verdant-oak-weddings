import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-[95%] sm:w-[90%] max-w-5xl ${
          isScrolled || isMobileMenuOpen
            ? 'bg-cream/90 backdrop-blur-xl border border-moss/10 shadow-lg text-moss'
            : 'bg-transparent text-cream'
        }`}
      >
        <a href="#/" className="font-heading font-bold tracking-tight text-lg md:text-xl flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity z-50">
          <svg className={`w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-180 transition-transform duration-700 ease-in-out ${isScrolled || isMobileMenuOpen ? 'text-moss' : 'text-cream'}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Ring 1 */}
            <path d="M40 30 C 15 30, 20 70, 40 70 C 60 70, 60 30, 40 30 Z" />
            {/* Ring 2 */}
            <path d="M60 35 C 40 35, 40 75, 60 75 C 80 75, 85 35, 60 35 Z" />
            {/* Spark / Star */}
            <path d="M50 10 L 50 20 M 45 15 L 55 15" strokeWidth="3" />
          </svg>
          <span className="truncate">Verdant Oak <span className="text-clay italic font-serif hidden sm:inline">Weddings</span></span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <a href="#/" className="hover:opacity-70 transition-opacity">Weddings</a>
          <a href="#/wedding-guide" className="hover:opacity-70 transition-opacity">The Guide</a>
          <a href="#/about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#/access" className="hover:opacity-70 transition-opacity">Investment Guide</a>
        </div>

        {/* Desktop CTA & Mobile Toggle Component */}
        <div className="flex items-center gap-4 z-50">
          <a href="#/book" className={`hidden md:inline-block px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-magnetic ${
            isScrolled || isMobileMenuOpen
              ? 'bg-moss text-cream hover:bg-moss/90' 
              : 'bg-cream text-moss hover:bg-cream/90'
          } text-center`}>
            Book a Call
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-cream/95 backdrop-blur-3xl z-40 transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[20%] pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center text-center gap-8 font-heading text-3xl text-moss">
          <a href="#/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-clay transition-colors">Weddings</a>
          <a href="#/wedding-guide" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-clay transition-colors">The Guide</a>
          <a href="#/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-clay transition-colors">About</a>
          <a href="#/access" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-clay transition-colors">Investment Guide</a>
          <a href="#/book" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 px-10 py-5 bg-moss text-cream rounded-full font-heading font-semibold text-lg hover:bg-moss/90 btn-magnetic shadow-lg">
              Book a Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
