import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useSwipeable } from 'react-swipeable';

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

  const handlers = useSwipeable({
    onSwipedLeft: () => go(current + 1),
    onSwipedRight: () => go(current - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section 
      {...handlers} 
      className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[480px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden bg-[#0A1A14] touch-pan-y"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-70'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A14]/95 via-[#0A1A14]/45 to-[#0A1A14]/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className={`max-w-2xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-500 mb-4 sm:mb-6 border-b border-yellow-500 pb-1">
            {slide.tag}
          </span>

          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 whitespace-pre-line bg-gradient-to-b from-[#FFD700] via-[#F4D03F] to-[#B8860B] bg-clip-text text-transparent drop-shadow-lg">
            {slide.heading}
          </h1>

          <p className="font-body text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10 max-w-xl">
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-[#0A1A14] font-bold uppercase tracking-widest text-[11px] sm:text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {slide.cta}
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 border border-yellow-600/50 text-yellow-600 font-bold uppercase tracking-widest text-[11px] sm:text-sm hover:bg-yellow-600/10 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows: Hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        <button
          onClick={() => go(current - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-yellow-600/30 flex items-center justify-center text-yellow-600 hover:border-yellow-600 transition-all hover:bg-yellow-600/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-yellow-600/30 flex items-center justify-center text-yellow-600 hover:border-yellow-600 transition-all hover:bg-yellow-600/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators: Hidden on mobile, shown on desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 transition-all duration-300 ${
              i === current ? 'w-12 bg-yellow-600' : 'w-6 bg-yellow-600/30'
            }`}
          />
        ))}
      </div>

      {/* Mobile dot indicators (added since desktop nav is hidden below md) */}
      <div className="flex md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-yellow-600' : 'w-3 bg-yellow-600/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}