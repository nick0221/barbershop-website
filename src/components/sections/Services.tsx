"use client";

import { motion } from "framer-motion";
import { Scissors, Zap, Sparkles, Baby, Eye, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Precision haircut with scissors and clippers, finished with a hot towel treatment.",
    price: "$45",
    duration: "45 min",
    popular: true,
  },
  {
    icon: Zap,
    title: "Beard Grooming",
    description: "Expert beard trim, shape, and moisturizing treatment for a distinguished look.",
    price: "$35",
    duration: "30 min",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium pre/post oils.",
    price: "$55",
    duration: "60 min",
    popular: false,
  },
  {
    icon: Eye,
    title: "Hair Styling",
    description: "Professional styling with premium products for any occasion or event.",
    price: "$40",
    duration: "30 min",
    popular: false,
  },
  {
    icon: Crown,
    title: "Royal Package",
    description: "Full haircut, beard groom, hot towel shave, and facial treatment — the complete experience.",
    price: "$120",
    duration: "120 min",
    popular: true,
  },
  {
    icon: Baby,
    title: "Kids Haircut",
    description: "Patient, gentle haircuts for children in a comfortable environment.",
    price: "$30",
    duration: "30 min",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-dark-950">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />

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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            Premium Grooming
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Services
            </span>
          </h2>
          <p className="text-cream/50 mt-4 leading-relaxed">
            From classic cuts to modern styles, we offer a full range of grooming services
            tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group relative bg-dark-900/50 border-white/5 hover:border-gold/30 hover:bg-dark-900/80 h-full transition-all duration-500 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
                </div>

                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="gold">Popular</Badge>
                  </div>
                )}

                <CardHeader className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <CardTitle className="text-cream group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <span className="text-2xl font-display font-bold text-gold">
                        {service.price}
                      </span>
                      <span className="text-cream/40 text-xs ml-2">{service.duration}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cream/60 hover:text-gold hover:bg-gold/10"
                      onClick={() => {
                        const el = document.querySelector("#booking");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
