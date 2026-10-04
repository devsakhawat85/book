import React from 'react';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { CheckCircle2, ArrowRight, Award, Quote, Sparkles, ChevronRight } from 'lucide-react';

interface ZiglarTrainingPageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const ZiglarTrainingPage: React.FC<ZiglarTrainingPageProps> = ({ navigate, onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              One of the First 26 in the World
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Ziglar Legacy Training
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Empowering corporate teams and individuals with character, attitude, and skill — the proven Zig Ziglar philosophy for balanced, sustainable success.
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
                The Ziglar Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                "You were Born to Win, but to be a winner, you must plan to win, prepare to win, and expect to win."
              </h2>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  "The Master of Motivation" Zig Ziglar has been described as "One of America’s Icons," "the salesman’s salesman," and a legacy that will forever impact our history. Helping people achieve long-term balanced success based on his philosophy of <strong>character, attitude, and skills</strong>, he impacted more than a quarter billion people worldwide.
                </p>
                <p>
                  As a best-selling author, Zig Ziglar wrote more than 32 sales and motivational books, 10 of which appeared on major best-seller lists translated into 36 different languages and dialects.
                </p>
                <p>
                  <strong>Tami Damian is one of the first 26 people in the world</strong> to be recognized as a Ziglar Legacy Certified Trainer by Ziglar, Inc. She is also a Ziglar Certified Coach. Tami has made it her personal and professional mission to teach the Ziglar Legacy as the most effective, balanced, and proven system for achieving true success in life.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Schedule Ziglar Training
                </button>
                <button
                  onClick={onOpenGiveaway}
                  className="text-xs font-semibold text-blue-900 hover:underline cursor-pointer"
                >
                  Request Ziglar Quote Book →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center">
                <img
                  src={ASSETS.ziglarBadge}
                  alt="Ziglar Legacy Certified Seal"
                  referrerPolicy="no-referrer"
                  className="w-40 h-auto mx-auto mb-6"
                />
                <Quote className="w-10 h-10 text-[#b48528] mx-auto mb-3 opacity-60" />
                <p className="text-base font-serif italic text-slate-800 leading-relaxed mb-4">
                  "This book will give you the inspiration and courage you need to be, do, and have all that life has to offer."
                </p>
                <div>
                  <span className="block text-sm font-bold text-slate-900">Tom Ziglar</span>
                  <span className="text-xs text-slate-500">CEO, Ziglar, Inc.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ziglar Program Catalog */}
          <div className="mb-12">
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Signature Programs
            </span>
            <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
              Ziglar Training Programs Delivered by Tami Damian
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Goal Setting & Achievement */}
            <div
              onClick={() => navigate('/training/goal-setting')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Goal Architecture
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  Goal Setting & Achievement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The dictionary says a goal is an aim or purpose. Learn the 4 reasons people fail to set goals, how to qualify your dreams, and the proven 7-step formula for guaranteed achievement.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View Course Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Building the Best You */}
            <div
              onClick={() => navigate('/training/building-the-best-you')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Attitude & Character
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  Building the Best You!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Is it possible to be happy, healthy, and prosperous? The answer is a resounding YES! Discover the stairway to success and how small, consistent action steps transform your life.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View Course Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Building Winning Relationships */}
            <div
              onClick={() => navigate('/training/building-winning-relationships')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Interpersonal Excellence
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  Building Winning Relationships
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  How well you get along with coworkers, managers, and family determines your ultimate success. Learn the 4 steps to build deep relationships, eliminate blame, and lead with service.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View Course Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* 2 Chairs */}
            <div
              onClick={() => navigate('/training/two-chairs')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Crisis Resilience
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  2 Chairs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  In this world you will have trouble — count on it! 2 Chairs asks three vital questions to help leaders walk courageously, faithfully, and cheerfully through unexpected trials.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View Course Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Power of WHO */}
            <div
              onClick={() => navigate('/training/power-of-who')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Strategic Relationships
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  The Power of WHO
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Traditional networking is not working! Based on Bob Beaudine’s philosophy, discover how 12 strategic relationships can unleash power beyond your imagination: "I'm Not Alone!"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View Course Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Ziglar Performance Planner */}
            <div
              onClick={() => navigate('/products')}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] block mb-2">
                  Daily Execution Tool
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  The Ziglar Performance Planner
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The key to success is directed ACTION. Use the official Performance Planner every day to maintain that discipline and stay on track to reach your goals. Special price: $49.95 with Free Shipping.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>Order Planner</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
