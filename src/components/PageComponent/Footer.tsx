"use client"
// Footer section for the page component
import { yashFooterLInk, yashName } from "@/data/YashData/data"
import { useSwitch } from "../Context/SwitchContext"
import { kushagraFooterLink, kushagraShortName } from "@/data/KushagraData/data"

const Footer = () => {
    const { isSwitchOn } = useSwitch()
    const footerLinks = isSwitchOn? kushagraFooterLink : yashFooterLInk
    return (
        <footer className="md:mb-12 mb-16">
            <div className="border-t border-light-border dark:border-zinc-700 my-6"/>
            <div className="flex flex-col gap-2.5 items-center">
                <div className="flex flex-wrap gap-4 items-center md:text-base text-sm">
                    {footerLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            target="_blank"
                            className="select-none md:text-base text-xl text-light-text dark:text-mainWhite hover:opacity-75 hover:scale-110 flex gap-1 items-center transition-all duration-200"
                        >
                            <link.icon /> <span className="hidden md: block">{link.name}</span>
                        </a>
                    ))}
                </div>
                <p className="text-sm text-light-muted dark:text-mainWhite/70">
                    © 2025 {isSwitchOn ? kushagraShortName : yashName}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer