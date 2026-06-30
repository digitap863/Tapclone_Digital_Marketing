import Hero from "./components/Hero";
import Clients from "./components/Clients";
import MarketingMarquee from "./components/MarketingMarquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import InquiryModal from "./components/InquiryModal";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Hero />
      <MarketingMarquee />
      <Services />
      <WhyChooseUs />
      {/* <About /> */}
      <Clients />
      <Testimonials />
      <Projects />
      <Contact />
      <InquiryModal />
    </div>
  );
}
