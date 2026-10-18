import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/constants/services";
import { ServicePageView } from "@/components/service-template/service-page-view";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = getServiceBySlug(slug);

  return {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    openGraph: {
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      images: [
        {
          url: serviceData.hero.bannerImage,
          width: 1200,
          height: 630,
          alt: serviceData.hero.bannerAlt,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const serviceData = getServiceBySlug(slug);

  return <ServicePageView data={serviceData} />;
}
