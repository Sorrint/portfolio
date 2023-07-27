import { SvgIcon } from "shared/ui/svgIcon"

export const AboutMe = () => (
    <section className="bg-slate-800 min-h-screen flex items-center">
        <div className="container py-[32px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex-grow flex justify-center flex-col items-center">
                    <img src="https://github.com/sorrint.png" className="rounded-full sm:max-w-[350px] sm:max-h-[350px] mb-[16px] border-zinc-300 border-solid border-[3px] z-10" />
                    <div className="flex flex-wrap justify-center gap-[32px] bg-none p-[16px] mb-[32px] lg:mb-0">
                        <a href="https://github.com/Sorrint/" target="_blank" className="rounded-full shadow-lg bg-slate-300 shaddow-gray-400 p-[12px] cursor-pointer hover:scale-110 ease-in duration-300">
                            <SvgIcon iconName='github' svgProp={{ width: 50, height: 50 }} />
                        </a>
                        <a href="https://t.me/Sorrint" target="_blank" className="rounded-full shadow-lg bg-slate-300 shaddow-gray-400 p-[12px] cursor-pointer hover:scale-110 ease-in duration-300">
                            <SvgIcon iconName="telegram" svgProp={{ width: 50, height: 50 }} />
                        </a>
                        <a href="https://vk.com/antonlebedev2018" target="_blank" className="rounded-full shadow-lg bg-slate-300 shaddow-gray-400 p-[12px] cursor-pointer hover:scale-110 ease-in duration-300">
                            <SvgIcon iconName="vk" svgProp={{ width: 50, height: 50 }} />
                        </a>
                    </div>
                </div>
                <aside className=" max-w-[600px] text-[#FFFFFF] text-[18px] md:text-[20px] flex flex-col gap-y-[24px] md:gap-y-[32px] leading-[30px]  md:justify-self-center lg:justify-self-start">
                    <h2 className="text-[32px] md:text-[36px] font-bold mb-[16px]">Добро пожаловать!</h2>
                    <p>Меня зовут Антон, и я рад приветствовать вас на моем портале. Я занимаюсь разработкой Frontend-приложений и хотел бы поделиться с вами моим опытом и достижениями.</p>
                    <p>В конце 2022 года я успешно окончил курсы Frontend-разработчика, которые помогли мне получить все необходимые знания и навыки для создания качественных проектов.</p>
                    <p>Я обожаю создавать проекты и строить их компоновку, и это приносит мне огромное удовольствие. Я считаю, что каждый проект является уникальной возможностью для реализации своих идей и выражения своей креативности.</p>
                    <p>В прошлом году я дважды участвовал в хакатонах в качестве тимлида. В течение двух дней мы разрабатывали небольшие приложения, и это было незабываемым опытом для меня и моей команды. Одно из таких приложений я представил в своем портфолио, так что вы можете ознакомиться с ним и другими моими работами.</p>
                </aside>
            </div>
        </div>
    </section>)
