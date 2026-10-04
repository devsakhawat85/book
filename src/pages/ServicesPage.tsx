import React from 'react';
import { SERVICES } from '../data/services';
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  navigate: (to: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Capabilities & Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From international ISO management system compliance and certified lead auditor courses to authentic Ziglar personal development and executive coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow aspect-[4/3] flex items-center justify-center p-2">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text Details Column */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#b48528] bg-amber-50 px-2 py-0.5 rounded">
                    Service {srv.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    LEAD Group Capability
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e2038] tracking-tight">
                  {srv.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Highlights & Deliverables:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {srv.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b48528] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate(`/services/${srv.slug}`)}
                    className="px-5 py-2.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Explore {srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => navigate('/contact')}
                    className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
                  >
                    Request Proposal →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
