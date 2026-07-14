import { ArrowRight, Clock } from 'lucide-react';
import { GiBookCover } from 'react-icons/gi';

const posts = [
  {
    category: 'Sacred Knowledge',
    title: 'The Science Behind Rudraksha: What Modern Research Reveals',
    excerpt: 'Ancient Vedic wisdom meets contemporary bioelectric research. Studies from NIMHANS and IIT demonstrate measurable electromagnetic properties in authentic Rudraksha beads.',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://rudrakx.com/_next/image?url=https%3A%2F%2Fv2.rudrakx.com%2F%2Fmedia%2Ffiler_public%2F93%2Fe9%2F93e9400e-953a-4039-b884-54f49179f7ed%2Fscientific-research-on-rudraksha.webp&w=3840&q=75',
    badge: 'Featured',
  },
  {
    category: 'Mukhi Guide',
    title: 'Choosing Between 5 and 7 Mukhi: A Deep Astrological Comparison',
    excerpt: 'Jupiter vs Saturn energy — understand which ruling deity aligns with your current planetary dasha before making your choice.',
    readTime: '5 min read',
    date: 'May 2026',
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    badge: null,
  },
  {
    category: 'Vedic Practice',
    title: 'How to Energize and Maintain Your Rudraksha at Home',
    excerpt: 'A step-by-step guide to Prana Pratishtha: the daily care ritual, monthly oil treatment, and the right mantras for your specific mukhi.',
    readTime: '4 min read',
    date: 'April 2026',
    image: 'https://rudrahouse.com/storage/uploads/product/5-mukhi-rudraksha-kantha-mala/5-mukhi-rudraksha-kantha-mala.jpeg',
    badge: null,
  },
  {
    category: 'Authenticity',
    title: 'Six Tests to Spot a Fake Rudraksha Before You Buy',
    excerpt: "Float test, copper test, X-ray analysis — a comprehensive buyer's guide to identifying adulterated and chemically treated beads in the market.",
    readTime: '6 min read',
    date: 'March 2026',
    image: 'https://www.mkhastrovastumlm.com/wp-content/uploads/2024/01/rudrasha.jpg',
    badge: 'Popular',
  },
];

export function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-24 bg-forest-light relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-4 py-1.5 rounded-full mb-5">
              <GiBookCover className="w-3.5 h-3.5" /> Wisdom Journal
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-tight">Sacred Knowledge</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-gold font-heading font-bold uppercase tracking-widest text-xs border-b border-gold/30 pb-1 hover:border-gold hover:text-gold-bright transition-colors group">
            All Articles <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 mb-6">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
              {featured.badge && (
                <span className="absolute top-5 left-5 text-[10px] font-heading font-bold uppercase tracking-widest bg-gold text-forest-deep px-3 py-1.5 rounded-full shadow-md">
                  {featured.badge}
                </span>
              )}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-gold/70 mb-3 block">{featured.category}</span>
                <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight group-hover:text-gold transition-colors">{featured.title}</h3>
              </div>
            </div>
            <p className="font-body text-cream/60 text-base leading-relaxed mb-5 max-w-xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs font-heading uppercase tracking-widest text-gold/50">
              <span>{featured.date}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" />
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              <a href="#" className="ml-auto text-gold font-bold hover:text-gold-bright transition-colors flex items-center gap-1 group/link">
                Read More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((post, i) => (
              <div key={i} className="group flex gap-5 cursor-pointer p-4 rounded-xl border border-gold/10 hover:border-gold/40 hover:bg-forest-deep/50 transition-all duration-300">
                <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden border border-gold/15">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-heading font-bold uppercase tracking-widest text-gold/60">{post.category}</span>
                      {post.badge && (
                        <span className="text-[8px] font-heading font-bold uppercase bg-crimson text-white px-2 py-0.5 rounded">{post.badge}</span>
                      )}
                    </div>
                    <h4 className="font-heading text-sm text-cream leading-snug line-clamp-2 group-hover:text-gold transition-colors">{post.title}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-heading uppercase tracking-widest text-gold/40 mt-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
            <a href="#" className="mt-2 w-full py-3.5 border border-gold/30 rounded-xl text-gold font-heading font-bold uppercase tracking-widest text-xs text-center hover:border-gold hover:bg-gold/5 transition-all flex items-center justify-center gap-2">
              View All Articles <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
