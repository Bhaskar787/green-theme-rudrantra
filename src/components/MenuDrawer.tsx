import { useUI } from '@/context/UIContext';
import { X, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect } from 'react';

export function MenuDrawer() {
  const { isMenuOpen, setIsMenuOpen } = useUI();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-deep/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Panel */}
      <div className="relative w-[90vw] md:w-[62%] max-w-4xl h-full bg-forest-deep flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-left duration-500 border-r border-gold/30">
        
        <div className="flex items-center justify-between p-6 border-b border-gold/20 bg-forest">
          <span className="font-display text-3xl text-gold-gradient tracking-widest">Rudrantra</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gold hover:bg-gold/10 hover:text-gold-bright rounded-full transition-colors border border-transparent hover:border-gold/30"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 relative">
          <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-heading font-bold tracking-widest text-gold/60 uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-gold/40"></span> Shop
              </h3>
              <nav className="flex flex-col gap-5">
                {['Pooja', 'Rudraksha Bracelet', 'Japa Mala', 'Combination', 'Shaligram', 'Murtis & Yantra'].map(item => (
                  <Link key={item} href="#" className="font-display text-2xl text-cream hover:text-gold transition-colors group flex items-center justify-between border-b border-gold/10 pb-3">
                    {item}
                    <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-heading font-bold tracking-widest text-gold/60 uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-gold/40"></span> Guidance & Trust
                </h3>
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Authenticity</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Book Consultation</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Custom Build</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Read our Story</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-heading font-bold tracking-widest text-gold/60 uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-gold/40"></span> Company
                </h3>
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">About Us</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Contact</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">Shipping & Returns</Link>
                  <Link href="#" className="text-cream/80 font-heading text-lg tracking-wider hover:text-gold transition-colors">FAQ</Link>
                </nav>
              </div>
            </div>

            {/* Col 3 */}
            <div className="hidden md:flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden relative group h-80 border border-gold/30">
                <img 
                  src="https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840" 
                  alt="Sacred Ritual" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent p-6 flex flex-col justify-end group-hover:from-forest-deep/90 transition-all">
                  <span className="text-gold font-display text-2xl mb-2 text-gold-gradient">Explore the Siddha Mala</span>
                  <Link href="#" className="text-xs font-heading uppercase tracking-widest text-cream hover:text-gold transition-colors flex items-center gap-1 group/link">
                    Discover collection <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-12 h-12 rounded-full border border-gold/30 bg-forest flex items-center justify-center text-gold hover:bg-gold hover:text-forest-deep transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gold/30 bg-forest flex items-center justify-center text-gold hover:bg-gold hover:text-forest-deep transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}