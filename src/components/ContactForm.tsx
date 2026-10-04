import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { CheckCircle, Send, Sparkles } from 'lucide-react';

interface ContactFormProps {
  initialSubject?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject = 'general', className = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [wantsGift, setWantsGift] = useState(true);
  const [giftChoice, setGiftChoice] = useState(COMPANY.freeGiveaway.options[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-xl p-8 border border-slate-200 text-center shadow-sm ${className}`}>
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          Your Details Were Sent Successfully!
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Thank you, <span className="font-semibold text-slate-900">{name}</span>. Tami Damian has received your inquiry and will follow up with you promptly.
        </p>
        {wantsGift && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 text-left mb-6">
            <strong>Complimentary Gift Reserved:</strong> We will include your requested copy of <em>"{giftChoice}"</em> with our response.
          </div>
        )}
        <div className="text-xs text-slate-500 space-y-1 mb-6">
          <p>Direct Phone: <span className="font-semibold text-slate-700">{COMPANY.phoneFormatted}</span></p>
          <p>Direct Email: <span className="font-semibold text-slate-700">{COMPANY.email}</span></p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setMessage('');
          }}
          className="px-6 py-2.5 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm ${className}`}>
      <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">
        Let's Talk About What You Need
      </h3>
      <p className="text-xs text-slate-500 mb-6">
        Complete the form below and Tami Damian will contact you directly to discuss how LEAD Group can meet your organization's goals.
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Adams"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Organization / Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company or Organization"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@organization.com"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(402) 560-8264"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Area of Inquiry
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors cursor-pointer"
          >
            <option value="general">General Leadership Consultation</option>
            <option value="iso-training">ISO Training & Lead Auditor Certification (ISO 9001, 14001, 45001, IATF 16949)</option>
            <option value="iso-consulting">ISO Consulting, Gap Analysis & Auditing</option>
            <option value="ziglar-training">Ziglar Legacy Training & Goal Setting Seminars</option>
            <option value="executive-coaching">Executive & Personal Coaching (Live to Win)</option>
            <option value="keynotes">Life Lessons Learned Keynotes & Speaking</option>
            <option value="wellness">Corporate Wellness & Health Coaching</option>
            <option value="books">Book Order & Quantity Discounts</option>
            <option value="referral">Referral Reward Program Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            How can we help your team move forward? *
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your organization's current goals, timing, or specific standard requirements..."
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50/50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
          ></textarea>
        </div>

        {/* Free giveaway opt-in */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs font-medium text-slate-800">
            <input
              type="checkbox"
              checked={wantsGift}
              onChange={(e) => setWantsGift(e.target.checked)}
              className="mt-0.5 rounded text-blue-900 focus:ring-blue-900"
            />
            <span>
              <strong>Free Gift:</strong> Send me a complimentary copy of a LEAD Group executive resource!
            </span>
          </label>

          {wantsGift && (
            <div className="pl-6 pt-1 text-xs">
              <select
                value={giftChoice}
                onChange={(e) => setGiftChoice(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900"
              >
                {COMPANY.freeGiveaway.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-[#0e2038] hover:bg-[#1a365d] active:scale-[0.99] text-white text-xs font-semibold rounded tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-[#c89528]" />
              <span>Send Inquiry to Tami Damian</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center">
          Centrally located in Lincoln, Nebraska · 402-560-8264 · TDamian@LEADGroup.net
        </p>
      </div>
    </form>
  );
};
