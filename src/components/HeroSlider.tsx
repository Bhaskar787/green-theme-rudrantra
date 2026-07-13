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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeOKGOXzWvuwaJiW_FzwaWpQb_1i3D-yXXBxX_Fu0kgww3kiI5Dk9CnE&s=10',
  },
  {
    tag: 'Shravan Special — Live Now',
    heading: 'The Siddha Mala\nComplete Set',
    sub: '1 through 14 Mukhi, naturally strung on red silk thread and energized in one sacred ceremony. The rarest offering in our collection.',
    cta: 'Shop Siddha Mala',
    href: '#',
    image: 'https://static.where-e.com/South_Africa/Western_Cape_Province/City_Of_Cape_Town_Metropolitan_Municipality/Sacred-Rudraksha-Forest_13eb7d984e219617b59a5f250ace35d1.jpg',
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
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-[#0a120a]">
      {/* Background Image with Dark Overlay for Text Contrast */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* Stronger overlay to ensure white/gold text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a120a] via-[#0a120a]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-6 border-b border-gold pb-1">
            {slide.tag}
          </span>

          <h1 className="font-display text-5xl md:text-7xl text-white leading-[1.1] mb-6 whitespace-pre-line">
            {slide.heading}
          </h1>

          <p className="font-body text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#0a120a] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              {slide.cta}
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold font-bold uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:border-gold transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:border-gold transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Simplified Dot Indicators */}
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