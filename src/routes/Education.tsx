import { EDUCATION_DATA } from "../constants/AppData";

interface Props {}

const Education = ({}: Props) => {
    return (
        <ul className="flex flex-col px-5 gap-5 items-left justify-around w-full h-full  lg:px-10">
            {EDUCATION_DATA.map((uni, idx) => (
                <li key={idx} className="flex flex-col gap-1 pl-3 pt-5 w-fit">
                    <a
                        className="font-textSans w-fit whitespace-nowrap text-xl lg:text-2xl xl:text-3xl text-mainFont transition duration-300 hover:text-mainIconHover"
                        href={uni.majorSite}
                        target="_blank"
                    >
                        {uni.degree} of {uni.major}
                    </a>
                    <p className="font-textSerif text-dataDescription ml-3 lg:text-lg xl:text-xl">{uni.university}</p>
                    <p className="font-textSerif text-dataDescription ml-3 lg:text-lg xl:text-xl">
                        {uni.start} - {uni.finish}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default Education;
