import { useState } from 'react';
import { GiMeditation, GiLotusFlower, GiByzantinTemple } from 'react-icons/gi';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Scattered "night sky" stars — fixed positions so the field doesn't shift on re-render
const stars = [
  { x: 42, y: 68, r: 1.6, o: 0.9 }, { x: 118, y: 140, r: 1.1, o: 0.5 }, { x: 210, y: 54, r: 1.8, o: 0.8 },
  { x: 300, y: 200, r: 1.2, o: 0.4 }, { x: 60, y: 300, r: 1.4, o: 0.6 }, { x: 160, y: 380, r: 1.1, o: 0.45 },
  { x: 340, y: 340, r: 1.6, o: 0.7 }, { x: 30, y: 460, r: 1.2, o: 0.5 }, { x: 250, y: 470, r: 1.8, o: 0.85 },
  { x: 380, y: 120, r: 1.1, o: 0.4 }, { x: 470, y: 250, r: 1.5, o: 0.65 }, { x: 550, y: 90, r: 1.2, o: 0.5 },
  { x: 620, y: 200, r: 1.7, o: 0.8 }, { x: 700, y: 340, r: 1.1, o: 0.4 }, { x: 760, y: 150, r: 1.4, o: 0.6 },
  { x: 660, y: 460, r: 1.2, o: 0.45 }, { x: 500, y: 420, r: 1.6, o: 0.75 }, { x: 90, y: 560, r: 1.3, o: 0.5 },
  { x: 420, y: 580, r: 1.1, o: 0.4 }, { x: 580, y: 560, r: 1.5, o: 0.65 }, { x: 730, y: 540, r: 1.2, o: 0.5 },
  { x: 200, y: 620, r: 1.7, o: 0.8 }, { x: 350, y: 40, r: 1.1, o: 0.4 }, { x: 460, y: 60, r: 1.3, o: 0.55 },
];

// The Navagraha — nine celestial influences of Vedic astrology, placed around an orbit ring
const navagraha = [
  { label: 'सू', name: 'Surya', angle: 5 },
  { label: 'चं', name: 'Chandra', angle: 45 },
  { label: 'मं', name: 'Mangal', angle: 85 },
  { label: 'बु', name: 'Budh', angle: 125 },
  { label: 'गु', name: 'Guru', angle: 165 },
  { label: 'शु', name: 'Shukra', angle: 205 },
  { label: 'श', name: 'Shani', angle: 245 },
  { label: 'रा', name: 'Rahu', angle: 285 },
  { label: 'के', name: 'Ketu', angle: 325 },
];

function AstroBackground() {
  const cx = 400;
  const cy = 400;
  const orbitRadii = [140, 230, 320];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep space gradient wash, tuned to the forest/gold palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(201,151,58,0.10), transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(139,26,26,0.12), transparent 55%)',
        }}
      ></div>

      {/* Star field */}
      <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full opacity-80">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#FBF5E6" opacity={s.o} className="animate-star-twinkle" style={{ animationDelay: `${(i % 6) * 0.6}s` }} />
        ))}
        {/* faint constellation lines linking a few stars, as if charting a Nakshatra */}
        <polyline points="42,68 118,140 210,54" fill="none" stroke="#FBF5E6" strokeWidth="0.5" opacity="0.25" />
        <polyline points="620,200 700,340 660,460" fill="none" stroke="#FBF5E6" strokeWidth="0.5" opacity="0.25" />
      </svg>

      {/* Navagraha orbit rings + planetary glyphs */}
      <svg viewBox="0 0 800 800" className="absolute -right-16 -top-10 w-[620px] h-[620px] md:w-[720px] md:h-[720px] opacity-[0.18]">
        {orbitRadii.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#C9973A" strokeWidth="1" />
        ))}
        {navagraha.map((g, i) => {
          const r = orbitRadii[i % orbitRadii.length];
          const rad = (g.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          return (
            <g key={g.name}>
              <circle cx={x} cy={y} r="16" fill="#0A2218" stroke="#C9973A" strokeWidth="1.2" />
              <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fill="#E8C547" fontFamily="serif">
                {g.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Faint Vedic Rashi (birth chart) diamond */}
      <svg viewBox="0 0 400 400" className="absolute left-[-60px] bottom-[-60px] w-[380px] h-[380px] opacity-[0.08]">
        <rect x="20" y="20" width="360" height="360" fill="none" stroke="#FBF5E6" strokeWidth="1.5" />
        <polyline points="20,20 380,380" fill="none" stroke="#FBF5E6" strokeWidth="1.2" />
        <polyline points="380,20 20,380" fill="none" stroke="#FBF5E6" strokeWidth="1.2" />
        <polyline points="200,20 20,200 200,380 380,200 200,20" fill="none" stroke="#FBF5E6" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

const steps = [
  {
    n: '01',
    icon: GiMeditation,
    title: 'Share Your Intention',
    desc: 'Tell us your goal — spiritual, material, health, or protection. Our consultants will match your intention to the right mukhi combination.',
  },
  {
    n: '02',
    icon: GiByzantinTemple,
    title: 'Astrological Assessment',
    desc: 'We analyse your birth chart and planetary positions to identify the most potent Rudraksha configuration for your current life phase.',
  },
  {
    n: '03',
    icon: GiLotusFlower,
    title: 'Sacred Crafting & Energization',
    desc: 'Your combination is hand-strung using red silk or silver wire, then energized under your name in a personal Vedic ceremony.',
  },
];

const intentions = [
  'Spiritual Growth & Meditation',
  'Wealth & Business Prosperity',
  'Health & Physical Vitality',
  'Protection & Negative Energy Shield',
  'Marital Harmony & Relationships',
  'Academic Success & Concentration',
  'Career Advancement & Leadership',
  'Emotional Healing & Inner Peace',
];

export function CustomizeOrder() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-forest relative overflow-hidden border-y border-gold/10">
      {/* Himalayan background — visible at a proper, tasteful opacity behind the astro field */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/70 to-forest pointer-events-none" />

      {/* Astrological star field, planetary orbits & birth-chart motif */}
      <AstroBackground />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-5 py-2 rounded-full mb-6">
            Bespoke Sacred Craft · By Appointment
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-tight leading-tight mb-6">
            Your Personal Rudraksha Combination
          </h2>
          <p className="font-body text-cream/70 text-lg leading-relaxed">
            No two seekers are identical. Our Vedic experts custom-design each mala or combination based on a careful reading of your birth chart, dominant planets, and the specific transformation you are seeking — precise, considered, and made for you alone.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-gold/40 bg-forest-deep flex items-center justify-center text-gold shadow-[0_0_20px_rgba(201,151,58,0.1)]">
                  <step.icon className="w-9 h-9" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-forest-deep text-[10px] font-heading font-bold flex items-center justify-center border-2 border-forest-deep">
                  {step.n}
                </span>
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">{step.title}</h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Builder */}
        <div className="bg-forest-deep border border-gold/30 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-mandala opacity-[0.04] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Left — Intention Picker */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gold/15">
              <h3 className="font-display text-2xl text-gold mb-2">Choose Your Intention</h3>
              <p className="font-body text-cream/50 text-sm mb-8">Select the life area you most want to strengthen:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {intentions.map((intention) => (
                  <button
                    key={intention}
                    onClick={() => setSelected(intention)}
                    className={`flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border text-sm font-heading transition-all duration-200 ${
                      selected === intention
                        ? 'border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(201,151,58,0.15)]'
                        : 'border-gold/20 text-cream/70 hover:border-gold/50 hover:text-cream bg-forest/40'
                    }`}
                  >
                    {selected === intention
                      ? <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      : <span className="w-4 h-4 rounded-full border border-gold/30 shrink-0" />}
                    {intention}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Enquiry Form */}
            <div className="p-8 md:p-12 flex flex-col">
              <h3 className="font-display text-2xl text-gold mb-2">Request Your Custom Mala</h3>
              <p className="font-body text-cream/50 text-sm mb-8">Fill in a few details and our Vedic expert will contact you within 24 hours.</p>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
                  <div className="w-20 h-20 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-gold mb-2">Request Received!</h4>
                    <p className="font-body text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                      Our Vedic consultant will reach out within 24 hours to begin your personal consultation.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-5 flex-1"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-heading uppercase tracking-widest text-gold/60 block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-forest border border-gold/20 rounded-lg px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-heading uppercase tracking-widest text-gold/60 block mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 ..."
                        className="w-full bg-forest border border-gold/20 rounded-lg px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-heading uppercase tracking-widest text-gold/60 block mb-2">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full bg-forest border border-gold/20 rounded-lg px-4 py-3 text-sm font-body text-cream/80 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-heading uppercase tracking-widest text-gold/60 block mb-2">
                      Selected Intention {selected && <span className="text-gold normal-case tracking-normal">— {selected}</span>}
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what you're seeking in more detail (optional)…"
                      className="w-full bg-forest border border-gold/20 rounded-lg px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-auto w-full py-4 bg-gradient-to-r from-gold to-gold-soft text-forest-deep font-heading font-bold uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_25px_rgba(201,151,58,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    Request Custom Mala <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
