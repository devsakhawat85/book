import React, { useState, useEffect } from 'react';
import { RoutePath } from '../utils/router';
import { COMPANY } from '../data/company';
import { ASSETS } from '../assets/assetMap';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: RoutePath;
  navigate: (to: string) => void;
  onOpenGiveaway?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, onOpenGiveaway }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setTrainingOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top utility contact ticker - quiet & authoritative */}
      <div className="bg-[#0b1523] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b48528]" />
              <span className="tabular-nums font-medium">{COMPANY.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#b48528]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline text-[11px] uppercase tracking-wider text-slate-400">
              Lincoln, Nebraska · Nationwide & International Service
            </span>
            {onOpenGiveaway && (
              <button
                onClick={onOpenGiveaway}
                className="text-[#d4af37] hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Free Gift: ISO & Ziglar Resources</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Authentic LEAD Group Brand Logo - High Definition & Scaled */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded cursor-pointer transition-transform hover:opacity-95 py-1"
            aria-label="LEAD Group - Return to Home"
          >
            <img
              src={ASSETS.logo}
              alt="Leadership Education And Development Group, Inc. - LEAD Group"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all"
            />
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-700">
            <button
              onClick={() => handleNav('/about')}
              className={`hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                isActive('/about') ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => handleNav('/services')}
                className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                  isActive('/services') ? 'text-blue-900 font-semibold' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('/services/iso-training-consulting')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">ISO Training & Consulting</span>
                    <span className="text-[11px] text-slate-500">ISO 9001, IATF 16949, 14001, 45001 & Lead Auditor</span>
                  </button>
                  <button
                    onClick={() => handleNav('/services/ziglar-training')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Ziglar Legacy Training</span>
                    <span className="text-[11px] text-slate-500">Goal setting, personal excellence & Born to Win</span>
                  </button>
                  <button
                    onClick={() => handleNav('/services/coaching')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Executive & Personal Coaching</span>
                    <span className="text-[11px] text-slate-500">Live to Win sequential success framework</span>
                  </button>
                  <button
                    onClick={() => handleNav('/services/life-lessons')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Life Lessons Learned Keynotes</span>
                    <span className="text-[11px] text-slate-500">Moving Messages with international photography</span>
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={() => handleNav('/services')}
                    className="w-full text-left px-4 py-1.5 text-[11px] font-semibold text-blue-800 hover:text-blue-950 cursor-pointer"
                  >
                    View All 6 Services →
                  </button>
                </div>
              )}
            </div>

            {/* Training Seminars Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTrainingOpen(true)}
              onMouseLeave={() => setTrainingOpen(false)}
            >
              <button
                onClick={() => handleNav('/training')}
                className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                  isActive('/training') ? 'text-blue-900 font-semibold' : ''
                }`}
              >
                <span>Training</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {trainingOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('/training/lead-auditor')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Exemplar Global Lead Auditor</span>
                    <span className="text-[11px] text-slate-500">4-Day certified intensive (ISO 9001/14001/IATF)</span>
                  </button>
                  <button
                    onClick={() => handleNav('/training/goal-setting')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Goal Setting & Achievement</span>
                    <span className="text-[11px] text-slate-500">7-step formula for targeted progress</span>
                  </button>
                  <button
                    onClick={() => handleNav('/training/building-the-best-you')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">Building the Best You!</span>
                    <span className="text-[11px] text-slate-500">Attitude, character & stairway to success</span>
                  </button>
                  <button
                    onClick={() => handleNav('/training/power-of-who')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-medium text-slate-800 flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900">The Power of WHO</span>
                    <span className="text-[11px] text-slate-500">Strategic relationships beyond networking</span>
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={() => handleNav('/training')}
                    className="w-full text-left px-4 py-1.5 text-[11px] font-semibold text-blue-800 hover:text-blue-950 cursor-pointer"
                  >
                    View All Training & Events →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/products')}
              className={`hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                isActive('/products') ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              Books & Resources
            </button>

            <button
              onClick={() => handleNav('/clients')}
              className={`hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                isActive('/clients') ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              Clients & Stories
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className={`hover:text-blue-900 transition-colors py-1 cursor-pointer ${
                isActive('/contact') ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('/contact')}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0e2038] hover:bg-[#1a365d] active:scale-[0.99] rounded transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Work With LEAD
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[105px] z-40 bg-white/98 backdrop-blur-lg lg:hidden flex flex-col p-6 overflow-y-auto border-t border-slate-200 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
            <button
              onClick={() => handleNav('/')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('/about')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              About Tami Damian & LEAD Group
            </button>

            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Services
              </span>
              <div className="pl-3 flex flex-col gap-2.5 text-sm font-medium text-slate-700">
                <button
                  onClick={() => handleNav('/services/iso-training-consulting')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  ISO Training & Consulting
                </button>
                <button
                  onClick={() => handleNav('/services/ziglar-training')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Ziglar Legacy Training
                </button>
                <button
                  onClick={() => handleNav('/services/coaching')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Executive & Personal Coaching
                </button>
                <button
                  onClick={() => handleNav('/services/life-lessons')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Life Lessons Learned Keynotes
                </button>
                <button
                  onClick={() => handleNav('/services')}
                  className="text-left text-blue-900 font-semibold cursor-pointer pt-1"
                >
                  All Services Overview →
                </button>
              </div>
            </div>

            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Training Programs
              </span>
              <div className="pl-3 flex flex-col gap-2.5 text-sm font-medium text-slate-700">
                <button
                  onClick={() => handleNav('/training/lead-auditor')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Exemplar Global Lead Auditor (4-Day)
                </button>
                <button
                  onClick={() => handleNav('/training/goal-setting')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Goal Setting & Achievement
                </button>
                <button
                  onClick={() => handleNav('/training/building-the-best-you')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  Building the Best You!
                </button>
                <button
                  onClick={() => handleNav('/training/power-of-who')}
                  className="text-left hover:text-blue-900 cursor-pointer"
                >
                  The Power of WHO
                </button>
                <button
                  onClick={() => handleNav('/training')}
                  className="text-left text-blue-900 font-semibold cursor-pointer pt-1"
                >
                  Full Training Catalog & Schedule →
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav('/products')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              Books & Resources Store
            </button>
            <button
              onClick={() => handleNav('/clients')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              Clients & Testimonials
            </button>
            <button
              onClick={() => handleNav('/wellness')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              Whole-Person Wellness & Coaching
            </button>
            <button
              onClick={() => handleNav('/contact')}
              className="text-left py-2.5 border-b border-slate-100 hover:text-blue-900 cursor-pointer"
            >
              Contact & Directions
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => handleNav('/contact')}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0e2038] rounded-md shadow"
            >
              Work With LEAD Group
            </button>
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>Call Tami: {COMPANY.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
