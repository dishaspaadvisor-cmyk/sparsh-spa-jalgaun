import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const HeroSection = () => {
  const [imgError, setImgError] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to know treatment pricing and book an appointment today.`
  );

  return (
    <section className="relative bg-[#1B2620] text-[#FAF8F4]" aria-labelledby="hero-heading">
      {/* Main Hero Canvas */}
      <div className="relative min-h-[540px] lg:min-h-[620px] flex items-center overflow-hidden">
        {!imgError ? (
          <img
            src="/ServicesImg/herobanner2.png"
            alt="Tranquil luxury treatment suite at Sparsh Spa Jalgaon"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2620] via-[#233229] to-[#121A15]" />
        )}

        {/* Measured Scrim for WCAG AA Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#121A15]/92 via-[#121A15]/75 to-[#121A15]/35"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#E3C68E] mb-4">
              {SITE_CONFIG.LOCATION} · Holistic Day Spa
            </p>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.08] tracking-tight text-[#FAF8F4] mb-5"
            >
              Restorative Body Therapies in Tranquil Luxury
            </h1>

            <p className="text-base sm:text-lg text-[#E6E0D4] leading-relaxed mb-8 max-w-xl">
              Step away from daily fatigue at {SITE_CONFIG.BUSINESS_NAME}. Experience authentic
              Ayurvedic, Swedish, Deep Tissue, and Aromatherapy treatments delivered by certified
              therapists in private, sanitized suites.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D4AF37] text-[#1B2620] font-semibold text-sm sm:text-base hover:bg-[#e0be4c] transition-colors whitespace-nowrap"
              >
                <Phone size={17} aria-hidden="true" />
                <span>Call Now · {SITE_CONFIG.PHONE_DISPLAY}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#1E6B4B] text-white font-semibold text-sm sm:text-base hover:bg-[#247A56] transition-colors whitespace-nowrap"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grounded NAP & Trust Strip */}
      <div className="bg-[#FAF8F4] text-[#1B2620] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B756E]">Location</p>
              <p className="text-sm font-medium text-[#1B2620]">{SITE_CONFIG.SHORT_ADDRESS}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B756E]">Operating Hours</p>
              <p className="text-sm font-medium text-[#1B2620] tabular-nums">{SITE_CONFIG.BUSINESS_HOURS.DISPLAY}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B756E]">Hygiene Protocol</p>
              <p className="text-sm font-medium text-[#1B2620]">Fresh Linens &amp; Sanitized AC Suites</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B756E]">Pricing &amp; Booking</p>
              <a
                href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                className="text-sm font-semibold text-[#1B2620] hover:text-[#9A741F] transition-colors tabular-nums"
              >
                Price on Call · {SITE_CONFIG.PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
