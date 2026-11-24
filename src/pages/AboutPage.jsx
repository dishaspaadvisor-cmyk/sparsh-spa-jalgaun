import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ExpertHandsSection from '../components/ExpertHandsSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ROUTES, SITE_CONFIG } from '../config/siteConfig';

const AboutPage = () => {
  usePageMeta({
    title: 'About Us',
    description: `Learn about ${SITE_CONFIG.BUSINESS_NAME} in Navi Peth, Jalgaon — our certified wellness therapists, private sanitized suites, and holistic approach.`,
    path: ROUTES.ABOUT,
  });

  return (
    <>
      <section className="bg-[#1B2620] text-[#FAF8F4] py-14 md:py-16 border-b border-[#2A3B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E3C68E] mb-2">
            Our Sanctuary
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            About {SITE_CONFIG.BUSINESS_NAME}
          </h1>
          <p className="text-sm sm:text-base text-[#D6D0C4] mt-3 max-w-2xl">
            Dedicated to calm, hygienic, and restorative body therapies in the heart of Jalgaon.
          </p>
        </div>
      </section>
      <AboutSection />
      <WhyChooseSection />
      <ExpertHandsSection />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default AboutPage;