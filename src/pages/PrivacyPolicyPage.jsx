import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, ROUTES } from '../config/siteConfig';
import { usePageMeta } from '../hooks/usePageMeta';

const PrivacyPolicyPage = () => {
  usePageMeta({
    title: 'Privacy Policy',
    description: `Read the Privacy Policy for ${SITE_CONFIG.BUSINESS_NAME} (${SITE_CONFIG.SITE_URL}), detailing appointment data handling, cookies, and Google Ads/Analytics disclosures.`,
    path: ROUTES.PRIVACY,
  });

  return (
    <section className="bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-[#1B2620]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-2xl bg-white border border-[#E5DFD3] px-6 py-8 md:px-10">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="h-7 w-7 text-[#9A741F]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F]">
              Transparency &amp; Data Protection
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1B2620]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#6B756E]">
            Effective Date: November 24, 2026 · {SITE_CONFIG.BUSINESS_NAME} ({SITE_CONFIG.SITE_URL})
          </p>
        </div>

        <div className="space-y-8 rounded-2xl bg-white border border-[#E5DFD3] px-6 py-8 md:px-10 text-sm sm:text-base text-[#4A554E] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              1. Information We Collect
            </h2>
            <p>
              When you submit an appointment inquiry, contact us by phone or WhatsApp, or browse{' '}
              <span className="font-medium text-[#1B2620]">{SITE_CONFIG.SITE_URL}</span>,{' '}
              {SITE_CONFIG.BUSINESS_NAME} may collect the contact details you voluntarily provide,
              including your full name, phone number, email address, preferred treatment, preferred
              appointment date/time, and any session notes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information strictly to schedule and confirm spa appointments, respond to
              customer inquiries, maintain service quality, and comply with applicable legal or
              accounting obligations. We do not sell, rent, or trade your personal information to
              third-party brokers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              3. Cookies, Google Analytics &amp; Google Ads Tracking
            </h2>
            <p className="mb-3">
              Our website may use essential browser cookies and third-party measurement tools—such as
              Google Analytics and Google Ads conversion tags—to understand overall website traffic,
              improve page performance, and measure the effectiveness of our advertisements.
            </p>
            <p>
              Cookies do not give us access to your device or personal files. You may manage or
              disable cookies in your browser settings at any time, or customize your Google
              advertising preferences via{' '}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A741F] font-medium underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              4. Third-Party Services &amp; External Links
            </h2>
            <p>
              Our site includes official links to WhatsApp (for voluntary appointment messaging) and
              an embedded Google Map for directions to our Jalgaon location. When you interact with
              those external services, their respective privacy policies apply.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              5. Data Storage, Security &amp; Retention
            </h2>
            <p>
              We retain booking inquiry records only as long as reasonably necessary to manage your
              appointments and customer support requests. Access to guest contact records is
              restricted to authorized reception and management personnel.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-[#1B2620] mb-2.5">
              6. Your Rights &amp; Privacy Contact
            </h2>
            <p className="mb-3">
              You may request access to, correction of, or deletion of the personal contact details
              you have shared with us at any time.
            </p>
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

export default PrivacyPolicyPage;
