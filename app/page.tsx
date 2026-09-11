import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIBuild from "@/components/HowIBuild";
import OtherProjects from "@/components/OtherProjects";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative pt-32 overflow-x-hidden">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <HowIBuild />
        <Services />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
