import { AnimatePresence, motion, Variants } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

interface Props {
    animate: boolean;
    animationDirection: Variants;
}

const AnimatedOutlet = ({ animate, animationDirection }: Props) => {
    const outlet = useOutlet();
    const { pathname } = useLocation();

    return (
        <AnimatePresence mode="wait">
            {animate ? (
                <motion.div
                    key={pathname}
                    variants={animationDirection}
                    initial="initial"
                    animate="animate"
                    transition={animationDirection.transition}
                >
                    {outlet}
                </motion.div>
            ) : (
                <>{outlet}</>
            )}
        </AnimatePresence>
    );
};

export default AnimatedOutlet;
