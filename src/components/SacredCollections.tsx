import { GiSpiralArrow } from 'react-icons/gi';

const collections = [
  { name: "Rudraksha Bracelets", image: "https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214" },
  { name: "Combination & Kawach", image: "https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214" },
  { name: "Siddha Mala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOUVQKThyzQd2LGBwNdsG35nmQcAneZLKgbfkFDJjlsBBx_qX1X0_qr2O&s=10" },
  { name: "Rudraksha Mala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOUVQKThyzQd2LGBwNdsG35nmQcAneZLKgbfkFDJjlsBBx_qX1X0_qr2O&s=10" },
  { name: "Rudraksha Beads", image: "https://i.etsystatic.com/20350453/r/il/1c38f4/4937036824/il_570xN.4937036824_gxmx.jpg" }
];

export function SacredCollections() {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold bg-gold/5 border border-gold/20 px-4 py-1.5 rounded-full inline-block mb-6">
              ॐ Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight">Shop by Category</h2>
          </div>
          <p className="text-cream-soft font-body text-base max-w-md opacity-80 border-l border-gold/30 pl-4">
            Explore our curated selection of authentic Nepali Rudraksha, naturally formed and blessed to support your path.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collections.map((item, i) => (
            <a key={i} href="#" className="group flex flex-col gap-5">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20 relative shadow-lg group-hover:border-gold/70 group-hover:shadow-sacred-glow group-hover:-translate-y-1.5 transition-all duration-500 ring-1 ring-inset ring-white/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                {/* Base tint for consistent card depth */}
                <div className="absolute inset-0 bg-forest-deep/40 group-hover:bg-forest-deep/10 transition-colors duration-500" />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(10,34,24,0.8)] pointer-events-none" />

                {/* Bottom scrim so the label area of the image stays readable */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent pointer-events-none" />

                {/* Corner index number — clean, modern catalog-card detail */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full border border-gold/40 bg-forest-deep/60 backdrop-blur-sm flex items-center justify-center text-gold text-[10px] font-heading font-bold tracking-wide">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Gold hairline that draws in on hover for a crisp, engineered feel */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold to-gold-bright w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
              <span className="font-heading font-semibold text-center text-cream group-hover:text-gold transition-colors tracking-wide">
                {item.name}
              </span>
            </a>
          ))}
          
          <a href="#" className="group flex flex-col gap-5">
            <div className="aspect-square rounded-2xl border border-gold/30 bg-forest-deep flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-gold group-hover:shadow-sacred-glow group-hover:-translate-y-1.5 relative overflow-hidden ring-1 ring-inset ring-white/5">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors relative z-10">
                <GiSpiralArrow className="w-6 h-6" />
              </div>
              <span className="font-display text-lg text-gold group-hover:text-gold-bright transition-colors relative z-10">All Products</span>
            </div>
            <span className="font-heading font-semibold text-center text-transparent">View</span>
          </a>
        </div>
      </div>
    </section>
  );
}