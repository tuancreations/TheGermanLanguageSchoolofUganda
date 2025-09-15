import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Register', href: '/register' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Contact', href: '/contact' },
    { name: 'Student Portal', href: '/student-portal', disabled: true },
    { name: 'E-Learning', href: '/e-learning', disabled: true },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+256 705 095657 | +256 780 722333</span>
              </div>
              <div className="hidden md:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Metropole House, Entebbe Rd Level 1, Room F14</span>
              </div>
            </div>
            <div className="text-yellow-300 font-semibold">
              Registration In Progress: UGX 25,000
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                {/* Logo */}
                <img 
                  src="/WhatsApp Image 2025-09-14 at 05.08.04_51fc0363.jpg" 
                  alt="GLSU Logo" 
                  className="h-16 w-auto mr-3"
                />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.disabled
                    ? 'text-gray-400 cursor-not-allowed'
                    : isActive(item.href)
                    ? 'bg-red-100 text-red-700 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                }`}
                onClick={item.disabled ? (e) => e.preventDefault() : undefined}
              >
                {item.name}
                {item.disabled && (
                  <span className="ml-1 text-xs">(Coming Soon)</span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.disabled
                      ? 'text-gray-400 cursor-not-allowed'
                      : isActive(item.href)
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : () => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.disabled && (
                    <span className="ml-1 text-xs">(Coming Soon)</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;