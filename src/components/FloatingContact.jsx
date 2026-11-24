import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const FloatingContact = () => {
  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to inquire about booking a spa session.`
  );

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#1E6B4B] hover:bg-[#17553B] text-white shadow-lg flex items-center justify-center transition-transform duration-150 hover:scale-105"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
      </a>

      <a
        href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
        aria-label={`Call ${SITE_CONFIG.PHONE_DISPLAY}`}
        className="w-12 h-12 rounded-full bg-[#1B2620] hover:bg-[#2A3B32] text-[#D4AF37] border border-[#D4AF37]/40 shadow-lg flex items-center justify-center transition-transform duration-150 hover:scale-105"
      >
        <Phone size={19} aria-hidden="true" />
      </a>
    </aside>
  );
};

export default FloatingContact;
