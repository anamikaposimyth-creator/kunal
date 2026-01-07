
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Case Studies', value: 'casestudies' },
    { label: 'About', value: 'about' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
              L
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Luminal<span className="text-indigo-600">Digital</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  currentPage === item.value ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
            >
              Get Started
              <ArrowRight size={16} />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 md:hidden backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-2xl font-semibold ${
                  currentPage === item.value ? 'text-indigo-600' : 'text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full max-w-xs rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
