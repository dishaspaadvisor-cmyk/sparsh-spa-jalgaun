import React from 'react';
import { Award, ShieldCheck, Leaf, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const WhyChooseSection = () => {
  const pillars = [
    {
      id: '01',
      icon: Award,
      title: 'Certified Therapists',
      description:
        'Our wellness practitioners are formally trained in classical Swedish, Deep Tissue, Thai, and Ayurvedic massage techniques.',
    },
    {
      id: '02',
      icon: ShieldCheck,
      title: 'Strict Suite Hygiene',
      description:
        'Treatment tables, surfaces, and hydrotherapy tubs are sanitized between every appointment with fresh linens and single-use kits.',
    },
    {
      id: '03',
      icon: Leaf,
      title: 'Pure Botanical Oils',
      description:
        'We blend cold-pressed sweet almond, sesame, and natural essential oils free from harsh synthetic fragrances.',
    },
    {
      id: '04',
      icon: Users,
      title: 'Individual & Couple Suites',
      description:
        'Spacious, sound-insulated air-conditioned suites designed for solo unwinding as well as simultaneous couple sessions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E5DFD3] text-[#1B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
            Our Standards
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1B2620] leading-tight">
            Why Guests Trust {SITE_CONFIG.BUSINESS_NAME}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E5DFD3] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-lg bg-[#F2EDE4] flex items-center justify-center text-[#9A741F]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-[#6B756E] tabular-nums">
                      {pillar.id}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#1B2620] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4A554E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
