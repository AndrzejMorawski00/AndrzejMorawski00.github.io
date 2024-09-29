import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Props {}

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Home = ({}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center mt-20 pb-10 gap-2 sm:gap-4 lg:gap-5">
            <div className="h-12 lg:h-20 flex items-center justify-center">
                <TypeAnimation
                    className="font-textSerif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-mainFont tracking-wider"
                    sequence={["", "Hi, I'm Andrzej", 200]}
                    cursor={false}
                />
            </div>
            <div className="h-12 lg:h-20 flex items-center justify-center">
                <TypeAnimation
                    className="font-textSerif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-mainFont tracking-wide"
                    sequence={["", 1200, "CS Student"]}
                    cursor={false}
                />
            </div>

            <Link to="about-me/" state={{ prevPath: "about-me" }}>
                <button className="mt-4 text-mainIcon transition duration-300 hover:text-mainIconHover hover:scale-105">
                    <FontAwesomeIcon
                        className="text-inherit w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                        icon={faArrowDown}
                    />
                </button>
            </Link>
        </div>
    );
};

export default Home;
