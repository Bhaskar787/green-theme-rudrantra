import { useUI } from '@/context/UIContext';
import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useUI();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 px-4">
      <div 
        className="absolute inset-0 bg-forest-deep/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />
      
      <div className="relative w-full max-w-3xl bg-forest border border-gold/30 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        <div className="flex items-center p-4 border-b border-gold/20">
          <Search className="w-6 h-6 text-gold ml-2" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search sacred rudraksha, mukhis, or intentions..."
            className="flex-1 bg-transparent border-none text-cream text-lg md:text-xl px-4 py-2 focus:outline-none placeholder:text-cream/30 font-heading"
          />
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-gold hover:text-gold-bright transition-colors rounded-full hover:bg-forest-light"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 bg-forest-light/50">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {['Siddha Mala', '1 Mukhi', 'Prosperity', 'Meditation', 'Gauri Shankar', '14 Mukhi'].map((term) => (
              <button key={term} className="px-3 py-1.5 rounded-full border border-gold/20 text-cream-soft text-sm hover:border-gold hover:text-gold transition-colors">
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}