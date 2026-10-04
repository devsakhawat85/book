import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { X, CheckCircle, Gift, Sparkles } from 'lucide-react';

interface GiveawayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiveawayModal: React.FC<GiveawayModalProps> = ({ isOpen, onClose }) => {
  const [selectedGift, setSelectedGift] = useState(COMPANY.freeGiveaway.options[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Your Details Were Sent Successfully!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>! Tami Damian and the LEAD Group team will send your complimentary copy of{' '}
              <span className="font-semibold text-slate-900">"{selectedGift}"</span> to your provided address shortly.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-500 mb-6 text-left">
              <p className="font-semibold text-slate-700 mb-1">Direct Confirmation:</p>
              <p>Email: {COMPANY.email}</p>
              <p>Phone: {COMPANY.phoneFormatted}</p>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#0e2038] text-white text-xs font-semibold rounded hover:bg-[#1a365d] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-[#b48528] text-xs font-bold uppercase tracking-wider mb-2">
              <Gift className="w-4 h-4" />
              <span>Complimentary Executive Giveaway</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Request Your Free Resource
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Fill out your contact information and Leadership Education And Development will send you a free gift of your choice directly from Lincoln, Nebraska.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Your Complimentary Book:
                </label>
                <div className="space-y-2">
                  {COMPANY.freeGiveaway.options.map((option, idx) => (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                        selectedGift === option
                          ? 'border-blue-900 bg-blue-50/50 text-blue-950 font-semibold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="giveawayChoice"
                        value={option}
                        checked={selectedGift === option}
                        onChange={() => setSelectedGift(option)}
                        className="mt-0.5 text-blue-900 focus:ring-blue-900 cursor-pointer"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
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
                    placeholder="(402) 555-0123"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Mailing Address (For Free Book Shipment) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, City, State, ZIP code"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wide transition-all shadow cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#c89528]" />
                    <span>Send Me the Free Book</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
