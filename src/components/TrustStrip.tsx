import { GiLotusFlower, GiMeditation, GiMountainCave } from 'react-icons/gi';

const trustItems = [
  {
    icon: GiMeditation,
    title: "Vedic Energization",
    desc: "Every bead is blessed according to ancient scriptures"
  },
  {
    icon: GiMountainCave,
    title: "Himalayan Origin",
    desc: "Hand-selected exclusively from Nepal's sacred Arun Valley"
  },
  {
    icon: GiLotusFlower,
    title: "Lab Verification",
    desc: "100% authentic, X-Ray certified for peace of mind"
  }
];

export function TrustStrip() {
  return (
    <section className="w-full relative py-20 border-y border-gold/20 overflow-hidden bg-forest-mid">
      {/* Background with Mt. Everest overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516302350523-4a2b77b39054?auto=format&fit=crop&w=1920&q=80")' }}
      />
      {/* Mandala watermark */}
      <div className="absolute inset-0 bg-mandala opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with golden border */}
              <div className="w-20 h-20 rounded-full border-2 border-gold/40 bg-forest-deep flex items-center justify-center mb-6 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-sacred-glow">
                <item.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-display font-bold text-gold mb-3 text-gold-gradient">
                {item.title}
              </h3>
              <p className="text-cream-soft text-base font-body max-w-[240px] opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}