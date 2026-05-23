"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Shield, Clock, Star,
  ChevronLeft, Scissors, User, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const services = [
  { id: "classic-cut", name: "Classic Haircut", price: "$45", duration: "45 min", icon: Scissors },
  { id: "hot-towel-shave", name: "Hot Towel Shave", price: "$55", duration: "60 min", icon: Scissors },
  { id: "beard-grooming", name: "Beard Grooming", price: "$35", duration: "30 min", icon: Scissors },
  { id: "hair-styling", name: "Hair Styling", price: "$40", duration: "30 min", icon: Scissors },
  { id: "royal-package", name: "Royal Package", price: "$120", duration: "120 min", icon: Scissors },
  { id: "kids-haircut", name: "Kids Haircut", price: "$30", duration: "30 min", icon: Scissors },
];

const barbers = [
  { id: "marcus", name: "Marcus Johnson", role: "Master Barber" },
  { id: "diego", name: "Diego Ramirez", role: "Senior Barber" },
  { id: "james", name: "James Chen", role: "Style Specialist" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
];

type Step = "service" | "barber" | "datetime" | "info" | "confirm";

interface BookingData {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

export default function Booking() {
  const [step, setStep] = useState<Step>("service");
  const [data, setData] = useState<BookingData>({
    serviceId: "",
    barberId: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Get tomorrow as the minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const selectedService = services.find((s) => s.id === data.serviceId);
  const selectedBarber = barbers.find((b) => b.id === data.barberId);

  const updateField = (field: keyof BookingData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === "service" && !data.serviceId) {
      newErrors.serviceId = "Please select a service";
    }
    if (step === "barber" && !data.barberId) {
      newErrors.barberId = "Please select a barber";
    }
    if (step === "datetime") {
      if (!data.date) newErrors.date = "Please select a date";
      if (!data.time) newErrors.time = "Please select a time";
    }
    if (step === "info") {
      if (!data.firstName.trim()) newErrors.firstName = "Required";
      if (!data.lastName.trim()) newErrors.lastName = "Required";
      if (!data.email.trim()) {
        newErrors.email = "Required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = "Invalid email";
      }
      if (!data.phone.trim()) {
        newErrors.phone = "Required for confirmation";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    const steps: Step[] = ["service", "barber", "datetime", "info", "confirm"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      window.scrollTo({ top: document.getElementById("booking")?.offsetTop! - 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    const steps: Step[] = ["service", "barber", "datetime", "info", "confirm"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
      window.scrollTo({ top: document.getElementById("booking")?.offsetTop! - 120, behavior: "smooth" });
    }
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    // Simulate API call for demo
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setConfirmed(true);
  };

  const handleReset = () => {
    setStep("service");
    setData({
      serviceId: "", barberId: "", date: "", time: "",
      firstName: "", lastName: "", email: "", phone: "", notes: "",
    });
    setErrors({});
    setConfirmed(false);
  };

  const stepLabels: Record<Step, string> = {
    service: "Service",
    barber: "Barber",
    datetime: "Date & Time",
    info: "Your Info",
    confirm: "Confirm",
  };

  const stepNumbers: Record<Step, number> = {
    service: 1, barber: 2, datetime: 3, info: 4, confirm: 5,
  };

  const progressPercent = (stepNumbers[step] / 5) * 100;
  const reducedMotion = useReducedMotion();

  if (confirmed) {
    return (
      <section id="booking" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-cream/60 text-lg mb-8">
              Thank you, {data.firstName}! Your appointment has been booked.
            </p>

            <div className="bg-dark-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-left max-w-md mx-auto mb-8 space-y-4">
              {selectedService && (
                <div className="flex items-center justify-between">
                  <span className="text-cream/50 text-sm">Service</span>
                  <span className="text-cream font-medium">{selectedService.name}</span>
                </div>
              )}
              {selectedBarber && (
                <div className="flex items-center justify-between">
                  <span className="text-cream/50 text-sm">Barber</span>
                  <span className="text-cream font-medium">{selectedBarber.name}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-sm">Date</span>
                <span className="text-cream font-medium">
                  {new Date(data.date + "T12:00:00").toLocaleDateString("en-US", {
                    weekday: "long", month: "long", day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-sm">Time</span>
                <span className="text-cream font-medium">{data.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-sm">Duration</span>
                <span className="text-cream font-medium">{selectedService?.duration}</span>
              </div>
              {data.notes && (
                <div className="flex items-center justify-between">
                  <span className="text-cream/50 text-sm">Notes</span>
                  <span className="text-cream font-medium text-right max-w-[200px]">{data.notes}</span>
                </div>
              )}
            </div>

            <Button variant="gold" size="lg" onClick={handleReset} className="mx-auto">
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/80" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />

      {/* Decorative rotating rings — static when reduced motion */}
      {reducedMotion ? (
        <>
          <div className="absolute top-10 right-10 w-40 h-40 border border-gold/10 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/8 rounded-full" />
          </div>
          <div className="absolute bottom-10 left-10 w-28 h-28 border border-gold/10 rounded-full" />
        </>
      ) : (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-40 h-40 border border-gold/10 rounded-full"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/8 rounded-full" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-28 h-28 border border-gold/10 rounded-full"
          />
        </>
      )}

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/8 text-gold text-xs font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Spots Available
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream leading-tight mb-3">
            Book Your
            <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient text-glow">
              Appointment
            </span>
          </h2>
          <p className="text-cream/60">
            Step {stepNumbers[step]} of 5 — {stepLabels[step]}
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-bronze rounded-full"
            initial={{ width: "20%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        {/* Form card */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold/20 rounded-tl-lg" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold/20 rounded-br-lg" />

          <div className="bg-dark-900/60 backdrop-blur-sm border border-border dark:border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 relative">
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {step === "service" && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-cream font-display text-xl font-semibold mb-4">
                    Choose a Service
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map((service) => {
                      const isSelected = data.serviceId === service.id;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => updateField("serviceId", service.id)}
                          className={cn(
                            "relative text-left p-4 rounded-xl border transition-all duration-300",
                            isSelected
                              ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                              : "border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/[0.07]"
                          )}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <service.icon className={cn(
                              "w-5 h-5",
                              isSelected ? "text-gold" : "text-cream/40"
                            )} />
                            {isSelected && (
                              <CheckCircle className="w-4 h-4 text-gold" />
                            )}
                          </div>
                          <div className={cn(
                            "text-sm font-medium mb-0.5",
                            isSelected ? "text-cream" : "text-cream/70"
                          )}>
                            {service.name}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "text-xs font-medium",
                              isSelected ? "text-gold" : "text-cream/40"
                            )}>
                              {service.price}
                            </span>
                            <span className="text-cream/30 text-xs">{service.duration}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.serviceId && (
                    <p className="text-red-400 text-xs">{errors.serviceId}</p>
                  )}
                </motion.div>
              )}

              {/* Step 2: Barber Selection */}
              {step === "barber" && (
                <motion.div
                  key="barber"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-cream font-display text-xl font-semibold mb-4">
                    Select a Barber
                  </h3>
                  <div className="space-y-3">
                    {barbers.map((barber) => {
                      const isSelected = data.barberId === barber.id;
                      return (
                        <button
                          key={barber.id}
                          type="button"
                          onClick={() => updateField("barberId", barber.id)}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4",
                            isSelected
                              ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                              : "border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/[0.07]"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                            isSelected ? "bg-gold/20 text-gold" : "bg-white/10 text-cream/40"
                          )}>
                            <User className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className={cn(
                              "text-sm font-medium",
                              isSelected ? "text-cream" : "text-cream/70"
                            )}>
                              {barber.name}
                            </div>
                            <div className="text-cream/40 text-xs">{barber.role}</div>
                          </div>
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.barberId && (
                    <p className="text-red-400 text-xs">{errors.barberId}</p>
                  )}
                </motion.div>
              )}

              {/* Step 3: Date & Time */}
              {step === "datetime" && (
                <motion.div
                  key="datetime"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-cream font-display text-xl font-semibold">
                    Select Date & Time
                  </h3>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Date</label>
                    <input
                      type="date"
                      min={minDate}
                      value={data.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream",
                        "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300",
                        "appearance-none [color-scheme:dark]",
                        data.date
                          ? "border-gold/30 bg-gold/5"
                          : "border-white/10 hover:border-gold/30",
                        errors.date && "border-red-500/50"
                      )}
                    />
                    {errors.date && (
                      <p className="text-red-400 text-xs">{errors.date}</p>
                    )}
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[240px] overflow-y-auto custom-scrollbar pr-1">
                      {timeSlots.map((slot) => {
                        const isSelected = data.time === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => updateField("time", slot)}
                            disabled={!data.date}
                            className={cn(
                              "py-2.5 px-2 rounded-lg border text-sm font-medium transition-all duration-200",
                              !data.date && "opacity-30 cursor-not-allowed",
                              isSelected
                                ? "border-gold bg-gold/10 text-gold shadow-lg shadow-gold/5"
                                : "border-white/10 bg-white/5 text-cream/60 hover:border-gold/30 hover:text-cream/80"
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                    {errors.time && (
                      <p className="text-red-400 text-xs">{errors.time}</p>
                    )}
                    {!data.date && (
                      <p className="text-cream/30 text-xs">Select a date first</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Personal Info */}
              {step === "info" && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-cream font-display text-xl font-semibold mb-4">
                    Your Information
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-cream/60 font-medium">First Name</label>
                      <input
                        placeholder="John"
                        value={data.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream placeholder:text-cream/30",
                          "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300",
                          errors.firstName ? "border-red-500/50" : "border-white/10 hover:border-gold/30"
                        )}
                      />
                      {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-cream/60 font-medium">Last Name</label>
                      <input
                        placeholder="Doe"
                        value={data.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream placeholder:text-cream/30",
                          "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300",
                          errors.lastName ? "border-red-500/50" : "border-white/10 hover:border-gold/30"
                        )}
                      />
                      {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={data.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream placeholder:text-cream/30",
                        "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300",
                        errors.email ? "border-red-500/50" : "border-white/10 hover:border-gold/30"
                      )}
                    />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={data.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream placeholder:text-cream/30",
                        "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300",
                        errors.phone ? "border-red-500/50" : "border-white/10 hover:border-gold/30"
                      )}
                    />
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-cream/60 font-medium">Special Requests (optional)</label>
                    <textarea
                      placeholder="Any specific requests or notes..."
                      value={data.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      rows={3}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-cream placeholder:text-cream/30",
                        "focus:border-gold/50 focus:ring-gold/20 focus:outline-none transition-all duration-300 resize-none",
                        "border-white/10 hover:border-gold/30"
                      )}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation */}
              {step === "confirm" && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-cream font-display text-xl font-semibold mb-4">
                    Confirm Your Booking
                  </h3>

                  <div className="space-y-4">
                    {[
                      { label: "Service", value: selectedService?.name, price: selectedService?.price },
                      { label: "Barber", value: selectedBarber?.name },
                      { label: "Date", value: data.date ? new Date(data.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "" },
                      { label: "Time", value: data.time },
                      { label: "Duration", value: selectedService?.duration },
                      { label: "Name", value: `${data.firstName} ${data.lastName}` },
                      { label: "Email", value: data.email },
                      { label: "Phone", value: data.phone },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <span className="text-cream/50 text-sm">{item.label}</span>
                        <span className="text-cream text-sm font-medium text-right">
                          {item.value}
                          {item.price && (
                            <span className="text-gold ml-2">{item.price}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {isSubmitting && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-gold/30 border-t-gold rounded-full flex-shrink-0"
                      />
                      <span className="text-gold text-sm">Processing your booking...</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              {step !== "service" ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="text-cream/60 hover:text-cream"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step !== "confirm" ? (
                <Button
                  type="button"
                  variant="gold"
                  onClick={handleNext}
                  className="group"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="gold"
                  onClick={handleConfirm}
                  disabled={isSubmitting}
                  className="group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-dark-950/30 border-t-dark-950 rounded-full mr-2"
                      />
                      Confirming...
                    </>
                  ) : (
                    <>
                      Confirm Booking
                      <CheckCircle className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/5"
        >
          {[
            { icon: Shield, label: "Instant Confirmation" },
            { icon: Clock, label: "Free Cancellation" },
            { icon: Star, label: "100% Satisfaction" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-cream/40 text-xs group cursor-default">
              <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <item.icon className="w-3 h-3 text-gold" />
              </div>
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
