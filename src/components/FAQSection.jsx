import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { FAQ_DATA, SITE_CONFIG, ROUTES } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const FAQSection = () => {
  const whatsappHref = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I have a question about booking a spa session.`
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-white text-[#1B2620] border-t border-[#E5DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
            Guest Information
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1B2620] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E]">
            Helpful details on bookings, suite hygiene, timings, and treatment preparation.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-[#E5DFD3] bg-[#FAF8F4] open:bg-white transition-colors"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#1B2620] group-open:text-[#9A741F] transition-colors">
                  {item.q}
                </h3>
                <span className="w-7 h-7 rounded-full border border-[#D9D0C1] bg-white flex items-center justify-center flex-shrink-0 text-[#1B2620] transition-transform duration-200 group-open:rotate-45">
                  <Plus size={15} aria-hidden="true" />
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#4A554E] leading-relaxed border-t border-[#F2EDE4]">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
          >
            <span>Book an Appointment</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#D9D0C1] bg-[#FAF8F4] text-[#1B2620] text-sm font-semibold hover:bg-[#F2EDE4] transition-colors"
          >
            <span>Message Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
