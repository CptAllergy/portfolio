"use client";

import SectionHeading from "../SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
