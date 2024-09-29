import { OTHER_SKILLS, TECH_DATA } from "../constants/AppData";

interface Props {}

const Skills = ({}: Props) => {
    return (
        <div className="flex flex-col px-8 mt-5 gap-5 items-left justify-around w-full h-full lg:flex-row lg:px-10">
            <div className="flex flex-col gap-1 pl-3 lg:max-w-[55%] xl:max-w-[65%] lg:mt-10">
                <h2 className="font-textSerif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl  pb-2 tracking-wider text-mainFont font-semibold underline underline-offset-4">
                    Technologies:
                </h2>
                <ul className="flex flex-wrap  items-center justify-center gap-4 mt-8">
                    {TECH_DATA.map((tech, idx) => (
                        <li key={idx}>
                            <img
                                src={tech.iconPath}
                                alt={tech.name}
                                className="w-[4.5rem] md:w-[5.5rem] p-2  bg-skillIconColor rounded-md transition duration-300 hover:scale-[1.05]"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-1 pl-3 lg:mt-10">
                <h2 className="font-textSerif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl  pb-2 tracking-wider text-mainFont font-semibold underline underline-offset-4">
                    Other Skills:
                </h2>
                <ul className="flex flex-col gap-2 lg:gap-3 text-mainFontColor pb-10 pl-2 mt-8">
                    {OTHER_SKILLS.map((skill, idx) => (
                        <li key={idx} className="inline-flex items-center gap-1">
                            <span className="h-2 w-2 lg:h-3 lg:w-3 bg-mainFont rounded-full mr-2"></span>
                            <p className="text-3xl lg:text-4xl text-mainFont">{skill}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
