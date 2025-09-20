"use client"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"

const Projects = () => {
  const { isSwitchOn } = useSwitch()

  // Only show projects in Kushagra mode (isSwitchOn = true)
  if (!isSwitchOn) {
    return null
  }

  return (
    <div id="projects" className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className="bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-700 rounded-md p-8 text-center">
        <h3 className="text-xl font-semibold text-light-text dark:text-mainWhite mb-2">
          Projects Coming Soon
        </h3>
        <p className="text-light-text dark:text-mainWhite opacity-80">
          Exciting projects are in development. Stay tuned!
        </p>
      </div>
    </div>
  )
}

export default Projects