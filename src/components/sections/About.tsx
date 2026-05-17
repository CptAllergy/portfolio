"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-180 scroll-mt-28 text-justify leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <h3 className="mb-5 text-center text-sm font-medium text-gray-500">
        🇵🇹 Lisbon, Portugal
      </h3>
      <p className="mb-3">
        Hello! I&#39;m Gonçalo, a Full-Stack Software Engineer who prioritizes
        writing clean, maintainable, and well-structured code. My core expertise
        lies in Java, Spring Boot, and React.
      </p>
      <p className="mb-3">
        Since 2024, I’ve been working as a Full-Stack Developer, building
        high-availability physical security applications. My day-to-day focus
        centers on real-time event delivery, physical device integration, and
        high-concurrency alarm event processing—systems where architecture and
        system uptime are critical. Prior to this, I completed my Master’s
        thesis applying machine Learning models to satellite forest monitoring.
      </p>
      <p>
        I also love working on side projects to experiment with new tools and
        architectural patterns. My recent focus areas include:
      </p>
      <ul className="list-disc pl-6">
        <li>
          Budget-Tracker: A budgeting web app that I use almost everyday,
          designed for splitting shared expenses and analysing user spending
          metrics.
        </li>
        <li>
          Sidequest: A diary-style platform for organizing ideas, media, and
          keeping tabs on projects. Built using a Vite React frontend, a
          concurrent Go backend, and a PostgreSQL database.
        </li>
      </ul>
    </section>
  );
};

export default About;
