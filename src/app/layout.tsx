import type { Metadata } from "next";
import { Outfit, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d0d0d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F5F0E8" media="(prefers-color-scheme: light)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BlackStag Barbershop",
              "image": "https://website-barbershop-two.vercel.app/images/hairstyl-1.jpg",
              "url": "https://website-barbershop-two.vercel.app",
              "telephone": "+15551234567",
              "description": "Premium barbershop providing exceptional grooming services with a classic touch. Where tradition meets modern style.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Barber Street",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 10000,
                "bestRating": "5"
              },
              "priceRange": "$$",
              "sameAs": [
                "https://instagram.com/blackstagbarbershop",
                "https://wa.me/15551234567"
              ]
            }),
          }}
        />
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

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delay={300}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
