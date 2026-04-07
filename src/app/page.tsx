import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import CaseStudy from "@/components/sections/CaseStudy";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <CaseStudy />
        <Testimonials />
        <CtaBanner />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
