"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Sparkles, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/80" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />

      {/* Decorative rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-40 h-40 border border-gold/10 rounded-full"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/8 rounded-full" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-28 h-28 border border-gold/10 rounded-full"
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/8 text-gold text-xs font-medium mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Spots Available
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream leading-tight mb-6"
        >
          Ready to Look
          <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient text-glow">
            Your Best?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Book your appointment today and experience the BlackStag difference.
          Your journey to exceptional grooming starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="gold"
            size="lg"
            className="group relative overflow-hidden text-lg px-6 py-3 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-shadow duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              <CalendarCheck className="w-6 h-6" />
              Book Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-cream border-cream/20 hover:bg-cream/10 backdrop-blur-sm px-6 py-3"
          >
            View Pricing
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/5"
        >
          {[
            { icon: Shield, label: "Instant Confirmation" },
            { icon: Clock, label: "Free Cancellation" },
            { icon: Star, label: "100% Satisfaction" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-cream/40 text-xs group cursor-default">
              <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <item.icon className="w-3 h-3 text-gold" />
              </div>
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
