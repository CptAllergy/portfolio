"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.8);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="rounded-xl border border-black/[0.1] bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
