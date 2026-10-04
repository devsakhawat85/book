import React from 'react';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import { Heart, Activity, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface WellnessPageProps {
  navigate: (to: string) => void;
}

export const WellnessPage: React.FC<WellnessPageProps> = ({ navigate }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Whole-Person Vitality & Executive Endurance
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Health, Fitness & Wellness Coaching
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Healthy leaders build healthy organizations. Empowering professionals to reclaim physical vitality, simplified nutrition, and lifelong energy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                Coach Tami Damian's Journey
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                "Life is for LIVING! Let’s Travel Together."
              </h2>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  I'm a very active, fun-loving woman who believes that life is for LIVING! I love to hike, white-water raft, and tackle many other outdoor challenges. The thing is — I started getting slower, had injuries, and sometimes just wasn't having fun.
                </p>
                <p>
                  Beachbody and structured functional fitness became part of my journey to get back to healthy and active without reserve. My reason for doing this? To continue writing my life story as fun living! My reason to work with you? <strong>To be part of your success journey!</strong>
                </p>
                <p>
                  After 17 years at the same gym, I quit! I now work out using structured fitness programs at home with incredible results. I would love to have you join our fitness and wellness community.
                </p>
              </div>

              {/* Shakeology Callout (Preserved from original) */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#b48528]" />
                  <span>Daily Nutrition: Shakeology Experience</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "I use Shakeology each day! This is the ultra-premium nutrition shake that allows me to simplify my nutrition needs for healthy weight management, optimize my feeling of well-being, support my immune health, and dramatically increase my daily energy. I would love to share a sample of this or discuss my success with you."
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.BeachBodyCoach.com/CoachTamiD"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-6 py-3.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <span>Visit CoachTamiD Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#c89528]" />
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
                >
                  Contact Tami for a Sample & Guidance →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src={ASSETS.beachBodyTeam}
                  alt="Coach Tami Damian and fitness team"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600 text-center">
                  Independent Beachbody Online Fitness Coach · Team Energy
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Health & Wellness Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0e2038] tracking-tight">
                Connect with Coach Tami Damian
              </h2>
            </div>
            <ContactForm initialSubject="wellness" />
          </div>
        </div>
      </section>
    </div>
  );
};
