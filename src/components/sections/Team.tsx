"use client";

import { motion } from "framer-motion";
import { Scissors, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Marcus Johnson",
    role: "Master Barber & Founder",
    bio: "With 15+ years of experience, Marcus brings precision and artistry to every cut.",
    rating: 4.9,
    reviews: 1250,
    specialties: ["Classic Cuts", "Hot Towel Shaves"],
  },
  {
    name: "Diego Ramirez",
    role: "Senior Barber",
    bio: "Specializing in modern styles and beard sculpting with impeccable attention to detail.",
    rating: 4.8,
    reviews: 980,
    specialties: ["Modern Styles", "Beard Grooming"],
  },
  {
    name: "James Chen",
    role: "Style Specialist",
    bio: "A creative force behind the chair, known for transformative cuts and color work.",
    rating: 4.9,
    reviews: 870,
    specialties: ["Hair Styling", "Color"],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

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
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="group bg-dark-900/50 border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden h-full">
                {/* Image Placeholder */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-dark-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Scissors className="w-12 h-12 text-gold/20" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Rating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    <span className="text-xs font-medium text-cream">{member.rating}</span>
                    <span className="text-cream/40 text-xs">({member.reviews})</span>
                  </div>

                  {/* Name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-display font-bold text-cream">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm">{member.role}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
