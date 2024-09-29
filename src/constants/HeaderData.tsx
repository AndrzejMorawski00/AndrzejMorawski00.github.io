import AboutMe from "../routes/AboutMe";
import Education from "../routes/Education";
import Projects from "../routes/Projects";
import Skills from "../routes/Skills";
import { CVLinkData, HeaderLinkData } from "../types/types";

export const HeaderLinks: HeaderLinkData[] = [
    { name: "Home", path: "/", display: true, element: <></> },
    { name: "About Me", path: "about-me/", display: false, element: <AboutMe /> },
    { name: "Education", path: "education/", display: true, element: <Education /> },
    { name: "Skills", path: "skills/", display: false, element: <Skills /> },
    { name: "Projects", path: "projects/", display: true, element: <Projects /> },
];

export const CVLinks: CVLinkData[] = [
    {
        name: "CV Pl",
        path: "cv/CV_Pl_np.pdf",
    },
    {
        name: "CV Ang",
        path: "cv/CV_Ang_np.pdf",
    },
];
