import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, SERVICES_CATALOG } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: SERVICES_CATALOG[0].title,
  preferredDate: '',
  message: '',
};

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState(null);
  const [submittedSummary, setSubmittedSummary] = useState(null);

  const validate = () => {
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }
    if (trimmedMessage.length < 5) {
      nextErrors.message = 'Please include your preferred time slot or any questions.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.replace(/\D/g, ''),
      service: formData.service,
      preferredDate: formData.preferredDate || 'Flexible',
      message: formData.message.trim(),
    };

    setSubmittedSummary(payload);
    setSubmitState('success');
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  const directWhatsAppUrl = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to know treatment pricing and book an appointment.`
  );

  const summaryWhatsAppUrl = submittedSummary
    ? buildWhatsAppUrl(
        `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to inquire about an appointment:\nName: ${submittedSummary.name}\nPhone: ${submittedSummary.phone}\nTreatment: ${submittedSummary.service}\nPreferred Date: ${submittedSummary.preferredDate}\nNotes: ${submittedSummary.message}`
      )
    : directWhatsAppUrl;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#FAF8F4] text-[#1B2620] border-t border-[#E5DFD3]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
            Reservations &amp; Location
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1B2620] leading-tight"
          >
            Call, WhatsApp, or Visit Us in Jalgaon
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] mt-3 leading-relaxed">
            Pricing is shared directly on call or WhatsApp. Reach our reception desk near Khandesh
            Central Mall in Navi Peth during operating hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: NAP Details + Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-[#9A741F] flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2620] mb-1">Address</h3>
                  <p className="text-sm text-[#4A554E] leading-relaxed">{SITE_CONFIG.ADDRESS}</p>
                  <a
                    href={SITE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A741F] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#F2EDE4] pt-4 flex items-start gap-3.5">
                <Clock size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2620] mb-1">Operating Hours</h3>
                  <p className="text-sm text-[#4A554E] tabular-nums">
                    Monday – Sunday: {SITE_CONFIG.BUSINESS_HOURS.WEEKDAYS}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#F2EDE4] pt-4 flex items-start gap-3.5">
                <Phone size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2620] mb-1">Phone &amp; WhatsApp</h3>
                  <a
                    href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                    className="text-sm font-medium text-[#1B2620] hover:text-[#9A741F] transition-colors tabular-nums"
                  >
                    {SITE_CONFIG.PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="border-t border-[#F2EDE4] pt-4 flex items-start gap-3.5">
                <Mail size={18} className="text-[#9A741F] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1B2620] mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.EMAIL}`}
                    className="text-sm font-medium text-[#1B2620] hover:text-[#9A741F] transition-colors"
                  >
                    {SITE_CONFIG.EMAIL}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
                >
                  <Phone size={15} className="text-[#D4AF37]" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1E6B4B] text-white text-sm font-semibold hover:bg-[#17553B] transition-colors"
                >
                  <FaWhatsapp size={16} aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden">
              <iframe
                title={`${SITE_CONFIG.BUSINESS_NAME} Jalgaon Location Map`}
                src={SITE_CONFIG.GOOGLE_MAPS_EMBED_URL}
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form (Connects directly to WhatsApp / Call) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-8 lg:p-10"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1B2620] mb-2">
                Prepare Your Booking Inquiry
              </h3>
              <p className="text-sm text-[#4A554E] mb-6">
                Enter your details below to send a pre-filled inquiry directly on WhatsApp or call
                our reception desk ({SITE_CONFIG.BUSINESS_HOURS.DISPLAY}).
              </p>

              {submitState === 'success' && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-[#EEF6F2] border border-[#B7D7C7] text-[#174A34] text-sm space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Inquiry ready</p>
                      <p className="mt-0.5 text-xs sm:text-sm">
                        Thank you, {submittedSummary?.name}. Tap below to confirm your slot and
                        pricing directly via WhatsApp or Call.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-xs font-semibold hover:bg-[#2A3B32] transition-colors"
                    >
                      <Phone size={14} className="text-[#D4AF37]" aria-hidden="true" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={summaryWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E6B4B] text-white text-xs font-semibold hover:bg-[#17553B] transition-colors"
                    >
                      <FaWhatsapp size={15} aria-hidden="true" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] placeholder-[#8A938D] focus:bg-white focus:border-[#9A741F]"
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#9F2B2B]">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Mobile Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] placeholder-[#8A938D] focus:bg-white focus:border-[#9A741F] tabular-nums"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-[#9F2B2B]">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] placeholder-[#8A938D] focus:bg-white focus:border-[#9A741F]"
                  />
                  {errors.email && <p className="mt-1 text-xs text-[#9F2B2B]">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Preferred Treatment
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] focus:bg-white focus:border-[#9A741F]"
                  >
                    {SERVICES_CATALOG.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title} ({service.duration} · Price on Call)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-date" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] focus:bg-white focus:border-[#9A741F]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#1B2620] mb-1.5">
                    Preferred Time &amp; Notes <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    placeholder="Share your preferred time slot, couple suite request, or pressure preference..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF8F4] border border-[#D9D0C1] text-sm text-[#1B2620] placeholder-[#8A938D] focus:bg-white focus:border-[#9A741F] resize-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-[#9F2B2B]">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3.5 px-6 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
              >
                Prepare Booking Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
