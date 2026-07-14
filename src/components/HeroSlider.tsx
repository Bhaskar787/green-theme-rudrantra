import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

const slides = [
  {
    tag: 'Sacred Origin · Nepal',
    heading: 'Beads Blessed\nAt Pashupatinath',
    sub: "Every Rudraksha from the sacred Arun Valley, energized by Vedic pandits at Nepal's most holy Shiva temple before it reaches you.",
    cta: 'Explore Collections',
    href: '#',
    image: 'https://www.travelhimalayan.com/wp-content/uploads/2026/01/Pashupatinath-to-Mount-Kailash-1.webp',
  },
  {
    tag: 'X-Ray Certified · Lab Verified',
    heading: 'Authenticity\nYou Can See',
    sub: 'Every bead ships with a GIA-process X-ray certification and full mukhi count report. Zero guesswork, complete peace of mind.',
    cta: 'See Our Guarantee',
    href: '#',
    image: 'https://as1.ftcdn.net/v2/jpg/09/74/62/96/1000_F_974629665_AOBh7xezMAcwDnDtGIT9Xy4I1JxElMAn.jpg',
  },
  {
    tag: 'Shravan Special — Live Now',
    heading: 'The Siddha Mala\nComplete Set',
    sub: '1 through 14 Mukhi, naturally strung on red silk thread and energized in one sacred ceremony. The rarest offering in our collection.',
    cta: 'Shop Siddha Mala',
    href: '#',
    image: 'https://hsj.com.np/uploads/0000/1/2026/01/01/pexels-aidun-10792604.jpg',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const go = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-[#0A1A14]">
      {/* Background Image, clearly visible */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-70'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* Soft gradient fade for text readability, image stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A14]/95 via-[#0A1A14]/45 to-[#0A1A14]/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-6 border-b border-gold pb-1">
            {slide.tag}
          </span>

          {/* Golden Gradient Title */}
          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] mb-6 whitespace-pre-line bg-gradient-to-b from-[#FFD700] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent drop-shadow-lg">
            {slide.heading}
          </h1>

          <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#0A1A14] font-bold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {slide.cta}
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold font-bold uppercase tracking-widest text-sm hover:bg-gold/10 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:border-gold transition-all hover:bg-gold/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:border-gold transition-all hover:bg-gold/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 transition-all duration-300 ${
              i === current ? 'w-12 bg-gold' : 'w-6 bg-gold/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}