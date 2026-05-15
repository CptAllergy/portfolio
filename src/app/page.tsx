import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Intro from "../components/sections/Intro";
import Projects from "@/components/sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";

// TODO add some actual browser icon
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
