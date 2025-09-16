import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const kushagraImage = "/assets/Images/pfps/kushpfp.gif"
const kushagraName = "Kushagra"
const kushagraShortName = "Kushh"
const kushagraBio = "Software Developer"
const kushagraAbout = `
  <p>
  Kushagra | 3rd-year undergrad, wannabe entrepreneur & full-stack dev turning wild ideas into real products.
  </p>
  <p>
    I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with Next.js, Express, Rust, Python and TypeScript.
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
    link: "https://x.com/intent/follow?screen_name=Finetunedxd",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kushagra2503/",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Discord",
    link: "https://discord.com/users/760537388912345179",
    icon: FaDiscord,
  }
]

const kushagraContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries."
const kushagraContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=Finetunedxd",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Discord",
    link: "https://discord.com/users/760537388912345179",
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
    link: "https://x.com/intent/follow?screen_name=Finetunedxd",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kushagra2503/",
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