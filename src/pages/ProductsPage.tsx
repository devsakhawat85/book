import React from 'react';
import { PRODUCTS, ProductItem } from '../data/products';
import { COMPANY } from '../data/company';
import { Truck, CheckCircle2, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductsPageProps {
  onSelectProduct: (p: ProductItem) => void;
  onOpenGiveaway: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onSelectProduct, onOpenGiveaway }) => {
  return (
    <div className="bg-[#fafaf8]">
      {/* Header Banner */}
      <section className="bg-[#0a1626] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-2">
              Books & Performance Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              LEAD Group Bookstore
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Inspiring published volumes, international bestsellers, and the official Ziglar Performance Planner — authored and co-authored by Tami Damian.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-emerald-400">
              <Truck className="w-4 h-4" />
              <span>Free Shipping Included on All Book Orders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Notice (Preserved from original) */}
      <section className="py-6 bg-amber-50 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950">
          <div>
            <strong>Special BOGO Deal:</strong> Buy one book for $12.00, or take advantage of our Buy One, Give One special: <strong>2 for $20.00</strong> (mix-and-match DON'T QUIT & Voices of the 21st Century)!
          </div>
          <button
            onClick={onOpenGiveaway}
            className="text-amber-900 font-bold underline shrink-0 cursor-pointer"
          >
            Looking for Free Giveaway? Click Here →
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 rounded-xl bg-slate-50 border border-slate-100 p-4 mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  {prod.dealTag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b48528] bg-amber-50 px-2 py-0.5 rounded inline-block mb-2">
                      {prod.dealTag}
                    </span>
                  )}

                  <h3 className="font-serif font-bold text-slate-900 text-xl leading-snug mb-1">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {prod.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {prod.quote && (
                    <div className="p-3 bg-slate-50 border-l-2 border-[#b48528] text-[11px] text-slate-700 italic mb-4">
                      "{prod.quote.text}"
                      {prod.quote.author && (
                        <span className="block not-italic text-slate-500 font-semibold mt-1">
                          — {prod.quote.author}
                        </span>
                      )}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-xs text-slate-500 mb-6">
                    {prod.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-serif font-bold text-slate-900">
                        {prod.price}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        Free US Shipping
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="w-full py-3 bg-[#0e2038] hover:bg-[#1a365d] text-white text-xs font-semibold rounded tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#c89528]" />
                    <span>Order / Inquire Now</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Clicking sends an email inquiry — no immediate commitment.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Purchasing Guarantee Box (Preserved from original) */}
          <div className="mt-16 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl max-w-3xl mx-auto text-center space-y-3">
            <h4 className="font-serif font-bold text-slate-900 text-base">
              LEAD Group Book Purchasing Policy
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
              You will get an email with complete payment information! Clicking and sending an inquiry does not make you committed to any one of the purchasing options. For bulk orders, company-wide distribution, or personalized author inscriptions, contact Tami Damian directly at{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-blue-900 font-semibold underline">
                {COMPANY.email}
              </a>{' '}
              or{' '}
              <a href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`} className="text-blue-900 font-semibold underline">
                {COMPANY.phoneFormatted}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
