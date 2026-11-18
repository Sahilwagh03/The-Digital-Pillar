import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import { CustomCursor } from "@/components/common/custom-cursor";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://thedigitalpillar.com";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "The Digital Pillar",
  description: "The Digital Pillar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-primary bg-[#07080d] text-white relative">
        {/* Global Uniform Atmospheric Background (Fixed across entire site) */}
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* Base Midnight Background */}
          <div className="absolute inset-0 bg-[#07080d]" />

          {/* Top Atmospheric Radial Glow from Reference Palette */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[90vh] bg-[radial-gradient(ellipse_85%_65%_at_50%_0%,#1c243d_0%,#13192b_38%,#0d121f_65%,transparent_100%)] opacity-95" />

          {/* Subtle Ambient Depth Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-[radial-gradient(ellipse_75%_50%_at_50%_100%,rgba(24,32,55,0.3)_0%,rgba(13,18,31,0.1)_50%,transparent_100%)] opacity-60" />
        </div>

        <CustomCursor />
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

