import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';
import { usePageMeta } from '../hooks/usePageMeta';

const TermsAndConditionsPage = () => {
  usePageMeta({
    title: 'Terms & Conditions',
    description: `Review booking, cancellation, hygiene, and service terms for ${SITE_CONFIG.BUSINESS_NAME} in Jalgaon.`,
    path: ROUTES.TERMS,
  });

  return (
    <section className="bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-[#1B2620]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-2xl bg-white border border-[#E5DFD3] px-6 py-8 md:px-10">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-7 w-7 text-[#9A741F]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F]">
              Booking &amp; Service Terms
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1B2620]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-[#6B756E]">
            Effective Date: November 24, 2026 · {SITE_CONFIG.BUSINESS_NAME} ({SITE_CONFIG.SITE_URL})
          </p>
        </div>

        <div className="space-y-8 rounded-2xl bg-white border border-[#E5DFD3] px-6 py-8 md:px-10 text-sm sm:text-base text-[#4A554E] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              1. Appointments &amp; Confirmation
            </h2>
            <p>
              All appointments at {SITE_CONFIG.BUSINESS_NAME} are subject to suite and therapist
              availability during our operating hours ({SITE_CONFIG.BUSINESS_HOURS.DISPLAY}).
              Online inquiries are confirmed by our reception team via phone or WhatsApp. Please
              arrive 10 minutes prior to your scheduled session.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              2. Cancellation &amp; Rescheduling Policy
            </h2>
            <p>
              If you need to reschedule or cancel your appointment, please inform our reception desk
              at least 3 hours in advance by calling {SITE_CONFIG.PHONE_DISPLAY}. Late arrivals may
              result in a shortened session so subsequent guests are not delayed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              3. Wellness Scope &amp; Health Disclosure
            </h2>
            <p>
              Services provided at {SITE_CONFIG.BUSINESS_NAME} are non-medical relaxation,
              massage, body care, and hydrotherapy treatments. They are not intended to diagnose,
              treat, cure, or prevent any medical condition. Guests must inform reception and their
              therapist of any allergies, skin sensitivities, recent surgeries, injuries, high blood
              pressure, or pregnancy prior to treatment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              4. Pricing, Packages &amp; Refunds
            </h2>
            <p>
              Treatment pricing is provided directly on call ({SITE_CONFIG.PHONE_DISPLAY}) or via
              WhatsApp prior to appointment confirmation. All session durations and package
              inclusions are confirmed clearly before your session begins. Completed wellness
              treatments are non-refundable, and unused package sessions remain valid for the
              stated validity period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              5. Guest Conduct &amp; Zero-Tolerance Policy
            </h2>
            <p>
              {SITE_CONFIG.BUSINESS_NAME} maintains a strictly professional wellness environment.
              Respectful conduct toward therapists, reception staff, and fellow guests is mandatory.
              Any inappropriate behavior results in immediate termination of the session without
              refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              6. Contact Information
            </h2>
            <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5DFD3] text-sm space-y-1">
              <p className="font-semibold text-[#1B2620]">{SITE_CONFIG.BUSINESS_NAME}</p>
              <p>{SITE_CONFIG.ADDRESS}</p>
              <p>
                Email:{' '}
                <a className="text-[#9A741F] font-medium hover:underline" href={`mailto:${SITE_CONFIG.EMAIL}`}>
                  {SITE_CONFIG.EMAIL}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="text-[#9A741F] font-medium hover:underline tabular-nums" href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}>
                  {SITE_CONFIG.PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </section>

          <div className="pt-2">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center px-6 py-2.5 rounded-lg bg-[#1B2620] text-sm font-semibold text-[#FAF8F4] hover:bg-[#2A3B32] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
