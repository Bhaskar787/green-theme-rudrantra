import { GiFlame, GiMeditation, GiYinYang, GiLotusFlower } from 'react-icons/gi';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: GiYinYang,
    title: "Healing & Wellness",
    desc: "Ancient texts and modern seekers alike report increased vitality, reduced stress, and stabilized energy levels when wearing authentic beads.",
  },
  {
    icon: GiFlame,
    title: "Protection & Blessing",
    desc: "Create a spiritual armor against negative energies. Each mukhi offers distinct protective qualities for the wearer's journey.",
  },
  {
    icon: GiMeditation,
    title: "Meditation & Prayer",
    desc: "Deepen your sadhana. A genuine rudraksha mala serves as a powerful anchor, magnifying the resonance of your mantras.",
  },
  {
    icon: GiLotusFlower,
    title: "Spiritual Growth",
    desc: "Align with higher frequencies. Wearing these sacred seeds facilitates intuition, clarity, and connection to divine consciousness.",
  }
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-forest-light relative overflow-hidden">
      {/* Pashupatinath Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-light via-transparent to-forest-light" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-3xl text-gold">ॐ</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-6">
            Spiritual Tools for Your Journey
          </h2>
          <p className="text-cream-soft font-body text-lg md:text-xl opacity-80">
            Beyond beautiful adornments, these are spiritual tools. Discover how authentic Rudraksha can transform your daily experience and inner life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i} 
              className="bg-forest-deep p-8 rounded-2xl border-t border-gold/30 hover:border-gold hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-sacred-glow group flex flex-col relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full border border-gold/20 bg-forest flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors duration-500 mb-8 mx-auto lg:mx-0">
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-display text-2xl text-gold mb-4 text-center lg:text-left">{item.title}</h3>
              <p className="text-cream/70 font-body leading-relaxed flex-1 mb-8 text-center lg:text-left text-sm md:text-base">
                {item.desc}
              </p>
              
              <a href="#" className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-heading font-bold uppercase tracking-widest text-gold hover:text-gold-bright group/link mt-auto">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}