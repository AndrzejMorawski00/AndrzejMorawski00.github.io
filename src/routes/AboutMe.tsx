import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_DATA, USER_DESCRIPTION } from "../constants/AppData";

interface Props {}

const AboutMe = ({}: Props) => {
    return (
        <div className="flex flex-col px-5 mt-5 gap-5 items-left justify-around w-full xl:flex-row lg:px-10 lg:mt-5">
            <div className="flex flex-col gap-1 pl-3 lg:max-w-[55%] xl:max-w-[65%] lg:mt-10">
                <h2 className="font-textSerif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl  pb-2 tracking-wider text-mainFont font-semibold underline underline-offset-4">
                    About Me:
                </h2>
                <p className="font-textSans text-mainFont text-xl lg:text-2xl pt-5 pl-2">
                    {USER_DESCRIPTION}
                </p>
            </div>

            <div className="flex flex-col gap-1 pl-3 lg:mt-10">
                <h2 className="font-textSerif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl pb-2 tracking-wider text-mainFont font-semibold underline underline-offset-4">
                    Contact:
                </h2>
                <ul className="flex flex-col pt-5 gap-2 lg:gap-3 text-mainFontColor pb-10 pl-2">
                    {CONTACT_DATA.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.link}
                                target="_blank"
                                className="text-mainFont transition duration-300 hover:text-mainIconHover"
                            >
                                <FontAwesomeIcon className="text-3xl lg:text-4xl " icon={item.icon} />
                                <span className="font-textSans  ml-3 text-2xl lg:text-3xl pt-5 max-w-[50vw] ">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
