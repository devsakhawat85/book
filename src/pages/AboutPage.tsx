import React from 'react';
import { COMPANY } from '../data/company';
import { ASSETS } from '../assets/assetMap';
import { CheckCircle2, Award, GraduationCap, HeartHandshake, BookOpen, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Leadership · Experience · Character
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              About Tami Damian & LEAD Group
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A 30-year journey of leadership, human empowerment, and international standards consulting — helping people and organizations move forward from success to significance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Photos & Snapshot */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src={ASSETS.tamiAbout}
                  alt="Tami Damian, President and CEO"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-white border-t border-slate-100">
                  <h3 className="font-serif font-bold text-slate-900 text-lg">
                    Tami Damian, M.A.
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    President & CEO, Leadership Education And Development Group, Inc.
                  </p>
                  <p className="text-xs text-[#b48528] font-semibold mt-1">
                    Lincoln, Nebraska
                  </p>
                </div>
              </div>

              {/* Second authentic portrait */}
              <div className="rounded-xl overflow-hidden shadow border border-slate-200 bg-white p-4">
                <img
                  src={ASSETS.tamiHome3}
                  alt="Tami Damian in professional executive setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded object-cover"
                />
                <p className="text-[11px] text-slate-500 italic mt-3 text-center">
                  "Life gives us the lessons; it's up to us to learn them."
                </p>
              </div>

              {/* Education Card */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <GraduationCap className="w-4 h-4 text-[#b48528]" />
                  <span>Academic Background</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {COMPANY.founder.degrees.map((deg, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b48528] shrink-0 mt-0.5" />
                      <span>{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Detailed Story & Credentials */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                  The Founder's Journey
                </span>
                <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
                  Finding Purpose, Challenging Strengths, Moving Forward
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  Storyteller, teacher, trainer, author, advocate, friend, sister, aunt, wife, and daughter all describe <strong>Tami Damian</strong>, President of Leadership Education And Development Group, Inc. (LEAD Group). Ms. Damian's passion is helping others find their passion and purpose.
                </p>
                <p>
                  Tami has an intuitive way of seeing the hidden strengths in others, and then challenging them to utilize and further develop those strengths. She also speaks passionately for those that have not yet found or perhaps have lost their voice. She is a recognized difference maker in her community, volunteering for the United Way and local non-profits.
                </p>
                <p>
                  Ms. Damian is honored to work with major international manufacturing companies, developing their workforce as they implement quality, environmental, and occupational health and safety international standards. She is well respected for delighting audiences with humor and presenting in a clear, easy-to-understand style, making potentially boring subject matter fun and deeply memorable.
                </p>
                <p>
                  Tami has become <strong>one of the first 26 in the world</strong> to be recognized as a Ziglar Legacy Certified Trainer, with Ziglar, Inc. She is also a Ziglar Certified Coach. In her signature <em>Life Lessons Learned</em> series, Tami says: <em>"Life gives us the lessons; it's up to us to learn them."</em>
                </p>
                <p>
                  As a nationally certified trainer for Active Parenting Publishing since 1990, Tami has trained hundreds of parents as well as facilitators. She is an aunt to 9 nieces and nephews, a great-aunt to 25, and has 8 great-greats! She is also a Certified Workplace Trainer for Dave Ramsey's Financial Peace at Work program, helping companies provide a solution-based program that changes employees' lives.
                </p>
              </div>

              {/* Full Credentials Box */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#b48528]" />
                  <span>Professional Credentials & Certifications</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {COMPANY.founder.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community & Authorship */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl border border-slate-200">
                  <HeartHandshake className="w-5 h-5 text-[#b48528] mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Civic & Board Leadership
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sits on the Board of Trustees for the Lincoln Community Foundation; active community volunteer for United Way, Lincoln Parks Foundation, and numerous local non-profits.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-200">
                  <BookOpen className="w-5 h-5 text-[#b48528] mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Published Author
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Writings published across 4 major anthologies, with 2 titles attaining Amazon #1 International Bestseller status.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Connect With Tami Damian</span>
                  <ArrowRight className="w-4 h-4 text-[#c89528]" />
                </button>
                <button
                  onClick={onOpenGiveaway}
                  className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
                >
                  Claim Complimentary Executive Resource Book →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
