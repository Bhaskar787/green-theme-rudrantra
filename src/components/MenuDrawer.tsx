import { useUI } from '@/context/UIContext';
import { X, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

export function MenuDrawer() {
  const { isMenuOpen, setIsMenuOpen } = useUI();

  // Local state lets us play a real closing animation instead of unmounting instantly.
  const [shouldRender, setShouldRender] = useState(isMenuOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      document.body.style.overflow = '';
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen, setIsMenuOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#091a0f]/90 backdrop-blur-md transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`relative w-[90vw] md:w-[62%] max-w-4xl h-full bg-[#091a0f] flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.5)] border-r border-[#D4AF37]/20 transition-transform duration-300 ease-out ${
          isClosing ? '-translate-x-full' : 'translate-x-0 animate-in slide-in-from-left'
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/10">
          <span className="font-display text-3xl text-[#D4AF37] tracking-widest">Rudrantra</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-[#D4AF37]/70 hover:text-[#D4AF37] hover:rotate-90 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Col 1: Shop */}
            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-bold tracking-widest text-[#D4AF37]/50 uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-[#D4AF37]/30"></span> Shop
              </h3>
              <nav className="flex flex-col gap-5">
                {['Pooja', 'Rudraksha Bracelet', 'Japa Mala', 'Combination', 'Shaligram', 'Murtis & Yantra'].map((item, i) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${i * 50}ms` }}
                    className="text-2xl text-white/90 hover:text-[#D4AF37] transition-colors group flex items-center justify-between border-b border-white/5 pb-3 animate-in fade-in slide-in-from-left-2 fill-mode-both duration-500"
                  >
                    {item}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#D4AF37]" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 2: Guidance & Company */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold tracking-widest text-[#D4AF37]/50 uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-[#D4AF37]/30"></span> Guidance & Trust
                </h3>
                <nav className="flex flex-col gap-4">
                  {['Authenticity', 'Book Consultation', 'Custom Build', 'Read our Story'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/60 hover:text-[#D4AF37] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold tracking-widest text-[#D4AF37]/50 uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-[#D4AF37]/30"></span> Company
                </h3>
                <nav className="flex flex-col gap-4">
                  {['About Us', 'Contact', 'Shipping & Returns', 'FAQ'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/60 hover:text-[#D4AF37] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Col 3: Featured & Social */}
            <div className="hidden md:flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden relative group h-80 border border-[#D4AF37]/20">
                <img 
                  src="https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840" 
                  alt="Featured" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a0f] via-transparent to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-xl mb-2">Explore the Siddha Mala</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
