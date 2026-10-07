import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhyChooseUs />
    </main>
  );
}
