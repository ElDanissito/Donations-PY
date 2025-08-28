'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-black/95 backdrop-blur-sm shadow-lg border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                             <span className="text-white font-bold text-xl">🎓</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">Donaciones TG</span>
                             <span className="text-xs text-purple-300 font-medium">Sistema de delivery con drones</span>
            </div>
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#donaciones" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium relative group"
            >
              Donar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#sobre-nosotros" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium relative group"
            >
              Sobre Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contacto" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* CTA Button */}
            <a 
              href="#donaciones" 
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Donar Ahora
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900 rounded-xl shadow-lg border border-purple-500/20 p-4 space-y-3">
            <a 
              href="#donaciones" 
              className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donar
            </a>
            <a 
              href="#sobre-nosotros" 
              className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </a>
            <a 
              href="#contacto" 
              className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
            
            {/* Mobile CTA */}
            <div className="pt-2 border-t border-purple-500/20">
              <a 
                href="#donaciones" 
                className="block w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg text-center shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
