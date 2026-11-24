import React, { useState } from "react";
import { Phone, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../config/constants";

const services = [
  {
    id: 1,
    image: "/ServicesImg/3.png",
    title: "Thai Massage",
    category: "massage",
    duration: "90 mins",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
    tagline: "Ancient Thai Healing",
    description: "Authentic Thai therapy combining gentle acupressure and assisted stretching to boost flexibility, unblock energy lines, and melt away deep bodily stress.",
    features: ["Acupressure & Stretch", "Energy Alignment", "Private AC Suite", "Hot Shower"],
  },
  {
    id: 2,
    image: "/ServicesImg/4.png",
    title: "Swedish Massage",
    category: "massage",
    duration: "60 mins",
    badge: "Best Seller",
    badgeColor: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
    tagline: "Deep Muscular Relaxation",
    description: "Classic European massage featuring smooth gliding strokes, rhythmic kneading, and gentle friction to improve blood flow, soothe muscles, and calm the mind.",
    features: ["Gentle Flowing Strokes", "Improves Circulation", "Certified Therapist", "Warm Herbal Towels"],
  },
  {
    id: 4,
    image: "/ServicesImg/5.png",
    title: "Aroma Oil Massage",
    category: "massage",
    duration: "75 mins",
    badge: "Stress Relief",
    badgeColor: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
    tagline: "Sensory Aromatherapy",
    description: "A calming sensory indulgence infused with cold-pressed natural essential oils that deeply nourish the skin, alleviate anxiety, and induce peaceful sleep.",
    features: ["Pure Essential Oils", "Relieves Tension", "Sensory Music Ambience", "Deep Skin Hydration"],
  },
  {
    id: 5,
    image: "/ServicesImg/2.png",
    title: "Royal Jacuzzi",
    category: "luxury",
    duration: "60 mins",
    badge: "Luxury Suite",
    badgeColor: "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-stone-950 font-black",
    tagline: "Hydrotherapy Wellness",
    description: "Private temperature-controlled Jacuzzi bath with therapeutic water jets designed to relieve joint pressure, improve blood circulation, and deliver supreme relaxation.",
    features: [],
  },
  {
    id: 6,
    image: "/ServicesImg/6.png",
    title: "Deep Tissue Massage",
    category: "massage",
    duration: "60-90 mins",
    badge: "Pain Relief",
    badgeColor: "bg-gradient-to-r from-amber-700 to-orange-700 text-white",
    tagline: "Targeted Pressure Therapy",
    description: "Targeted firm pressure penetrating deep muscle layers to break stubborn knots, relieve chronic lower back pain, neck stiffness, and athletic fatigue.",
    features: ["Targeted Deep Pressure", "Knot & Ache Release", "Posture Correction", "Hot Herbal Compress"],
  },
  {
    id: 8,
    image: "/ServicesImg/4.png",
    title: "Full Body Massage",
    category: "massage",
    duration: "60 mins",
    badge: "All-Round Relax",
    badgeColor: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    tagline: "Head-to-Toe Revival",
    description: "Comprehensive head-to-toe relaxation therapy customized to your preferred pressure for complete peace of mind, balanced vitality, and total body revival.",
    features: [],
  },
  {
    id: 9,
    image: "/ServicesImg/6.png",
    title: "Female to Male Therapy",
    category: "massage",
    duration: "60-90 mins",
    badge: "Certified Staff",
    badgeColor: "bg-gradient-to-r from-indigo-600 to-purple-700 text-white",
    tagline: "Professional & Discreet",
    description: "Discreet and professional wellness therapy conducted by trained female therapists in private, sanitized, and fully air-conditioned luxury suites.",
    features: ["100% Private Suite", "Trained Female Staff", "Discreet & Sanitized", "Personalized Care"],
  },
  {
    id: 10,
    image: "/ServicesImg/5.png",
    title: "Hot Oil Massage",
    category: "massage",
    duration: "60 mins",
    badge: "Warm Therapy",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700 text-white",
    tagline: "Ayurvedic Warmth",
    description: "Lukewarm medicated Ayurvedic oils massaged deeply into muscles to improve joint flexibility, eliminate bodily stiffness, and restore natural energy balance.",
    features: ["Warm Ayurvedic Oils", "Joint & Spine Relief", "Detoxifying Therapy", "Steam & Hot Shower"],
  },
];

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices = services.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  const handleWhatsApp = (serviceTitle) => {
    const message = `Hi ${CONFIG.BUSINESS_NAME}, I would like to book an appointment for ${serviceTitle}. Please confirm today's available time slots!`;
    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleGeneralWhatsApp = () => {
    const message = `Hi ${CONFIG.BUSINESS_NAME}, I want to consult and book a spa session. Please share today's available appointment slots!`;
    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5] relative overflow-hidden border-t border-stone-200/60"
      aria-labelledby="services-heading"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-100/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-50/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[#b58d20] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles size={13} className="text-[#b58d20]" />
            <span>Luxury Wellness Menu</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-4 tracking-tight"
          >
            Our Signature <span className="bg-gradient-to-r from-[#b58d20] via-[#D4AF37] to-[#b58d20] bg-clip-text text-transparent">Therapies</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-normal">
            Immerse yourself in authentic holistic healing, royal jacuzzi hydrotherapy, and rejuvenating spa treatments conducted by certified wellness experts in Jalgaon.
          </p>

          {/* Luxury Filter Pills */}
          <div className="inline-flex items-center p-1.5 bg-stone-100/90 rounded-full border border-stone-200/80 shadow-inner mt-7 gap-1 flex-wrap justify-center">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-[#D4AF37] text-stone-950 shadow-md shadow-amber-500/20"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/60"
              }`}
            >
              All Therapies ({services.length})
            </button>
            <button
              onClick={() => setActiveFilter("massage")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === "massage"
                  ? "bg-[#D4AF37] text-stone-950 shadow-md shadow-amber-500/20"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/60"
              }`}
            >
              Body Massages
            </button>
            <button
              onClick={() => setActiveFilter("luxury")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === "luxury"
                  ? "bg-[#D4AF37] text-stone-950 shadow-md shadow-amber-500/20"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/60"
              }`}
            >
              Royal Jacuzzi
            </button>
          </div>
        </div>

        {/* Premium Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)] hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* 1. Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/ServicesImg/1.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* 2. Service Name & 3. CTA */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#b58d20] transition-colors text-center leading-snug">
                  {service.title}
                </h3>

                {/* CTA Buttons: Call Now & WhatsApp */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-stone-100">
                  {/* Call Button */}
                  <a
                    href={`tel:${CONFIG.PHONE_NUMBER}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-[#D4AF37] via-[#dfbe52] to-[#c59b27] hover:from-[#c59b27] hover:to-[#b58d20] shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform active:scale-95"
                    aria-label={`Call to book ${service.title}`}
                  >
                    <Phone size={15} className="fill-current text-stone-950" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-[0_4px_14px_rgba(5,150,105,0.3)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] transition-all duration-300 transform active:scale-95"
                    aria-label={`Book ${service.title} on WhatsApp`}
                  >
                    <FaWhatsapp size={17} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Consultation & Direct Contact */}
        <div className="relative rounded-3xl p-7 sm:p-9 md:p-11 text-white shadow-2xl border border-stone-700 overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                <CheckCircle2 size={16} />
                <span>Personalized Spa Consultation</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
                Not Sure Which Therapy Is Best For You?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
                Connect directly with our wellness consultant. We will help you choose the ideal massage suited to your specific muscle stiffness, stress level, and personal preferences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${CONFIG.PHONE_NUMBER}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#bc962b] text-stone-950 px-7 py-3.5 rounded-full font-black text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95"
              >
                <Phone size={16} className="fill-current text-stone-950" />
                <span>Call: {CONFIG.PHONE_DISPLAY}</span>
              </a>
              <button
                onClick={handleGeneralWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-black text-sm shadow-lg shadow-emerald-600/25 transition-all transform hover:scale-105 active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
