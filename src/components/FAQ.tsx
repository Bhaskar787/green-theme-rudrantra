import { useState, useMemo } from 'react';
import { ChevronDown, Search, ShieldCheck, Sparkles, Truck, Compass, MessageCircle, Phone } from 'lucide-react';
import { GiLotusFlower } from 'react-icons/gi';

type Category = 'All' | 'Authenticity' | 'Wearing & Care' | 'Shipping' | 'Spiritual';

const categoryMeta: Record<Exclude<Category, 'All'>, { icon: typeof ShieldCheck }> = {
  'Authenticity': { icon: ShieldCheck },
  'Wearing & Care': { icon: Sparkles },
  'Shipping': { icon: Truck },
  'Spiritual': { icon: Compass },
};

const faqs: { q: string; a: string; category: Exclude<Category, 'All'> }[] = [
  {
    q: 'How do I know the Rudraksha is genuine and not a fake?',
    a: 'Every Rudraksha from Rudrantra comes with a numbered X-ray laboratory certificate that shows the internal bead structure, mukhi count, and seed density. We also apply the traditional copper coin test and water float test before packaging. Our sourcing is direct from growers in Nepal\'s Arun Valley, bypassing the middlemen who introduce adulterated beads into the market.',
    category: 'Authenticity',
  },
  {
    q: 'What is the difference between Nepali and Java Rudraksha?',
    a: 'Nepali beads, sourced from the Arun and Dolakha valleys, are larger and denser with deeper mukhi lines, and are prized by serious collectors. Java (Indonesian) beads are smaller and more affordable, making them an excellent entry point for new wearers. We stock and clearly label both origins.',
    category: 'Authenticity',
  },
  {
    q: 'How do I know my Rudraksha is authentic and not artificially carved?',
    a: 'Every premium bead ships with an independent X-Ray laboratory certificate confirming the internal compartment structure matches the external mukhi lines, which guarantees zero artificial carving, resin-filling, or tampering. You can verify each certificate number on our lab partner\'s portal at any time.',
    category: 'Authenticity',
  },
  {
    q: 'Can I wear Rudraksha without a religious ceremony or initiation?',
    a: 'Yes. While we recommend the Prana Pratishtha energization ceremony, which we perform for every bead before shipping, Rudraksha can be worn by any sincere person regardless of their religious background. The bead works through its electromagnetic and bioelectric properties, which are intrinsic to the seed itself, not conferred only through ritual.',
    category: 'Spiritual',
  },
  {
    q: 'Which Mukhi is right for me as a beginner?',
    a: 'The 5 Mukhi (Panch Mukhi) is universally recommended as a starting point. Ruled by Jupiter and Lord Kalagni Rudra, it supports general health, mental clarity, and spiritual awareness without any restrictions on who can wear it. It is the most abundant mukhi and also the most forgiving in terms of the wearer\'s lifestyle.',
    category: 'Spiritual',
  },
  {
    q: 'How should I care for and maintain my Rudraksha?',
    a: 'Clean your beads monthly using a soft brush and neem oil or sandalwood oil to maintain the natural oils of the wood. Avoid exposing them to harsh chemicals, perfumes, or saltwater. Remove before bathing or sleeping initially, although once properly attuned to your energy, typically after 40 days of continuous wearing, many practitioners do not remove them at all.',
    category: 'Wearing & Care',
  },
  {
    q: 'What thread or metal should I use to string my Rudraksha?',
    a: 'Red or yellow silk thread is traditional and lets the bead breathe naturally. Silver is considered spiritually neutral and is our most recommended metal for caps and chains; copper is favoured for Saturn-related mukhis, while gold is generally reserved for higher mukhis at a devotee\'s discretion.',
    category: 'Wearing & Care',
  },
  {
    q: 'Can I wear multiple Mukhis at the same time?',
    a: 'Yes, wearing combinations of different Mukhis is common practice and often recommended. Our Siddha Mala contains all 14 Mukhis in a single piece, and we also offer custom-designed combinations based on your birth chart. Some practitioners wear specific Mukhis on different days or positions; our consultants can advise on the optimal combination for you.',
    category: 'Wearing & Care',
  },
  {
    q: 'Do you ship internationally? How long does delivery take?',
    a: 'Yes, we ship worldwide with DHL Express and FedEx. Delivery within India takes 2 to 4 business days. International shipments typically arrive in 7 to 14 business days depending on customs. All international orders are shipped with a commercial invoice reflecting the spiritual and decorative value of the items to ease customs clearance.',
    category: 'Shipping',
  },
  {
    q: 'Is my payment information secure, and what methods do you accept?',
    a: 'All transactions are processed through PCI-DSS compliant gateways with 256-bit encryption. We accept major credit and debit cards, UPI, net banking, and PayPal for international customers. We never store your full card details on our servers.',
    category: 'Shipping',
  },
  {
    q: 'Can I return or exchange my Rudraksha if I am not satisfied?',
    a: 'We offer a 7-day return window for undamaged items in original packaging. Because of the sacred and personal nature of energized Rudraksha, exchanges are handled case-by-case. If you receive a bead that does not match its certificate or has visible damage, we will replace it at no cost, no questions asked.',
    category: 'Shipping',
  },
  {
    q: 'What is the Pashupatinath energization and does it cost extra?',
    a: 'Every bead we sell is blessed in a collective Rudra Abhishekam ceremony performed by our resident Vedic pandits at Pashupatinath Temple in Kathmandu; this is included in every order at no additional charge. For personalized energization with your name and gotra spoken during the ceremony, we offer an upgraded puja service.',
    category: 'Spiritual',
  },
  {
    q: 'Do you offer personalised consultations before I buy?',
    a: 'Yes. Every order over a certain value includes a complimentary consultation with one of our Vedic astrologers, who will review your birth details and recommend a mukhi and combination suited to your specific goals.',
    category: 'Spiritual',
  },
];

const categories: Category[] = ['All', 'Authenticity', 'Wearing & Care', 'Shipping', 'Spiritual'];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return faqs
      .map((faq, originalIndex) => ({ ...faq, originalIndex }))
      .filter((faq) => activeCategory === 'All' || faq.category === activeCategory)
      .filter((faq) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      });
  }, [activeCategory, query]);

  return (
    <section className="py-24 bg-forest-deep relative">
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-5 py-2 rounded-full mb-6">
            <GiLotusFlower className="w-3.5 h-3.5" /> Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-tight leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-cream/60 text-lg leading-relaxed">
            Everything a sincere seeker needs to know before making their sacred choice.
          </p>
        </div>

        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question, e.g. shipping, mukhi, care..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gold/20 bg-forest text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest border transition-all ${
                activeCategory === cat
                  ? 'bg-gold text-forest-deep border-gold shadow-[0_0_15px_rgba(201,151,58,0.3)]'
                  : 'text-gold/70 border-gold/30 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="flex flex-col gap-3">
            {filtered.length === 0 && (
              <div className="text-center py-16 text-cream/50 border border-dashed border-gold/20 rounded-2xl">
                No questions match "{query}". Try a different search term, or ask us directly.
              </div>
            )}
            {filtered.map((faq) => {
              const isOpen = openIndex === faq.originalIndex;
              const Icon = categoryMeta[faq.category].icon;
              return (
                <div
                  key={faq.originalIndex}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-gold/50 bg-forest shadow-[0_0_20px_rgba(201,151,58,0.08)]' : 'border-gold/15 bg-forest/40 hover:border-gold/30'
                  }`}
                >
                  <button
                    className="w-full flex items-center gap-4 justify-between px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : faq.originalIndex)}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`hidden sm:flex w-9 h-9 rounded-full items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-gold text-forest-deep' : 'bg-gold/10 text-gold'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className={`font-heading text-base leading-snug transition-colors ${isOpen ? 'text-gold' : 'text-cream'}`}>
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 sm:pl-[70px]">
                      <div className="h-px bg-gold/15 mb-4" />
                      <p className="font-body text-cream/70 text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="md:sticky md:top-24 md:self-start">
            <div className="bg-forest border border-gold/30 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center mb-2">
                  <MessageCircle className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl text-gold mb-1">Need personal guidance?</h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  Our resident Vedic scholars and gemstone experts are available to clarify your spiritual queries. We typically respond within 3–4 business hours.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-gold/15">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm font-body text-cream hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" /> +91 98765 43210
                </a>
                <p className="text-[10px] text-cream/40 uppercase tracking-widest pl-7">
                  Available Mon-Sat, 10am - 6pm IST
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white text-sm font-heading font-bold uppercase tracking-wider rounded-xl text-center hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="#"
                  className="w-full py-3 border border-gold/30 text-gold text-sm font-heading font-bold uppercase tracking-wider rounded-xl text-center hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}