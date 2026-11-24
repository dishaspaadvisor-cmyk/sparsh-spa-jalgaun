import React, { useMemo } from 'react';
import { CONFIG } from '../config/constants';

const FAQSection = () => {
  const faqs = useMemo(
    () => [
      {
        q: 'What are your spa timings and do you take walk-ins?',
        a: `We operate daily from ${CONFIG.BUSINESS_HOURS.DISPLAY}. Walk-ins are welcome, but we recommend advance booking to secure your preferred slot.`
      },
      {
        q: 'How can I book an appointment?',
        a: 'You can book via WhatsApp using the Book Now buttons on our website or call us directly. We will confirm your time and therapist preference.'
      },
      {
        q: 'What massage services do you offer and what is the duration?',
        a: 'We offer deep tissue, hot stone, Swedish full body, Thai massage, hot oil massage, and foot reflexology. Sessions typically range from 30 to 90 minutes depending on the service.'
      },
      {
        q: 'Do you have couple massage rooms?',
        a: 'Yes, we provide couple spa experiences subject to availability. Please mention "couple massage" while booking so we can reserve the room.'
      },
      {
        q: 'What oils and products do you use? Can I choose the pressure?',
        a: 'We use premium-grade, skin-safe oils and aromatherapy blends. Pressure and technique are fully customizable. Please inform your therapist of your preferences.'
      },
      {
        q: 'Are your therapists certified? Can I request a female therapist?',
        a: 'All therapists are trained professionals. You may request a female therapist while booking and we will do our best to accommodate.'
      },
      {
        q: 'What about hygiene and safety?',
        a: 'Hygiene is our priority. Linens are changed after every session, rooms and equipment are sanitized regularly, and disposable items are used wherever appropriate.'
      },
      {
        q: 'Where are you located? Is parking available?',
        a: `We are located at ${CONFIG.ADDRESS}. Nearby street and paid parking options are typically available; message us for exact directions.`
      },
      {
        q: 'Do you offer gift vouchers and premium plans?',
        a: 'Yes. We offer digital and physical gift vouchers, plus premium membership plans with bundled sessions, priority booking, and exclusive discounts. Message us on WhatsApp to see current plan options and benefits.'
      },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const mainEntity = faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity,
    };
  }, [faqs]);

  const handleWhatsApp = () => {
    const message = `Hello, I want to book a spa appointment at ${CONFIG.BUSINESS_NAME}.`;
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-white text-gray-900 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#b58d20] mb-2">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-gray-600">Answers to common booking and service queries from our guests.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group border border-stone-200 rounded-2xl bg-stone-50/70 p-5 open:bg-white open:shadow-lg open:border-amber-200 transition-all duration-300">
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-stone-900 group-open:text-[#b58d20] transition-colors">
                  {item.q}
                </h3>
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-black text-sm font-bold transition-transform group-open:rotate-45 flex-shrink-0 shadow-sm">+</span>
              </summary>
              <div className="pt-3.5 mt-2.5 text-gray-700 leading-relaxed border-t border-stone-100 text-sm sm:text-base">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={handleWhatsApp} className="bg-[#D4AF37] text-black px-9 py-3.5 rounded-full text-base sm:text-lg font-bold shadow-md hover:shadow-xl hover:bg-[#bc962b] transition-all duration-300 transform hover:scale-105">
            Book on WhatsApp
          </button>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  );
};

export default FAQSection;
