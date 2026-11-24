import React, { useState } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { OFFERS_CATALOG, SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const OfferCard = ({ offer }) => {
  const [imgError, setImgError] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to know the pricing and available slots for "${offer.title}" (${offer.duration}).`
  );

  return (
    <article className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#B88E2F] hover:shadow-md">
      <div>
        <div className="bg-[#F2EDE4] aspect-[4/3] overflow-hidden">
          {!imgError ? (
            <img
              src={offer.image}
              alt={`${offer.title} at ${SITE_CONFIG.BUSINESS_NAME}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#1B2620]">
              <Sparkles className="w-7 h-7 text-[#9A741F] mb-2" aria-hidden="true" />
              <span className="font-display text-xl font-semibold">{offer.title}</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B756E] font-medium mb-2">
            <span>{offer.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{offer.duration}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9A741F] font-semibold">{offer.priceLabel || 'Price on Call'}</span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-[#1B2620] mb-3">
            {offer.title}
          </h3>

          <p className="text-sm text-[#4A554E] leading-relaxed mb-4">
            {offer.description}
          </p>

          <ul className="space-y-1.5 pt-3 border-t border-[#F2EDE4] text-xs text-[#4A554E]">
            {offer.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[#9A741F]" aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
        <a
          href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-[#1B2620] text-[#FAF8F4] hover:bg-[#2A3B32] transition-colors whitespace-nowrap"
          aria-label={`Call for ${offer.title} price and booking`}
        >
          <Phone size={15} className="text-[#D4AF37]" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-[#1E6B4B] text-white hover:bg-[#17553B] transition-colors whitespace-nowrap"
          aria-label={`Inquire about ${offer.title} on WhatsApp`}
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </article>
  );
};

const Offers = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#E5DFD3] text-[#1B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
            Value Packages
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1B2620] leading-tight">
            Curated Spa Packages &amp; Memberships
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] mt-3 leading-relaxed">
            Couple retreats, weekday sessions, and multi-visit wellness passes at our Navi Peth,
            Jalgaon center. Call or message us on WhatsApp for package pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS_CATALOG.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
