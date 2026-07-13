import { ArrowRight, Clock, Users, Lock } from 'lucide-react';
import {
  GiByzantinTemple, GiStarSattelites,
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces,
} from 'react-icons/gi';

const zodiacIcons = [
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces,
];

// A faint rotating zodiac wheel — twelve ticks around a ring, each aligned
// to one glyph's position. Purely decorative, sits behind the card copy.
function ZodiacRing({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      {ticks.map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 200 + Math.sin(angle) * 180;
        const y1 = 200 - Math.cos(angle) * 180;
        const x2 = 200 + Math.sin(angle) * 165;
        const y2 = 200 - Math.cos(angle) * 165;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
        );
      })}
    </svg>
  );
}

// A small constellation: a handful of stars joined by thin connecting lines,
// with a couple of points that twinkle. Evokes a birth-chart / night-sky feel
// without needing an external image.
function ConstellationField({ className = '' }: { className?: string }) {
  const points = [
    { x: 40, y: 60 }, { x: 110, y: 30 }, { x: 170, y: 90 },
    { x: 130, y: 150 }, { x: 60, y: 140 }, { x: 200, y: 40 },
  ];
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 5]];
  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a].x} y1={points[a].y}
          x2={points[b].x} y2={points[b].y}
          stroke="currentColor" strokeOpacity="0.25" strokeWidth="1"
        />
      ))}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x} cy={p.y} r={i % 2 === 0 ? 2.5 : 1.6}
          fill="currentColor"
          className={i % 2 === 0 ? 'promo-star-twinkle' : ''}
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}

export function PromoBanners() {
  return (
    <section className="py-24 bg-forest-light overflow-hidden border-y border-gold/10 relative">
      <style>{`
        @keyframes promo-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes promo-star-twinkle {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.25; }
        }
        .promo-ring-spin { animation: promo-ring-spin 90s linear infinite; }
        .promo-star-twinkle { animation: promo-star-twinkle 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .promo-ring-spin { animation: none; }
          .promo-star-twinkle { animation: none; opacity: 0.7; }
        }
      `}</style>

      {/* Background image: opacity changed to 0.4 for higher visibility */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.4]"
          style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/12/54/22/14/360_F_1254221471_SQ7HQZQXZVBE4gciVC84b5deqB3XmaPZ.jpg")' }}
        />
        {/* tint + vignette: darkens/greens the photo and fades it out at the
            edges so it blends into the sections above and below */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-light/80 via-forest-light/60 to-forest-light/90" />
        <div className="absolute inset-0 bg-forest-deep/20 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-5 py-2 rounded-full mb-5">
            Guided By The Stars
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient tracking-tight leading-tight mb-3">
            Two Paths to Your Right Bead
          </h2>
          <p className="font-body text-cream-soft/70 text-base md:text-lg leading-relaxed">
            Whether you need a reading first or already know your intention, both begin with the same chart: yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1 — Free Consultation */}
          <div className="bg-forest-deep border border-gold/30 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-lg group hover:shadow-sacred-glow hover:-translate-y-1 transition-all duration-500">
            {/* Ambient Background Aura */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-mandala opacity-10 pointer-events-none" />

            {/* Astrological signature: a slow-turning zodiac wheel tucked
                behind the copy, referencing the birth-chart reading itself */}
            <ZodiacRing className="promo-ring-spin absolute -bottom-24 -right-16 w-72 h-72 text-gold/25 pointer-events-none" />

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
              <p className="text-cream-soft/80 font-body text-base md:text-lg leading-relaxed mb-6 max-w-md">
                Unsure which Mukhi configuration aligns with your current life path? Speak directly with our certified Vedic consultants for a comprehensive astrological and energetic assessment.
              </p>

              {/* quick trust chips */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-cream-soft/70 text-xs font-body">
                  <Clock className="w-3.5 h-3.5 text-gold/70" /> 30-min session
                </div>
                <div className="flex items-center gap-2 text-cream-soft/70 text-xs font-body">
                  <Users className="w-3.5 h-3.5 text-gold/70" /> 12,000+ readings given
                </div>
                <div className="flex items-center gap-2 text-cream-soft/70 text-xs font-body">
                  <Lock className="w-3.5 h-3.5 text-gold/70" /> Confidential
                </div>
              </div>
            </div>

            <button className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-soft text-forest-deep rounded-full text-sm font-heading font-bold uppercase tracking-widest transition-all hover:brightness-110 hover:gap-4 group/btn">
              Book Consultation 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Card 2 — Custom Creation */}
          <div className="bg-forest-mid border border-gold/40 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-xl group hover:shadow-sacred-glow hover:-translate-y-1 transition-all duration-500">
            {/* Ambient Background Aura */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gold/15 rounded-full blur-[90px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-stars opacity-20 pointer-events-none" />

            {/* Astrological signature: a small hand-drawn constellation,
                as if plotting points on this person's own birth chart */}
            <ConstellationField className="absolute top-6 right-6 w-40 h-32 text-gold/60 pointer-events-none" />

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
              <p className="text-cream/90 font-body text-base md:text-lg leading-relaxed mb-6 max-w-md">
                Commission a bespoke combination or structural Mala custom-strung by specialists according to your specific natal birth chart and spiritual intentions.
              </p>

              {/* zodiac icon strip — a quiet nod to "every chart, every sign" */}
              <div className="flex flex-wrap gap-2 mb-10" aria-hidden>
                {zodiacIcons.map((Icon, i) => (
                  <span
                    key={i}
                    className="w-7 h-7 rounded-full border border-gold/25 flex items-center justify-center text-gold/50 group-hover:text-gold/80 group-hover:border-gold/50 transition-colors duration-500"
                    style={{ transitionDelay: `${i * 25}ms` }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                ))}
              </div>
            </div>

            <button className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gold text-gold rounded-full text-sm font-heading font-bold uppercase tracking-widest hover:bg-gold hover:text-forest-deep hover:gap-4 transition-all shadow-[0_0_15px_rgba(201,151,58,0.2)] group/btn">
              Start Custom Order 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}