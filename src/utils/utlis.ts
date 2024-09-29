import { PROJECT_LIST } from "../constants/AppData";
import { HeaderLinks } from "../constants/HeaderData";
import { rootSlideDown, rootSlideUp, rootStay } from "../constants/Animations";
import { ProjectData } from "../types/AppData";

import { Variants } from "framer-motion";

export const modulo = (n: number, d: number): number => {
    return ((n % d) + d) % d;
};

const getPageIndexValues = (splittedPrevPath: string[], splittedCurrPath: string[]): [number, number] => {
    const prevPage = splittedPrevPath[1];
    const currPage = splittedCurrPath[1];

    if (prevPage === currPage && splittedCurrPath[2] !== "") {
        return [-1, 0];
    }
    if (prevPage === currPage) {
        return [1, 1];
    }
    if (prevPage === "") {
        return [-1, 0];
    }
    if (currPage === "") {
        return [0, -1];
    }
    const prevPageIndex = HeaderLinks.findIndex((link) => link.path.includes(prevPage));
    const currPageIndex = HeaderLinks.findIndex((link) => link.path.includes(currPage));
    return [prevPageIndex, currPageIndex];
};

export const determineAnimationDirection = (splittedPrevPath: string[], splittedCurrPath: string[]): number => {
    const [prevPageIndex, currPageIndex] = getPageIndexValues(splittedPrevPath, splittedCurrPath);
    if (prevPageIndex < currPageIndex) {
        return 1;
    } else if (prevPageIndex === currPageIndex) {
        return 0;
    }
    return -1;
};

export const getValidAnimationDirection = (order: number): Variants => {
    switch (order) {
        case -1:
            return rootSlideUp;
        case 1:
            return rootSlideDown;
        default:
            return rootStay;
    }
};

export const getProjects = (
    pathname: string
): [ProjectData, { project: ProjectData; currIdx: number }, ProjectData] => {
    const currProjectPath = pathname.split("/").pop();
    const currProjectIndex = PROJECT_LIST.findIndex((item) => item.path === currProjectPath);
    const prevProject = PROJECT_LIST[modulo(currProjectIndex - 1, PROJECT_LIST.length)];
    const nextProject = PROJECT_LIST[modulo(currProjectIndex + 1, PROJECT_LIST.length)];
    return [
        prevProject,
        { project: PROJECT_LIST[currProjectIndex] || PROJECT_LIST[0], currIdx: currProjectIndex },
        nextProject,
    ];
};

export const getRootComponentAnimations = (
    prevPageData: string,
    currPathData: string
): { animate: boolean; animationDirection: Variants } => {
    if (prevPageData === "") {
        return {
            animate: true,
            animationDirection: rootSlideDown,
        };
    }
    const splittedPrevPath = prevPageData.split("/");
    const splittedCurrPath = currPathData.split("/");
    let animate = false;
    if (
        (splittedCurrPath[2] === PROJECT_LIST[0].path && splittedPrevPath[2] === "") ||
        splittedPrevPath[1] !== splittedCurrPath[1]
    ) {
        animate = true;
    } else {
        animate = false;
    }

    return {
        animate: animate,
        animationDirection: getValidAnimationDirection(determineAnimationDirection(splittedPrevPath, splittedCurrPath)),
    };
};
