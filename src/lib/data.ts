import project1Image from "../../public/project1.png";
import { GraduationCapIcon } from "lucide-react";
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
    title: "AfterSights",
    description: "Event browsing application",
    tags: ["React", "Next.js", "Tailwind", "Spring Boot", "Kotlin"],
    imageUrl: project1Image,
  },
  {
    title: "My Trainer",
    description: "Event browsing application",
    tags: ["React", "Next.js", "Tailwind", "Spring Boot", "Kotlin"],
    imageUrl: project1Image,
  },
  {
    title: "Samsung Converter",
    description: "Event browsing application",
    tags: ["FFMPEG", "Java"],
    imageUrl: project1Image,
  },
];

export const skillsData = [
  "Java",
  "React",
  "Next.js",
  "Tailwind",
  "Spring Boot",
  "Kotlin",
  "Javascript",
  "Typescript",
  "Golang",
  "Github Actions",
  "SQL",
  "PostgreSQL",
  "Firestore",
  "ArgoCD",
  "Kubernetes",
  "Kafka",
  "Microservices",
];

export const experiencesData = [
  {
    title: "Master’s in Computer Science and Engineering",
    location: "NOVA School of Science and Technology",
    description: "Final Average: 17/20",
    icon: React.createElement(GraduationCapIcon),
    date: "2018-2023",
  },
  {
    title: "Master’s in Computer Science and Engineering",
    location: "NOVA School of Science and Technology",
    description: "Final Average: 17/20",
    icon: React.createElement(GraduationCapIcon),
    date: "2018-2023",
  },
  {
    title: "Master’s in Computer Science and Engineering",
    location: "NOVA School of Science and Technology",
    description: "a",
    icon: React.createElement(GraduationCapIcon),
    date: "2018-2023",
  },
];
