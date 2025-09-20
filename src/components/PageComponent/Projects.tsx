"use client"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import ProjectBox from "../ProjectBox"
import { projects } from "../../data/Common/data"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"

const Projects = () => {
  const { isSwitchOn } = useSwitch()
  const showAllVis = projects.length > 3
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  // Only show projects in Kushagra mode (isSwitchOn = true)
  if (!isSwitchOn) {
    return null
  }

  return (
    <div id="projects" className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-4">
        {visibleProjects.map((project) => (
          <ProjectBox
            key={project.id}
            img={project.img}
            status={project.status}
            title={project.title}
            content={project.content}
            url={project.url}
            github={project.github}
            skill={project.skill}
            preview={project.preview}
          />
        ))}
      </div>
      <div>
        {showAllVis && (
          <button
            className="showMore-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <div className="flex gap-0.5 justify-center items-center">
                <div className="animate-pulse">
                  <MdKeyboardDoubleArrowUp />
                </div>
                Show less
              </div>
            ) : (
              <div className="flex gap-0.5 justify-center items-center">
                <div className="animate-pulse">
                  <MdKeyboardDoubleArrowDown />
                </div>
                Show all
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Projects