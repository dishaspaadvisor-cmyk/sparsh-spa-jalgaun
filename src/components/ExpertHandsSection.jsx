import React from 'react';

const ExpertHandsSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden bg-[#faf8f5] border-y border-stone-200/80">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-2xl p-6 sm:p-8 md:p-10 bg-white/80 border border-stone-200/60 shadow-lg backdrop-blur-sm">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-900 mb-3 sm:mb-4">
            Expert Hands You Can Trust
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5 px-2 sm:px-0 max-w-3xl mx-auto">
            Our therapists are trained not just in massage techniques, but also in anatomy, safety, and hygiene protocols to ensure every guest feels secure and cared for.
          </p>

          {/* Quote */}
          <div className="mb-5 sm:mb-6">
            <p className="text-base sm:text-lg md:text-xl font-medium italic text-[#b58d20] leading-relaxed px-2 sm:px-0">
              "Every touch is guided by technique, empathy, and respect."
            </p>
          </div>

          {/* Meet Our Experts Button */}
          <button className="bg-white border-2 border-[#D4AF37] text-[#b58d20] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold shadow-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform hover:scale-105">
            Meet Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertHandsSection;
