import React from "react";
import { Phone, Clock, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../../config/constants";

/**
 * Reusable ServiceCard component for displaying spa services
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {string} props.className - Additional CSS classes
 */
const ServiceCard = ({ service, className = "" }) => {
  const handleCall = () => {
    window.location.href = `tel:${CONFIG.PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = `Hi ${CONFIG.BUSINESS_NAME}, I would like to book an appointment for ${service.title}. Please confirm today's available time slots!`;
    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`relative bg-white rounded-[1.75rem] border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_22px_45px_rgba(212,175,55,0.18)] hover:border-[#D4AF37]/60 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden group ${className}`}
    >
      {/* Top Golden Shimmer Accent Line on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      <div>
        {/* Image Container with Badges */}
        <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-stone-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />

          {/* Gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

          {/* Top Floating Badge */}
          {service.badge && (
            <div
              className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-black shadow-lg uppercase tracking-wider ${
                service.badgeColor || "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              } flex items-center gap-1.5`}
            >
              <Sparkles size={11} />
              <span>{service.badge}</span>
            </div>
          )}

          {/* Floating Duration Badge */}
          {service.duration && (
            <div className="absolute top-3.5 right-3.5 bg-stone-950/85 backdrop-blur-md text-[#fcf5d8] px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 border border-amber-400/30">
              <Clock size={12} className="text-[#D4AF37]" />
              <span>{service.duration}</span>
            </div>
          )}

          {/* Bottom Image Tagline / Category */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/95 text-xs font-semibold">
            <span className="tracking-wide text-amber-200 drop-shadow-sm font-bold">
              {service.tagline || "Luxury Therapy"}
            </span>
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              Sparsh Jalgaon
            </span>
          </div>
        </div>

        {/* Service Details */}
        <div className="p-6">
          {/* Category Eyebrow */}
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#b58d20] mb-1.5 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>{service.category === "luxury" ? "Royal Suite Experience" : "Signature Body Therapy"}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-2.5 leading-tight group-hover:text-[#b58d20] transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 line-clamp-3 font-normal">
            {service.description}
          </p>

          {/* Highlights / Features */}
          {service.features && (
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-stone-100">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50/70 border border-amber-200/50 text-[11px] font-medium text-amber-950/85 transition-colors group-hover:bg-amber-100/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DUAL ACTION BUTTONS: Call Now & WhatsApp (No price displayed) */}
      <div className="p-6 pt-0">
        <div className="flex items-center gap-2.5 pt-4 border-t border-stone-100/80">
          {/* Call Button */}
          <button
            onClick={handleCall}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl font-black text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-[#D4AF37] via-[#dfbe52] to-[#c59b27] hover:from-[#c59b27] hover:to-[#b58d20] shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`Call to book ${service.title}`}
          >
            <Phone size={15} className="fill-current text-stone-950" />
            <span>Call Now</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-[0_4px_14px_rgba(5,150,105,0.35)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.45)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`Book ${service.title} on WhatsApp`}
          >
            <FaWhatsapp size={17} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
