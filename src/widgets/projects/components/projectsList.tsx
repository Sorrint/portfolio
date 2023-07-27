
import { ProjectSection } from "entities/projects";
import { projectsData } from "entities/lib/projectsData";

export const ProjectsList = () => {
    if (!projectsData) return null

    return (
        <>
            {projectsData.map(project =>
                <ProjectSection project={project} />
            )}
        </>)
}