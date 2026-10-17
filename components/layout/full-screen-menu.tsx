"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/container";
import { MENU_ITEMS, MenuItem } from "@/constants/navigation";
import { FOOTER_CONTENT } from "@/constants/footer";
import { useMenuAnimation } from "@/animation/menu";

export interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: readonly MenuItem[];
}

export function FullScreenMenu({
  isOpen,
  onClose,
  items = MENU_ITEMS,
}: FullScreenMenuProps) {
  const [currentYear, setCurrentYear] = useState<number | string>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const {
    wrapRef,
    panelRef,
    overlayRef,
    listRef,
    footerRef,
    setDividerRef,
    setIndexRef,
    setLinkRef,
    handleLinkClick,
  } = useMenuAnimation({ isOpen, onClose });

  return (
    <div
      ref={wrapRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-40 hidden select-none"
    >
      {/* Backdrop overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Main sliding menu panel */}
      <div
        ref={panelRef}
        className="relative w-full h-full bg-[#050505] text-white flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top spacer to ensure content sits below fixed header */}
        <div className="pt-20 sm:pt-24" />

        {/* Center menu items */}
        <div className="flex-1 min-h-0 flex flex-col md:justify-center my-auto py-2 md:py-4">
          <Container size="lg">
            <ul ref={listRef} className="flex flex-col group/list w-full">
              {items.map((item, index) => (
                <li
                  key={item.index}
                  className="w-full flex flex-col group/item transition-opacity duration-500 hover:!opacity-100 group-hover/list:opacity-25"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="flex items-center justify-between py-[clamp(0.5rem,1.8vh,1.75rem)] md:py-4 lg:py-6 xl:py-7 cursor-pointer w-full text-white"
                  >
                    {/* Index number on left */}
                    <div className="overflow-hidden pr-6 sm:pr-10 md:pr-14">
                      <span
                        ref={setIndexRef(index)}
                        className="block text-xs sm:text-sm md:text-base font-semibold tracking-widest text-neutral-400 font-primary"
                      >
                        {item.index}
                      </span>
                    </div>

                    {/* Large menu label on right */}
                    <div className="overflow-hidden flex-1 text-right">
                      <span
                        ref={setLinkRef(index)}
                        className="inline-block text-[clamp(2.25rem,7.5vh,3.5rem)] md:text-[clamp(4.5rem,6.5vw,7.5rem)] lg:text-[clamp(5.5rem,7.8vw,9rem)] xl:text-[clamp(6.5rem,8.5vw,10.5rem)] font-bold uppercase tracking-tight leading-[0.9] font-primary transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:-translate-x-3 sm:group-hover/item:-translate-x-6 text-white"
                      >
                        {item.label}
                      </span>
                    </div>
                  </a>

                  {/* Horizontal rule below item */}
                  {index < items.length - 1 && (
                    <div
                      ref={setDividerRef(index)}
                      className="w-full h-[1px] bg-white/15 origin-left"
                    />
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </div>

        {/* Bottom menu footer */}
        <div ref={footerRef} className="py-7 sm:py-9 lg:py-12">
          <Container size="lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] tracking-widest uppercase text-neutral-400 font-primary">
              {/* Copyright */}
              <div>
                <span>© {currentYear} THE DIGITAL PILLAR</span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-6 sm:gap-8">
                {FOOTER_CONTENT.social.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center py-1 text-white hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default FullScreenMenu;
