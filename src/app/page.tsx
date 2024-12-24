import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Header from "@/components/sections/Header";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
