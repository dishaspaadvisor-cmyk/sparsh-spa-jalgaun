import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { CONFIG, ROUTES } from '../config/constants';

const TermsAndConditionsPage = () => (
  <section className="bg-[#fbfaf7] px-6 py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 rounded-2xl bg-white border border-stone-200 px-6 py-8 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-[#b58d20]" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b58d20]">
            Booking information
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Terms &amp; Conditions</h1>
        <p className="mt-3 text-stone-600">Last updated: November 23, 2026</p>
      </div>

      <div className="space-y-8 rounded-2xl bg-white border border-stone-200 px-6 py-8 md:px-10 text-stone-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Appointments</h2>
          <p>
            Appointments are subject to therapist availability and confirmation by{' '}
            {CONFIG.BUSINESS_NAME}. A confirmed appointment may require advance payment or
            a booking deposit. Please arrive on time for your scheduled service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Cancellation and Rescheduling</h2>
          <p>
            Please notify us as early as possible if you need to cancel or reschedule.
            Late cancellations or no-shows may affect future booking eligibility or result
            in a cancellation charge where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Service and Pricing</h2>
          <p>
            Service availability, duration, and prices may change based on therapist
            availability, treatment requirements, or promotional conditions. The final
            price and service details will be confirmed before the appointment begins.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Health and Safety</h2>
          <p>
            Guests must disclose relevant medical conditions, allergies, pregnancy,
            injuries, or sensitivities before a treatment. Therapy does not replace
            medical diagnosis or treatment. We may decline or modify a service when it
            could be unsafe.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Conduct and Property</h2>
          <p>
            Guests are expected to behave respectfully toward therapists and other guests.
            Inappropriate conduct is not permitted. Guests are responsible for their
            belongings and may be charged for damage caused during their visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Payments and Refunds</h2>
          <p>
            Payment terms and refund eligibility will be communicated at the time of
            booking or purchase. Completed spa treatments are generally non-refundable.
            Approved refunds may be subject to verification and reasonable processing time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Website Use</h2>
          <p>
            Website content is provided for general information and may be updated without
            notice. Unauthorized misuse of the website, including fraudulent bookings or
            attempts to disrupt service, is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-3">Contact</h2>
          <p>
            For questions about these terms, contact{' '}
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

export default TermsAndConditionsPage;
