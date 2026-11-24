import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../hooks/useWhatsApp';

/**
 * User-initiated Booking Inquiry Modal (no arrival popups, no innerHTML, no hardcoded secrets).
 */
const BookingBot = ({ isOpen = false, onClose, preselectedItem = null }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedLabel = preselectedItem?.title || 'Wellness Consultation';

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (name.trim().length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to book "${selectedLabel}".\nName: ${name || 'Guest'}\nPhone: ${phone || 'Not provided'}\nPreferred Time: ${preferredTime || 'Flexible'}`
  );

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121A15]/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F4] rounded-2xl border border-[#E5DFD3] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1B2620] text-[#FAF8F4] px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#E3C68E] font-medium">
              {SITE_CONFIG.BUSINESS_NAME}
            </p>
            <h3 id="booking-modal-title" className="font-display text-2xl font-semibold">
              {selectedLabel}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close booking dialog"
            className="p-2 rounded-lg text-[#D6D0C4] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center space-y-4 py-2">
              <CheckCircle2 size={36} className="text-[#1E6B4B] mx-auto" aria-hidden="true" />
              <h4 className="font-display text-2xl font-semibold text-[#1B2620]">
                Request Ready to Confirm
              </h4>
              <p className="text-sm text-[#4A554E]">
                Confirm your slot immediately with our Jalgaon reception team via WhatsApp or phone.
              </p>
              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#1E6B4B] text-white text-sm font-semibold hover:bg-[#17553B] transition-colors"
                >
                  <FaWhatsapp size={17} aria-hidden="true" />
                  <span>Send on WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
                >
                  <Phone size={15} aria-hidden="true" />
                  <span>Call {SITE_CONFIG.PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {preselectedItem && (
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD3] text-xs text-[#4A554E] flex items-center justify-between">
                  <span className="font-medium text-[#1B2620]">{preselectedItem.duration}</span>
                  <span className="font-semibold text-[#9A741F]">{preselectedItem.priceLabel || 'Price on Call'}</span>
                </div>
              )}

              {error && (
                <p role="alert" className="text-xs text-[#9F2B2B] font-medium">
                  {error}
                </p>
              )}

              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-[#1B2620] mb-1">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D0C1] text-sm text-[#1B2620]"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#1B2620] mb-1">
                  10-Digit Mobile Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9152291135"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D0C1] text-sm text-[#1B2620] tabular-nums"
                />
              </div>

              <div>
                <label htmlFor="modal-time" className="block text-xs font-semibold text-[#1B2620] mb-1">
                  Preferred Time (10 AM – 11 PM)
                </label>
                <input
                  id="modal-time"
                  type="text"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  placeholder="e.g. Today at 5:00 PM"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D0C1] text-sm text-[#1B2620]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
              >
                Continue to Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingBot;
