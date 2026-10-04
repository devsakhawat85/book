import React from 'react';
import { ASSETS } from '../assets/assetMap';
import { COMPANY } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import { CheckCircle2, Camera, Compass, Sparkles, ArrowRight } from 'lucide-react';

interface LifeLessonsPageProps {
  navigate: (to: string) => void;
}

export const LifeLessonsPage: React.FC<LifeLessonsPageProps> = ({ navigate }) => {
  const presentations = [
    {
      title: "Moving Messages: Life Lessons Learned",
      desc: "Lively, reflective keynotes challenging audiences to discover profound principles in everyday occurrences, illustrated by international expedition photographs."
    },
    {
      title: "Attitude Affects Your Altitude",
      desc: "How mindset choices govern career progression, resilience during corporate restructuring, and personal fulfillment."
    },
    {
      title: "Communication in the Workplace: Gender & Intergenerational",
      desc: "Bridging the gap between 4 generations in the modern workforce and de-escalating stylistic friction."
    },
    {
      title: "Working With Difficult People",
      desc: "De-personalizing conflict, neutralizing toxic behaviors, and maintaining poise under pressure."
    },
    {
      title: "How to Get People to Trust You",
      desc: "The mechanics of credibility, consistency, and vulnerability that forge unbreakable team trust."
    },
    {
      title: "Resisting Change – Why Do They Do That?",
      desc: "The psychological roots of change resistance and practical leadership tools to guide teams through transition."
    },
    {
      title: "The Value of Performance Reviews",
      desc: "Transforming dreaded annual reviews into collaborative development dialogues that inspire peak performance."
    },
    {
      title: "Leadership Lessons from Santa's Workshop",
      desc: "A fun-filled, humorous, yet insightful holiday or retreat presentation on supply chain, motivation, and teamwork."
    },
    {
      title: "Active Parenting™ for Teens – Training of Trainers",
      desc: "Nationally certified facilitator training (certified since 1990) for community leaders, HR leaders, and educators."
    }
  ];

  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Keynotes & Moving Messages
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Life Lessons Learned
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Humorous, deeply human keynote presentations adapted to conventions and retreats, illustrated with international travel photography taken from Tami Damian's expeditions.
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
                Moving Messages Series
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0e2038] tracking-tight leading-tight">
                "Life Gives Us the Lessons; It’s Up to Us to Learn Them."
              </h2>
              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  We offer <strong>Moving Messages</strong> tailored to your small group, corporate retreat, or major convention! These lively presentations challenge participants to see lessons in daily living. We may talk about Life Lessons Learned while preparing for a grueling Grand Canyon Hike, white water rafting, or perhaps what we learned during a simple day at the swimming pool.
                </p>
                <p>
                  The presentations are custom-adapted to your industry and audience, and are usually accompanied by internationally renowned photographs taken during Tami's travels around the globe.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Book Tami for Your Event
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow border border-slate-200 bg-white">
                <img
                  src={ASSETS.lifeLessons1}
                  alt="Scenic expedition travel photography"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-[11px] text-slate-500 text-center font-medium">
                  Grand Canyon & High Country Expeditions
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow border border-slate-200 bg-white sm:mt-6">
                <img
                  src={ASSETS.lifeLessons2}
                  alt="Scenic mountain nature photography by Tami Damian"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-[11px] text-slate-500 text-center font-medium">
                  Reflections on Resilience & Nature
                </div>
              </div>
            </div>
          </div>

          {/* Presentation Topics Catalog */}
          <div className="mb-10">
            <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
              Keynote & Workshop Topics
            </span>
            <h2 className="text-3xl font-serif text-[#0e2038] tracking-tight">
              Professional Presentations Catalog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {presentations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-900">
                  <span>Inquire for Conference</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#b48528] tracking-widest uppercase block mb-1">
                Bring Tami to Your Stage
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0e2038] tracking-tight">
                Request a Keynote or Workshop Presentation
              </h2>
            </div>

            <ContactForm initialSubject="keynotes" />
          </div>
        </div>
      </section>
    </div>
  );
};
