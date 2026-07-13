import { useState } from 'react';
import { X } from 'lucide-react';

const messages = [
  '🪔 Free Vedic Consultation with every order above ₹5,000',
  '🌿 Authentic Nepal-origin Rudraksha — Lab Certified & Energized',
  '✨ Shravan Special: 10% off all Siddha Malas this month',
  '🚚 Free Worldwide Shipping on All Mala Orders',
];

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#0A1A0F] via-forest-mid to-[#0A1A0F] border-b border-gold/20 text-gold overflow-hidden">
      {/* Edge fades so the ticker text doesn't hard-cut at the container edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 sm:w-24 bg-gradient-to-r from-[#0A1A0F] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 sm:w-24 bg-gradient-to-l from-[#0A1A0F] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap py-2.5 items-center font-heading">
        {/* Render the message set twice back-to-back so the loop is seamless (news-ticker style) */}
        {[...messages, ...messages].map((text, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-6 sm:px-8 uppercase tracking-[0.15em] text-[11px]">{text}</span>
            <span className="text-gold/50 text-sm">✦</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/40 hover:text-gold transition-colors p-1 z-20"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
