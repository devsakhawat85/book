import React from 'react';
import { RoutePath } from '../utils/router';
import { COMPANY } from '../data/company';
import { ASSETS } from '../assets/assetMap';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Award, Heart } from 'lucide-react';

interface FooterProps {
  navigate: (to: string) => void;
  onOpenGiveaway?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenGiveaway }) => {
  return (
    <footer className="bg-[#09111e] text-slate-300 border-t border-slate-800">
      {/* Top Banner / Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-[#c89528] text-xs font-bold tracking-widest uppercase block mb-3">
              Leadership · Continual Improvement · Human Potential
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
              Ready to take your organization and people from{' '}
              <span className="italic text-[#f4d388]">success to significance?</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
              Whether implementing complex international ISO standards or transforming team culture through proven Ziglar principles, LEAD Group helps you move forward with clarity and measurable results.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-4 bg-white text-[#09111e] hover:bg-slate-100 font-semibold text-sm rounded shadow-lg transition-all flex items-center justify-between cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-blue-900" />
            </button>
            {onOpenGiveaway && (
              <button
                onClick={onOpenGiveaway}
                className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-[#d4af37] border border-slate-700/80 font-semibold text-xs rounded transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Request Free ISO / Ziglar Book</span>
                <Award className="w-4 h-4 text-[#d4af37]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 pr-4">
            <div className="mb-5 inline-block bg-white p-2.5 rounded-lg shadow-sm border border-slate-700">
              <img
                src={ASSETS.logo}
                alt="Leadership Education And Development Group, Inc. - LEAD Group"
                referrerPolicy="no-referrer"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Founded by Tami Damian, President & CEO. Helping individuals, corporate teams, and multinational manufacturers identify strengths, achieve international certification, and move forward.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c89528] shrink-0 mt-0.5" />
                <span>Centrally located in Lincoln, Nebraska · Available nationwide and internationally</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c89528] shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors tabular-nums font-semibold"
                >
                  {COMPANY.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c89528] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigate('/services/iso-training-consulting')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  ISO Training & Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/ziglar-training')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Ziglar Legacy Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/coaching')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Executive & Personal Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/life-lessons')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Life Lessons Learned Keynotes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/wellness')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Health & Wellness Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-[#c89528] hover:underline transition-colors text-left cursor-pointer font-medium pt-1 block"
                >
                  Services Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Training & Courses */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Programs & Courses
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigate('/training/lead-auditor')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Exemplar Global Lead Auditor
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/internal-auditor')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  3-Day Internal Auditor Course
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/goal-setting')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Goal Setting & Achievement
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/building-the-best-you')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Building the Best You!
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/building-winning-relationships')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Building Winning Relationships
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/power-of-who')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  The Power of WHO
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/two-chairs')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  2 Chairs Resilience
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/training/watch-me-train')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Watch Me Train
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Company */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Resources & About
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Tami Damian
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Books & Products (Free Shipping)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/clients')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Client Roster & Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Referral Reward Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 bg-[#060c14] py-6 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Leadership Education And Development Group, Inc. (LEAD Group). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
