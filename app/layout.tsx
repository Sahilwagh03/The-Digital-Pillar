import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

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
      className={`${familjenGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-primary bg-[#050505] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

