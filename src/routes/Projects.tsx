import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { PROJECT_LIST } from "../constants/AppData";
import { getProjects } from "../utils/utlis";
import { projectSlideLeft, projectSlideRight } from "../constants/Animations";

interface Props {}

const Projects = ({}: Props) => {
    const [direction, setDirection] = useState<boolean>(true); // left -> false, right -> true
    const { pathname } = useLocation();
    const [prevProject, currProject, nextProject] = getProjects(pathname);
    const handleDirectionChange = (newValue: boolean) => {
        setDirection(newValue);
    };
    const animationDirection = direction ? projectSlideRight : projectSlideLeft;
    return (
        <div className="flex flex-col w-full h-full gap-2">
            <div className="flex justify-between px-5 pt-5">
                <p className="text-xl sm:text-2xl xl:text-3xl text-mainFont font-semibold ml-7">
                    {currProject.project.name}
                </p>
                <p className="text-xl sm:text-2xl xl:text-3xl text-mainFont font-semibold">
                    {currProject.currIdx + 1} / {PROJECT_LIST.length}
                </p>
            </div>
            <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-10 justify-between items-center px-5 mt-5">
                <Link to={prevProject.path} state={{ prevPath: pathname }} onClick={() => handleDirectionChange(false)}>
                    <FontAwesomeIcon
                        className="text-mainFont w-6 h-6 sm:w-10 sm:h-12 lg:w-14 lg:h-16 transition duration-300 hover:text-mainIconHover"
                        icon={faArrowLeft}
                    />
                </Link>
                <div key={pathname}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            variants={animationDirection}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={animationDirection.transition}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <Link to={nextProject.path} state={{ prevPath: pathname }} onClick={() => handleDirectionChange(true)}>
                    <FontAwesomeIcon
                        className="text-mainFont w-6 h-6 sm:w-10 sm:h-12 lg:w-14 lg:h-16 transition duration-300 hover:text-mainIconHover"
                        icon={faArrowRight}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
