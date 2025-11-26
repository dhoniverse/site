import React, { useState, useEffect, RefObject, useRef } from 'react';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  logoRef: RefObject<HTMLDivElement | null>;
  placeholderRef: RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ logoRef, placeholderRef }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const navBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navBgRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress: 0 at top, 1 when scrolled past 80% of viewport
      const progress = Math.min(Math.max(scrollY / (viewportHeight * 0.8), 0), 1);

      // Interpolate styles
      const opacity = progress * 0.95; // Max 95% opacity
      const borderOpacity = progress * 0.3; // Max 30% border opacity

      navBgRef.current.style.backgroundColor = `rgba(18, 24, 16, ${opacity})`; 
      navBgRef.current.style.borderBottomColor = `rgba(31, 46, 31, ${borderOpacity})`; 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  // Updated links as requested
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Cultural Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500">
        {/* Background Layer */}
        <div 
          ref={navBgRef}
          className="absolute inset-0 border-b border-transparent transition-colors will-change-[background-color,border-color]"
          style={{ 
            backgroundColor: 'rgba(18, 24, 16, 0)',
            borderBottomColor: 'rgba(31, 46, 31, 0)'
          }} 
        />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between z-10">
          
          {/* Smart Logo Container */}
          <div className="relative z-50 h-12 w-48">
            <div 
              ref={placeholderRef}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0"
              aria-hidden="true"
            />
            <div 
              ref={logoRef}
              className="w-full h-full origin-top-left will-change-transform"
              style={{ opacity: 0 }} 
            >
              <a href="#" onClick={(e) => scrollToSection(e, '#')}>
                <img 
                  src={LOGO_URL} 
                  alt="Dhoniverse Logo" 
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Desktop Menu with Collapse Logic */}
          <div className="hidden md:flex items-center gap-4">
            <div 
              className={`flex items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out ${isNavCollapsed ? 'max-w-0 opacity-0' : 'max-w-[600px] opacity-100'}`}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-6 py-2 rounded-full bg-dhoni-glass text-dhoni-text font-sans text-sm font-medium tracking-wide hover:bg-dhoni-gold hover:text-dhoni-dark transition-all duration-300 border border-dhoni-green/30 cursor-pointer whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Collapse Toggle Button */}
            <button
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
              className="w-10 h-10 rounded-full border border-dhoni-green/30 bg-dhoni-glass text-dhoni-gold hover:bg-dhoni-gold hover:text-dhoni-dark flex items-center justify-center transition-all duration-300"
              aria-label={isNavCollapsed ? "Expand Menu" : "Collapse Menu"}
            >
              <ChevronLeft 
                size={20} 
                className={`transition-transform duration-500 ${isNavCollapsed ? 'rotate-180' : 'rotate-0'}`} 
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-dhoni-gold"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-dhoni-dark z-[60] flex flex-col items-center justify-center transition-opacity duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          className="absolute top-6 right-6 text-dhoni-gold"
          onClick={() => setMobileOpen(false)}
        >
          <X size={40} />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-3xl font-cinzel text-dhoni-text hover:text-dhoni-gold transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;