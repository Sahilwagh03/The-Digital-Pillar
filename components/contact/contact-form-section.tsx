"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import {
  CONTACT_FORM_DATA,
  BUSINESS_TYPES,
  PROJECT_TIMELINES,
} from "@/constants/contact";
import { contactSectionVariants } from "@/animation/contact";
import { cn } from "@/lib/utils";

type AudienceType = "brands" | "creator";

export function ContactFormSection() {
  const { headline, description, teamImage } = CONTACT_FORM_DATA;

  const [audience, setAudience] = useState<AudienceType>("brands");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    businessType: "",
    projectTimeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyTYrkxE6VcvM3yJLwdHDH3k9QgQa3-uchW-riMMv4Ui0iJnr6EdTazqpo1A-4vFk1x/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            audience,
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        }
      );
    } catch {
      // Continue even if network error
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          contact: "",
          businessType: "",
          projectTimeline: "",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <section
      id="contact-form"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white py-12 sm:py-16 lg:py-20"
    >
      <Container size="lg">
        <motion.div
          variants={contactSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start"
        >
          {/* ================================================================ */}
          {/* LEFT COLUMN: Heading, Intro & Team Photography                    */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.08] font-primary mb-4 sm:mb-5">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-lg mb-8 sm:mb-12 font-primary">
              {description}
            </p>

            {/* Team Collaborative Image */}
            <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-neutral-800/80 bg-neutral-900">
              <Image
                src={teamImage}
                alt="The Digital Pillar team gathered around creative strategy session"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center select-none transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Subtle Atmospheric Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN: Audience Switcher & Form Fields                     */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* Pill Selector (FOR BRANDS / FOR CREATOR) */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={() => setAudience("brands")}
                className={cn(
                  "rounded-full px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer active:scale-95",
                  audience === "brands"
                    ? "bg-white text-black shadow-md hover:bg-neutral-100"
                    : "bg-transparent text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white"
                )}
              >
                FOR BRANDS
              </button>
              <button
                type="button"
                onClick={() => setAudience("creator")}
                className={cn(
                  "rounded-full px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer active:scale-95",
                  audience === "creator"
                    ? "bg-white text-black shadow-md hover:bg-neutral-100"
                    : "bg-transparent text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white"
                )}
              >
                FOR CREATOR
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 w-full">
              {/* Field: Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-name"
                  className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Cooper"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all font-primary"
                />
              </div>

              {/* Field: Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-email"
                  className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Jane123@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all font-primary"
                />
              </div>

              {/* Row: Contact & Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                {/* Contact */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                  >
                    Contact
                  </label>
                  <input
                    id="contact-phone"
                    name="contact"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all font-primary"
                  />
                </div>

                {/* Business Type */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-business-type"
                    className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                  >
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      id="contact-business-type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full appearance-none bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 pr-10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all font-primary cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0a0a] text-neutral-500">
                        Select...
                      </option>
                      {BUSINESS_TYPES.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-[#111111] text-white"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-500 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Field: Project Timeline */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-timeline"
                  className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                >
                  Project Timeline
                </label>
                <div className="relative">
                  <select
                    id="contact-timeline"
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleChange}
                    className="w-full appearance-none bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 pr-10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all font-primary cursor-pointer"
                  >
                    <option value="" className="bg-[#0a0a0a] text-neutral-500">
                      When do you want to start?
                    </option>
                    {PROJECT_TIMELINES.map((time) => (
                      <option
                        key={time}
                        value={time}
                        className="bg-[#111111] text-white"
                      >
                        {time}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-500 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Field: Message */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-message"
                  className="text-xs sm:text-sm font-medium text-neutral-200 mb-2 font-primary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Leave your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-md px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/30 transition-all resize-y min-h-[110px] font-primary"
                />
              </div>

              {/* Action: Send Message */}
              <div className="pt-2 flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-white border-b border-white pb-1 transition-all duration-300 hover:text-neutral-300 hover:border-neutral-300 active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Submission Success Notice */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 text-xs text-emerald-400 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactFormSection;
