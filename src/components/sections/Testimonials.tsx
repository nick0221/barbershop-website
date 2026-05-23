"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Regular Client",
    content: "Best barbershop in the city! Marcus gave me the cleanest fade I've ever had. The atmosphere is incredible — it's like stepping into a classic barbershop with a modern twist.",
    rating: 5,
  },
  {
    name: "Michael Rivera",
    role: "Business Professional",
    content: "I drive across town just to get my beard done here. Diego is an artist with the straight razor. The hot towel treatment is absolutely worth every penny.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Creative Director",
    content: "James transformed my look completely. His attention to detail is unmatched. I've never had so many compliments on my hair. Found my barber for life!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Client's Mom",
    content: "Brought my son here for his first haircut and they were incredibly patient and gentle. The kids' haircut experience was fantastic. Highly recommend!",
    rating: 5,
  },
  {
    name: "Chris Martinez",
    role: "Fitness Coach",
    content: "The Royal Package is the ultimate grooming experience. From the haircut to the facial, everything was top-notch. This is self-care at its finest.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const handleSelect = () => onSelect(api);
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Section divider */}
      <div className="section-divider" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23C8A87C' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            What Our
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center justify-center">
            {/* Decorative quote marks - static background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Quote className="w-32 h-32 text-gold/5" />
            </div>

            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center px-4"
                    >
                      {/* Stars */}
                      <div className="flex items-center justify-center gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-gold fill-gold"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-cream/80 leading-relaxed mb-8 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div>
                        <div className="text-cream font-display font-semibold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gold/60 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-10">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300 group active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 flex-1 justify-center px-2 min-w-0">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-500 min-w-[8px]",
                    i === current
                      ? "bg-gold w-6 sm:w-8 h-2.5 sm:h-2"
                      : "bg-white/20 hover:bg-white/40 w-2.5 h-2.5 sm:w-2 sm:h-2"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => api?.scrollNext()}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300 group active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
