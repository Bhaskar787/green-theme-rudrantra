export function CategoryShowcase() {
  return (
    <section className="py-20 bg-forest-deep relative">
      {/* Subtle star field overlay */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold border border-gold/30 px-4 py-1.5 rounded-full inline-block mb-6 bg-gold/5">
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient mb-4">Sacred Collections</h2>
          <p className="text-cream-soft font-body text-lg opacity-80 max-w-2xl mx-auto">
            Authentic Nepali Rudraksha, curated for your specific spiritual intentions.
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          
          {/* Card 1: Rudraksha Bracelets */}
          <a href="#" className="relative group md:row-span-2 overflow-hidden rounded-2xl h-[300px] md:h-auto block border border-gold/30">
            <img 
              src="https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308" 
              alt="Rudraksha Bracelets"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display text-3xl text-gold mb-2 group-hover:text-gold-bright transition-colors">Rudraksha Bracelets</h3>
              <p className="text-cream text-base font-body opacity-90">Everyday protection & balance</p>
            </div>
            {/* Hover inner border */}
            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 rounded-xl pointer-events-none" />
          </a>

          {/* Card 2: Combination & Kawach */}
          <a href="#" className="relative group overflow-hidden rounded-2xl h-[240px] md:h-auto block border border-gold/30">
            <img 
              src="https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg" 
              alt="Combination & Kawach"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl text-gold group-hover:text-gold-bright transition-colors">Combination & Kawach</h3>
            </div>
            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 rounded-xl pointer-events-none" />
          </a>

          {/* Card 3: Siddha Mala (Masterpiece) */}
          <a href="#" className="relative group md:row-span-2 overflow-hidden rounded-2xl h-[300px] md:h-auto block border border-gold/50 shadow-sacred-glow">
            <img 
              src="https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840" 
              alt="Siddha Mala"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/10 opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-crimson text-white text-xs font-heading font-bold uppercase tracking-widest rounded mb-4 shadow-lg">Masterpiece</span>
              <h3 className="font-display text-3xl md:text-4xl text-gold mb-3 group-hover:text-gold-bright transition-colors text-gold-gradient">Siddha Mala</h3>
              <p className="text-cream text-base font-body opacity-90">The divine ensemble: 1 to 14 Mukhi naturally strung.</p>
            </div>
            <div className="absolute inset-4 border border-gold/20 group-hover:border-gold/50 transition-colors duration-500 rounded-xl pointer-events-none" />
          </a>

          {/* Card 4: Single Beads */}
          <a href="#" className="relative group overflow-hidden rounded-2xl h-[240px] md:h-auto block border border-gold/30">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10" 
              alt="Single Beads"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl text-gold group-hover:text-gold-bright transition-colors">Single Beads</h3>
            </div>
            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 rounded-xl pointer-events-none" />
          </a>

        </div>
      </div>
    </section>
  );
}