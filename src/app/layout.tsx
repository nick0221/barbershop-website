import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-dark-950 text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
