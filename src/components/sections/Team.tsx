"use client";

import { motion } from "framer-motion";
import { Star, Award, Clock, ThumbsUp, Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const teamMembers = [
  {
    name: "Marcus Johnson",
    role: "Master Barber & Founder",
    bio: "With 15+ years of experience, Marcus brings precision and artistry to every cut.",
    rating: 4.9,
    reviews: 1250,
    specialties: ["Classic Cuts", "Hot Towel Shaves"],
    image: "/images/barber-1.jpg",
    tooltips: [
      { icon: Award, text: "15+ years experience" },
      { icon: ThumbsUp, text: "98% satisfaction rate" },
      { icon: Scissors, text: "Specializes in fades" },
    ],
  },
  {
    name: "Diego Ramirez",
    role: "Senior Barber",
    bio: "Specializing in modern styles and beard sculpting with impeccable attention to detail.",
    rating: 4.8,
    reviews: 980,
    specialties: ["Modern Styles", "Beard Grooming"],
    image: "/images/barber-2.jpg",
    tooltips: [
      { icon: Award, text: "8+ years experience" },
      { icon: Clock, text: "Fast turnaround" },
      { icon: ThumbsUp, text: "Beard expert" },
    ],
  },
  {
    name: "James Chen",
    role: "Style Specialist",
    bio: "A creative force behind the chair, known for transformative cuts and color work.",
    rating: 4.9,
    reviews: 870,
    specialties: ["Hair Styling", "Color"],
    image: "/images/barber-3.jpg",
    tooltips: [
      { icon: Award, text: "6+ years experience" },
      { icon: Scissors, text: "Color specialist" },
      { icon: ThumbsUp, text: "Trending styles" },
    ],
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-dark-950 overflow-hidden">
      {/* Section divider */}
      <div className="section-divider" />
      
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/10 rounded-full" />

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
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            Meet the
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Masters
            </span>
          </h2>
          <p className="text-cream/50 mt-4 leading-relaxed">
            Our team of skilled barbers are dedicated to providing you with the best
            grooming experience.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="group bg-dark-900/50 border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden h-full">
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    data-loaded="false"
                    onLoad={(e) => (e.currentTarget.dataset.loaded = "true")}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Rating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 group-hover:border-gold/30 transition-colors duration-300">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    <span className="text-xs font-medium text-white">{member.rating}</span>
                    <span className="text-white/50 text-xs">({member.reviews})</span>
                  </div>

                  {/* Name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-950/80 via-dark-950/30 to-transparent">
                    <h3 className="text-xl font-display font-bold text-cream group-hover:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm">{member.role}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Tooltip badges */}
                  <div className="flex flex-wrap gap-2">
                    {member.tooltips.map((tip) => (
                      <Tooltip key={tip.text}>
                        <TooltipTrigger
                          render={
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium cursor-help transition-all duration-300 hover:bg-gold/20 hover:border-gold/40" />
                          }
                        >
                          <tip.icon className="w-3 h-3" />
                          {tip.text}
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-dark-900 border border-gold/20 text-cream text-xs px-3 py-2 rounded-lg shadow-xl"
                        >
                          {tip.text}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Specialty tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cream/50 text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
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
