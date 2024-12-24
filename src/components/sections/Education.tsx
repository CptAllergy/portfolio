"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const Education = () => {
  const { ref } = useSectionInView("Education", 0.5);

  return (
    <section ref={ref} id="education" className="scroll-mt-28">
      <SectionHeading>Education</SectionHeading>
    </section>
  );
};

export default Education;
