"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by clicking the 'Book Appointment' button on our homepage, calling us at (555) 123-4567, or visiting us in person. We recommend booking at least 24 hours in advance to secure your preferred time slot.",
  },
  {
    value: "item-2",
    question: "What's your cancellation policy?",
    answer:
      "We require at least 4 hours notice for cancellations. Late cancellations or no-shows may result in a 50% charge of the service fee. We understand emergencies happen — just give us a call and we'll work with you.",
  },
  {
    value: "item-3",
    question: "Do you offer walk-in services?",
    answer:
      "Yes, we welcome walk-ins! However, availability is subject to our barbers' schedules. We recommend calling ahead to check wait times. Evenings and weekends tend to be busiest, so booking is advised during peak hours.",
  },
  {
    value: "item-4",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit and debit cards, Apple Pay, Google Pay, and contactless payments. Tips can be added to card payments or given in cash.",
  },
  {
    value: "item-5",
    question: "How long does a typical haircut take?",
    answer:
      "A standard haircut takes approximately 30-45 minutes. Beard trims take 20-30 minutes, and our Royal Package experience takes about 2 hours for the full treatment.",
  },
  {
    value: "item-6",
    question: "Do you cater to children?",
    answer:
      "Absolutely! We offer kids' haircuts for children of all ages. Our barbers are patient and experienced with young clients, ensuring a comfortable and fun experience. We recommend booking morning appointments for younger children.",
  },
  {
    value: "item-7",
    question: "What products do you use and sell?",
    answer:
      "We use and carry premium grooming products including pomades, clays, beard oils, balms, and shampoos. Our barbers can recommend the best products for your hair type and styling needs. All products are available for purchase at the shop.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Section divider */}
      <div className="section-divider" />

      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em]">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Questions
            </span>
          </h2>
          <p className="text-cream/50 mt-4 leading-relaxed">
            Everything you need to know about BlackStag Barbershop.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion className="w-full space-y-3">
            {faqItems.map((item) => (
              <motion.div key={item.value} variants={fadeUpItem}>
                <AccordionItem
                  value={item.value}
                  className="border border-white/5 rounded-xl overflow-hidden bg-dark-900/60 backdrop-blur-sm hover:border-gold/20 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 text-cream hover:text-gold hover:no-underline font-medium text-base transition-colors duration-200 group-aria-expanded/accordion-trigger:text-gold">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-gold/60 flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-cream/60 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
