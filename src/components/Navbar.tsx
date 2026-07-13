import { useUI } from '@/context/UIContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Menu, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';

export function Navbar() {
  const { setIsMenuOpen, setIsSearchOpen } = useUI();
  const { setIsCartOpen, cartCount } = useCart();
  const { setIsWishlistOpen, wishlistCount } = useWishlist();
  
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="relative py-2 text-sm font-heading font-medium text-cream hover:text-gold-bright transition-colors group whitespace-nowrap">
      {children}
      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-gold-bright transition-all duration-300 group-hover:w-full" style={{ boxShadow: '0 0 5px #E8C547' }}></span>
    </Link>
  );

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled ? 'bg-forest-deep/95 backdrop-blur-md shadow-[0_4px_20px_rgba(201,151,58,0.1)] border-gold/30' : 'bg-forest border-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        
        {/* LEFT */}
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 text-gold hover:text-gold-bright transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border border-gold overflow-hidden flex items-center justify-center p-1 relative">
              <div className="absolute inset-0 bg-gold/10 rounded-full animate-sacred-glow"></div>
              <img 
                src="https://res.cloudinary.com/deiusxdk9/image/upload/v1771952737/rudrantra/cms/rswcale9xcfa697s2kvw.png" 
                alt="Rudrantra Logo" 
                className="w-full h-full object-cover rounded-full mix-blend-screen"
              />
            </div>
            <span className="font-display text-2xl font-bold tracking-widest text-gold text-gold-gradient">
              Rudrantra
            </span>
          </Link>
        </div>

        {/* CENTER (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 min-w-0 whitespace-nowrap">
          <NavLink href="/">Home</NavLink>
          
          <div className="relative group cursor-pointer py-2 shrink-0">
            <span className="text-sm font-heading font-medium text-cream group-hover:text-gold-bright transition-colors flex items-center gap-1 whitespace-nowrap">
              Rudraksha
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 10 6"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4"/></svg>
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-forest-deep border border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl p-2 w-56 flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />
                <Link href="#" className="relative z-10 px-4 py-3 text-sm font-heading text-cream hover:bg-forest-light hover:text-gold rounded-lg transition-colors border-l-2 border-transparent hover:border-gold whitespace-nowrap">Rudraksha Beads</Link>
                <Link href="#" className="relative z-10 px-4 py-3 text-sm font-heading text-cream hover:bg-forest-light hover:text-gold rounded-lg transition-colors border-l-2 border-transparent hover:border-gold whitespace-nowrap">Rudraksha Mala</Link>
                <Link href="#" className="relative z-10 px-4 py-3 text-sm font-heading text-cream hover:bg-forest-light hover:text-gold rounded-lg transition-colors border-l-2 border-transparent hover:border-gold whitespace-nowrap">Rudraksha Bracelet</Link>
                <Link href="#" className="relative z-10 px-4 py-3 text-sm font-heading text-cream hover:bg-forest-light hover:text-gold rounded-lg transition-colors border-l-2 border-transparent hover:border-gold whitespace-nowrap">Combination & Kawach</Link>
              </div>
            </div>
          </div>
          
          <NavLink href="#">Siddha Mala</NavLink>
          <NavLink href="#">Consultation</NavLink>
          <Link href="#" className="text-sm font-heading font-medium text-cream hover:text-gold-bright transition-colors py-2 flex items-center gap-2 shrink-0 whitespace-nowrap">
            Shravan
            <span className="text-[10px] tracking-widest uppercase bg-crimson text-white px-2 py-0.5 rounded-full font-bold shadow-[0_0_8px_rgba(139,26,26,0.5)]">Event</span>
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-3 md:gap-5 flex-1">
          <div className="hidden md:flex items-center gap-1 mr-2 text-sm font-heading font-medium text-gold">
            <span>₹</span>
            <select className="bg-transparent border-none focus:outline-none cursor-pointer appearance-none text-gold hover:text-gold-bright pr-4 bg-forest-deep">
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>

          <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gold hover:text-gold-bright transition-colors rounded-full hover:bg-forest-light">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="hidden sm:block p-2 text-gold hover:text-gold-bright transition-colors rounded-full hover:bg-forest-light">
            <User className="w-5 h-5" />
          </button>

          <button onClick={() => setIsWishlistOpen(true)} className="p-2 text-gold hover:text-gold-bright transition-colors relative rounded-full hover:bg-forest-light">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-crimson text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-forest-deep">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={() => setIsCartOpen(true)} className="p-2 text-gold hover:text-gold-bright transition-colors relative rounded-full hover:bg-forest-light">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-forest-deep text-[10px] font-bold flex items-center justify-center rounded-full border border-forest-deep">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}