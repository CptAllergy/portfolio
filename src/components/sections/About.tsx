"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-180 scroll-mt-28 text-justify leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
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
        and <span className="italic underline"> React</span>. I began seriously
        programming in 2018, when I enrolled in University at Nova School of
        Science and Technology. During the 5 years I spent studying, besides the
        many projects and tests, I was an{" "}
        <span className="font-bold">intern at a consulting company</span>,
        participated in a{" "}
        <span className="font-bold">research project with a scholarship</span>,
        and finished my Master&apos;s Thesis in relation to
        <span className="font-bold">
          satellite monitoring of forests using machine learning techniques
        </span>
        .
      </p>
      <p>
        Since 2024, I&apos;ve been working as a Full-Stack Developer at Motorola
        Solutions, where I&apos;m learning everyday about what it takes to build
        a successful product. Besides that, I love working on my side projects
        when I have free time. I built simple tools to automate tasks, but my
        main endeavors are a flutter{" "}
        <span className="font-bold">fitness application</span> and a web{" "}
        <span className="font-bold">event browsing application</span>.
      </p>
    </section>
  );
};

export default About;
