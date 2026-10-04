import React, { useState } from 'react';
import { COURSES, CourseDetail } from '../data/courses';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import {
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  Users,
  Award,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Video
} from 'lucide-react';

interface TrainingEventsPageProps {
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const TrainingEventsPage: React.FC<TrainingEventsPageProps> = ({ navigate, onOpenGiveaway }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'iso' | 'ziglar' | 'leadership'>('all');

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Executive Seminars & Certified Auditing
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Training & Events
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Exemplar Global (RABQSA) Certified Lead Auditor courses, ISO internal auditor bootcamps, and transformative Ziglar leadership seminars delivered virtually via WebEx or on-site at your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Lead Auditor Spotlight */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0e2038] text-white rounded-2xl p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">
                  Featured Exemplar Global Course
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                  Exemplar Global Certified Lead Auditor Training
                </h2>
                <p className="text-xs text-[#f4d388] font-medium">
                  ISO 9001:2015 · ISO 14001:2015 · IATF 16949:2016
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Presented by LEAD Group in association with Dekra / AQS Management Systems. A rigorous 4-day, instructor-led course that puts auditors on the path to international certification. Attendees can attend Days 1–3 for Internal Auditor Certificate or full Days 1–4 for Certified Lead Auditor credential.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37] mb-1" />
                    <span className="font-bold text-white block">Intensive Schedule</span>
                    <span className="text-slate-300">Mon–Thu, 7:30 AM – 7:00 PM</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <Laptop className="w-3.5 h-3.5 text-[#d4af37] mb-1" />
                    <span className="font-bold text-white block">Delivery Options</span>
                    <span className="text-slate-300">Remote via WebEx or On-Site</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <Award className="w-3.5 h-3.5 text-[#d4af37] mb-1" />
                    <span className="font-bold text-white block">Official Credentials</span>
                    <span className="text-slate-300">AU & TL Competency Exams</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => navigate('/training/lead-auditor')}
                  className="w-full py-3.5 bg-[#c89528] hover:bg-[#d8a436] text-[#0e2038] font-bold text-xs uppercase tracking-wider rounded text-center transition-colors cursor-pointer"
                >
                  View 4-Day Syllabus & Register
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded text-center transition-colors cursor-pointer border border-white/10"
                >
                  Inquire for On-Site Team Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Filter & Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Course Catalog
              </span>
              <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
                Available Seminars & Workshops
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/60 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setActiveCategory('iso')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === 'iso'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ISO & Auditing
              </button>
              <button
                onClick={() => setActiveCategory('ziglar')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === 'ziglar'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ziglar Seminars
              </button>
              <button
                onClick={() => setActiveCategory('leadership')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === 'leadership'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Leadership & Culture
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(`/training/${c.slug}`)}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="uppercase font-bold tracking-wider text-[#b48528]">
                      {c.category.toUpperCase()}
                    </span>
                    {c.duration && <span>{c.duration.split('(')[0]}</span>}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {c.subtitle}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {c.bullets.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b48528] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                  <span>View Full Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* "Watch Me Train" Multimedia Spotlight */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block">
                  Classroom Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0e2038] tracking-tight">
                  Watch Me Train: High Energy, Real Connection
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Attendees frequently comment: <em>"We don't even realize we're learning — then all of a sudden the day is over and we 'got it'!"</em>
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tami Damian transforms technical standards into interactive simulations, group process mapping, and memorable humor. Whether remote over WebEx or on your manufacturing plant floor, your team will be engaged from the first minute to the closing exam.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/training/watch-me-train')}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded cursor-pointer flex items-center gap-2"
                  >
                    <Video className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Explore Watch Me Train Gallery</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow aspect-[4/3]">
                  <img
                    src={ASSETS.tamiTraining}
                    alt="Tami Damian facilitating a training session"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation & Requirements Policy (Preserved from original) */}
          <div className="p-6 sm:p-8 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Training Logistics, Substitutions & Cancellation Policy
            </h4>
            <p>
              <strong>Substitutions & Cancellations:</strong> Substitutes are allowed as long as the substitute completes the necessary pre-course preparation. Cancellations must be made at least 3 weeks prior to the course start date with no charge. Cancellations made after 3 weeks prior to course start date may forfeit the entire course fee if the spot cannot be replaced.
            </p>
            <p>
              <strong>System Requirements for Remote Attendance:</strong> Operating System: Windows 7 and up, or macOS 10.13 and up. High-speed internet connection (min 2.5 Mbps download / 3.0 Mbps upload). Speakerphone or computer audio (VoIP headset recommended). For exam portions, each attendee is required to have a computer with a functioning webcam (or smartphone webcam).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
