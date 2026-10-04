import React from 'react';
import { COMPANY } from '../data/company';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="bg-[#fafaf8] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Legal Compliance & Governance
            </span>
            <h1 className="text-3xl font-serif text-[#0e2038] tracking-tight">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Leadership Education And Development Group, Inc. (LEAD Group) · Lincoln, Nebraska
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  At Leadership Education And Development Group, Inc. (LEAD Group), we are committed to respecting and protecting the privacy of our website visitors, training attendees, coaching clients, and corporate partners.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">1. Information We Collect</h3>
                <p>
                  We collect personal contact information (such as your name, corporate organization, email address, telephone number, and physical mailing address) strictly when you submit an inquiry form, request our complimentary executive giveaway, register for auditor training courses, or order published books and performance planners.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">2. How We Use Your Information</h3>
                <p>
                  Information collected is used solely to respond to your specific consultation requests, coordinate seminar enrollment, arrange exam proctoring with accreditation bodies such as Exemplar Global / RABQSA, ship requested books and gifts, and deliver contracted services. We never sell, lease, or monetize your contact information to third-party data brokers.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">3. Direct Contact & Opt-Out</h3>
                <p>
                  You may at any time request the deletion or correction of your contact details by contacting Tami Damian directly at {COMPANY.email} or by telephone at {COMPANY.phoneFormatted}.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to the official website of Leadership Education And Development Group, Inc. (LEAD Group). By accessing or utilizing this website, you agree to comply with and be bound by the following terms and conditions.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">1. Intellectual Property & Brand Materials</h3>
                <p>
                  All content, training curricula, logos, photography, trademarks, and writings displayed on this website are the property of Leadership Education And Development Group, Inc. or are used under official authorization (including Ziglar, Inc. and Exemplar Global / Dekra AQS). Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">2. Training Enrollment & Cancellation Policies</h3>
                <p>
                  Enrollment in certified Lead Auditor and Internal Auditor courses is subject to availability and prerequisite verification. Substitutions are permitted provided the substitute completes required preparatory materials. Cancellations must be submitted in writing at least 3 weeks prior to course start date. Cancellations received thereafter may forfeit course fees if the registered seat cannot be filled.
                </p>
                <h3 className="text-base font-serif font-bold text-slate-900 pt-2">3. Disclaimer & Limitation of Liability</h3>
                <p>
                  Training materials and management consulting guidance are provided for professional educational and organizational improvement purposes. While LEAD Group applies industry-leading rigor, external registrar certification is awarded independently by accredited third-party auditing bodies.
                </p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
            © 2026 Leadership Education And Development Group, Inc. (LEAD Group). All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
