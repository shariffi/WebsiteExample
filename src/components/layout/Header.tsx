import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#value-props' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white">
            <span className="text-[#64ffda]">Web</span>Studio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact"
            className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium glow-border-64ffda"
          >
            Get Your Free Mockup
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a192f]/95 backdrop-blur-sm shadow-lg">
          <ul className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <li key={item.label} className="py-2">
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-[#64ffda] block transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a 
                href="#contact"
                className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 py-2 px-6 rounded-full transition-all duration-300 inline-block font-medium glow-border"
                onClick={() => setIsOpen(false)}
              >
                Get Your Free Mockup
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;