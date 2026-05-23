"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const checkBanner = () => {
      setBannerVisible(!localStorage.getItem("demo-banner-dismissed"));
    };
    checkBanner();
    window.addEventListener("banner-state-change", checkBanner);
    return () => window.removeEventListener("banner-state-change", checkBanner);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navbarHeight = 80; // h-20
      const bannerEl = document.querySelector('[data-banner]');
      const bannerHeight = bannerEl ? 36 : 0;
      const offset = navbarHeight + bannerHeight + 20; // +20px buffer
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        bannerVisible ? "top-[var(--banner-height)]" : "top-0",
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10"
          : "bg-dark-950/60 backdrop-blur-sm border-b border-white/[0.03]"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <Scissors className="w-6 h-6 text-gold" />
              <div className="absolute -inset-2 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-display font-bold tracking-wide">
              <span className="text-cream">BLACK<span className="text-gold">STAG</span></span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                  activeSection === link.href
                    ? "text-gold"
                    : "text-cream/70 hover:text-cream"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-gold/10 border border-gold/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="ml-2 pl-4 border-l border-white/10">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => scrollToSection("#booking")}
                  className="relative overflow-hidden group shadow-lg shadow-gold/20"
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className="lg:hidden relative w-10 h-10 flex items-center justify-center text-cream hover:text-gold transition-colors"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                />
              }
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-dark-950 border-l w-[280px] sm:w-[350px]"
              showCloseButton={false}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              {/* Logo inside sheet */}
              <div className="flex items-center gap-3 px-4 pt-6 pb-6 border-b">
                <Scissors className="w-5 h-5 text-gold" />
                <span className="text-lg font-display font-bold tracking-wide">
                  <span className="text-cream">BLACK<span className="text-gold">STAG</span></span>
                </span>
              </div>

              {/* Navigation links */}
              <div className="flex-1 px-2 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      activeSection === link.href
                        ? "text-gold bg-gold/10 border-l-2 border-gold"
                        : "text-cream/70 hover:text-cream hover:bg-muted border-l-2 border-transparent"
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Theme toggle + Booking */}
              <div className="px-4 pb-6 pt-4 border-t space-y-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-medium text-cream/50">Appearance</span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => scrollToSection("#booking")}
                >
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
