import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const Footer = () => {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.DEFAULT_WHATSAPP_MESSAGE);

  return (
    <footer className="bg-[#1B2620] text-[#FAF8F4] border-t border-[#2A3B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand & Description */}
        <div className="md:col-span-5 space-y-4">
          <Link to={ROUTES.HOME} className="inline-flex items-center gap-3">
            <img
              src="/Logo/1.png"
              alt={SITE_CONFIG.BUSINESS_NAME}
              className="h-11 w-auto object-contain bg-[#FAF8F4] rounded-md p-1"
              referrerPolicy="no-referrer"
            />
            <span className="font-display text-2xl font-semibold text-[#FAF8F4]">
              {SITE_CONFIG.BUSINESS_NAME}
            </span>
          </Link>
          <p className="text-sm text-[#D6D0C4] leading-relaxed max-w-md">
            {SITE_CONFIG.BUSINESS_DESCRIPTION}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2A3B32] hover:bg-[#35493E] text-xs font-semibold text-[#FAF8F4] transition-colors"
            >
              <Phone size={14} className="text-[#D4AF37]" aria-hidden="true" />
              <span>{SITE_CONFIG.PHONE_DISPLAY}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E6B4B] hover:bg-[#247A56] text-xs font-semibold text-white transition-colors"
            >
              <FaWhatsapp size={15} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm text-[#D6D0C4]">
            <li>
              <Link to={ROUTES.HOME} className="hover:text-[#FAF8F4] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} className="hover:text-[#FAF8F4] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES} className="hover:text-[#FAF8F4] transition-colors">
                Services &amp; Therapies
              </Link>
            </li>
            <li>
              <Link to={ROUTES.OFFERS} className="hover:text-[#FAF8F4] transition-colors">
                Wellness Packages
              </Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT} className="hover:text-[#FAF8F4] transition-colors">
                Contact &amp; Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* Consistent NAP & Hours */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
            Visit Our Sanctuary
          </h3>
          <ul className="space-y-3 text-sm text-[#D6D0C4]">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={SITE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F4] leading-relaxed transition-colors"
              >
                {SITE_CONFIG.ADDRESS}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
              <span>Open Daily: {SITE_CONFIG.BUSINESS_HOURS.DISPLAY}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
              <a
                href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                className="hover:text-[#FAF8F4] transition-colors tabular-nums"
              >
                {SITE_CONFIG.PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${SITE_CONFIG.EMAIL}`}
                className="hover:text-[#FAF8F4] transition-colors"
              >
                {SITE_CONFIG.EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#2A3B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B3AEA2]">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.BUSINESS_NAME}, Jalgaon. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-6">
            <Link to={ROUTES.PRIVACY} className="hover:text-[#FAF8F4] transition-colors">
              Privacy Policy
            </Link>
            <Link to={ROUTES.TERMS} className="hover:text-[#FAF8F4] transition-colors">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
