"use client " // This file is a client component in a Next.js application.
import { yashAbout } from "@/data/YashData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { kushagraAbout } from "@/data/KushagraData/data"

const AboutMe = () => {
    const { isSwitchOn } = useSwitch()

    return (
        <section className="flex flex-col gap-0.5">
            <SectionTitle title="Hello There!" />
            <div className="flex flex-col gap-2">
                <div
                dangerouslySetInnerHTML={{
                    __html: isSwitchOn ? kushagraAbout : yashAbout, // Conditionally render content based on the switch state
                }}
                className="flex flex-col gap-1 text-light-text/80 dark:text-mainWhite/80"
                />
            </div>
        </section>
    )
}

export default AboutMe