import { projectsData } from "../../lib/projectsData"

interface IProjectInfoProps {
    project: typeof projectsData[0]
}

export const ProjectInfo = ({ project }: IProjectInfoProps) => {
    const getOrder = (id: number) => {
        return id % 2 === 0 ? "lg:order-2" : "lg:order-1"
    }
    return (
        <aside className={`${getOrder(project.id)} flex flex-col min-w-[50%] flex-grow justify-center`}>
            <div className="lg:max-w-[80%] lg:pl-[40px]">
                <h3 className="text-[28px] md:text-[32px] font-semibold mb-[16px]">{project.name}</h3>
                <p className="text-[18px] mb-[24px] lg:mb-[16px]">{project.description}</p>
                <div className="hidden lg:flex flex-wrap max-w-[570px] w-full gap-[8px] mb-[24px]">
                    {project.stack.map((skill) =>
                        <div className="text-center max-w-[110px] w-full py-[8px] bg-[#FEFEFE] rounded-[5px] font-medium" key={skill}>{skill}</div>)}
                </div>
                <div className="hidden gap-x-[64px] justify-center align-middle lg:flex">
                    <a target='_blank' href={project.deploy} className='min-w-[110px] p-[16px] font-semibold rounded-[8px] text-center border-2 border-indigo-600 bg-indigo-600 text-[#FFF] border-solid hover:bg-inherit hover:text-[#000]'> Посетить сайт</a>
                    <a target='_blank' href={project.repository} className='min-w-[150px] p-[16px] font-semibold rounded-[8px] text-center border-2 border-indigo-600 bg-indigo-600 text-[#FFF] border-solid hover:bg-inherit hover:text-[#000]'>Github</a>
                </div>
            </div>
        </aside>
    )
}