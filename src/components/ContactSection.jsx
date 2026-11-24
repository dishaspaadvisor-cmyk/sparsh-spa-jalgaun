import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../config/constants";

const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzXHE9CQAaG2H_-mAInpaR0I3Xsb-OJ_KsDACzmrNyB3Otf8AeUm0XvI3L26QeEvgHN/exec";
const SECRET = "spaenquiriescodesabccdsdhdgfsh";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submitData = {
      ...formData,
      source: `${CONFIG.BUSINESS_NAME} website - ${window.location.href}`,
      secret: SECRET,
    };

    try {
      console.log("Submitting form data:", submitData);

      await fetch(WEBAPP_URL, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      console.log("Form submitted successfully");
      setSubmitStatus("success");
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#faf8f5] text-gray-900 border-t border-stone-200/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#b58d20] mb-2">
            We'd Love To Hear From You
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-3">Contact Us</h2>
          <p className="text-base md:text-lg text-gray-600">
            Get in touch to book your perfect spa experience in Jalgaon
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="p-3 bg-amber-50 rounded-xl text-[#b58d20]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{CONFIG.ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="p-3 bg-amber-50 rounded-xl text-[#b58d20]">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Phone</h4>
                  <a href={`tel:${CONFIG.PHONE_NUMBER}`} className="text-gray-600 hover:text-[#b58d20] transition-colors font-medium">
                    {CONFIG.PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b58d20] transition-colors font-medium"
                  >
                    {CONFIG.WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="p-3 bg-amber-50 rounded-xl text-[#b58d20]">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                  <a href={`mailto:${CONFIG.EMAIL}`} className="text-gray-600 hover:text-[#b58d20] transition-colors font-medium">
                    {CONFIG.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <h4 className="font-bold text-stone-900 mb-3 text-lg">Business Hours</h4>
              <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                <p><span className="font-semibold text-stone-800">Monday - Friday:</span> {CONFIG.BUSINESS_HOURS.WEEKDAYS}</p>
                <p><span className="font-semibold text-stone-800">Saturday - Sunday:</span> {CONFIG.BUSINESS_HOURS.WEEKENDS}</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border border-stone-200/90 p-8 sm:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Book Your Appointment
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-sm font-medium">
                  Enquiry sent successfully! Thank you for your interest. We will contact you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-xl text-sm font-medium">
                  There was an error submitting your form. Please try again or contact us directly on WhatsApp.
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-300 text-stone-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all disabled:opacity-50 placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-300 text-stone-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all disabled:opacity-50 placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-300 text-stone-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all disabled:opacity-50 placeholder-gray-400"
                    placeholder="Your 10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-300 text-stone-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all resize-none disabled:opacity-50 placeholder-gray-400"
                    placeholder="Tell us about your preferred service and time..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-black py-4 px-6 rounded-xl font-bold text-base hover:bg-[#bc962b] transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
