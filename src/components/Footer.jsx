import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONFIG, ROUTES } from "../config/constants";

const Footer = () => {
  return (
    <footer className="relative bg-[#f8f6f2] text-stone-800 border-t border-stone-200">
      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Summary */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="/Logo/1.png"
              alt={`${CONFIG.BUSINESS_NAME} Logo`}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            {CONFIG.BUSINESS_DESCRIPTION} Rejuvenate your mind, body, and soul with our certified therapists and luxury spa ambience in Jalgaon.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-stone-900 mb-4">Contact Us</h3>
          <ul className="space-y-3.5 text-stone-700 text-sm">
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#b58d20] flex-shrink-0" />
              <a
                href={`tel:${CONFIG.PHONE_NUMBER}`}
                className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors"
              >
                {CONFIG.PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#b58d20] flex-shrink-0" />
              <a
                href={`mailto:${CONFIG.EMAIL}`}
                className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors"
              >
                {CONFIG.EMAIL}
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#b58d20] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {CONFIG.ADDRESS}
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-stone-900 mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-stone-700 text-sm">
            <li>
              <Link to={ROUTES.HOME} className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES} className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT} className="relative inline-block text-gray-700 hover:text-[#b58d20] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-stone-200 px-6 py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm font-medium">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {CONFIG.BUSINESS_NAME}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[#b58d20] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#b58d20] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
