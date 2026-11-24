import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ExpertHandsSection from '../components/ExpertHandsSection';
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ROUTES } from '../config/siteConfig';

const HomePage = () => {
  usePageMeta({
    title: 'Luxury Wellness & Body Massage in Jalgaon',
    description:
      'Visit Sparsh Spa in Navi Peth, Jalgaon for Ayurvedic, Swedish, Deep Tissue, Aromatherapy massages, body polish, and hydrotherapy suites. Open daily 10 AM – 11 PM.',
    path: ROUTES.HOME,
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection limit={6} />
      <WhyChooseSection />
      <ExpertHandsSection />
      <Offers />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;