import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ROUTES, SITE_CONFIG } from '../config/siteConfig';

const ContactPage = () => {
  usePageMeta({
    title: 'Contact & Booking',
    description: `Book an appointment or get directions to ${SITE_CONFIG.BUSINESS_NAME} at ${SITE_CONFIG.SHORT_ADDRESS}. Open daily ${SITE_CONFIG.BUSINESS_HOURS.DISPLAY}.`,
    path: ROUTES.CONTACT,
  });

  return (
    <>
      <section className="bg-[#1B2620] text-[#FAF8F4] py-14 md:py-16 border-b border-[#2A3B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E3C68E] mb-2">
            Appointments &amp; Directions
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Contact {SITE_CONFIG.BUSINESS_NAME}
          </h1>
          <p className="text-sm sm:text-base text-[#D6D0C4] mt-3 max-w-2xl">
            Reach our Navi Peth, Jalgaon reception desk directly by phone, WhatsApp, or the
            appointment inquiry form below.
          </p>
        </div>
      </section>
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ContactPage;