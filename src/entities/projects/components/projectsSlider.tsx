import type SwiperInstance from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from 'swiper';
import { useState } from "react";
import { projectsData } from 'entities/lib/projectsData';
import 'swiper/css';


interface IProjectInfoProps {
    project: typeof projectsData[0]
}

export const ProjectSlider = ({ project }: IProjectInfoProps) => {
    const [activeExample, setActiveExample] = useState<any>()
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const { images } = project
    const getOrder = (id: number) => {
        return id % 2 === 0 ? "lg:order-1" : "lg:order-2"
    }
    const order = project.id % 2 === 0 ? 1 : 2
    if (!images) return null
    return (
        <div className={`${getOrder(project.id)} w-full items-center`}>
            <div className='relative w-full mb-[24px]'>
                <Swiper
                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                    className="swiper-main block overflow-hidden rounded-[12px]"
                    initialSlide={0}
                    spaceBetween={10}
                    slidesPerView={1}
                    grabCursor={true}
                    thumbs={{ swiper: activeExample }}
                    modules={[Navigation, Thumbs]}>
                    {images.map((example, index) => (
                        <SwiperSlide
                            key={`${example}${index}`}>
                            <img src={`./src/shared/assets/images/${example}.png`} className="w-full h-full object-cover" ></img>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <p className='hidden md:block text-[18px] font-medium'>Предпросмотр</p>
            <div className='hidden md:block md:mb-[24px] lg:mb-0'>
                <Swiper
                    onSwiper={swiper => setActiveExample(swiper)}
                    className="swiper-thumbs block overflow-hidden"
                    initialSlide={0}
                    spaceBetween={10}
                    slidesPerView='auto'
                    grabCursor={true}
                    modules={[Navigation, Thumbs]}>
                    {images.map((example, index) => (
                        <SwiperSlide
                            className="relative flex w-[245px] h-auto flex-col rounded-[12px] "
                            key={`${example}${index}`}>
                            <div className={`${index === activeIndex && 'border-2 border-solid border-indigo-600'} flex flex-1 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[12px] md:w-full`}>
                                <img src={`./src/shared/assets/images/${example}.png`}></img>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="lg:hidden flex flex-wrap lg:max-w-[570px] w-full gap-[8px] mb-[24px] lg:mb-0">
                {project.stack.map((skill) =>
                    <div className="text-center max-w-[110px] w-full py-[8px] bg-[#FEFEFE] rounded-[5px] font-medium" key={skill}>{skill}</div>)}
            </div>
            <div className="gap-x-[64px] justify-center align-middle flex lg:hidden">
                <a target='_blank' href={project.deploy} className='min-w-[110px] p-[16px] font-semibold rounded-[8px] text-center border-2 border-indigo-600 bg-indigo-600 text-[#FFF] border-solid hover:bg-inherit hover:text-[#000]'> Посетить сайт</a>
                <a target='_blank' href={project.repository} className='min-w-[150px] p-[16px] font-semibold rounded-[8px] text-center border-2 border-indigo-600 bg-indigo-600 text-[#FFF] border-solid hover:bg-inherit hover:text-[#000]'>Github</a>
            </div>
        </div>)

}