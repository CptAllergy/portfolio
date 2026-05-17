"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.2);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-212 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="grid grid-cols-1 justify-center gap-2 text-lg text-nowrap text-gray-800 sm:grid-cols-3 lg:grid-cols-5">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="rounded-xl border border-black/10 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
