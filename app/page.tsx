import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <div className="content">
          <Hero />
          <Intro />
          <About />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
