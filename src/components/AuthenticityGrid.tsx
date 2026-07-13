import { GiShield, GiLotusFlower, GiAllSeeingEye, GiByzantinTemple } from 'react-icons/gi';
import { BadgeCheck, Microscope, Leaf, Award } from 'lucide-react';

const pillars = [
  {
    icon: Microscope,
    title: 'X-Ray Lab Certification',
    desc: 'Each bead undergoes a full non-destructive X-ray scan verifying mukhi count, seed density, and absence of artificial enhancement.',
    stat: '100%',
    statLabel: 'Certified Beads',
  },
  {
    icon: GiByzantinTemple,
    title: 'Pashupatinath Energization',
    desc: 'Every shipment is blessed in an ancient Vedic ceremony at Pashupatinath Temple, Kathmandu, by resident Vedic pandits.',
    stat: '51+',
    statLabel: 'Years of Practice',
  },
  {
    icon: Leaf,
    title: 'Arun Valley Sourcing',
    desc: 'We source directly from traditional Rudraksha growers in the Arun Valley of eastern Nepal — no middlemen, no adulteration.',
    stat: '3,800m',
    statLabel: 'Himalayan Altitude',
  },
  {
    icon: BadgeCheck,
    title: 'Certificate of Authenticity',
    desc: 'Every order includes a numbered, signed certificate with bead measurements, mukhi count, origin, and lab report reference.',
    stat: '12,000+',
    statLabel: 'Happy Seekers',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    label: 'Pashupatinath Temple',
  },
  {
    src: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    label: 'Siddha Mala Collection',
  },
  {
    src: 'https://images.unsplash.com/photo-1516302350523-4a2b77b39054?auto=format&fit=crop&w=800&q=80',
    label: 'Himalayan Origin',
  },
];

export function AuthenticityGrid() {
  return (
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-5 py-2 rounded-full mb-6">
            <GiShield className="w-3.5 h-3.5" /> Our Authenticity Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-tight leading-tight mb-6">
            Trust, Verified at Every Step
          </h2>
          <p className="font-body text-cream/70 text-lg leading-relaxed">
            In a market flooded with imitations, our four-pillar authentication system ensures every bead that reaches you is exactly what the Shiva Purana describes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => (
            <div key={i} className="group bg-forest border border-gold/20 rounded-2xl p-8 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(201,151,58,0.1)] transition-all duration-500 flex flex-col">
              <div className="w-14 h-14 rounded-xl border border-gold/30 bg-forest-deep flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-deep transition-colors duration-500 mb-6">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl text-gold mb-3 leading-tight">{p.title}</h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>
              <div className="pt-5 border-t border-gold/15">
                <span className="font-display text-3xl text-gold-bright block">{p.stat}</span>
                <span className="text-[10px] font-heading uppercase tracking-widest text-gold/50">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl border border-gold/20 group ${i === 1 ? 'md:row-span-1' : ''}`}>
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-gold/80 border border-gold/30 bg-forest-deep/70 backdrop-blur px-3 py-1.5 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-forest border border-gold/30 rounded-2xl px-10 py-8 shadow-xl">
            <GiAllSeeingEye className="w-10 h-10 text-gold shrink-0" />
            <div className="text-left">
              <h4 className="font-display text-xl text-gold mb-1">Still have doubts?</h4>
              <p className="font-body text-cream/60 text-sm">Speak with our certified Vedic consultants before you buy — it's complimentary.</p>
            </div>
            <a href="#" className="shrink-0 px-7 py-3 bg-gradient-to-r from-gold to-gold-soft text-forest-deep font-heading font-bold uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_20px_rgba(201,151,58,0.4)] transition-all">
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
