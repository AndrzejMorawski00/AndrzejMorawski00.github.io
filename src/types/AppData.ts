import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type EducationData = {
    university: string;
    major: string;
    degree: string;
    start: string;
    finish: string;
    majorSite: string;
};

export type UserSocialMedia = {
    name: string;
    icon: IconDefinition;
    link: string;
};

export type Technology = {
    iconPath: string;
    name: string;
};

export type ProjectData = {
    id: number;
    name: string;
    path: string;
    description: string;
    repoLink: string;
    livePreview?: string;
    techStack: string[];
};
