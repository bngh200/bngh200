import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import Button from '../Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Header background logic: 
  // If scrolled or not home, use solid background. 
  // If home and top, use transparent.
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHome ? 'bg-primary/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClass = `text-sm font-medium transition-colors hover:text-secondary ${
    isScrolled || !isHome ? 'text-white' : 'text-white'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-white tracking-wider flex items-center gap-2">
          <span className="text-secondary text-3xl">✦</span>
          STEAMPULSE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="primary" size="sm">예약하기</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-gray-700 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-white text-lg py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
           <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full mt-4">예약하기</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;