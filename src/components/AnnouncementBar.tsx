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
    <div className="relative bg-[linear-gradient(90deg,#B8912E,#D4AF37,#FDF2B5,#D4AF37,#B8912E)] border-b border-[#8A6D1E]/40 text-[#2D2400] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.25)]">

      {/* Subtle shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/5 to-transparent pointer-events-none" />

      {/* Fine top highlight line for a polished, pressed-metal edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/60 pointer-events-none" />

      {/* Edge fades matching the gold color, slightly deeper for contrast against the marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#B8912E] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#B8912E] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap py-3 items-center font-bold">
        {[...announcements, ...announcements].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center shrink-0 px-7 gap-2.5">
              {/* Icon in its own badge circle — reads like a premium promo chip
                  rather than a loose icon floating next to text */}
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2D2400]/10 border border-[#2D2400]/15 shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="uppercase tracking-[0.15em] text-[11px]">{item.text}</span>
              {/* Diamond divider between messages, ad-strip style */}
              <span className="ml-7 w-1.5 h-1.5 rotate-45 bg-[#2D2400]/25 shrink-0" aria-hidden />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full text-[#2D2400]/70 hover:text-[#2D2400] hover:bg-[#2D2400]/10 transition-colors z-20"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}