import { useCart } from '@/context/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="relative w-full max-w-md h-full bg-forest-mid flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 border-l border-gold/30">
        <div className="flex items-center justify-between p-6 border-b border-gold/20 bg-forest-deep">
          <h2 className="font-display text-2xl text-gold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gold hover:text-gold-bright hover:bg-forest transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-forest-mid">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-cream-soft opacity-60">
              <ShoppingBag className="w-16 h-16 mb-4 text-gold/50" />
              <p className="font-heading text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-gold/20 rounded-xl bg-forest-deep">
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
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-0.5 text-gold hover:bg-gold hover:text-forest transition-colors">-</button>
                        <span className="px-3 text-xs text-cream">{item.qty}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-0.5 text-gold hover:bg-gold hover:text-forest transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs text-crimson hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gold/20 bg-forest-deep">
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading text-cream">Subtotal</span>
              <span className="font-heading text-gold text-xl">{formatPrice(subtotal)}</span>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-gold to-gold-soft text-forest font-heading font-bold rounded-xl hover:shadow-sacred-glow transition-all">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}