import { ArrowRight } from 'lucide-react';
import { GiByzantinTemple, GiStarSattelites } from 'react-icons/gi';

export function PromoBanners() {
  return (
    <section className="py-24 bg-forest-light overflow-hidden border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1 — Free Consultation */}
          <div className="bg-forest-deep border border-gold/30 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-lg group hover:shadow-sacred-glow transition-all duration-500">
            {/* Ambient Background Aura */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-mandala opacity-10 pointer-events-none" />
            
            <div className="w-full relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-forest-deep bg-gold px-4 py-1.5 rounded-full shadow-sm">
                  Expert Advice
                </span>
                <GiByzantinTemple className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors duration-500" />
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-cream tracking-tight leading-tight mb-5">
                Free Personalized Guidance
              </h3>
              <p className="text-cream-soft/80 font-body text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Unsure which Mukhi configuration aligns with your current life path? Speak directly with our certified Vedic consultants for a comprehensive astrological and energetic assessment.
              </p>
            </div>

            <button className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-soft text-forest-deep rounded-full text-sm font-heading font-bold uppercase tracking-widest transition-all hover:brightness-110 group/btn">
              Book Consultation 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Card 2 — Custom Creation */}
          <div className="bg-forest-mid border border-gold/40 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-xl group hover:shadow-sacred-glow transition-all duration-500">
            {/* Ambient Background Aura */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gold/15 rounded-full blur-[90px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-stars opacity-20 pointer-events-none" />
            
            <div className="w-full relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/50 bg-forest-deep/50 px-4 py-1.5 rounded-full backdrop-blur">
                  Custom Creation
                </span>
                <GiStarSattelites className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors duration-500" />
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-gold-gradient tracking-tight leading-tight mb-5">
                Elevate Your Sadhana
              </h3>
              <p className="text-cream/90 font-body text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Commission a bespoke combination or structural Mala custom-strung by specialists according to your specific natal birth chart and spiritual intentions.
              </p>
            </div>

            <button className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gold text-gold rounded-full text-sm font-heading font-bold uppercase tracking-widest hover:bg-gold hover:text-forest-deep transition-all shadow-[0_0_15px_rgba(201,151,58,0.2)] group/btn">
              Start Custom Order 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}