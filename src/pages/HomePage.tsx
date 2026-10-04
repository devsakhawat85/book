import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { PRODUCTS, ProductItem } from '../data/products';
import { COURSES } from '../data/courses';
import { TESTIMONIALS, CLIENT_LOGOS_LIST } from '../data/testimonials';
import { ASSETS } from '../assets/assetMap';
import { ContactForm } from '../components/ContactForm';
import {
  ArrowRight,
  CheckCircle2,
  Award,
  BookOpen,
  Users,
  Compass,
  ChevronRight,
  ShieldCheck,
  Star,
  Quote,
  Sparkles,
  PhoneCall,
  Calendar,
  Layers,
  TrendingUp,
  MapPin,
  ExternalLink,
  Truck
} from 'lucide-react';

interface HomePageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
  onSelectProduct: (p: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onOpenGiveaway,
  onSelectProduct
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const featuredCourses = COURSES.slice(0, 4);
  const featuredBooks = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-[#fafaf8]">
      {/* ========================================================
          SECTION 01: HERO
          Cinematic, authoritative, authentic photography
      ======================================================== */}
      <section className="relative overflow-hidden bg-[#0a1626] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Subtle geometric grid background accent */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-[11px] font-semibold text-[#d4af37] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Leadership · ISO Consulting · Ziglar Legacy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-white">
                Lead with purpose.{' '}
                <span className="italic font-normal text-[#f4d388] block mt-1">
                  Move forward.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                Transforming manufacturing organizations and corporate teams through world-class ISO Management Systems, certified lead auditor training, and authentic Ziglar personal development.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-4 bg-[#c89528] hover:bg-[#d8a436] text-[#0a1626] font-bold text-xs tracking-wider uppercase rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Work With LEAD</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="px-6 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-xs tracking-wide rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                <div>
                  <span className="block font-bold text-white text-sm">30+ Years</span>
                  <span>Management Experience</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">20+ Years</span>
                  <span>ISO System Consulting</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">#1 of 26</span>
                  <span>Ziglar World Cohort</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Photography of Tami Damian */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative gold hairline frame */}
                <div className="absolute -inset-3 border border-[#b48528]/30 rounded-2xl transform translate-x-2 translate-y-2 pointer-events-none"></div>

                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-2xl aspect-[3/4]">
                  <img
                    src={ASSETS.tamiHero}
                    alt="Tami Damian, President and CEO of Leadership Education And Development Group, Inc."
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle contrast gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-transparent to-transparent opacity-80"></div>

                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-0.5">
                      President & CEO
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      Tami Damian, M.A.
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Exemplar Global (RABQSA) Auditor · Ziglar Legacy Certified Trainer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: TRUST & CREDIBILITY
          Supported strictly by authentic facts
      ======================================================== */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Proven Authority & Credentials
            </span>
            <p className="text-slate-600 text-sm">
              Rooted in three decades of real-world executive management, ISO compliance auditing, and international speaker certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-100 text-center">
              <span className="block text-3xl font-serif font-bold text-[#0e2038] mb-1">
                30+
              </span>
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Years Management
              </span>
              <p className="text-[11px] text-slate-500">
                Higher education, non-profit sector & heavy manufacturing
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-100 text-center">
              <span className="block text-3xl font-serif font-bold text-[#0e2038] mb-1">
                20+
              </span>
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Years ISO Consulting
              </span>
              <p className="text-[11px] text-slate-500">
                Exemplar Global (RABQSA) Lead Auditor & CERM Risk Manager
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-100 text-center">
              <span className="block text-3xl font-serif font-bold text-[#0e2038] mb-1">
                First 26
              </span>
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                In The World
              </span>
              <p className="text-[11px] text-slate-500">
                Pioneering Ziglar Legacy Certified Trainer & Certified Coach
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-100 text-center">
              <span className="block text-3xl font-serif font-bold text-[#0e2038] mb-1">
                2x #1
              </span>
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Amazon Bestseller
              </span>
              <p className="text-[11px] text-slate-500">
                Published author in 4 leadership & resilience volumes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: INTRODUCTION TO LEAD GROUP
          Split-screen editorial layout
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Statement & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                The LEAD Group Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                Don’t let the enthusiasm fool you;{' '}
                <span className="italic font-normal text-slate-700">
                  Tami Damian is an analytical, strategic thinker.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tami Damian started The LEAD Group due to her passion for personal and professional growth. This includes helping people identify and meet their personal, financial, fitness, educational, and professional goals. Her passion for helping individuals moves naturally to the workplace, knowing that <strong>healthy individuals create healthy workplaces</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a management business consultant for more than 20 years, Tami has assisted hundreds of companies in achieving international certification to quality, environmental, and safety standards. With more than 30+ years of management experience, Tami has always been the "go to" person for colleagues and clients when a complex issue requires practical resolution or an opportunity presents itself for continual improvement.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => navigate('/about')}
                  className="px-6 py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Meet Tami Damian</span>
                  <ArrowRight className="w-4 h-4 text-[#c89528]" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-xs font-semibold text-slate-800 hover:text-blue-900 underline underline-offset-4 cursor-pointer"
                >
                  Direct Contact Information →
                </button>
              </div>
            </div>

            {/* Right: Authentic Photograph & Editorial Lockup */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src={ASSETS.tamiAbout}
                    alt="Tami Damian, CEO of Leadership Education And Development Group, Inc."
                    referrerPolicy="no-referrer"
                    className="w-full h-[460px] object-cover object-top"
                  />
                  <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-slate-900 text-base">
                        Tami Damian, M.A.
                      </h4>
                      <p className="text-xs text-slate-500">
                        President & CEO · LEAD Group, Inc.
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <span>Lincoln, NE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: WHAT WE DO
          The 6 Service Pillars (Asymmetric bento layout)
      ======================================================== */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Our Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight">
                What We Do
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              A comprehensive spectrum of professional development, international compliance auditing, and personal growth programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                onClick={() => navigate(`/services/${srv.slug}`)}
                className="group relative bg-[#fafaf8] hover:bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#b48528] tracking-wider">
                      {srv.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-900 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    {srv.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                        <CheckCircle2 className="w-3 h-3 text-[#b48528] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-blue-900">
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: ISO EXPERTISE & CONTINUAL IMPROVEMENT
          Technical, authoritative, standards-focused
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#0a1626] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">
                Exemplar Global (RABQSA) Auditing & Consulting
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-tight text-white">
                More than certification —{' '}
                <span className="italic text-[#f4d388] font-normal">continual improvement.</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tami has guided hundreds of organizations through Quality, Environmental, and Health/Safety Management System implementations. Her special expertise lies in <strong>integrating multiple management systems into a single streamlined manual</strong> — saving time, resources, and operational expense.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-xl p-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Proven Business Advantages of ISO 9001:
              </h4>
              <p className="text-[11px] text-slate-400 italic mb-4">
                According to the Providence Business News, certified organizations realize:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Create efficient operations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Higher customer retention</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Reduce audit findings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Enhanced marketing power</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Promote international trade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Reduce waste & raise profit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standards & Syllabi Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                Standards Mastered
              </span>
              <h3 className="text-lg font-serif font-bold text-white mb-3">
                International Standards
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• ISO 9001 (Quality Management)</li>
                <li>• IATF 16949 (Automotive Standard)</li>
                <li>• ISO 14001 (Environmental Systems)</li>
                <li>• ISO 45001 (Occupational Health & Safety)</li>
                <li>• ISO 13485 (Medical Devices)</li>
                <li>• TL 9000 (Telecommunications)</li>
                <li>• AS 9100 (Aerospace Quality)</li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                Auditor Certification
              </span>
              <h3 className="text-lg font-serif font-bold text-white mb-3">
                Lead Auditor Courses
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                4-Day Exemplar Global (RABQSA) Certified Lead Auditor Training presented in association with Dekra / AQS Management Systems. Includes AU and TL competency exams.
              </p>
              <button
                onClick={() => navigate('/training/lead-auditor')}
                className="text-xs font-semibold text-[#f4d388] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>View 4-Day Syllabus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-2">
                Interactive Workshops
              </span>
              <h3 className="text-lg font-serif font-bold text-white mb-3">
                Internal Auditor & Core Tools
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                3-Day Internal Auditor workshop and Automotive Core Tools training (FMEA, PPAP, APQP, Control Plans) that turns dry technical specs into lively, practical capability.
              </p>
              <button
                onClick={() => navigate('/services/iso-training-consulting')}
                className="text-xs font-semibold text-[#f4d388] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Explore ISO Consulting</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: ZIGLAR TRAINING & COACHING
          Real philosophy, Tom Ziglar endorsement
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md">
                <img
                  src={ASSETS.ziglarBadge}
                  alt="Ziglar Legacy Certified Trainer"
                  referrerPolicy="no-referrer"
                  className="w-32 h-auto mb-6"
                />
                <Quote className="w-8 h-8 text-[#b48528] mb-3 opacity-60" />
                <p className="text-sm font-serif italic text-slate-700 leading-relaxed mb-4">
                  "This book will give you the inspiration and courage you need to be, do, and have all that life has to offer."
                </p>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Tom Ziglar</span>
                  <span className="text-[11px] text-slate-500">CEO, Ziglar, Inc.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                One of the First 26 in the World
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                Ziglar Legacy Certified Training & Coaching
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                "The Master of Motivation" Zig Ziglar touched more than 250 million lives worldwide. As one of the first 26 people recognized globally by Ziglar, Inc. as a Ziglar Legacy Certified Trainer, Tami Damian is committed to imparting this balanced philosophy of character, attitude, and skill.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div
                  onClick={() => navigate('/training/goal-setting')}
                  className="p-3 bg-white border border-slate-200 rounded hover:border-slate-400 cursor-pointer transition-colors"
                >
                  <strong className="block text-slate-900">Goal Setting & Achievement</strong>
                  <span className="text-[11px] text-slate-500">The 7-step formula for targeted progress</span>
                </div>
                <div
                  onClick={() => navigate('/training/building-the-best-you')}
                  className="p-3 bg-white border border-slate-200 rounded hover:border-slate-400 cursor-pointer transition-colors"
                >
                  <strong className="block text-slate-900">Building the Best You!</strong>
                  <span className="text-[11px] text-slate-500">Stairway to success & positive attitude</span>
                </div>
                <div
                  onClick={() => navigate('/training/building-winning-relationships')}
                  className="p-3 bg-white border border-slate-200 rounded hover:border-slate-400 cursor-pointer transition-colors"
                >
                  <strong className="block text-slate-900">Building Winning Relationships</strong>
                  <span className="text-[11px] text-slate-500">4 pillars to transform workplace teams</span>
                </div>
                <div
                  onClick={() => navigate('/training/power-of-who')}
                  className="p-3 bg-white border border-slate-200 rounded hover:border-slate-400 cursor-pointer transition-colors"
                >
                  <strong className="block text-slate-900">The Power of WHO</strong>
                  <span className="text-[11px] text-slate-500">Bob Beaudine’s 12-3-1 relationship system</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/services/ziglar-training')}
                  className="px-6 py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Ziglar Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#c89528]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07: FOUNDER PROFILE (TAMI DAMIAN)
      ======================================================== */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/5]">
                <img
                  src={ASSETS.tamiContact}
                  alt="Tami Damian, President and CEO of LEAD Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                Executive Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight">
                Tami Damian, M.A.
              </h2>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                President & CEO · Leadership Education And Development Group, Inc.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Storyteller, teacher, trainer, author, advocate, friend, sister, aunt, wife, and daughter all describe Tami Damian. Ms. Damian’s passion is helping others find their passion and purpose. Tami has a way of seeing the strengths in others, and then challenging them to utilize and further develop their strengths. She also speaks for those who have not yet found or have lost their voice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded text-xs">
                  <span className="font-bold text-slate-900 block mb-0.5">Education:</span>
                  <span className="text-slate-600">
                    M.A. in Management (Leadership) — Doane College
                    <br />
                    B.S. in Sociology / Org Comm — Kearney State College
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded text-xs">
                  <span className="font-bold text-slate-900 block mb-0.5">Community Leadership:</span>
                  <span className="text-slate-600">
                    Board of Trustees, Lincoln Community Foundation
                    <br />
                    Volunteer, United Way & Lincoln Parks Foundation
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/about')}
                  className="text-xs font-semibold text-blue-900 hover:text-blue-950 flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                >
                  <span>Read Complete Biography & Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: FEATURED TRAINING & EVENTS
      ======================================================== */}
      <section className="py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Curriculum & Seminars
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight">
                Featured Training Programs
              </h2>
            </div>
            <button
              onClick={() => navigate('/training')}
              className="text-xs font-semibold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer self-start md:self-auto"
            >
              <span>View All Programs & Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(`/training/${c.slug}`)}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-[#b48528]">
                      {c.category === 'iso' ? 'ISO Compliance' : 'Ziglar Leadership'}
                    </span>
                    {c.duration && <span>{c.duration.split('(')[0]}</span>}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {c.subtitle}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    {c.bullets.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                  <span>Course Details & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: BOOKS & RESOURCES
          Real book covers, prices, BOGO deal
      ======================================================== */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Published Works & Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight mb-3">
              Books & Performance Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Authored and co-authored by Tami Damian and the Founding Class of Ziglar Trainers.
              <span className="font-semibold text-emerald-700 block mt-1">
                * Free Shipping on all books!
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((b) => (
              <div
                key={b.id}
                className="bg-[#fafaf8] rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="h-56 rounded-lg bg-white p-3 border border-slate-200/80 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {b.dealTag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-1">
                      {b.dealTag}
                    </span>
                  )}

                  <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-1">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                    {b.subtitle}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 mb-3">
                    <span className="text-base font-bold text-slate-900">{b.price}</span>
                    <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Free Shipping
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(b)}
                    className="w-full py-2 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wide transition-colors cursor-pointer"
                  >
                    Order / Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/products')}
              className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
            >
              Browse Complete Bookstore & BOGO Specials →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10: REAL TESTIMONIALS & CLIENTS
          Authentic quotes & corporate roster
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Real Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight">
              What People Say About Tami Damian
            </h2>
          </div>

          {/* Featured Spotlight Quote */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-16 relative">
            <Quote className="w-12 h-12 text-[#b48528]/20 absolute top-6 right-6" />
            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed mb-6">
                "{TESTIMONIALS[activeTestimonialIdx].quote}"
              </p>

              <div>
                <span className="block text-sm font-bold text-slate-900">
                  {TESTIMONIALS[activeTestimonialIdx].author}
                </span>
                <span className="text-xs text-slate-500">
                  {TESTIMONIALS[activeTestimonialIdx].role && `${TESTIMONIALS[activeTestimonialIdx].role}, `}
                  {TESTIMONIALS[activeTestimonialIdx].company && `${TESTIMONIALS[activeTestimonialIdx].company} · `}
                  {TESTIMONIALS[activeTestimonialIdx].location}
                </span>
              </div>
            </div>

            {/* Testimonial Nav Dots */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-100">
              {TESTIMONIALS.slice(0, 6).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonialIdx(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === i ? 'w-8 bg-[#0e2038]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
              <span className="text-xs text-slate-400 ml-4 font-mono">
                {activeTestimonialIdx + 1} / 6
              </span>
            </div>
          </div>

          {/* Client Roster Strip */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">
              Organizations Trained & Consulted by LEAD Group
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
              {CLIENT_LOGOS_LIST.slice(0, 18).map((client, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  {client}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => navigate('/clients')}
                className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
              >
                View Full List of 35+ Corporate & Community Clients →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: "MOVE FORWARD" PHILOSOPHY & CLOSING CTA
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#0e2038] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">
            Our Core Positioning
          </span>

          <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
            "Move Forward."
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Sustainable success is not an accident — it requires a sequence. From developing resilient leaders to standardizing defect-free manufacturing, LEAD Group empowers you with the systems, tools, and hope to move forward with absolute confidence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#c89528] hover:bg-[#d8a436] text-[#0e2038] font-bold text-xs uppercase tracking-wider rounded shadow-lg transition-all cursor-pointer"
            >
              Let’s Move Forward
            </button>
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wide rounded transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#d4af37]" />
              <span>Talk With Tami: {COMPANY.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12: INTERACTIVE CONTACT & FREE GIVEAWAY
      ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                Connect Directly
              </span>
              <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
                Let's Talk About What You Need
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need a full ISO 9001 implementation, Exemplar Global Lead Auditor training, executive coaching, or a keynote presentation, Tami Damian is ready to discuss your goals.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
                    className="text-lg font-serif font-bold text-[#0e2038] hover:text-blue-900 transition-colors"
                  >
                    {COMPANY.phoneFormatted}
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-base font-semibold text-[#0e2038] hover:text-blue-900 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Headquarters
                  </span>
                  <p className="text-xs text-slate-700">
                    Lincoln, Nebraska · Easily accessible nationwide and internationally.
                  </p>
                </div>
              </div>

              {/* Referral program callout */}
              <div className="p-5 rounded-lg bg-amber-50 border border-amber-200/80">
                <span className="text-xs font-bold text-amber-900 block mb-1">
                  Referral Reward Program
                </span>
                <p className="text-xs text-amber-800 leading-relaxed mb-2">
                  {COMPANY.referralProgram.description}
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-xs font-bold text-amber-900 underline cursor-pointer"
                >
                  Learn About Referral Terms →
                </button>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
