import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, items, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />
      
      <div className="relative w-full max-w-md h-full bg-forest-mid flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 border-l border-gold/30">
        <div className="flex items-center justify-between p-6 border-b border-gold/20 bg-forest-deep">
          <h2 className="font-display text-2xl text-gold flex items-center gap-2">
            <Heart className="w-6 h-6" /> Sacred Wishlist
          </h2>
          <button 
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-gold hover:text-gold-bright hover:bg-forest transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-forest-mid">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-cream-soft opacity-60">
              <Heart className="w-16 h-16 mb-4 text-gold/50" />
              <p className="font-heading text-lg">Your wishlist is empty</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="group relative flex flex-col bg-forest-deep rounded-2xl p-3 border border-gold/20">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3 border border-gold/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="absolute top-2 right-2 p-1.5 bg-forest-deep/80 backdrop-blur rounded-full text-gold hover:bg-forest hover:text-crimson transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="font-heading text-sm text-gold font-semibold mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-cream mb-3">{formatPrice(item.price)}</p>
                  <button 
                    onClick={() => {
                      addToCart(item);
                      setIsWishlistOpen(false);
                    }}
                    className="mt-auto w-full py-2 bg-forest border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-gold hover:text-forest transition-colors flex items-center justify-center gap-1"
                  >
                    <ShoppingCart className="w-3 h-3" /> Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}