import React from 'react';
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ROUTES, SITE_CONFIG } from '../config/siteConfig';

const OffersPage = () => {
  usePageMeta({
    title: 'Wellness Packages & Offers',
    description: `Explore couple spa retreats, weekday sessions, and 5-session membership passes at ${SITE_CONFIG.BUSINESS_NAME} in Jalgaon. Call or WhatsApp for pricing.`,
    path: ROUTES.OFFERS,
  });

  return (
    <>
      <section className="bg-[#1B2620] text-[#FAF8F4] py-14 md:py-16 border-b border-[#2A3B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E3C68E] mb-2">
            Packages &amp; Memberships
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Wellness Packages &amp; Value Offers
          </h1>
          <p className="text-sm sm:text-base text-[#D6D0C4] mt-3 max-w-2xl">
            Seasonal and membership packages with clearly listed session durations and inclusions.
            Call or message us on WhatsApp for pricing.
          </p>
        </div>
      </section>
      <Offers />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default OffersPage;