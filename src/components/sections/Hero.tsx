"use client";

import { motion } from "framer-motion";
import { Scissors, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Scissors, x: "15%", y: "20%", delay: 0, duration: 3 },
  { Icon: Sparkles, x: "80%", y: "30%", delay: 1, duration: 4 },
  { Icon: Scissors, x: "70%", y: "70%", delay: 0.5, duration: 3.5 },
  { Icon: Sparkles, x: "20%", y: "75%", delay: 1.5, duration: 3 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/80" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-dark-950/50 to-transparent" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-gold/10"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Premium Grooming Experience Since 2010
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-cream mb-6"
        >
          <span className="block">Where Style</span>
          <span className="block mt-2">
            Meets{" "}
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Precision
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the art of traditional barbering with a modern edge. 
          Our master barbers craft looks that command attention.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="gold"
            size="xl"
            onClick={() => scrollTo("#booking")}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => scrollTo("#services")}
            className="text-cream border-cream/20 hover:bg-cream/10"
          >
            Our Services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-white/5"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "10K+", label: "Happy Clients" },
            { value: "4.9", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-cream/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
