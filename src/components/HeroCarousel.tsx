import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroShip1 from "@/assets/hero-ship-1.jpg";
import heroCrew2 from "@/assets/hero-crew-2.jpg";
import heroTanker3 from "@/assets/hero-tanker-3.jpg";

const slides = [
  {
    image: heroShip1,
    title: "Your Career at Sea Starts Here",
    subtitle: "Leading maritime recruitment agency connecting skilled seafarers with top shipping companies worldwide",
  },
  {
    image: heroCrew2,
    title: "Join Our Professional Crew",
    subtitle: "We provide experienced and certified maritime professionals for all vessel types",
  },
  {
    image: heroTanker3,
    title: "Global Opportunities",
    subtitle: "Work on tankers, bulk carriers, container ships, and more across international waters",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      prevSlide();
    } else {
      nextSlide();
    }
    setResetKey((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, resetKey]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1
            key={`title-${currentSlide}`}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            key={`subtitle-${currentSlide}`}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#vacancies"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#vacancies")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-3 bg-gold hover:bg-gold-dark text-foreground font-semibold rounded-md transition-colors"
            >
              View Vacancies
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleArrowClick("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-primary-foreground" />
      </button>
      <button
        onClick={() => handleArrowClick("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-primary-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
