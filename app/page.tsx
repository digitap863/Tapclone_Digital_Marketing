import Hero from "./components/Hero";
import MarketingMarquee from "./components/MarketingMarquee";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Hero />
      <MarketingMarquee />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
