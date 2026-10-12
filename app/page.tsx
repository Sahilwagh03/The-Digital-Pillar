import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { BrandsWeMoved } from "@/components/sections/brands-we-moved";
import { About } from "@/components/sections/about";
import { SelectedWork } from "@/components/sections/selected-work";
import { ClientStories } from "@/components/sections/client-stories";
import { ScrollStopper } from "@/components/sections/scroll-stopper";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhyChooseUs />
      <BrandsWeMoved />
      <About />
      <SelectedWork />
      <ClientStories />
      <ScrollStopper />
      <FAQ />
    </main>
  );
}
