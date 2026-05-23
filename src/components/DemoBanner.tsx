"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("demo-banner-dismissed");
    setDismissed(stored === "true");
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem("demo-banner-dismissed", "true");
    window.dispatchEvent(new Event("banner-state-change"));
  };

  // On mount, dispatch event so Navbar knows banner is visible
  useEffect(() => {
    if (mounted) {
      window.dispatchEvent(new Event("banner-state-change"));
    }
  }, [mounted]);

  if (!mounted || dismissed) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] h-9",
        "bg-gradient-to-r from-amber-950/90 via-dark-900/95 to-amber-950/90",
        "backdrop-blur-md border-b border-gold/20",
        "flex items-center justify-center px-4 sm:px-10"
      )}
    >
      <div className="absolute inset-0 shimmer-overlay opacity-30" />
      <p className="text-[11px] sm:text-xs tracking-wider text-gold/70 font-medium uppercase">
        <span className="hidden sm:inline">⚠&nbsp;</span>
        This website is for demo purposes only
        <span className="hidden sm:inline">&nbsp;— not a real barbershop</span>
      </p>
      <button
        onClick={dismiss}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2",
          "w-6 h-6 flex items-center justify-center rounded-full",
          "text-gold/40 hover:text-gold hover:bg-white/5",
          "transition-all duration-200"
        )}
        aria-label="Dismiss demo banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
