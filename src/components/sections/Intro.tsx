"use client";

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { ArrowRight, Download } from "lucide-react";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mt-16 mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <h1 className="mb-10 px-4 text-2xl !leading-[1.5] font-medium sm:text-3xl">
        <span className="font-bold">Hello, my name is Gonçalo </span>
        and I am a <span className="underline">full-stack developer</span>. I
        have a Master&apos;s in{" "}
        <span className="underline">Computer Science and Engineering</span> and
        I&apos;m mostly interested in{" "}
        <span className="font-bold">back-end </span>
        development but I also enjoy{" "}
        <span className="font-bold">web-development </span>
        and learning about <span className="font-bold">machine-learning </span>.
        I am most familiar with{" "}
        <span className="italic underline">Spring Boot </span>
        and <span className="italic underline"> React</span>.
      </h1>

      <div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row">
        {/*TODO what to do about this button? Contact section does not exist*/}
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-gray-900 px-7 py-3 text-white transition outline-none hover:scale-105 hover:bg-gray-950 active:scale-100"
        >
          Contact me here{" "}
          <ArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV-EN.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 transition outline-none hover:scale-105 active:scale-100 dark:bg-white/10"
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
    </section>
  );
};

export default Intro;
