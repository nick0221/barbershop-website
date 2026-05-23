"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23C8A87C' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

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
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="text-center">
                  {/* Quote icon */}
                  <Quote className="w-12 h-12 text-gold/20 mx-auto mb-6" />

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-gold"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl text-cream/80 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="text-cream font-display font-semibold text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gold/60 text-sm">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "bg-gold w-8"
                      : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
