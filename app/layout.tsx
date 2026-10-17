import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import { SmoothScroll } from "@/components/common/smooth-scroll";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
      className={`${familjenGrotesk.variable} antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-primary bg-[#050505] text-white">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

