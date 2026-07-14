import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'growth', label: 'Spiritual Growth', desc: 'Deepen sadhana, meditation, and devotion.' },
  { id: 'prosperity', label: 'Prosperity', desc: 'Invite abundance and financial clarity into daily life.' },
  { id: 'protection', label: 'Protection', desc: 'Shield against negative energy and instability.' },
  { id: 'harmony', label: 'Harmony', desc: 'Restore balance in relationships and the home.' },
  { id: 'wellness', label: 'Wellness', desc: 'Support physical vitality and calm the nervous system.' },
];

const productMap: Record<string, string[]> = {
  growth: [
    "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840",
    "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308",
    "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg"
  ],
  prosperity: [
    "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308",
    "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10"
  ],
  protection: [
    "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10",
    "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840"
  ],
  harmony: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10",
    "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840",
    "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308"
  ],
  wellness: [
    "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840",
    "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308",
    "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg"
  ]
};

export function ChooseByIntention() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeData = tabs.find(t => t.id === activeTab)!;
  const activeImages = productMap[activeTab];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-forest relative border-y border-gold/10">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-xl sm:text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gold-gradient text-center mb-8 sm:mb-12 md:mb-16 px-2">
          Shop by Intention
        </h2>

        {/* Tab Strip */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-gold/20 mb-8 sm:mb-12 md:mb-16 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 sm:pb-4 whitespace-nowrap text-sm sm:text-base md:text-lg font-heading transition-all border-b-2 shrink-0 ${
                  activeTab === tab.id
                    ? 'border-gold text-gold text-shadow-glow scale-105'
                    : 'border-transparent text-cream/50 hover:text-cream'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-forest-deep rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-24 border border-gold/20 shadow-xl relative overflow-hidden">

          {/* Subtle background graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex-1 max-w-xl relative z-10 w-full">
            <span className="text-gold flex items-center gap-2 font-heading font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="w-5 sm:w-6 h-px bg-gold shrink-0"></span>
              <span className="truncate">Curated for {activeData.label}</span>
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream mb-4 sm:mb-6 leading-snug sm:leading-tight">
              {activeData.desc}
            </h3>
            <p className="text-cream-soft/70 font-body text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Every intention requires a different energetic resonance. We have selected specific combinations, malas, and single beads that traditionally support this path according to Vedic science.
            </p>
            <a href="#" className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold to-gold-soft text-forest-deep rounded-full font-heading font-bold uppercase tracking-widest text-xs sm:text-sm hover:shadow-sacred-glow transition-all">
              Shop {activeData.label} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
            <div className="col-span-2 aspect-[2/1] rounded-xl sm:rounded-2xl overflow-hidden border border-gold/20 shadow-lg relative group">
              <img src={activeImages[0]} alt="Featured Malas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-forest/30 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-gold/20 shadow-lg relative group">
              <img src={activeImages[1]} alt="Collector Beads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-forest/30 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-gold/20 shadow-lg relative bg-forest-mid flex flex-col items-center justify-center p-3 sm:p-6 text-center group hover:border-gold transition-colors cursor-pointer">
               <div className="absolute inset-0 bg-mandala opacity-10 pointer-events-none" />
               <img src={activeImages[2]} alt="Single Bead Focus" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover mb-2 sm:mb-4 border-2 border-gold/40 shadow-sacred-glow" />
               <span className="font-display text-sm sm:text-lg md:text-xl text-gold mb-1 sm:mb-2 relative z-10">Explore all</span>
               <span className="text-[10px] sm:text-xs font-heading uppercase tracking-widest text-cream/70 group-hover:text-cream transition-colors relative z-10">View collection</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}