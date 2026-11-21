"use client";

import Link from "next/link";
import { Headphones, Mail, MapPin, ArrowRight } from "lucide-react";
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
        return <Headphones className="w-5 h-5 text-[#fdbb11] stroke-[2]" />;
      case "mail":
        return <Mail className="w-5 h-5 text-[#fdbb11] stroke-[2]" />;
      case "map-pin":
        return <MapPin className="w-5 h-5 text-[#fdbb11] stroke-[2]" />;
      default:
        return <Headphones className="w-5 h-5 text-[#fdbb11] stroke-[2]" />;
    }
  };

  return (
    <section
      id="contact-info-cards"
      data-nav-theme="dark"
      className="relative w-full bg-transparent text-white pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-32 border-t border-white/5"
    >
      <Container size="lg">
        <motion.div
          variants={contactCardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8"
        >
          {CONTACT_CARDS_DATA.map((card) => (
            <motion.div
              key={card.id}
              variants={contactCardVariants}
              className="group relative flex flex-col justify-between border border-white/10 rounded-2xl bg-[#09090f]/80 p-5 sm:p-6 md:p-6 lg:p-10 xl:p-11 transition-all duration-300 hover:border-white/20 hover:bg-[#0e0e18] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85)]"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-[#fdbb11]/10 border border-[#fdbb11]/25 flex items-center justify-center text-[#fdbb11] shadow-[0_0_15px_rgba(253,187,17,0.15)] group-hover:scale-105 transition-all duration-300">
                  {renderIcon(card.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight mt-5 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 font-primary">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[0.8125rem] lg:text-sm text-neutral-400 font-normal leading-relaxed font-primary mb-6 sm:mb-7 lg:mb-10 text-pretty">
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
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#fdbb11] transition-colors duration-300 hover:text-[#e5a70b]"
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
