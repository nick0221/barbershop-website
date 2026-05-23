"use client";

import { motion } from "framer-motion";
import { Scissors, Award, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Scissors, value: "50K+", label: "Haircuts Done" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-dark-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Scissors className="w-16 h-16 text-gold/30 mx-auto mb-4" />
                    <p className="text-cream/30 text-sm">Barbershop Interior</p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-2xl border border-gold/20 -z-10" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-dark-950 border border-gold/20 rounded-xl p-6 shadow-2xl"
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
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/60 leading-relaxed text-lg"
            >
              At BlackStag, we&apos;ve been perfecting the art of barbering for over a decade. 
              Our team of master barbers combines traditional techniques with modern trends 
              to deliver an exceptional grooming experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cream/50 leading-relaxed"
            >
              We believe that a great haircut is more than just a service — it&apos;s an 
              experience. From the moment you step through our doors, you&apos;re part of 
              the BlackStag family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  const el = document.querySelector("#booking");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group"
              >
                Book Your Visit
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-gold/60 mx-auto mb-2" />
                  <div className="text-xl font-display font-bold text-cream">
                    {stat.value}
                  </div>
                  <div className="text-xs text-cream/40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
