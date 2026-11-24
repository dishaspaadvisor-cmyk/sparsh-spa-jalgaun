import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';

const ExpertHandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#1B2620] text-[#FAF8F4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E3C68E] mb-3">
          Personalized Consultation
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#FAF8F4] leading-tight mb-4">
          Guided by Technique, Empathy, and Respect
        </h2>
        <p className="text-base text-[#D6D0C4] leading-relaxed max-w-2xl mx-auto mb-8">
          Every guest arrives with different stress levels and muscle tension. Before your session
          begins, our reception and therapist team confirm your preferred pressure, oil blend, and
          focus areas so your treatment feels restorative from start to finish.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#D4AF37] text-[#1B2620] font-semibold text-sm hover:bg-[#e0be4c] transition-colors whitespace-nowrap"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/25 text-[#FAF8F4] font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap tabular-nums"
          >
            <Phone size={15} className="text-[#D4AF37]" aria-hidden="true" />
            <span>Call {SITE_CONFIG.PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertHandsSection;
