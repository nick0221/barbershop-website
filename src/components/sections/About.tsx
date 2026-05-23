"use client";

import { motion } from "framer-motion";
import { Scissors, Award, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { icon: Award, target: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Users, target: 10000, suffix: "+", label: "Happy Customers" },
  { icon: Scissors, target: 50000, suffix: "+", label: "Haircuts Done" },
  { icon: Star, target: 4.9, suffix: "", decimals: 1, label: "Average Rating" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
      
      {/* Section divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            {/* Decorative corner bracket */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-lg z-10" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-lg z-10" />

            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=900&q=80&auto=format&fit=crop"
                alt="BlackStag Barbershop interior with classic barber chairs"
                loading="lazy"
                data-loaded="false"
                onLoad={(e) => (e.currentTarget.dataset.loaded = "true")}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay for atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-dark-950/10 to-transparent" />

              {/* Subtle shimmer overlay */}
              <div className="shimmer-overlay rounded-2xl" />
            </div>

            {/* Floating award card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-dark-950/90 backdrop-blur-xl border border-gold/20 rounded-xl p-4 sm:p-6 shadow-2xl max-w-[200px] sm:max-w-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-gold font-display text-lg font-bold">Award Winning</div>
                  <div className="text-cream/50 text-xs">Best Barbershop 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeUpItem}>
              <span className="text-gold text-sm font-medium uppercase tracking-[0.2em]">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
                Crafting Confidence
                <br />
                <span className="text-transparent bg-clip-text bg-gold-gradient">
                  One Cut at a Time
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="text-cream/60 leading-relaxed text-lg"
            >
              At BlackStag, we&apos;ve been perfecting the art of barbering for over a decade. 
              Our team of master barbers combines traditional techniques with modern trends 
              to deliver an exceptional grooming experience.
            </motion.p>

            <motion.p
              variants={fadeUpItem}
              className="text-cream/50 leading-relaxed"
            >
              We believe that a great haircut is more than just a service — it&apos;s an 
              experience. From the moment you step through our doors, you&apos;re part of 
              the BlackStag family.
            </motion.p>

            <motion.div variants={fadeUpItem}>
              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  const el = document.querySelector("#booking");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-shadow duration-300"
              >
                Book Your Visit
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeUpItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="text-center group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                    <stat.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-xl font-display font-bold text-cream group-hover:text-gold transition-colors duration-300">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                  </div>
                  <div className="text-xs text-cream/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
