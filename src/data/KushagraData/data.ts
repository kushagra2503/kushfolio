import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const kushagraImage = "/assets/Images/pfps/zucc.gif"
const kushagraName = "Kushagra"
const kushagraShortName = "Kushh"
const kushagraBio = "Software Developer"
const kushagraAbout = `
  <p>
    Hey! Kushagra, an undergraduate computer science student and full-stack developer who loves turning ideas into real, working products.
  </p>
  <p>
    I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with Next.js, Django, Express, and TypeScript.
  </p>
  <p>
    I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.
  </p>
`

const kushagraLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/kushagra2503",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=Brainfdev",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/",
    icon: FaLinkedinIn,
  },
]

const kushagraContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries."
const kushagraContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=Brainfdev",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Discord",
    link: "",
    icon: FaDiscord,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:radhikayash2@gmail.com",
    icon: MdOutlineMail,
  },
]

const kushagraFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:radhikayash2@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/kushagra2503",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=Brainfdev",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/",
    icon: FaLinkedinIn,
  },
]

export {
  kushagraImage,
  kushagraBio,
  kushagraContact,
  kushagraContactLink,
  kushagraName,
  kushagraShortName,
  kushagraAbout,
  kushagraLink,
  kushagraFooterLink,
}