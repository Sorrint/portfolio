import { projectsData } from "entities/lib/projectsData"
import { ProjectInfo } from "./projectInfo"
import { ProjectSlider } from "./projectsSlider"

interface ProjectSectionProps {
    project: typeof projectsData[0]
}

export const ProjectSection = ({ project }: ProjectSectionProps) => {
    return <section className="container last:mb-[64px] cursor-default" key={project.id}>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-[20px] gap-[50px]">
            <ProjectInfo project={project} />
            <ProjectSlider project={project} />
        </div>
    </section>
}