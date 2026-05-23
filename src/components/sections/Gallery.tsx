"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Scissors, Sparkles, Crown, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  { id: 1, icon: Scissors, label: "Classic Cuts", category: "Cuts", color: "from-amber-900/40 to-amber-700/20" },
  { id: 2, icon: Sparkles, label: "Beard Styling", category: "Beards", color: "from-stone-900/40 to-stone-700/20" },
  { id: 3, icon: Crown, label: "Royal Package", category: "Styles", color: "from-yellow-900/40 to-yellow-700/20" },
  { id: 4, icon: Eye, label: "Modern Styles", category: "Styles", color: "from-zinc-900/40 to-zinc-700/20" },
  { id: 5, icon: Scissors, label: "Hot Towel Shave", category: "Shaves", color: "from-slate-900/40 to-slate-700/20" },
  { id: 6, icon: Sparkles, label: "Transformations", category: "Cuts", color: "from-amber-900/40 to-amber-700/20" },
  { id: 7, icon: Crown, label: "Premium Finishes", category: "Styles", color: "from-stone-900/40 to-stone-700/20" },
  { id: 8, icon: Eye, label: "Detail Work", category: "Beards", color: "from-yellow-900/40 to-yellow-700/20" },
];

const filters = ["All", "Cuts", "Beards", "Styles", "Shaves"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em]">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            See Our
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Masterpieces
            </span>
          </h2>
          <p className="text-cream/50 mt-4 leading-relaxed">
            Browse through our collection of styles and transformations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter
                  ? "bg-gold text-dark-950 shadow-lg shadow-gold/20"
                  : "bg-white/5 text-cream/60 hover:text-cream hover:bg-white/10 border border-white/5"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, i) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative group cursor-pointer rounded-xl overflow-hidden aspect-square",
                i === 0 && "md:col-span-2 md:row-span-2",
                i === 3 && "md:row-span-2",
              )}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder with gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br",
                image.color,
                "group-hover:scale-110 transition-transform duration-700"
              )}>
                <div className="absolute inset-0 bg-dark-950/60 group-hover:bg-dark-950/40 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <image.icon className="w-10 h-10 text-gold/60 mb-3 group-hover:scale-110 group-hover:text-gold transition-all duration-300" />
                <h3 className="text-cream font-display font-semibold text-lg text-center group-hover:text-gold transition-colors duration-300">
                  {image.label}
                </h3>
                <p className="text-cream/40 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/30 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative max-w-3xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-dark-900 flex items-center justify-center">
                <div className="text-center">
                  {(() => {
                    const img = galleryImages.find((g) => g.id === selectedImage);
                    if (!img) return null;
                    const Icon = img.icon;
                    return (
                      <>
                        <Icon className="w-20 h-20 text-gold/40 mx-auto mb-4" />
                        <h3 className="text-cream text-2xl font-display font-bold">{img.label}</h3>
                        <p className="text-cream/40 mt-2">Gallery preview</p>
                      </>
                    );
                  })()}
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
