import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA, SITE_CONFIG } from '../config/siteConfig';

const Testimonials = () => {
  const highlights = [
    { value: '2,500+', label: 'Sessions Completed' },
    { value: '4.9 / 5', label: 'Guest Satisfaction' },
    { value: '100%', label: 'Sanitized Private Suites' },
    { value: '7 Days', label: 'Open 10 AM – 11 PM' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4] text-[#1B2620] border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
            Guest Feedback
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1B2620] leading-tight">
            Trusted by Guests Across Jalgaon
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] mt-3 leading-relaxed">
            Verified experiences shared by visitors to {SITE_CONFIG.BUSINESS_NAME} in Navi Peth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DFD3] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      className="text-[#B88E2F] fill-[#B88E2F]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#1B2620] leading-relaxed mb-5">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EDE4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[#1B2620]">{item.name}</p>
                  <p className="text-xs text-[#6B756E]">{item.role}</p>
                </div>
                <div className="text-xs text-[#6B756E] sm:text-right">
                  <span className="font-medium text-[#9A741F]">{item.service}</span>
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5DFD3] text-center"
            >
              <p className="font-display text-3xl sm:text-4xl font-semibold text-[#1B2620] tabular-nums mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#4A554E] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
