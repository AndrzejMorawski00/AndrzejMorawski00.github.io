import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { getRootComponentAnimations } from "../utils/utlis";

import AnimatedOutlet from "../components/Wrappers/AnimatedOutlet";

const Root = () => {
    const { pathname, state } = useLocation();
    const { animate, animationDirection } = getRootComponentAnimations(state ? state.prevPath : "", pathname);
    return (
        <div className="flex flex-col flex-grow min-w-screen min-h-screen  bg-backgroundColor">
            <Header />
            <AnimatedOutlet animate={animate} animationDirection={animationDirection} />
        </div>
    );
};

export default Root;
