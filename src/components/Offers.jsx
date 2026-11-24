import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../config/constants";

const offersData = [
  {
    id: 1,
    image: "/OffersImg/1.png",
    title: "Couple Massage Special Offer",
  },
  {
    id: 2,
    image: "/OffersImg/2.png",
    title: "All Massage Special Offer",
  },
  {
    id: 3,
    image: "/OffersImg/3.png",
    title: "Membership Plans Special Offer",
  },
];

const Offers = () => {
  const buildWhatsAppLink = (offerTitle) => {
    const message = `Hi ${CONFIG.BUSINESS_NAME}, I am interested in the ${offerTitle}. Please share more details and today's available time slots!`;
    return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-stone-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#b58d20] mb-2">
            Limited Time Promotions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Exclusive Offers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Explore our special spa packages and membership deals in Jalgaon.
          </p>
        </div>

        {/* Complete Offer Cards Grid without any overlays covering the flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="w-full max-w-[320px] sm:max-w-[340px] bg-white rounded-2xl border border-stone-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Complete Offer Flyer Image - 100% visible, fully readable, no overlay */}
              <div className="w-full bg-stone-50">
                <img
                  src={offer.image}
                  alt={`${CONFIG.BUSINESS_NAME} - ${offer.title}`}
                  className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Action Buttons Placed Cleanly BELOW the Flyer */}
              <div className="p-4 bg-white border-t border-stone-100 flex items-center gap-2.5">
                <a
                  href={`tel:${CONFIG.PHONE_NUMBER}`}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] hover:bg-[#bc962b] px-3.5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 shadow-md transition-all transform hover:scale-[1.02]"
                  aria-label={`Call for ${offer.title}`}
                >
                  <Phone size={15} />
                  <span>Call Now</span>
                </a>
                <a
                  href={buildWhatsAppLink(offer.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all transform hover:scale-[1.02]"
                  aria-label={`WhatsApp for ${offer.title}`}
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
