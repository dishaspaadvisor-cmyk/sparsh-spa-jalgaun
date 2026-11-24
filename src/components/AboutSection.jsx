import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';

const AboutSection = () => {
  const [imgError, setImgError] = useState(false);

  const standards = [
    'Trained & certified wellness therapists',
    'Hospital-grade suite sanitization between guests',
    'Cold-pressed botanical & Ayurvedic oils',
    'Private individual & couple treatment suites',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F4] text-[#1B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Media Column */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[340px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#E5DFD3] bg-[#F2EDE4]">
              {!imgError ? (
                <img
                  src="/AboutImg/AboutImg.png"
                  alt={`Calm wellness interior at ${SITE_CONFIG.BUSINESS_NAME} in Jalgaon`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <Sparkles className="w-8 h-8 text-[#9A741F] mb-3" aria-hidden="true" />
                  <p className="font-display text-2xl font-semibold text-[#1B2620]">
                    {SITE_CONFIG.BUSINESS_NAME}
                  </p>
                  <p className="text-sm text-[#4A554E] mt-1">{SITE_CONFIG.LOCATION}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-3">
              About {SITE_CONFIG.BUSINESS_NAME}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1B2620] leading-[1.15] mb-5">
              Thoughtful Care Rooted in Authentic Wellness Traditions
            </h2>

            <p className="text-base text-[#4A554E] leading-relaxed mb-4">
              Located near Khandesh Central Mall in Navi Peth, {SITE_CONFIG.BUSINESS_NAME} offers
              a quiet retreat from busy schedules. Our therapists tailor pressure, warm botanical
              oils, and session pacing to restore physical comfort and mental calm.
            </p>

            <p className="text-base text-[#4A554E] leading-relaxed mb-7">
              Every appointment takes place in a private, climate-controlled suite prepared with
              freshly laundered linens, warm shower amenities, and strict hygiene standards.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {standards.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm font-medium text-[#1B2620]"
                >
                  <Check
                    size={16}
                    className="text-[#9A741F] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors whitespace-nowrap"
              >
                <span>Explore Treatments</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1B2620] text-[#1B2620] text-sm font-semibold hover:bg-[#F2EDE4] transition-colors whitespace-nowrap"
              >
                <span>Visit &amp; Directions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
