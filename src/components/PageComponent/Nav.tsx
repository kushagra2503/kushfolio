"use client"
import { yashImage } from "@/data/YashData/data"
import { useSwitch } from "../Context/SwitchContext"
import { useTheme } from "../Context/ThemeContext"
import { kushagraImage } from "@/data/KushagraData/data"
import Image from "next/image"
import { navLinks } from "@/data/Common/data"
import { InfoTipNav } from "../InfoTipNav"
import { useState } from "react"

const Nav = () => {
    const { isSwitchOn, toggleSwitch } =useSwitch()
    const { theme } = useTheme()
    const [ isArrowVisible, setIsArrowVisible ] = useState(true)

    const handleArrowVisibility = () => {
        setIsArrowVisible(false)
    }
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
      <div className="relative bg-light-card border border-light-border dark:bg-mainBlack dark:border-zinc-700 px-4 py-2.5 rounded-xl flex items-center gap-4 shadow-lg dark:shadow-zinc-900/50 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm overflow-hidden">
        {/* Plane GIF Background Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/assets/images/plane.gif"
            alt="Plane background"
            fill
            className="object-cover rounded-xl"
            priority={false}
          />
        </div>
        <div className="dock-container relative z-10">
          {navLinks.map((nav) => (
            <div key={nav.id} className="dock-item">
              <InfoTipNav text={nav.name}>
                <a target="_blank" className="dock-icon" href={nav.link}>
                  {<nav.icon className="text-[1.35rem]" />}
                </a>
              </InfoTipNav>
            </div>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-light-border dark:bg-zinc-500 mr-1 rounded-full relative z-10"></div>
        <div
          className="rounded-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-md relative z-10"
          onClick={toggleSwitch}
          onMouseEnter={handleArrowVisibility}
        >
          <Image
            src={isSwitchOn ? kushagraImage : yashImage}
            alt="Profile Picture"
            className="rounded-md"
            width={35}
            height={35}
          />
        </div>
        {isArrowVisible && theme === 'dark' && (
          <div id="arrow" className="absolute -rotate-90 bottom-6 -right-9 bg-zinc-800 dark:bg-transparent rounded-full p-1.5 shadow-lg dark:shadow-zinc-900/50 transition-all duration-300 animate-pulse">
            <Image
              src="/assets/images/gif/arrow.gif"
              alt="arrow"
              className="size-10"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav;