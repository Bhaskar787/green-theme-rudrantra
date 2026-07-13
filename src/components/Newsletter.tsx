import { useState } from 'react';
import { GiByzantinTemple, GiFlame, GiMoon, GiBookCover } from 'react-icons/gi';

const offerings = [
  {
    icon: GiByzantinTemple,
    title: 'Rare Bead Arrivals',
    desc: 'First access to naturally-formed, high-mukhi and collector-grade beads sourced from Nepal, before they reach our shelves.',
  },
  {
    icon: GiMoon,
    title: 'Panchang & Muhurta Alerts',
    desc: 'Auspicious tithis for energization, mala-wearing, and abhishekam — timed to the lunar calendar and Vedic panchang.',
  },
  {
    icon: GiBookCover,
    title: 'Wisdom from Our Scholars',
    desc: 'Short teachings on mantra, mukhi significance, and the Shiva Purana, shared by our resident Vedic pandits.',
  },
];

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-forest-light relative overflow-hidden">
      {/* Himalayan misty peaks background */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-forest border border-gold/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative">
          
          {/* Giant decorative OM watermark */}
          <div className="absolute -top-10 -right-10 text-[300px] text-gold/5 font-serif select-none pointer-events-none leading-none">
            ॐ
          </div>

          {/* Left/Top Content & Form Area */}
          <div className="p-8 md:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-between relative z-10 bg-forest-deep/80 backdrop-blur border-r border-gold/10">
            <div>
              <span className="flex items-center gap-2 text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold mb-6">
                <span className="w-8 h-px bg-gold"></span>
                Parivar · Our Sacred Circle
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight leading-tight mb-6">
                Join Our Spiritual Circle
              </h2>
              <p className="text-cream/80 font-body text-base md:text-lg leading-relaxed max-w-xl mb-12">
                Receive updates on rare bead arrivals, auspicious days for energization, and exclusive insights from
                our Vedic scholars — a quiet correspondence rooted in tradition, sent only when it truly matters.
              </p>

              {/* Dynamic Subscription State Area */}
              {submitted ? (
                <div className="bg-gold/10 p-8 rounded-2xl border border-gold/30 max-w-md animate-in zoom-in duration-500 shadow-sacred-glow">
                  <GiFlame className="w-10 h-10 text-gold mb-4" />
                  <span className="block text-2xl font-display text-gold mb-2">
                    Namaste! You've joined our sacred circle 🙏
                  </span>
                  <span className="block text-sm font-body text-cream-soft/90 leading-relaxed">
                    Watch your inbox for our next Panchang update and rare bead arrival notification.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 text-sm font-body rounded-full border border-gold/40 bg-forest/50 placeholder:text-cream/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-cream shadow-inner"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-gold to-gold-soft text-forest-deep font-heading font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:shadow-sacred-glow whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row gap-6 sm:items-center text-xs font-heading tracking-widest text-gold/60 uppercase">
              <span>Trusted by 12,000+ seekers</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold/30"></span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Right Panel - Offerings */}
          <div className="lg:col-span-5 p-8 md:p-12 relative z-10 flex flex-col justify-center bg-forest/60">
            <div className="space-y-6">
              {offerings.map((o) => {
                const IconComponent = o.icon;
                return (
                  <div
                    key={o.title}
                    className="bg-forest-deep border border-gold/20 rounded-2xl p-6 shadow-md group hover:border-gold/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <span className="w-12 h-12 rounded-full border border-gold/30 bg-forest flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors shrink-0 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-gold mb-2">
                          {o.title}
                        </h3>
                        <p className="text-sm font-body text-cream/70 leading-relaxed">
                          {o.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}