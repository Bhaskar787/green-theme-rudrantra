import { GiMoon, GiSun, GiStarSattelites, GiSparkles } from 'react-icons/gi';

const events = [
  { name: "Mondays (Somavara)", desc: "Most auspicious weekly day for Shiva beads", label: "Weekly Ritual", icon: GiSun },
  { name: "Ekadashi", desc: "11th lunar day, ideal for spiritual malas", label: "Fortnightly", icon: GiMoon },
  { name: "Pradosh Tithi", desc: "Twice monthly 13th lunar day, powerful for Shiva worship", label: "Twilight Muhurta", icon: GiStarSattelites },
  { name: "Purnima", desc: "Full Moon night, perfect to cleanse and energize new Rudraksha", label: "Lunar Peak", icon: GiMoon },
  { name: "Maha Shivaratri", desc: "The grand sacred night of Shiva, offering maximum energetic potency", label: "Annual Peak", icon: GiSparkles },
  { name: "Navratri", desc: "Nine auspicious nights for activating protective Shakti malas", label: "Seasonal", icon: GiSun },
];

export function SpiritualCalendar() {
  return (
    <section className="py-20 md:py-28 bg-forest border-t border-gold/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mandala opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 px-5 py-2 rounded-full inline-block mb-6 shadow-sm">
            Vedic Panchang Tradition
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight leading-tight mb-6">
            Auspicious Timings
          </h2>
          <p className="text-cream-soft/80 font-body text-lg leading-relaxed">
            Wearing, cleansing, or energizing your sacred beads on these high-vibration lunar configurations multiplies their spiritual alignment according to the Shastras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((ev, i) => {
            const IconComponent = ev.icon;
            return (
              <div 
                key={i} 
                className="bg-forest-deep border border-gold/20 rounded-2xl p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-sacred-glow group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Traditional corner accent decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent pointer-events-none rounded-bl-full" />
                
                <div>
                  {/* Category Chip Line */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-heading font-bold tracking-widest text-forest-deep uppercase bg-gold px-3 py-1 rounded shadow-sm">
                      {ev.label}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gold/30 bg-forest flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-forest transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-display text-2xl text-cream mb-3 font-semibold">
                    {ev.name}
                  </h3>
                  <p className="text-sm font-body text-cream-soft/70 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>

                {/* Bottom decorative anchor frame element */}
                <div className="mt-8 pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-heading font-bold tracking-widest uppercase text-gold/50 group-hover:text-gold transition-colors">
                  <span>View Sadhana Guide</span>
                  <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}