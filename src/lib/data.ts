import projectAfterSightsImage from "../../public/proj_after.png";
import projectBudgetTrackerImage from "../../public/proj_bt.png";
import projectSidequestImage from "../../public/proj_sq.png";
import projectSamsungConverterImage from "../../public/proj_sc.png";

import {
  BriefcaseBusinessIcon,
  FileCogIcon,
  GraduationCapIcon,
  NotebookPenIcon,
} from "lucide-react";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const projectsData = [
  {
    title: "Budget Tracker",
    description: "Money tracking application with group balance settlements.",
    tags: ["React", "Next.js", "Tailwind", "Firebase", "Firestore"],
    imageUrl: projectBudgetTrackerImage,
    projectUrl: "https://github.com/CptAllergy/budget-tracker",
  },
  {
    title: "Sidequest",
    description:
      "Hobby tracking app. Plan and remember your games, shows or projects.",
    tags: ["Go", "React", "Vite", "Tailwind", "Postgres"],
    imageUrl: projectSidequestImage,
    projectUrl: "https://github.com/CptAllergy/sidequest",
  },
  {
    title: "AfterSights",
    description: "Map based event browsing application.",
    tags: ["Kotlin", "React", "Next.js", "Tailwind", "Spring Boot", "Postgres"],
    imageUrl: projectAfterSightsImage,
  },
  {
    title: "Samsung Converter",
    description:
      "A simple program to convert video files to a SamsungTV compatible format and extract embedded subtitles.",
    tags: ["Java", "FFmpeg"],
    imageUrl: projectSamsungConverterImage,
    projectUrl: "https://github.com/CptAllergy/SamsungTV-Video-Converter",
  },
];

export const skillsData = [
  "Golang",
  "Java",
  "Kotlin",
  "TypeScript",
  "JavaScript",
  "Spring Boot",
  "Microservices",
  "Kafka",
  "SQL",
  "PostgreSQL",
  "Firestore",
  "Next.js",
  "React",
  "Tailwind",
  "Kubernetes",
  "ArgoCD",
  "Github Actions",
];

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Motorola Solutions",
    description:
      "Full-stack development of real-time, enterprise-scale surveillance and access control systems, specializing in alarm event detection and incident response workflows.",
    icon: React.createElement(BriefcaseBusinessIcon),
    date: "2024-Present",
  },
  {
    title: "Master’s in Computer Science and Engineering",
    location: "NOVA School of Science and Technology",
    description: "Final Average: 17/20.",
    icon: React.createElement(GraduationCapIcon),
    date: "2018-2023",
  },
  {
    title: "Part-time IT teacher",
    location: "Almada",
    description: "Teaching children about digital literacy.",
    icon: React.createElement(NotebookPenIcon),
    date: "2022",
  },
  {
    title: "Consulting Internship",
    location: "LinkCom - Link Consulting",
    description: "Internship centered on invoice processing automation.",
    icon: React.createElement(FileCogIcon),
    date: "2021",
  },
];
