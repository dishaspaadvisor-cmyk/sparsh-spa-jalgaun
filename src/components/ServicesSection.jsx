import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SERVICES_CATALOG, SITE_CONFIG, ROUTES } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';
import ServiceCard from './ui/ServiceCard';

const CATEGORIES = [
  { id: 'all', label: 'All Therapies' },
  { id: 'massage', label: 'Body Massages' },
  { id: 'ayurveda', label: 'Ayurvedic Rituals' },
  { id: 'hydrotherapy', label: 'Hydrotherapy' },
  { id: 'facial', label: 'Body Care' },
];

const ServicesSection = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = SERVICES_CATALOG.filter((service) =>
    activeFilter === 'all' ? true : service.category === activeFilter
  );

  const visibleServices = limit ? filtered.slice(0, limit) : filtered;
  const whatsappConsultHref = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, could you share session pricing and today's open appointment slots?`
  );

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#FAF8F4] text-[#1B2620]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
              Treatment Menu
            </p>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1B2620] leading-tight"
            >
              Signature Massage &amp; Body Therapies
            </h2>
            <p className="text-sm sm:text-base text-[#4A554E] mt-3 leading-relaxed">
              Every session includes personalized pressure adjustments, fresh linens, and private
              steam &amp; shower access. Call or message us on WhatsApp for pricing and slot availability.
            </p>
          </div>

          {/* Segmented Category Filter */}
          <div
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2EDE4] rounded-xl border border-[#E5DFD3]"
            role="group"
            aria-label="Filter treatments by category"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1B2620] text-[#FAF8F4] shadow-sm'
                      : 'text-[#4A554E] hover:text-[#1B2620] hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Show All Link on HomePage */}
        {limit && filtered.length > limit && (
          <div className="mt-10 text-center">
            <Link
              to={ROUTES.SERVICES}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
            >
              <span>View Full Treatment Menu ({SERVICES_CATALOG.length})</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* Consultation Banner */}
        <div className="mt-14 rounded-2xl bg-[#F2EDE4] border border-[#E5DFD3] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1B2620] mb-2">
              Need Pricing or Help Choosing a Therapy?
            </h3>
            <p className="text-sm text-[#4A554E] leading-relaxed">
              Call or message our Jalgaon reception desk directly. We will share session rates and
              help you choose a treatment tailored to your tension and schedule.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors whitespace-nowrap tabular-nums"
            >
              <Phone size={15} className="text-[#D4AF37]" aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappConsultHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1E6B4B] text-white text-sm font-semibold hover:bg-[#17553B] transition-colors whitespace-nowrap"
            >
              <FaWhatsapp size={17} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
