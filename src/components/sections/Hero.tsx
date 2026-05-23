"use client";

import { motion } from "framer-motion";
import { Scissors, ArrowRight, Sparkles, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";

const floatingIcons = [
  { Icon: Scissors, x: "15%", y: "20%", delay: 0, duration: 3, size: "w-8 h-8 md:w-12 md:h-12" },
  { Icon: Sparkles, x: "80%", y: "25%", delay: 1, duration: 4, size: "w-6 h-6 md:w-10 md:h-10" },
  { Icon: Scissors, x: "70%", y: "72%", delay: 0.5, duration: 3.5, size: "w-10 h-10 md:w-14 md:h-14" },
  { Icon: Sparkles, x: "20%", y: "78%", delay: 1.5, duration: 3, size: "w-6 h-6 md:w-8 md:h-8" },
  { Icon: Star, x: "90%", y: "55%", delay: 2, duration: 5, size: "w-4 h-4 md:w-6 md:h-6" },
  { Icon: Star, x: "10%", y: "45%", delay: 0.8, duration: 4.5, size: "w-4 h-4 md:w-6 md:h-6" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

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
      
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gold/8 rounded-full blur-[150px]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/90" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-dark-950/60 to-transparent" />

      {/* Decorative rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 w-64 h-64 border border-gold/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-20 w-48 h-48 border border-gold/8 rounded-full"
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-gold/12 ${item.size}`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="w-full h-full" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* Animated radial accent behind heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10"
        />

        {/* Badge */}
        <motion.div
          variants={fadeUpItem}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/8 text-gold text-xs font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Premium Grooming Experience Since 2010
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={fadeUpItem}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-cream mb-6">
            <span className="block">Where Style</span>
            <span className="block mt-2">
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gold-gradient text-glow">
                Precision
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUpItem}
          className="text-lg md:text-xl text-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the art of traditional barbering with a modern edge. 
          Our master barbers craft looks that command attention.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => scrollTo("#booking")}
            className="group relative overflow-hidden px-6 py-3 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-shadow duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#services")}
            className="text-cream border-cream/20 hover:bg-cream/10 backdrop-blur-sm px-6 py-3"
          >
            Our Services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUpItem}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-white/5"
        >
          {[
            { target: 15, suffix: "+", label: "Years Experience" },
            { target: 10000, suffix: "+", label: "Happy Clients" },
            { target: 4.9, suffix: "", decimals: 1, label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center relative">
              <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <div className="text-xs text-cream/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream/30"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
