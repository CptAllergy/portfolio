"use client";

import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useThemeContext } from "@/context/ThemeContext";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useThemeContext();

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 w-full scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light"
                  ? "rgb(243,244,246)"
                  : "rgba(255,255,255,0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{
              display: "none",
            }}
            date={item.date}
            iconStyle={{
              background:
                theme === "light" ? "white" : "oklch(0.241 0.035 257.671)",
              fontSize: "1.5rem",
            }}
            icon={item.icon}
          >
            <h3 className="text-lg font-semibold capitalize">{item.title}</h3>
            <p className="text-primary dark:text-secondary-dark mt-0! text-sm font-normal">
              {item.location}
            </p>
            <p className="mt-1! text-sm font-normal! text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
