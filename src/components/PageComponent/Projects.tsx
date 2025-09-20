"use client"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import ProjectBox from "../ProjectBox"
import { projects } from "../../data/Common/data"

const Projects = () => {
  const { isSwitchOn } = useSwitch()

  // Only show projects in Kushagra mode (isSwitchOn = true)
  if (!isSwitchOn) {
    return null
  }

  return (
    <div id="projects" className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
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
    </div>
  )
}

export default Projects