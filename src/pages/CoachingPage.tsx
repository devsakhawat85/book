import React from 'react';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import { CheckCircle2, Award, ArrowRight, Star, Quote, Sparkles } from 'lucide-react';

interface CoachingPageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({ navigate, onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              From Success to Significance
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Ziglar Legacy Coaching & Executive Mentorship
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Tailored, high-impact executive coaching for established leaders, entrepreneurs, and achievers seeking enduring legacy, clarity, and balanced success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                The Live to Win System
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                Long-Term, Sustainable Success Requires a Sequence
              </h2>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Anyone can achieve success in all areas of life. The <strong>Live to Win Coaching Program</strong> empowers YOU with the tools to make it happen quickly — helping you be happier, healthier, more prosperous, more secure, and to have deeper relationships, peace of mind, and hope in the future.
                </p>
                <p>
                  It is not enough to simply "do what successful people do." There is a sequence — a proven system — that must be followed in the proper order. If you have ever enjoyed periods in your life of greater achievement and happiness, only to be derailed and fall back into disappointments and unrealized dreams, you know that something was missing.
                </p>
                <p>
                  The Live to Win program builds sustainable success by:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b48528] shrink-0 mt-1" />
                    <span><strong>Creating Hope:</strong> Renewing vision when obstacles feel insurmountable.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b48528] shrink-0 mt-1" />
                    <span><strong>Unleashing Creativity:</strong> Overcoming blind spots and strategic plateaus.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b48528] shrink-0 mt-1" />
                    <span><strong>Empowering with Proven Tools:</strong> A battle-tested structure that works.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <img
                  src={ASSETS.coachingHero}
                  alt="Coaching and leadership excellence"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg mb-6 shadow-xs"
                />
                <h4 className="font-serif font-bold text-slate-900 text-lg mb-2">
                  Building the Best You Coaching
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Proven Success, Proven Significance. Customized one-on-one executive cadence with Tami Damian.
                </p>
              </div>
            </div>
          </div>

          {/* Why Great Achievers Use Coaches Box */}
          <div className="bg-[#0e2038] text-white rounded-2xl p-8 sm:p-12 mb-20 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">
                The Coach's Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                Because Even the Greatest Have Coaches
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                What did <strong>Michael Jordan</strong>, <strong>Barbra Streisand</strong>, and <strong>Ronald Reagan</strong> all have in common? They all used coaches. Even in the prime of their careers and their greatest achievements, great achievers continue to benefit from using coaches.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                As a Ziglar Legacy Certified Trainer and Ziglar Certified Coach, Ms. Damian provides customized, exclusive coaching. As an established success, your needs and responsibilities require specific, strategic coaching in order to get the MOST out of all areas of life. Tami’s more than 25 years of helping others succeed will provide you unmatched business and coaching experience in order to move you smoothly from success to significance. Utilizing Coaching allows you to create and establish your very own <strong>Enduring Legacy</strong>.
              </p>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Begin Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0e2038] tracking-tight">
                Request Information on Ziglar Executive Coaching
              </h2>
            </div>

            <ContactForm initialSubject="executive-coaching" />
          </div>
        </div>
      </section>
    </div>
  );
};
