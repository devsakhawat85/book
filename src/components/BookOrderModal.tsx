import React, { useState } from 'react';
import { ProductItem } from '../data/products';
import { COMPANY } from '../data/company';
import { X, CheckCircle, ShoppingBag, Truck } from 'lucide-react';

interface BookOrderModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookOrderModal: React.FC<BookOrderModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState('1');
  const [bogoSelected, setBogoSelected] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !product) return null;

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
    setShippingAddress('');
    setNotes('');
    onClose();
  };

  const isBogoEligible = product.id === 'dont-quit' || product.id === 'voices-21st-century';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center my-auto">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Order Inquiry Sent Successfully!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>! You will get an email with payment and shipment information directly from Tami Damian.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded p-4 text-xs text-amber-900 mb-6 text-left">
              <p className="font-bold mb-1">Authentic Guarantee:</p>
              <p>
                As noted on our original website, clicking and sending an inquiry does not obligate you. All books include Free Shipping!
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#0e2038] text-white text-xs font-semibold rounded hover:bg-[#1a365d] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 overflow-y-auto">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-16 h-20 object-contain rounded bg-slate-50 border border-slate-200 shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-[#b48528] uppercase tracking-wider block">
                  Book Order Request
                </span>
                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold text-blue-900">{product.price}</span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <Truck className="w-3 h-3" />
                    Free Shipping
                  </span>
                </div>
              </div>
            </div>

            {isBogoEligible && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <label className="flex items-center gap-2.5 text-xs text-blue-950 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bogoSelected}
                    onChange={(e) => setBogoSelected(e.target.checked)}
                    className="rounded text-blue-900 focus:ring-blue-900"
                  />
                  <span>
                    <strong>BOGO Special Offer:</strong> Buy One, Give One — Get 2 books for only <strong>$20.00</strong>!
                  </span>
                </label>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Miller"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
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
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
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
                    placeholder="(402) 555-0199"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Shipping Destination Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Street, City, State, ZIP code"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Special Notes or Inscription Request
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Signed copy request, specific recipient"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wide transition-all shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing Order Inquiry...</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#c89528]" />
                      <span>Submit Order Request ({bogoSelected ? '$20.00 for 2' : product.price})</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No immediate charge. You will receive an email with payment confirmation from {COMPANY.email}.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
