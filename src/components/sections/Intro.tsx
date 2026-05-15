"use client";

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { ArrowRight, Download } from "lucide-react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen w-full max-w-200 scroll-mt-400 items-center text-justify sm:mb-0"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        <h1 className="mb-5 text-5xl font-extrabold sm:text-6xl dark:text-blue-200">
          Gonçalo Prates
        </h1>
        <h2 className="mb-6 text-xl font-medium sm:text-2xl">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Spring Boot • Java • React"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row">
          {/*TODO replace this with a Contact me here section in the future when I implement something to send emails*/}
          <Link
            href="#projects"
            className="group bg-primary flex items-center gap-2 rounded-lg border border-black/10 px-7 py-3 text-white transition outline-none hover:scale-105 hover:bg-gray-950 active:scale-100"
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            See my projects{" "}
            <ArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
          <a
            href="/goncalo_prates_cv.pdf"
            download
            className="group flex cursor-pointer items-center gap-2 rounded-lg bg-white px-7 py-3 transition outline-none hover:scale-105 active:scale-100 dark:bg-white/10"
          >
            Download CV{" "}
            <Download className="opacity-60 transition group-hover:translate-y-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/goncaloprates/"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/CptAllergy"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 dark:bg-white/10 dark:text-white/60"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
