import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { CONFIG, ROUTES } from '../config/constants';

const PrivacyPolicyPage = () => (
  <section className="bg-[#fbfaf7] px-6 py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 rounded-2xl bg-white border border-stone-200 px-6 py-8 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="h-8 w-8 text-[#b58d20]" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b58d20]">
            Your privacy matters
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Privacy Policy</h1>
        <p className="mt-3 text-stone-600">Last updated: November 23, 2026</p>
      </div>

      <div className="space-y-8 rounded-2xl bg-white border border-stone-200 px-6 py-8 md:px-10 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Information We Collect</h2>
          <p>
            We may collect the name, phone number, email address, appointment preferences,
            and message details you provide when you contact us or request a booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">How We Use Your Information</h2>
          <p>
            Your information is used to respond to enquiries, manage appointments, provide
            spa services, send booking updates, and improve customer support. We do not
            sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Communication and Consent</h2>
          <p>
            By submitting your contact details or contacting us through phone, email,
            WhatsApp, or the website, you consent to receiving information related to
            your enquiry or appointment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Data Storage and Security</h2>
          <p>
            We take reasonable steps to protect personal information against unauthorized
            access, misuse, alteration, or disclosure. Access is limited to people who
            need the information to provide or manage your spa experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Third-Party Services</h2>
          <p>
            Our website may use communication or map services that have their own privacy
            practices. Those providers process information under their respective policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Your Choices</h2>
          <p>
            You may request correction or deletion of information you have shared with us,
            subject to appointment, accounting, or legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Contact Us</h2>
          <p>
            For privacy questions, contact us at{' '}
            <a className="text-[#a77d16] hover:underline" href={`mailto:${CONFIG.EMAIL}`}>
              {CONFIG.EMAIL}
            </a>{' '}
            or call{' '}
            <a className="text-[#a77d16] hover:underline" href={`tel:${CONFIG.PHONE_NUMBER}`}>
              {CONFIG.PHONE_DISPLAY}
            </a>.
          </p>
        </section>

        <Link
          to={ROUTES.HOME}
          className="inline-block rounded-full bg-[#b58d20] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7618] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </section>
);

export default PrivacyPolicyPage;
