import React, { useState, useEffect } from 'react';
import { X, Clock, Flame, Users, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONFIG } from '../config/constants';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 47); // 9 mins 47 secs countdown
  const [spotsLeft] = useState(() => Math.floor(Math.random() * 3) + 2); // 2-4 spots remaining
  const [peopleBooked] = useState(() => Math.floor(Math.random() * 9) + 21); // 21-29 people

  useEffect(() => {
    // Show popup strictly after 30 seconds (30,000 ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Live countdown timer
    if (isVisible && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaimOfferWhatsApp = () => {
    const message = `Hi ${CONFIG.BUSINESS_NAME}, I would like to book the Special Massage Service Offer at ₹1,499 (Original Price ₹3,000). Please share today's available appointment slots!`;
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setIsVisible(false);
  };

  return (
    <>
      {/* Main Popup Modal - Appears strictly after 30 seconds */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Special Spa Offer Popup"
        >
          {/* Main Popup Modal Card */}
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-sm sm:max-w-xl md:max-w-3xl w-full overflow-hidden border border-amber-200/90 max-h-[92vh] flex flex-col md:flex-row transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 text-stone-400 hover:text-stone-900 bg-white/90 hover:bg-stone-100 rounded-full shadow-md transition-all duration-200"
              aria-label="Close offer popup"
            >
              <X size={20} />
            </button>

            {/* LEFT COLUMN: Luxury Model Showcase Image */}
            <div className="relative w-full md:w-5/12 h-52 sm:h-64 md:h-auto flex-shrink-0 bg-gradient-to-t from-stone-900 to-stone-800 overflow-hidden">
              <img
                src="/OffersImg/offer-model.jpg"
                alt="Luxury Spa Wellness Model"
                className="w-full h-full object-cover object-top filter brightness-[1.02]"
                onError={(e) => {
                  e.target.src = '/AboutImg/AboutImg.png';
                }}
              />

              {/* Luxury Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/40" />

              {/* Top Floating Badge on Model */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 bg-[#D4AF37] text-stone-950 px-3 py-1.5 rounded-full font-black text-xs shadow-lg uppercase tracking-wider">
                <Flame size={14} className="fill-current text-red-700" />
                <span>50% Flat OFF</span>
              </div>

              {/* Bottom Floating Rating on Model Image */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 z-10 text-white backdrop-blur-md bg-black/40 px-3 py-2 rounded-xl border border-white/20">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <span>★ 4.9 Rated</span>
                  <span className="text-stone-300 font-normal">• 2,500+ Happy Guests</span>
                </div>
                <p className="text-[11px] text-stone-200 truncate mt-0.5">
                  Certified Therapists • Luxury Ambience
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: High Converting Deal Details & CTAs */}
            <div className="w-full md:w-7/12 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Top Tagline */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#b58d20] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Sparkles size={12} className="text-[#b58d20]" />
                    Today's Flash Deal
                  </span>
                  <span className="text-[11px] text-red-600 font-bold bg-red-50 px-2.5 py-1 rounded-full border border-red-200 animate-pulse">
                    ⚡ Only {spotsLeft} Slots Left!
                  </span>
                </div>

                {/* Main Title Hook */}
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                  Full Body Massage Service
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Complete Relaxation & Muscle Recovery Therapy in Jalgaon
                </p>

                {/* Big High-Converting Price Block */}
                <div className="mt-3.5 p-3.5 bg-gradient-to-r from-amber-50/90 to-stone-50 rounded-2xl border-2 border-amber-200/80 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Special Offer Price
                    </div>
                    <div className="flex items-baseline gap-2.5 mt-0.5">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight">
                        ₹1,499
                      </span>
                      <span className="text-base sm:text-lg text-gray-400 line-through font-semibold">
                        ₹3,000
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                      SAVE ₹1,501 (50% OFF)
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1 font-medium">
                      Inclusive of all taxes
                    </div>
                  </div>
                </div>

                {/* Countdown Urgency Timer */}
                <div className="mt-3 flex items-center justify-between bg-stone-100 rounded-xl px-3.5 py-2 text-xs text-stone-700 border border-stone-200">
                  <div className="flex items-center gap-1.5 font-semibold text-red-600">
                    <Clock size={15} className="animate-spin text-red-500" style={{ animationDuration: '4s' }} />
                    <span>Offer Expires In:</span>
                    <span className="font-mono text-sm font-black text-red-600 ml-0.5 bg-white px-2 py-0.5 rounded shadow-inner border border-red-200">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500">
                    <Users size={12} className="text-emerald-600" />
                    <span>{peopleBooked} booked today</span>
                  </div>
                </div>

                {/* What's Included / Value Stack */}
                <div className="mt-3.5 space-y-1.5 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                    <span>Choice of <strong>Swedish, Deep Tissue or Aroma Oil</strong> Massage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                    <span>Trained <strong>Certified Therapists</strong> (Female / Male Available)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                    <span>Private Sanitized AC Suites + Hot Shower Included</span>
                  </div>
                </div>
              </div>

              {/* High-Converting Action Buttons */}
              <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-2.5">
                <button
                  onClick={handleClaimOfferWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-5 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <FaWhatsapp size={22} className="flex-shrink-0" />
                  <span>Claim Offer At ₹1,499 on WhatsApp</span>
                </button>

                <div className="flex items-center justify-between gap-3 text-xs">
                  <a
                    href={`tel:${CONFIG.PHONE_NUMBER}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold border border-stone-300 transition-colors"
                  >
                    <Phone size={14} className="text-[#b58d20]" />
                    <span>Call to Book: {CONFIG.PHONE_DISPLAY}</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 underline font-medium text-xs px-2"
                  >
                    No, thanks
                  </button>
                </div>

                <p className="text-[10px] text-center text-gray-400 font-medium">
                  🔒 100% Privacy & Hygiene Guaranteed • Located at Navi Peth, Jalgaon
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferPopup;
