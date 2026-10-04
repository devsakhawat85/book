import React from 'react';
import { COMPANY } from '../data/company';
import { ASSETS } from '../assets/assetMap';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Award, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onOpenGiveaway: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Centrally Located in Lincoln, Nebraska
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Contact LEAD Group
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Direct access to Tami Damian, President & CEO. We are centrally located in Lincoln, Nebraska — and can easily get to you anywhere across North America or internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 Columns: Official Contact Details & Portrait */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm p-6 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <img
                    src={ASSETS.tamiContact}
                    alt="Tami Damian, President and CEO"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-base">
                      Tami Damian, M.A.
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      President & CEO, LEAD Group, Inc.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
                      className="text-base font-serif font-bold text-blue-900 hover:text-blue-950 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#b48528]" />
                      <span>{COMPANY.phoneFormatted}</span>
                    </a>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm font-semibold text-blue-900 hover:text-blue-950 transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#b48528]" />
                      <span>{COMPANY.email}</span>
                    </a>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Office Location
                    </span>
                    <div className="flex items-start gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-[#b48528] shrink-0 mt-0.5" />
                      <span>Lincoln, Nebraska — Serving clients nationwide and globally</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Referral Reward Program (Preserved exactly from original) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b48528]">
                  <Award className="w-4 h-4" />
                  <span>Referral Reward Program</span>
                </div>
                <h4 className="text-base font-serif font-bold text-slate-900">
                  We Will Pay You to Tell Others About Us!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get a little something EXTRA with our Referral Reward Program! If we have provided you with that little something EXTRA and you are willing to share about our services, we would like to reward you. Refer Leadership Education And Development to your customers, your suppliers, or your friends. With a contractual agreement from your referral, we will reward you! Thank you!
                </p>
              </div>

              {/* 4 Brand Pillars Badges from original website */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center">
                  LEAD Group Core Divisions
                </span>
                <div className="grid grid-cols-4 gap-2 items-center justify-center">
                  <div className="text-center p-2 rounded bg-slate-50 border border-slate-100">
                    <img src={ASSETS.socialBadgeLead} alt="LEAD Group" className="w-8 h-8 mx-auto object-contain mb-1" />
                    <span className="text-[10px] font-semibold text-slate-700 block truncate">LEAD Group</span>
                  </div>
                  <div className="text-center p-2 rounded bg-slate-50 border border-slate-100">
                    <img src={ASSETS.socialBadgeIso} alt="ISO Training" className="w-8 h-8 mx-auto object-contain mb-1" />
                    <span className="text-[10px] font-semibold text-slate-700 block truncate">ISO Training</span>
                  </div>
                  <div className="text-center p-2 rounded bg-slate-50 border border-slate-100">
                    <img src={ASSETS.socialBadgeLifeLessons} alt="Life Lessons" className="w-8 h-8 mx-auto object-contain mb-1" />
                    <span className="text-[10px] font-semibold text-slate-700 block truncate">Life Lessons</span>
                  </div>
                  <div className="text-center p-2 rounded bg-slate-50 border border-slate-100">
                    <img src={ASSETS.socialBadgeCoachTami} alt="Coach Tami D" className="w-8 h-8 mx-auto object-contain mb-1" />
                    <span className="text-[10px] font-semibold text-slate-700 block truncate">Coach Tami</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
