import type { Metadata } from "next";
import { Outfit, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackStag Barbershop | Premium Grooming Experience",
  description:
    "Experience the art of traditional barbering with a modern edge. Book your appointment at BlackStag Barbershop for premium haircuts, beard grooming, and hot towel shaves.",
  keywords: [
    "barbershop",
    "haircut",
    "beard grooming",
    "hot towel shave",
    "grooming",
    "barber",
    "New York barber",
  ],
  openGraph: {
    title: "BlackStag Barbershop | Premium Grooming Experience",
    description:
      "Experience the art of traditional barbering with a modern edge.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-dark-950 text-cream selection:bg-gold/30 selection:text-cream`}
      >
        {/* Fixed UI overlays */}
        <ScrollProgress />
        <BackToTop />

        {/* Ambient cursor glow that follows mouse */}
        <CursorGlow />

        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <TooltipProvider delay={300}>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
