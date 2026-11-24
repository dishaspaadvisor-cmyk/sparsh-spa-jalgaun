import React, { useState } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../../config/siteConfig';
import { buildWhatsAppUrl } from '../../hooks/useWhatsApp';

const ServiceCard = ({ service, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to inquire about "${service.title}" (${service.duration}) — pricing & available slots today.`
  );

  return (
    <article
      className={`bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#B88E2F] hover:shadow-md ${className}`}
    >
      <div>
        <div className="relative aspect-[4/3] w-full bg-[#F2EDE4] overflow-hidden">
          {!imgError ? (
            <img
              src={service.image}
              alt={`${service.title} at ${SITE_CONFIG.BUSINESS_NAME}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F2EDE4] to-[#E5DFD3] text-[#4A554E] p-6 text-center">
              <Sparkles className="w-7 h-7 text-[#9A741F] mb-2" aria-hidden="true" />
              <span className="font-display text-xl font-semibold text-[#1B2620]">{service.title}</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B756E] font-medium mb-2">
            <span>{service.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{service.duration}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9A741F] font-semibold">{service.priceLabel || 'Price on Call'}</span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-[#1B2620] leading-snug mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-[#4A554E] leading-relaxed mb-4">
            {service.description}
          </p>

          {service.highlights && service.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-3 border-t border-[#F2EDE4] text-xs text-[#4A554E]">
              {service.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#9A741F]" aria-hidden="true">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
        <a
          href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-[#1B2620] text-[#FAF8F4] hover:bg-[#2A3B32] transition-colors whitespace-nowrap"
          aria-label={`Call for ${service.title} price and booking`}
        >
          <Phone size={15} className="text-[#D4AF37]" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-[#1E6B4B] text-white hover:bg-[#17553B] transition-colors whitespace-nowrap"
          aria-label={`Inquire about ${service.title} on WhatsApp`}
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
