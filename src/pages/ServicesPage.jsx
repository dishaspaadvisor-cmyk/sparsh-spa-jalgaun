import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ExpertHandsSection from '../components/ExpertHandsSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ROUTES, SITE_CONFIG } from '../config/siteConfig';

const ServicesPage = () => {
  usePageMeta({
    title: 'Services & Therapies',
    description: `Explore Swedish, Deep Tissue, Traditional Thai, Ayurvedic Abhyanga, Aromatherapy, Body Scrubs, and Hydrotherapy at ${SITE_CONFIG.BUSINESS_NAME} Jalgaon.`,
    path: ROUTES.SERVICES,
  });

  return (
    <>
      <section className="bg-[#1B2620] text-[#FAF8F4] py-14 md:py-16 border-b border-[#2A3B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E3C68E] mb-2">
            Wellness Menu
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Spa Services &amp; Therapies
          </h1>
          <p className="text-sm sm:text-base text-[#D6D0C4] mt-3 max-w-2xl">
            Filter by treatment style, view session durations, and call or message us on WhatsApp
            for pricing and appointment slots.
          </p>
        </div>
      </section>
      <ServicesSection />
      <ExpertHandsSection />
      <Testimonials />
      <FAQSection />
    </>
  );
};

export default ServicesPage;