import { SiBuymeacoffee } from "react-icons/si";
import { FaXTwitter, FaGithub, FaDiscord , FaLinkedinIn} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const yashImage = "/assets/Images/pfps/yashpfp.gif";
const yashName = "Yash";
const yashAbout = `
  <p>
    Hey, I’m Yash — welcome to the other side of my portfolio, where I show you what I do other than programming.
  </p>
  <p>
    Outside of coding, I’m all about football, hitting the gym, and diving into story-driven video games.
  </p>
  <p>
    If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
  </p>
`
const yashBio = "Chill in vibe, mysterious in mind."

const yashLink = [
    {
        id: 1,
        name: "Github",
        link: "https://github.com/kushagra2503",
        icon: FaGithub,
    },
    {
        id: 2,
        name: "Twitter",
        link:  "https://x.com/intent/follow?screen_name=Brainfdev",
        icon: FaXTwitter,
    },
    {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/",
        icon: FaLinkedinIn,
    },
    {
        id: 4,
        name: "Discord",
        link: "https://discord.com/users/760537388912345179",
        icon: FaDiscord,
    }
]

const yashFooterLInk = [
    {
        id: 1,
        name: "Github",
        link: "",
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
        name: "Discord",
        link: "https://discord.com/users/760537388912345179",
        icon: FaDiscord,
    },
    {
        id: 4,
        name: "Email",
        link: "mailto:radhikayash2@gmail.com",
        icon: MdOutlineMail,
    },
]

const yashContact =  "Most of the time, you'll find me hanging out on any Discord server. I'm also super active on X, so feel free to DM me there!"
const yashContactLink = [
    {
        id: 1,
        name: "Discord",
        link: "https://discord.com/users/760537388912345179",
        icon: FaDiscord,
    },
    {
        id: 2,
        name: "Twitter",
        link: "https://x.com/intent/follow?screen_name=Brainfdev",
        icon: FaXTwitter,
    },
    {
        id: 3,
        name: "Email",
        link: "mailto:radhikayash2@gmail.com",
        icon: MdOutlineMail,
    }
]

export {
    yashImage,
    yashName,
    yashAbout,
    yashBio,
    yashLink,
    yashFooterLInk,
    yashContact,
    yashContactLink
}