import React from 'react';
import { CourseDetail, COURSES } from '../data/courses';
import { ContactForm } from '../components/ContactForm';
import { COMPANY } from '../data/company';
import { CheckCircle2, Calendar, Clock, Laptop, ArrowLeft, Award, Sparkles } from 'lucide-react';

interface CourseDetailPageProps {
  course: CourseDetail;
  navigate: (to: string) => void;
  onOpenGiveaway: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  navigate,
  onOpenGiveaway
}) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Top Breadcrumb & Nav */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button
            onClick={() => navigate('/training')}
            className="hover:text-blue-900 flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>All Training Programs</span>
          </button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{course.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#0a1626] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              {course.category === 'iso' ? 'Exemplar Global & ISO Auditing' : 'Ziglar Leadership Curriculum'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="mt-3 text-base text-slate-300 font-medium">
              {course.subtitle}
            </p>

            {course.duration && (
              <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{course.duration}</span>
                </div>
                {course.format && (
                  <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
                    <Laptop className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{course.format}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Syllabus & Core Bullets */}
            <div className="lg:col-span-7 space-y-8">
              {course.callout && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed font-medium">
                  {course.callout}
                </div>
              )}

              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  Course Overview & Philosophy
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
                  Curriculum & Topics Covered
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {course.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#b48528] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
                  Concrete Business Takeaways
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {course.takeaways.map((takeaway, i) => (
                    <div key={i} className="p-3.5 bg-slate-100 rounded-lg border border-slate-200 text-slate-800">
                      <strong>✓</strong> {takeaway}
                    </div>
                  ))}
                </div>
              </div>

              {course.requirements && (
                <div className="p-5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">
                    Required Tools & System Setup:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {course.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Instructor & Registration Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Instructor Card */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#b48528] uppercase tracking-wider block">
                      Lead Instructor
                    </span>
                    <h4 className="text-base font-serif font-bold text-slate-900">
                      Tami Damian, M.A.
                    </h4>
                    <p className="text-xs text-slate-500">
                      President & CEO, LEAD Group
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Exemplar Global Quality Auditor and one of the world's first 26 Ziglar Legacy Certified Trainers. Over 30 years management and 20 years ISO consulting experience.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-100 rounded text-xs text-slate-600 space-y-1">
                  <p><strong>Call Directly:</strong> {COMPANY.phoneFormatted}</p>
                  <p><strong>Direct Email:</strong> {COMPANY.email}</p>
                </div>
              </div>

              {/* Registration / Inquiry Box */}
              <ContactForm
                initialSubject={course.category === 'iso' ? 'iso-training' : 'ziglar-training'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
