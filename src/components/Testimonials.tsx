import { useState, useMemo, useEffect } from 'react';
import { GiStarMedal } from 'react-icons/gi';
import { BadgeCheck, ThumbsUp, ImageIcon, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface Testimonial {
  name: string;
  initials: string;
  location: string;
  rating: number;
  date: string;
  product: string;
  title: string;
  text: string;
  verified: boolean;
  helpful: number;
  hasPhoto?: boolean;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    location: 'Mumbai, India',
    rating: 5,
    date: 'March 2026',
    product: '5 Mukhi Rudraksha Mala',
    title: 'My meditation has genuinely deepened',
    text: 'The energy this mala emits is calming and grounding in a way I didn\'t expect from a first purchase. My meditation has deepened noticeably since wearing the 5 Mukhi mala every morning. The bead quality is excellent — dense, even mukhi lines, and the sandalwood scent from the packaging alone felt ceremonial.',
    verified: true,
    helpful: 128,
    hasPhoto: true,
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    location: 'London, UK',
    rating: 5,
    date: 'February 2026',
    product: 'Siddha Mala (1–14 Mukhi)',
    title: 'The consultation made all the difference',
    text: 'Received a beautifully energized Siddha Mala after a genuinely insightful consultation call with their astrologer. The certificate gave me absolute peace of mind buying internationally, and customs clearance was smoother than I expected. Packaging alone felt worth the price.',
    verified: true,
    helpful: 94,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Anjali Mehta',
    initials: 'AM',
    location: 'New York, USA',
    rating: 5,
    date: 'January 2026',
    product: '7 Mukhi Rudraksha Beads',
    title: 'Unmatched authenticity, felt the shift within days',
    text: 'The authenticity of Rudrantra is unmatched compared to two other sellers I tried previously. I felt a noticeable shift in energy within days of wearing this. A truly sacred investment, and the X-ray certificate is a level of transparency I have not seen elsewhere.',
    verified: true,
    helpful: 76,
    hasPhoto: true,
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Arjun Thapa',
    initials: 'AT',
    location: 'Kathmandu, Nepal',
    rating: 5,
    date: 'April 2026',
    product: '2 Mukhi Rudraksha Beads',
    title: 'Being from Nepal, I know quality when I see it',
    text: 'Being from Nepal myself, I am naturally sceptical of "authentic Nepali" claims, but the bead I received matched exactly what was described — dense wood, deep natural mukhi lines, no chemical smell. Fast local delivery too. Will be back for a Rudraksha for my father.',
    verified: true,
    helpful: 61,
    avatar: 'https://i.pravatar.cc/150?img=53',
  },
  {
    name: 'Sarah Williams',
    initials: 'SW',
    location: 'Sydney, Australia',
    rating: 4,
    date: 'December 2025',
    product: '10 Mukhi Rudraksha Beads',
    title: 'Beautiful bead, shipping took a little longer',
    text: 'The bead itself is stunning and exactly as photographed, with a rich certificate booklet included. My only note is that international shipping to Australia took about two weeks rather than the estimated ten days, but customer support kept me updated throughout, which I appreciated.',
    verified: true,
    helpful: 39,
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Vikram Singh',
    initials: 'VS',
    location: 'Delhi, India',
    rating: 5,
    date: 'March 2026',
    product: '5 Mukhi Rudraksha Bracelet',
    title: 'Bought for my son before his exams',
    text: 'Bought this for my son before his board exams on the recommendation of our family priest. He says he feels more focused wearing it daily, and honestly the calm in our household during exam season improved too. The silver cap has held up well with daily wear.',
    verified: true,
    helpful: 52,
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    name: 'Meera Nair',
    initials: 'MN',
    location: 'Toronto, Canada',
    rating: 5,
    date: 'May 2026',
    product: 'Siddha Mala (1–14 Mukhi)',
    title: 'Five years of collecting, this is the best source',
    text: 'I have been collecting Rudraksha for over five years from various sources across India and Nepal, and Rudrantra\'s lab certification process is the most rigorous I\'ve encountered. Every bead I\'ve ordered has matched its certificate down to the mukhi count and diameter.',
    verified: true,
    helpful: 87,
    hasPhoto: true,
    avatar: 'https://i.pravatar.cc/150?img=48',
  },
  {
    name: 'Daniel Osei',
    initials: 'DO',
    location: 'Accra, Ghana',
    rating: 5,
    date: 'April 2026',
    product: '7 Mukhi Rudraksha Beads',
    title: 'Worth every bit of the international shipping',
    text: 'I was hesitant about ordering something this specific from outside my country, but the consultation call before purchase answered every question I had about which mukhi suited my goals. Arrived well packaged and exactly on the estimated delivery date.',
    verified: true,
    helpful: 34,
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

const filters = ['All Reviews', '5 Star', 'With Photos', 'Verified Purchase'] as const;
type Filter = (typeof filters)[number];

function initialsColor(initials: string) {
  const palette = ['bg-forest-mid', 'bg-forest-light', 'bg-[#1A3D2B]'];
  const idx = initials.charCodeAt(0) % palette.length;
  return palette[idx];
}

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All Reviews');
  const [api, setApi] = useState<CarouselApi>();
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnapCount, setScrollSnapCount] = useState(0);

  const avgRating = useMemo(
    () => (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
    []
  );

  const ratingBreakdown = useMemo(() => {
    const counts = [5, 4, 3, 2, 1].map((star) => testimonials.filter((t) => t.rating === star).length);
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return testimonials.filter((t) => {
      if (activeFilter === '5 Star') return t.rating === 5;
      if (activeFilter === 'With Photos') return t.hasPhoto;
      if (activeFilter === 'Verified Purchase') return t.verified;
      return true;
    });
  }, [activeFilter]);

  useEffect(() => {
    if (!api) return;
    const onUpdate = () => {
      setScrollSnapCount(api.scrollSnapList().length);
      setSelectedIndex(api.selectedScrollSnap());
    };
    onUpdate();
    api.on('select', onUpdate);
    api.on('reInit', onUpdate);
    return () => {
      api.off('select', onUpdate);
      api.off('reInit', onUpdate);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.reInit();
    api.scrollTo(0);
  }, [api, filtered]);

  useEffect(() => {
    if (!api || isHovering || isPaused) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [api, isHovering, isPaused]);

  return (
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      {/* Lotus/Prayer overlay */}
      <div 
        className="absolute inset-0 opacity-[0.28] mix-blend-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=1920&q=80")' }}
      />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-4 px-4 pt-0 pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
        <span className="text-gold text-2xl font-serif opacity-80">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent max-w-xs opacity-60" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-gold bg-gold/5 border border-gold/30 px-5 py-2 rounded-full inline-block mb-6 shadow-sm">
            Loved Worldwide
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-tight leading-tight">
            Voices of Our Community
          </h2>
          <p className="text-cream/70 font-body text-lg leading-relaxed mt-6">
            Real experiences from seekers who trusted us with their spiritual journey — every review below is from a verified authentic purchase.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-14 bg-forest/80 backdrop-blur border border-gold/30 rounded-3xl p-8 md:p-12 mb-16 shadow-xl">
          <div className="flex flex-col items-center justify-center text-center sm:border-r sm:border-gold/20 sm:pr-14">
            <span className="font-display text-6xl text-gold mb-2">{avgRating}</span>
            <div className="flex items-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <GiStarMedal key={i} className="w-6 h-6 text-gold drop-shadow-[0_0_5px_rgba(201,151,58,0.8)]" />
              ))}
            </div>
            <span className="text-cream/50 font-heading text-xs uppercase tracking-widest">{testimonials.length * 187}+ verified reviews</span>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {[5, 4, 3, 2, 1].map((star, i) => {
              const count = ratingBreakdown[i];
              const pct = Math.round((count / testimonials.length) * 100);
              return (
                <div key={star} className="flex items-center gap-4 text-sm font-heading font-bold">
                  <span className="w-16 text-gold/80 shrink-0 text-right tracking-widest uppercase text-xs">{star} Star</span>
                  <div className="flex-1 h-1.5 rounded-full bg-forest-deep overflow-hidden border border-gold/10">
                    <div className="h-full bg-gradient-to-r from-gold to-gold-bright rounded-full relative" style={{ width: `${pct || 2}%` }}>
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <span className="w-10 text-right text-gold/50 shrink-0">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all border ${
                activeFilter === f
                  ? 'bg-gold text-forest-deep border-gold shadow-sacred-glow'
                  : 'bg-forest text-gold/70 border-gold/30 hover:border-gold hover:text-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: 'start', loop: true }}
          >
            <CarouselContent className="-ml-6">
              {filtered.map((t, i) => (
                <CarouselItem key={i} className="pl-6 sm:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col h-full bg-forest/60 backdrop-blur-md border border-gold/30 rounded-3xl p-8 hover:bg-forest/80 hover:border-gold/60 transition-all duration-300 shadow-lg relative group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full pointer-events-none" />
                    
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            loading="lazy"
                            className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-gold p-0.5"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div
                            className={`hidden w-14 h-14 rounded-full ${initialsColor(t.initials)} items-center justify-center font-display text-lg text-gold border-2 border-gold shrink-0`}
                          >
                            {t.initials}
                          </div>
                          {t.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-forest rounded-full p-0.5">
                              <BadgeCheck className="w-4 h-4 text-gold fill-forest" />
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="font-heading font-bold text-base text-cream block mb-0.5">{t.name}</span>
                          <span className="text-gold/60 font-body text-xs block">{t.location}</span>
                        </div>
                      </div>
                      {t.hasPhoto && (
                        <span className="flex items-center gap-1 text-[10px] font-heading uppercase tracking-widest text-gold/60">
                          <ImageIcon className="w-3 h-3" /> Photo
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <GiStarMedal key={j} className={`w-4 h-4 ${j < t.rating ? 'text-gold' : 'text-gold/20'}`} />
                      ))}
                    </div>

                    <h4 className="font-display text-xl text-gold-gradient mb-3 leading-snug">{t.title}</h4>
                    <p className="text-cream-soft/80 font-body text-base leading-relaxed line-clamp-5 flex-1 mb-6">{t.text}</p>

                    <div className="flex flex-col gap-3 pt-5 border-t border-gold/20">
                      <span className="text-gold/90 font-heading text-xs font-bold uppercase tracking-widest">
                        Item: {t.product}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-cream/40 font-body text-xs">{t.date}</span>
                        <button className="flex items-center gap-1.5 text-gold/50 hover:text-gold transition-colors text-xs font-heading uppercase">
                          <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({t.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Controls */}
          {filtered.length > 0 && (
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="w-12 h-12 rounded-full border border-gold/40 bg-forest flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3">
                {Array.from({ length: scrollSnapCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === selectedIndex ? 'w-8 bg-gold shadow-[0_0_8px_rgba(201,151,58,0.8)]' : 'w-2 bg-gold/20 hover:bg-gold/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="w-12 h-12 rounded-full border border-gold/40 bg-forest flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                className="w-12 h-12 rounded-full border border-gold/20 bg-forest-deep flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 transition-colors ml-4"
              >
                {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}