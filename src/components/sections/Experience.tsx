"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28">
      <SectionHeading>Professional Experience</SectionHeading>
    </section>
  );
};

export default Experience;
