import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { rootSlideDown } from "../constants/Animations";

interface Props {}

const NotFound404 = ({}: Props) => {
    return (
        <div className="bg-backgroundColor">
            <AnimatePresence mode="wait">
                <motion.div
                    key="errorPage"
                    variants={rootSlideDown}
                    initial="initial"
                    animate="animate"
                    transition={rootSlideDown.transition}
                    className="flex flex-col gap-2 lg:gap-4 xl:gap-6 items-center justify-center h-screen "
                >
                    <TypeAnimation
                        className="font-textSerif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-mainFont tracking-wider"
                        sequence={["", "Someting Went Wrong...", 200]}
                        cursor={false}
                    />
                    <Link
                        className=" text-mainIcon text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wider transition duration-300 hover:text-mainIconHover hover:scale-105"
                        to="/"
                    >
                        Home
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default NotFound404;
