'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-950/90 backdrop-blur-md ${
    isScrolled ? 'py-3 shadow-lg shadow-black/40' : 'py-5'
  }`}
>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#hero"
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
            Jahid
          </span>
          <span className="text-orange-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Hire Me Button */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm px-5 py-2 rounded-full transition duration-200 shadow-md shadow-teal-500/10"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-slate-300 hover:text-teal-400 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block text-slate-300 hover:text-teal-400 text-base font-medium py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="block text-center bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm py-2.5 rounded-lg mt-3"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}