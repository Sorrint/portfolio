import { AboutMe } from 'widgets/info/components/aboutMe';
import { ProjectsList } from 'widgets/projects';

const MainPage = () => {
    return (
        <div className="bg-[#EFEFEF] min-h-screen font-['Inter'] leading-[1.5] flex flex-col gap-y-[32px] md:gap-y-[64px]">
            <AboutMe />
            <ProjectsList />
        </div>
    );
};

export default MainPage