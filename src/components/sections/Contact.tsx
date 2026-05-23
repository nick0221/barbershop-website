"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Camera, MessageCircle, Globe, CheckCircle } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
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
    <section id="contact" className="relative py-24 md:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
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
            <div className="pt-8 border-t border-white/5">
              <h3 className="text-cream font-display text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[MessageCircle, Camera, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-dark-900/50 border border-white/5 rounded-2xl p-8 relative"
            >
              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
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
                      "bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20",
                      errors.firstName && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-cream/60 font-medium">Last Name</label>
                  <Input
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={cn(
                      "bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20",
                      errors.lastName && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-cream/60 font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={cn(
                    "bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20",
                    errors.email && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-cream/60 font-medium">Phone</label>
                <Input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-cream/60 font-medium">Message</label>
                <Textarea
                  placeholder="Tell us what you're looking for..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={cn(
                    "bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:ring-gold/20 min-h-[120px]",
                    errors.message && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  )}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
