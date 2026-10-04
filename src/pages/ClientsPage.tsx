import React, { useState } from 'react';
import { TESTIMONIALS, CLIENT_LOGOS_LIST } from '../data/testimonials';
import { COMPANY } from '../data/company';
import { Quote, CheckCircle2, Building2, MapPin, ArrowRight, Star } from 'lucide-react';

interface ClientsPageProps {
  navigate: (to: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ navigate }) => {
  const [filter, setFilter] = useState<'all' | 'iso' | 'leadership'>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === filter || t.category === 'general');

  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Proven Track Record
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Clients & Testimonials
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Trusted by multinational manufacturing leaders, aerospace suppliers, technology innovators, and community organizations across North America.
            </p>
            <div className="mt-4 text-xs text-[#f4d388] font-semibold">
              * References available upon request!
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Filter & Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Voice of the Attendee
              </span>
              <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
                What Participants Say
              </h2>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-200/60 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filter === 'all' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Stories ({TESTIMONIALS.length})
              </button>
              <button
                onClick={() => setFilter('iso')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filter === 'iso' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ISO & Auditor Training
              </button>
              <button
                onClick={() => setFilter('leadership')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filter === 'leadership' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Leadership & Ziglar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {filteredTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#b48528]/30 mb-3" />
                  <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="block text-xs font-bold text-slate-900">
                    {t.author}
                  </span>
                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    {t.role && <span>{t.role}</span>}
                    {t.company && <span> · {t.company}</span>}
                    {t.location && (
                      <span className="block text-slate-400">
                        {t.location} {t.date && `(${t.date})`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Enterprise Client Roster Strip */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Representative Client Engagements
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0e2038] tracking-tight">
                Organizations We Have Had the Privilege to Serve
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                A selection of corporate, industrial, and community organizations that have engaged LEAD Group for ISO consulting, auditor certification, and workforce development.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CLIENT_LOGOS_LIST.map((client, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-center text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <span>{client}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-600 mb-4">
                Looking for references specific to your industry standard (Automotive IATF 16949, Aerospace AS9100, Medical ISO 13485, Environmental ISO 14001)?
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Specific Client References
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
