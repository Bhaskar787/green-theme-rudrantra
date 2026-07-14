import { useState, useRef } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { GiSun, GiMoon, GiFlame, GiBookCover, GiHeartBeats, GiShield, GiLightningTear, GiThirdEye } from 'react-icons/gi';

const beadImages = [
  "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840",
  "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308",
  "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10"
];

const mukhis = [
  { n: 1, deity: "Shiva", planet: "Sun", benefits: "Supreme consciousness, liberation, moksha", whom: "Monks, seekers of enlightenment", icon: GiSun },
  { n: 2, deity: "Ardhanarishvara", planet: "Moon", benefits: "Unity, emotional balance, marital harmony", whom: "Couples, emotional healers", icon: GiMoon },
  { n: 3, deity: "Agni", planet: "Mars", benefits: "Burn past karma, boost confidence", whom: "Those facing obstacles, low self-esteem", icon: GiFlame },
  { n: 4, deity: "Brahma", planet: "Mercury", benefits: "Knowledge, creativity, speech power", whom: "Students, teachers, writers", icon: GiBookCover },
  { n: 5, deity: "Kalagni Rudra", planet: "Jupiter", benefits: "Mental clarity, general health, prosperity", whom: "Everyone — most universal bead", icon: GiHeartBeats },
  { n: 6, deity: "Kartikeya", planet: "Venus", benefits: "Willpower, courage, artistic abilities", whom: "Artists, warriors, those seeking discipline", icon: GiShield },
  { n: 7, deity: "Mahalakshmi", planet: "Saturn", benefits: "Wealth, good luck, remove misfortune", whom: "Business people, those facing financial blocks", icon: GiLightningTear },
  { n: 8, deity: "Ganesha", planet: "Rahu", benefits: "Remove obstacles, success, intelligence", whom: "Entrepreneurs, those facing repeated failures", icon: GiShield },
  { n: 9, deity: "Durga", planet: "Ketu", benefits: "Power, fearlessness, energy", whom: "Those seeking courage and vitality", icon: GiLightningTear },
  { n: 10, deity: "Vishnu", planet: "All planets", benefits: "Protection, peace, all-round prosperity", whom: "Those needing complete divine protection", icon: GiShield },
  { n: 11, deity: "Hanuman", planet: "All planets", benefits: "Meditation, right decisions, adventure", whom: "Yogis, travelers, those in dangerous work", icon: GiThirdEye },
  { n: 12, deity: "Sun (Aditya)", planet: "Sun", benefits: "Leadership, self-confidence, brilliance", whom: "Leaders, politicians, executives", icon: GiSun },
  { n: 13, deity: "Indra", planet: "Venus", benefits: "Desires fulfilled, charisma, attraction", whom: "Those seeking worldly pleasures and success", icon: GiHeartBeats },
  { n: 14, deity: "Shiva", planet: "Saturn", benefits: "Intuition, third eye opening, protection", whom: "Advanced spiritual practitioners", icon: GiThirdEye },
].map((m, i) => ({ ...m, image: beadImages[i % beadImages.length] }));

export function RudrakshaGuide() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [expandDirection, setExpandDirection] = useState<'right' | 'left'>('right');
  const containerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleCardClick = (id: number) => {
    if (openId === id) {
      setOpenId(null);
      return;
    }

    const element = containerRefs.current[id];
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (rect.left + rect.width / 2 > windowWidth / 2) {
        setExpandDirection('left');
      } else {
        setExpandDirection('right');
      }
    }
    setOpenId(id);
  };

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
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold bg-gold/5 border border-gold/30 px-5 py-2 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(201,151,58,0.2)]">
            Sacred Knowledge
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight leading-tight">
            The Language of Mukhi
          </h2>
          <p className="text-cream/80 font-body text-lg leading-relaxed mt-6">
            Explore the metaphysical signatures, ruling cosmic forces, and energetic applications behind each divine configuration as described in the Shiva Purana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mukhis.map((m) => {
            const isOpen = openId === m.n;
            
            return (
              <div
                key={m.n}
                ref={(el) => { containerRefs.current[m.n] = el; }}
                className={`relative w-full lg:h-[420px] ${isOpen ? 'h-auto' : 'h-[420px]'}`}
              >
                {/* 1. Static Ghost Placeholder (keeps desktop grid cell sized while card floats above it) */}
                <div className="hidden lg:block absolute inset-0 bg-forest/30 border border-dashed border-gold/20 rounded-2xl -z-10" />

                {/* 2. The Actual Card */}
                <div
                  onClick={() => handleCardClick(m.n)}
                  className={`relative lg:absolute lg:top-0 w-full bg-forest-light border rounded-2xl shadow-lg transition-all duration-500 ease-out overflow-hidden select-none cursor-pointer ${
                    isOpen
                      ? 'h-auto lg:h-full lg:w-[215%] z-40 border-gold shadow-sacred-glow bg-forest'
                      : 'h-full z-10 border-gold/20 hover:border-gold/60'
                  } ${
                    isOpen && expandDirection === 'left'
                      ? 'lg:right-0 lg:origin-right'
                      : 'lg:left-0 lg:origin-left'
                  }`}
                >
                  <div className="p-5 h-full flex flex-col justify-between relative">
                    {/* Gold left accent when open */}
                    {isOpen && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-bright via-gold to-transparent" />}

                    <div className={`flex h-full gap-6 ${isOpen ? 'flex-col lg:flex-row' : 'flex-col'}`}>
                      
                      {/* Left Block */}
                      <div className={`${isOpen ? 'w-full lg:w-[45%] shrink-0' : 'w-full'} transition-all duration-300 flex flex-col justify-between h-auto lg:h-full`}>
                        <div>
                          <div className="w-full h-44 rounded-xl overflow-hidden mb-5 border border-gold/20 relative group">
                            <img src={m.image} alt={`${m.n} Mukhi`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-forest-deep/20 mix-blend-multiply" />
                          </div>

                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-baseline gap-2">
                              <span className="font-display text-4xl text-gold text-shadow-glow">{m.n}</span>
                              <span className="text-xs font-heading font-bold text-gold-soft uppercase tracking-widest">Mukhi</span>
                            </div>
                            <div className="p-2 rounded-full border border-gold/30 bg-forest text-gold shadow-inner">
                              <m.icon className="w-5 h-5" />
                            </div>
                          </div>

                          <p className="text-sm font-body text-cream-soft/80 line-clamp-3 leading-relaxed">
                            {m.benefits}
                          </p>
                        </div>

                        {!isOpen && (
                          <div className="flex justify-between items-center pt-4 border-t border-gold/20 text-xs font-heading font-bold tracking-widest uppercase text-gold/70">
                            <span>Explore Details</span>
                            <ChevronRight className="w-4 h-4 text-gold" />
                          </div>
                        )}
                      </div>

                      {/* Right Block / Extra Details — stacks below on mobile, side-by-side from lg up */}
                      {isOpen && (
                        <div className="flex flex-col justify-between flex-1 border-t lg:border-t-0 lg:border-l border-gold/20 pt-6 lg:pt-0 lg:pl-6 animate-fade-in relative">
                          <div className="space-y-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-[10px] font-heading tracking-widest text-gold-soft uppercase font-bold mb-1 block">Divine Energy Matrix</span>
                                <h4 className="text-2xl font-display text-cream">Detailed Attributes</h4>
                              </div>
                              <button 
                                onClick={(e) => { e.stopPropagation(); setOpenId(null); }}
                                className="p-1.5 rounded-full text-gold hover:text-gold-bright hover:bg-forest transition-colors"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bg-forest border border-gold/20 p-4 rounded-xl shadow-inner">
                              <div>
                                <span className="text-[10px] text-gold/60 font-heading font-bold block uppercase tracking-widest mb-1">Ruling Deity</span>
                                <span className="text-sm font-heading font-semibold text-gold-bright block">{m.deity}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-gold/60 font-heading font-bold block uppercase tracking-widest mb-1">Associated Planet</span>
                                <span className="text-sm font-heading font-semibold text-gold-bright block">{m.planet}</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <span className="text-[10px] font-heading tracking-widest font-bold text-gold/60 uppercase flex items-center gap-2"><span className="w-4 h-px bg-gold/40"></span>Metaphysical Benefits</span>
                              <p className="text-sm font-body text-cream/90 leading-relaxed pl-6">{m.benefits}</p>
                            </div>

                            <div className="space-y-2">
                              <span className="text-[10px] font-heading tracking-widest font-bold text-gold/60 uppercase flex items-center gap-2"><span className="w-4 h-px bg-gold/40"></span>Ideal Configuration</span>
                              <p className="text-sm font-body text-cream/90 leading-relaxed pl-6">{m.whom}</p>
                            </div>
                          </div>

                          <div className="text-[10px] font-heading uppercase tracking-widest text-gold/40 pt-3 border-t border-gold/10 text-center mt-4">
                            Click anywhere on card to close
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}