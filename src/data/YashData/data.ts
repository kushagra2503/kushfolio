
import { FaXTwitter, FaGithub, FaDiscord , FaLinkedinIn} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const yashImage = "/assets/images/pfps/yashpfp.gif";
const yashName = "Yash";
const yashAbout = `
  <p>
    Hey, I’m Yash — welcome to the other side of my portfolio, where I show you what I do other than programming.
  </p>
  <p>
    Outside of coding, I’m all about football, hitting the gym, diving into story-driven video games and obsessed with designs and animations.
  </p>
  <p>
    If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
  </p>
`
const yashBio = "Simplicity is the ultimate sophistication."

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
        link:  "https://x.com/intent/follow?screen_name=Finetunedxd",
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
        link: "https://x.com/intent/follow?screen_name=Finetunedxd",
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
        link: "https://x.com/intent/follow?screen_name=Finetunedxd",
        icon: FaXTwitter,
    },
    {
        id: 3,
        name: "Email",
        link: "mailto:radhikayash2@gmail.com",
        icon: MdOutlineMail,
    }
]

const arts = [
    {
        id: 1,
        img: "/assets/images/cloud.gif",
        title: "Cloud Animation",
        content: "Digital artwork featuirng smooth painted clouds and birds",
    },
    {
        id: 2,
        img: "/assets/images/plane2.gif",
        title: "Flying Plane Animation",
        content: "A smooth animated plane flying across the screen",
    },
    {
        id: 3,
        img: "/assets/images/dragon.gif",
        title: "Dragon Animation",
        content: "A cartoonish dragon blowing fire",
    },
    {
        id: 4,
        img: "/assets/images/wolf.gif",
        title: "Wolves Animation",
        content: "Resembling how the wolves live in a pack",
    },
    {
        id: 5,
        img: "/assets/images/human2.gif",
        title: "Human Animation",
        content: "Imagined how a human would look if AI took over",
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
    yashContactLink,
    arts
}