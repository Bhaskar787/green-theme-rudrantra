import { ArrowRight, Clock } from 'lucide-react';
import { GiBookCover } from 'react-icons/gi';

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

// Same astrological backdrop used on Customize Order — star field, Navagraha orbit
// rings with planetary glyphs, and a faint Rashi (birth-chart) diamond — reused here
// so the theme reads clearly instead of the near-invisible mandala texture alone.
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

const posts = [
  {
    category: 'Sacred Knowledge',
    title: 'The Science Behind Rudraksha: What Modern Research Reveals',
    excerpt: 'Ancient Vedic wisdom meets contemporary bioelectric research. Studies from NIMHANS and IIT demonstrate measurable electromagnetic properties in authentic Rudraksha beads.',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://rudrakx.com/_next/image?url=https%3A%2F%2Fv2.rudrakx.com%2F%2Fmedia%2Ffiler_public%2F93%2Fe9%2F93e9400e-953a-4039-b884-54f49179f7ed%2Fscientific-research-on-rudraksha.webp&w=3840&q=75',
    badge: 'Featured',
  },
  {
    category: 'Mukhi Guide',
    title: 'Choosing Between 5 and 7 Mukhi: A Deep Astrological Comparison',
    excerpt: 'Jupiter vs Saturn energy — understand which ruling deity aligns with your current planetary dasha before making your choice.',
    readTime: '5 min read',
    date: 'May 2026',
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    badge: null,
  },
  {
    category: 'Vedic Practice',
    title: 'How to Energize and Maintain Your Rudraksha at Home',
    excerpt: 'A step-by-step guide to Prana Pratishtha: the daily care ritual, monthly oil treatment, and the right mantras for your specific mukhi.',
    readTime: '4 min read',
    date: 'April 2026',
    image: 'https://rudrahouse.com/storage/uploads/product/5-mukhi-rudraksha-kantha-mala/5-mukhi-rudraksha-kantha-mala.jpeg',
    badge: null,
  },
  {
    category: 'Authenticity',
    title: 'Six Tests to Spot a Fake Rudraksha Before You Buy',
    excerpt: "Float test, copper test, X-ray analysis — a comprehensive buyer's guide to identifying adulterated and chemically treated beads in the market.",
    readTime: '6 min read',
    date: 'March 2026',
    image: 'https://www.mkhastrovastumlm.com/wp-content/uploads/2024/01/rudrasha.jpg',
    badge: 'Popular',
  },
];

export function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      {/* Background lightened ~10% using the site's own forest/gold tones,
          fading from lighter at the top to the base tone lower down —
          reads as ambient light instead of a flat grey wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-light/30 via-forest-light/10 to-transparent pointer-events-none" />

      {/* Astrological star field, Navagraha orbits & Rashi diamond — same motif as Customize Order */}
      <AstroBackground />

      <div className="absolute inset-0 bg-mandala opacity-[0.03] pointer-events-none" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-4 px-4 pt-0 pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-4 py-1.5 rounded-full mb-5">
              <GiBookCover className="w-3.5 h-3.5" /> Wisdom Journal
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-tight">Sacred Knowledge</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-gold font-heading font-bold uppercase tracking-widest text-xs border-b border-gold/30 pb-1 hover:border-gold hover:text-gold-bright transition-colors group">
            All Articles <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 mb-6">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
              {featured.badge && (
                <span className="absolute top-5 left-5 text-[10px] font-heading font-bold uppercase tracking-widest bg-gold text-forest-deep px-3 py-1.5 rounded-full shadow-md">
                  {featured.badge}
                </span>
              )}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-gold/70 mb-3 block">{featured.category}</span>
                <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight group-hover:text-gold transition-colors">{featured.title}</h3>
              </div>
            </div>
            <p className="font-body text-cream/60 text-base leading-relaxed mb-5 max-w-xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs font-heading uppercase tracking-widest text-gold/50">
              <span>{featured.date}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" />
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              <a href="#" className="ml-auto text-gold font-bold hover:text-gold-bright transition-colors flex items-center gap-1 group/link">
                Read More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((post, i) => (
              <div key={i} className="group flex gap-5 cursor-pointer p-4 rounded-xl border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300">
                <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden border border-gold/15">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-heading font-bold uppercase tracking-widest text-gold/60">{post.category}</span>
                      {post.badge && (
                        <span className="text-[8px] font-heading font-bold uppercase bg-crimson text-white px-2 py-0.5 rounded">{post.badge}</span>
                      )}
                    </div>
                    <h4 className="font-heading text-sm text-cream leading-snug line-clamp-2 group-hover:text-gold transition-colors">{post.title}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-heading uppercase tracking-widest text-gold/40 mt-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
            <a href="#" className="mt-2 w-full py-3.5 border border-gold/30 rounded-xl text-gold font-heading font-bold uppercase tracking-widest text-xs text-center hover:border-gold hover:bg-gold/5 transition-all flex items-center justify-center gap-2">
              View All Articles <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}