import React from 'react';
import { Award, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { CONFIG } from '../config/constants';

const WhyChooseSection = () => {
  const benefits = [
    {
      id: 1,
      icon: Award,
      title: "Certified Therapists",
      description: "Internationally certified professionals experienced in anatomy and hygiene.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Hygienic Rooms",
      description: "Pristine, sanitized treatment rooms ensuring a safe wellness environment.",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Luxury Ambience",
      description: "A peaceful, world-class setting designed for complete relaxation.",
    },
    {
      id: 4,
      icon: Heart,
      title: "Couple Rooms",
      description: "Private suites dedicated for couples to enjoy simultaneous relaxation.",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900 border-t border-stone-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 text-center mb-12 md:mb-16">
          Why Choose <span className="text-[#b58d20]">{CONFIG.BUSINESS_NAME}</span>?
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="text-center flex flex-col items-center p-6 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon with warm gold background */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 md:mb-6 shadow-sm">
                  <IconComponent size={32} className="text-[#b58d20]" />
                </div>

                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3 md:mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
