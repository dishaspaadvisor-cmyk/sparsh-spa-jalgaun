import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.ABOUT, label: 'About' },
    { path: ROUTES.SERVICES, label: 'Services' },
    { path: ROUTES.OFFERS, label: 'Offers' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E5DFD3]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 rounded-md"
          aria-label={`${SITE_CONFIG.BUSINESS_NAME} — Home`}
        >
          <img
            src="/Logo/1.png"
            alt={SITE_CONFIG.BUSINESS_NAME}
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-2xl font-semibold tracking-tight text-[#1B2620]">
            {SITE_CONFIG.BUSINESS_NAME}
          </span>
        </Link>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          className="hidden md:flex items-center gap-7"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => {
            const active = isActiveRoute(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active ? 'text-[#9A741F]' : 'text-[#4A554E] hover:text-[#1B2620]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#9A741F] transition-all duration-200 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
            className="px-5 py-2.5 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors whitespace-nowrap shrink-0"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-[#1B2620] hover:bg-[#F2EDE4] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FAF8F4] border-t border-[#E5DFD3] px-4 py-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {navigationItems.map((item) => {
              const active = isActiveRoute(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#F2EDE4] text-[#9A741F]'
                      : 'text-[#1B2620] hover:bg-[#F2EDE4]/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <a
                href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
              >
                Call Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
