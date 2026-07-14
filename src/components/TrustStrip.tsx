import { GiLotusFlower, GiMeditation, GiMountainCave } from 'react-icons/gi';

const trustItems = [
  {
    icon: GiMeditation,
    title: "Vedic Energization",
    desc: "Every bead is blessed according to ancient Vedic scriptures."
  },
  {
    icon: GiMountainCave,
    title: "Himalayan Origin",
    desc: "Hand-selected exclusively from Nepal's sacred Arun Valley."
  },
  {
    icon: GiLotusFlower,
    title: "Lab Verification",
    desc: "100% authentic, X-Ray certified for total peace of mind."
  }
];

export function TrustStrip() {
  return (
    /* Deep Forest Background */
    <section className="relative py-24 border-y border-gold/20 bg-[#0A1A14]">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/09/86/17/90/1000_F_986179075_gIxHHqtJZdtdkiOag24PniL2jUWTuXM1.jpg")' }}
      />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A14]/85 via-transparent to-[#0A1A14]/85" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="relative p-8 rounded-3xl border border-gold/10 bg-[#0F261E]/60 backdrop-blur-md flex flex-col items-center text-center group hover:bg-[#0F261E] hover:border-gold/30 transition-all duration-500"
            >
              {/* Glowing Icon Wrapper */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gold rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-full border border-gold/30 bg-[#0A1A14] flex items-center justify-center text-gold shadow-lg group-hover:scale-105 transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
              </div>
              
              {/* Typography */}
              <h3 className="text-xl font-display font-bold text-gold mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-300 font-body text-sm leading-relaxed max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}