import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { EducationData, ProjectData, Technology, UserSocialMedia } from "../types/AppData";

export const USER_DESCRIPTION =
    "I am a third-year Computer Science student at the University of Wrocław. I am looking for an internship that will allow me to gain practical knowledge in programming. Currently, I am developing my backend skills by learning Python and the Django framework, while also deepening my frontend knowledge by learning the React library. I am open to new technologies, a fast learner, and eager to face challenges that will improve my skills.";

export const EDUCATION_DATA: EducationData[] = [
    {
        university: "University of Wrocław",
        major: "Computer Science",
        degree: "Engineer",
        start: "10/2020",
        finish: "now",
        majorSite:
            "https://rekrutacja.uni.wroc.pl/kierunek/informatyka-i-stopnia-stacjonarne-licencjackie-i-inzynierskie/",
    },

    {
        university: "Wrocław University of Science and Technology",
        major: "Systems Engineering",
        degree: "Engineer",
        start: "10/2019",
        finish: "06/2020",
        majorSite: "https://rekrutacja.pwr.edu.pl/wyszukiwarka-kierunkow-studiow/inzynieria-systemow/",
    },
];

export const CONTACT_DATA: UserSocialMedia[] = [
    { name: "Github", icon: faGithub, link: "https://github.com/AndrzejMorawski00" },
    {
        name: "LinkedIn",
        icon: faLinkedinIn,
        link: "https://www.linkedin.com/in/andrzej-morawski-2632b2330/",
    },
    { name: "Email", icon: faEnvelope, link: "mailto: andrzejmorawski12@gmail.com" },
];

export const TECH_DATA: Technology[] = [
    { iconPath: "/icons/techs/python.svg", name: "Python" },
    { iconPath: "/icons/techs/django.svg", name: "Django" },
    { iconPath: "/icons/techs/qt.svg", name: "Qt for Python" },
    { iconPath: "/icons/techs/drf.svg", name: "Django REST Framework" },
    { iconPath: "/icons/techs/html.svg", name: "HTML" },
    { iconPath: "/icons/techs/css3.svg", name: "CSS3" },
    { iconPath: "/icons/techs/js.svg", name: "JS" },
    { iconPath: "/icons/techs/ts.svg", name: "TS" },
    { iconPath: "/icons/techs/react.svg", name: "React" },
    { iconPath: "/icons/techs/tailwind.svg", name: "Tailwind CSS" },
    { iconPath: "/icons/techs/git.svg", name: "Git/Github" },
    { iconPath: "/icons/techs/linux.svg", name: "Linux" },
    { iconPath: "/icons/techs/cpp.svg", name: "C++" },
];

export const OTHER_SKILLS: string[] = ['DS&Algorithms',"OOP", "Design Patterns", "Open minded", 'Fast Lerner'];

export const PROJECT_LIST: ProjectData[] = [
    {
        id: 1,
        name: "System Zapisów",
        path: "system-zapisow",
        description:
            "It is a frontend application that helps Computer Science students at the University of Wrocław plan their course of study. It fetches data from the SystemZapisowAPI, allowing the creation of alternative schedules by assigning courses to specific semesters, which helps better organise the study program.",
        repoLink: "https://github.com/AndrzejMorawski00/SystemZapisow",
        techStack: ["TS", "React", "Tailwind", "RadixUI", "TanStack Query", "Drag&Drop", "Azure Deployment"],
    },
    {
        id: 2,
        name: "System Zapisów API",
        path: "system-zapisow-api",
        description:
            "The application retrieves and manages data from the university enrollment system. It acts as an API for the SystemZapisow frontend application, where users can plan their degree course. It allows data modification and stores information about courses and plans created by users.",
        repoLink: "https://github.com/AndrzejMorawski00/SystemZapisowAPI",
        techStack: ["Python", "Django", "DRF", "BS4", "Azure Deployment"],
    },
    {
        id: 3,
        name: "PathFinder",
        path: "pathfinder",
        description:
            "Simple app, which goal was implementation of pathfinding algorithms between two points such as BFS, Dijkstra and A* with visualisation of their performance. To write these algorithms I used my own implementations of stack and priority queue.",
        repoLink: "https://github.com/AndrzejMorawski00/PathFinder",
        livePreview: "https://andrzejmorawski00.github.io/PathFinder/",
        techStack: ["TS", "React", "Tailwind", "RadixUI"],
    },
    {
        id: 4,
        name: "TanStack Library",
        path: "tanstack-library",
        description:
            "An application developed as a part of the React course I attended, aimed at learning how to use TanStack Query library. Additionally, I utilized other technologies available within the Tanstack library.",
        repoLink: "https://github.com/AndrzejMorawski00/TanStack-Library",
        livePreview: "https://andrzejmorawski00.github.io/TanStack-Library/",
        techStack: ["TS", "React", "Tailwind", "TanStack Query/Table/Form"],
    },
    {
        id: 5,
        name: "TreeApp",
        path: "tree-app",
        description:
            "TreeApp is an implementation of a university project, aimed at creating a desktop application containing a simple user registry. The main objective of this task was to implement the application using the EventAggregator pattern for easy event management.",
        repoLink: "https://github.com/AndrzejMorawski00/TreeApp",
        techStack: ["Python", "Qt6", "OOP", "EventAggregator pattern"],
    },
    {
        id: 7,
        name: "Traceroute",
        path: "traceroute",
        description:
            "Implementation of a program executing the traceroute command, developed as part of the Computer Networks course. The program traces the path packets take from the source computer to the destination, providing insight into the routing process.",
        repoLink: "https://github.com/AndrzejMorawski00/Traceroute",
        techStack: ["C++"],
    },
];
