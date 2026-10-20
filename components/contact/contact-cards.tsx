"use client";

import React from "react";
import Link from "next/link";
import { Headphones, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { CONTACT_CARDS_DATA, ContactCardItem } from "@/constants/contact";
import {
  contactCardContainerVariants,
  contactCardVariants,
} from "@/animation/contact";

export function ContactCards() {
  const renderIcon = (icon: ContactCardItem["icon"]) => {
    switch (icon) {
      case "headphones":
      case "mail":
        return <Headphones className="w-6 h-6 text-white stroke-[1.75]" />;
      case "map-pin":
        return <MapPin className="w-6 h-6 text-white stroke-[1.75]" />;
      default:
        return <Headphones className="w-6 h-6 text-white stroke-[1.75]" />;
    }
  };

  return (
    <section
      id="contact-info-cards"
      data-nav-theme="dark"
      className="relative w-full bg-[#050505] text-white pt-8 sm:pt-12 pb-20 sm:pb-28 lg:pb-36"
    >
      <Container size="lg">
        <motion.div
          variants={contactCardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {CONTACT_CARDS_DATA.map((card) => (
            <motion.div
              key={card.id}
              variants={contactCardVariants}
              className="group relative flex flex-col justify-between border border-neutral-800/90 rounded-none sm:rounded-sm md:rounded-md bg-[#080808]/60 p-8 sm:p-10 lg:p-11 transition-all duration-300 hover:border-neutral-600 hover:bg-[#0c0c0c]/80"
            >
              <div>
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-start text-white">
                  {renderIcon(card.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-6 sm:mt-8 mb-3 font-primary">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-normal leading-relaxed font-primary mb-8 sm:mb-10 text-pretty">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href={card.ctaHref}
                  target={card.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-white transition-colors duration-300 group-hover:text-neutral-300"
                >
                  <span>{card.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactCards;
