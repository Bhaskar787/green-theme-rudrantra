import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import {mukhis} from '@/data/mukhi'
import { MukhiCardGrid } from '@/components/MukhiCardGrid';

export default function MukhiGuidePage() {
  return (
    <section className="py-24 bg-forest-deep min-h-screen relative overflow-hidden">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-4 px-4 pt-0 pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      {/* Star field overlay */}
      <div className="absolute inset-0 bg-stars opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-heading text-xs font-bold uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold bg-gold/5 border border-gold/30 px-5 py-2 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(201,151,58,0.2)]">
            Sacred Knowledge
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight leading-tight">
            The Complete Language of Mukhi
          </h2>
          <p className="text-cream/80 font-body text-lg leading-relaxed mt-6">
            All fourteen sacred configurations — their ruling deity, cosmic association, and metaphysical purpose, as described in the Shiva Purana.
          </p>
        </div>

        <MukhiCardGrid items={mukhis} />

      </div>
    </section>
  );
}