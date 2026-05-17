"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { ArrowRight, Download } from "lucide-react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.8);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen w-full max-w-200 scroll-mt-400 items-center text-justify sm:mb-0"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        <h1 className="mb-5 text-5xl font-extrabold sm:text-6xl">
          Gonçalo Prates
        </h1>
        <h2 className="mb-10 text-xl font-medium sm:text-2xl">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "Java • Spring Boot • React"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row sm:gap-3">
          {/*TODO replace this with a Contact me here section in the future when I implement something to send emails*/}
          <a
            href="#projects"
            className="group bg-primary hover:bg-primary-hover dark:hover:bg-primary-dark-hover flex w-full items-center gap-2 rounded-lg border border-black/10 px-7 py-3 text-white transition outline-none hover:scale-105 active:scale-100 sm:w-fit"
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            See my projects{" "}
            <ArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </a>
          <a
            href="/goncalo_prates_cv.pdf"
            download
            className="group flex w-full cursor-pointer items-center gap-2 rounded-lg bg-white px-7 py-3 transition outline-none hover:scale-105 active:scale-100 sm:w-fit dark:bg-white/10"
          >
            Download CV{" "}
            <Download className="opacity-60 transition group-hover:translate-y-1" />
          </a>
          <div className="grid w-full grid-cols-2 items-center justify-center gap-2 sm:w-fit">
            <a
              href="https://www.linkedin.com/in/goncaloprates/"
              target="_blank"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-black/10 bg-white p-4 text-gray-700 transition outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 sm:rounded-full dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/CptAllergy"
              target="_blank"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-black/10 bg-white p-4 text-gray-700 transition outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 sm:rounded-full dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
