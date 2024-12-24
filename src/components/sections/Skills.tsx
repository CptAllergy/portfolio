"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section ref={ref} id="skills" className="scroll-mt-28">
      <SectionHeading>Skills</SectionHeading>
    </section>
  );
};

export default Skills;
