"use client";

import React from "react";
import { ServiceFeaturedWorkData } from "@/constants/services";
import { FeaturedWorkBento } from "./featured-work-bento";
import { FeaturedWorkPhoneScroll } from "./featured-work-phone-scroll";
import { FeaturedWorkCardsInline } from "./featured-work-cards-inline";

interface ServiceFeaturedWorkProps {
  featuredWork: ServiceFeaturedWorkData;
}

export function ServiceFeaturedWork({
  featuredWork,
}: ServiceFeaturedWorkProps) {
  const layout = featuredWork.layout || "bento";

  if (layout === "phone-scroll") {
    return <FeaturedWorkPhoneScroll featuredWork={featuredWork} />;
  }

  if (layout === "cards-inline") {
    return <FeaturedWorkCardsInline featuredWork={featuredWork} />;
  }

  return <FeaturedWorkBento featuredWork={featuredWork} />;
}

export { FeaturedWorkBento, FeaturedWorkPhoneScroll, FeaturedWorkCardsInline };
