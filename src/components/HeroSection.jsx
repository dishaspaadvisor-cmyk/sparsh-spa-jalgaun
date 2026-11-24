import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONFIG } from "../config/constants";

const HeroSection = () => {
  const PRIMARY_PHONE = CONFIG.PHONE_NUMBER;
  const WHATSAPP_NUMBER = CONFIG.WHATSAPP_NUMBER;

  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    customPaging: (i) => (
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-[#D4AF37] transition-all duration-300" />
    ),
    dotsClass: "slick-dots custom-dots"
  };

  const slides = [
    {
      title: "Best Spa in Jalgaon",
      image: "/ServicesImg/herobanner2.png",
    },
    {
      title: "Experience True Wellness",
      image: "/ServicesImg/herobanner3.png",
    }
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <Slider {...sliderSettings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[60vh] md:h-[80vh] outline-none">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-top origin-top transition-transform duration-[10000ms] motion-safe:animate-zoom"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: 'center top',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/60" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
                  {slide.title}
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${PRIMARY_PHONE}`}
                    className="flex items-center gap-2 bg-[#D4AF37] text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl hover:bg-[#bc962b] transition-colors min-w-[180px] md:min-w-[200px] justify-center"
                  >
                    <Phone size={18} className="md:w-5 md:h-5" />
                    Call Now
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl hover:bg-[#128C7E] transition-colors min-w-[180px] md:min-w-[200px] justify-center"
                  >
                    <FaWhatsapp size={20} className="md:w-6 md:h-6" />
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Add custom zoom animation to index.css if not present, but let's try inline style first or assume standard tailwind config if possible. Actually, I can just add a style tag or rely on Framer Motion for zoom if needed. Let's stick to Framer Motion for the text and simple fade for slides. */}
      <style>{`
        .animate-zoom {
          transform-origin: center top !important;
          animation: zoom 20s linear infinite alternate;
        }
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        .custom-dots {
          bottom: 30px !important;
        }
        .custom-dots li {
          margin: 0 4px !important;
        }
        .custom-dots li.slick-active div {
          background-color: #D4AF37 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
