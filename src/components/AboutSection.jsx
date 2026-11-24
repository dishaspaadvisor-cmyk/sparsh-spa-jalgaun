import React from 'react';
import { ChevronRight, Sparkles, Check, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CONFIG, ROUTES } from '../config/constants';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate(ROUTES.SERVICES);
  };

  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 bg-white text-gray-900 border-b border-stone-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left Side - Image Showcase (Equal Height) */}
          <div className="relative order-1 flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.07)] border border-stone-200/90 group bg-stone-100">
              <img
                src="/AboutImg/AboutImg.png"
                alt={`${CONFIG.BUSINESS_NAME} Spa Team`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/ServicesImg/welcome_img.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />

              {/* Bottom Image Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-stone-200/80 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] flex-shrink-0 animate-pulse" />
                  <span className="text-xs font-bold text-stone-900">Certified Spa Team</span>
                </div>
                <span className="text-[11px] font-semibold text-[#b58d20] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                  Navi Peth, Jalgaon
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Compact & Balanced Content (Equal Height) */}
          <div className="order-2 flex flex-col justify-between h-full space-y-5 lg:py-2">
            <div>
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-[#b58d20] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} className="text-[#b58d20]" />
                <span>About Sparsh Spa</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
                Best Luxury Spa & Massage Centre in Jalgaon
              </h2>

              {/* Natural Human-Written Description */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mt-3">
                Welcome to <strong className="text-stone-900">Sparsh Spa</strong>, your trusted destination for authentic relaxation and body massage in Jalgaon. Whether you need relief from daily fatigue or want to unwind after a busy week, our trained therapists offer Swedish, Thai, Deep Tissue, and Royal Jacuzzi sessions in private, clean, and fully air-conditioned suites.
              </p>
            </div>

            {/* 4 Feature Chips (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Check size={13} className="stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800 truncate">Certified Therapists</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Check size={13} className="stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800 truncate">Hygienic AC Suites</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Check size={13} className="stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800 truncate">Luxury Ambience</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Check size={13} className="stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800 truncate">Couple Rooms Available</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleViewServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-[#D4AF37] via-[#dfbe52] to-[#c59b27] hover:from-[#c59b27] hover:to-[#b58d20] shadow-[0_4px_14px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-300 transform active:scale-95"
              >
                <span>View Services</span>
                <ChevronRight size={16} />
              </button>

              <a
                href={`tel:${CONFIG.PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
              >
                <Phone size={14} className="text-[#b58d20]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
