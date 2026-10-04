import React from 'react';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { CheckCircle2, ShieldCheck, ArrowRight, Award, Laptop, Users, FileText, ChevronRight } from 'lucide-react';

interface IsoTrainingPageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const IsoTrainingPage: React.FC<IsoTrainingPageProps> = ({ navigate, onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Exemplar Global (RABQSA) Auditing & Training
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              ISO Training & Consulting
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              High-impact management system consulting, certified lead auditor training, internal auditor courses, and automotive core tools implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                Continual Improvement Over Checkboxes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight">
                More Than Just a Certificate
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tami Damian has had the opportunity to work with hundreds of companies as they implement Quality, Environmental, and Occupational Health/Safety Management Systems. Tami is an acknowledged expert in <strong>integrating multiple management systems into one unified system</strong> — saving valuable time, resources, and administrative overhead.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Companies working with LEAD Group get far more than simply a wall certificate; they work on sustained continual improvement and can prove with solid operational statistics that implementing International Standards has helped make their good companies great.
              </p>

              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  Exemplar Global (RABQSA) Certified Quality Auditor
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ms. Damian provides pre-assessment audits, gap analysis audits, and outsourced internal auditing to ensure full compliance with ISO 9001, ISO 14001, IATF 16949, and related standards. Tami is also a Certified Enterprise Risk Manager (CERM) with updated certifications to all modern ISO standards.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src={ASSETS.isoConsulting}
                  alt="ISO Consulting and auditing in action"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-white border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-900 block">Exemplar Global Lead Auditor Training</span>
                  Presented in cooperation with Dekra / AQS Management Systems.
                </div>
              </div>
            </div>
          </div>

          {/* Research & Proven Advantages */}
          <div className="bg-[#0e2038] text-white rounded-2xl p-8 sm:p-12 mb-20 shadow-lg">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-1">
                Measurable ROI
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                Proven Business Advantages of ISO Certification
              </h3>
              <p className="text-xs text-slate-300 mt-2">
                According to the Providence Business News, implementing a robust ISO 9001 system delivers concrete competitive gains:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="font-bold text-white block mb-1">Operational Efficiency</span>
                <span className="text-slate-300">Creates a more standardized, effective, waste-free operation.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="font-bold text-white block mb-1">Customer Retention</span>
                <span className="text-slate-300">Significantly increases customer satisfaction and long-term loyalty.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="font-bold text-white block mb-1">Reduced Audit Costs</span>
                <span className="text-slate-300">Decreases external registrar and customer non-conformance findings.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="font-bold text-white block mb-1">Global Trade Access</span>
                <span className="text-slate-300">Qualifies suppliers for major automotive, aerospace, and medical bids.</span>
              </div>
            </div>
          </div>

          {/* Standards & Lead Auditor Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Lead Auditor Training Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#b48528] text-xs font-bold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>4-Day Intensive Certification</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Exemplar Global Lead Auditor Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Presented in cooperation with Dekra / AQS Management Systems. This week-long training meets all Exemplar Global (RABQSA) requirements to put an auditor on the direct path to becoming internationally certified.
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 w-24 shrink-0">Schedule:</span>
                    <span className="text-slate-600">Monday – Thursday, 7:30 AM – 7:00 PM (4-Day Course)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 w-24 shrink-0">Examinations:</span>
                    <span className="text-slate-600">Standard competency exams on Days 1 & 2; Auditing (AU) exam on Day 3; Leading Audit Teams (TL) exam on Day 4.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-900 w-24 shrink-0">Format:</span>
                    <span className="text-slate-600">Instructor-led Remote via WebEx or On-Site at your facility.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => navigate('/training/lead-auditor')}
                  className="w-full py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>View Full Lead Auditor Details & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c89528]" />
                </button>
              </div>
            </div>

            {/* Internal Auditor & Core Tools Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#b48528] text-xs font-bold uppercase tracking-wider mb-2">
                  <Users className="w-4 h-4" />
                  <span>Interactive Plant Workshops</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Internal Auditor & Core Tools Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  This 3-day course provides your audit team with foundational knowledge of the Standard, hands-on audit skills, and a practical understanding of process audits. Attendees consistently give this workshop an 'excellent' rating!
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Automotive Core Tools Training:</span>
                    <div className="grid grid-cols-2 gap-1.5 text-slate-600">
                      <span>• FMEA (Failure Mode & Effects)</span>
                      <span>• PPAP (Production Part Approval)</span>
                      <span>• APQP (Advanced Product Quality)</span>
                      <span>• Control Plans & Process Flow</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-900 block mb-1">Standard Scopes:</span>
                    <p className="text-slate-600">
                      ISO 9001, IATF 16949, ISO 13485, ISO 14001, ISO 45001, TL 9000, and AS 9100.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => navigate('/training/internal-auditor')}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Learn About Internal Auditor Workshop</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Ready to Upgrade or Certify Your Management System?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Connect directly with Tami Damian to schedule on-site consulting, gap analysis, or book seats for your audit team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer"
              >
                Request ISO Consultation
              </button>
              <button
                onClick={onOpenGiveaway}
                className="px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Claim Free ISO 9001 Guidebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
