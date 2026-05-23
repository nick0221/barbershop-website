"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Camera, MessageCircle, Globe, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Barber Street, New York, NY 10001" },
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@blackstag.com" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-8PM | Sat: 9AM-6PM | Sun: 10AM-4PM" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-dark-950 overflow-hidden scroll-mt-20">
      {/* Section divider */}
      <div className="section-divider" />
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

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
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-4 leading-tight">
            Get in
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Touch
            </span>
          </h2>
          <p className="text-cream/50 mt-4 leading-relaxed">
            Have a question or want to book an appointment? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUpItem}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-cream font-medium text-sm uppercase tracking-wider mb-1">
                      {item.label}
                    </h3>
                    <p className="text-cream/60">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div variants={fadeUpItem} className="pt-8 border-t border-border">
              <h3 className="text-cream font-display text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: MessageCircle, href: "https://wa.me/15551234567", label: "WhatsApp" },
                  { Icon: Camera, href: "https://instagram.com/blackstagbarbershop", label: "Instagram" },
                  { Icon: Globe, href: "https://blackstagbarbershop.com", label: "Website" },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-muted/50 hover:bg-gold/20 border border-border hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative">
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold/20 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold/20 rounded-br-lg" />
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-dark-900/60 backdrop-blur-sm border border-border dark:border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 relative"
              >
                {/* Success message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">First Name</label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className={cn(
                        "text-cream bg-dark-900 border-dark-800 placeholder:text-cream/40 dark:bg-white/5 dark:border-white/10 dark:placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 transition-all duration-300",
                        errors.firstName && "dark:border-red-500/50 border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    />
                    {errors.firstName && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.firstName}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Last Name</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className={cn(
                        "text-cream bg-dark-900 border-dark-800 placeholder:text-cream/40 dark:bg-white/5 dark:border-white/10 dark:placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 transition-all duration-300",
                        errors.lastName && "dark:border-red-500/50 border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    />
                    {errors.lastName && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.lastName}
                      </motion.p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-cream/60 font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}                      className={cn(
                        "text-cream bg-dark-900 border-dark-800 placeholder:text-cream/40 dark:bg-white/5 dark:border-white/10 dark:placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 transition-all duration-300",
                        errors.email && "dark:border-red-500/50 border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    />
                    {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-cream/60 font-medium">Phone (optional)</label>
                  <Input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="text-cream bg-dark-900 border-dark-800 placeholder:text-cream/40 dark:bg-white/5 dark:border-white/10 dark:placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-cream/60 font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}                      className={cn(
                        "text-cream bg-dark-900 border-dark-800 placeholder:text-cream/40 dark:bg-white/5 dark:border-white/10 dark:placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 min-h-[120px] transition-all duration-300",
                        errors.message && "dark:border-red-500/50 border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    />
                    {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-dark-950/30 border-t-dark-950 rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
