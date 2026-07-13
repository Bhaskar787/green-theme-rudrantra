import { useState } from 'react';
import { X, Sparkles, Leaf, ShoppingCart, Truck } from 'lucide-react';

// Map icons to the messages
const announcements = [
  { text: 'Free Vedic Consultation with every order above ₹5,000', icon: Sparkles },
  { text: 'Authentic Nepal-origin Rudraksha — Lab Certified & Energized', icon: Leaf },
  { text: 'Shravan Special: 10% off all Siddha Malas this month', icon: ShoppingCart },
  { text: 'Free Worldwide Shipping on All Mala Orders', icon: Truck },
];

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-[linear-gradient(90deg,#D4AF37,#FDF2B5,#D4AF37)] border-b border-white/20 text-[#2D2400] overflow-hidden shadow-lg">
      
      {/* Subtle shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Edge fades matching the new gold color */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#D4AF37] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap py-3 items-center font-bold">
        {[...announcements, ...announcements].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center shrink-0 px-6">
              <Icon className="w-4 h-4 mr-2" />
              <span className="uppercase tracking-[0.15em] text-[11px]">{item.text}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2D2400]/60 hover:text-black transition-colors p-1 z-20"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}