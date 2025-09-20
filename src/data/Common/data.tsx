import { BiLogoPostgresql } from "react-icons/bi"
import { FaGithub, FaLinkedinIn, FaPython, FaDiscord } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker} from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"

import {
  SiRedis,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiPrisma,
  SiDjango,
  SiRust
} from "react-icons/si"

import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: SiDjango, text: "Django" },
  { id: 4, icon: DiJavascript, text: "JavaScript" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 7, icon: RiBearSmileLine, text: "Zustand" },
  { id: 8, icon: SiReactquery, text: "Tanstack Query" },
  { id: 9, icon: SiShadcnui, text: "shadcn" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 11, icon: SiGreensock, text: "GSAP" },
  { id: 12, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 13, icon: SiExpress, text: "ExpressJS" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 15, icon: SiMongodb, text: "MongoDB" },
  { id: 16, icon: SiRedis, text: "Redis" },
  { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 18, icon: SiPostman, text: "Postman" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: FaGithub, text: "GitHub" },
  { id: 21, icon: FaPython, text: "Python" },
  { id: 22, icon: RiJavaLine, text: "Java" },
  { id: 23, icon: TbHexagonLetterC, text: "C" },
  { id: 24, icon: TbBrandCpp, text: "C++" },
  { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: FaDocker, text: "Docker" },
  { id: 27, icon: VscTerminalLinux, text: "Linux" },
  { id: 28, icon: SiVercel, text: "Vercel" },
  { id: 29, icon: PiFigmaLogoBold, text: "Figma" },
  { id: 30, icon: SiRust, text: "Rust" },
];

const projects = [
  {
    id: 1,
    img: "/assets/images/projects/og.png",
    title: "Rae AI",
    status: true,
    content: "A desktop AI chat application built with Tauri 2.0, React, and Rust. Features a unique 'magic dot' overlay system that appears on text copy/selection for instant AI access. Supports multiple AI providers (Gemini, OpenAI, Claude) with API key rotation.",
    url: "https://www.raeai.app/",
    skill: ["React", "TypeScript", "Rust", "Tauri", "Tailwind CSS", "AI"],
    preview: "",
  },
  {
    id: 2,
    img: "/assets/images/vegeta.jpg",
    title: "Kushfolio",
    status: true,
    content: "A modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations, dark/light theme toggle, and dynamic personality switching. Showcases projects, skills, and provides easy contact options.",
    url: "https://kushfolio-web.vercel.app",
    skill: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    preview: "",
  },
  {
    id: 3,
    img: "/assets/images/projects/faf.png",
    title: "Fastaf",
    status: true,
    content: "Fastaf is a npm package that performs the git operations using one single command. You can install it using (npm i -g fastaf-cli).",
    github: "https://github.com/kushagra2503/npm-pkg",
    skill: ["OpenAI", "TypeScript", "Node.js", "npm"],
    preview: "",
  },
  {
    id:4,
    img:"/assets/images/projects/quackquery.png",
    title: "QuackQuery",
    status: true,
    content: "QuackQuery is a terminal based AI assistant that can real time capture your screen and does the job for you.",
    github: "https://github.com/kushagra2503/ai_assistant_pkg",
    skill: ["Gemini, OpenCV, npm, Python, Tesseract, Selenium"],
    preview: "",
  }
];

const writings = [
  {
    id: 1,
    img: "",
    head: "",
    des: "",
    link: "",
  },
];

const hireText = "I'm currently available for internships, full-time opportunities, and freelance projects. If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life!";

const emailLink = "mailto:radhikayash2@gmail.com?subject=Interested%20in%20Hiring%20You";

const navLinks = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/kushagra2503",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kushagra2503/",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    name: "Discord",
    link: "https://discord.com/users/760537388912345179",
    icon: FaDiscord,
  },
];

const supportText = "If you love what I do, whether it's my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work.";

const newsText = "If you love what I do, whether it's my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work.";

export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
};