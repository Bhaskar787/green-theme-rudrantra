import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';
import { Heart, ShoppingBag } from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';
import { useMemo, useState } from 'react';

interface Product {
  id: string;
  name: string;
  mukhi: string;
  origin: 'Nepal' | 'Java';
  desc: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stockLeft?: number;
}

const products: Product[] = [
  {
    id: 'p1',
    name: '5 Mukhi Rudraksha Bracelet',
    mukhi: '5 Mukhi',
    origin: 'Nepal',
    desc: 'An authentic bracelet symbolizing abundance and calm. Lab certified, Nepal origin, silver-capped.',
    price: 9170,
    originalPrice: 11800,
    rating: 4.8,
    reviews: 612,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Bestseller',
    stockLeft: 6,
  },
  {
    id: 'p2',
    name: '7 Mukhi Rudraksha Beads',
    mukhi: '7 Mukhi',
    origin: 'Nepal',
    desc: 'Seven natural lines symbolizing abundance and grace, ruled by Goddess Mahalakshmi.',
    price: 1742.3,
    originalPrice: 2100,
    rating: 4.7,
    reviews: 348,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Natural',
    stockLeft: 14,
  },
  {
    id: 'p3',
    name: '10 Mukhi Rudraksha Beads',
    mukhi: '10 Mukhi',
    origin: 'Nepal',
    desc: 'Contains natural clefts symbolizing Lord Vishnu — ultimate divine protection and stability.',
    price: 5226.9,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 289,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Featured',
    stockLeft: 9,
  },
  {
    id: 'p4',
    name: '2 Mukhi Rudraksha Beads',
    mukhi: '2 Mukhi',
    origin: 'Nepal',
    desc: 'Naturally formed with two clear lines or faces, fostering unity, harmony, and partnership.',
    price: 39431,
    originalPrice: 45000,
    rating: 4.9,
    reviews: 96,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Rare',
    stockLeft: 3,
  },
  {
    id: 'p5',
    name: 'Siddha Mala (1–14 Mukhi)',
    mukhi: 'Combination',
    origin: 'Nepal',
    desc: 'A complete devotional set spanning fourteen mukhi types, energized and strung on red silk thread.',
    price: 24999,
    originalPrice: 29999,
    rating: 5.0,
    reviews: 154,
    image: 'https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?auto=format&fit=crop&w=600&q=80',
    badge: 'Collector’s Choice',
    stockLeft: 4,
  },
  {
    id: 'p6',
    name: '1 Mukhi Rudraksha Pendant',
    mukhi: '1 Mukhi',
    origin: 'Nepal',
    desc: 'The rarest of all mukhis, representing Lord Shiva himself. Comes with a dedicated silver locket and certificate.',
    price: 128500,
    rating: 5.0,
    reviews: 21,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'Ultra Rare',
    stockLeft: 1,
  },
  {
    id: 'p7',
    name: '3 Mukhi Rudraksha Mala, 108 Beads',
    mukhi: '3 Mukhi',
    origin: 'Nepal',
    desc: 'A full 108-bead japa mala ruled by Agni, aiding focus, willpower, and the release of past guilt.',
    price: 6850,
    originalPrice: 8200,
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.4&fp-y=0.6',
    badge: 'Natural',
    stockLeft: 11,
  },
  {
    id: 'p8',
    name: '6 Mukhi Rudraksha Bracelet',
    mukhi: '6 Mukhi',
    origin: 'Java',
    desc: 'A gentle, affordable entry point ruled by Lord Kartikeya, favoured for confidence and clear communication.',
    price: 2450,
    originalPrice: 2900,
    rating: 4.5,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Value',
    stockLeft: 22,
  },
];

const filterTabs = ['All', 'Nepal Origin', 'Java Origin', 'Under ₹10,000'] as const;
type FilterTab = (typeof filterTabs)[number];

export function BestSellers() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeTab === 'Nepal Origin') return p.origin === 'Nepal';
      if (activeTab === 'Java Origin') return p.origin === 'Java';
      if (activeTab === 'Under ₹10,000') return p.price < 10000;
      return true;
    });
  }, [activeTab]);

  return (
    <section className="py-24 bg-forest-deep relative">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-4 px-4 pt-0 pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>

      {/* Background mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-mandala opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold bg-gold/5 border border-gold/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Sacred Offerings
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight mt-2">
              Trending Now
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-gold font-heading font-bold uppercase tracking-wider text-sm hover:text-gold-bright transition-colors group"
          >
            View All Best Sellers
            <span className="w-8 h-px bg-gold group-hover:w-12 transition-all"></span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-gold/20 mb-10 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          <div className="flex gap-4 pb-4 whitespace-nowrap">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-heading font-semibold tracking-widest transition-all border ${
                  activeTab === tab
                    ? 'bg-gold text-forest-deep border-gold shadow-sacred-glow'
                    : 'bg-forest text-cream/70 border-gold/20 hover:border-gold/50 hover:text-gold'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product) => {
            const isSaved = isInWishlist(product.id);
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;
            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-forest border border-gold/20 rounded-xl p-4 hover:border-gold hover:shadow-sacred-glow transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-lg overflow-hidden border border-gold/10 mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Subtle inner shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 items-start">
                    {product.badge && (
                      <span className="bg-crimson text-white text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md border border-crimson/50">
                        {product.badge}
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="bg-gold text-forest-deep text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
                        {discount}% Off
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="absolute top-3 right-3 w-9 h-9 bg-forest-deep/80 backdrop-blur border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-forest-deep transition-all shadow-lg z-10"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform ${
                        isSaved ? 'fill-gold text-gold scale-110' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Add - Desktop Hover */}
                  <div className="absolute bottom-0 left-0 w-full p-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full py-3 bg-forest-deep/95 backdrop-blur text-gold border border-gold font-heading font-bold uppercase tracking-widest rounded hover:bg-gold hover:text-forest-deep transition-colors shadow-sacred-glow flex items-center justify-center gap-2 text-xs"
                    >
                      <ShoppingBag className="w-4 h-4" /> Quick Add
                    </button>
                  </div>
                </div>

                {/* Content Details Area */}
                <div className="flex flex-col flex-1 px-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <GiStarSattelites
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.round(product.rating) ? 'text-gold' : 'text-forest-light'
                          }`}
                        />
                      ))}
                      <span className="text-[10px] font-body text-cream/50 ml-1">({product.reviews})</span>
                    </div>
                    <span className="text-[10px] font-heading font-bold text-cream/60 uppercase tracking-widest border border-cream/20 px-2 py-0.5 rounded">
                      {product.origin}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-gold font-semibold mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm font-body text-cream-soft/70 line-clamp-2 mb-4 flex-1">
                    {product.desc}
                  </p>

                  <div className="flex items-baseline gap-3 mt-auto pt-4 border-t border-gold/10">
                    <span className="font-display text-xl font-bold text-cream">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm font-body text-cream/40 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Lab Certified Strip */}
                  <div className="mt-4 bg-gold/10 border border-gold/20 py-1.5 px-3 rounded flex items-center justify-center gap-2">
                    <img src="https://img.icons8.com/color/48/warranty.png" alt="cert" className="w-4 h-4 filter brightness-200 sepia opacity-80" />
                    <span className="text-[10px] font-heading font-bold text-gold uppercase tracking-widest">
                      Lab Certified
                    </span>
                  </div>

                  {/* Mobile Add Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full py-3 border border-gold text-gold text-xs font-heading font-bold uppercase tracking-widest rounded hover:bg-gold hover:text-forest transition-colors lg:hidden"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Sub Anchor Link */}
        <div className="flex justify-center mt-12 md:hidden">
          <a
            href="#"
            className="text-gold font-heading font-bold uppercase tracking-widest text-xs border-b border-gold/30 pb-1"
          >
            View All Best Sellers
          </a>
        </div>
      </div>
    </section>
  );
}