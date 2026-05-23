"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/60" />

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-32 h-32 border border-gold/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-24 h-24 border border-gold/10 rounded-full"
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Spots Available
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-cream leading-tight mb-6"
        >
          Ready to Look
          <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient">
            Your Best?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-cream/60 max-w-xl mx-auto mb-10"
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
            size="xl"
            className="group relative overflow-hidden text-lg"
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
            size="xl"
            className="text-cream border-cream/20 hover:bg-cream/10"
          >
            View Pricing
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/5"
        >
          {[
            { label: "Instant Confirmation" },
            { label: "Free Cancellation" },
            { label: "100% Satisfaction" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-cream/40 text-xs">
              <Sparkles className="w-3 h-3 text-gold" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
