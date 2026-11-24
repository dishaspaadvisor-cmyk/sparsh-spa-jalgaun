import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONFIG } from '../config/constants';

/**
 * Floating WhatsApp & Phone quick-action buttons
 * Cleanly positioned on the right side with smooth inward expanding hover labels.
 */
const FloatingContact = () => {
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi ${CONFIG.BUSINESS_NAME}, I would like to book a spa appointment. Please share today's available time slots!`
  )}`;

  return (
    <aside
      aria-label="Quick contact buttons"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9990] flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center flex-row-reverse bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />

        <FaWhatsapp size={24} className="relative z-10 flex-shrink-0" />

        {/* Hover label for desktop */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:mr-2.5">
          WhatsApp Us
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={`tel:${CONFIG.PHONE_NUMBER}`}
        aria-label={`Call us at ${CONFIG.PHONE_DISPLAY}`}
        className="group relative flex items-center flex-row-reverse bg-gradient-to-r from-stone-900 to-stone-950 hover:from-black hover:to-stone-900 text-[#D4AF37] border border-[#D4AF37]/50 p-3.5 sm:p-4 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 animate-ping opacity-75 pointer-events-none"
          style={{ animationDuration: '3.5s' }}
        />

        <Phone size={22} className="relative z-10 fill-current flex-shrink-0 text-[#D4AF37]" />

        {/* Hover label for desktop */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs sm:text-sm font-bold text-white transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:mr-2.5">
          Call: {CONFIG.PHONE_DISPLAY}
        </span>
      </a>
    </aside>
  );
};

export default FloatingContact;
