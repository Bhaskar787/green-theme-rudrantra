import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, ShoppingCart, Sparkles } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();

  // Local state lets us play a real closing animation instead of unmounting instantly.
  const [shouldRender, setShouldRender] = useState(isCartOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    if (isCartOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isCartOpen]);

  // Close on Escape for a11y.
  useEffect(() => {
    if (!isCartOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isCartOpen, setIsCartOpen]);

  if (!shouldRender) return null;

  const handleRemove = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingId(null);
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div
        className={`absolute inset-0 bg-forest-deep/80 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <div
        className={`relative w-full max-w-md h-full bg-[#091a0f] flex flex-col shadow-2xl border-l border-gold/30 overflow-hidden transition-transform duration-300 ease-out ${
          isClosing ? 'translate-x-full' : 'translate-x-0 animate-in slide-in-from-right'
        }`}
      >
        {/* Faint mandala watermark for a quiet Vedic touch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] aspect-square bg-mandala opacity-[0.04] pointer-events-none" />
        {/* Giant OM watermark, echoing the Newsletter section */}
        <div className="absolute -bottom-8 -right-6 text-[220px] text-gold/[0.04] font-serif select-none pointer-events-none leading-none">
          ॐ
        </div>

        <div className="relative z-10 flex items-center justify-between p-6 border-b border-gold/20 bg-forest-deep">
          <h2 className="font-display text-2xl text-gold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> Your Sacred Cart
            {items.length > 0 && (
              <span className="text-xs font-heading font-bold bg-gold text-forest-deep rounded-full w-6 h-6 flex items-center justify-center ml-1">
                {items.reduce((n, i) => n + i.qty, 0)}
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-2 text-gold hover:text-gold-bright hover:bg-forest hover:rotate-90 transition-all duration-300 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto p-6 bg-[#091a0f]/60">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-cream-soft text-center animate-in fade-in zoom-in-95 duration-500">
              <ShoppingCart className="w-14 h-14 mb-4 text-gold/40" />
              <p className="font-heading text-lg mb-2">Your cart awaits its first bead</p>
              <p className="text-sm text-cream-soft/50 mb-6 max-w-[240px] italic">
                ॐ नमः शिवाय — begin your journey with a Rudraksha chosen for your intention.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full border border-gold/40 text-gold text-xs font-heading font-bold uppercase tracking-widest hover:bg-gold hover:text-forest-deep transition-colors"
              >
                Explore Rudraksha
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => {
                const isRemoving = removingId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`flex gap-4 p-4 border border-gold/20 rounded-xl bg-forest-deep transition-all duration-200 hover:border-gold/40 ${
                      isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-gold/30 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading text-gold text-sm font-semibold mb-1 line-clamp-1">{item.name}</h4>
                        <p className="text-cream text-xs">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gold/30 rounded bg-forest">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                            className="px-2 py-0.5 text-gold hover:bg-gold hover:text-forest transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs text-cream tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                            className="px-2 py-0.5 text-gold hover:bg-gold hover:text-forest transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-xs text-crimson hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="relative z-10 p-6 border-t border-gold/20 bg-forest-deep">
            <p className="flex items-center justify-center gap-1.5 text-[11px] font-heading tracking-widest uppercase text-gold/50 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Energized at Pashupatinath before it ships
            </p>
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading text-cream">Subtotal</span>
              <span className="font-heading text-gold text-xl">{formatPrice(subtotal)}</span>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-gold to-gold-soft text-forest font-heading font-bold rounded-xl hover:shadow-sacred-glow transition-all flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Proceed to Checkout
            </button>
            <p className="text-center text-[11px] text-cream-soft/40 font-body italic mt-4">
              Namaste — every order is a small step on the path.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}