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
    img: "",
    title: "QuackQuery",
    status: "true",
    content: "",
    url: "",
    github: "",
    skill: [],
    preview: "",
  },
  {
    id: 2,
    img: "",
    title: "Kushfolio",
    status: "true",
    content: "",
    url: "",
    github: "",
    skill: [],
    preview: "",
  },
  {
    id: 3,
    img: "",
    title: "Kushagra's Portfolio",
    status: "true",
    content: "",
    url: "",
    github: "",
    skill: [],
    preview: "",
  },
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