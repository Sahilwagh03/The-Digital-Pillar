import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { BrandsWeMoved } from "@/components/sections/brands-we-moved";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhyChooseUs />
      <BrandsWeMoved />
      <About />
    </main>
  );
}
