import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main id="top" className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Cta />
      <Footer />
    </main>
  );
}