export const rootSlideUp = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, type: "tween", delay: 0.2 },
};

export const rootSlideDown = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, type: "tween", delay: 0.2 },
};

export const rootStay = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, type: "tween", delay: 0.2 },
};

export const projectSlideLeft = {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
    transition: { type: "tween", duration: 0.5 },
};

export const projectSlideRight = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
    transition: { type: "tween", duration: 0.5 },
};
