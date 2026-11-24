import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';
import { CONFIG, ROUTES } from '../config/constants';
import { useWhatsApp } from '../hooks/useWhatsApp';
import Button from './ui/Button';

/**
 * Header component with responsive navigation
 * Follows best practices for accessibility and maintainability
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { bookAppointment } = useWhatsApp();

  // Navigation items
  const navigationItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.ABOUT, label: 'About Us' },
    { path: ROUTES.SERVICES, label: 'Services' },
    // { path: ROUTES.OFFERS, label: 'Offers' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  const handleBookNow = () => {
    bookAppointment('general appointment');
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed w-full top-0 z-50 shadow-sm transition-all duration-300 bg-white border-b border-stone-100"
      role="banner"
    >
      {/* Top info bar */}
      <div className="w-full bg-[#faf7f2] text-stone-700 text-[10px] sm:text-xs md:text-sm border-b border-stone-200/80 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-row items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto">
          <div className="flex flex-row items-center gap-1.5 sm:gap-2 md:gap-6 flex-shrink-0">
            <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
              <MapPin size={12} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="font-medium">
                {CONFIG.LOCATION}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
              <Clock size={12} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="font-medium">
                Open Daily: {CONFIG.BUSINESS_HOURS.DISPLAY}
              </span>
            </div>
          </div>

          <a
            href={`tel:${CONFIG.PHONE_NUMBER}`}
            className="flex items-center gap-1 sm:gap-2 font-semibold text-[#b58d20] hover:text-[#886712] transition-colors whitespace-nowrap flex-shrink-0"
          >
            <Phone size={12} className="sm:w-4 sm:h-4 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm">{CONFIG.PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-white rounded-lg"
            aria-label={`${CONFIG.BUSINESS_NAME} - Go to homepage`}
          >
            <img
              src="/Logo/1.png"
              alt="Logo"
              className="h-15 sm:h-15 md:h-[70px] w-auto object-contain"
            />
          </Link>


          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-bold py-2 group transition-all duration-300 ${isActiveRoute(item.path)
                  ? 'text-[#D4AF37]'
                  : 'text-stone-800 hover:text-[#D4AF37]'
                  }`}
                aria-current={isActiveRoute(item.path) ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isActiveRoute(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              onClick={handleBookNow}
              aria-label="Book an appointment via WhatsApp"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-[#D4AF37] transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-white shadow-sm"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Menu
                size={20}
                className={`sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
              />
              <X
                size={20}
                className={`sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-white shadow-xl border-t border-stone-200">
          <nav
            className="flex flex-col p-3 sm:p-4 space-y-1.5 sm:space-y-2"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold transition-all duration-300 py-1.5 sm:py-2 px-2 rounded-lg text-sm sm:text-base ${isActiveRoute(item.path)
                  ? 'text-[#D4AF37] bg-amber-50'
                  : 'text-stone-800 hover:text-[#D4AF37] hover:bg-stone-50'
                  }`}
                onClick={closeMobileMenu}
                aria-current={isActiveRoute(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  handleBookNow();
                  closeMobileMenu();
                }}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
